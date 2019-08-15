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
    path: '/PageTwo',
    name: 'PageTwo',
    component: ()=>import('@/views/pageTwo'),
    meta: {
      nav: 'pageTwo'
    }
  },
  {
    path: '*',
    name: 'MissingPage',
    component: ()=>import('@/views/404'),
    meta: {
      nav: '404'
    }
  }
  
]