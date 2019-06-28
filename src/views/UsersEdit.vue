<template>
  <div class="container">
    <h1>Edit Profile</h1>
      Username: <input type="text" v-model="user.username">
      First Name: <input type="text" v-model="user.width">
      <button v-on:click="updateUser(user)">Update Profile</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      users: [],
      currentUser: {},
    };
  },
  created: function() {
    axios.get("/api/users").then(response => {
      this.users = response.data;
    });
  },
  methods: {
    showUser: function(user) {
      if (this.currentUser === user) {
        this.currentUser = {};
      } else {
        this.currentUser = user;
      }
    },
    updateUser: function(user) {
      var params = {
        username: user.username,
        first_name: user.firstName,
        height: user.height
      };
      axios
        .patch("/api/users/" + user.id, params)
        .then(response => {
          this.currentUser = {};
      });
    }
  }
};
</script>
