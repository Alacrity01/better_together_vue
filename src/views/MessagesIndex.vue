<template>
  <div class="messages-index">
    <h1></h1>
    <div>
      <h1>New Message</h1>
       <form v-on:submit.prevent="createMessage()">
        <div class="form-group">
          <input class="form-control" type="text" v-model="newMessageBody"></input>
        </div>
         <input class="btn btn-primary" type="submit" value="Create Message">
       </form>
    </div>

    <div>
      <div v-for="message in messages">
        <div id="time">
          <p><strong>{{ message.name }}</strong> : {{ message.body }}</p>
          <p>{{ message.created_at }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
import ActionCable from 'actioncable';

export default {
  data: function() {
    return {
            messages: [],
            newMessageBody: ""      
    };
  },
  created: function() {
    axios
      .get("/api/messages?recipient_id=" + this.$route.params.id)
      .then(response => {
        this.messages = response.data;
      });   

      console.log("test line 1 reached");
    var cable = ActionCable.createConsumer("ws://localhost:3000/cable");
      console.log("test line 2 reached");

    cable.subscriptions.create("MessagesChannel", {
      connected: () => {
        console.log("Connected to API");
      },
      disconnected: () => {
        console.log("Disconnected from API");
      },
      received: data => {
        console.log("API is talking", data);
        this.messages.unshift(data);
      }
    })
      console.log("test line 3 reached");
  },
  methods: {
    createMessage: function() {
      var params = {
        body: this.newMessageBody,
        recipient_id: this.$route.params.id
      };

      axios.post("/api/messages", params).then(response => {
        this.newMessageBody = "";
        this.messages.unshift(response.data);// (do this with ActionCable instead)  
      });
    }
  }
};
</script>