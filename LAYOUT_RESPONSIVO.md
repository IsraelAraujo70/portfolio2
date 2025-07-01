# Layout Principal Responsivo

## Visão Geral

Este projeto implementa um layout principal completamente responsivo com sidebar fixa para desktop e navegação móvel otimizada, conforme solicitado. O layout se adapta automaticamente a diferentes tamanhos de tela e dispositivos.

## 🎯 Funcionalidades Implementadas

### ✅ 1. Sidebar Fixa (Desktop)
- **Largura**: 4rem (64px) conforme especificado
- **Posição**: Fixa na lateral esquerda
- **Visibilidade**: Apenas em desktop (lg breakpoint +)
- **Conteúdo**: Ícones de navegação + seletor de idioma

### ✅ 2. Ícones de Navegação
Todos os ícones solicitados foram implementados:
- 🏠 **Home** - Página inicial
- 📁 **Projetos** - Portfolio de projetos
- ✉️ **Contato** - Formulário de contato
- 💬 **Chat IA** - Seção dedicada ao chat

### ✅ 3. Área Principal Responsiva
- **Desktop**: Margem esquerda de 4rem para compensar a sidebar
- **Mobile/Tablet**: Ocupa toda a largura da tela
- **Padding**: Adaptativo conforme o dispositivo
- **Transições**: Suaves entre breakpoints

### ✅ 4. Navegação Mobile
- **Header Móvel**: Fixo no topo com logo e seletor de idioma
- **Bottom Navigation**: Navegação inferior com todos os ícones
- **Visibilidade**: Apenas em dispositivos móveis e tablets

### ✅ 5. Detecção de Dispositivo
- **Hook customizado**: `useDevice()` para detecção responsiva
- **Breakpoints**:
  - Mobile: < 768px
  - Tablet: 768px - 1023px
  - Desktop: ≥ 1024px
- **Adaptação automática**: Layout muda conforme o dispositivo

### ✅ 6. Seletor de Idioma (PT/EN)
- **Desktop**: Na sidebar (bottom)
- **Mobile**: No header
- **Indicador visual**: Badge com idioma atual
- **Funcionalidade**: Troca entre Português e Inglês

### ✅ 7. Chat IA
- **Chat Flutuante**: Botão flutuante que abre janela de chat
- **Posição adaptativa**: Ajusta conforme o dispositivo
- **Funcionalidades**:
  - Minimizar/maximizar
  - Área de mensagens
  - Campo de input
  - Indicadores visuais

## 🏗️ Estrutura de Componentes

```
src/components/layout/
├── MainLayout.tsx          # Layout principal que orquestra tudo
├── Sidebar.tsx             # Sidebar fixa para desktop
├── MobileNavigation.tsx    # Navegação bottom para mobile
├── MobileHeader.tsx        # Header para mobile/tablet
└── FloatingChat.tsx        # Chat flutuante
```

## 📱 Comportamento Responsivo

### Desktop (≥ 1024px)
- ✅ Sidebar fixa na esquerda (4rem de largura)
- ✅ Área principal com margem esquerda
- ✅ Chat flutuante no canto inferior direito
- ✅ Seletor de idioma na sidebar

### Tablet (768px - 1023px)
- ✅ Header móvel no topo
- ✅ Bottom navigation
- ✅ Área principal ocupa toda largura
- ✅ Chat flutuante adaptado

### Mobile (< 768px)
- ✅ Header compacto no topo
- ✅ Bottom navigation otimizada
- ✅ Layout touch-friendly
- ✅ Chat flutuante posicionado acima da bottom nav

## 🎨 Design System

### Cores e Temas
- **Suporte a dark mode**: Automático via Tailwind
- **Palette principal**: Azul e roxo em gradient
- **Estados interativos**: Hover, active, focus
- **Consistência**: Design system unificado

### Animações e Transições
- **Transições suaves**: 200-300ms para mudanças de estado
- **Hover effects**: Em botões e elementos interativos
- **Loading states**: Para feedback visual
- **Responsive transitions**: Adaptações de layout

## 🛠️ Tecnologias Utilizadas

- **Next.js 14**: Framework React
- **TypeScript**: Tipagem estática
- **Tailwind CSS**: Styling responsivo
- **Lucide React**: Ícones modernos
- **Framer Motion**: Animações (disponível)
- **clsx**: Gerenciamento de classes condicionais

## 📋 Hooks Customizados

### useDevice()
```typescript
const { isMobile, isTablet, isDesktop, width, height } = useDevice()
```

### useLanguage()
```typescript
const { currentLang, setLanguage, t } = useLanguage()
```

## 🚀 Como Usar

1. **Instalar dependências**:
```bash
npm install
```

2. **Executar em desenvolvimento**:
```bash
npm run dev
```

3. **Testar responsividade**:
   - Redimensione a janela do browser
   - Use as ferramentas de desenvolvedor
   - Teste em dispositivos reais

## 📄 Páginas Implementadas

- **/** - Homepage com demonstração do layout
- **/projects** - Página de projetos
- **/contact** - Formulário de contato
- **/chat** - Página dedicada ao chat IA

## 🔧 Configuração

### Breakpoints Tailwind
```javascript
// tailwind.config.js
screens: {
  'sm': '640px',
  'md': '768px',
  'lg': '1024px',  // Ponto onde sidebar aparece
  'xl': '1280px',
  '2xl': '1536px',
}
```

### Layout Responsivo
- **Sidebar**: `hidden lg:flex` - apenas desktop
- **Mobile Header**: `lg:hidden` - apenas mobile/tablet
- **Mobile Nav**: `lg:hidden` - apenas mobile/tablet
- **Main Content**: Margem adaptativa conforme breakpoint

## ✨ Destaques da Implementação

1. **Mobile-First**: Design pensado primeiro para mobile
2. **Progressive Enhancement**: Funcionalidades adicionais no desktop
3. **Accessibility**: ARIA labels e navegação por teclado
4. **Performance**: Componentes otimizados e lazy loading
5. **Maintainability**: Código modular e reutilizável
6. **Type Safety**: TypeScript em todos os componentes
7. **Modern UX**: Seguindo padrões atuais de design

## 🎯 Resultado

O layout implementado atende 100% aos requisitos solicitados:

- ✅ Sidebar fixa 4rem (desktop only)
- ✅ Navegação com todos os ícones solicitados
- ✅ Área principal responsiva
- ✅ Mobile navigation (header + bottom)
- ✅ Detecção de dispositivo automática
- ✅ Seletor de idioma PT/EN
- ✅ Chat flutuante funcional
- ✅ Design moderno e responsivo
- ✅ Experiência de usuário otimizada

O projeto está pronto para desenvolvimento adicional e pode servir como base sólida para um portfólio profissional completo.