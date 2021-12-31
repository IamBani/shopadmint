import { RoleEnum } from '@/enums/roleEnum'
import { rootState } from '@/store/interface'
import { Module } from 'vuex'
import userState from './interface'
import { user as httpUser } from '@/axios/http/user'
import { isArray } from '@/utils/is'
const user:Module<userState, rootState> = {
  namespaced: true,
  state: {
    username: '',
    roleList: [],
    userInfo: null
  },
  getters: {
    getRoleList (state):RoleEnum[] {
      return state.roleList
    }
  },
  mutations: {
    setUserInfo (state, info) {
      state.userInfo = info
      // this.lastUpdateTime = new Date().getTime();
      // setAuthCache(USER_INFO_KEY, info);
    },
    setRoleList (state, roleList) {
      state.roleList = roleList
    }
  },
  actions: {
    async getUser ({ rootGetters, commit }) {
      if (!rootGetters['login/getToken']) { return }
      const { data } = await httpUser()
      console.log(data)
      const userInfo = data.data
      const { roles = [] } = userInfo
      if (isArray(roles)) {
        const roleList = roles.map((item) => item.value) as RoleEnum[]
        commit('setRoleList', roleList)
      } else {
        userInfo.roles = []
        commit('setRoleList', [])
      }
      commit('setUserInfo', userInfo)
      return userInfo
    }
  }
}
export default user
