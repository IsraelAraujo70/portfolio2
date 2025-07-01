import React from 'react'
import { MessageCircle, Bot, User } from 'lucide-react'

export default function ChatPage() {
  return (
    <div className="max-w-4xl mx-auto h-[calc(100vh-8rem)]">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <MessageCircle size={32} className="text-blue-600 dark:text-blue-400 mr-3" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Chat IA
          </h1>
        </div>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Converse comigo sobre tecnologia, projetos e oportunidades!
        </p>
      </div>

      {/* Chat Container */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden h-full max-h-[600px] flex flex-col">
        
        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {/* Welcome Message */}
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
              <Bot size={16} className="text-white" />
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs lg:max-w-md">
              <p className="text-gray-900 dark:text-white text-sm">
                Olá! Eu sou o assistente virtual do Israel. Como posso ajudá-lo hoje? 
                Pode me perguntar sobre projetos, tecnologias ou qualquer coisa relacionada ao desenvolvimento!
              </p>
            </div>
          </div>

          {/* Example User Message */}
          <div className="flex items-start space-x-3 justify-end">
            <div className="bg-blue-600 rounded-2xl rounded-tr-sm px-4 py-3 max-w-xs lg:max-w-md">
              <p className="text-white text-sm">
                Que tecnologias você domina?
              </p>
            </div>
            <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
              <User size={16} className="text-gray-600 dark:text-gray-300" />
            </div>
          </div>

          {/* Example AI Response */}
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
              <Bot size={16} className="text-white" />
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs lg:max-w-md">
              <p className="text-gray-900 dark:text-white text-sm">
                Israel é especialista em:
                <br />• React & Next.js
                <br />• TypeScript & JavaScript
                <br />• Node.js & Express
                <br />• PostgreSQL & Prisma
                <br />• Tailwind CSS
                <br />• Docker & AWS
                <br />
                <br />Ele também tem experiência com IA e automação!
              </p>
            </div>
          </div>
        </div>

        {/* Chat Input */}
        <div className="border-t border-gray-200 dark:border-gray-700 p-4">
          <div className="flex space-x-3">
            <input
              type="text"
              placeholder="Digite sua mensagem..."
              className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              disabled
            />
            <button
              className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors duration-200 font-semibold opacity-50 cursor-not-allowed"
              disabled
            >
              Enviar
            </button>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
            Chat em desenvolvimento - Use o chat flutuante para interações em tempo real
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
            <MessageCircle size={24} className="text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
            Conversas Naturais
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Converse naturalmente sobre qualquer tópico relacionado a tecnologia
          </p>
        </div>

        <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Bot size={24} className="text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
            Assistente Inteligente
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Powered by IA para responder sobre projetos e experiências
          </p>
        </div>

        <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
            <User size={24} className="text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
            Suporte Personalizado
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Respostas personalizadas baseadas no perfil e projetos
          </p>
        </div>
      </div>
    </div>
  )
}