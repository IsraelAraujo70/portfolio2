'use client'

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Home, FolderOpen, Mail, MessageCircle, Globe } from 'lucide-react'
import { clsx } from 'clsx'

interface SidebarProps {
  currentLang: string
  onLanguageChange: (lang: string) => void
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

export default function Sidebar({ currentLang, onLanguageChange }: SidebarProps) {
  const router = useRouter()
  const currentPath = router?.asPath || '/'

  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-full w-16 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex-col items-center py-6 z-40">
      {/* Logo/Brand */}
      <div className="mb-8">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
          <span className="text-white text-sm font-bold">IA</span>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 flex flex-col space-y-4">
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
                'group relative flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200',
                isActive
                  ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100'
              )}
              title={label}
            >
              <Icon size={20} />
              
              {/* Tooltip */}
              <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                {label}
              </div>
            </Link>
          )
        })}
      </nav>

      {/* Language Selector */}
      <div className="mt-auto">
        <button
          onClick={() => onLanguageChange(currentLang === 'pt' ? 'en' : 'pt')}
          className="group relative flex items-center justify-center w-10 h-10 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-200"
          title={currentLang === 'pt' ? 'Switch to English' : 'Mudar para Português'}
        >
          <Globe size={20} />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center font-semibold">
            {currentLang.toUpperCase()}
          </span>
          
          {/* Tooltip */}
          <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
            {currentLang === 'pt' ? 'English' : 'Português'}
          </div>
        </button>
      </div>
    </aside>
  )
}