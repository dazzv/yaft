import { createRouter, createWebHistory } from 'vue-router'

import startPage from '../views/start-page.vue'
import routePage from '../components/route-page.vue'
import weatherPage from '../components/weather-page.vue'
import listPage from '../components/list-page.vue'
import guidePage from '../components/guide-page.vue'
import monitoringPage from '../components/monitoring-page.vue'


const routes = [
  {
    path: '/',
    name: 'startPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('../views/start-page.vue')
    component: startPage,
  },
  {
    path: '/route',
    name: 'routePage',
    component: routePage,
  },
  {
    path: '/weather',
    name: 'weatherPage',
    component: weatherPage,
  },
  {
    path: '/list',
    name: 'listPage',
    component: listPage,
  },
  {
    path: '/guide',
    name: 'guidePage',
    component: guidePage,
  },
  {
    path: '/monitoring',
    name: 'monitoringPage',
    component: monitoringPage,
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
