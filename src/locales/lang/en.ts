import { genMessage } from '../helper'
import { LOCALE } from '@/components/layou/i18n/hook/localeSetting'
import en from 'element-plus/lib/locale/lang/en'
const req = require.context('@/locales/lang/en', true, /\.ts$/)
const modules = (context) => {
  const obj = {}
  context.keys().forEach(item => {
    obj[item] = context(item)
  })
  return obj
}
export default {
  message: {

    ...genMessage(modules(req), 'en'),
    [LOCALE.EN_US]: en
  }
}
