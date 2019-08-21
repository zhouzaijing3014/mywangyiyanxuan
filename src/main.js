import Vue from 'vue'
import App from './App.vue'

import store from './store'
import router from './router'
import Footer from './components/Footer/Footer.vue';
// import headerSlot from './components/shopHeader/shopHeader.vue'
import headerTen from './components/headerTen/headerTen.vue'
import './mock/mock-server'


Vue.component('Footer',Footer)
// Vue.component('headerSlot',headerSlot)
Vue.component('headerTen',headerTen)

new Vue({
  render: h => h(App),
  router,
  store   //所有相关数据
}).$mount('#app')
