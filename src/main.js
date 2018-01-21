// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import VueResource from 'vue-resource'
import Vuex from 'vuex'

import 'vuetify/dist/vuetify.css'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(Vuetify)
Vue.use(VueResource)

Vue.http.options.root = 'https://api.youkebox.be/api/v1/';

const store = new Vuex.Store({
    state: {
        addMusic : {
            videos: [],
            query: '',
        },
        rooms: {
            list: [],
            query: [],
        },
        playlist: [],
    }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store,
  http: {},
})
