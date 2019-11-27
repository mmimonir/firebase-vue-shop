import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Admin from './views/Admin.vue'
import Overview from './views/Overview.vue'
import Products from './views/Products.vue'
import Profile from './views/Profile.vue'
import Order from './views/Orders.vue'

import { fb } from './firebase'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      meta: { requiresAuth: true }, // vedio class no 28
      children: [
        {
          path: 'overview',
          name: 'overview',
          component: Overview
        },
        {
          path: 'products',
          name: 'products',
          component: Products
        },
        {
          path: 'profile',
          name: 'profile',
          component: Profile
        },
        {
          path: 'orders',
          name: 'orders',
          component: Order
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/checkout',
      name: 'checkout',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/Checkout.vue')
    }
  ]
})

// below code copy from router.vuejs.org for protect route. Authenticate user can access this route.
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth)
  const currentUser = fb.auth().currentUser

  if (requiresAuth && !currentUser) {
    next('/')
  } else if (requiresAuth && currentUser) {
    next()
  } else {
    next()
  }
})

export default router
