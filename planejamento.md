# Planejamento Sequencial - Portfolio React

## 📋 Visão Geral
Criação de um portfólio moderno bilíngue (PT/EN) usando Next.js, React, Framer Motion, Prisma e deploy no Railway com full page scroll apenas no desktop. Inclui chat com IA para conversar sobre o currículo usando WebSocket.

---

## 🚀 Prompt 1 - Configuração Inicial do Projeto
```
Crie um novo projeto Next.js com TypeScript e configure as seguintes dependências:
- framer-motion (para animações)
- prisma (ORM para banco de dados)
- @prisma/client
- tailwindcss (para estilização)
- react-router-dom ou next/router
- lucide-react (para ícones)
- socket.io e socket.io-client (para WebSocket)
- next-i18next ou react-i18next (para internacionalização PT/EN)
- openai (para integração com IA do chat)

Configure o tailwind.config.js com as cores e configurações do design-system.json fornecido.
Crie a estrutura de pastas: /components, /pages, /styles, /lib, /prisma, /locales, /socket
```

## 🎨 Prompt 2 - Setup do Design System e Tema
```
Implemente um sistema de tema baseado no design-system.json:
1. Crie um arquivo de configuração de cores no Tailwind usando as cores do JSON
2. Configure as fontes (Inter como principal, JetBrains Mono para código)
3. Crie componentes base: Card, Button, Container
4. Implemente o componente de Loading com o ícone de cabeça + código
5. Configure os gradientes de borda dos cards conforme o design
```

## 📱 Prompt 3 - Layout e Navegação
```
Crie o layout principal com:
1. Sidebar fixa na lateral esquerda (4rem de largura) apenas no desktop
2. Ícones de navegação: Home, Projetos, Contato, Chat IA
3. Área principal responsiva que ocupa o restante da tela
4. Para mobile: navegação bottom ou header
5. Implemente detecção de dispositivo para mostrar/ocultar elementos desktop
6. Seletor de idioma (PT/EN) no header/sidebar
7. Chat flutuante ou seção dedicada para IA
```

## 🖥️ Prompt 4 - Full Page Scroll (Desktop Only)
```
Implemente o sistema de full page scroll APENAS para desktop:
1. Use uma biblioteca como react-fullpage.js ou implemente custom
2. Crie 4 seções principais: Home, Projetos, Contato, Chat IA
3. Para mobile/tablet: scroll normal tradicional
4. Adicione indicadores de seção na lateral direita (desktop)
5. Animações suaves entre seções usando Framer Motion
```

## 🏠 Prompt 5 - Página Home/Hero
```
Desenvolva a seção Home com:
1. Foto de perfil circular no lado esquerdo
2. Nome e título/função
3. Breve descrição profissional
4. Cards com bordas coloridas (gradiente) mostrando skills principais
5. Animações de entrada usando Framer Motion (fade in, slide up)
6. Layout responsivo: coluna única no mobile
```

## 💼 Prompt 6 - Página de Projetos
```
Crie a seção de Projetos:
1. Grid de cards responsivo (3 colunas desktop, 2 tablet, 1 mobile)
2. Cards com borda colorida alternada (cyan, magenta, pink)
3. Cada card deve conter: imagem, título, descrição, tecnologias, links
4. Hover effects com Framer Motion
5. Modal ou página detalhada para cada projeto
6. Filtros por tecnologia (opcional)
```

## 📞 Prompt 7 - Página de Contato
```
Desenvolva a seção de Contato:
1. Título "Contact me" com destaque na palavra "me" em cyan
2. Subtítulo "Liked what you saw?" com "saw" em cyan
3. Ícones de redes sociais: Instagram, Email, GitHub, LinkedIn
4. Formulário de contato (nome, email, mensagem)
5. Animações de hover nos ícones sociais
6. Validação do formulário
```

## 🗄️ Prompt 8 - Configuração do Banco de Dados (Prisma)
```
Configure o Prisma para gerenciar dados:
1. Crie o schema.prisma com modelos para:
   - Projects (id, title, description, image, technologies, github, demo, createdAt)
   - Messages (id, name, email, message, createdAt) - formulário de contato
   - ChatSessions (id, sessionId, messages, createdAt) - histórico do chat IA
   - Resume (id, content, language, updatedAt) - currículo em PT/EN
2. Configure a conexão com PostgreSQL (Railway)
3. Crie seeds para popular projetos iniciais e dados do currículo
4. Implemente APIs no Next.js para CRUD dos projetos e chat
```

## 🎭 Prompt 9 - Animações com Framer Motion
```
Implemente animações avançadas:
1. Page transitions entre seções (full page scroll)
2. Stagger animations para listas de projetos
3. Hover animations nos cards
4. Loading animations personalizada
5. Scroll-triggered animations
6. Configurar AnimatePresence para transições suaves
```

## 🌐 Prompt 10 - Internacionalização (PT/EN)
```
Configure o sistema bilíngue:
1. Setup do next-i18next ou react-i18next
2. Crie arquivos de tradução em /locales/pt.json e /locales/en.json
3. Traduza todas as strings do portfolio:
   - Navegação, títulos, descrições
   - Textos dos projetos
   - Formulários e validações
   - Mensagens do chat IA
4. Implemente seletor de idioma no header/sidebar
5. Persista preferência de idioma no localStorage
6. Configure roteamento com prefixo de idioma (opcional)
```

