// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import strings from '../config/strings'
import subtypeDetails from '../config/subtype-details'

Vue.config.productionTip = false
Vue.use(Vuex)

console.log(process.env.MESSAGE || 'sad face :('); // eslint-disable-line

const store = new Vuex.Store({
  state: {
    strings,
    subtypeDetails,
    greeting: 'Howdy ;)'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
