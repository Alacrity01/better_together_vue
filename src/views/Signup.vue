<template>
<!--   <div class="signup">
    <div class="container"> -->
<!--       <form v-on:submit.prevent="submit()">
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
      </form> -->
<!--     </div>
  </div> -->

    <section id="signup" class="">
      <div class="container">
          <div class="row justify-content-center mb-5">
              <div class="col-lg-7 text-center">
                  <h3 class="font-alt letter-spacing-3 mb-0 text-extra-large-2 text-uppercase text-yellow">Signup</h3>
                  <p class="font-w-700 letter-spacing-1 text-gray-600 text-medium text-uppercase bg-light rounded">Because a fun time is always  <img src="img/logo.png" alt=""/>
                  </p>
                  <span class="bg-pink mt-1 mx-auto sep-line-medium-thick"></span>
              </div>
          </div>
          
          <div class="row">
              <div class="col-lg-3">
                  <div class="pr-lg-5">
                  </div>
              </div>
              
              <div class="col-lg-6 mt-5 mt-lg-0">
                  <form v-on:submit.prevent="submit()">
                      <div class="form-group">
                          <input type="email" v-model="email" id="email" class="form-control form-control-purple" placeholder="Your email" autocomplete="off">
                      </div>
                      <!-- //.form-group -->
                      <div class="form-group">
                          <input type="password" v-model="password" id="password" class="form-control form-control-purple" placeholder="Password" autocomplete="off">
                      </div>
                      <div class="form-group">
                          <input type="password" v-model="passwordConfirmation" id="password" class="form-control form-control-purple" placeholder="Password Confirmation" autocomplete="off">
                      </div>

                      <div class="form-group">
                          <input type="username" v-model="username" id="username" class="form-control form-control-purple" placeholder="Username" autocomplete="off">
                      </div>

                      <div class="form-group">
                          <input type="first_name" v-model="firstName" class="form-control form-control-purple" placeholder="First Name" autocomplete="off">
                      </div>

                      <div class="form-group">
                          <input type="number" v-model="age" class="form-control form-control-purple" placeholder="Age" autocomplete="off">
                      </div>
                      <div class="form-group">   
                      </div>
                      <button type="submit" class="btn btn-purple btn-small mt-1 shadow" value="Submit">Submit<i class="fas fa-paper-plane"></i></button>
                  </form>
              </div>
              <!-- //.col-lg-7 -->
          </div>
          <!-- //.row -->
        </div>
        <!-- //.container -->
      </div>
    </section>
  <!-- //Section - Login End -->
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
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
        username: this.username,
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