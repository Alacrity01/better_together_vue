<template>
  <!-- <div class="container"> -->
  <!--   <h1>Edit Profile</h1>
    <div>Age: <input type="number" v-model="user.age"></div>

    <div>
      Gender: <select v-model="user.gender">
        <option value="prefer_not_to_say">Prefer not to say</option>
        <option value="men">Men</option>
        <option value="women">Women</option>
      </select>
    </div>

    <div>
      Looking For (Gender): <select v-model="user.looking_for_gender">
        <option value="both_men_and_women">No preference</option>
        <option value="men">Men</option>
        <option value="women">Women</option>
      </select>
    </div>

    <div>
      Looking For (Romance/Friendship): <select v-model="user.looking_for_role">
        <option value="both_friendship_and_romance">Both Friendship and Romance</option>
        <option value="romance">Romance</option>
        <option value="friendship">Friendship</option>        
      </select>
    </div>
    <div>First Name: <input type="text" v-model="user.first_name"></div>
    <div>Username: <input type="text" v-model="user.username"></div>
    <div>About: <textarea rows="4" cols="50" v-model="user.about"></textarea></div>
    <div>Image: <input type="file" v-on:change="setFile($event)" ref="fileInput"></div>

    <button v-on:click="updateUser(user)">Update Profile</button> -->
  <!-- </div> -->



  <!-- //Section - Edit Begin -->
  <section id="signup" class="">
    <div class="container">
        <div class="row justify-content-center mb-5">
            <div class="col-lg-7 text-center">
                <h3 class="font-alt letter-spacing-3 mb-0 text-extra-large-2 text-uppercase text-yellow">Edit Profile</h3>
                <span class="bg-pink mt-1 mx-auto sep-line-medium-thick"></span>
            </div>
        </div>
        
        <div class="row">
            <div class="col-lg-3">
                <div class="pr-lg-5">
                </div>
            </div>
            
            <div class="col-lg-6 mt-5 mt-lg-0">
                <form v-on:submit.prevent="updateUser(user)">
                    
                    <div class="form-group text-light">                    
                        Age: <input type="number" v-model="user.age" class="form-control form-control-purple">
                    </div>


                    <div class="form-group text-light">
                        Username: <input type="text" v-model="user.username"class="form-control form-control-purple">
                    </div>

                    <div class="form-group text-light">
                        First Name: <input type="text" v-model="user.first_name" class="form-control form-control-purple">
                    </div>

                    <div class="form-group text-light">
                        About: <input type="textarea" v-model="user.about" class="form-control form-control-purple">
                    </div>

                    <div class="form-group text-light">
                      Gender: <select v-model="user.gender">
                        <option value="prefer_not_to_say">Prefer not to say</option>
                        <option value="men">Male</option>
                        <option value="women">Female</option>
                      </select>
                    </div>

                    <div class="form-group text-light">
                      Looking For (Gender): <select v-model="user.looking_for_gender">                     
                      <option value="both_men_and_women">No preference</option>
                      <option value="men">Men</option>
                      <option value="women">Women</option>
                      </select>
                    </div>

                    <div class="form-group text-light">
                      Looking For (Romance/Friendship): <select v-model="user.looking_for_role">                    
                      <option value="both_friendship_and_romance">Anything</option>
                      <option value="romance">Romance</option>
                      <option value="friendship">Friendship</option>  
                      </select>
                    </div>

                    <div class="form-group text-light">
                      Image: <input type="file" v-on:change="setFile($event)" ref="fileInput">
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
  <!-- //Section - Edit End -->
</template>

<script>
import Vue2Filters from 'vue2-filters';
var axios = require('axios');

export default {
  data: function() {
    return {
      user: {},
      currentUserId: "",
      images: [],
      file: ""
    };
  },
  created: function() {
    this.currentUserId = localStorage.getItem("user_id");
    axios
      .get("/api/users/" + this.$route.params.id)
      .then(response => {
        this.user = response.data;
      });
  },
  methods: {
    showUser: function(user) {
      if (this.currentUser === user) {
        this.currentUser = {};
      } else {
        this.currentUser = user;
      }
    },
    setFile: function(event) {
      if (event.target.files.length > 0) {
        this.file = event.target.files[0];
      }
    },
    updateUser: function(user) {
      var params = {
        username: user.username,
        first_name: user.first_name,
        age: user.age,
        gender: user.gender,
        looking_for_role: user.looking_for_role,
        looking_for_gender: user.looking_for_gender,
        about: user.about    
      };

      if (this.file) {
        var imageParams = new FormData();
        imageParams.append("user_id", this.currentUserId);
        imageParams.append("file", this.file);

        axios.post("http://localhost:3000/api/images", imageParams);
      }

      axios
        .patch("/api/users/" + user.id, params)        
        .then(response => {
          this.currentUser = {};
          this.$router.push(`/users/${user.id}/profile`);
        });
    }
  }
};
</script>
