import loyou from '@/components/layou/layou.vue'
import { RoleEnum } from '@/enums/roleEnum'
import { t } from '@/hook/web/useI18n'
import { AppRouteRecordRaw } from '../types'

const comp: AppRouteRecordRaw = {
  path: '/comp',
  name: 'Comp',
  component: loyou,
  redirect: '/comp/cropper',
  meta: {
    orderNo: 30,
    icon: 'aim',
    title: t('routes.dynamicSidebar.comp.comp')
  },
  children: [
    {
      path: 'cropper',
      name: 'CropperDemo',
      component: () => import('@/views/comp/cropper/index.vue'),
      meta: {
        title: t('routes.dynamicSidebar.comp.cropperImage'),
        svg: 'fold'
      }
    },
    {
      path: 'countTo',
      name: 'CountTo',
      component: () => import('@/views/comp/count-to/index.vue'),
      meta: {
        title: t('routes.dynamicSidebar.comp.countTo'),
        svg: 'unfold',
        roles: [RoleEnum.SUPER, RoleEnum.TEST]
      }
    },
    {
      path: 'qrcode',
      name: 'QrCodeDemo',
      component: () => import('@/views/comp/qrcode/index.vue'),
      meta: {
        title: t('routes.dynamicSidebar.comp.qrcode')
      }
    }

  ]
}
export default comp
