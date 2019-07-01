<template>
  <div class="images-new">
    <form v-on:submit.prevent="submit()">
      <div>
        Image: <input type="file" v-on:change="setFile($event)" ref="fileInput">
      </div>
      <input type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      currentUserId: "",
      images: [],
      file: ""
    };

  },
  created: function() {
    this.currentUserId = localStorage.getItem("user_id");
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
    submit: function() {
      var params = new FormData();
      params.append("user_id", this.currentUserId);
      params.append("file", this.file);

      axios
        .post("http://localhost:3000/api/images", params)
        .then(response => {
          this.$router.push("/users/" + this.currentUserId + "/profile");
        });
    }
  }
}
</script>
