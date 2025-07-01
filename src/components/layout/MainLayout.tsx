'use client'

import React, { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import MobileNavigation from './MobileNavigation'
import MobileHeader from './MobileHeader'
import FloatingChat from './FloatingChat'

interface MainLayoutProps {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [currentLang, setCurrentLang] = useState('pt')
  const [isMobile, setIsMobile] = useState(false)

  // Device detection
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkDevice()
    window.addEventListener('resize', checkDevice)
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  // Language management
  const handleLanguageChange = (lang: string) => {
    setCurrentLang(lang)
    // Here you would typically integrate with next-i18next or your i18n solution
    console.log('Language changed to:', lang)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Desktop Sidebar */}
      <Sidebar 
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
      />

      {/* Mobile Header */}
      <MobileHeader 
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
      />

      {/* Main Content Area */}
      <main 
        className={`
          transition-all duration-300
          lg:ml-16 
          ${isMobile ? 'pt-16 pb-20' : 'pt-0 pb-0'}
          min-h-screen
        `}
      >
        <div className="container mx-auto px-4 py-6 lg:py-8">
          {children}
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <MobileNavigation currentLang={currentLang} />

      {/* Floating Chat */}
      <FloatingChat currentLang={currentLang} />
    </div>
  )
}