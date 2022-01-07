import { App } from 'vue'
import { createI18n, I18n, I18nOptions } from 'vue-i18n'

export let i18n: ReturnType<typeof createI18n>

function createI18nOptions (): Promise<I18nOptions> {
  return Promise.resolve({})
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
