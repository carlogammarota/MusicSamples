import Vue from "vue";
import App from "./App.vue";
// import ElementUI from "element-ui";
// import "element-ui/lib/theme-chalk/index.css";
import firebase from "firebase";
import { db } from "./firebase/firebase";
import router from "./router";

import store from '@/store/index.js'

Vue.config.productionTip = false;
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";

// import BootstrapVue from "bootstrap-vue";

// Vue.use(BootstrapVue);

//Vuex
import Vuex from 'vuex'

Vue.use(Vuex)




import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css' // only if your build system can import css, otherwise import it wherever you would import your css.
Vue.use(VuePlyr)

// import downloadIcon from "vue-material-design-icons/Download.vue"
// import starCircleIcon from "vue-material-design-icons/StarCircle.vue"
// Vue.component("downloadIcon", downloadIcon)
// Vue.component("star-circle", starCircleIcon)






//player
import AudioVisual from 'vue-audio-visual'
Vue.use(AudioVisual)


  
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)




// Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
