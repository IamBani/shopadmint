import { rootState } from '@/store/interface'
import { Module } from 'vuex'
import loginState from './interface'

const login:Module<loginState, rootState> = {
  namespaced: true,
  state: {
    token: '123'
  }
}
export default login
