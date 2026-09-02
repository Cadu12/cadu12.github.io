/**
 * COMPONENTE: TaskList
 * Lista de tarefas com sistema de filtros
 * Permite visualizar: todas, apenas pendentes, ou apenas concluídas
 */

import { Tarefa, FiltroTarefa } from '../types';
import { TaskItem } from './TaskItem';

interface TaskListProps {
    tarefas: Tarefa[];
    filtro: FiltroTarefa;
    onFiltroChange: (filtro: FiltroTarefa) => void;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
    onEdit: (tarefa: Tarefa) => void;
    onLimparConcluidas: () => void;
}

export function TaskList({
    tarefas,
    filtro,
    onFiltroChange,
    onToggle,
    onDelete,
    onEdit,
    onLimparConcluidas,
}: TaskListProps) {
    /**
     * Filtra as tarefas baseado no filtro selecionado
     */
    function tarefasFiltradas(): Tarefa[] {
        switch (filtro) {
            case 'pendentes':
                return tarefas.filter((t) => !t.concluida);
            case 'concluidas':
                return tarefas.filter((t) => t.concluida);
            case 'todas':
            default:
                return tarefas;
        }
    }

    const filtradas = tarefasFiltradas();
    const concluidas = tarefas.filter((t) => t.concluida);

    /**
     * Texto de resumo das tarefas
     */
    function getResumo(): string {
        const totalFiltradas = filtradas.length;
        const totalGeral = tarefas.length;

        if (filtro === 'todas') {
            return `Total: ${totalGeral} tarefa${totalGeral !== 1 ? 's' : ''} (${concluidas.length} concluída${concluidas.length !== 1 ? 's' : ''})`;
        } else if (filtro === 'pendentes') {
            return `Pendentes: ${totalFiltradas} tarefa${totalFiltradas !== 1 ? 's' : ''}`;
        } else {
            return `Concluídas: ${totalFiltradas} tarefa${totalFiltradas !== 1 ? 's' : ''}`;
        }
    }

    return (
        <section className="task-list" role="region" aria-label="Lista de tarefas">
            {/* Cabeçalho com Filtros */}
            <div className="task-list-header">
                <div className="task-list-resumo">
                    <h2 className="titulo-secao">📋 Minhas Tarefas</h2>
                    <p className="resumo-tarefas" aria-live="polite">
                        {getResumo()}
                    </p>
                </div>

                {/* Botões de Filtro */}
                <div className="task-filtros" role="group" aria-label="Filtros de tarefas">
                    {(['todas', 'pendentes', 'concluidas'] as const).map((f) => (
                        <button
                            key={f}
                            onClick={() => onFiltroChange(f)}
                            className={`btn btn-filtro ${filtro === f ? 'ativo' : ''}`}
                            aria-pressed={filtro === f}
                            aria-label={`Filtrar ${f} tarefas`}
                        >
                            {f === 'todas' && '📂 Todas'}
                            {f === 'pendentes' && '⏳ Pendentes'}
                            {f === 'concluidas' && '✅ Concluídas'}
                        </button>
                    ))}
                </div>

                {/* Botão Limpar Concluídas */}
                {concluidas.length > 0 && (
                    <button
                        onClick={() => {
                            if (confirm('Deseja deletar todas as tarefas concluídas?')) {
                                onLimparConcluidas();
                            }
                        }}
                        className="btn btn-secundario"
                        aria-label="Limpar todas as tarefas concluídas"
                    >
                        🧹 Limpar Concluídas
                    </button>
                )}
            </div>

            {/* Lista de Tarefas */}
            <div className="task-items-container">
                {filtradas.length === 0 ? (
                    <div className="task-vazio" role="status" aria-live="polite">
                        {tarefas.length === 0 ? (
                            <>
                                <div className="vazio-icone">📭</div>
                                <p className="vazio-mensagem">
                                    Nenhuma tarefa ainda. Crie sua primeira tarefa acima!
                                </p>
                            </>
                        ) : (
                            <>
                                <div className="vazio-icone">🎯</div>
                                <p className="vazio-mensagem">
                                    Nenhuma tarefa {filtro === 'pendentes' ? 'pendente' : 'concluída'}.
                                </p>
                            </>
                        )}
                    </div>
                ) : (
                    <div role="list" className="task-list-itens">
                        {filtradas.map((tarefa) => (
                            <div key={tarefa.id} role="listitem">
                                <TaskItem
                                    tarefa={tarefa}
                                    onToggle={onToggle}
                                    onDelete={onDelete}
                                    onEdit={onEdit}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
