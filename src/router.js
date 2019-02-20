import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './components/Home.vue')
    },
    {
      path: '/product',
      name: 'product',
      component: () => import(/* webpackChunkName: "product" */ './components/Product.vue')
    },
    {
      path: '/closed',
      name: 'closed',
      component: () => import(/* webpackChunkName: "product" */ './components/Closed.vue')
    }
  ]
})