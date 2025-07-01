'use client'

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Home, FolderOpen, Mail, MessageCircle } from 'lucide-react'
import { clsx } from 'clsx'

interface MobileNavigationProps {
  currentLang: string
}

const navigationItems = [
  {
    id: 'home',
    icon: Home,
    href: '/',
    labelPt: 'Início',
    labelEn: 'Home'
  },
  {
    id: 'projects',
    icon: FolderOpen,
    href: '/projects',
    labelPt: 'Projetos',
    labelEn: 'Projects'
  },
  {
    id: 'contact',
    icon: Mail,
    href: '/contact',
    labelPt: 'Contato',
    labelEn: 'Contact'
  },
  {
    id: 'chat',
    icon: MessageCircle,
    href: '/chat',
    labelPt: 'Chat IA',
    labelEn: 'AI Chat'
  }
]

export default function MobileNavigation({ currentLang }: MobileNavigationProps) {
  const router = useRouter()
  const currentPath = router?.asPath || '/'

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 px-4 py-2 z-50">
      <div className="flex items-center justify-around">
        {navigationItems.map((item) => {
          const isActive = currentPath === item.href || 
            (item.href !== '/' && currentPath.startsWith(item.href))
          const Icon = item.icon
          const label = currentLang === 'pt' ? item.labelPt : item.labelEn

          return (
            <Link
              key={item.id}
              href={item.href}
              className={clsx(
                'flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-200 min-w-0 flex-1',
                isActive
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
              )}
            >
              <Icon size={20} className="mb-1" />
              <span className="text-xs truncate w-full text-center">
                {label}
              </span>
              {isActive && (
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
              )}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}