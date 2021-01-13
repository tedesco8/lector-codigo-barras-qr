import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/codigo',
    name: 'Codigo',
    component: () => import('../components/Codigo.vue')
  },
  {
    path: '/scanner',
    name: 'Scanner',
    component: () => import('../components/Scanner.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
