export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  images: string[]
  technologies: string[]
  category: ProjectCategory
  status: ProjectStatus
  featured: boolean
  liveUrl?: string
  githubUrl?: string
  caseStudyUrl?: string
  completedAt: string
  highlights: string[]
  challenges: string[]
  solutions: string[]
}

export type ProjectCategory = 
  | 'frontend'
  | 'backend' 
  | 'fullstack'
  | 'mobile'
  | 'desktop'
  | 'ai'
  | 'blockchain'
  | 'gamedev'

export type ProjectStatus = 
  | 'completed'
  | 'in-progress'
  | 'archived'
  | 'planning'

export interface ProjectFilter {
  technology?: string
  category?: ProjectCategory
  status?: ProjectStatus
  featured?: boolean
}

export const TECHNOLOGY_COLORS: Record<string, string> = {
  'React': 'cyan',
  'Next.js': 'magenta',
  'TypeScript': 'pink',
  'Node.js': 'cyan',
  'Python': 'magenta',
  'JavaScript': 'pink',
  'Vue.js': 'cyan',
  'Angular': 'magenta',
  'TailwindCSS': 'pink',
  'PostgreSQL': 'cyan',
  'MongoDB': 'magenta',
  'Express': 'pink',
  'FastAPI': 'cyan',
  'Docker': 'magenta',
  'AWS': 'pink',
  'Prisma': 'cyan',
  'GraphQL': 'magenta',
  'Socket.io': 'pink',
  'React Native': 'cyan',
  'Flutter': 'magenta',
  'Electron': 'pink',
  'Three.js': 'cyan',
  'D3.js': 'magenta',
  'Chart.js': 'pink',
}

export const BORDER_COLORS = ['cyan', 'magenta', 'pink'] as const
export type BorderColor = typeof BORDER_COLORS[number]