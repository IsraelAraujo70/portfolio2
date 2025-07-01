import { useState, useEffect } from 'react'

export type Language = 'pt' | 'en'

export interface LanguageContextType {
  currentLang: Language
  setLanguage: (lang: Language) => void
  t: (key: string, fallback?: string) => string
}

// Simplified translation function for now
const translations: Record<Language, Record<string, string>> = {
  pt: {
    'nav.home': 'Início',
    'nav.projects': 'Projetos',
    'nav.contact': 'Contato',
    'nav.chat': 'Chat IA',
    'chat.title': 'Chat IA',
    'chat.placeholder': 'Digite sua mensagem...',
    'chat.welcome': 'Envie uma mensagem para começar!',
    'chat.ai_response': 'Olá! Como posso ajudá-lo hoje?',
    'lang.switch': 'Mudar para Português',
    'chat.open': 'Abrir Chat IA'
  },
  en: {
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.chat': 'AI Chat',
    'chat.title': 'AI Chat',
    'chat.placeholder': 'Type your message...',
    'chat.welcome': 'Send a message to get started!',
    'chat.ai_response': 'Hello! How can I help you today?',
    'lang.switch': 'Switch to English',
    'chat.open': 'Open AI Chat'
  }
}

export function useLanguage(): LanguageContextType {
  const [currentLang, setCurrentLang] = useState<Language>('pt')

  useEffect(() => {
    // Get language from localStorage or browser
    const savedLang = localStorage.getItem('language') as Language
    const browserLang = navigator.language.startsWith('pt') ? 'pt' : 'en'
    
    setCurrentLang(savedLang || browserLang)
  }, [])

  const setLanguage = (lang: Language) => {
    setCurrentLang(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: string, fallback?: string): string => {
    return translations[currentLang][key] || fallback || key
  }

  return {
    currentLang,
    setLanguage,
    t
  }
}