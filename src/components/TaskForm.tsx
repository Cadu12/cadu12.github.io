/**
 * COMPONENTE: TaskForm
 * Formulário para criar e editar tarefas
 * Interface acessível com campos grandes e legivelidade clara
 */

import { useState } from 'react';

interface TaskFormProps {
    onSubmit: (titulo: string, descricao: string, dataProximo?: string) => void;
    botaoTexto?: string;
    carregando?: boolean;
}

export function TaskForm({
    onSubmit,
    botaoTexto = 'Adicionar Tarefa',
    carregando = false
}: TaskFormProps) {
    // Estado do formulário
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [dataProximo, setDataProximo] = useState('');
    const [erro, setErro] = useState('');

    /**
     * Valida o formulário antes de enviar
     */
    function validar(): boolean {
        if (!titulo.trim()) {
            setErro('O título da tarefa é obrigatório');
            return false;
        }
        if (titulo.length > 100) {
            setErro('O título não pode ter mais de 100 caracteres');
            return false;
        }
        if (descricao.length > 500) {
            setErro('A descrição não pode ter mais de 500 caracteres');
            return false;
        }
        setErro('');
        return true;
    }

    /**
     * Limpa o formulário
     */
    function limpar() {
        setTitulo('');
        setDescricao('');
        setDataProximo('');
        setErro('');
    }

    /**
     * Manipula o envio do formulário
     */
    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        if (!validar()) return;

        onSubmit(titulo, descricao, dataProximo || undefined);
        limpar();
    }

    return (
        <form onSubmit={handleSubmit} className="task-form" role="form" aria-label="Formulário para criar tarefa">
            <div className="form-container">
                {/* Campo de Título */}
                <div className="form-group">
                    <label htmlFor="titulo-input" className="form-label">
                        Título da Tarefa *
                    </label>
                    <input
                        id="titulo-input"
                        type="text"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        placeholder="Digite o título da tarefa"
                        maxLength={100}
                        disabled={carregando}
                        className="form-input"
                        aria-required="true"
                        aria-describedby={erro ? 'form-erro' : undefined}
                    />
                    <div className="char-count" aria-live="polite">
                        {titulo.length}/100
                    </div>
                </div>

                {/* Campo de Descrição */}
                <div className="form-group">
                    <label htmlFor="descricao-input" className="form-label">
                        Descrição (opcional)
                    </label>
                    <textarea
                        id="descricao-input"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        placeholder="Descreva a tarefa aqui"
                        maxLength={500}
                        disabled={carregando}
                        className="form-input form-textarea"
                        rows={4}
                        aria-describedby={erro ? 'form-erro' : undefined}
                    />
                    <div className="char-count" aria-live="polite">
                        {descricao.length}/500
                    </div>
                </div>

                {/* Campo de Data */}
                <div className="form-group">
                    <label htmlFor="data-input" className="form-label">
                        Data Limite (opcional)
                    </label>
                    <input
                        id="data-input"
                        type="datetime-local"
                        value={dataProximo}
                        onChange={(e) => setDataProximo(e.target.value)}
                        disabled={carregando}
                        className="form-input"
                    />
                </div>

                {/* Mensagem de Erro */}
                {erro && (
                    <div id="form-erro" className="erro-mensagem" role="alert" aria-live="assertive">
                        <span className="erro-icone">⚠️</span>
                        {erro}
                    </div>
                )}

                {/* Botões */}
                <div className="form-buttons">
                    <button
                        type="submit"
                        disabled={carregando}
                        className="btn btn-primary"
                        aria-label={botaoTexto}
                    >
                        {carregando ? 'Processando...' : botaoTexto}
                    </button>
                    <button
                        type="button"
                        onClick={limpar}
                        disabled={carregando}
                        className="btn btn-secundario"
                        aria-label="Limpar formulário"
                    >
                        Limpar
                    </button>
                </div>
            </div>
        </form>
    );
}
