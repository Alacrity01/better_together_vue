<template>
  <div class="hangouts-show">

    <div>
      <h3>Name: {{ hangout.name }}</h3>
    </div>

    <div>
      <h3>Address: {{ hangout.address }}</h3>
    </div>
  </div>
</template>

<style>
</style>

<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      hangout: {},
    };
  },
  created: function() {
    axios
      .get("/api/hangouts/" + this.$route.params.id)
      .then(response => {
        this.hangout = response.data;
      });

  },
  methods: {

  },
};
</script>