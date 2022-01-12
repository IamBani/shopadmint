import store from '@/store'
import { App } from 'vue'
import { createI18n, I18n, I18nOptions } from 'vue-i18n'
import { setHtmlPageLang } from './helper'

export let i18n: ReturnType<typeof createI18n>

async function createI18nOptions (): Promise<I18nOptions> {
  const locale = store.getters['language/getlange']
  const defaultLocal = await import(`./lang/${locale}.ts`)
  const message = defaultLocal.default?.message ?? {}
  console.log(message)
  setHtmlPageLang(locale)
  return Promise.resolve({
    legacy: false,
    globalInjection: true,
    locale: locale,
    messages: {
      [locale]: message
    }
  })
  // return {
  //   // legacy: false,
  //   // locale,
  //   // messages: {
  //   //   [locale]: message
  //   // },
  //   // sync: true, // If you don’t want to inherit locale from global scope, you need to set sync of i18n component option to false.
  //   // silentTranslationWarn: true, // true - warning off
  //   // missingWarn: false,
  //   // silentFallbackWarn: true
  // }
}

export async function setupI18n (app: App) {
  const options = await createI18nOptions()
  i18n = createI18n(options) as I18n
  app.use(i18n)
}
