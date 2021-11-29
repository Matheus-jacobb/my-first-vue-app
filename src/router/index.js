import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/highlite',
  },
  {
    path: '/highlite',
    name: 'Highlite',
    component: () => import(/* webpackChunkName: "about" */ '../views/Highlite.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/destaque',
    name: 'Destaque',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/HelloWorld.vue')
  },
  {
    path: '/recents',
    name: 'recents',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Recents.vue')
  },

  {
    path: '/locales',
    name: 'locale',
    component: () => import(/* webpackChunkName: "about" */ '../views/Locale')
  },

  {
    path: '/schedule',
    name: 'schedules',
    component: () => import(/* webpackChunkName: "about" */ '../views/Schedule')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
