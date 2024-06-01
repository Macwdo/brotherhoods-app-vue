import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/Home.vue'
import LoginView from '@/LoginView.vue'
import ApiConsume from '@/ApiConsume.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: LoginView
    },
    {
      path: '/api',
      name: 'api',
      component: ApiConsume
    }
  ]
})

export default router
