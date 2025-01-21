import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      // component: () => import('@/views/scroll-driven/index.vue'),
      component: () => import('@/views/animatesharedlayout/index.vue'),
    },
  ],
})

export default router
