import { createRouter, createWebHashHistory } from 'vue-router'
import type { App } from 'vue'

const routerMap = [
  {
    path: '/tab1',
    component: () => import('@/views/Tab1/Tab1.vue')
  },
  {
    path: '/tab2',
    component: () => import('@/views/Tab2/Tab2.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/Login/Login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routerMap
})

export const setupRouter = (app: App) => {
  app.use(router)
}

export default router
