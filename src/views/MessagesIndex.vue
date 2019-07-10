<template>
<!--   <div class="messages-index">
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
  </div> -->
  <!-- Section - Contact Start -->
  <section class="messages-index">
      <div class="container">
          <div class="row justify-content-center mb-5">
              <div class="col-lg-7 text-center">
                  <h3 class="font-alt letter-spacing-3 mb-0 text-extra-large-2 text-uppercase text-green">Message Thread</h3>
                  <span class="bg-pink mt-1 mx-auto sep-line-medium-thick"></span>
              </div>
              <!-- //.col-lg-7 -->
          </div>
          <!-- //.row -->
          
          <div class="row">
              <div class="col-lg-6">
                  <div v-for="message in messages">
                    <h4 
                      class="font-alt letter-spacing-1 mb-0"
                    >
                      <strong 
                        class="text-medium text-uppercase" 
                        v-bind:class="{'text-pink': currentUserId == message.sender_id, 'text-green': currentUserId != message.sender_id }"
                      >
                        {{ message.name }}
                      </strong>
                    </h4>
                    <h4 class="text-yellow text-medium"> {{ message.body }}</h4>
                    <p class="text-white text-small text-right">{{ message.created_at }}</p>
                  </div>
                  <!-- //.pr-lg-5 -->
              </div>
              <!-- //.col-lg-5 -->
              
              <div class="col-lg-6 mt-5 mt-lg-0 ">
                  <form v-on:submit.prevent="createMessage()" class="bg-pink p-4 rounded mt-5">
                    <div class="form-group">

                      <input class="form-control form-control-purple required" placeholder="Write a Message" v-model="newMessageBody"></input>
                    </div>
                      <!-- //.form-group -->

                    <button type="submit" class="btn btn-purple btn-small mt-1 shadow">Send Message <i class="fas fa-paper-plane"></i></button>
                  </form>
              </div>
              <!-- //.col-lg-7 -->
          </div>
          <!-- //.row -->
      </div>
      <!-- //.container -->
  </section>
  <!-- //Section - Contact End -->
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
            newMessageBody: "",
            currentUserId: 0   
    };
  },
  created: function() {
    this.currentUserId = localStorage.getItem("user_id");
    axios
      .get("/api/messages?recipient_id=" + this.$route.params.id)
      .then(response => {
        this.messages = response.data;
      });

    var cable = ActionCable.createConsumer("ws://localhost:3000/cable");
    cable.subscriptions.create("MessagesChannel", {
      connected: () => {
        console.log("connected to websocket");
      },
      disconnected: () => {

      },
      received: data => {
        console.log("test line 1 reached");
          console.log(data);
        if (data.recipient_id == this.currentUserId) {
          this.messages.unshift(data);
        }
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
        this.messages.unshift(response.data);// (do this with ActionCable instead)  
      }).catch(errors => {
        console.log(errors);
      });
    }
  }
};
</script>