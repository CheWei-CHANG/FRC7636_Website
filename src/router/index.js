import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login.vue'
import MainPage from '../views/MainPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/MainPage',
    name: 'mainPage',
    component: MainPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
