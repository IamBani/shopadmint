import { genMessage } from '../helper'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import { LOCALE } from '@/components/layou/i18n/hook/localeSetting'

const req = require.context('@/locales/lang/zh-CN', true, /\.ts$/)

const modules = (context) => {
  const obj = {}
  context.keys().forEach(item => {
    obj[item] = context(item)
  })
  return obj
}
export default {
  message: {

    ...genMessage(modules(req), 'zh-CN'),
    [LOCALE.ZH_CN]: zhCn
  }
}
