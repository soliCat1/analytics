import {createRouter, createWebHistory} from 'vue-router'
import AnalyticsPage from '@/pages/AnalyticsPage'
import AuthorizationPage from '@/pages/AuthorizationPage'


const routes = [
  {
    path: '/',
    component: AuthorizationPage
  },
  {
    path: '/analytics',
    component: AnalyticsPage
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router