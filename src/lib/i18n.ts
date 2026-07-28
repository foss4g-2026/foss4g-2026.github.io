import { addMessages, init, locale as i18nLocale } from 'svelte-i18n'
import en from './translations/en.json'
import ja from './translations/ja.json'

init({
  fallbackLocale: 'en',   // default locale
  initialLocale: 'en'    // will be overridden
})

// Translation JSON contains nested string[][] tables that don't match svelte-i18n's
// LocaleDictionary type; cast to satisfy addMessages.
addMessages('en', en as never)
addMessages('ja', ja as never)

export function setupI18n(locale: string = 'en') {
  i18nLocale.set(locale)
}