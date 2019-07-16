//Vuex
import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)

import Database from "./modules/database/index"
import Favorites from "./modules/favorites/index"

export default new Vuex.Store({
    // Modulos principales
    modules: {
      database: Database,
      favorites: Favorites
    },
    state: {
    }
  })