## 🤖 Prompt 11 - Chat IA com Currículo
```
Desenvolva o chat inteligente:
1. Crie interface de chat moderna com:
   - Área de mensagens com scroll
   - Input de texto com envio por Enter
   - Typing indicators
   - Avatares (usuário e IA)
2. Configure WebSocket para comunicação real-time
3. Integre OpenAI API para processar conversas sobre o currículo
4. Implemente contexto do currículo na IA:
   - Carregue dados do currículo do banco
   - Configure prompt system com informações profissionais
   - Responda apenas sobre experiência, skills, projetos
5. Armazene histórico de conversas no banco
6. Adicione rate limiting e validações
```

## 🔌 Prompt 12 - WebSocket e Real-time
```
Configure comunicação real-time:
1. Setup Socket.io server no Next.js (API routes)
2. Implemente eventos de WebSocket:
   - user_message (envio de mensagem)
   - ai_response (resposta da IA)
   - typing_start/stop (indicadores)
   - connection/disconnection
3. Gerencie sessões de chat únicas
4. Implemente reconexão automática
5. Configure CORS para WebSocket
6. Trate erros de conexão graciosamente
```

## 📱 Prompt 13 - Responsividade e Mobile
```
Otimize para dispositivos móveis:
1. Teste e ajuste layouts em todas as breakpoints
2. Navegação mobile (bottom nav ou hamburger)
3. Touch gestures para navegação
4. Chat responsivo (modal ou fullscreen em mobile)
5. Otimização de imagens
6. Performance em dispositivos móveis
7. Desabilitar full page scroll em mobile (scroll tradicional)
8. Teste WebSocket em diferentes dispositivos
```

## 🚢 Prompt 14 - Preparação para Deploy (Railway)
```
Configure o projeto para deploy no Railway:
1. Crie arquivo railway.json com configurações
2. Configure variáveis de ambiente (.env.example):
   - DATABASE_URL, OPENAI_API_KEY
   - NEXTAUTH_URL, NEXTAUTH_SECRET
   - Configurações de i18n
3. Setup do banco PostgreSQL no Railway
4. Configure scripts de build e start no package.json
5. Otimizações de produção (next.config.js)
6. Configure Prisma para produção
7. Setup WebSocket para produção (porta, CORS)
```

## 🔧 Prompt 15 - Deploy e Configurações Finais
```
Realize o deploy no Railway:
1. Conecte repositório GitHub ao Railway
2. Configure variáveis de ambiente no Railway
3. Execute migrations do Prisma em produção
4. Configure domínio personalizado (se necessário)
5. Testes finais em produção
6. Configuração de monitoring e logs
7. Backup e estratégias de rollback
```

## 🧪 Prompt 16 - Testes e Otimizações
```
Finalize com testes e otimizações:
1. Testes de usabilidade em diferentes dispositivos
2. Teste completo do chat IA em múltiplos idiomas
3. Otimização de performance (Lighthouse)
4. SEO básico (meta tags, sitemap, hreflang)
5. Acessibilidade (a11y) incluindo chat
6. Error boundaries e tratamento de erros
7. Analytics (Google Analytics ou similar)
8. Monitoramento de uso da API OpenAI
9. Teste de carga do WebSocket
```

---

## 📝 Notas Importantes

### Tecnologias Obrigatórias:
- ✅ Next.js (Framework React)
- ✅ Framer Motion (Animações)
- ✅ Prisma (ORM)
- ✅ PostgreSQL (Banco de dados)
- ✅ Railway (Hospedagem)
- ✅ TailwindCSS (Estilização)
- ✅ Socket.io (WebSocket)
- ✅ OpenAI API (Chat IA)
- ✅ next-i18next (Internacionalização)

### Funcionalidades Especiais:
- 🖥️ Full page scroll apenas no desktop
- 📱 Scroll tradicional no mobile
- 🎨 Borders gradientes nos cards
- 🔄 Loading personalizada
- ⚡ Animações Framer Motion
- 🤖 Chat IA sobre o currículo
- 🌐 Bilíngue (PT/EN)
- 🔌 WebSocket real-time

### Ordem de Execução:
Siga rigorosamente a ordem dos prompts para evitar dependências quebradas e garantir um desenvolvimento fluido.

### Referências de Design:
Consulte sempre o arquivo `design-system.json` e as imagens em `reference-images/` para manter consistência visual.

### Configuração do Chat IA:
- O currículo deve ser carregado no banco de dados em ambos idiomas (PT/EN)
- A IA deve responder APENAS sobre informações do currículo
- Implementar fallback para perguntas fora do escopo
- Rate limiting: máximo 10 mensagens por minuto por IP
- Timeout de resposta: 30 segundos máximo

### Estrutura do Currículo no Banco:
```json
{
  "personal": {
    "name": "Nome",
    "title": "Cargo/Função", 
    "summary": "Resumo profissional",
    "contact": {...}
  },
  "experience": [...],
  "education": [...],
  "skills": [...],
  "projects": [...],
  "certifications": [...]
}
```