# ✅ Gerenciador de Tarefas Acessível

Um sistema web completo de gerenciamento de tarefas com **foco em acessibilidade para pessoas surdas** e deficientes auditivos.

## 🎯 Objetivo

Este projeto foi desenvolvido como ferramenta educacional para um TCC de Engenharia de Software com foco em **acessibilidade digital**. O sistema prioriza:

- ✨ **Alertas visuais** (sem sons)
- 🎨 **Cores intuitivas** para status
- 🔤 **Interface clara e legível**
- 📱 **Responsivo** (funciona no celular)
- ♿ **Acessível** para todos

## 📋 Funcionalidades

### Gerenciamento de Tarefas
- ✏️ **Criar** tarefas com título, descrição e data limite
- 📝 **Editar** tarefas existentes
- ✅ **Marcar como concluída** ou não concluída
- 🗑️ **Deletar** tarefas individuais
- 🧹 **Limpar** todas as tarefas concluídas de uma vez

### Sistema de Status Visual
- 🔴 **Vermelho** = Urgente (hoje ou amanhã)
- 🟡 **Amarelo** = Próximo do prazo (2-7 dias)
- 🟢 **Verde** = Concluído
- ⭕ **Cinza** = Normal (sem prazo ou distante)

### Filtros
- 📂 **Todas** - Visualizar todas as tarefas
- ⏳ **Pendentes** - Apenas tarefas não concluídas
- ✅ **Concluídas** - Apenas tarefas completadas

### Recursos Extras
- 🌙☀️ **Modo Escuro/Claro** - Alternância de temas
- 📱 **Totalmente Responsivo** - Funciona perfeitamente em celular
- 💾 **LocalStorage** - Dados salvos automaticamente
- 🔔 **Notificações Visuais** - Feedback sem sons
- ⌨️ **Acessível por Teclado** - Navegação completa sem mouse

## 🚀 Começar Rápido

### Requisitos
- Node.js (v16+)
- npm ou yarn

### 1. Instalação

```bash
# Entrar na pasta do projeto
cd task-manager-accessible

# Instalar dependências
npm install
```

### 2. Executar em Desenvolvimento

```bash
npm run dev
```

A aplicação abrirá automaticamente em `http://localhost:5173`

### 3. Build para Produção

```bash
npm run build
```

Os arquivos otimizados estarão em `dist/`

## 📁 Estrutura do Projeto

```
task-manager-accessible/
├── src/
│   ├── components/          # Componentes React
│   │   ├── TaskForm.tsx     # Formulário de criar tarefa
│   │   ├── TaskItem.tsx     # Item individual da tarefa
│   │   ├── TaskList.tsx     # Lista com filtros
│   │   ├── TaskModal.tsx    # Modal de edição
│   │   ├── ThemeToggle.tsx  # Botão tema escuro/claro
│   │   └── index.ts         # Exportações
│   ├── hooks/
│   │   └── useTaskManager.ts # Hook de gerenciamento de tarefas
│   ├── styles/
│   │   ├── global.css       # Estilos globais e variáveis
│   │   ├── components.css   # Estilos dos componentes
│   │   └── responsive.css   # Estilos responsivos
│   ├── types.ts             # Tipos TypeScript
│   ├── App.tsx              # Componente principal
│   └── main.tsx             # Entrada da aplicação
├── index.html               # Template HTML
├── package.json             # Dependências
├── tsconfig.json            # Configuração TypeScript
├── vite.config.ts           # Configuração Vite
└── README.md                # Este arquivo
```

## 🎨 Cores do Sistema

