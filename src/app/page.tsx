'use client'

import React from 'react'
import { ArrowRight, Code, Palette, Smartphone, Monitor, MessageCircle } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Olá, eu sou{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Israel Araujo
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Desenvolvedor Full Stack especializado em criar experiências digitais 
            modernas e responsivas com tecnologias de ponta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/projects"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
            >
              Ver Projetos
              <ArrowRight size={20} className="ml-2" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 font-semibold"
            >
              Entre em Contato
            </a>
          </div>
        </div>
      </section>

      {/* Layout Demo Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Layout Responsivo Moderno
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Design adaptativo que funciona perfeitamente em todos os dispositivos
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Desktop */}
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Monitor size={32} className="text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Desktop
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Sidebar fixa com 4rem de largura, navegação vertical e chat flutuante
              </p>
              <div className="text-sm text-blue-600 dark:text-blue-400">
                • Sidebar fixa esquerda<br />
                • Área principal responsiva<br />
                • Chat flutuante<br />
                • Seletor de idioma
              </div>
            </div>

            {/* Tablet */}
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Palette size={32} className="text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Tablet
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Layout híbrido com navegação adaptativa e interface otimizada
              </p>
              <div className="text-sm text-purple-600 dark:text-purple-400">
                • Header móvel<br />
                • Bottom navigation<br />
                • Interface adaptativa<br />
                • Transições suaves
              </div>
            </div>

            {/* Mobile */}
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Smartphone size={32} className="text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Mobile
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Navegação bottom, header compacto e experiência touch-friendly
              </p>
              <div className="text-sm text-green-600 dark:text-green-400">
                • Header móvel fixo<br />
                • Bottom navigation<br />
                • Chat flutuante adaptado<br />
                • Touch optimized
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Funcionalidades Implementadas
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Tudo o que você solicitou, implementado com as melhores práticas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code size={24} className="text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Sidebar Fixa
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                4rem de largura, apenas no desktop com navegação vertical
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Smartphone size={24} className="text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Mobile First
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Header e bottom navigation otimizados para mobile
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Monitor size={24} className="text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Responsivo
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Detecção de dispositivo e layout adaptativo
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageCircle size={24} className="text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Chat IA
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Chat flutuante com interface moderna e responsiva
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Demo */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Teste a Navegação
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Explore todas as seções usando a navegação lateral (desktop) ou bottom (mobile)
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a
              href="/"
              className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 text-center"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-2">🏠</div>
              <span className="text-sm font-medium text-gray-900 dark:text-white">Home</span>
            </a>
            <a
              href="/projects"
              className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 text-center"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-2">📁</div>
              <span className="text-sm font-medium text-gray-900 dark:text-white">Projetos</span>
            </a>
            <a
              href="/contact"
              className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 text-center"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-2">✉️</div>
              <span className="text-sm font-medium text-gray-900 dark:text-white">Contato</span>
            </a>
            <a
              href="/chat"
              className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 text-center"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-2">💬</div>
              <span className="text-sm font-medium text-gray-900 dark:text-white">Chat IA</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}