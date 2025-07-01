'use client'

import React, { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useDevice } from '@/hooks/useDevice'
import SectionIndicators from '@/components/ui/SectionIndicators'
import HomeSection from '@/components/sections/HomeSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import ContactSection from '@/components/sections/ContactSection'
import ChatSection from '@/components/sections/ChatSection'

const sections = [
  { id: 'home', name: 'Home', index: 0 },
  { id: 'projects', name: 'Projetos', index: 1 },
  { id: 'contact', name: 'Contato', index: 2 },
  { id: 'chat', name: 'Chat IA', index: 3 },
]

const sectionComponents = [
  HomeSection,
  ProjectsSection,
  ContactSection,
  ChatSection,
]

interface CustomFullPageScrollProps {
  children?: React.ReactNode
}

export default function CustomFullPageScroll({ children }: CustomFullPageScrollProps) {
  const { isDesktop, isMobile, isTablet } = useDevice()
  const [activeSection, setActiveSection] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const touchStartY = useRef<number>(0)

  // Handle wheel scroll for desktop
  const handleWheel = useCallback((event: WheelEvent) => {
    if (!isDesktop || isScrolling) return

    event.preventDefault()
    setIsScrolling(true)

    const direction = event.deltaY > 0 ? 1 : -1
    const nextSection = activeSection + direction

    if (nextSection >= 0 && nextSection < sections.length) {
      setActiveSection(nextSection)
    }

    setTimeout(() => setIsScrolling(false), 1000)
  }, [isDesktop, activeSection, isScrolling])

  // Handle keyboard navigation
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (!isDesktop || isScrolling) return

    switch (event.key) {
      case 'ArrowUp':
        event.preventDefault()
        if (activeSection > 0) {
          setActiveSection(activeSection - 1)
          setIsScrolling(true)
          setTimeout(() => setIsScrolling(false), 1000)
        }
        break
      case 'ArrowDown':
        event.preventDefault()
        if (activeSection < sections.length - 1) {
          setActiveSection(activeSection + 1)
          setIsScrolling(true)
          setTimeout(() => setIsScrolling(false), 1000)
        }
        break
      case 'Home':
        event.preventDefault()
        setActiveSection(0)
        setIsScrolling(true)
        setTimeout(() => setIsScrolling(false), 1000)
        break
      case 'End':
        event.preventDefault()
        setActiveSection(sections.length - 1)
        setIsScrolling(true)
        setTimeout(() => setIsScrolling(false), 1000)
        break
    }
  }, [isDesktop, activeSection, isScrolling])

  // Handle touch events for desktop (trackpad)
  const handleTouchStart = useCallback((event: TouchEvent) => {
    if (!isDesktop) return
    touchStartY.current = event.touches[0].clientY
  }, [isDesktop])

  const handleTouchEnd = useCallback((event: TouchEvent) => {
    if (!isDesktop || isScrolling) return

    const touchEndY = event.changedTouches[0].clientY
    const deltaY = touchStartY.current - touchEndY
    const threshold = 50

    if (Math.abs(deltaY) > threshold) {
      setIsScrolling(true)
      const direction = deltaY > 0 ? 1 : -1
      const nextSection = activeSection + direction

      if (nextSection >= 0 && nextSection < sections.length) {
        setActiveSection(nextSection)
      }

      setTimeout(() => setIsScrolling(false), 1000)
    }
  }, [isDesktop, activeSection, isScrolling])

  // Handle section indicator click
  const handleSectionClick = useCallback((index: number) => {
    if (!isDesktop || isScrolling) return
    setActiveSection(index)
    setIsScrolling(true)
    setTimeout(() => setIsScrolling(false), 1000)
  }, [isDesktop, isScrolling])

  // Add event listeners
  useEffect(() => {
    if (!isDesktop) return

    const container = containerRef.current
    if (!container) return

    container.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('keydown', handleKeyDown)
    container.addEventListener('touchstart', handleTouchStart, { passive: true })
    container.addEventListener('touchend', handleTouchEnd, { passive: true })

    return () => {
      container.removeEventListener('wheel', handleWheel)
      window.removeEventListener('keydown', handleKeyDown)
      container.removeEventListener('touchstart', handleTouchStart)
      container.removeEventListener('touchend', handleTouchEnd)
    }
  }, [isDesktop, handleWheel, handleKeyDown, handleTouchStart, handleTouchEnd])

  // Mobile/Tablet: Regular scroll
  if (isMobile || isTablet) {
    return (
      <div className="min-h-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <HomeSection />
          <ProjectsSection />
          <ContactSection />
          <ChatSection />
          {children}
        </motion.div>
      </div>
    )
  }

  // Desktop: Custom full page scroll
  return (
    <div 
      ref={containerRef}
      className="h-screen overflow-hidden relative"
      style={{ touchAction: 'none' }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          className="h-screen w-full absolute inset-0"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.4, 0, 0.2, 1],
            opacity: { duration: 0.6 }
          }}
        >
          {React.createElement(sectionComponents[activeSection])}
        </motion.div>
      </AnimatePresence>

      {/* Section Indicators - Only on Desktop */}
      <SectionIndicators
        sections={sections}
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
      />

      {/* Scroll Hint */}
      <AnimatePresence>
        {activeSection === 0 && (
          <motion.div
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            <motion.div
              className="flex flex-col items-center text-gray-400 dark:text-gray-500"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-sm mb-2">Role para baixo</span>
              <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center">
                <motion.div
                  className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Section Progress */}
      <div className="fixed bottom-8 right-8 z-40 hidden lg:block">
        <div className="bg-black/20 backdrop-blur-sm rounded-full px-3 py-2">
          <span className="text-white text-sm">
            {activeSection + 1} / {sections.length}
          </span>
        </div>
      </div>

      {children}
    </div>
  )
}