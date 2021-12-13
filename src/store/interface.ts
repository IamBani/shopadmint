import loginState from './modules/login/interface'
import userState from './modules/user/interface'

export interface rootState {
  test:string
}
export interface AllStateTypes{
  user:userState,
  login:loginState
}
