import loyou from '@/components/layou/layou.vue'
import { AppRouteRecordRaw } from '../types'
import BlankView from '@/components/BlankView/BlankView.vue'
import { t } from '@/hook/web/useI18n'
const page: AppRouteRecordRaw = {
  path: '/page-demo',
  name: 'PageDemo',
  component: loyou,
  redirect: '/page-demo/form/basic',
  meta: {
    title: '页面123',
    single: true
  },
  children: [{
    path: 'form',
    name: 'form',
    component: BlankView,
    redirect: '/page-demo/form/basic',
    children: [{
      path: 'basic',
      name: 'basic',
      component: () => import('@/views/page/result/index.vue'),
      meta: {
        orderNo: 20,
        icon: 'aim',
        title: t('routes.dynamicSidebar.page.page'),
        svg: 'unfold'
      }
    }]
  }]
}

export default page
