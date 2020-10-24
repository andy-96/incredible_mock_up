import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/Views/Main'
import LandingPage from '../Views/LandingPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Hello',
    component: Main
  },
  {
    path: '/staging',
    name: 'Staging',
    component: LandingPage
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
