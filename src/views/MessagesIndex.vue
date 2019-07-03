<template>
  <div class="messages-index">
    <h1></h1>
    <div>
      <textarea v-model="newMessageBody"></textarea>
      <button v-on:click="createMessage()">Create Message</button>
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
import ActionCable from "actioncable";

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
    
    var cable = ActionCable.createConsumer("ws://localhost:3000/cable");
    cable.subscriptions.create("MessagesChannel", {
      connected: () => {
        // Called when the subscription is ready for use on the server
        console.log("Connected to MessagesChannel");
      },
      disconnected: () => {
        // Called when the subscription has been terminated by the server
      },
      received: data => {
        // Called when there's incoming data on the websocket for this channel
        console.log("Data from MessagesChannel:", data);
        this.messages.unshift(data); // update the messages in real time
      }
    });
  },
  methods: {
    createMessage: function() {
      var params = {
        body: this.newMessageBody,
        recipient_id: this.$route.params.id
      };
      axios.post("/api/messages", params).then(response => {
        this.newMessageBody = "";
        // this.messages.unshift(response.data); (do this with ActionCable instead)
      });
    }
  }
};
</script>