import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { rootState, AllStateTypes } from './interface'
import login from './modules/login/login'
import user from './modules/user/user'
import setting from './modules/setting/setting'
import permission from './modules/permission/permission'
import language from './modules/language/language'
console.log(12234)
const modules = {
  user,
  login,
  setting,
  permission,
  language
}
export default createStore<rootState>({
  state: {
    test: ''
  },
  mutations: {
  },
  actions: {
  },
  modules
})
export const key: InjectionKey<Store<rootState & AllStateTypes>> = Symbol('1')
export function useStore () {
  return baseUseStore(key)
}
