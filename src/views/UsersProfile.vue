<template>
      <!-- Section - Expertise Start -->
    <section id="expertise" class="users-profile pb-0">
        <div class="container">
            <div class="row justify-content-center mb-5">
                <div class="col-lg-7 text-center">
                    <h3 class="font-alt letter-spacing-3 mb-0 text-extra-large-2 text-uppercase text-green">{{ user.username }}</h3>
                    <router-link class="btn btn-success m-4" v-bind:to="'/users/' + user.id + '/edit'">Edit Profile</router-link>

                    <p class="font-w-700 letter-spacing-1 text-light text-medium text-uppercase">{{ user.about }}  •  Age: {{ user.age }}</p>
                    <p class="font-w-700 letter-spacing-1 text-light text-medium text-uppercase">{{ user.friendly_gender }} looking to meet {{ user.friendly_looking_for_gender }} for {{ user.friendly_looking_for_role }}</p>

                    <span class="bg-pink mt-1 mx-auto sep-line-medium-thick"></span>
                </div>
                <!-- //.col-lg-7 -->
            </div>
            <!-- //.row -->
            
            <div class="row justify-content-center mb-5">
                <div v-for="image in user.images" class="col-md-6 col-lg-4 mt-5 text-center">
                    <img class="img-fluid my-image" v-bind:src="image.default_image_url" alt="">
                    <button class="btn-sm btn-pink mt-2" v-on:click="destroyImage(image)">Remove</button>
                </div>
                <!-- //.col-md-6 -->
            </div>

<div class="container text-center">
  
            <div class="row justify-content-center mb-5">
              <div class="col-lg-7 text-center">
                 <h3 class="font-alt letter-spacing-3 mb-0 text-extra-large-2 text-uppercase text-yellow">My Hangouts</h3>
                 <span class="bg-pink mt-1 mx-auto sep-line-medium-thick"></span>        
              </div>
            </div>
            <div class="row">
                  <div v-for="user_hangout in user.user_hangouts" class="col-md-6 col-lg-4 mt-2 text-light text-right">{{ user_hangout.hangout.name }}<button class="btn-sm btn-pink ml-2" v-on:click="destroyUserHangout(user_hangout)">Remove</button></div>
            </div>
          <!-- </div> -->
            </div>

              <div class="container">
                  <div class="row justify-content-center mb-5 mt-5">
                      <div class="col-lg-7 text-center">
                          <h3 class="font-alt letter-spacing-3 mb-0 text-extra-large-2 text-uppercase text-yellow">Add a Hangout</h3>
                          <span class="bg-pink mt-1 mx-auto sep-line-medium-thick"></span>
                      </div>
                      <!-- //.col-lg-7 -->
                  </div>
                  <!-- //.row -->
                  
                  <div class="row">
                      <!-- //.col-lg-5 -->
                      
                      <div class="col-6 offset-3 mt-5 mb-5 mt-lg-0 text-light">
                          <form v-on:submit.prevent="submit()">
                              <div class="form-group">
                                  Name: <input v-model="hangoutName" class="form-control form-control-purple" list="hangout-names">
                              </div>
                              <datalist id="hangout-names">
                                <option v-for="hangout in filterBy(hangouts, hangoutName, 'name')">{{hangout.name}}</option>
                              </datalist>
                              <!-- //.form-group -->
                              <div class="form-group">
                                  Address: <input v-model="hangoutAddress" class="form-control form-control-purple" >
                              </div>

                              <div class="form-group">
                                  Category: <select v-model="hangoutCategoryId" class="form-control form-control-purple">
                                  <option v-for="category in categories" v-bind:value="category.id">{{ category.name }}</option></select>
                              </div>


                              <button type="submit" class="btn btn-purple btn-small mt-1 shadow" value="Submit">Submit <i class="fas fa-paper-plane"></i></button>
                          </form>
                      </div>
                      <!-- //.col-lg-7 -->
                  </div>
                  <!-- //.row -->
              </div>
            <!-- //.row -->
        </div>
        <!-- //.container -->
    </section>
    <!-- //Section - Expertise End -->
</template>

<style>
.my-image {
  width: 100%;
  height: auto;
}
</style>

<script>
import Vue2Filters from 'vue2-filters';
var axios = require('axios');

export default {
  data: function() {
    return {
      user: {
        user_hangouts: [],
        images: []
      },
      hangoutName: "",
      hangoutAddress: "",
      hangoutCategoryId: "",
      categories: [],
      hangouts: [],
      hangoutsFilter: ""
    };
  },
  created: function() {
    this.currentUserId = localStorage.getItem("user_id");
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
          this.hangouts.push(response.data);
          this.hangoutName = "";
          this.hangoutAddress = "";
          this.hangoutCategoryId = "";
          
          axios
            .get("/api/users/" + this.$route.params.id)
            .then(response => {
              this.user = response.data;
            });
        });
    },
    destroyUserHangout: function(userHangout) {
      axios
        .delete("/api/user_hangouts/" + userHangout.id)
        .then(response => {
          var index = this.user.user_hangouts.indexOf(userHangout);
          this.user.user_hangouts.splice(index, 1);
        });
    },
    destroyImage: function(image) {
      axios
        .delete("/api/images/" + image.id)
        .then(response => {
          var index = this.user.images.indexOf(image);
          this.user.images.splice(index,1);
        });
    }
  },
  mixins: [Vue2Filters.mixin]
};
</script>