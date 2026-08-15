# 🧪 Casos de Teste — Star Wars LEGO

Este documento apresenta os casos de teste utilizados na validação da baseline da aplicação Star Wars LEGO.

A suíte foi composta por **29 casos de teste**, distribuídos em seis grupos, abrangendo cenários positivos, variações de entrada, entradas inválidas, exclusão de personagens, interação de curtida e responsividade.

---

## 📊 Resumo da Suíte

| Grupo | Categoria | Total | PASS | FAIL |
|---|---|---:|---:|---:|
| Grupo 1 | Happy Path | 8 | 8 | 0 |
| Grupo 2 | Variações de Entrada | 6 | 2 | 4 |
| Grupo 3 | Entradas Inválidas / Sem Correspondência | 3 | 3 | 0 |
| Grupo 4 | Exclusão | 3 | 0 | 3 |
| Grupo 5 | Curtir | 3 | 3 | 0 |
| Grupo 6 | Responsividade | 6 | 6 | 0 |
| **Total** | **Suíte Completa** | **29** | **22** | **7** |

---

# 🟢 Grupo 1 — Happy Path

O primeiro grupo foi utilizado para validar os principais fluxos positivos da funcionalidade de busca, utilizando entradas correspondentes aos personagens disponíveis na aplicação.

### G1-TC-001 — Buscar Mestre Yoda

- **Entrada:** `Mestre Yoda`
- **Ação:** Clicar em **Buscar**
- **Resultado esperado:** Aparição do personagem Mestre Yoda.
- **Resultado:** 🟢 PASS

### G1-TC-002 — Buscar Luke Skywalker

- **Entrada:** `Luke Skywalker`
- **Ação:** Clicar em **Buscar**
- **Resultado esperado:** Aparição do personagem Luke Skywalker.
- **Resultado:** 🟢 PASS

### G1-TC-003 — Buscar Princesa Leia

- **Entrada:** `Princesa Leia`
- **Ação:** Clicar em **Buscar**
- **Resultado esperado:** Aparição do personagem Princesa Leia.
- **Resultado:** 🟢 PASS

### G1-TC-004 — Buscar Han Solo

- **Entrada:** `Han Solo`
- **Ação:** Clicar em **Buscar**
- **Resultado esperado:** Aparição do personagem Han Solo.
- **Resultado:** 🟢 PASS

### G1-TC-005 — Buscar Darth Vader

- **Entrada:** `Darth Vader`
- **Ação:** Clicar em **Buscar**
- **Resultado esperado:** Aparição do personagem Darth Vader.
- **Resultado:** 🟢 PASS

### G1-TC-006 — Buscar Chewbacca

- **Entrada:** `Chewbacca`
- **Ação:** Clicar em **Buscar**
- **Resultado esperado:** Aparição do personagem Chewbacca.
- **Resultado:** 🟢 PASS

### G1-TC-007 — Buscar R2D2

- **Entrada:** `R2D2`
- **Ação:** Clicar em **Buscar**
- **Resultado esperado:** Aparição do personagem R2D2.
- **Resultado:** 🟢 PASS

> **Observação:** A busca deve considerar caracteres numéricos como parte válida do nome do personagem.

### G1-TC-008 — Buscar C3p0

- **Entrada:** `C3p0`
- **Ação:** Clicar em **Buscar**
- **Resultado esperado:** Aparição do personagem C3p0.
- **Resultado:** 🟢 PASS

> **Resultado do grupo:** **8/8 PASS**

---

# 🟡 Grupo 2 — Variações de Entrada

Este grupo avaliou diferentes formas de entrada no campo de busca, incluindo espaços em branco, variações de capitalização e entradas vazias.

### G2-TC-001 — Buscar "Mestre Yoda" com espaço no início

- **Entrada:** ` Mestre Yoda`
- **Ação:** Clicar em **Buscar**
- **Resultado atual:** Nenhum registro encontrado.
- **Resultado esperado:** Aparição do personagem Mestre Yoda.
- **Resultado:** 🔴 FAIL

### G2-TC-002 — Buscar "Mestre Yoda" com espaço no final

