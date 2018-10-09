import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Router from './config/Router'

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router: Router,
}).$mount('#app')
