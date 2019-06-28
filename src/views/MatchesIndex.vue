<template>
  <div class="matches-index">
    <h1>Matches: </h1>
    <div v-for="match in matches">
      <h2>Match's User ID: {{ match.id }}</h2>
      <h2>Name: {{ match.first_name }}</h2>
      <h2>Age: {{ match.age }}</h2>
      <h2>Shared Hangouts: </h2>
 <!--        <ol v-for: hangout in match.common_hangouts>
          <router-link to="/hangouts/:id">{{ match.common_hangouts[0]["name"] }}</router-link>
          <li>Name: {{ match.common_hangouts[0]["name"] }}</li>
          <li>Address: {{ match.common_hangouts[0]["address"] }}</li>


        </ol>   -->
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
      matches: [],
      hangouts: []
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