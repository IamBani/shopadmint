import store from '@/store'
import { TOKEN_KEY } from '@/store/const'
import { getItem } from '@/utils/storage'
import { Router } from 'vue-router'
import { WHITE_NAME_LIST } from './index'

export function setupRouterGuard (router: Router):void {
  router.beforeEach(async (to, from, next) => {
    console.log(router)
    if (WHITE_NAME_LIST.includes(to.path)) {
      next()
      return
    }
    if (!getItem(TOKEN_KEY)) {
      const redirectData: { path: string; replace: boolean; query?: Recordable<string> } = {
        path: '/login',
        replace: true
      }
      if (to.path) {
        redirectData.query = {
          ...redirectData.query,
          redirect: to.path
        }
      }
      next(redirectData)
      return
    }
    if (!store.getters['user/getUserInfo']) {
      store.dispatch('login/setToken', getItem(TOKEN_KEY))
      const user = await store.dispatch('user/setUser')
      const routes = await store.dispatch('permission/buildRoutesAction')
      routes.forEach(element => {
        router.addRoute(element)
      })
      next({ path: to.fullPath, replace: true, query: to.query })
      return
    }
    next()
  })
}
