import Vue from 'vue'
import Vuex from 'vuex'
import yubo from './modules/youkebox'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
  	yubo,
  	// Authentication module,
  },
  strict: debug,
})