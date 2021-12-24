import loyou from '@/components/layou/layou.vue'
import { AppRouteRecordRaw } from '../types'

const page: AppRouteRecordRaw = {
  path: '/page-demo',
  name: 'PageDemo',
  component: loyou,
  redirect: '/page-demo/form/basic',
  meta: {
    orderNo: 20,
    icon: 'aim',
    title: '页面',
    svg: 'unfold'
  }
}

export default page