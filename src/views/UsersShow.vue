<template>
  <div class="users-show">

    <div>
      <h3>Username: {{ user.username }}</h3>
    </div>

    <div>
      <h3>First Name: {{ user.first_name }}</h3>
    </div>

    <div>
      <h3>Age: {{ user.age }}</h3>
    </div>

    <div>
      <h3>Gender: {{ user.gender }}</h3>
    </div>

    <div>
      <h3>Looking To Meet: {{ user.looking_for_gender }}'s for {{ user.looking_for_role }}</h3>
    </div>

    <div>
      <h3>About: {{ user.about }}</h3>
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
      user: {},
    };
  },
  created: function() {
    axios
      .get("/api/users/" + this.$route.params.id)
      .then(response => {
        this.user = response.data;
      });

  },
  methods: {

  },
};
</script>