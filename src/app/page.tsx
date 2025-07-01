'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-primary-dark">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-background to-primary-dark opacity-80" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-accent-cyan rounded-full opacity-20"
              animate={{
                y: [0, -100, 0],
                x: [0, 50, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-text-secondary text-lg mb-4"
            >
              Olá, eu sou
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-6xl md:text-8xl font-bold mb-6"
            >
              <span className="gradient-text">Israel Araujo</span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-2xl md:text-4xl text-text-primary font-medium mb-8"
            >
              Desenvolvedor Full Stack
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-text-secondary max-w-2xl mx-auto text-lg mb-12 leading-relaxed"
            >
              Criando experiências digitais incríveis com código limpo e design moderno. 
              Especializado em React, Next.js, Node.js e tecnologias inovadoras.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            >
              <button className="btn-primary">
                Ver Projetos
              </button>
              <button className="btn-ghost">
                Entre em Contato
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex justify-center space-x-6"
            >
              <a href="#" className="nav-icon">
                <Github size={24} />
              </a>
              <a href="#" className="nav-icon">
                <Linkedin size={24} />
              </a>
              <a href="#" className="nav-icon">
                <Mail size={24} />
              </a>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-text-secondary"
          >
            <span className="text-sm mb-2">Scroll para explorar</span>
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </section>
      
      {/* Placeholder for other sections */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-h2 font-bold gradient-text mb-8">
              Bem-vindo ao meu portfólio
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Esta é uma demonstração inicial. As outras seções serão implementadas nas próximas etapas.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}