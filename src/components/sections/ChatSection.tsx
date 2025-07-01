'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Bot, Sparkles, ArrowRight } from 'lucide-react'

export default function ChatSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-6"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Bot size={32} className="text-white" />
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Chat com IA
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Converse comigo através do meu assistente de IA! Tire dúvidas sobre meus projetos, 
            habilidades ou qualquer coisa relacionada ao desenvolvimento web.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
              <MessageCircle size={24} className="text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Respostas Inteligentes
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              IA treinada com informações sobre meus projetos, experiências e habilidades técnicas
            </p>
          </motion.div>

          <motion.div 
            className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Sparkles size={24} className="text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Disponível 24/7
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Chat sempre disponível para responder suas perguntas sobre meu trabalho
            </p>
          </motion.div>

          <motion.div 
            className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Bot size={24} className="text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Experiência Natural
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Interface intuitiva com conversas fluidas e naturais
            </p>
          </motion.div>
        </motion.div>

        {/* Chat Preview */}
        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="space-y-4">
            <motion.div 
              className="flex items-start space-x-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Bot size={16} className="text-white" />
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg px-4 py-2 max-w-xs">
                <p className="text-sm text-gray-800 dark:text-gray-200">
                  Olá! Como posso ajudá-lo hoje? Posso falar sobre os projetos do Israel, suas habilidades técnicas ou experiência profissional.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start space-x-3 justify-end"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-blue-600 rounded-lg px-4 py-2 max-w-xs">
                <p className="text-sm text-white">
                  Quais tecnologias o Israel domina?
                </p>
              </div>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">U</span>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start space-x-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              viewport={{ once: true }}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Bot size={16} className="text-white" />
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg px-4 py-2 max-w-xs">
                <p className="text-sm text-gray-800 dark:text-gray-200">
                  Israel é especialista em React, Next.js, TypeScript, Node.js, Python e várias outras tecnologias modernas. Ele tem experiência tanto em frontend quanto backend!
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 font-semibold text-lg shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle size={20} className="mr-2" />
            Iniciar Conversa
            <ArrowRight size={20} className="ml-2" />
          </motion.button>
          
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Clique no ícone de chat flutuante para começar
          </p>
        </motion.div>
      </div>
    </section>
  )
}