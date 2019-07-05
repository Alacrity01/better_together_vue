<template>
  <div class="logout">
  </div>
</template>

<script>
import axios from "axios";

export default {
  created: function() {
    delete axios.defaults.headers.common["Authorization"];
    this.$parent.currentUserId = 0;

    localStorage.removeItem("jwt");
    localStorage.removeItem("user_id");
    this.$router.push("/login");
  }
};
</script>