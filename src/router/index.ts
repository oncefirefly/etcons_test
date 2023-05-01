import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
// import PrimeLinkPage from '@/views/PrimeLinkPage.vue'
import PrimeDatePicker from '@/views/PrimeDatePickerPage.vue'
import PrimeMultiSelect from '@/views/PrimeMultiSelectPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    // {
    //   path: '/prime-link',
    //   name: 'Prime Link',
    //   component: PrimeLinkPage
    // }
    {
      path: '/prime-datepicker',
      name: 'Prime Datepicker',
      component: PrimeDatePicker
    },
    {
      path: '/prime-multiselect',
      name: 'Prime Multiselect',
      component: PrimeMultiSelect
    }
  ],
  linkActiveClass: 'link-active'
})

export default router
