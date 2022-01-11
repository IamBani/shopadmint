import { DropMenu } from './type'

export const LOCALE: { [key: string]: LocaleType } = {
  ZH_CN: 'zh-CN',
  EN_US: 'en'
}

export const localeList:DropMenu[] = [
  {
    text: '简体中文',
    command: LOCALE.ZH_CN
  },
  {
    text: 'English',
    command: LOCALE.EN_US
  }
]
