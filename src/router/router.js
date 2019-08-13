export default [
  {
    path: '/helloWorld',
    name: 'HelloWorld',
    component: ()=>import('@/components/helloWorld'),
    meta: {
      nav: 'HelloWorld'
    }
  },
  {
    path: '/',
    name: 'Comp1',
    component: ()=>import('@/components/comp1'),
    meta: {
      nav: 'Comp1'
    }
  },
  {
    path: '/pageOne',
    name: 'PageOne',
    component: ()=>import('@/views/pageOne'),
    meta: {
      nav: 'PageOne'
    }
  },
  {
    path: '*',
    name: '404',
    component: ()=>import('@/views/404'),
    meta: {
      nav: '404'
    }
  }
  
]