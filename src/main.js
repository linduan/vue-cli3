import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
import Components from "@/components/index"
import $api from '@/api'

// 组件
Components.forEach(item => {
  let {name, component} = item
  Vue.component(name, component)
})

Vue.prototype.$api = $api
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

