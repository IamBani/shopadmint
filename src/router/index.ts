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
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      title: ''
    }
  }
]
const WHITE_NAME_LIST: string[] = []
const getRouteNames = (array: any[]) =>
  array.forEach((item) => {
    WHITE_NAME_LIST.push(item.name, item.path)
    getRouteNames(item.children || [])
  })
getRouteNames(routes)
console.log(WHITE_NAME_LIST)
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes as unknown as RouteRecordRaw[]
})
export { WHITE_NAME_LIST }
export default router
