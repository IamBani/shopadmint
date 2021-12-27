import { GetUserInfoModel, LoginParams } from '@/api/apiResponseInterface'
import { rootState } from '@/store/interface'
import { Module } from 'vuex'
import loginState from './interface'
import { login as httpLogin } from '@/axios/http/login'
const login:Module<loginState, rootState> = {
  namespaced: true,
  state: {
    token: '123'
  },
  mutations: {
    token (state, info) {
      state.token = info
    }
  },
  actions: {
    setToken (context, info) {
      context.commit('token', info)
      // setAuthCache(TOKEN_KEY, info)
    },
    async login (context, params: LoginParams): Promise<GetUserInfoModel | any> {
      const { data } = await httpLogin(params)
      console.log(data)
      const { token } = data.data
      context.dispatch('setToken', token)
      return data
    }
  },
  getters: {

  }
}
export default login
