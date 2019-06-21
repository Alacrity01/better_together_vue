<template>
  <div class="home">
    <h1>All Users</h1>
    <div v-for="user in users">
      <h2>{{ user.name }}</h2>
      <img v-bind:src="user.url">
      <p>Width: {{ user.width }}</p>
      <p>Height: {{ user.height }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      users: []
    };
  },
  created: function() {
    axios.get("/api/users").then(response => {
      this.users = response.data;
    });
  },
  methods: {}
};
</script>