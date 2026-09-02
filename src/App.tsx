/**
 * COMPONENTE PRINCIPAL: App
 * Integra todos os componentes e gerencia o estado global da aplicação
 * Responsável pela orquestração do sistema de tarefas
 */

import { useState } from 'react';
import { TaskForm, TaskList, TaskModal, ThemeToggle } from './components';
import { useTaskManager } from './hooks/useTaskManager';
import { Tarefa, FiltroTarefa } from './types';
import './styles/global.css';
import './styles/components.css';
import './styles/responsive.css';

function App() {
    // Gerenciamento de tarefas
    const {
        tarefas,
        carregado,
        adicionarTarefa,
        atualizarTarefa,
        alternarConclusao,
        deletarTarefa,
        limparConcluidas,
    } = useTaskManager();

    // Estado do filtro
    const [filtro, setFiltro] = useState<FiltroTarefa>('todas');

    // Estado para controlar qual tarefa está sendo editada
    const [tarefaEditando, setTarefaEditando] = useState<Tarefa | null>(null);

    /**
     * Manipula a criação de uma nova tarefa
     */
    function handleAdicionarTarefa(
        titulo: string,
        descricao: string,
        dataProximo?: string
    ) {
        adicionarTarefa(titulo, descricao, dataProximo);
        // Feedback visual
        mostrarNotificacao('✅ Tarefa criada com sucesso!');
    }

    /**
     * Manipula a edição de uma tarefa
     */
    function handleSalvarEdicao(
        id: string,
        titulo: string,
        descricao: string,
        dataProximo?: string
    ) {
        atualizarTarefa(id, { titulo, descricao, dataProximo });
        mostrarNotificacao('✅ Tarefa atualizada com sucesso!');
    }

    /**
     * Manipula a conclusão de uma tarefa
     */
    function handleToggleConclusao(id: string) {
        alternarConclusao(id);
        const tarefa = tarefas.find((t) => t.id === id);
        if (tarefa) {
            mostrarNotificacao(
                tarefa.concluida
                    ? '✅ Tarefa marcada como concluída!'
                    : '⏳ Tarefa marcada como não concluída!'
            );
        }
    }

    /**
     * Manipula a exclusão de uma tarefa
     */
    function handleDeletarTarefa(id: string) {
        deletarTarefa(id);
        mostrarNotificacao('🗑️ Tarefa deletada!');
    }

    /**
     * Manipula a limpeza de tarefas concluídas
     */
    function handleLimparConcluidas() {
        limparConcluidas();
        mostrarNotificacao('🧹 Tarefas concluídas deletadas!');
    }

    /**
     * Mostra uma notificação visual ao usuário
     * Sem sons - apenas visual
     */
    function mostrarNotificacao(mensagem: string) {
        // Criar elemento de notificação
        const notificacao = document.createElement('div');
        notificacao.className = 'notificacao notificacao-ativa';
        notificacao.textContent = mensagem;
        notificacao.setAttribute('role', 'status');
        notificacao.setAttribute('aria-live', 'polite');

        document.body.appendChild(notificacao);

        // Remover após 3 segundos
        setTimeout(() => {
            notificacao.classList.remove('notificacao-ativa');
            setTimeout(() => notificacao.remove(), 300);
        }, 3000);
    }

    // Não renderizar até carregar dados do localStorage
    if (!carregado) {
        return (
            <div className="app-loading">
                <div className="loading-spinner"></div>
                <p>Carregando tarefas...</p>
            </div>
        );
    }

    return (
        <div className="app">
            {/* Header da Aplicação */}
            <header className="app-header">
                <div className="header-container">
                    <div className="header-conteudo">
                        <h1 className="app-titulo">
                            ✅ Gerenciador de Tarefas Acessível
                        </h1>
                        <p className="app-subtitulo">
                            Organize suas tarefas com facilidade e clareza visual
                        </p>
                    </div>

                    {/* Botão de Tema */}
                    <ThemeToggle />
                </div>
            </header>

            {/* Conteúdo Principal */}
            <main className="app-main">
                <div className="app-container">
                    {/* Seção de Formulário */}
                    <div className="form-secao">
                        <TaskForm onSubmit={handleAdicionarTarefa} />
                    </div>

                    {/* Seção de Lista */}
                    <div className="list-secao">
                        <TaskList
                            tarefas={tarefas}
                            filtro={filtro}
                            onFiltroChange={setFiltro}
                            onToggle={handleToggleConclusao}
                            onDelete={handleDeletarTarefa}
                            onEdit={setTarefaEditando}
                            onLimparConcluidas={handleLimparConcluidas}
                        />
                    </div>
                </div>
            </main>

            {/* Modal de Edição */}
            <TaskModal
                tarefa={tarefaEditando}
                onClose={() => setTarefaEditando(null)}
                onSave={handleSalvarEdicao}
            />

            {/* Footer */}
            <footer className="app-footer">
                <p>
                    Desenvolvido com ♥️ para acessibilidade |
                    <span className="footer-info"> Sistema de Tarefas Acessível v1.0</span>
                </p>
            </footer>
        </div>
    );
}

export default App;
