<template>
      <div class="container">
        <nav class="navbar has-shadow " role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <!-- <nuxt-link to="/" class="navbar-item">
          <img class="logo" src="/img/logo.png">
        </nuxt-link> -->

        <a href="/" class="navbar-item">
            <h1>Samplers</h1>
        </a>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          @click="showMenu = !showMenu"
          :class="{ 'is-active' : showMenu }"
          data-target="customNVMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="customNVMenu" class="navbar-menu" :class="{ 'is-active' : showMenu }">
        <div class="navbar-end">
          <nuxt-link to="/" class="navbar-item">Home</nuxt-link>
          <nuxt-link to="/about" class="navbar-item">About</nuxt-link>         
          <nuxt-link to="/login" class="navbar-item">Log In</nuxt-link>
          <div class="navbar-item">
            <div class="buttons">
              <nuxt-link to="/register" class="button is-primary">Register</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</div>
     
</template>
<script>

import { mapState, mapGetters, mapMutations } from "vuex";
export default {
    name:"Navbar",
     data() {
        return {
            showMenu: false,
        }
    },
    computed:{
        ...mapGetters({getFavorites: "favorites/getFavorites"})
    }
}
</script>
<style>
.modal-dialog modal-md{
    max-width: 100%;
}
</style>

