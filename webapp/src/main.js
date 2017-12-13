import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import Notifications from 'vue-notification'
import App from './App'
import router from './router'
import { sync } from 'vuex-router-sync'
import store from '@/store/store'



Vue.use(Vuetify, {
  theme: {
    primary: '#0A1F30',
    secondary: '#D6E1EB',
    content: '#eeeff1',
    footer: '#eeeff1',
    accent: '#82B1FF',
    error: '#FF5252',
    bluedetail: '#03b4f1',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
    neutro: '#fff',
  }
})

Vue.use(Notifications)

Vue.config.productionTip = false

sync(store, router)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})