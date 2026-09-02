/**
 * COMPONENTE: TaskItem
 * Exibe uma tarefa individual com status visual
 * Cores e ícones grandes para boa acessibilidade visual
 */

import { Tarefa, TarefaStatus } from '../types';

interface TaskItemProps {
    tarefa: Tarefa;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
    onEdit: (tarefa: Tarefa) => void;
}

export function TaskItem({ tarefa, onToggle, onDelete, onEdit }: TaskItemProps) {
    /**
     * Retorna a cor da classe CSS baseada no status da tarefa
     */
    function getStatusClasse(): string {
        switch (tarefa.status) {
            case TarefaStatus.CONCLUIDA:
                return 'status-concluida';
            case TarefaStatus.URGENTE:
                return 'status-urgente';
            case TarefaStatus.PROXIMA:
                return 'status-proxima';
            case TarefaStatus.NORMAL:
                return 'status-normal';
            default:
                return 'status-normal';
        }
    }

    /**
     * Retorna o ícone baseado no status
     */
    function getStatusIcone(): string {
        switch (tarefa.status) {
            case TarefaStatus.CONCLUIDA:
                return '✅'; // Concluído
            case TarefaStatus.URGENTE:
                return '🔴'; // Urgente
            case TarefaStatus.PROXIMA:
                return '🟡'; // Próximo do prazo
            case TarefaStatus.NORMAL:
            default:
                return '⭕'; // Normal (cinza)
        }
    }

    /**
     * Formata a data para exibição legível
     */
    function formatarData(data?: string): string {
        if (!data) return 'Sem prazo';

        try {
            const date = new Date(data);
            return new Intl.DateTimeFormat('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
            }).format(date);
        } catch {
            return 'Data inválida';
        }
    }

    /**
     * Descrição de status para acessibilidade
     */
    function getStatusDescricao(): string {
        switch (tarefa.status) {
            case TarefaStatus.CONCLUIDA:
                return 'Tarefa concluída';
            case TarefaStatus.URGENTE:
                return 'Tarefa urgente - ação necessária';
            case TarefaStatus.PROXIMA:
                return 'Tarefa próxima do prazo';
            case TarefaStatus.NORMAL:
            default:
                return 'Tarefa normal';
        }
    }

    return (
        <div
            className={`task-item ${getStatusClasse()} ${tarefa.concluida ? 'completada' : ''}`}
            role="article"
            aria-label={`Tarefa: ${tarefa.titulo}`}
        >
            {/* Indicador Visual de Status */}
            <div
                className="task-status-indicador"
                aria-label={getStatusDescricao()}
                title={getStatusDescricao()}
            >
                {getStatusIcone()}
            </div>

            {/* Conteúdo da Tarefa */}
            <div className="task-conteudo">
                {/* Título */}
                <h3 className="task-titulo">
                    {tarefa.titulo}
                </h3>

                {/* Descrição */}
                {tarefa.descricao && (
                    <p className="task-descricao">
                        {tarefa.descricao}
                    </p>
                )}

                {/* Data Limite */}
                <div className="task-data">
                    📅 <time dateTime={tarefa.dataProximo}>{formatarData(tarefa.dataProximo)}</time>
                </div>
            </div>

            {/* Ações */}
            <div className="task-acoes">
                {/* Botão Marcar/Desmarcar Concluída */}
                <button
                    onClick={() => onToggle(tarefa.id)}
                    className={`btn btn-acao ${tarefa.concluida ? 'btn-desmarcar' : 'btn-marcar'}`}
                    aria-label={
                        tarefa.concluida
                            ? `Marcar "${tarefa.titulo}" como não concluída`
                            : `Marcar "${tarefa.titulo}" como concluída`
                    }
                    title={tarefa.concluida ? 'Marcar como não concluída' : 'Marcar como concluída'}
                >
                    {tarefa.concluida ? '↩️ Desfazer' : '✔️ Concluir'}
                </button>

                {/* Botão Editar */}
                <button
                    onClick={() => onEdit(tarefa)}
                    className="btn btn-acao btn-editar"
                    aria-label={`Editar tarefa "${tarefa.titulo}"`}
                    title="Editar tarefa"
                >
                    ✏️ Editar
                </button>

                {/* Botão Deletar */}
                <button
                    onClick={() => {
                        if (confirm(`Tem certeza que deseja deletar a tarefa "${tarefa.titulo}"?`)) {
                            onDelete(tarefa.id);
                        }
                    }}
                    className="btn btn-acao btn-deletar"
                    aria-label={`Deletar tarefa "${tarefa.titulo}"`}
                    title="Deletar tarefa"
                >
                    🗑️ Deletar
                </button>
            </div>

            {/* Status Urgente - Animação Visual */}
            {tarefa.status === TarefaStatus.URGENTE && (
                <div className="task-alerta" aria-hidden="true"></div>
            )}
        </div>
    );
}
