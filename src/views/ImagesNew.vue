<template>
  <div class="images-new">
    <form v-on:submit.prevent="submit()">
      <div>
        <select v-model="user.id">
          <option v-bind:value="user.id">User ID: {{ user.id }} 3</option>
        </select>

      </div>
      <div>
        File: <input type="file" v-on:change="setFile($event)" ref="fileInput">
      </div>
      <input type="submit" value="Submit">
    </form>

    <div v-for="image in images">
      <h2>{{ image.file }}</h2>
      <img v-bind:src="image.file" alt="">
    </div>
  </div>
</template>

<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      user: {},

      images: [],
      newName: "",
      image: ""
    };
  },
  created: function() {
    axios
      .get("/api/users/" + this.$route.params.id)
      .then(response => {
        this.user = response.data;
      });
    axios
      .get("http://localhost:3000/images")
      .then(response => {
        this.images = response.data;
      });
  },
  methods: {
    setFile: function(event) {
      if (event.target.files.length > 0) {
        this.image = event.target.files[0];
      }
    },
    submit: function() {
      var params = new FormData();
      params.append("user_id", this.newUserId);
      params.append("file", this.image);

      axios
        .post("http://localhost:3000/images", params)
        .then(response => {
          this.newUserId = "";
          this.image = "";
          this.$refs.fileInput.value = "";
          this.images = response.data;
        });
    }
  }
}
</script>