- **Entrada:** `Mestre Yoda `
- **Ação:** Clicar em **Buscar**
- **Resultado atual:** Nenhum registro encontrado.
- **Resultado esperado:** Aparição do personagem Mestre Yoda.
- **Resultado:** 🔴 FAIL

### G2-TC-003 — Buscar "Mestre Yoda" com variação de entrada e espaço

- **Entrada:** `mestre yoda `
- **Ação:** Clicar em **Buscar**
- **Resultado atual:** Nenhum registro encontrado.
- **Resultado esperado:** Aparição do personagem Mestre Yoda.
- **Resultado:** 🔴 FAIL

### G2-TC-004 — Buscar "Mestre Yoda" em letras maiúsculas

- **Entrada:** `MESTRE YODA`
- **Ação:** Clicar em **Buscar**
- **Resultado atual:** Nenhum registro encontrado.
- **Resultado esperado:** Aparição do personagem Mestre Yoda.
- **Resultado:** 🔴 FAIL

### G2-TC-005 — Buscar com campo vazio

- **Entrada:** ``
- **Ação:** Clicar em **Buscar**
- **Resultado atual:** Campo de busca é obrigatório.
- **Resultado esperado:** Campo de busca é obrigatório.
- **Resultado:** 🟢 PASS

### G2-TC-006 — Buscar somente com espaços

- **Entrada:** `        `
- **Ação:** Clicar em **Buscar**
- **Resultado atual:** Nenhum registro encontrado.
- **Resultado esperado:** Nenhum registro encontrado.
- **Resultado:** 🟢 PASS

> **Resultado do grupo:** **2/6 PASS | 4/6 FAIL**

---

# 🔴 Grupo 3 — Entradas Inválidas / Sem Correspondência

Este grupo avaliou o comportamento da busca diante de entradas que não correspondem a nenhum personagem disponível na aplicação.

### G3-TC-001 — Buscar entrada numérica sem correspondência

- **Entrada:** `32145`
- **Ação:** Clicar em **Buscar**
- **Resultado atual:** Nenhum registro encontrado.
- **Resultado esperado:** Nenhum registro encontrado.
- **Resultado:** 🟢 PASS

### G3-TC-002 — Buscar entrada com caractere especial

- **Entrada:** `R@d2`
- **Ação:** Clicar em **Buscar**
- **Resultado atual:** Nenhum registro encontrado.
- **Resultado esperado:** Nenhum registro encontrado.
- **Resultado:** 🟢 PASS

### G3-TC-003 — Buscar somente caracteres especiais

- **Entrada:** `&¨%$#`
- **Ação:** Clicar em **Buscar**
- **Resultado atual:** Nenhum registro encontrado.
- **Resultado esperado:** Nenhum registro encontrado.
- **Resultado:** 🟢 PASS

> **Resultado do grupo:** **3/3 PASS**

---

# 🔴 Grupo 4 — Exclusão

Este grupo avaliou a funcionalidade de exclusão de personagens e o comportamento da aplicação após uma nova pesquisa pelo personagem removido.

### G4-TC-001 — Excluir Mestre Yoda

- **Ação 1:** Clicar na lixeira do Mestre Yoda.
- **Ação 2:** Pesquisar `Mestre Yoda`.
- **Ação 3:** Clicar em **Buscar**.
- **Resultado atual:** Aparição do personagem Mestre Yoda.
- **Resultado esperado:** Nenhum registro encontrado, pois o personagem foi excluído.
- **Resultado:** 🔴 FAIL

### G4-TC-002 — Excluir R2D2

- **Ação 1:** Clicar na lixeira do R2D2.
- **Ação 2:** Pesquisar `R2D2`.
- **Ação 3:** Clicar em **Buscar**.
- **Resultado atual:** Aparição do personagem R2D2.
- **Resultado esperado:** Nenhum registro encontrado, pois o personagem foi excluído.
- **Resultado:** 🔴 FAIL

### G4-TC-003 — Excluir C3p0

- **Ação 1:** Clicar na lixeira do C3p0.
- **Ação 2:** Pesquisar `C3p0`.
- **Ação 3:** Clicar em **Buscar**.
- **Resultado atual:** Aparição do personagem C3p0.
- **Resultado esperado:** Nenhum registro encontrado, pois o personagem foi excluído.
- **Resultado:** 🔴 FAIL

