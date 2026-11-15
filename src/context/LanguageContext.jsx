import React, { createContext, useContext, useEffect, useState } from 'react'

const STORAGE_KEY = 'jirath_portfolio_lang'

const LanguageContext = createContext({
  lang: 'en',
  setLang: () => {},
  toggleLang: () => {},
})

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'en'
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY)
      return saved === 'th' ? 'th' : 'en'
    } catch {
      return 'en'
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
      document.documentElement.lang = lang
    } catch {
      // Ignore storage failures in restricted contexts
    }
  }, [lang])

  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'th' : 'en'))
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
