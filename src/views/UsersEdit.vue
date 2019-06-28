<template>
  <div class="container">
    <h1>Edit Profile</h1>
    <div>Age: <input type="number" v-model="user.age"></div>

    <!-- <div>Gender:<input type="text" v-model="user.gender"></div> -->
    <div>
      Gender: <select v-model="user.gender">
        <option value="prefer_not_to_say">Prefer not to say</option>
        <option value="men">Men</option>
        <option value="women">Women</option>
      </select>
    </div>

    <!-- <div>Looking For (Gender): <input type="text" v-model="user.looking_for_gender"></div> -->
    <div>
      Looking For (Gender): <select v-model="user.looking_for_gender">
        <option value="both_men_and_women">No preference</option>
        <option value="men">Men</option>
        <option value="women">Women</option>
      </select>
    </div>

    <!-- <div>Looking For (Romance/Friends): <input type="text" v-model="user.looking_for_role"></div> -->
    <div>
      Looking For (Romance/Friendship): <select v-model="user.looking_for_role">
        <option value="both_friendship_and_romance">Both Friendship and Romance</option>
        <option value="romance">Romance</option>
        <option value="friendship">Friendship</option>        
      </select>
    </div>
    <div>First Name: <input type="text" v-model="user.first_name"></div>
    <div>Username: <input type="text" v-model="user.username"></div>
    <div>About: <textarea rows="4" cols="50" v-model="user.about"></textarea></div>
    <button v-on:click="updateUser(user)">Update Profile</button>
  </div>
</template>

<script>
import Vue2Filters from 'vue2-filters';
var axios = require('axios');
// var jwt = localStorage.getItem("jwt");
// if (jwt) {
//   axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
// }
// var user_id = localStorage.getItem("jwt");

export default {
  data: function() {
    return {
      user: {}
    };
  },
  created: function() {
    axios
      .get("/api/users/" + this.$route.params.id)
      .then(response => {
        this.user = response.data;
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
        first_name: user.first_name,
        age: user.age,
        gender: user.gender,
        looking_for_role: user.looking_for_role,
        looking_for_gender: user.looking_for_gender,
        about: user.about    
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
