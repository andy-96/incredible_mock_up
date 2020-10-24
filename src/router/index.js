import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '../Views/LandingPage'
import Impressum from '../Views/Impressum'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Incredible Insects',
    component: LandingPage,
    meta: {
      title: 'Incredible Insects'
    }
  },
  {
    path: '/impressum',
    name: 'Impressum',
    component: Impressum,
    meta: {
      title: 'Impressum'
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
