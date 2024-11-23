import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'cart-list',
      component: () => import('@/presentation/views/CartListView.vue'),
    },
  ],
})

export default router
