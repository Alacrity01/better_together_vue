<template>
  <div class="images-new">
    <form v-on:submit.prevent="submit()">
      <div>
        User ID: <input v-model="newUserId">
      </div>
      <div>
        File: <input type="file" v-on:change="setFile($event)" ref="fileInput">
      </div>
      <input type="submit" value="Go">
    </form>

    <div v-for="image in images">
      <h2>{{ image.name }}</h2>
      <img v-bind:src="image.file" alt="">
    </div>
  </div>
</template>

<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      images: [],
      newName: "",
      image: ""
    };
  },
  created: function() {
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
      params.append("name", this.newName);
      params.append("file", this.image);

      axios
        .post("http://localhost:3000/images", params)
        .then(response => {
          this.newName = "";
          this.image = "";
          this.$refs.fileInput.value = "";
          this.images = response.data;
        });
    }
  }
}
</script>
