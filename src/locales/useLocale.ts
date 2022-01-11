import { unref } from 'vue'
import { i18n } from './setupI18n'
import { loadLocalePool, setHtmlPageLang } from './helper'
import store from '@/store'

interface LangModule {
  message: Recordable;
  momentLocale: Recordable;
  momentLocaleName: string;
}

function setI18nLanguage (locale: LocaleType) {
  if (i18n.mode === 'legacy') {
    i18n.global.locale = locale
  } else {
    (i18n.global.locale as any).value = locale
  }
  store.commit('language/setLang', locale)
  setHtmlPageLang(locale)
}

export async function changeLocale (locale: LocaleType) {
  const globalI18n = i18n.global
  const currentLocale = unref(globalI18n.locale)
  if (currentLocale === locale) {
    return locale
  }

  if (loadLocalePool.includes(locale)) {
    setI18nLanguage(locale)
    return locale
  }
  const langModule = ((await import(`./lang/${locale}.ts`)) as any).default as LangModule
  if (!langModule) return

  const { message, momentLocale, momentLocaleName } = langModule

  globalI18n.setLocaleMessage(locale, message)
  loadLocalePool.push(locale)

  setI18nLanguage(locale)
  return locale
}
