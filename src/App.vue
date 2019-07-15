<template>
  <div id="app">
    <!-- <img width="25%" src="./assets/logo.png"> -->
    <!-- <Notifications></Notifications> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Notifications from "./views/notification";
export default {
  name: "App",
  data() {
    return {
      booksRef: {}
    };
  },
  components: {
    Notifications
  },
  methods: {
    // logout() {
    //   firebase
    //     .auth()
    //     .signOut()
    //     .then(() => {
    //       this.$router.replace("Login");
    //     });
    // }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
