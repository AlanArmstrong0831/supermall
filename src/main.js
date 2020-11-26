import Vue from 'vue'
// import Vue from 'vue/dist/vue.esm.js'
import App from './App'
import router from './router'
import store from './store'


import axios from 'axios'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')

