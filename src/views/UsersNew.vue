<template>
  <div class="container">
    <h1>New User</h1>
    <div>
      Username: <input type="text" v-model="newUserUsername">
      Email: <input type="text" v-model="newUserEmail">
      First Name: <input type="text" v-model="newUserFirstName">
      About: <input type="text" v-model="newUserAbout">
      Age: <input type="text" v-model="newUserAge">
      Gender: <input type="text" v-model="newUserGender">
      Looking For (Gender): <input type="text" v-model="newUserLookingForGender">
      Looking For (Friendship/Romance): <input type="text" v-model="newUserLookingForRole">
      Password: <input type="text" v-model="newUserPassword">
      Password Confirmation: <input type="text" v-model="newUserPasswordConfirmation">

      <button v-on:click="createUser()">Create User</button>
    </div>
    <h1>All Users</h1>
    <div v-for="user in users">
      <h2>{{ user.name }}</h2>
      <img v-bind:src="user.url">
      <p>Width: {{ user.width }}</p>
      <p>Height: {{ user.height }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      users: [],
      newUserUsername: "",
      newUserEmail: "",
      newUserFirstName: "",
      newUserAbout: "",
      newUserAge: "",
      newUserGender: "",
      newUserLookingForGender: "",
      newUserLookingForRole: "",
      newUserPassword: "",
      newUserPasswordConfirmation: ""
    };
  },
  created: function() {
    axios.get("/api/users").then(response => {
      this.users = response.data;