import { AppRouteRecordRaw } from '@/router/types'
import { rootState } from '@/store/interface'
import { Module } from 'vuex'
import permissionState from './interface'
import user from '../user/user'
import { toRaw } from 'vue'
import { RoleEnum } from '@/enums/roleEnum'
import { filter } from '@/utils/tree'
import router, { asyncRoutes } from '@/router'
const permission:Module<permissionState, rootState> = {
  namespaced: true,
  state: {
    backMenuList: []
  },
  mutations: {
    setBackMenuList (state, list: AppRouteRecordRaw[]) {
      state.backMenuList = list
    }
  },
  actions: {
    buildRoutesAction ({ rootGetters, commit }) {
      let routes: AppRouteRecordRaw[] = []
      const roleList:RoleEnum[] = toRaw(rootGetters['user/getRoleList']) || []
      const routeFilter = (route: AppRouteRecordRaw) => {
        const { meta } = route
        const roles = meta?.roles as RoleEnum[]
        if (!roles) return true
        return roleList.some((role) => roles.includes(role))
      }
      const menuList = routes = filter(asyncRoutes, routeFilter)
      // routes = routes.filter(routeFilter)
      // const menuList = transformRouteToMenu(routes, true)
      // routes = filter(routes, routeRemoveIgnoreFilter)
      // routes = routes.filter(routeRemoveIgnoreFilter)
      menuList.sort((a, b) => {
        return (a?.meta?.orderNo || 0) - (b?.meta?.orderNo || 0)
      })
      console.log(routes, roleList, 'sds')
      commit('setBackMenuList', routes)
      return routes
    }
  },
  getters: {
    getBackMenuList (state): AppRouteRecordRaw[] {
      return state.backMenuList
    }
  }
}
export default permission
