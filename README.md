# ⭐ Star Wars LEGO

Aplicação web desenvolvida com **HTML, CSS, JavaScript e Vue.js**, contendo uma lista de personagens do universo Star Wars com funcionalidades de busca, exclusão e interação.

O desenvolvimento da aplicação foi realizado **junto com o professor durante um curso de JavaScript na plataforma Udemy**.

Posteriormente, o projeto foi utilizado como base para a aplicação prática de conhecimentos de **Quality Assurance (QA)**, realizando de forma independente todo o processo de análise, planejamento, execução e documentação dos testes.

---

## 🚀 Acesse o projeto

🔗 **[Star Wars LEGO — GitHub Pages](https://nathanmatos38.github.io/star-wars-lego/)**

---

## 📌 Sobre o projeto

O projeto apresenta uma interface inspirada no universo Star Wars, permitindo ao usuário visualizar personagens e interagir com eles por meio das funcionalidades disponíveis.

A aplicação foi desenvolvida durante um curso de JavaScript na Udemy, acompanhando as aulas e implementando o projeto junto com o professor.

Após a conclusão do desenvolvimento, o projeto foi utilizado para colocar em prática conhecimentos de **Quality Assurance e testes de software**.

A aplicação publicada foi inicialmente analisada antes de qualquer correção, estabelecendo uma **baseline de qualidade**.

A partir dessa baseline, foram elaborados e executados **29 casos de teste**, abrangendo diferentes cenários funcionais e de responsividade.

Durante a análise foram identificados **4 bugs na baseline**. Após as correções, uma regressão foi identificada durante o reteste de um dos bugs, sendo posteriormente corrigida e validada.

---

## ✨ Funcionalidades

* 🔎 Busca de personagens por nome
* 🔤 Busca independente de letras maiúsculas e minúsculas
* 🔢 Busca de personagens com caracteres numéricos
* ␠ Tratamento de espaços no início e no final da busca
* 🗑️ Exclusão de personagens
* ❤️ Interação de like com personagens
* 🔄 Restauração dos personagens após atualização da página
* 📱 Layout responsivo para diferentes tamanhos de tela
* ⚠️ Tratamento de buscas sem correspondência
* ⚠️ Validação de campo de busca obrigatório

---

## 🧪 Processo de QA

Após a conclusão do desenvolvimento, foi realizado um processo independente de **Quality Assurance**, utilizando a aplicação publicada como objeto de teste.

O processo foi estruturado nas seguintes etapas:

### 1. Testes exploratórios

Inicialmente, a aplicação publicada foi explorada para compreender suas funcionalidades e identificar comportamentos inesperados.

### 2. Definição das regras funcionais

Foram identificadas e documentadas regras funcionais relacionadas principalmente a:

* Busca de personagens
* Variações de entrada
* Exclusão
* Curtir personagens
* Responsividade
* Tratamento de entradas inválidas

### 3. Elaboração dos casos de teste

Foram criados **29 casos de teste**, distribuídos em seis grupos:

| Grupo     | Cenário                                  | Testes |
| --------- | ---------------------------------------- | -----: |
| G1        | Happy Path                               |      8 |
| G2        | Variações de Entrada                     |      6 |
| G3        | Entradas Inválidas / Sem Correspondência |      3 |
| G4        | Exclusão                                 |      3 |
| G5        | Curtir                                   |      3 |
| G6        | Responsividade                           |      6 |
| **Total** |                                          | **29** |

### 4. Execução da baseline

Antes das correções, os 29 casos de teste foram executados na versão publicada.

**Resultado da baseline:**

| Resultado | Quantidade |
| --------- | ---------: |
| ✅ PASS    |         22 |
| ❌ FAIL    |          7 |
| ⚪ BLOCK   |          0 |
| **Total** |     **29** |

A taxa de aprovação da baseline foi de aproximadamente **75,9%**.

---

## 🐛 Bugs identificados

Durante a análise da baseline foram identificados quatro bugs:

### BUG-001 — Imagem do Chewbacca

A imagem do Chewbacca não era carregada corretamente na versão publicada devido à diferença entre letras maiúsculas e minúsculas na referência do arquivo.

**Status:** ✅ Corrigido

### BUG-002 — Busca case-sensitive

A busca diferenciava letras maiúsculas e minúsculas, impedindo resultados quando a capitalização da entrada era diferente do nome armazenado.

**Status:** ✅ Corrigido

### BUG-003 — Exclusão do personagem

Após excluir um personagem, uma nova pesquisa poderia fazer com que o personagem excluído voltasse a aparecer durante a mesma sessão.

**Status:** ✅ Corrigido

### BUG-004 — Espaços no início/final

A busca não desconsiderava espaços em branco inseridos no início ou no final da entrada.

**Status:** ✅ Corrigido

---

## 🔄 Regressão identificada durante a correção

Durante o reteste do **BUG-003**, foi identificada uma nova falha relacionada à realização de pesquisas consecutivas.

### BUG-005 — Pesquisa consecutiva

Após uma primeira pesquisa, o resultado da busca substituía a lista utilizada como fonte para pesquisas posteriores. Dessa forma, uma segunda pesquisa poderia não encontrar personagens que não haviam sido excluídos.

A solução foi separar o estado dos personagens disponíveis do estado utilizado para exibição dos resultados, utilizando a propriedade:

```javascript
availableCharacters
```

A busca passou a consultar os personagens disponíveis, enquanto `characters` permanece responsável pela exibição dos resultados.

**Status:** ✅ Corrigido e retestado

---

## 🔧 Correções e validação

Após a implementação das correções, os bugs foram retestados individualmente.

Também foi executada novamente a **mesma suíte de 29 casos de teste utilizada na baseline**, permitindo uma comparação direta entre a versão inicial e a versão corrigida.

### 📊 Resultado final

| Resultado | Baseline | Versão final |
| --------- | -------: | -----------: |
| ✅ PASS    |       22 |       **29** |
| ❌ FAIL    |        7 |        **0** |
| ⚪ BLOCK   |        0 |        **0** |
| **Total** |   **29** |       **29** |

### 🎯 Resultado da versão final

**29/29 testes aprovados — 100% PASS**

* ✅ 29 testes executados
* ✅ 29 PASS
* ✅ 0 FAIL
* ✅ 0 BLOCK
* ✅ Todos os 7 casos que falharam na baseline foram aprovados após as correções
* ✅ BUG-001 corrigido
* ✅ BUG-002 corrigido
* ✅ BUG-003 corrigido
* ✅ BUG-004 corrigido
* ✅ BUG-005 identificado, corrigido e retestado
* ✅ Versão publicada validada após as alterações
* ✅ Funcionalidades existentes preservadas

---

## 📈 Evolução da qualidade

```text
BASELINE
22 PASS | 7 FAIL | 0 BLOCK
        ↓
     Correções
        ↓
      Retestes
        ↓
 Regressão encontrada
        ↓
Correção da regressão
        ↓
   Suíte final
        ↓
VERSÃO FINAL
29 PASS | 0 FAIL | 0 BLOCK
```

**Evolução da taxa de aprovação:**

75,9% → 100%

---

## 🛠️ Tecnologias utilizadas

### Desenvolvimento

* HTML5
* CSS3
* JavaScript
* Vue.js

### Ferramentas

* Git
* GitHub
* GitHub Pages
* Chrome DevTools

### QA / Testes

* Testes exploratórios
* Testes funcionais
* Happy Path
* Variações de entrada
* Testes negativos
* Testes de exclusão
* Testes de responsividade
* Retestes
* Testes de regressão
* Bug Reporting
* Análise de causa
* Validação pós-correção

---

## 📱 Responsividade

A aplicação foi validada em diferentes tamanhos de viewport utilizando o Chrome DevTools / Device Mode.

Viewports utilizadas durante a validação:

| Dispositivo | Resolução  |
| :---------- | :--------- |
| Desktop     | 1440 × 842 |
| Desktop     | 1024 × 842 |
| Tablet      | 768 × 842  |
| Mobile      | 425 × 842  |
| Mobile      | 375 × 842  |
| Mobile      | 320 × 842  |

---

## 📂 Estrutura do projeto

```text
star-wars-lego/
│
├── css/
│   └── style.css
│
├── images/
│   ├── yoda.png
│   ├── luke.png
│   ├── leia.png
│   ├── hansolo.png
│   ├── vader.png
│   ├── chewbacca.png
│   ├── r2d2.png
│   └── c3po.png
│
├── js/
│   ├── app.js
│   └── vue.js
│
├── QA/
│   ├── evidencias/
│   └── QA.md
│
├── index.html
└── README.md
```

---

## 📚 Documentação de QA

A documentação completa do processo de Quality Assurance está disponível em:

📄 **[QA.md](QA/QA.md)**

O documento contém:

* Objetivo
* Escopo
* Ambiente de testes
* Regras funcionais
* Estratégia de testes
* Execução da baseline
* Casos de teste
* Bugs encontrados
* Evidências
* Correções
* Retestes
* Regressões
* Resultado final
* Conclusão

---

## 🎯 Objetivo do projeto

Além da implementação da aplicação, este projeto teve como objetivo aplicar na prática conceitos de Quality Assurance e testes de software sobre uma aplicação real desenvolvida durante um curso.

O projeto permitiu praticar:

* Análise de requisitos
* Identificação de regras funcionais
* Planejamento de testes
* Criação de casos de teste
* Execução de testes
* Identificação e documentação de bugs
* Análise de causa
* Validação de correções
* Testes de regressão
* Documentação de resultados
* Validação de uma aplicação publicada

---

## 🧠 Principais aprendizados

O projeto permitiu praticar diferentes etapas do ciclo de qualidade de software, especialmente a importância de validar não apenas se um defeito foi corrigido, mas também se a alteração realizada não introduziu novos problemas.

Um dos principais aprendizados ocorreu durante a correção do BUG-003, quando uma alteração destinada a corrigir o comportamento da exclusão acabou provocando uma regressão na pesquisa consecutiva.

A identificação dessa regressão levou à separação entre o estado dos personagens disponíveis e o estado utilizado para exibição dos resultados, reforçando a importância dos testes de regressão após alterações no código.

---

## 🏁 Status do projeto

**Projeto concluído e validado.**

### Resultado final da suíte

**29/29 testes PASS — 100% de aprovação**

### Status dos bugs

**5/5 bugs corrigidos e validados**

---

## 👨‍💻 Autor

**Nathan Matos**

Projeto desenvolvido durante um curso de JavaScript na Udemy, com acompanhamento do professor.

Posteriormente, o projeto foi utilizado por mim como base para aplicar e praticar conceitos de Quality Assurance, testes manuais e documentação de software.

⭐ Se este projeto foi útil ou interessante para você, fique à vontade para explorar o código e a documentação de QA.
