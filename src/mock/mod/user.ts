import { GetUserInfoModel } from '@/api/apiResponseInterface'
import Mock from 'mockjs'

Mock.setup({
  timeout: '300-600'
})

export function user () {
  Mock.mock('/user', 'get', (option) => {
    return {
      code: 200,
      message: '成功',
      data: {
        roles: [{
          roleName: 'Super Admin',
          value: 'super'
        }],
        // 用户id
        userId: '123455',
        // 用户名
        username: '熔岩巨兽',
        // 真实名字
        realName: '石头人',
        // 头像
        avatar: 'https://p26-passport.byteacctimg.com/img/user-avatar/335a50aa328e6fdaad30b0c9a51e3c64~300x300.image'
      } as GetUserInfoModel
    }
  })
}
