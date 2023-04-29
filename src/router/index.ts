import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import PrimeLinkPage from '@/views/PrimeLinkPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/prime-link',
      name: 'Prime Link',
      component: PrimeLinkPage
    }
  ]
})

export default router
