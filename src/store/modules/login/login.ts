import { GetUserInfoModel, LoginParams } from '@/api/apiResponseInterface'
import { rootState } from '@/store/interface'
import { Module } from 'vuex'
import loginState from './interface'
import { login as httpLogin } from '@/axios/http/login'
import { setItem } from '@/utils/storage'
import { TOKEN_KEY } from '@/store/const'
import { useRouter } from 'vue-router'
import router from '@/router'

console.log(43435564)
const login:Module<loginState, rootState> = {
  namespaced: true,
  state: {
    token: ''
  },
  mutations: {
    token (state, info) {
      state.token = info
    }
  },
  actions: {
    setToken (context, info) {
      context.commit('token', info)
      setItem(TOKEN_KEY, info)
    },
    async login (context, params: LoginParams): Promise<GetUserInfoModel | any> {
      const { data } = await httpLogin(params)
      const { token } = data.data
      context.dispatch('setToken', token)
      await context.dispatch('user/setUser', {}, { root: true })

      const routes = await context.dispatch('permission/buildRoutesAction', {}, { root: true })

      routes.forEach(element => {
        router.addRoute(element)
      })
      return data
    }
  },
  getters: {
    getToken (context) {
      return context.token
    }
  }
}
export default login
