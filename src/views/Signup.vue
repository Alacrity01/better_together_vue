<template>
  <div class="signup">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Signup</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>

        <div class="form-group">
          <label>Username:</label> 
          <input type="text" class="form-control" v-model="name">
        </div>

        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="email">
        </div>

        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password">
        </div>

        <div class="form-group">
          <label>Password confirmation:</label>
          <input type="password" class="form-control" v-model="passwordConfirmation">
        </div>

        <div class="form-group">
          <label>First Name:</label>
          <input type="text" class="form-control" v-model="firstName">
        </div>

        <div class="form-group">
          <label>Age:</label>
          <input type="text" class="form-control" v-model="age">
        </div>

        <div class="form-group">
          <label>About:</label>
          <input type="text" class="form-control" v-model="about">
        </div>

        <div class="form-group">
          <label>Looking for (romance/friendship):</label>
          <input type="text" class="form-control" v-model="lookingForRole">
        </div>

        <div class="form-group">
          <label>Looking for (male/female):</label>
          <input type="text" class="form-control" v-model="lookingForGender">
        </div>


        <input type="submit" class="btn btn-primary" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      name: "",
      email: "",
      password: "",
      firstName: "",
      about: "",
      age: "",
      lookingForRole: "",
      lookingForGender: "",

      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation,
        username: this.username,
        first_name: this.firstName,
        age: this.age,
        gender: this.gender,
        about: this.about,
        looking_for_role: this.lookingForRole,
        looking_for_gender: this.lookingForGender
      };
      axios
        .post("/api/users", params)
        .then(response => {
          this.$router.push("/login");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>