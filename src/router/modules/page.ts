import loyou from '@/components/layou/layou.vue'
import { AppRouteRecordRaw } from '../types'
import BlankView from '@/components/BlankView/BlankView.vue'
import { t } from '@/hook/web/useI18n'
const page: AppRouteRecordRaw = {
  path: '/pagedemo',
  name: 'pageDemo',
  component: loyou,
  redirect: '/pagedemo/form1/basic1',
  meta: {
    title: '页面123',
    single: true
  },
  children: [
    {
      path: 'form1',
      name: 'form1',
      component: BlankView,
      redirect: '/pagedemo/form1/basic1',
      children: [
        {
          path: 'basic1',
          name: 'basic1',
          component: () => import('@/views/page/result/index.vue'),
          meta: {
            orderNo: 20,
            icon: 'aim',
            title: t('routes.dynamicSidebar.page.page'),
            svg: 'unfold'
          }
        }
      ]
    }
  ]
}

export default page
