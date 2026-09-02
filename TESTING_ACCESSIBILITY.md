# ♿ Guia de Testes de Acessibilidade

Instruções completas para testar e validar acessibilidade do Gerenciador de Tarefas.

## 🎯 Áreas de Foco

Este guia cobre:
- ♿ Acessibilidade Geral
- 👂 Acessibilidade Auditiva (Foco em pessoas surdas)
- 👁️ Acessibilidade Visual
- ⌨️ Acessibilidade de Teclado
- 📱 Acessibilidade Mobile

## 🏁 Checklist de Acessibilidade

### ✅ Geral

- [ ] Nenhum som é reproduzido
- [ ] Interface é clara e intuitiva
- [ ] Sem piscadas (epilepsia)
- [ ] Texto legível em qualquer tamanho

### ✅ Para Pessoas Surdas/Deficientes Auditivos

- [ ] Nenhuma dependência de som
- [ ] Alertas apenas visuais
- [ ] Cores são usadas com texto/ícones
- [ ] Animações complementam (não substituem) informações

### ✅ Visual

- [ ] Contraste mínimo 4.5:1
- [ ] Tamanho mínimo de fonte: 14px
- [ ] Botões: mínimo 44x44px
- [ ] Espaçamento entre elementos adequado

### ✅ Teclado

- [ ] Tab navega todos elementos
- [ ] Focus visível em todos elementos
- [ ] Sem armadilhas de teclado
- [ ] Ordem de tabulação lógica

### ✅ Mobile

- [ ] Funciona em 320px (celulares antigos)
- [ ] Touch targets mínimo 44x44px
- [ ] Sem horizontal scroll desnecessário
- [ ] Zoom funciona corretamente

---

## 🔍 Testes Detalhados

### 1️⃣ Teste de Acessibilidade Auditiva

**Por que testar**: Pessoas surdas/deficientes auditivos precisam de alternativas visuais.

#### Teste 1a: Verificar Som
```
1. Abrir DevTools (F12)
2. Ir em Console
3. Executar: document.querySelectorAll('audio, video')
4. Certificar que retorna 0 elementos
```

**Resultado esperado**: Nenhum elemento de áudio ou vídeo.

#### Teste 1b: Alertas Visuais
```
1. Criar uma tarefa com prazo de amanhã
2. Observar a cor e ícone
3. Verificar que há pulsação visual (não som)
```

**Resultado esperado**:
- ✅ Tarefa com cor amarela
- ✅ Ícone 🟡 visível
- ✅ Animação leve pulsando
- ❌ Nenhum som

#### Teste 1c: Notificações
```
1. Criar nova tarefa
2. Completar uma tarefa
3. Deletar tarefa
4. Observar feedback
```

**Resultado esperado**:
- Mensagem visual no topo direito
- Desaparece após 3 segundos
- Sem som

### 2️⃣ Teste de Cores

**Por que testar**: Não dependa apenas de cor para informação.

#### Teste 2a: Teste de Daltonismo
```
MacOS:
1. System Preferences → Accessibility → Display
2. Enable Color Filters
3. Escolher "Deuteranopia" (mais comum)
4. Verificar clareza
```

**Resultado esperado**:
- Status ainda é claro
- Textos ainda legíveis
- Ícones diferem status por forma (não só cor)

#### Teste 2b: Sem Cor
```
1. Abrir DevTools (F12)
2. Render em grayscale:
   ```css
   body { filter: grayscale(100%); }
   ```
3. Verificar se interface funcionável
```

**Resultado esperado**:
- Dados ainda legíveis
- Status diferenciados por ícone/texto
- Botões ainda clicáveis

#### Teste 2c: Contraste
```
1. Usar extensão WAVE (Wave.webaim.org)
2. Verificar todos cores
3. Certificar 4.5:1 mínimo
```

**Resultado esperado**:
- 0 erros de contraste
- Ícone verde da extensão

### 3️⃣ Teste de Teclado

**Por que testar**: Usuários que não usam mouse apresentam essa necessidade.

#### Teste 3a: Navegação Tab
```
1. Abrir aplicação
2. Pressionar Tab repetidamente
3. Observar ordem de navegação
4. Certificar foco é visível
```

**Resultado esperado**:
- Focus ring azul ao redor de elementos
- Ordem: FormulárioTabela → Botões → Filtros
- Nenhuma surpresa no fluxo

#### Teste 3b: Ativação Enter
```
1. Tab até um botão
2. Pressionar Enter
3. Ação deve ocorrer
```

**Resultado esperado**:
- Botão "ativado"
- Ação executa (criar, deletar, etc)

#### Teste 3c: Escapar Modal
```
1. Abrir modal (clicar editar)
2. Pressionar Escape
3. Modal deve fechar
```

**Resultado esperado**:
- Modal desaparece
- Focus retorna ao elemento anterior

#### Teste 3d: Sem Mouse
```
1. Desconectar mouse (ou desabilitar trackpad)
2. Usar aplicação apenas com teclado
3. Completar fluxo completo
```

**Resultado esperado**:
- Tudo funciona sem mouse
- Sem frustração ou traps

### 4️⃣ Teste de Leitor de Tela

**Teste com VoiceOver (Mac)**:
```
1. Ativar: Cmd + F5
2. Usar VO (Ctrl) + setas
3. Ouvir descrições de elementos
```

**Teste com NVDA (Windows)**:
```
1. Fazer download: nvaccess.org
2. Instalar
3. Iniciar NVDA
4. Usar Ctrl para controlar
```

**O que verificar**:
- [ ] Todos botões tem labels
- [ ] Descrições fazem sentido
- [ ] Ordem é lógica
- [ ] Sem informação redundante

