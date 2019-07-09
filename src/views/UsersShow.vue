<template>


    <!-- Section - Expertise Start -->
    <section id="expertise" class="users-show pb-0">
        <div class="container">
            <div class="row justify-content-center mb-5">
                <div class="col-lg-7 text-center">
                    <h3 class="font-alt letter-spacing-3 mb-0 text-extra-large-2 text-uppercase text-green">{{ user.username }}</h3>
                    <p class="font-w-700 letter-spacing-1 text-light text-medium text-uppercase">{{ user.about }}  •  Age: {{ user.age }}</p>
                    <p class="font-w-700 letter-spacing-1 text-light text-medium text-uppercase">{{ user.friendly_gender }} looking to meet {{ user.friendly_looking_for_gender }} for {{ user.friendly_looking_for_role }}</p>

                    <span class="bg-pink mt-1 mx-auto sep-line-medium-thick"></span>
                </div>
                <!-- //.col-lg-7 -->
            </div>
            <!-- //.row -->
            
            <div class="row">
                <div v-for="image in user.images" class="col-md-6 col-lg-4 mt-5 text-center">
                    <img class="img-fluid" v-bind:src="image.default_image_url" alt="">
                </div>
                <!-- //.col-md-6 -->
            </div>
            <!-- //.row -->
        </div>
        <!-- //.container -->
    </section>
    <!-- //Section - Expertise End -->


</template>

<style>

</style>

<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      user: {},
    };
  },
  created: function() {
    axios
      .get("/api/users/" + this.$route.params.id)
      .then(response => {
        this.user = response.data;
      });

  },
  methods: {

  },
};
</script>