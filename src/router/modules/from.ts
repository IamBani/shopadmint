import loyou from '@/components/layou/layou.vue'
import { t } from '@/hook/web/useI18n'
import { AppRouteRecordRaw } from '../types'
const from: AppRouteRecordRaw = {
  path: '/from',
  name: 'From',
  component: loyou,
  redirect: '/from/basic',
  meta: {
    orderNo: 30,
    icon: 'aim',
    title: t('routes.dynamicSidebar.comp.comp')
  },
  children: [
    {
      path: 'basic',
      name: 'basic',
      component: () => import('@/views/comp/from/basic.vue'),
      meta: {
        title: t('routes.dynamicSidebar.comp.formBasic'),
        svg: 'fold'
      }
    }, {
      path: 'desc',
      name: 'desc',
      component: () => import('@/views/comp/from/desc.vue'),
      meta: {
        title: t('routes.dynamicSidebar.comp.formHigh'),
        icon: 'edit'
      }
    }
  ]
}
export default from
