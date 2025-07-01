import React from 'react'
import { FolderOpen, ExternalLink, Github } from 'lucide-react'

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: 'Portfolio Bilíngue',
      description: 'Portfólio pessoal desenvolvido com Next.js, TypeScript e Tailwind CSS',
      descriptionEn: 'Personal portfolio built with Next.js, TypeScript and Tailwind CSS',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      githubUrl: '#',
      liveUrl: '#',
      image: '/api/placeholder/400/300'
    },
    {
      id: 2,
      title: 'Chat IA Integrado',
      description: 'Sistema de chat com inteligência artificial integrado ao portfólio',
      descriptionEn: 'AI chat system integrated into the portfolio',
      technologies: ['OpenAI', 'Socket.io', 'React', 'Node.js'],
      githubUrl: '#',
      liveUrl: '#',
      image: '/api/placeholder/400/300'
    },
    {
      id: 3,
      title: 'E-commerce Platform',
      description: 'Plataforma de e-commerce completa com painel administrativo',
      descriptionEn: 'Complete e-commerce platform with admin panel',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      githubUrl: '#',
      liveUrl: '#',
      image: '/api/placeholder/400/300'
    }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <FolderOpen size={32} className="text-blue-600 dark:text-blue-400 mr-3" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Projetos
          </h1>
        </div>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Explore alguns dos meus projetos mais recentes e relevantes. Cada projeto representa 
          um desafio único e uma oportunidade de aprendizado.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            {/* Project Image */}
            <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative">
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <FolderOpen size={48} className="text-white" />
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <a
                  href={project.githubUrl}
                  className="flex items-center px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 text-sm"
                >
                  <Github size={16} className="mr-2" />
                  GitHub
                </a>
                <a
                  href={project.liveUrl}
                  className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Ver Projeto
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">
            Interessado em colaborar?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Estou sempre aberto a novos projetos e oportunidades. 
            Entre em contato para discutirmos como posso ajudar com seu próximo projeto.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </div>
  )
}