import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import { PAGE_NOT_FOUND_ROUTE } from './basic'
import { AppRouteRecordRaw } from './types'

const modules = require.context('@/router/modules', true, /\.ts$/)
const requireAll = (context) => context.keys().map(context)

const routeModuleList: AppRouteRecordRaw[] = []
requireAll(modules).forEach((key) => {
  const mod = key.default || {}
  const modList = Array.isArray(mod) ? [...mod] : [mod]
  routeModuleList.push(...modList)
})

console.log(routeModuleList)
export const PARENT_LAYOUT_NAME = 'ParentLayout'
export const getParentLayout = (_name?: string) => {
  return () =>
    new Promise((resolve) => {
      resolve({
        name: PARENT_LAYOUT_NAME
      })
    })
}
export const asyncRoutes: Array<AppRouteRecordRaw> = [
  ...routeModuleList,
  PAGE_NOT_FOUND_ROUTE
]

const routes: Array<AppRouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue'),
    meta: {
      title: ''
    }
  },
  {
    path: '/',
    name: 'Homea',
    component: () => import('@/components/layou/layou.vue'),
    meta: {
      title: ''
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: ''
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes as unknown as RouteRecordRaw[]
})

export default router
