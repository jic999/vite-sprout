import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/pages/index.vue'
import Grow from '@/pages/grow/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'index',
      path: '/',
      component: Index,
    },
    {
      name: 'grow',
      path: '/grow',
      component: Grow,
    },
  ],
})

export default router
