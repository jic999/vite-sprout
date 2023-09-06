import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => import('@/pages/index.vue'),
    },
    {
      name: 'grow',
      path: '/grow',
      component: () => import('@/pages/grow/index.vue'),
    },
  ],
})

export default router
