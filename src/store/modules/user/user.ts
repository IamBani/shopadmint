import { RoleEnum } from '@/enums/roleEnum'
import { rootState } from '@/store/interface'
import { Module } from 'vuex'
import userState from './interface'

const user:Module<userState, rootState> = {
  namespaced: true,
  state: {
    username: '',
    roleList: []
  },
  getters: {
    getRoleList (state):RoleEnum[] {
      return state.roleList
    }
  }
}
export default user
