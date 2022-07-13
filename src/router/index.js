import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/employeers',
    name: 'employeers',
    component: () => import('../views/Employeers.vue')
  },
  {
    path: '/employeers/:id',
    name: 'employee',
    component: () => import('../views/Employee.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
