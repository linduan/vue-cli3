export default [
  {path: '/helloWorld', component: ()=>import('@/components/HelloWorld')},
  {path: '/tsc', component: ()=>import('@/components/tsc')},
  {path: '*', component: ()=>import('@/components/comp1')}
]