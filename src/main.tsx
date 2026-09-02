/**
 * ARQUIVO PRINCIPAL
 * Ponto de entrada da aplicação React
 * Renderiza o componente App no elemento root do HTML
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Obter o elemento root do HTML
const rootElement = document.getElementById('root');

if (!rootElement) {
    throw new Error('Elemento root não encontrado no HTML');
}

// Renderizar a aplicação
ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
