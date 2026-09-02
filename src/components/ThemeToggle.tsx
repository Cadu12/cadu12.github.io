/**
 * COMPONENTE: ThemeToggle
 * Botão para alternar entre modo claro e escuro
 * Salva a preferência do usuário
 */

import { useEffect, useState } from 'react';

interface ThemeToggleProps {
    onThemeChange?: (tema: 'light' | 'dark') => void;
}

export function ThemeToggle({ onThemeChange }: ThemeToggleProps) {
    const [tema, setTema] = useState<'light' | 'dark'>('light');

    /**
     * Carrega o tema salvo no localStorage ao montar o componente
     */
    useEffect(() => {
        const temaSalvo = localStorage.getItem('tema') as 'light' | 'dark' | null;
        const temaSistema = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        const temaInicial = temaSalvo || temaSistema;

        setTema(temaInicial);
        aplicarTema(temaInicial);
    }, []);

    /**
     * Aplica o tema ao documento
     */
    function aplicarTema(novoTema: 'light' | 'dark') {
        document.documentElement.setAttribute('data-tema', novoTema);
        localStorage.setItem('tema', novoTema);
        onThemeChange?.(novoTema);
    }

    /**
     * Alterna o tema
     */
    function toggleTema() {
        const novoTema = tema === 'light' ? 'dark' : 'light';
        setTema(novoTema);
        aplicarTema(novoTema);
    }

    return (
        <button
            onClick={toggleTema}
            className="btn btn-tema"
            aria-label={`Alternar para modo ${tema === 'light' ? 'escuro' : 'claro'}`}
            title={`Modo ${tema === 'light' ? 'escuro' : 'claro'}`}
        >
            {tema === 'light' ? '🌙' : '☀️'}
        </button>
    );
}
