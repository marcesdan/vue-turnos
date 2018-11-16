import Vue from 'vue'
import {router} from './router'
import {store} from './store'
// Ensure you are using css-loader
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vuetify from 'vuetify'
Vue.use(Vuetify)
import App from './App.vue'
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
