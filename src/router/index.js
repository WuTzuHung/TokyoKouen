import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/weather',
      name: 'weather',
      component: () => import('../views/weather.vue')
    },
    {
      path: '/public',
      name: 'public',
      component: () => import('../views/public.vue')
    },
    {
      path: '/WenHua',
      name: 'WenHua',
      component: () => import('../views/WenHua.vue')
    },
    {
      path: '/sport',
      name: 'sport',
      component: () => import('../views/sport.vue')
    }
  ]
})

export default router