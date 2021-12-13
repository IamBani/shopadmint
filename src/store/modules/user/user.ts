import { rootState } from '@/store/interface'
import { Module } from 'vuex'
import userState from './interface'

const user:Module<userState, rootState> = {
  namespaced: true,
  state: {
    username: 'jock'
  }
}
export default user
