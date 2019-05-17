export default [
  {path: '/helloWorld', component: ()=>import('@/components/HelloWorld')},
  {path: '*', component: ()=>import('@/components/comp1')}
]