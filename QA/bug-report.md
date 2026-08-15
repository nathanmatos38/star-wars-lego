# 🐛 Bug Reports — Star Wars LEGO

Este documento apresenta os bugs identificados durante a execução da baseline da aplicação Star Wars LEGO.

Os defeitos foram registrados a partir da exploração inicial e dos casos de teste executados, sendo acompanhados por suas respectivas evidências.

---

## 🐛 BUG-001 — Imagem do personagem Chewbacca não é carregada na listagem

### 📌 Título

**Imagem do personagem Chewbacca não é carregada na listagem.**

### 🔹 Pré-condição

Página em seu estado original.

### 🔄 Passos para reproduzir

1. Entrar na aplicação.
2. Observar a listagem de personagens.

### ❌ Resultado atual

Ao abrir a aplicação, a imagem visual do personagem Chewbacca não é carregada.

### ✅ Resultado esperado

A imagem do personagem deve ser carregada normalmente junto às suas funcionalidades.

### 📸 Evidência

A evidência demonstra que o personagem apresenta seu nome e as funcionalidades de curtir e excluir, porém sua imagem não é exibida.

![BUG-001 — Chewbacca](evidencias/BUG-001-chewbacca.png.png)

### ⚠️ Severidade

**Média**

O problema é facilmente perceptível visualmente e pode prejudicar a identificação do personagem, principalmente para usuários que não conhecem o universo de Star Wars.

---

## 🐛 BUG-002 — Campo de busca sensível a maiúsculas e minúsculas

### 📌 Título

**Campo de busca é sensível a maiúsculas e minúsculas.**

### 🔹 Pré-condição

Página em seu estado principal.

### 🔄 Passos para reproduzir

1. Abrir a aplicação.
2. Digitar `mestre yoda` ou `MESTRE YODA` no campo de busca.
3. Clicar em **Buscar**.

### ❌ Resultado atual

O sistema exibe a mensagem:

> "Nenhum registro encontrado."

### ✅ Resultado esperado

O sistema deve retornar o personagem Mestre Yoda independentemente da utilização de letras maiúsculas ou minúsculas na busca.

### 📸 Evidência

A evidência demonstra a mensagem apresentada pelo sistema após a realização da busca utilizando uma variação de capitalização diferente do nome cadastrado.

![BUG-002 — Busca case-sensitive](evidencias/BUG-002-busca-case-sensitive.png.png)

### ⚠️ Severidade

**Alta**

O problema impede que uma busca válida seja concluída quando o usuário utiliza uma capitalização diferente da esperada pelo sistema.

---

## 🐛 BUG-003 — Personagem excluído reaparece após nova pesquisa

### 📌 Título

**Personagem excluído reaparece após ser pesquisado durante a mesma sessão.**

### 🔹 Pré-condição

Página em seu estado original.

### 🔄 Passos para reproduzir

1. Entrar na aplicação.
2. Excluir um personagem utilizando o ícone de lixeira.
3. Pesquisar pelo personagem excluído.
4. Clicar em **Buscar**.

### ❌ Resultado atual

Mesmo após a exclusão do personagem, uma nova pesquisa pelo personagem faz com que ele apareça novamente nos resultados.

### ✅ Resultado esperado

O personagem excluído não deve ser retornado nos resultados da pesquisa durante a sessão atual.

### 📸 Evidências

As evidências demonstram o fluxo completo da exclusão do Mestre Yoda, desde o estado inicial da página até a realização de uma nova pesquisa pelo personagem excluído.

Também foram realizadas verificações adicionais com os personagens R2D2 e C3p0 após suas respectivas exclusões.

#### Mestre Yoda

![BUG-003 — Mestre Yoda — Estado inicial](evidencias/BUG-003-exclusao-yoda-p1.png.png)

![BUG-003 — Mestre Yoda — Após exclusão](evidencias/BUG-003-exclusao-yoda-p2.png.png)

![BUG-003 — Mestre Yoda — Após nova pesquisa](evidencias/BUG-003-exclusao-yoda-p3.png.png)

#### R2D2

![BUG-003 — R2D2](evidencias/BUG-003-exclusao-r2d2.png.png)

#### C3p0

![BUG-003 — C3p0](evidencias/BUG-003-exclusao-c3p0.png.png)

### ⚠️ Severidade

**Alta**

A funcionalidade de exclusão apresenta comportamento inconsistente para personagens excluídos durante a sessão atual.

---

## 🐛 BUG-004 — Busca não ignora espaços no início e no final da entrada

### 📌 Título

**Busca não ignora espaços em branco no início e no final da entrada.**

### 🔹 Pré-condição

Página em seu estado original.

### 🔄 Passos para reproduzir

1. Entrar na aplicação.
2. Clicar no campo de busca.
3. Pesquisar ` Mestre Yoda` ou `Mestre Yoda `.
4. Clicar em **Buscar**.

### ❌ Resultado atual

O sistema exibe a mensagem:

> "Nenhum registro encontrado."

### ✅ Resultado esperado

O sistema deve desconsiderar espaços em branco no início e no final da entrada e retornar o personagem correspondente.

### 📸 Evidência

A evidência demonstra que, ao realizar a busca com espaço em branco no início da entrada, o sistema retorna "Nenhum registro encontrado", embora exista um personagem correspondente.

![BUG-004 — Busca com espaços](evidencias/BUG-004-espacos.png.png)

### ⚠️ Severidade

**Média**

O problema possui impacto limitado e pode ser contornado pelo usuário ao remover manualmente os espaços antes de realizar a busca.

---

# 📊 Resumo dos Bugs

| ID | Descrição | Severidade |
|---|---|---|
| BUG-001 | Imagem do Chewbacca não é carregada | 🟡 Média |
| BUG-002 | Busca sensível a maiúsculas e minúsculas | 🔴 Alta |
| BUG-003 | Personagem excluído reaparece após pesquisa | 🔴 Alta |
| BUG-004 | Busca não ignora espaços no início e no final | 🟡 Média |

---

## 📌 Observação

Os bugs acima representam os principais comportamentos inconsistentes identificados durante a avaliação da baseline antes da implementação das correções.

As evidências associadas aos bugs estão armazenadas na pasta [`evidencias`](evidencias/).