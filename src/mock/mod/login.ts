import { LoginResultModel, LoginParams } from '@/api/apiResponseInterface'
import Mock from 'mockjs'
import qs from 'qs'
Mock.setup({
  timeout: '300-600'
})

export function login () {
  Mock.mock('/login', 'post', (ops) => {
    const { username, password } = qs.parse(ops.body)
    if (username === 'admin' && password === '888888') {
      return {
        code: 200,
        message: '成功',
        data: {
          roles: [{
            roleName: 'Super Admin',
            value: 'super'
          }],
          token: 'fakeToken1',
          userId: '1'
        } as LoginResultModel
      }
    } else {
      return {
        code: 200,
        message: '密码错误',
        data: null
      }
    }
  })
}
