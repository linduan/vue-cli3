import VueRouter from 'vue-router'
import Vue from 'vue'
const Routers = []
const files = require.context('@/router', true, /\.js$/)
files.keys().forEach(fileName => {
    if (fileName.includes('index.js')) return;
    let file = files(fileName)
    let routerArr = file.default || file
    Routers.push(...routerArr)
})
// 路由
Vue.use(VueRouter)
const router = new VueRouter({routes: Routers})
export default router