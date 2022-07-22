import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/places',
    name: 'places',
    component: () => import('../views/Places.vue')
  },
  {
    path: '/places/:id',
    name: 'place',
    component: () => import('../views/Place.vue')
  },
  {
    path: '/sections/:id',
    name: 'section',
    component: () => import('../views/Section.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
