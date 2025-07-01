'use client'

import React, { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import MobileNavigation from './MobileNavigation'
import MobileHeader from './MobileHeader'
import FloatingChat from './FloatingChat'
import CustomFullPageScroll from '@/components/CustomFullPageScroll'
import { useDevice } from '@/hooks/useDevice'

interface MainLayoutProps {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [currentLang, setCurrentLang] = useState('pt')
  const { isMobile, isDesktop } = useDevice()

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
          ${isDesktop ? 'ml-16' : ''}
          ${isMobile ? 'pt-16 pb-20' : 'pt-0 pb-0'}
          ${isDesktop ? 'h-screen overflow-hidden' : 'min-h-screen'}
        `}
      >
        <CustomFullPageScroll>
          {children}
        </CustomFullPageScroll>
      </main>

      {/* Mobile Bottom Navigation */}
      <MobileNavigation currentLang={currentLang} />

      {/* Floating Chat */}
      <FloatingChat currentLang={currentLang} />
    </div>
  )
}