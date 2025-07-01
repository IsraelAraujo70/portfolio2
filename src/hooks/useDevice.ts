'use client'

import { useState, useEffect } from 'react'

export type DeviceType = 'mobile' | 'tablet' | 'desktop'

export function useDevice() {
  const [device, setDevice] = useState<DeviceType>('desktop')
  const [isDesktop, setIsDesktop] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth
      
      if (width < 768) {
        setDevice('mobile')
        setIsMobile(true)
        setIsTablet(false)
        setIsDesktop(false)
      } else if (width < 1024) {
        setDevice('tablet')
        setIsMobile(false)
        setIsTablet(true)
        setIsDesktop(false)
      } else {
        setDevice('desktop')
        setIsMobile(false)
        setIsTablet(false)
        setIsDesktop(true)
      }
    }

    checkDevice()
    window.addEventListener('resize', checkDevice)
    
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  return {
    device,
    isDesktop,
    isMobile,
    isTablet
  }
}