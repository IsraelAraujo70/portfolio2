# Sistema de Tema

Este documento descreve o sistema de tema implementado baseado no `design-system.json`.

## 📋 Estrutura Implementada

### 1. Configuração do Tailwind CSS

O `tailwind.config.js` foi configurado com:

- **Cores**: Todas as cores do design system (primary, accent, text)
- **Tipografia**: Fontes Inter (principal) e JetBrains Mono (código)
- **Tamanhos de fonte**: hero, h1, h2, h3, body, small
- **Espaçamento**: xs, sm, md, lg, xl, 2xl
- **Border radius**: sm, md, lg, xl
- **Sombras**: card, hover
- **Animações**: fadeIn, slideUp, scaleHover

### 2. Componentes Base

#### Card (`/src/components/ui/Card.tsx`)
```tsx
<Card variant="cyan">Conteúdo</Card>
<Card variant="magenta">Conteúdo</Card>
<Card variant="pink">Conteúdo</Card>
<Card variant="multi">Conteúdo</Card>
```

**Props:**
- `variant`: 'default' | 'cyan' | 'magenta' | 'pink' | 'multi'
- `hover`: boolean (padrão: true)

#### Button (`/src/components/ui/Button.tsx`)
```tsx
<Button variant="primary" size="md">Texto</Button>
<Button variant="ghost" loading>Carregando</Button>
```

**Props:**
- `variant`: 'primary' | 'ghost'
- `size`: 'sm' | 'md' | 'lg'
- `loading`: boolean

#### Container (`/src/components/ui/Container.tsx`)
```tsx
<Container maxWidth="lg" padding>Conteúdo</Container>
```

**Props:**
- `maxWidth`: 'sm' | 'md' | 'lg' | 'xl' | 'full'
- `padding`: boolean (padrão: true)

#### Loading (`/src/components/ui/Loading.tsx`)
```tsx
<Loading size="lg" text="Carregando..." />
```

**Props:**
- `size`: 'sm' | 'md' | 'lg'
- `text`: string (padrão: "Carregando...")

**Características do ícone:**
- Cabeça de desenvolvedor com monitor
- Linhas de código animadas
- Pontos flutuantes com animação
- Cor tema accent-cyan

### 3. Gradientes de Borda

Implementados como classes CSS no `globals.css`:

```css
.gradient-border-cyan    /* Cyan → Blue */
.gradient-border-magenta /* Magenta → Pink */
.gradient-border-pink    /* Pink → Magenta */
.gradient-border-multi   /* Cyan → Blue → Magenta */
```

### 4. Tipografia

#### Fontes
- **Principal**: Inter (sem-serif)
- **Código**: JetBrains Mono (monospace)

#### Tamanhos
- `text-hero`: 3.5rem
- `text-h1`: 2.5rem
- `text-h2`: 2rem
- `text-h3`: 1.5rem
- `text-body`: 1rem
- `text-small`: 0.875rem

#### Pesos
- `font-light`: 300
- `font-normal`: 400
- `font-medium`: 500
- `font-semibold`: 600
- `font-bold`: 700

### 5. Cores

#### Primary
- `bg-primary-dark`: #1a202c
- `bg-primary-background`: #2d3748
- `bg-primary-surface`: #4a5568

#### Accent
- `text-accent-cyan`: #38d9a9
- `text-accent-magenta`: #ff6b9d
- `text-accent-pink`: #f06292
- `text-accent-blue`: #4fc3f7
- `text-accent-green`: #66bb6a

#### Text
- `text-text-primary`: #ffffff
- `text-text-secondary`: #a0aec0
- `text-text-accent`: #38d9a9

### 6. Utilidades CSS

#### Gradientes de texto
```css
.gradient-text /* Cyan → Blue */
```

#### Classes de componente
```css
.card           /* Estilo base do card */
.btn-primary    /* Botão primário com gradiente */
.btn-ghost      /* Botão transparente */
.sidebar-nav    /* Navegação lateral */
.nav-icon       /* Ícones de navegação */
```

## 🚀 Como Usar

### Importação
```tsx
import { Card, Button, Container, Loading } from '@/components/ui';
```

### Exemplo Básico
```tsx
export function MyComponent() {
  return (
    <Container>
      <Card variant="cyan" className="space-y-md">
        <h2 className="text-h2 font-semibold gradient-text">
          Título
        </h2>
        <p className="text-text-secondary">
          Descrição do conteúdo
        </p>
        <Button variant="primary">
          Ação Principal
        </Button>
      </Card>
    </Container>
  );
}
```

### Demo Completa
Veja `ThemeDemo.tsx` para uma demonstração completa de todos os componentes.

## 🎨 Personalização

### Adicionando Novas Variantes
1. Adicione a cor no `tailwind.config.js`
2. Crie a classe CSS no `globals.css`
3. Adicione a variante no componente

### Modificando Cores
Edite o `design-system.json` e atualize o `tailwind.config.js` correspondente.

## 📱 Responsividade

Todos os componentes são responsivos por padrão:
- Grids adaptáveis
- Tamanhos flexíveis
- Breakpoints padrão do Tailwind

## ✨ Animações

- **Hover**: Scale + sombra
- **Loading**: Pulse + rotação
- **Transições**: 150ms (fast), 300ms (normal), 500ms (slow)

## 🔧 Dependências

- `clsx`: Combinar classes condicionalmente
- `tailwind-merge`: Merge inteligente de classes Tailwind

## 📖 Estrutura de Arquivos

```
src/
├── components/
│   ├── ui/
│   │   ├── Card.tsx
│   │   ├── Button.tsx
│   │   ├── Container.tsx
│   │   ├── Loading.tsx
│   │   └── index.ts
│   └── ThemeDemo.tsx
├── lib/
│   └── utils.ts
└── styles/
    └── globals.css
```