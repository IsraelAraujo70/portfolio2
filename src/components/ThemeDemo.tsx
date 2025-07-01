'use client';

import React from 'react';
import { Card, Button, Container, Loading } from './ui';

export const ThemeDemo: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const handleLoadingDemo = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 3000);
  };

  return (
    <Container className="py-xl space-y-xl">
      <div className="text-center space-y-md">
        <h1 className="text-h1 font-bold gradient-text">
          Sistema de Tema
        </h1>
        <p className="text-text-secondary text-body">
          Demonstração dos componentes base do design system
        </p>
      </div>

      {/* Cards com diferentes gradientes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
        <Card variant="cyan" className="space-y-md">
          <h3 className="text-h3 font-semibold text-accent-cyan">Card Cyan</h3>
          <p className="text-text-secondary">
            Card com gradiente cyan usando as cores do design system.
          </p>
          <Button variant="primary" size="sm">
            Ação
          </Button>
        </Card>

        <Card variant="magenta" className="space-y-md">
          <h3 className="text-h3 font-semibold text-accent-magenta">Card Magenta</h3>
          <p className="text-text-secondary">
            Card com gradiente magenta para destacar conteúdo importante.
          </p>
          <Button variant="ghost" size="sm">
            Saiba Mais
          </Button>
        </Card>

        <Card variant="pink" className="space-y-md">
          <h3 className="text-h3 font-semibold text-accent-pink">Card Pink</h3>
          <p className="text-text-secondary">
            Card com gradiente pink para elementos de destaque.
          </p>
          <Button variant="primary" size="sm">
            Explorar
          </Button>
        </Card>

        <Card variant="multi" className="space-y-md lg:col-span-3">
          <h3 className="text-h3 font-semibold gradient-text">Card Multi-gradiente</h3>
          <p className="text-text-secondary">
            Card com gradiente multicolorido usando várias cores do sistema.
          </p>
          <div className="flex gap-md">
            <Button variant="primary" onClick={handleLoadingDemo}>
              Testar Loading
            </Button>
            <Button variant="ghost">
              Cancelar
            </Button>
          </div>
        </Card>
      </div>

      {/* Demonstração de botões */}
      <div className="space-y-md">
        <h2 className="text-h2 font-semibold text-text-primary">Botões</h2>
        <div className="flex flex-wrap gap-md">
          <Button variant="primary" size="sm">
            Pequeno
          </Button>
          <Button variant="primary" size="md">
            Médio
          </Button>
          <Button variant="primary" size="lg">
            Grande
          </Button>
          <Button variant="ghost" size="md">
            Ghost
          </Button>
          <Button variant="primary" size="md" loading>
            Carregando
          </Button>
        </div>
      </div>

      {/* Demonstração de tipografia */}
      <div className="space-y-md">
        <h2 className="text-h2 font-semibold text-text-primary">Tipografia</h2>
        <div className="space-y-sm">
          <h1 className="text-hero font-bold text-text-primary">Hero Text (3.5rem)</h1>
          <h1 className="text-h1 font-bold text-text-primary">Heading 1 (2.5rem)</h1>
          <h2 className="text-h2 font-semibold text-text-primary">Heading 2 (2rem)</h2>
          <h3 className="text-h3 font-medium text-text-primary">Heading 3 (1.5rem)</h3>
          <p className="text-body text-text-primary">Body text (1rem)</p>
          <p className="text-small text-text-secondary">Small text (0.875rem)</p>
          <code className="font-mono text-accent-cyan bg-primary-surface px-2 py-1 rounded">
            Código com JetBrains Mono
          </code>
        </div>
      </div>

      {/* Loading Component */}
      {isLoading && (
        <div className="fixed inset-0 bg-primary-dark/80 backdrop-blur-sm flex items-center justify-center z-50">
          <Card variant="cyan" className="p-xl">
            <Loading size="lg" text="Carregando componente..." />
          </Card>
        </div>
      )}
    </Container>
  );
};