import loginState from './modules/login/interface'
import permissionState from './modules/permission/interface'
import settingState from './modules/setting/interface'
import userState from './modules/user/interface'
import languageState from './modules/language/interface'

export interface rootState {
  test:string
}
export interface AllStateTypes{
  user:userState,
  login: loginState,
  setting: settingState,
  permission: permissionState,
  language:languageState
}
