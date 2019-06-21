<template>
  <div class="home">
    <h1>All Users</h1>
    <div v-for="user in users">
      <h2>{{ user.first_name }}</h2>
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