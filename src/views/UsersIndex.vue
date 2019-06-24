<template>
  <div class="home">
    <a href="/signup">Signup</a>
    <a href="/login">Login</a>
    <a href="/logout">Logout</a>
    <h1>All Users</h1>
    <div v-for="user in users">
      <h2>User ID: {{ user.id }}</h2>
      <h2>Username: {{ user.username }}</h2>
      <h2>Email: {{ user.email }}</h2>
      <h2>First Name: {{ user.first_name }}</h2>
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