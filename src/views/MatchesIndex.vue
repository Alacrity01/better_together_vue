<template>
  <div class="matches-index">
    <h1>Matches: </h1>
    <div v-for="match in matches">
      <h2>Date Matched: {{ match.id }}</h2>
      <h2>{{ match.name }}</h2>
      <h2>{{ match.age }}</h2>
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