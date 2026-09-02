# 📖 Índice de Documentação

Guia de navegação completo para toda a documentação do projeto.

## 🎯 Para Diferentes Públicos

### 👨‍💼 Se você é um **usuário comum**
1. Comece aqui: [QUICKSTART.md](QUICKSTART.md) - 5 minutos
2. Depois: [README.md](README.md) - Funcionalidades

### 👨‍💻 Se você é um **desenvolvedor**
1. Comece aqui: [INSTALLATION.md](INSTALLATION.md) - Setup
2. Depois: [DEVELOPMENT.md](DEVELOPMENT.md) - Arquitetura
3. Explore: `src/` - Código-fonte

### 🎓 Se você está fazendo um **TCC**
1. Comece aqui: [README.md](README.md) - Visão geral
2. Depois: [TESTING_ACCESSIBILITY.md](TESTING_ACCESSIBILITY.md) - Testes
3. Implemente: Seu próprio projeto baseado neste

### ♿ Se você foca em **acessibilidade**
1. Comece aqui: [README.md](README.md#-acessibilidade) - Seção acessibilidade
2. Depois: [TESTING_ACCESSIBILITY.md](TESTING_ACCESSIBILITY.md) - Testes
3. Aprenda: [DEVELOPMENT.md](DEVELOPMENT.md#-acessibilidade) - Técnicas

---

## 📚 Documentação Disponível

### 📄 Primeiros Passos

| Arquivo | Tempo | Conteúdo |
|---------|-------|----------|
| [QUICKSTART.md](QUICKSTART.md) | 5 min | Instalação rápida e primeiros passos |
| [INSTALLATION.md](INSTALLATION.md) | 10 min | Instalação detalhada passo a passo |
| [README.md](README.md) | 15 min | Visão geral completa do projeto |

### 🔧 Documentação Técnica

| Arquivo | Tempo | Conteúdo |
|---------|-------|----------|
| [DEVELOPMENT.md](DEVELOPMENT.md) | 30 min | Arquitetura e código explicado |
| Código comentado | Auto | Comentários em cada arquivo |
| [Typespec](src/types.ts) | 5 min | Tipos de dados |

### ♿ Acessibilidade

| Arquivo | Tempo | Conteúdo |
|---------|-------|----------|
| [README.md#-acessibilidade](README.md#-acessibilidade) | 5 min | Resumo de acessibilidade |
| [TESTING_ACCESSIBILITY.md](TESTING_ACCESSIBILITY.md) | 45 min | Guia completo de testes |
| [DEVELOPMENT.md#-acessibilidade](DEVELOPMENT.md#-acessibilidade) | 10 min | Implementações técnicas |

---

## 🗂️ Estrutura de Arquivos

```
task-manager-accessible/
│
├── 📖 DOCUMENTAÇÃO
│   ├── README.md                      ← Leia primeiro!
│   ├── QUICKSTART.md                  ← Comece aqui (5 min)
│   ├── INSTALLATION.md                ← Setup detalhado
│   ├── DEVELOPMENT.md                 ← Guia técnico
│   ├── TESTING_ACCESSIBILITY.md       ← Testes completos
│   └── INDEX.md                       ← Este arquivo
│
├── ⚙️ CONFIGURAÇÃO
│   ├── package.json                   ← Dependências
│   ├── tsconfig.json                  ← TypeScript
│   ├── vite.config.ts                 ← Build
│   ├── index.html                     ← Página principal
│   └── .gitignore                     ← Git
│
└── 📂 src/
    ├── 🎨 ESTILOS
    │   └── styles/
    │       ├── global.css              ← Variáveis CSS, reset
    │       ├── components.css          ← Componentes
    │       └── responsive.css          ← Mobile/responsivo
    │
    ├── ⚛️ COMPONENTES
    │   └── components/
    │       ├── TaskForm.tsx            ← Formulário
    │       ├── TaskItem.tsx            ← Item individual
    │       ├── TaskList.tsx            ← Lista com filtros
    │       ├── TaskModal.tsx           ← Modal edição
    │       ├── ThemeToggle.tsx         ← Tema escuro/claro
    │       └── index.ts                ← Exportações
    │
    ├── 🎣 HOOKS
    │   └── hooks/
    │       └── useTaskManager.ts       ← Lógica principal
    │
    ├── 📋 TIPOS
    │   └── types.ts                    ← Interfaces TypeScript
    │
    └── 📱 APLICAÇÃO
        ├── App.tsx                     ← Componente principal
        └── main.tsx                    ← Entrada
```

---

## 🔍 Procurando Algo Específico?

### ❓ "Como instalar?"
→ [QUICKSTART.md](QUICKSTART.md) ou [INSTALLATION.md](INSTALLATION.md)

### ❓ "Que funcionalidades tem?"
→ [README.md#funcionalidades](README.md#funcionalidades)

### ❓ "Como criar uma tarefa?"
→ [README.md](README.md) ou [QUICKSTART.md](QUICKSTART.md#primeiros-passos)

### ❓ "Como testar acessibilidade?"
→ [TESTING_ACCESSIBILITY.md](TESTING_ACCESSIBILITY.md)

### ❓ "Qual é a arquitetura?"
→ [DEVELOPMENT.md#-arquitetura](DEVELOPMENT.md#-arquitetura)

### ❓ "Como o sistema funciona?"
→ [DEVELOPMENT.md#🔨-hooks-customizados](DEVELOPMENT.md#🔨-hooks-customizados)

### ❓ "Como editar o código?"
→ [DEVELOPMENT.md#-guia-de-contribuição](DEVELOPMENT.md#-guia-de-contribuição)

### ❓ "Qual tecnologia se usa?"
→ [README.md#-tecnologias-usadas](README.md#-tecnologias-usadas)

### ❓ "Falha ao instalar"
→ [INSTALLATION.md#-erros-comuns](INSTALLATION.md#-erros-comuns)

### ❓ "Como fazer deploy?"
→ [README.md#deploy](README.md#deploy-colocar-online)

---

## 📊 Documentação por Tópico

### Instalação & Execução
1. [QUICKSTART.md](QUICKSTART.md) - Rápido (5min)
2. [INSTALLATION.md](INSTALLATION.md) - Detalhado (10min)
3. [README.md](README.md) - Visão geral

### Código & Desenvolvimento
1. [DEVELOPMENT.md](DEVELOPMENT.md) - Arquitetura completa
2. `src/` - Código comentado
3. [README.md#-tecnologias-usadas](README.md#-tecnologias-usadas)

### Acessibilidade & Testes
1. [README.md#-acessibilidade](README.md#-acessibilidade) - Overview
2. [TESTING_ACCESSIBILITY.md](TESTING_ACCESSIBILITY.md) - Testes profundos
3. [DEVELOPMENT.md#-acessibilidade](DEVELOPMENT.md#-acessibilidade) - Técnicas

### Personalizações
1. [DEVELOPMENT.md#-guia-de-contribuição](DEVELOPMENT.md#-guia-de-contribuição)
2. [DEVELOPMENT.md#-estilos-e-css](DEVELOPMENT.md#-estilos-e-css)
3. Edite `src/styles/` para CSS

### Produção & Deployment
1. [README.md#-tecnologias-usadas](README.md#-tecnologias-usadas)
2. [README.md#deploy](README.md#deploy-colocar-online)
3. [INSTALLATION.md#-build-para-produção](INSTALLATION.md#-build-para-produção)

---

## 📚 Leitura Recomendada

### Ordem Recomendada (da mais fácil para mais técnica)

```
1. QUICKSTART.md       (Comece aqui!)
   ↓
2. README.md           (Entenda as funcionalidades)
   ↓
3. TESTING_ACCESSIBILITY.md (Validação & testes)
   ↓
4. DEVELOPMENT.md      (Entenda o código)
   ↓
5. Código em src/      (Explore a implementação)
```

### Se você tem pressa:
- Leia só [QUICKSTART.md](QUICKSTART.md) em 5 minutos

### Se você tem 30 minutos:
1. [QUICKSTART.md](QUICKSTART.md) (5 min)
2. [README.md](README.md) (15 min)
3. Explore `src/components/` (10 min)

### Se você tem 2 horas:
1. [QUICKSTART.md](QUICKSTART.md) (5 min)
2. [README.md](README.md) (15 min)
3. [DEVELOPMENT.md](DEVELOPMENT.md) (30 min)
4. [TESTING_ACCESSIBILITY.md](TESTING_ACCESSIBILITY.md) (45 min)
5. Explore código (15 min)

---

## 🎯 Para Casos de Uso Específicos

### 📱 "Quero usar em celular"
→ [README.md#-responsividade](README.md#-responsividade)
→ [TESTING_ACCESSIBILITY.md#5️⃣-teste-de-responsividade](TESTING_ACCESSIBILITY.md#5️⃣-teste-de-responsividade)

### 🌙 "Quero modo escuro"
→ Já implementado! Veja [README.md#modo-escurolaro](README.md#recursos-extras)

### ♿ "Tenho deficiência auditiva"
→ [README.md#-acessibilidade](README.md#-acessibilidade)
→ [TESTING_ACCESSIBILITY.md#1️⃣-teste-de-acessibilidade-auditiva](TESTING_ACCESSIBILITY.md#1️⃣-teste-de-acessibilidade-auditiva)

### 🎓 "É para um TCC"
→ [README.md#-para-seu-tcc](README.md#-para-seu-tcc)
→ [TESTING_ACCESSIBILITY.md#-métricas-para-tcc](TESTING_ACCESSIBILITY.md#-métricas-para-tcc)

### 🚀 "Vou fazer deploy"
→ [README.md#deploy](README.md#deploy-colocar-online)
→ [INSTALLATION.md#-build-para-produção](INSTALLATION.md#-build-para-produção)

### 👨‍💻 "Vou modificar código"
→ [DEVELOPMENT.md](DEVELOPMENT.md)
→ [Comentários no src/](src/)

---

## 🌐 Referências Externas

### Documentação Oficial
- Node.js: https://nodejs.org/
- npm: https://docs.npmjs.com/
- React: https://react.dev/
- TypeScript: https://www.typescriptlang.org/
- Vite: https://vitejs.dev/

### Acessibilidade
- WCAG 2.1: https://www.w3.org/WAI/WCAG21/quickref/
- WebAIM: https://webaim.org/
- W3C WAI: https://www.w3.org/WAI/
- Deafness & Web: https://www.w3.org/TR/audio-accessibility/

### Ferramentas
- Chrome DevTools: Ctrl+F12
- WAVE Accessibility: https://wave.webaim.org/
- axe DevTools: https://www.deque.com/axe/devtools/
- Contrast Checker: https://webaim.org/resources/contrastchecker/

---

## 💬 Perguntas Frequentes

**P: Por onde começo?**  
R: Leia [QUICKSTART.md](QUICKSTART.md) (5 minutos)

**P: Como instalo?**  
R: Siga [INSTALLATION.md](INSTALLATION.md)

**P: Como uso?**  
R: Veja [README.md#-funcionalidades](README.md#-funcionalidades)

**P: É acessível?**  
R: Sim! Veja [TESTING_ACCESSIBILITY.md](TESTING_ACCESSIBILITY.md)

**P: Como modifico o código?**  
R: Veja [DEVELOPMENT.md](DEVELOPMENT.md)

**P: Posso usar no meu TCC?**  
R: Sim! Veja [README.md#-para-seu-tcc](README.md#-para-seu-tcc)

---

## 🗺️ Mapa Mental do Projeto

```
Aplicação de Tarefas
    ├── Funcionalidades
    │   ├── Criar tarefa
    │   ├── Editar tarefa
    │   ├── Deletar tarefa
    │   └── Filtrar tarefas
    │
    ├── Acessibilidade
    │   ├── Sem som
    │   ├── Cores significativas
    │   ├── Navegação teclado
    │   └── Responsivo
    │
    ├── Tecnologia
    │   ├── React + TypeScript
    │   ├── Vite
    │   ├── CSS3
    │   └── LocalStorage
    │
    └── Documentação
        ├── Usuário (README.md)
        ├── Desenvolvimento (DEVELOPMENT.md)
        ├── Testes (TESTING_ACCESSIBILITY.md)
        └── Instalação (INSTALLATION.md)
```

---

## ✨ Índice Rápido

| Preciso... | Arquivo | Tempo |
|-----------|---------|-------|
| Instalar rápido | [QUICKSTART.md](QUICKSTART.md) | 5 min |
| Instruções detalhadas | [INSTALLATION.md](INSTALLATION.md) | 10 min |
| Entender funcionalidades | [README.md](README.md) | 15 min |
| Código funciona? | [DEVELOPMENT.md](DEVELOPMENT.md) | 30 min |
| Testar acessibilidade | [TESTING_ACCESSIBILITY.md](TESTING_ACCESSIBILITY.md) | 45 min |
| Copiar para TCC | [README.md](README.md) | 20 min |

---

## 📝 Versão do Projeto

- **Versão**: 1.0.0
- **Data**: Dezembro 2024
- **Estado**: Completo e testado
- **Licença**: Open Source (use livremente)

---

**Desenvolvido com ❤️ para acessibilidade e educação**

*Última atualização: 13 de Abril de 2026*
