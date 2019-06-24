<template>
  <div class="users-profile">
    <h2>Hangout New Form</h2>
    <form v-on:submit.prevent="submit()">
      <div>
        Name: <input v-model="hangoutName">
      </div>
      <div>
        Address: <input v-model="hangoutAddress">
      </div>
      <div>
        Category: <select v-model="hangoutCategoryId">
                    <option v-for="category in categories" v-bind:value="category.id">{{ category.name }}</option>
                  </select>
      </div>
      <input type="submit" value="Create Hangout">
    </form>

    <div>
      <h2>My Hangouts</h2>

      <p v-for="hangout in user.hangouts">{{ hangout.name }}</p>
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
      hangoutName: "",
      hangoutAddress: "",
      hangoutCategoryId: "",
      categories: [],
      user: {}
    };
  },
  created: function() {
    axios
      .get("/api/users/" + this.$route.params.id)
      .then(response => {
        this.user = response.data;
      });

    axios
      .get("/api/categories")
      .then(response => {
        this.categories = response.data;
      });
  },
  methods: {
    submit: function() {
      var paramsHash = {
                        name: this.hangoutName,
                        address: this.hangoutAddress,
                        category_id: this.hangoutCategoryId
                        };

      console.log(paramsHash);

      axios
        .post("/api/hangouts", paramsHash)
        .then(response => {
          this.user.hangouts.push(response.data);
          this.hangoutName = "";
          this.hangoutAddress = "";
          this.hangoutCategoryId = "";
        });
    }
  }
};
</script>