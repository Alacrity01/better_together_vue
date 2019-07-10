<template>
<!-- //Section - Login Begin -->
  <section id="contact" class="">
    <div class="container">
        <div class="row justify-content-center mb-5">
            <div class="col-lg-7 text-center">
                <h3 class="font-alt letter-spacing-3 mb-0 text-extra-large-2 text-uppercase text-yellow">Login</h3>
                <p class="font-w-700 letter-spacing-1 text-gray-600 text-medium text-uppercase bg-white rounded">Because a fun time is always  <img src="img/logo.png" alt=""/>
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
                        <input type="password" v-model="password" id="password" class="form-control form-control-purple" placeholder="Your Password" autocomplete="off">
                    </div>
                    <button type="submit" class="btn btn-purple btn-small mt-1 shadow" value="Submit">Submit <i class="fas fa-paper-plane"></i></button>
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
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password
      };
      axios
        .post("/api/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          this.$parent.currentUserId = response.data.user_id;

          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("user_id", response.data.user_id);
          
          this.$router.push(`/users/${response.data.user_id}/profile`);
        })
        .catch(error => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    }
  }
};
</script>
