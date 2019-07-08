<template>  
  <!-- Section - Home Start -->
  <section id="home" class="users-index bg-img-cover pb-0">
      <div class="container">
          <div class="row">
              <div class="col-12">
                  <div class="profile-card">
                      <div class="profile-card-body bg-white p-4 p-sm-5 rounded-top shadow-lg">
                          <span class="badge bg-teal m-4 text-white"></span>
                          
                          <div class="row">
                              <div class="col-lg-7">
                                  <div class="ml-lg-2 ml-xl-3">
                                      <div class="border-bottom pt-4 pt-sm-0">
                                        <router-link v-bind:to="'/users/' + users[selectedIndex].id" class="btn btn-pink btn-small mt-4 page-scroll shadow">Full Profile</router-link>
                                          <h3 class="font-alt letter-spacing-1 mb-0 text-extra-large-2 text-uppercase">{{ users[selectedIndex].username }}</h3>
                                          <p class="mt-1 font-w-700 letter-spacing-1 text-gray-600 text-medium text-uppercase">{{ users[selectedIndex].about }}</p>
                                      </div>
                                      <!-- //.border-bottom -->

                                      <ul class="list-unstyled mt-4 text-medium">
                                          <li><span>First Name: </span>{{ users[selectedIndex].first_name }}</li>
                                          <li><span>Age: </span>{{ users[selectedIndex].age }}</li>
                                          <li><span>Gender: </span>{{ users[selectedIndex].gender }}</li>
                                      </ul>
                                      <button v-on:click="previousPerson(selectedIndex)" class="btn btn-black btn-small mt-4 page-scroll shadow">Previous</button>
                                      <button v-on:click="nextPerson(selectedIndex)" class="btn btn-gray btn-small mt-4 page-scroll shadow">Next</button>
                                      <div>
                                        <button class="btn btn-red btn-small mt-4 page-scroll shadow" v-on:click="deny(users[selectedIndex].id)">Deny</button>
                                        <button class="btn btn-blue btn-small mt-4 page-scroll shadow" v-on:click="confirm(users[selectedIndex].id)">Confirm</button>
                                      </div>
                                  </div>
                                  <!-- //.ml-lg-2 -->
                              </div>
                              <!-- //.col-lg-7 -->
                              <div class="col-lg-5 mt-5 mt-lg-0 order-lg-first">
                                <div v-if="users[selectedIndex].images[0]">
                                  <div v-if="users[selectedIndex].images[0].file_url">
                                    <img v-bind:src="users[selectedIndex].images[0].file_url" alt="" class="request-image-show shadow"/>
                                  </div>
                                  <div v-else-if="users[selectedIndex].images[0].image_url">
                                    <img v-bind:src="users[selectedIndex].images[0].image_url" alt="" class="request-image-show shadow"/>
                                  </div>
                                  <div v-else>
                                    <img class="request-image-show shadow" src="https://i1.wp.com/crimsonems.org/wp-content/uploads/2017/10/profile-placeholder.gif?fit=250%2C250&ssl=1" alt="">
                                  </div>
                                </div>
                                <div v-else>
                                  <img class="request-image-show shadow" src="https://i1.wp.com/crimsonems.org/wp-content/uploads/2017/10/profile-placeholder.gif?fit=250%2C250&ssl=1" alt="">
                                </div>
                                
                              </div>
                              <!-- //.col-lg-5 -->
                          </div>
                          <!-- //.row -->
                      </div>
                      <!-- //.profile-card-body -->
                      
                      <div class="profile-card-footer bg-purple py-4 py-lg-0 rounded-bottom shadow-lg">
                          <div class="row align-items-center h-100">
                              <div class="col-12 text-center">
                                  <ul class="list-inline text-medium text-md-large">
                                      <li class="list-inline-item">
                                          <a href="#" target="_blank" title="Facebook"><i class="fab fa-facebook"></i></a>
                                      </li>
                                      <li class="list-inline-item">
                                          <a href="#" target="_blank" title="Twitter"><i class="fab fa-twitter"></i></a>
                                      </li>
                                      <li class="list-inline-item">
                                          <a href="#" target="_blank" title="Behance"><i class="fab fa-behance"></i></a>
                                      </li>
                                      <li class="list-inline-item">
                                          <a href="#" target="_blank" title="Google Plus"><i class="fab fa-google-plus-g"></i></a>
                                      </li>
                                      
                                      <li class="list-inline-item">
                                          <a href="#" target="_blank" title="Instagram"><i class="fab fa-instagram"></i></a>
                                      </li>
                                      <li class="list-inline-item">
                                          <a href="#" target="_blank" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                                      </li>
                                  </ul>
                              </div>
                              <!-- //.col-12 -->
                          </div>
                          <!-- //.row -->        
                      </div>
                      <!-- //.profile-card-footer -->
                  </div>
                  <!-- //.profile-card -->
              </div>
              <!-- //.col-12 -->
          </div>
          <!-- //.row -->
        </div>
      <!-- //.container -->
  </section>
  <!-- //Section - Home End -->













    <!-- <transition-group class="index-users-username" appear enter-active-class="bounceInRight" leave-active-class="bounceOutLeft"> -->
    <!--   <div>
        <h2><router-link v-bind:to="'/users/' + users[selectedIndex].id">{{ users[selectedIndex].username }}</router-link></h2>
        <h2>ID: {{ users[selectedIndex].id }}</h2>
        <h2>Age: {{ users[selectedIndex].age }}</h2>
        <h2>Gender: {{ users[selectedIndex].gender }}</h2>
        <div><button class="btn btn-dark m-1" v-on:click="confirm(users[selectedIndex].id)">Confirm</button></div>
        <div><button class="btn btn-dark m-1" v-on:click="deny(users[selectedIndex].id)">Deny</button></div>
        <img class="index-users-img" v-bind:src="users[selectedIndex].image_url" v-bind:alt="users[selectedIndex].username"> -->
       <!--  <h2>Age {{users[selectedIndex].age}}</h2>
        <button v-on:click="previousPerson(selectedIndex)">Previous</button>
        <button v-on:click="nextPerson(selectedIndex)">Next</button>

      </div> -->
    <!-- </transition-group> -->
  </div>
