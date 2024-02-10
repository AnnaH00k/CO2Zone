import 'server-only'
 
const dictionaries = {
  en: () => import('../[lang]/dictionaries/en.json').then((module) => module.default),
  nl: () => import('../[lang]/dictionaries/nl.json').then((module) => module.default),
}
 
export const getDictionary = async (locale) => dictionaries[locale]()