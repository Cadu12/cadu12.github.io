/**
 * HOOK CUSTOMIZADO: useTaskManager
 * Gerencia todas as operações de tarefas
 * Salva e recupera dados do LocalStorage
 */

import { useState, useEffect } from 'react';
import { Tarefa, TarefaStatus } from '../types';

const STORAGE_KEY = 'tarefas_app';

export function useTaskManager() {
  // Estado para armazenar todas as tarefas
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  
  // Estado para controlar se os dados foram carregados do LocalStorage
  const [carregado, setCarregado] = useState(false);

  /**
   * Carrega as tarefas do LocalStorage quando o componente monta
   */
  useEffect(() => {
    const tarefasArmazenadas = localStorage.getItem(STORAGE_KEY);
    if (tarefasArmazenadas) {
      try {
        const tarefasParsed = JSON.parse(tarefasArmazenadas);
        setTarefas(tarefasParsed);
      } catch (erro) {
        console.error('Erro ao carregar tarefas:', erro);
      }
    }
    setCarregado(true);
  }, []);

  /**
   * Salva as tarefas no LocalStorage sempre que elas mudam
   */
  useEffect(() => {
    if (carregado) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tarefas));
    }
  }, [tarefas, carregado]);

  /**
   * Calcula o status de urgência de uma tarefa baseado na data limite
   * @param dataProximo - Data limite da tarefa
   * @param concluida - Se a tarefa foi concluída
   * @returns Status de urgência da tarefa
   */
  function calcularStatus(dataProximo?: string, concluida?: boolean): TarefaStatus {
    if (concluida) return TarefaStatus.CONCLUIDA;
    
    if (!dataProximo) return TarefaStatus.NORMAL;

    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    
    const data = new Date(dataProximo);
    data.setHours(0, 0, 0, 0);
    
    const diasRestantes = Math.floor((data.getTime() - hoje.getTime()) / (1000 * 60 * 60 * 24));

    // Urgente: menos de 1 dia (hoje ou amanhã)
    if (diasRestantes <= 1 && diasRestantes >= 0) {
      return TarefaStatus.URGENTE;
    }
    
    // Próximo: entre 2 a 7 dias
    if (diasRestantes <= 7) {
      return TarefaStatus.PROXIMA;
    }

    // Atrasado: passou da data limite
    if (diasRestantes < 0) {
      return TarefaStatus.URGENTE;
    }

    // Normal: data distante
    return TarefaStatus.NORMAL;
  }

  /**
   * Cria uma nova tarefa
   * @param titulo - Título da tarefa
   * @param descricao - Descrição da tarefa
   * @param dataProximo - Data limite opcional
   */
  function adicionarTarefa(titulo: string, descricao: string, dataProximo?: string) {
    if (!titulo.trim()) return;

    const novaTarefa: Tarefa = {
      id: Date.now().toString(),
      titulo: titulo.trim(),
      descricao: descricao.trim(),
      dataProximo,
      concluida: false,
      dataCriacao: new Date().toISOString(),
      status: calcularStatus(dataProximo, false),
    };

    setTarefas([novaTarefa, ...tarefas]);
  }

  /**
   * Atualiza uma tarefa existente
   * @param id - ID da tarefa
   * @param atualizacoes - Campos a serem atualizados
   */
  function atualizarTarefa(
    id: string,
    atualizacoes: Partial<Omit<Tarefa, 'id' | 'dataCriacao'>>
  ) {
    setTarefas(
      tarefas.map((tarefa) => {
        if (tarefa.id === id) {
          const tarefaAtualizada = { ...tarefa, ...atualizacoes };
          // Recalcula o status sempre que a tarefa é atualizada
          tarefaAtualizada.status = calcularStatus(
            tarefaAtualizada.dataProximo,
            tarefaAtualizada.concluida
          );
          return tarefaAtualizada;
        }
        return tarefa;
      })
    );
  }

  /**
   * Marca uma tarefa como concluída ou não concluída
   * @param id - ID da tarefa
   */
  function alternarConclusao(id: string) {
    setTarefas(
      tarefas.map((tarefa) => {
        if (tarefa.id === id) {
          const novoEstado = !tarefa.concluida;
          return {
            ...tarefa,
            concluida: novoEstado,
            status: calcularStatus(tarefa.dataProximo, novoEstado),
          };
        }
        return tarefa;
      })
    );
  }

  /**
   * Deleta uma tarefa
   * @param id - ID da tarefa
   */
  function deletarTarefa(id: string) {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  }

  /**
   * Deleta todas as tarefas concluídas
   */
  function limparConcluidas() {
    setTarefas(tarefas.filter((tarefa) => !tarefa.concluida));
  }

  return {
    tarefas,
    carregado,
    adicionarTarefa,
    atualizarTarefa,
    alternarConclusao,
    deletarTarefa,
    limparConcluidas,
  };
}
