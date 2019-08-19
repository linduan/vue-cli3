import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
import Components from "@/components/index"
import $api from '@/api'
import store from '@/store/index'
import filters from '@/filters/index'

// 组件
Components.forEach(item => {
  const {name, component} = item
  Vue.component(name, component)
})

// 过滤器
let keys = Object.keys(filters)
keys.forEach(key => {
  Vue.filter(key, filters[key])
}) 
Vue.prototype.$api = $api
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

