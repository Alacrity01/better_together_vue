<template>
  <div class="container">
    <h1>Edit Profile</h1>
    <div>Age: <input type="number" v-model="user.age"></div>

    <div>
      Gender: <select v-model="user.gender">
        <option value="prefer_not_to_say">Prefer not to say</option>
        <option value="men">Men</option>
        <option value="women">Women</option>
      </select>
    </div>

    <div>
      Looking For (Gender): <select v-model="user.looking_for_gender">
        <option value="both_men_and_women">No preference</option>
        <option value="men">Men</option>
        <option value="women">Women</option>
      </select>
    </div>

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
    <div>Image: <input type="file" v-on:change="setFile($event)" ref="fileInput"></div>

    <button v-on:click="updateUser(user)">Update Profile</button>
  </div>
</template>

<script>
import Vue2Filters from 'vue2-filters';
var axios = require('axios');

export default {
  data: function() {
    return {
      user: {},
      currentUserId: "",
      images: [],
      file: ""
    };
  },
  created: function() {
    this.currentUserId = localStorage.getItem("user_id");
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
    setFile: function(event) {
      if (event.target.files.length > 0) {
        this.file = event.target.files[0];
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

      var imageParams = new FormData();
      imageParams.append("user_id", this.currentUserId);
      imageParams.append("file", this.file);

      // axios
      //   .post("http://localhost:3000/api/images", imageParams)
      //   .then(response => {
      //     this.$router.push("/users/" + this.currentUserId + "/profile");
      //   });

      axios
        .post("http://localhost:3000/api/images", imageParams)
        axios
          .patch("/api/users/" + user.id, params)        
          .then(response => {
            this.currentUser = {};
            this.$router.push(`/users/${user.id}/profile`);
          axios
            .get("/api/users/" + this.$route.params.id)
            .then(response => {
              this.user = response.data;
            });
      });
    }
  }
};
</script>
