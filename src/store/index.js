//Vuex
import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)

import Database from "./modules/database/index"

export default new Vuex.Store({
    // Modulos principales
    modules: {
      database: Database,
    },
    state: {
    }
  })