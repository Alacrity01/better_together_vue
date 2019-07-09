<template>
  <!-- <div class="matches-index"> -->
    <!-- Section - Portfolio Start -->
    <section class="matches-index">
        <div class="container">
            <div class="row justify-content-center mb-5">
                <div class="col-lg-7 text-center text-white">
                    <h3 class="font-alt letter-spacing-3 mb-0 text-extra-large-2 text-uppercase ">My Matches</h3>
                    <span class="bg-pink mt-1 mx-auto sep-line-medium-thick"></span>
                </div>
                <!-- //.col-lg-7 -->
            </div>
            <!-- //.row -->
            
            <div class="row">
                <div class="col-12">
                    <div class="gallery-wrapper">
                        <div class="gallery-grid grid-col-2 gutter-wide row">
                          <div class="gallery-item col-6" v-for="match in matches">
                              <figure>
                                  <img v-bind:src="match.default_image_url" alt="" class="img-fluid my-image">
                                  
                                  <div class="figure-link">
                                      <!-- Full Preview -->
                                      <router-link v-bind:to="'/users/' + match.id" class="zoom bg-pink text-white">
                                          <i class="fas fa-link"></i>
                                      </router-link>
                                      
                                  </div>
                                  <!-- //.figure-link -->
                              </figure>
                              
                              <div class="figure-caption py-3">
                                  <span class="font-w-700 letter-spacing-1 text-large text-pink text-uppercase">{{ match.first_name }}, Age {{ match.age }}</span>
                                  <div></div>
                                  <!-- <h4 class="font-w-400 letter-spacing-1 text-large text-white text-uppercase">Age: {{ match.age }}</h4> -->
                                  <span class="font-w-400 letter-spacing-1 text-medium text-green text-uppercase">Shared Hangouts:</span>
                                  <ul v-for="hangout in match.common_hangouts">
                                    <li class="text-light">{{ hangout.name }}</li>
                                  </ul>
                                  <h6 class="font-w-400 mb-0 mt-2 text-dark text-medium text-md text-white">Matched: {{ match.date_matched }}</h6>
                                  <router-link class="btn btn-info m-1" v-bind:to="'/users/' + match.id">View Profile</router-link>
                                  <router-link class="btn btn-warning m-1" v-bind:to="'/users/' + match.id + '/messages'">Chat</router-link>
                              </div>
                              <!-- //.figure-caption -->
                          </div>
                          <!-- //.gallery-item -->

                        </div>
                        <!-- //.gallery-grid -->
                    </div>
                    <!-- //.gallery-wrapper -->
                </div>
                <!-- //.col-12 -->
            </div>

        </div>
        <!-- //.container -->
    </section>
    <!-- //Section - Portfolio End -->
  <!-- </div> -->
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      matches: [],
      hangouts: []
    };
  },
  created: function() {
    axios.get("/api/matches").then(response => {
      this.matches = response.data;
    });
  },
  methods: {

  }
};
</script>