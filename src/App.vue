<template>
  <div id="app">

    <!-- Preloader -->
    <!-- <div class="preloader"></div> -->
    
    <!-- Header Start -->
    <header class="fixed-top">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 navbar-header p-0">
                    <button class="navbar-toggler d-xl-none" type="button" data-toggle="collapse" data-target="#navbarMorley" aria-controls="navbarMorley" aria-expanded="true" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <a class="navbar-brand page-scroll" href="#profile">
                        <img src="img/logo.png" alt=""/>
                    </a>
                </div>
                <!-- //.col-12 -->
                
                <div class="col-12 p-0">
                  <nav id="navigation" class="navbar navbar-expand-xl">
                    <div id="navbarMorley" class="navbar-collapse collapse">
                      <ul class="navbar-nav navbar-nav-yellow">
                        <li class="nav-item">
                          <router-link class="nav-link" to="/">Login</router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="/logout">Logout</router-link> 
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="/users/new">Signup</router-link> 
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="/matches">My Matches</router-link> 
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" v-bind:to="'/users/' + currentUserId + '/profile'">My Profile</router-link>
                        </li>
                      </ul>
                    </div>
                      <!-- //.navbar-collapse -->
                  </nav>
                </div>
                <!-- //.col-12 -->
                
                <div class="col-12 d-none d-xl-block navbar-footer p-0">
                    <p class="m-0">&copy; Jeff Brinker<br>All rights reserved 2019</p>
                </div>
                <!-- //.col-12 -->
            </div>
            <!-- //.row -->
        </div>
        <!-- //.container-fluid -->
    </header>
    <!-- //Header End -->
    
    
    <!-- Wrapper Start -->
    <div id="wrapper" class="bg-white p-0">
        
        <!-- Main Start -->
        <div id="main" class="py-0">
                <router-view/>
            
            <!-- Footer Start -->
            <footer class="bg-gray-100 py-0 section">
                <div class="container">
                    <div class="row pb-4 pb-lg-3 pt-5">
                        <div class="col-lg-8">
                            <ul class="list-inline text-center text-lg-left text-medium text-md-large">
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
                        <!-- //.col-lg-8 -->
                        
                        <div class="col-lg-4 mt-3 mt-lg-0">
                            <div class="footer-brand opacity-8 text-center text-lg-right">
                                <img src="img/logo.png" alt=""/>
                            </div>
                            <!-- //.footer-brand -->
                        </div>
                        <!-- //.col-lg-4 -->
                    </div>
                    <!-- //.row -->
                    
                    <div class="row border-top py-5">
                        <div class="col-12 text-center">
                            <p class="mb-0 text-medium">&copy; Jeff Brinker | All rights reserved 2019.</p>
                        </div>
                        <!-- //.col-12 -->
                    </div>
                    <!-- //.row -->
                </div>
                <!-- //.container -->
            </footer>
            <!-- //Footer End -->
            
        </div>
        <!-- //Main End -->
        
    </div>
    <!-- //Wrapper End -->
  </div>
</template>

<style>

</style>

<script>
var axios = require('axios');
import Vue2Filters from 'vue2-filters';

var jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
}
var user_id = localStorage.getItem("jwt");

export default {
  data: function() {
    return {
      currentUserId: ""
    };
  },
  created: function() {
    this.currentUserId = localStorage.getItem("user_id");
  }
};
</script>