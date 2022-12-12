import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Search from '../views/SearchEngineView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/search',
      name: 'search',
      compoonent: Search
    },
    {
      path: '/detail/:id',
      name: 'Details',
      component: () => import('../views/Details.vue'),
      props: true,
      meta: {
        enterClass: 'animate__animated animate__fadeInRight',
        leaveClass: 'animate__animated animate__fadeOutRight'
      }
    }
  ]
})

export default router
