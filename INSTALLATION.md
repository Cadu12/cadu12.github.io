# 📋 Instalação Passo a Passo

Guia detalhado de instalação para quem está começando.

## 🔧 Passo 1: Instalar Node.js

### Windows

1. Ir em: https://nodejs.org/
2. Clicar em botão verde "18 LTS" (ou versão atual)
3. Fazer download do `.msi`
4. Executar o instalador
5. Clicar "Next" em cada tela
6. Clicar "Install"
7. Fechar o instalador

### Mac

**Opção A: Via Website**
1. Ir em: https://nodejs.org/
2. Clicar em "18 LTS"
3. Download do `.pkg`
4. Executar arquivo
5. Seguir instruções do installer

**Opção B: Via Homebrew (mais rápido)**
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install node
```

### Linux

**Ubuntu/Debian**:
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

**Fedora**:
```bash
sudo dnf install nodejs npm
```

---

## ✅ Passo 2: Verificar Instalação

Abra um terminal (ou PowerShell no Windows) e digite:

```bash
node --version
npm --version
```

Você deve ver algo como:
```
v18.17.0
9.6.7
```

Se funcionar, ✅ Node.js está instalado!

---

## 📥 Passo 3: Clonar/Copiar o Projeto

### Opção A: Git Clone
```bash
git clone <url-do-repositorio>
cd task-manager-accessible
```

### Opção B: Baixar ZIP
1. Ir em GitHub → Download ZIP
2. Extrair em uma pasta
3. Abrir terminal nessa pasta

### Opção C: Usar arquivo local
```bash
cd /Users/cadu/projects/usp/task-manager-accessible
```

---

## 📦 Passo 4: Instalar Dependências

No terminal, na pasta do projeto, execute:

```bash
npm install
```

Você verá saída como:
```
added 250 packages, and audited 251 packages in 10s

found 0 vulnerabilities
```

✅ Se não houver erros, tudo funcionou!

**Nota**: Isso criará uma pasta `node_modules/` com todas as bibliotecas necessárias.

---

## 🚀 Passo 5: Iniciar o Servidor

Execute:

```bash
npm run dev
```

Você verá:
```
VITE v4.3.0  ready in 245 ms

➜  Local:   http://localhost:5173/
➜  press h to show help
```

✅ A aplicação abriu em `http://localhost:5173/`!

---

## 🎉 Pronto!

A aplicação está rodando! Você pode agora:

- **Criar tarefas**: Digite no formulário
- **Editar tarefas**: Clique em "✏️ Editar"
- **Marcar como feita**: Clique em "✔️ Concluir"
- **Deletar tarefas**: Clique em "🗑️ Deletar"
- **Filtrar**: Use os botões "Todas", "Pendentes", "Concluídas"
- **Mudar tema**: Clique 🌙 ou ☀️

---

## 🛑 Parar o Servidor

No terminal, pressione:
```
Ctrl + C
```

Depois digite `Y` para confirmar.

---

## 🔄 Reiniciar o Servidor

Se precisar reiniciar:

```bash
npm run dev
```

---

## 📦 Build para Produção

Se quiser criar uma versão pronta para compartilhar:

```bash
npm run build
```

Isso cria uma pasta `dist/` com a aplicação otimizada.

Para testar o build:
```bash
npm run preview
```

---

## 🆘 Erros Comuns

### Erro: "npm: command not found"

**Causa**: Node.js não está instalado  
**Solução**:
1. Baixe do nodejs.org
2. Instale o programa
3. Reinicie o terminal
4. Digite `npm --version` novamente

### Erro: "EACCES: permission denied"

**Causa**: Permissão de pasta  
**Solução (Mac/Linux)**:
```bash
sudo npm install
sudo npm run dev
```

### Erro: "Port 5173 already in use"

**Causa**: Outra aplicação está usando a porta  
**Solução**:

**Windows**:
```bash
netstat -ano | findstr :5173
taskkill /PID <numero> /F
npm run dev
```

**Mac/Linux**:
```bash
lsof -i :5173
kill -9 <numero>
npm run dev
```

### Dependências não instalam

**Solução**:
```bash
rm -rf node_modules
rm package-lock.json
npm install
```

---

## 📁 Estrutura Criada

Após instalação, você terá:

```
task-manager-accessible/
├── node_modules/              (dependências - não editar!)
├── src/                       (código-fonte)
├── dist/                      (criado após npm run build)
├── package.json               (configuração)
├── package-lock.json          (versões exatas)
├── tsconfig.json              (TypeScript)
├── vite.config.ts             (Vite)
├── index.html                 (Página HTML)
├── README.md                  (Documentação)
└── ...outros arquivos
```

---

## ✨ Próximo?

1. **Ler documentação**: Ver [README.md](README.md)
2. **Entender código**: Ver [DEVELOPMENT.md](DEVELOPMENT.md)
3. **Testar acessibilidade**: Ver [TESTING_ACCESSIBILITY.md](TESTING_ACCESSIBILITY.md)
4. **Modificar código**: Edite os arquivos em `src/`
5. **Build final**: Execute `npm run build`

---

## 📝 Notas Importantes

- ✅ Dados são salvos no LocalStorage automaticamente
- ✅ Não há servidor backend necessário
- ✅ Funciona offline depois de carregado
- ✅ Compatível com todos navegadores modernos
- ⚠️ Limpar o histórico apaga as tarefas

---

## 🆘 Precisa de Ajuda?

1. Verificar este guia novamente
2. Ler [README.md](README.md)
3. Revisar seção Troubleshooting
4. Verificar erros no console (F12)

---

**Referências Open Source**:
- Node.js: https://nodejs.org/
- npm: https://npmjs.com/
- React: https://react.dev/
- Vite: https://vitejs.dev/

**Desenvolvido com ❤️ para acessibilidade**
