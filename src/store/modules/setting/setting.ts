import { rootState } from '@/store/interface'
import { Module } from 'vuex'
import settingState from './interface'

const setting:Module<settingState, rootState> = {
  namespaced: true,
  state: {
    asidewidth: '260px',
    isCollapse: false
  },
  mutations: {
    ADD_COUNT (state) {
      state.isCollapse = !state.isCollapse
      state.asidewidth = state.isCollapse ? '64px' : '260px'
    }
  },
  getters: {
    tenfold (state: settingState): boolean {
      return state.isCollapse
    },
    asideWidth (state: settingState):string {
      return state.asidewidth
    }
  }
}
export default setting
