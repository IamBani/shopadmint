import { asyncRoutes } from '@/router'
import { AppRoute } from '@/router/types'
import store from '@/store'
import { unref, watch, ref, Ref } from 'vue'
import { useRouter } from 'vue-router'

function menuDataFilter (): AppRoute {
  const permissionStore = store.getters['permission/getBackMenuList']
  const items = permissionStore.filter(item => {
    return !item?.meta?.hideMenu
  })
  return items as unknown as AppRoute
}
export function useSplitMenu ():Ref {
  const { currentRoute } = useRouter()
  const pathname = ref('')
  watch([() => unref(currentRoute).path], async ([path]) => {
    pathname.value = path
  }, {
    immediate: true
  })
  return pathname
}

export default menuDataFilter