</template>

<style>
  
.request-image-show {
  width: 100%;
}

</style>

<script>
import Vue2Filters from "vue2-filters";
var axios = require ('axios');

export default {
  data: function() {
    return {
      users: [
              {
                id: 0,
                images: []
              }
              ],
      request: "",
      currentUserId: 0,
      selectedIndex: 0,
      user: {
        images: []
      },
    };
  },
  created: function() {
    axios.get("/api/users?by_user=true&limit=10").then(response => {
      this.users = response.data;
    });
    this.currentUserId = localStorage.getItem("user_id");
  },
  mixins: [Vue2Filters.mixin],
  methods: {
    confirm: function(requestee_id) {
      var params = {
                   requester_id: this.currentUserId,
                   approval: "true",
                   requestee_id: requestee_id
                   };

      axios.post("http://localhost:3000/api/requests", params).then(response => {
        console.log(response.data);         
      axios.get("/api/users?by_user=true&limit=10").then(response => {
        this.users = response.data;
      });
      }).catch(error => {
        this.errors = error.response.data.errors
      });
    },
    deny: function(requestee_id) {
      var params = {
                   requester_id: this.currentUserId,
                   approval: "false",
                   requestee_id: requestee_id
                   };
      axios.post("http://localhost:3000/api/requests", params).then(response => {
        console.log(response.data);
      axios.get("/api/users?by_user=true&limit=10").then(response => {
        this.users = response.data;
      });
      }).catch(error => {
        this.errors = error.response.data.errors
      });
    },
    nextPerson: function(selectedIndex) {
      if (this.selectedIndex < (this.users.length - 1)) {
        this.selectedIndex++;
      } else {
        this.selectedIndex = 0;
      }
    },
    previousPerson: function(selectedIndex) {
      if (this.selectedIndex > 0) {
        this.selectedIndex--;
      } else {
        this.selectedIndex = 9;
      }
    }
  }
};
</script>