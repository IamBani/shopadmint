import loyou from '@/components/layou/layou.vue'
import { AppRouteRecordRaw } from '../types'

const page: AppRouteRecordRaw = {
  path: '/page-demo',
  name: 'PageDemo',
  component: loyou,
  redirect: '/page-demo/form/basic',
  meta: {
    orderNo: 20,
    icon: 'ion:aperture-outline',
    title: '页面'
  }
}

export default page
