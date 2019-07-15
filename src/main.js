import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import firebase from "firebase";
import { db } from "./firebase/firebase";
import router from "./router";

import store from '@/store/index.js'

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import BootstrapVue from "bootstrap-vue";


import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css' // only if your build system can import css, otherwise import it wherever you would import your css.

Vue.use(VuePlyr)

//player
import AudioVisual from 'vue-audio-visual'

Vue.use(AudioVisual)

//Vuex
import Vuex from 'vuex'

Vue.use(Vuex)

Vue.use(BootstrapVue);

Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
