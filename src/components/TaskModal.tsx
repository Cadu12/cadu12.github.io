/**
 * COMPONENTE: TaskModal
 * Modal para editar uma tarefa existente
 * Apresenta um formulário com os dados da tarefa
 */

import { useState } from 'react';
import { Tarefa } from '../types';

interface TaskModalProps {
    tarefa: Tarefa | null;
    onClose: () => void;
    onSave: (id: string, titulo: string, descricao: string, dataProximo?: string) => void;
}

export function TaskModal({ tarefa, onClose, onSave }: TaskModalProps) {
    const [titulo, setTitulo] = useState(tarefa?.titulo || '');
    const [descricao, setDescricao] = useState(tarefa?.descricao || '');
    const [dataProximo, setDataProximo] = useState(tarefa?.dataProximo || '');
    const [erro, setErro] = useState('');

    /**
     * Valida o formulário
     */
    function validar(): boolean {
        if (!titulo.trim()) {
            setErro('O título da tarefa é obrigatório');
            return false;
        }
        setErro('');
        return true;
    }

    /**
     * Salva as mudanças na tarefa
     */
    function handleSave(e: React.FormEvent) {
        e.preventDefault();

        if (!validar() || !tarefa) return;

        onSave(tarefa.id, titulo, descricao, dataProximo || undefined);
        onClose();
    }

    if (!tarefa) return null;

    return (
        <div className="modal-overlay" onClick={onClose} aria-hidden="true">
            {/* Modal dentro do overlay */}
            <div 
                className="modal" 
                role="dialog" 
                aria-labelledby="modal-titulo" 
                aria-modal="true"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="modal-container">
                    <div className="modal-header">
                        <h2 id="modal-titulo" className="modal-titulo">
                            ✏️ Editar Tarefa
                        </h2>
                        <button
                            onClick={onClose}
                            className="modal-close"
                            aria-label="Fechar modal"
                            title="Fechar"
                        >
                            ✕
                        </button>
                    </div>

                    <form onSubmit={handleSave} className="modal-form">
                        {/* Título */}
                        <div className="form-group">
                            <label htmlFor="edit-titulo" className="form-label">
                                Título *
                            </label>
                            <input
                                id="edit-titulo"
                                type="text"
                                value={titulo}
                                onChange={(e) => setTitulo(e.target.value)}
                                maxLength={100}
                                className="form-input"
                                aria-required="true"
                            />
                            <div className="char-count">{titulo.length}/100</div>
                        </div>

                        {/* Descrição */}
                        <div className="form-group">
                            <label htmlFor="edit-descricao" className="form-label">
                                Descrição
                            </label>
                            <textarea
                                id="edit-descricao"
                                value={descricao}
                                onChange={(e) => setDescricao(e.target.value)}
                                maxLength={500}
                                className="form-input form-textarea"
                                rows={4}
                            />
                            <div className="char-count">{descricao.length}/500</div>
                        </div>

                        {/* Data */}
                        <div className="form-group">
                            <label htmlFor="edit-data" className="form-label">
                                Data Limite
                            </label>
                            <input
                                id="edit-data"
                                type="datetime-local"
                                value={dataProximo}
                                onChange={(e) => setDataProximo(e.target.value)}
                                className="form-input"
                            />
                        </div>

                        {/* Erro */}
                        {erro && (
                            <div className="erro-mensagem" role="alert">
                                <span className="erro-icone">⚠️</span>
                                {erro}
                            </div>
                        )}

                        {/* Botões */}
                        <div className="modal-buttons">
                            <button type="submit" className="btn btn-primary">
                                💾 Salvar Alterações
                            </button>
                            <button
                                type="button"
                                onClick={onClose}
                                className="btn btn-secundario"
                            >
                                ❌ Cancelar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
