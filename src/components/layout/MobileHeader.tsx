'use client'

import React from 'react'
import { Globe, Menu } from 'lucide-react'
import { clsx } from 'clsx'

interface MobileHeaderProps {
  currentLang: string
  onLanguageChange: (lang: string) => void
  onMenuToggle?: () => void
}

export default function MobileHeader({ currentLang, onLanguageChange, onMenuToggle }: MobileHeaderProps) {
  return (
    <header className="lg:hidden fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 py-3 z-50">
      <div className="flex items-center justify-between">
        {/* Logo/Brand */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-bold">IA</span>
          </div>
          <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
            Israel Araujo
          </h1>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          {/* Language Selector */}
          <button
            onClick={() => onLanguageChange(currentLang === 'pt' ? 'en' : 'pt')}
            className="relative flex items-center justify-center w-10 h-10 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-200"
            aria-label={currentLang === 'pt' ? 'Switch to English' : 'Mudar para Português'}
          >
            <Globe size={20} />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center font-semibold">
              {currentLang.toUpperCase()}
            </span>
          </button>

          {/* Menu Button (if needed for future features) */}
          {onMenuToggle && (
            <button
              onClick={onMenuToggle}
              className="flex items-center justify-center w-10 h-10 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-200"
              aria-label="Menu"
            >
              <Menu size={20} />
            </button>
          )}
        </div>
      </div>
    </header>
  )
}