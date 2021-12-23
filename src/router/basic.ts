import type { AppRouteRecordRaw } from '@/router/types'
import loyou from '@/components/layou/layou.vue'
import {
  REDIRECT_NAME,
  EXCEPTION_COMPONENT,
  PAGE_NOT_FOUND_NAME
} from '@/router/constant'

export const PAGE_NOT_FOUND_ROUTE: AppRouteRecordRaw = {
  path: '/:path(.*)*',
  name: PAGE_NOT_FOUND_NAME,
  component: loyou,
  meta: {
    title: 'ErrorPage',
    hideBreadcrumb: true,
    hideMenu: true
  },
  children: [
    {
      path: '/:path(.*)*',
      name: PAGE_NOT_FOUND_NAME,
      component: EXCEPTION_COMPONENT,
      meta: {
        title: 'ErrorPage',
        hideBreadcrumb: true,
        hideMenu: true
      }
    }
  ]
}
