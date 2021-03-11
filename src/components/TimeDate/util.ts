const LOCALES: {readonly [key: string]: string} = {
  en: 'en-GB',
  ru: 'ru-RU',
  de: 'de-DE',
}

export const getTime = (language: string, timeZone: string): string => {
  return new Date().toLocaleTimeString(LOCALES[language], {timeZone, hour12: false })
}

export const getWeekDay = (language: string, timeZone: string): string => {
  return new Date().toLocaleDateString(LOCALES[language], {timeZone, weekday: 'long' })
}

export const getDate = (language: string, timeZone: string): string => {
  return new Date().toLocaleDateString(LOCALES[language], {timeZone, day: 'numeric', month: 'long' })
}