### Modo Claro
- Fundo: Branco
- Texto: Preto
- Status Concluída: Verde (#4caf50)
- Status Próxima: Amarela (#ffc107)
- Status Urgente: Vermelha (#f44336)
- Status Normal: Cinza (#9e9e9e)

### Modo Escuro
- Fundo: Preto (#1a1a1a)
- Texto: Branco
- Mesmas cores de status com ajustes para melhor contraste

## ♿ Acessibilidade

### Para Pessoas Surdas/Deficientes Auditivos
- ✅ **Nenhum som** - Apenas avisos visuais
- ✅ **Cores distintas** - Status claramente diferenciados
- ✅ **Ícones grandes** - Fáceis de identificar
- ✅ **Animações visuais** - Indicam tarefas urgentes
- ✅ **Textos claros** - Sem jargão técnico

### Recursos Técnicos de Acessibilidade
- ♿ **ARIA labels** - Descrições para leitores de tela
- ⌨️ **Navegação por teclado** - Tab, Enter, Delete
- 👁️ **Contraste WCAG AA** - Mínimo 4.5:1
- 🔍 **Focus visível** - Indica o elemento ativo
- 📱 **Responsive Design** - Ajusta em qualquer tela

## 💾 Armazenamento de Dados

As tarefas são automaticamente salvas no **LocalStorage** do navegador:
- Dados persistem após fechar a página
- Sem necessidade de login
- Dados locais no seu navegador
- Privacidade garantida

Para limpar dados, use o DevTools do navegador (F12 → Application → Local Storage).

## 🔧 Tecnologias Usadas

- **React 18** - Framework frontend
- **TypeScript** - Tipagem estática
- **Vite** - Build tool rápida
- **CSS3** - Estilos e animações
- **LocalStorage API** - Persistência de dados

## 📱 Responsividade

O sistema funciona perfeitamente em:
- 📱 Celulares (320px+)
- 📲 Tablets (768px+)
- 💻 Desktops (1200px+)
- 🖥️ Telas ultra-largas (1400px+)

## 🎓 Para seu TCC

### Pontos de Destaque para Documentação

1. **Design Inclusivo**
   - Interface simples e intuitiva
   - Sem elementos confusos
   - Linguagem acessível

2. **Acessibilidade Visual**
   - Sistema de cores com significado
   - Ícones complementam texto
   - Não depende de cor única

3. **Responsividade**
   - Funciona em qualquer dispositivo
   - Botões grandes (44px x 44px)
   - Toque fácil em celular

4. **Sem Dependências de Som**
   - Notificações apenas visuais
   - Animações suaves (não agressivas)
   - Feedback claro e imediato

5. **Código Limpo**
   - Bem comentado
   - Componentes isolados
   - Fácil de entender e manter

## 🔍 Como Testar Acessibilidade

### Teste de Teclado
1. Tab - Navegar entre elementos
2. Enter - Ativar botões
3. Space - Marcar/desmarcar
4. Delete - Delete de tarefas

### Teste no Leitor de Tela
- Use VoiceOver (Mac) ou Narrator (Windows)
- Todos os elementos têm descrições

### Teste de Contraste
- Use ferramentas como WAVE ou axe DevTools
- Contraste mínimo WCAG AA

### Teste de Responsividade
- Use DevTools (F12)
- Teste em diferentes breakpoints

## 📚 Recursos Educacionais

Para aprender mais sobre acessibilidade:
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [Deaf Accessibility in Web Design](https://www.w3.org/TR/audio-accessibility/)

## 🐛 Troubleshooting

### Tarefas não estão salvando
- Verifique se seu navegador permite LocalStorage
- Limpe o cache (Ctrl+Shift+Delete)
- Tente em modo anônimo

### Modo escuro não funciona
- Refresh a página (Ctrl+R)
- Verifique as preferências do sistema

### Botões muito pequenos no celular
- Atualize o navegador
- Verifique zoom da página (Ctrl+0)

## 📄 Licença

Este projeto é de código aberto e pode ser usado livremente para fins educacionais.

## 👨‍💼 Autor

Desenvolvido como ferramenta acadêmica para demonstrar princípios de **Design Inclusivo e Acessibilidade Digital**.

---

**Desenvolvido com ❤️ para acessibilidade**

*Se você tem sugestões para melhorar a acessibilidade, abra uma issue ou envie um pull request!*
