import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'Plataforma completa de e-commerce com sistema de pagamentos integrado e dashboard administrativo.',
    longDescription: 'Uma plataforma de e-commerce completa desenvolvida com Next.js e TypeScript, featuring sistema de autenticação, carrinho de compras, processamento de pagamentos com Stripe, dashboard administrativo, e muito mais. O projeto inclui funcionalidades avançadas como análise de vendas, gestão de inventário, e sistema de notificações em tempo real.',
    image: '/api/placeholder/800/600',
    images: [
      '/api/placeholder/800/600',
      '/api/placeholder/800/600',
      '/api/placeholder/800/600',
      '/api/placeholder/800/600'
    ],
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'TailwindCSS', 'Stripe'],
    category: 'fullstack',
    status: 'completed',
    featured: true,
    liveUrl: 'https://ecommerce-demo.vercel.app',
    githubUrl: 'https://github.com/user/ecommerce-platform',
    completedAt: '2024-01-15',
    highlights: [
      'Sistema de pagamentos integrado com Stripe',
      'Dashboard administrativo completo',
      'Análise de vendas em tempo real',
      'Sistema de notificações push',
      'Mobile-first responsive design'
    ],
    challenges: [
      'Implementação de sistema de pagamentos seguro',
      'Otimização de performance para grandes volumes de dados',
      'Criação de dashboard administrativo intuitivo'
    ],
    solutions: [
      'Utilizei Stripe Connect para pagamentos seguros',
      'Implementei paginação e lazy loading',
      'Criei componentes reutilizáveis com Storybook'
    ]
  },
  {
    id: '2',
    title: 'Task Management SaaS',
    description: 'Aplicativo SaaS de gerenciamento de tarefas com colaboração em tempo real e integrações.',
    longDescription: 'Um aplicativo SaaS completo para gerenciamento de tarefas e projetos, com funcionalidades de colaboração em tempo real, sistema de notificações, integrações com terceiros, e dashboard analytics. Desenvolvido com foco em performance e experiência do usuário.',
    image: '/api/placeholder/800/600',
    images: [
      '/api/placeholder/800/600',
      '/api/placeholder/800/600',
      '/api/placeholder/800/600'
    ],
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express', 'JWT'],
    category: 'fullstack',
    status: 'completed',
    featured: true,
    liveUrl: 'https://taskmaster-pro.vercel.app',
    githubUrl: 'https://github.com/user/task-management',
    completedAt: '2023-12-10',
    highlights: [
      'Colaboração em tempo real',
      'Sistema de notificações inteligente',
      'Dashboard analytics avançado',
      'Integrações com Slack e Google Calendar',
      'PWA com funcionalidades offline'
    ],
    challenges: [
      'Sincronização de dados em tempo real',
      'Gerenciamento de estado complexo',
      'Implementação de funcionalidades offline'
    ],
    solutions: [
      'Implementei WebSockets com Socket.io',
      'Utilizei Redux Toolkit para gerenciamento de estado',
      'Criei um sistema de cache inteligente'
    ]
  },
  {
    id: '3',
    title: 'AI-Powered Analytics Dashboard',
    description: 'Dashboard de analytics com inteligência artificial para análise preditiva de dados.',
    longDescription: 'Dashboard avançado de analytics que utiliza inteligência artificial para fornecer insights preditivos e análises automatizadas. Integra múltiplas fontes de dados e oferece visualizações interativas personalizadas.',
    image: '/api/placeholder/800/600',
    images: [
      '/api/placeholder/800/600',
      '/api/placeholder/800/600'
    ],
    technologies: ['Vue.js', 'Python', 'FastAPI', 'TensorFlow', 'D3.js', 'PostgreSQL'],
    category: 'ai',
    status: 'completed',
    featured: true,
    liveUrl: 'https://ai-analytics-demo.vercel.app',
    githubUrl: 'https://github.com/user/ai-analytics',
    completedAt: '2023-11-20',
    highlights: [
      'Análise preditiva com machine learning',
      'Visualizações interativas personalizadas',
      'Processamento de big data em tempo real',
      'API RESTful com FastAPI',
      'Interface responsiva e intuitiva'
    ],
    challenges: [
      'Processamento de grandes volumes de dados',
      'Integração de modelos de ML',
      'Otimização de queries complexas'
    ],
    solutions: [
      'Implementei processamento assíncrono',
      'Utilizei TensorFlow.js para inferência no cliente',
      'Criei índices otimizados no PostgreSQL'
    ]
  },
  {
    id: '4',
    title: 'Mobile Fitness Tracker',
    description: 'Aplicativo mobile para tracking de exercícios com gamificação e social features.',
    longDescription: 'Aplicativo mobile completo para tracking de exercícios físicos, com sistema de gamificação, social features, sincronização com wearables, e analytics personalizados. Desenvolvido com React Native e backend Node.js.',
    image: '/api/placeholder/800/600',
    images: [
      '/api/placeholder/800/600',
      '/api/placeholder/800/600'
    ],
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Express', 'Firebase'],
    category: 'mobile',
    status: 'in-progress',
    featured: false,
    githubUrl: 'https://github.com/user/fitness-tracker',
    completedAt: '2024-02-01',
    highlights: [
      'Tracking automático de exercícios',
      'Sistema de gamificação completo',
      'Social features e challenges',
      'Sincronização com wearables',
      'Análises personalizadas'
    ],
    challenges: [
      'Integração com múltiplos dispositivos',
      'Otimização de bateria',
      'Sincronização offline/online'
    ],
    solutions: [
      'Utilizei APIs nativas dos dispositivos',
      'Implementei lazy loading inteligente',
      'Criei sistema de sync em background'
    ]
  },
  {
    id: '5',
    title: 'Blockchain Voting System',
    description: 'Sistema de votação descentralizado usando blockchain para transparência e segurança.',
    longDescription: 'Sistema de votação descentralizado construído em blockchain, garantindo transparência, segurança e imutabilidade dos votos. Inclui interface web intuitiva e smart contracts auditáveis.',
    image: '/api/placeholder/800/600',
    images: [
      '/api/placeholder/800/600'
    ],
    technologies: ['React', 'Solidity', 'Web3.js', 'Ethereum', 'Hardhat'],
    category: 'blockchain',
    status: 'completed',
    featured: false,
    liveUrl: 'https://blockchain-voting.vercel.app',
    githubUrl: 'https://github.com/user/blockchain-voting',
    completedAt: '2023-10-15',
    highlights: [
      'Smart contracts auditáveis',
      'Interface web intuitiva',
      'Votação anônima e segura',
      'Resultados em tempo real',
      'Auditoria transparente'
    ],
    challenges: [
      'Garantir anonimato dos votos',
      'Otimizar gas fees',
      'Interface para usuários não-técnicos'
    ],
    solutions: [
      'Implementei zero-knowledge proofs',
      'Utilizei layer 2 solutions',
      'Criei wizard de configuração simplificado'
    ]
  },
  {
    id: '6',
    title: 'Real Estate Platform',
    description: 'Plataforma imobiliária com visualização 3D, tours virtuais e sistema de CRM integrado.',
    longDescription: 'Plataforma completa para o mercado imobiliário, featuring visualização 3D de propriedades, tours virtuais interativos, sistema CRM integrado, e ferramentas avançadas de busca e filtros.',
    image: '/api/placeholder/800/600',
    images: [
      '/api/placeholder/800/600'
    ],
    technologies: ['Next.js', 'Three.js', 'PostgreSQL', 'AWS', 'Docker'],
    category: 'fullstack',
    status: 'completed',
    featured: false,
    liveUrl: 'https://realestate-3d.vercel.app',
    githubUrl: 'https://github.com/user/realestate-platform',
    completedAt: '2023-09-30',
    highlights: [
      'Visualização 3D de propriedades',
      'Tours virtuais interativos',
      'Sistema CRM integrado',
      'Busca avançada com filtros',
      'Dashboard para corretores'
    ],
    challenges: [
      'Renderização 3D performática',
      'Upload e processamento de mídia',
      'Sistema de busca complexo'
    ],
    solutions: [
      'Otimizei modelos 3D com LOD',
      'Implementei CDN para mídia',
      'Criei índices full-text search'
    ]
  }
]

export const featuredProjects = projects.filter(project => project.featured)

export const getProjectsByCategory = (category: string) => 
  projects.filter(project => project.category === category)

export const getProjectsByTechnology = (technology: string) =>
  projects.filter(project => 
    project.technologies.some(tech => 
      tech.toLowerCase().includes(technology.toLowerCase())
    )
  )

export const getAllTechnologies = () => {
  const allTechs = projects.flatMap(project => project.technologies)
  return [...new Set(allTechs)].sort()
}