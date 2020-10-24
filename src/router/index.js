import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/Views/Main'
import LandingPage from '../Views/LandingPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Hello',
    component: Main,
    meta: {
      title: 'Incredible Insect'
    }
  },
  {
    path: '/staging',
    name: 'Staging',
    component: LandingPage,
    meta: {
      title: 'Incredible Insect'
    }
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
