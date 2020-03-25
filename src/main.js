import Vue from 'vue'
import router from './router/router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import app from './App.vue'
import Vuex from 'vuex'

// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000

// axios({
//   url: 'http://123.207.32.32:8000/home/multidata'
// }).then(res => {
//   console.log(res)
// })

// axios.all([axios.get('http://123.207.32.32:8000/category'),
//                   axios.get('http://123.207.32.32:8000/home/multidata'),
//                   {params:{type: 'sell', page: 1}}])
//   .then(axios.spread((res1, res2) => {
//     console.log(res1);
//     console.log(res2);
// })

// const instance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000
// })
//
// instance1({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res)
// })
//
// const instance2 = axios.create({
//   baseURL: 'http://123.207.31.31:8000',
//   timeout: 5000
// })
//
// instance2({
//   url: '/home'
// }).then(res => {
//   console.log(res)
// })

import { request } from './network/request'

Vue.use(Vuex)
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(app)
}).$mount('#app')

request({
  url: '/home/multidata'
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
