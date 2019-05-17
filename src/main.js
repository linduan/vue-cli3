import Vue from 'vue'
import App from './App.vue'
import Routers from '@/router/index'
import Components from "@/components/index"
import VueRouter from 'vue-router'
import Api from '@/api'

// 组件
Components.forEach(item => {
  let {name, component} = item
  Vue.component(name, component)
})

// 路由
Vue.use(VueRouter)
let routes = Routers.reduce((sum, cur) => {
  sum.push(...cur)
  return sum
}, [])
const router = new VueRouter({routes})

//api
const $api = Api.reduce((sum,cur) => {
  let name = cur.constructor.name
  let key = name.replace(name[0], name[0].toLowerCase())
  sum[key] = cur
  return sum
}, {})
Vue.prototype.$api = $api

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

