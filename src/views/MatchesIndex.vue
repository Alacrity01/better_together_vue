<template>
  <div class="matches-index">
    <h1>Matches: </h1>
    <div v-for="match in matches">
      <h2>Match's User ID: {{ match.id }}</h2>
      <h2>Name: {{ match.first_name }}</h2>
      <h2>Age: {{ match.age }}</h2>
      <!-- <h2>Date Matched: {{ match.friendly_updated_at }}</h2> -->
      <!-- <h2>Date Matched: {{ match.name }}</h2> -->
      <!-- <h2>Age: {{ user.age }}</h2> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      matches: []
    };
  },
  created: function() {
    axios.get("/api/matches").then(response => {
      this.matches = response.data;
    });
  },
  methods: {

  }
};
</script>