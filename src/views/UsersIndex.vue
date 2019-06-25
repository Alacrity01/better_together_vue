<template>
  <div class="users-index">
    <h1>Search Results:</h1>
    
    <div v-for="user in users">
      <h2>User ID: {{  }}</h2>
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
      users: [],
      results: []
    };
  },
  created: function() {
    axios.get("/api/users?by_user=true&limit=10").then(response => {
      this.users = response.data;
    });
  },
  methods: {

  }
};
</script>