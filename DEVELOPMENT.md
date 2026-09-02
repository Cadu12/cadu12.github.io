# 📚 Guia de Desenvolvimento

Documentação técnica detalhada do Gerenciador de Tarefas Acessível.

## 📖 Índice

1. [Arquitetura](#arquitetura)
2. [Componentes](#componentes)
3. [Hooks Customizados](#hooks-customizados)
4. [Tipos e Interfaces](#tipos-e-interfaces)
5. [Estilos e CSS](#estilos-e-css)
6. [Acessibilidade](#acessibilidade)
7. [Guia de Contribuição](#guia-de-contribuição)

## 🏗️ Arquitetura

### Padrão de Arquitetura

O projeto usa **React com Hooks** seguindo estes padrões:

```
Componentes Apresentacionais (UI)
        ↓
    useTaskManager Hook
        ↓
    LocalStorage
```

### Fluxo de Dados

```
App.tsx (Estado Alto)
  ├── TaskList (Exibição)
  ├── TaskForm (Input)
  ├── TaskModal (Edição)
  └── useTaskManager (Lógica)
```

## 🎛️ Componentes

### TaskForm

**Arquivo**: `src/components/TaskForm.tsx`

Formulário para criar novas tarefas.

**Props**:
```typescript
interface TaskFormProps {
  onSubmit: (titulo: string, descricao: string, dataProximo?: string) => void;
  botaoTexto?: string;
  carregando?: boolean;
}
```

**Funcionalidades**:
- Validação de campos
- Contador de caracteres
- Feedback visual de erros
- Limpeza de formulário

**Exemplos de Uso**:
```jsx
<TaskForm 
  onSubmit={handleAdicionarTarefa}
  botaoTexto="Criar Tarefa"
/>
```

### TaskItem

**Arquivo**: `src/components/TaskItem.tsx`

Exibe uma tarefa individual com todas as ações.

**Props**:
```typescript
interface TaskItemProps {
  tarefa: Tarefa;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (tarefa: Tarefa) => void;
}
```

**Status Visual**:
- 🟢 Concluída = Verde
- 🔴 Urgente = Vermelho
- 🟡 Próxima = Amarelo
- ⭕ Normal = Cinza

**Animações**:
- Pulse suave em tarefas urgentes
- Hover effect ao passar o mouse
- Transição suave de cores

### TaskList

**Arquivo**: `src/components/TaskList.tsx`

Exibe a lista de tarefas com sistema de filtros.

**Props**:
```typescript
interface TaskListProps {
  tarefas: Tarefa[];
  filtro: FiltroTarefa;
  onFiltroChange: (filtro: FiltroTarefa) => void;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (tarefa: Tarefa) => void;
  onLimparConcluidas: () => void;
}
```

**Filtros Disponíveis**:
- `'todas'` - Todas as tarefas
- `'pendentes'` - Não concluídas
- `'concluidas'` - Concluídas

### TaskModal

**Arquivo**: `src/components/TaskModal.tsx`

Modal para editar uma tarefa existente.

**Props**:
```typescript
interface TaskModalProps {
  tarefa: Tarefa | null;
  onClose: () => void;
  onSave: (id: string, titulo: string, descricao: string, dataProximo?: string) => void;
}
```

**Características**:
- Validação antes de salvar
- Botão de fechar no header
- Overlay semitransparente
- Animação de entrada

### ThemeToggle

**Arquivo**: `src/components/ThemeToggle.tsx`

Botão para alternar tema claro/escuro.

**Funcionalidades**:
- Salva preferência no localStorage
- Aplica tema ao documento
- Respeita preferência do sistema
- Ícone responsivo

## 🔨 Hooks Customizados

### useTaskManager

**Arquivo**: `src/hooks/useTaskManager.ts`

Hook central que gerencia toda a lógica de tarefas.

**Estados**:
```typescript
const [tarefas, setTarefas] = useState<Tarefa[]>([]);
const [carregado, setCarregado] = useState(false);
```

**Funções Exportadas**:

#### `adicionarTarefa(titulo, descricao, dataProximo?)`
Cria uma nova tarefa.

```typescript
adicionarTarefa('Minha tarefa', 'Descrição', '2024-12-31T15:30');
```

#### `atualizarTarefa(id, atualizacoes)`
Atualiza campos de uma tarefa existente.

```typescript
atualizarTarefa('123', { 
  titulo: 'Novo título',
  dataProximo: '2024-12-31T15:30'
});
```

#### `alternarConclusao(id)`
Marca/desmarca tarefa como concluída.

```typescript
alternarConclusao('123');
```

#### `deletarTarefa(id)`
Remove uma tarefa.

```typescript
deletarTarefa('123');
```

#### `limparConcluidas()`
Remove todas as tarefas concluídas.

```typescript
limparConcluidas();
```

### Cálculo de Status

```typescript
function calcularStatus(dataProximo?: string, concluida?: boolean): TarefaStatus {
  if (concluida) return TarefaStatus.CONCLUIDA;
  if (!dataProximo) return TarefaStatus.NORMAL;
  
  const diasRestantes = calcularDias(dataProximo);
  
  if (diasRestantes <= 1) return TarefaStatus.URGENTE;
  if (diasRestantes <= 7) return TarefaStatus.PROXIMA;
  return TarefaStatus.NORMAL;
}
```

## 📝 Tipos e Interfaces

**Arquivo**: `src/types.ts`

### TarefaStatus

```typescript
enum TarefaStatus {
  CONCLUIDA = 'concluida',
  NORMAL = 'normal',
  PROXIMA = 'proxima',
  URGENTE = 'urgente',
}
```

### Tarefa

```typescript
interface Tarefa {
  id: string;                    // ID único
  titulo: string;               // Título da tarefa
  descricao: string;            // Descrição detalhada
  dataProximo?: string;         // Data limite ISO 8601
  concluida: boolean;           // Status de conclusão
  dataCriacao: string;          // Data de criação ISO 8601
  status: TarefaStatus;         // Status calculado
}
```

### FiltroTarefa

```typescript
type FiltroTarefa = 'todas' | 'pendentes' | 'concluidas';
```

## 🎨 Estilos e CSS

### Estrutura de Arquivos

```
src/styles/
├── global.css        # Variáveis CSS, reset, estilos base
├── components.css    # Estilos dos componentes
└── responsive.css    # Media queries e responsividade
```

### Variáveis CSS

O sistema usa variáveis CSS para tema:

```css
:root {
  /* Cores */
  --cor-fundo: #ffffff;
  --cor-urgente: #f44336;
  --cor-concluida: #4caf50;
  --cor-proxima: #ffc107;
  
  /* Espaçamentos */
  --espacamento-xs: 0.5rem;
  --espacamento-sm: 1rem;
  --espacamento-md: 1.5rem;
  
  /* Tipografia */
  --tamanho-fonte-base: 16px;
  --tamanho-fonte-grande: 20px;
}

[data-tema='dark'] {
  --cor-fundo: #1a1a1a;
  --cor-texto-principal: #ffffff;
  /* ... */
}
```

### Breakpoints Responsivos

```css
/* Mobile: 480px ou menos */
@media (max-width: 480px) { }

/* Tablet: 481px até 768px */
@media (min-width: 481px) and (max-width: 768px) { }

/* Desktop: 769px ou mais */
@media (min-width: 769px) { }

/* Ultra-largo: 1200px+ */
@media (min-width: 1200px) { }
```

### Animações

```css
/* Pulse - Para tarefas urgentes */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* Slide Down - Para notificações */
@keyframes slideDown {
  from {
    transform: translateY(-10px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
```

## ♿ Acessibilidade

### Implementações de Acessibilidade

#### 1. ARIA Labels

```jsx
<button aria-label="Marcar como concluída">
  ✔️ Concluir
</button>
```

#### 2. ARIA Live Regions

```jsx
<div aria-live="polite" role="status">
  {contador} tarefas criadas
</div>
```

#### 3. Focus Visível

```css
:focus-visible {
  outline: 3px solid var(--cor-primary);
  outline-offset: 2px;
}
```

#### 4. Roles Semânticos

```jsx
<section role="region" aria-label="Lista de tarefas">
  {/* Conteúdo */}
</section>
```

#### 5. Descrições Textuais

```jsx
<img alt="Ícone de urgência" src="urgent.svg" />
```

#### 6. Navegação por Teclado

- **Tab**: Navegar entre elementos
- **Enter**: Ativar botões
- **Space**: Marcar/desmarcar
- **Escape**: Fechar modais

### Cores para Acessibilidade

**Não use apenas cor:**
```jsx
// ❌ Ruim
<div style={{color: 'red'}}>Urgente</div>

// ✅ Bom
<div>🔴 Urgente <span className="sr-only">status urgente</span></div>
```

### Contraste de Cores

Todas as cores têm relação de contraste mínima **4.5:1** (WCAG AA):

```
Preto (#1a1a1a) + Branco (#ffffff) = 21:1
Azul (#2196f3) + Branco (#ffffff) = 8.6:1
Vermelho (#f44336) + Branco (#ffffff) = 3.99:1 ⚠️ (revisado em dark mode)
```

## 🔄 Guia de Contribuição

### Como Adicionar um Novo Componente

1. **Criar arquivo em `src/components/`**

```tsx
interface MeuComponenteProps {
  prop1: string;
  prop2?: number;
}

export function MeuComponente({ prop1, prop2 }: MeuComponenteProps) {
  return (
    <div className="meu-componente">
      {/* Conteúdo */}
    </div>
  );
}
```

2. **Adicionar ao `src/components/index.ts`**

```typescript
export { MeuComponente } from './MeuComponente';
```

3. **Adicionar estilos em `src/styles/components.css`**

```css
.meu-componente {
  /* estilos */
}
```

4. **Importar e usar no App.tsx**

```tsx
import { MeuComponente } from './components';
```

### Boas Práticas

- ✅ Use TypeScript para tipos
- ✅ Adicione comentários JSDoc
- ✅ Teste acessibilidade
- ✅ Teste responsividade
- ✅ Mantenha código limpo
- ✅ Use nomes descritivos
- ✅ Reutilize componentes

### Testes Recomendados

```bash
# Lints TypeScript
npm run lint

# Build de produção
npm run build

# Preview do build
npm run preview
```

## 📊 Exemplos de Uso

### Criar uma Tarefa Programaticamente

```typescript
adicionarTarefa(
  'Aprender React',
  'Estudar hooks e componentes funcionais',
  '2024-12-31T18:00'
);
```

### Atualizar Status de Urgência

```typescript
atualizarTarefa('id-123', {
  dataProximo: '2024-12-25T15:00',
  descricao: 'Nova descrição'
});
```

### Filtrar Tarefas

```typescript
const urgentes = tarefas.filter(t => t.status === TarefaStatus.URGENTE);
const pendentes = tarefas.filter(t => !t.concluida);
```

## 🚀 Performance

### Otimizações Implementadas

1. **Memoização**: Componentes com `memo()` quando apropriado
2. **Separação lógica**: Hook customizado para lógica
3. **CSS Modular**: Estilos organizados por escopo
4. **LocalStorage**: Persistência sem requisições

### Melhorias Futuras

- Implementar React.memo em componentes estáticos
- Usar useCallback para callbacks
- Implementar virtual scrolling para listas grandes
- Adicionar service worker para offline

---

**Desenvolvido com ❤️ para aprendizado e acessibilidade**
