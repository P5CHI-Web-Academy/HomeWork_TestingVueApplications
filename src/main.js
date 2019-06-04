import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import '@/assets/sass/index.scss'
import store from './store'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

Vue.filter('currency', function (value) {
  value = value.toString()
  return value + ' \u20AC' // euro sign
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
