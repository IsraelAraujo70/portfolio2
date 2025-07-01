'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Code, Palette, Smartphone, Monitor, Database, Globe, Brain } from 'lucide-react'
import Image from 'next/image'

export default function HomeSection() {
  const skills = [
    {
      icon: Code,
      title: "Frontend",
      description: "React, Next.js, TypeScript, Tailwind CSS",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Database,
      title: "Backend",
      description: "Node.js, Python, PostgreSQL, Prisma",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "Full Stack",
      description: "Aplicações completas do frontend ao backend",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Brain,
      title: "IA & Automação",
      description: "OpenAI, ChatGPT Integration, Workflows",
      gradient: "from-orange-500 to-red-500"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Coluna Esquerda - Informações Pessoais */}
          <motion.div 
            className="text-center lg:text-left space-y-6"
            variants={itemVariants}
          >
            {/* Foto de Perfil */}
            <motion.div 
              className="flex justify-center lg:justify-start mb-8"
              variants={itemVariants}
            >
              <div className="relative">
                <motion.div
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/profile-photo.svg"
                    alt="Israel Araujo"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                    priority
                  />
                </motion.div>
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full -z-10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </motion.div>

            {/* Nome e Título */}
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                <span className="block">Israel Araujo</span>
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-2xl md:text-3xl lg:text-4xl font-semibold">
                  Desenvolvedor Full Stack
                </span>
              </h1>
            </motion.div>

            {/* Descrição Profissional */}
            <motion.p 
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl"
              variants={itemVariants}
            >
              Especialista em criar experiências digitais modernas e responsivas. 
              Desenvolvedor apaixonado por tecnologia, com foco em soluções inovadoras 
              que combinam design elegante com performance excepcional.
            </motion.p>

            {/* Botões de Ação */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
              variants={itemVariants}
            >
              <motion.a
                href="/projects"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Projetos
                <ArrowRight size={20} className="ml-2" />
              </motion.a>
              <motion.a
                href="/contact"
                className="inline-flex items-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 font-semibold"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Entre em Contato
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Coluna Direita - Skills Cards */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            variants={itemVariants}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                className="relative group"
                variants={cardVariants}
                custom={index}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Borda Gradiente */}
                <div className={`absolute inset-0 bg-gradient-to-r ${skill.gradient} rounded-xl p-[2px] group-hover:p-[3px] transition-all duration-300`}>
                  <div className="bg-white dark:bg-gray-900 rounded-xl h-full w-full p-6 transition-all duration-300">
                    <div className={`w-12 h-12 bg-gradient-to-r ${skill.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <skill.icon size={24} className="text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">
                      {skill.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>

                {/* Efeito de Glow no Hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${skill.gradient} rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.2 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Seção Adicional - Estatísticas ou Tecnologias */}
        <motion.div 
          className="mt-20 pt-12 border-t border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                3+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Anos de Experiência
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                50+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Projetos Concluídos
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                20+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Tecnologias
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                100%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Satisfação do Cliente
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}