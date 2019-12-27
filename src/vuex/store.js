import Vue from 'vue'
import Vuex from 'vuex'
import { singleLightModules } from './modules/singleLight.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
      singleLight: singleLightModules,
    }
})