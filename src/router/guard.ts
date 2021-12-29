import { TOKEN_KEY } from '@/store/const'
import { getItem } from '@/utils/storage'
import { Router } from 'vue-router'
import { WHITE_NAME_LIST } from './index'

export function setupRouterGuard (router: Router):void {
  router.beforeEach((to, from, next) => {
    console.log(to)
    // console.log(from)
    if (WHITE_NAME_LIST.includes(to.path)) {
      next()
      return
    }
    if (getItem(TOKEN_KEY)) {
      next()
    } else {
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
    }
  })
}
