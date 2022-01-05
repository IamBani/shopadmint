import { asyncRoutes } from '@/router'
import { AppRoute } from '@/router/types'
import { useStore } from '@/store'
import { unref, watch } from 'vue'
import { useRouter } from 'vue-router'

function menuDataFilter (): AppRoute {
  const items = asyncRoutes.filter(item => {
    return !item?.meta?.hideMenu
  })
  console.log(items, 134)

  return items as unknown as AppRoute
}
export function useSplitMenu () {
  const { currentRoute } = useRouter()
  const store = useStore()
  watch([() => unref(currentRoute).path], async ([path]) => {
    console.log(path)
    console.log(currentRoute)
    console.log(store)
    const { meta } = unref(currentRoute)
    const menus = await getAsyncMenus(store)
    console.log(menus)
    const parentPath = await getCurrentParentPath(path, menus)
  }, {
    immediate: true
  })
}

export async function getCurrentParentPath (currentPath: string, menus) {

  // const allParentPath = await getAllParentPath(menus, currentPath)
  // return allParentPath?.[0]
}
async function getAsyncMenus (store) {
  const permissionStore = store.getters['permission/getBackMenuList']
  return permissionStore.filter((item) => !item.meta?.hideMenu && !item.hideMenu)
}

export default menuDataFilter
