# 🚀 Quick Start - Comece em 5 Minutos

Instruções rápidas para começar com o Gerenciador de Tarefas Acessível.

## ⚡ Pré-requisitos

- Node.js v16+ ([Download](https://nodejs.org/))
- npm (vem com Node.js)
- Terminal/CMD

## 🎯 Instalação (3 passos)

### 1️⃣ Entre na pasta do projeto

```bash
cd path/to/task-manager-accessible
```

### 2️⃣ Instale as dependências

```bash
npm install
```

Isso instala React, Vite e outras ferramentas necessárias.

### 3️⃣ Inicie o servidor

```bash
npm run dev
```

A aplicação abrirá automaticamente em:
```
http://localhost:5173
```

✅ **Pronto!** Seu gerenciador de tarefas está rodando!

---

## 💡 Primeiros Passos

### Criar uma Tarefa
1. Digite o título no campo "Título da Tarefa"
2. (Opcional) Descrição no campo maior
3. (Opcional) Defina uma data limite
4. Clique em "Adicionar Tarefa"

### Marcar como Concluída
- Clique no botão "✔️ Concluir"
- Tarefa fica com cor verde

### Editar Tarefa
- Clique no botão "✏️ Editar"
- Faça as mudanças na janela
- Clique "💾 Salvar Alterações"

### Deletar Tarefa
- Clique em "🗑️ Deletar"
- Confirme a exclusão

### Filtrar Tarefas
- Clique "📂 Todas" - Ver tudo
- Clique "⏳ Pendentes" - Não concluídas
- Clique "✅ Concluídas" - Concluídas

### Mudar de Tema
- Clique o botão 🌙/☀️ no canto superior direito

---

## 📁 Arquivos Importantes

```
projeto/
├── package.json          ← Dependências (não editar)
├── index.html            ← Página principal
├── README.md             ← Documentação completa ⭐
├── DEVELOPMENT.md        ← Guia técnico detalhado
├── TESTING_ACCESSIBILITY.md ← Como testar acessibilidade
└── src/
    ├── App.tsx           ← Componente principal
    ├── types.ts          ← Tipos de dados
    ├── components/       ← Componentes React
    ├── hooks/            ← Lógica de tarefas
    └── styles/           ← Estilos CSS
```

---

## 🔨 Comandos Úteis

```bash
# Iniciar em desenvolvimento (http://localhost:5173)
npm run dev

# Build para produção (pasta dist/)
npm run build

# Preview do build de produção
npm run preview

# Verificar tipos TypeScript
npm run build
```

---

## 🎨 Dicas Rápidas

### Cores de Status

| Cor | Status | Significado |
|-----|--------|------------|
| 🟢 Verde | Concluída | Tarefa finalizada |
| 🔴 Vermelho | Urgente | Dentro de 1 dia |
| 🟡 Amarelo | Próxima | 2-7 dias |
| ⭕ Cinza | Normal | Sem prazo ou distante |

### Teclas de Atalho

| Tecla | Ação |
|-------|------|
| Tab | Navegar entre elementos |
| Enter | Clicar botão ativo |
| Escape | Fechar modal |

---

## 📱 Testar em Celular

### Opção 1: DevTools do Chrome
1. Abrir DevTools (F12)
2. Clicar ícone dispositivo (Ctrl+Shift+M)
3. Escolher tamanho (iPhone X, Galaxy S10, etc)

### Opção 2: Dispositivo Real
1. Descobrir IP do seu computador:
   - Windows: `ipconfig` → "IPv4 Address"
   - Mac: `ifconfig` → "inet"
   - Linux: `hostname -I`

2. No celular, acessar:
   ```
   http://SEU_IP:5173
   ```

---

## 🆘 Troubleshooting

### "npm: command not found"
- Instalar Node.js em: nodejs.org
- Fechar e reabrir terminal

### "Port 5173 already in use"
```bash
# Windows
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Mac/Linux
lsof -i :5173
kill -9 <PID>
```

### Tarefas não salvam
- Verificar se navegador permite LocalStorage
- DevTools → Application → LocalStorage
- Tentar em modo anônimo

### Modo escuro não funciona
- Fazer refresh na página (Ctrl+R)
- Limpar cache (Ctrl+Shift+Delete)

---

## 📚 Próximos Passos

1. **Ler [README.md](README.md)**
   - Documentação completa com todas funcionalidades

2. **Ler [DEVELOPMENT.md](DEVELOPMENT.md)**
   - Explicações técnicas profundas
   - Como o código funciona
   - Exemplos de uso

3. **Ler [TESTING_ACCESSIBILITY.md](TESTING_ACCESSIBILITY.md)**
   - Como testar acessibilidade
   - Checklist de validação
   - Ferramentas recomendadas

4. **Fazer Build para Produção**
   ```bash
   npm run build
   npm run preview
   ```

---

## 💽 Deploy (Colocar Online)

### Opção 1: Vercel (Recomendado)
```bash
# Instalar CLI
npm i -g vercel

# Fazer deploy
vercel
```

### Opção 2: GitHub Pages
```bash
# Fazer build
npm run build

# Arquivos em dist/ podem ser commitados
git add dist/
git commit -m "build: production build"
git push
```

### Opção 3: Netlify
1. Fazer build: `npm run build`
2. Ir em netlify.com
3. Fazer drag-drop da pasta `dist/`

---

## ✨ Estrutura de Pasta (Resumo)

```
task-manager-accessible/
│
├── 📄 Arquivos de Configuração
│   ├── package.json          (dependências)
│   ├── tsconfig.json         (TypeScript)
│   ├── vite.config.ts        (build)
│   └── index.html            (página HTML)
│
├── 📗 Documentação
│   ├── README.md             (leia primeiro!)
│   ├── DEVELOPMENT.md        (guia técnico)
│   └── TESTING_ACCESSIBILITY.md (testes)
│
└── 📂 src/
    ├── App.tsx               (app principal)
    ├── main.tsx              (entrada)
    ├── types.ts              (tipos)
    ├── components/           (React components)
    ├── hooks/                (lógica de tarefas)
    └── styles/               (CSS)
```

---

## 🎓 Para seu TCC

### O que Destacar

1. ✅ **Sem som** - Apenas alertas visuais
2. ✅ **Cores significativas** - Vermelho/Amarelo/Verde
3. ✅ **Interface simples** - Fácil de usar
4. ✅ **Responsivo** - Funciona no celular
5. ✅ **Código limpo** - Bem comentado

### Como Documentar

```markdown
## Sistema de Gerenciamento de Tarefas Acessível

### Tecnologias
- React 18 + TypeScript
- Vite (build tool)
- CSS3 com variáveis
- LocalStorage API

### Acessibilidade
- Sem dependência de som ✅
- Sistema de cores claro ✅
- Navegação por teclado ✅
- Responsivo (320px+) ✅

### Como Rodar
\`\`\`bash
npm install
npm run dev
\`\`\`
```

---

## 📞 Precisa de Ajuda?

1. **Documentação**: Leia [README.md](README.md)
2. **Técnica**: Leia [DEVELOPMENT.md](DEVELOPMENT.md)
3. **Testes**: Leia [TESTING_ACCESSIBILITY.md](TESTING_ACCESSIBILITY.md)
4. **Erros**: Verifique Troubleshooting acima

---

**Aproveite! 🎉**
