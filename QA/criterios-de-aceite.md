# 📋 Critérios de Aceite — Star Wars LEGO

Os critérios de aceite abaixo definem os comportamentos esperados para as principais funcionalidades avaliadas durante a análise da aplicação.

---

## 🔎 1. Busca de Personagens

### CA-001 — Busca independente de maiúsculas e minúsculas

A busca deve retornar o personagem correspondente independentemente da utilização de letras maiúsculas ou minúsculas na entrada.

**Exemplos válidos:**

- `Mestre Yoda`
- `mestre yoda`
- `MESTRE YODA`

---

### CA-002 — Reconhecimento de caracteres numéricos

A busca deve reconhecer caracteres numéricos como parte válida do nome dos personagens.

**Exemplos:**

- `R2D2`
- `C3p0`

---

### CA-003 — Tratamento de caracteres especiais

A busca deve tratar caracteres especiais como parte literal da entrada, sem gerar comportamento inesperado.

Quando não houver personagem correspondente à entrada informada, o sistema deve apresentar a mensagem:

> "Nenhum registro encontrado."

---

### CA-004 — Desconsideração de espaços em branco

A busca deve desconsiderar espaços em branco no início e no final da entrada.

**Exemplos:**

- ` Mestre Yoda`
- `Mestre Yoda `
- ` mestre yoda `

A presença desses espaços não deve impedir que o personagem correspondente seja localizado.

---

## 🗑️ 2. Exclusão de Personagens

### CA-005 — Exclusão durante a sessão

Quando o usuário excluir um personagem, o personagem deve desaparecer visualmente da listagem.

Após a exclusão, mesmo que mais de um personagem seja removido, uma nova pesquisa pelo personagem excluído não deve retornar o registro durante a sessão atual.

---

### CA-006 — Restauração após atualização ou reabertura

Após atualizar a página utilizando `F5`, fechar a aplicação ou reabrir a página, todos os personagens devem estar novamente disponíveis, incluindo aqueles que haviam sido excluídos anteriormente.

---

## 📌 Resumo dos Critérios

| ID | Critério | Funcionalidade |
|---|---|---|
| CA-001 | Busca independente de maiúsculas e minúsculas | 🔎 Busca |
| CA-002 | Reconhecimento de caracteres numéricos | 🔎 Busca |
| CA-003 | Tratamento de caracteres especiais | 🔎 Busca |
| CA-004 | Desconsideração de espaços em branco | 🔎 Busca |
| CA-005 | Exclusão persistente durante a sessão | 🗑️ Exclusão |
| CA-006 | Restauração após atualização ou reabertura | 🗑️ Exclusão |

---