### 5️⃣ Teste de Responsividade

#### Teste 5a: Tamanhos de Tela
```
DevTools → Toggle device toolbar (Ctrl+Shift+M)

Testar em:
- 320px (iPhone SE)
- 375px (iPhone X)
- 768px (iPad)
- 1024px (Desktop)
- 1920px (Monitor)
```

**Resultado esperado**:
- Layout ajusta sem scroll horizontal
- Botões permanecem 44x44px
- Texto legível em todas resoluções

#### Teste 5b: Orientação
```
1. Em celular real (ou emulador)
2. Alternar Portrait ↔ Landscape
3. Verificar funcionalidade
```

**Resultado esperado**:
- Nada quebra
- Layout se adapta
- Dados são preservados

#### Teste 5c: Zoom
```
1. Ctrl + (aumentar várias vezes)
2. Interface deve funcionar até 200%
3. Sem scroll horizontal excessivo
```

**Resultado esperado**:
- Até 200% zoom funciona
- Texto não sobrepõe
- Botões clicáveis

### 6️⃣ Teste Touch

**Em dispositivo mobile real**:

#### Teste 6a: Touch Targets
```
1. Tentar tocar em:
   - Botão de criar
   - Checkbox de concluir
   - Botões de ação
2. Verificar se fácil tocar
```

**Resultado esperado**:
- Todos os elementos são fáceis de tocar
- Sem falha ao tocar
- Espaçamento entre botões adequado

#### Teste 6b: Gestos
```
1. Scroll vertical
2. Zoom pinch
3. Swipe (se implementado)
```

**Resultado esperado**:
- Scroll suave
- Zoom funciona naturalmente
- Sem conflitos gestos

### 7️⃣ Teste de Performance

**Por que testar**: Acessibilidade inclui performance.

```
1. DevTools → Performance
2. Registrar ação (criar tarefa)
3. Verificar FPS e tempo
```

**Resultado esperado**:
- >60 FPS durante interações
- Tempo de resposta <100ms
- Sem jank (travamentos)

---

## 🛠️ Ferramentas Recomendadas

### Extensões Chrome/Firefox

1. **WAVE** (WebAIM)
   - Detecta erros de acessibilidade
   - Mostra contraste
   - URL: wave.webaim.org

2. **axe DevTools**
   - Teste automatizado completo
   - Suggestions de correções
   - Gratuito

3. **Lighthouse** (Built-in)
   - DevTools → Lighthouse
   - Testa performance, acessibilidade, SEO
   - Relatório detalhado

4. **WebAIM Contrast Checker**
   - Verifica contraste entre cores
   - Simula tipos de daltonismo
   - URL: webaim.org/resources/contrastchecker/

### Software de Testes

- **VoiceOver** (Mac) - Built-in
- **NVDA** (Windows) - Gratuito
- **JAWS** (Windows) - Pago (trial disponível)
- **ChromeVox** (Chrome) - Extensão gratuita

---

## 📋 Relatório de Teste

### Template para Documentação no TCC

```markdown
## Teste de Acessibilidade - [Data]

### Teste Auditivo
- Nenhum som detectado: ✅
- Alertas visuais funcionam: ✅
- Notificações claras: ✅

### Teste de Cores
- Sem apenas cor: ✅
- Contraste adequado: ✅
- Daltonismo simulado: ✅

### Teste de Teclado
- Navegação Tab: ✅
- Focus visível: ✅
- Sem traps: ✅

### Teste Mobile
- Responsivo 320px: ✅
- Touch targets 44x44: ✅
- Zoom até 200%: ✅

### Resultado Final
- Status: PASSOU ✅
- Pronto para produção: SIM
```

---

## 🎓 Métricas para TCC

### O que Medir

1. **Taxa de Acessibilidade**
```
Elementos acessíveis / Total de elementos × 100%
```

2. **Score de Acessibilidade**
```
Lighthouse Accessibility Score (0-100)
```

3. **Conformidade WCAG**
```
Critérios cumpridos / Total de critérios × 100%
```

### Exemplo de Resultado

```
Teste realizado em: 15 de Dezembro de 2024
Navegador: Chrome 131.0.6778.204
Dispositivo: MacBook Air M1

Métricas:
- Elementos acessíveis: 87/87 (100%)
- Lighthouse Score: 98/100
- WCAG AA Compliance: 100%
- Contraste Mínimo: 8.6:1 (Excelente)

Conclusão: Sistema totalmente acessível para pessoas surdas/deficientes auditivos.
```

---

## 🚨 Problemas Comuns (Solução)

### Problema: Modal não fecha com Escape
**Solução**: Adicionar listener em `TaskModal.tsx`
```typescript
useEffect(() => {
  const handleEscape = (e) => {
    if (e.key === 'Escape') onClose();
  };
  document.addEventListener('keydown', handleEscape);
  return () => document.removeEventListener('keydown', handleEscape);
}, [onClose]);
```

### Problema: Contraste baixo em modo escuro
**Solução**: Aumentar diferença nas variáveis CSS
```css
[data-tema='dark'] {
  --cor-texto-principal: #ffffff; /* Ao invés de #f0f0f0 */
}
```

### Problema: Botões muito pequenos em mobile
**Solução**: Usar min-width e min-height
```css
.btn {
  min-width: 44px;
  min-height: 44px;
  padding: var(--espacamento-sm);
}
```

---

## 📚 Referências

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM](https://webaim.org/)
- [W3C Accessibility](https://www.w3.org/WAI/)
- [Deafness & Hearing Loss in Web](https://www.w3.org/TR/audio-accessibility/)

---

**Copie este guia para seu TCC e documente todos os testes realizados!**
