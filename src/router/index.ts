import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import { PAGE_NOT_FOUND_ROUTE } from './basic'
import { AppRouteRecordRaw } from './types'

const modules = require.context('@/router/modules', true, /\.ts$/)
const requireAll = context => context.keys().map(context)

const routeModuleList: AppRouteRecordRaw[] = []
requireAll(modules).forEach((key) => {
  const mod = key.default || {}
  const modList = Array.isArray(mod) ? [...mod] : [mod]
  routeModuleList.push(...modList)
})

console.log(routeModuleList)
export const asyncRoutes:Array<AppRouteRecordRaw> = [PAGE_NOT_FOUND_ROUTE, ...routeModuleList]
const routes: Array<AppRouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/',
    name: 'Homea',
    component: () => import('@/components/layou/layou.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes as RouteRecordRaw[]
})

export default router
