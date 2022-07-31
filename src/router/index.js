import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sections/:id',
    name: 'section',
    component: () => import('@/views/Section.vue'),
    children: [
      {
        path: ':first_id',
        name: 'country',
        component: () => import('@/views/Country.vue'),
        children: [
          {
            path: ':second_id',
            name: 'plcae',
            component: () => import('@/views/PlaceDetail.vue'),
          }
        ]
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
