import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";

import firebase from "firebase";

Vue.use(Router);

let router = new Router({
  mode: "history",
  routes: [
    // {
    //   path: "/",
    //   redirect: "/home"
    // },
    // {
    //   path: "/login",
    //   name: "login",
    //   component: Login
    // },
    // {
    //   path: "/signup",
    //   name: "SignUp",
    //   component: SignUp
    // },
    {
      path: "/",
      name: "Home",
      component: Home
    }
    // { path: "/", redirect: "/auth" },
    // { path: "/auth", component: Auth },
    // { path: "/home", component: AuthSuccess }
  ]
});

// router.beforeEach((to, from, next) => {
//   let currentUser = firebase.auth().currentUser;
//   let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

//   if (requiresAuth && !currentUser) next("login");
//   else if (!requiresAuth && currentUser) next("home");
//   else next();
// });

export default router;
