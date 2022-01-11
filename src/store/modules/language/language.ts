import { rootState } from '@/store/interface'
import { Module } from 'vuex'
import languageState from './interface'

const language:Module<languageState, rootState> = {
  namespaced: true,
  state: {
    lang: 'zh-CN'
    // lang: 'en'
  },
  mutations: {
    setLang (state, data) {
      state.lang = data
    }
  },
  getters: {
    getlange (state: languageState): string {
      return state.lang
    }
  }
}
export default language
