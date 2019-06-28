<template>
  <div class="users-profile">

    <router-link class="btn btn-success m-1" v-bind:to="'/users/' + user.id + '/edit'">Edit Profile</router-link>
    
    <h3>Hangout New Form</h3>
    <form v-on:submit.prevent="submit()">
      <div>
        Name: <input v-model="hangoutName" list="hangout-names">
        <datalist id="hangout-names">
          <option v-for="hangout in filterBy(hangouts, hangoutName, 'name')">{{hangout.name}}</option>
        </datalist>
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
      <h3>Looking To Meet: {{ user.looking_for_gender }} for {{ user.looking_for_role }}</h3>
    </div>

    <div>
      <h3>About: {{ user.about }}</h3>
    </div>
    <div>
      <router-link to="/users">See Search Results</router-link>
    </div>


    <div>
      <h3>My Hangouts:</h3>
      <ol>
        <li v-for="hangout in user.hangouts">{{ hangout.name }}</li>      
      </ol>
    </div>

  </div>
</template>

<style>

</style>

<script>
import Vue2Filters from 'vue2-filters';
var axios = require('axios');

export default {
  data: function() {
    return {
      hangoutName: "",
      hangoutAddress: "",
      hangoutCategoryId: "",
      categories: [],
      user: {},
      hangouts: [],
      hangoutsFilter: ""
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

    axios
      .get("/api/hangouts")
      .then(response => {
        this.hangouts = response.data;
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
  },
  mixins: [Vue2Filters.mixin]
};
</script>