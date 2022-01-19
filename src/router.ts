import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/home.vue'
import Login from './views/login.vue'
import ColumnDetail from './views/columnDetail.vue'

const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/column/:id',
      name: 'columndetail',
      component: ColumnDetail
    }
  ]
})

export default router
