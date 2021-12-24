import loyou from '@/components/layou/layou.vue'
import { AppRouteRecordRaw } from '../types'

const comp: AppRouteRecordRaw = {
  path: '/comp',
  name: 'Comp',
  component: loyou,
  redirect: '/comp/basic',
  meta: {
    orderNo: 30,
    icon: 'aim',
    title: '组件'
  },
  children: [
    {
      path: 'cropper',
      name: 'CropperDemo',
      component: () => import('@/views/comp/cropper/index.vue'),
      meta: {
        title: '图片插件',
        svg: 'fold'
      }
    },
    {
      path: 'countTo',
      name: 'CountTo',
      component: () => import('@/views/comp/count-to/index.vue'),
      meta: {
        title: '数字组件'
      }
    },
    {
      path: 'qrcode',
      name: 'QrCodeDemo',
      component: () => import('@/views/comp/qrcode/index.vue'),
      meta: {
        title: '二维码'
      }
    }
  ]
}
export default comp