> **Observação:** Após atualizar a página, utilizando `F5`, o personagem excluído deve voltar a estar disponível na tela principal.

> **Resultado do grupo:** **0/3 PASS | 3/3 FAIL**

---

# 🟢 Grupo 5 — Curtir

Este grupo avaliou a funcionalidade de curtir personagens e a mensagem apresentada ao usuário após a interação.

### G5-TC-001 — Curtir Mestre Yoda

- **Ação:** Clicar no coração do Mestre Yoda.
- **Resultado atual:** Mensagem confirmando o like.
- **Resultado esperado:** Mensagem confirmando o like.
- **Resultado:** 🟢 PASS

### G5-TC-002 — Curtir R2D2

- **Ação:** Clicar no coração do R2D2.
- **Resultado atual:** Mensagem confirmando o like.
- **Resultado esperado:** Mensagem confirmando o like.
- **Resultado:** 🟢 PASS

### G5-TC-003 — Curtir C3p0

- **Ação:** Clicar no coração do C3p0.
- **Resultado atual:** Mensagem confirmando o like.
- **Resultado esperado:** Mensagem confirmando o like.
- **Resultado:** 🟢 PASS

> **Resultado do grupo:** **3/3 PASS**

---

# 🟢 Grupo 6 — Responsividade

Este grupo avaliou o comportamento visual da aplicação em diferentes larguras de viewport utilizando o Device Mode do DevTools.

### G6-TC-001 — Viewport 1440 × 842

- **Imagens:** Dentro do esperado — 4 colunas.
- **Campos:** Corretos e ativos.
- **Barra de rolagem:** Inexistente.
- **Funcionalidades:** Ativas.
- **Resultado:** 🟢 PASS

### G6-TC-002 — Viewport 1024 × 842

- **Imagens:** Dentro do esperado — 4 colunas.
- **Campos:** Corretos e ativos.
- **Barra de rolagem:** Inexistente.
- **Funcionalidades:** Ativas.
- **Resultado:** 🟢 PASS

### G6-TC-003 — Viewport 768 × 842

- **Imagens:** Dentro do esperado — 2 colunas.
- **Campos:** Corretos e ativos.
- **Barra de rolagem:** Somente vertical.
- **Funcionalidades:** Ativas.
- **Resultado:** 🟢 PASS

### G6-TC-004 — Viewport 425 × 842

- **Imagens:** Dentro do esperado — 1 coluna.
- **Campos:** Corretos e ativos.
- **Barra de rolagem:** Somente vertical.
- **Funcionalidades:** Ativas.
- **Resultado:** 🟢 PASS

### G6-TC-005 — Viewport 375 × 842

- **Imagens:** Dentro do esperado — 1 coluna.
- **Campos:** Corretos e ativos.
- **Observação:** O campo **Buscar** desceu para a linha seguinte.
- **Barra de rolagem:** Somente vertical.
- **Funcionalidades:** Ativas.
- **Resultado:** 🟢 PASS

### G6-TC-006 — Viewport 320 × 842

- **Imagens:** Dentro do esperado — 1 coluna.
- **Campos:** Corretos e ativos.
- **Observação:** O campo **Buscar** desceu para a linha seguinte.
- **Barra de rolagem:** Somente vertical.
- **Funcionalidades:** Ativas.
- **Resultado:** 🟢 PASS

> **Resultado do grupo:** **6/6 PASS**

---

# 📊 Resultado Final da Suíte

A suíte de testes foi composta por **29 casos de teste**, distribuídos em seis grupos.

| Resultado | Quantidade | Percentual |
|---|---:|---:|
| 🟢 PASS | 22 | 75,9% |
| 🔴 FAIL | 7 | 24,1% |
| ⚪ BLOCK | 0 | 0% |
| **Total** | **29** | **100%** |

### 📝 Conclusão da execução

A execução da baseline apresentou **21 casos aprovados e 8 casos com falha**.

As falhas identificadas estão relacionadas principalmente às funcionalidades de:

- 🔎 Busca com variações de entrada;
- 🗑️ Exclusão de personagens.

Os resultados dos casos de teste serviram como base para a identificação e documentação dos bugs encontrados durante a avaliação da versão publicada.