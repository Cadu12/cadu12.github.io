/**
 * TIPOS E INTERFACES
 * Define os tipos de dados utilizados no sistema de tarefas
 */

/**
 * Enum para os status de urgência da tarefa
 * - CONCLUIDA: Tarefa foi completada (verde)
 * - NORMAL: Tarefa com prazo distante ou sem prazo (cinza)
 * - PROXIMA: Tarefa próxima do prazo (amarela)
 * - URGENTE: Tarefa com prazo próximo (vermelha)
 */
export enum TarefaStatus {
  CONCLUIDA = 'concluida',
  NORMAL = 'normal',
  PROXIMA = 'proxima',
  URGENTE = 'urgente',
}

/**
 * Interface para a estrutura de uma Tarefa
 */
export interface Tarefa {
  /** ID único da tarefa (gerado automaticamente) */
  id: string;
  
  /** Título da tarefa */
  titulo: string;
  
  /** Descrição detalhada da tarefa */
  descricao: string;
  
  /** Data e hora de conclusão esperada */
  dataProximo?: string;
  
  /** Indica se a tarefa foi concluída */
  concluida: boolean;
  
  /** Data de criação da tarefa */
  dataCriacao: string;
  
  /** Status de urgência da tarefa */
  status: TarefaStatus;
}

/**
 * Interface para filtro de tarefas
 */
export type FiltroTarefa = 'todas' | 'pendentes' | 'concluidas';
