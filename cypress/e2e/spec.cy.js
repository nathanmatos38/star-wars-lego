

describe('Happy Path', () => {
  it('Buscar Mestre Yoda (G1-TC-001)', () => {
    cy.start()

    cy.get('input[placeholder="Busca por nome..."]').click()
    .type('Mestre Yoda')

    cy.contains('button', 'Buscar').click()

    cy.contains('.item p', 'Mestre Yoda')
    .should('be.visible')
    .parent()
    .find('img')
    .should('be.visible')
    .and('have.attr', 'alt', 'Mestre Yoda')
  })

  it('Buscar Luke Skywalker (G1-TC-002)', () => {
    cy.start()

    cy.get('input[placeholder="Busca por nome..."]').click()
    .type('Luke Skywalker')

    cy.contains('button', 'Buscar').click()

    cy.contains('.item p', 'Luke Skywalker')
    .should('be.visible')
    .parent()
    .find('img')
    .should('be.visible')
    .and('have.attr', 'alt', 'Luke Skywalker')
  })

  it('Buscar Princesa Leia (G1-TC-003)', ()=> {
    cy.start()

    cy.get('input[placeholder="Busca por nome..."]').click()
    .type('Princesa Leia')

    cy.contains('button', 'Buscar').click()

    cy.contains('.item p', 'Princesa Leia')
    .should('be.visible')
    .parent()
    .find('img')
    .should('be.visible')
    .and('have.attr', 'alt', 'Princesa Leia')
  })

  it('Buscar Han Solo (G1-TC-004)', () => {
    cy.start()

    cy.get('input[placeholder="Busca por nome..."]').click()
    .type('Han Solo')

    cy.contains('button', 'Buscar').click()

    cy.contains('.item p', 'Han Solo')
    .should('be.visible')
    .parent()
    .find('img')
    .should('be.visible')
    .and('have.attr', 'alt', 'Han Solo')
  })

  it('Buscar Darth Vader (G1-TC-005)', () => {
    cy.start()

    cy.get('input[placeholder="Busca por nome..."]').click()
    .type('Darth Vader')

    cy.contains('button', 'Buscar').click()

    cy.contains('.item p', 'Darth Vader')
    .should('be.visible')
    .parent()
    .find('img')
    .should('be.visible')
    .and('have.attr', 'alt', 'Darth Vader')
  })

  it('Buscar Chewbacca (G1-TC-006)', () => {
    cy.start()

    cy.get('input[placeholder="Busca por nome..."]').click()
    .type('Chewbacca')

    cy.contains('button', 'Buscar').click()

    cy.contains('.item p', 'Chewbacca')
    .should('be.visible')
    .parent()
    .find('img')
    .should('be.visible')
    .and('have.attr', 'alt', 'Chewbacca')
  })

  it('Buscar R2D2 (G1-TC-007)', () => {
    cy.start()

    cy.get('input[placeholder="Busca por nome..."]').click()
    .type('R2D2')

    cy.contains('button', 'Buscar').click()

    cy.contains('.item p', 'R2D2')
    .should('be.visible')
    .parent()
    .find('img')
    .should('be.visible')
    .and('have.attr', 'alt', 'R2D2')
  })

  it('Buscar C3pO (G1-TC-008)', ()=> {
    cy.start()

    cy.get('input[placeholder="Busca por nome..."]').click()
    .type('C3pO')

    cy.contains('button', 'Buscar').click()

    cy.contains('.item p', 'C3pO')
    .should('be.visible')
    .parent()
    .find('img')
    .should('be.visible')
    .and('have.attr', 'alt', 'C3pO')
  })
})

describe('Variações de Entrada', ()=>{
  it('Buscar nome com espaço no ínicio (G2-TC-001)', () => {
    cy.start()

    cy.get('input[placeholder="Busca por nome..."]').click()
    .type(' Mestre Yoda')

    cy.contains('button', 'Buscar').click()

    cy.contains('.item p', 'Mestre Yoda')
    .should('be.visible')
    .parent()
    .find('img')
    .should('be.visible')
    .and('have.attr', 'alt', 'Mestre Yoda')
  })

  it('Buscar nome com espaço no final (G2-TC-002)', () => {
    cy.start()

    cy.get('input[placeholder="Busca por nome..."]').click()
    .type('Mestre Yoda ')

    cy.contains('button', 'Buscar').click()

    cy.contains('.item p', 'Mestre Yoda')
    .should('be.visible')
    .parent()
    .find('img')
    .should('be.visible')
    .and('have.attr', 'alt', 'Mestre Yoda')
  })

  it('Buscar com variações de entrada e espaço (G2-TC-003)', ()=> {
    cy.start()

    cy.get('input[placeholder="Busca por nome..."]').click()
    .type('mestre yoda ')

    cy.contains('button', 'Buscar').click()

    cy.contains('.item p', 'Mestre Yoda')
    .should('be.visible')
    .parent()
    .find('img')
    .should('be.visible')
    .and('have.attr', 'alt', 'Mestre Yoda')
  })

  it('Buscar com letras maiúsculas (G2-TC-004)', ()=>{
    cy.start()

    cy.get('input[placeholder="Busca por nome..."]').click()
    .type('MESTRE YODA')

    cy.contains('button', 'Buscar').click()

    cy.contains('.item p', 'Mestre Yoda')
    .should('be.visible')
    .parent()
    .find('img')
    .should('be.visible')
    .and('have.attr', 'alt', 'Mestre Yoda')
  })


  it('Buscar com campo vazio (G2-TC-005)', ()=> {
    cy.start()
    
    cy.on('window:alert', (textoDoAlert) => {
  expect(textoDoAlert).to.equal('O campo de busca é obrigatório!')
  })

    cy.contains('button', 'Buscar').click()
  })

  it('Buscar somente com espaços (G2-TC-006)', ()=>{
    cy.start()

    cy.get('input[placeholder="Busca por nome..."]').click()
    .type('      ')

    cy.on('window:alert', (textoDoAlert) => {
    expect(textoDoAlert).to.equal('O campo de busca é obrigatório!')
  })

    cy.contains('button', 'Buscar').click()
  })
})

describe('Entradas Inválidas/Sem Correspondência', ()=> {
  it('Buscar entrada com números (G3-TC-001)', ()=> {
    cy.start()

    cy.get('input[placeholder="Busca por nome..."]').click()
    .type('32145')

    cy.on('window:alert', (textoDoAlert) => {
  expect(textoDoAlert).to.equal('Nenhum registro encontrado')
  })

  cy.contains('button', 'Buscar').click()
  })

  it('Buscar com caracteres especiais (G3-TC-002)', () => {
    cy.start()

    cy.get('input[placeholder="Busca por nome..."]').click()
    .type('R@d2')

    cy.on('window:alert', (textoDoAlert) => {
    expect(textoDoAlert).to.equal('Nenhum registro encontrado')
    })

    cy.contains('button', 'Buscar').click()
  })

  it('Buscar somente caracteres especiais (G3-TC-003)', ()=> {
    cy.start()

    cy.get('input[placeholder="Busca por nome..."]').click()
    .type('&¨%$#')

    cy.on('window:alert', (textoDoAlert) => {
    expect(textoDoAlert).to.equal('Nenhum registro encontrado')
    })

    cy.contains('button', 'Buscar').click()
  })
})

describe('Exclusão', ()=>{
  it('Excluir Mestre Yoda (G4-TC-001)', () =>{
    cy.start()

    cy.contains('p', 'Mestre Yoda')
    .parent()
    .find('span.delete').click()

    cy.get('input[placeholder="Busca por nome..."]').click().type('Mestre Yoda')
    
    cy.on('window:alert', (textoDoAlert) => {
    expect(textoDoAlert).to.equal('Nenhum registro encontrado')
    })

    cy.contains('button', 'Buscar').click()
    cy.contains('p', 'Mestre Yoda').should('not.exist')
  })

  it('Excluir R2D2 (G4-TC-002)', () => {
    cy.start()

    cy.contains('p', 'R2D2')
    .parent()
    .find('span.delete').click()

    cy.get('input[placeholder="Busca por nome..."]').click().type('R2D2')

    cy.on('window:alert', (textoDoAlert) => {
    expect(textoDoAlert).to.equal('Nenhum registro encontrado')
    })

    cy.contains('button', 'Buscar').click()
    cy.contains('p', 'R2D2').should('not.exist')
  })

  it('Excluir C3pO (G4-TC-003)', ()=> {
    cy.start()

    cy.contains('p', 'C3pO')
    .parent()
    .find('span.delete').click()

    cy.get('input[placeholder="Busca por nome..."]').click().type('C3pO')

    cy.on('window:alert', (textoDoAlert) => {
    expect(textoDoAlert).to.equal('Nenhum registro encontrado')
    })

    cy.contains('button', 'Buscar').click()
    cy.contains('p', 'C3pO').should('not.exist')
  })
})

describe('Função Curtir', () => {
  it('Curtir Mestre Yoda (G5-TC-001)', () => {
    cy.start()

    cy.on('window:alert', (textoDoAlert) => {
      expect(textoDoAlert).to.equal('O personagem Mestre Yoda recebeu um like!')
    })

    cy.contains('p', 'Mestre Yoda')
    .parent()
    .find('span.like.material-symbols-outlined').click()

    
  })

  it('Curtir R2D2 (G5-TC-002)', () => {
    cy.start()

    cy.on('window:alert', (textoDoAlert) => {
      expect(textoDoAlert).to.equal('O personagem R2D2 recebeu um like!')
    })

    cy.contains('p', 'R2D2')
    .parent()
    .find('span.like.material-symbols-outlined').click()

    
  })

  it('Curtir C3pO (G5-TC-003)', () => {
    cy.start()

    cy.on('window:alert', (textoDoAlert) => {
      expect(textoDoAlert).to.equal('O personagem C3pO recebeu um like!')
    })

    cy.contains('p', 'C3pO')
    .parent()
    .find('span.like.material-symbols-outlined').click()

    
  })
})

describe('Responsividade', () => {
  it('Viewport 1440 × 842 (G6-TC-001)', () => {
    cy.start()
    cy.viewport(1440, 842)

    cy.get('.characters')
    .should(($grid) => {
    const colunas = $grid.css('grid-template-columns').split(' ').length

    expect(colunas).to.equal(4)
  })

    cy.get('body').should('be.visible')
    
    cy.get('input[placeholder="Busca por nome..."]').click().type('Mestre Yoda')
    cy.contains('button', 'Buscar').click()
    cy.contains('.item p', 'Mestre Yoda')
    .should('be.visible')
    .parent()
    .find('img')
    .should('be.visible')
    .and('have.attr', 'alt', 'Mestre Yoda')

    cy.on('window:alert', (textoDoAlert) => {
      expect(textoDoAlert).to.equal('O personagem Mestre Yoda recebeu um like!')
    })

    cy.contains('p', 'Mestre Yoda')
    .parent()
    .find('span.like.material-symbols-outlined').click()

    
    cy.contains('p', 'Mestre Yoda')
    .parent()
    .find('span.delete').click()
  })

  it('Viewport 1024 × 842 (G6-TC-002)', () => {
    cy.start()
    cy.viewport(1024, 842)

    cy.get('.characters')
    .should(($grid) => {
    const colunas = $grid.css('grid-template-columns').split(' ').length

    expect(colunas).to.equal(4)
  })

    cy.get('body').should('be.visible')
    
    cy.get('input[placeholder="Busca por nome..."]').click().type('Mestre Yoda')
    cy.contains('button', 'Buscar').click()
    cy.contains('.item p', 'Mestre Yoda')
    .should('be.visible')
    .parent()
    .find('img')
    .should('be.visible')
    .and('have.attr', 'alt', 'Mestre Yoda')

    cy.on('window:alert', (textoDoAlert) => {
      expect(textoDoAlert).to.equal('O personagem Mestre Yoda recebeu um like!')
    })

    cy.contains('p', 'Mestre Yoda')
    .parent()
    .find('span.like.material-symbols-outlined').click()

    cy.contains('p', 'Mestre Yoda')
    .parent()
    .find('span.delete').click()
  })

  it('Viewport 768 × 842 (G6-TC-003)', () => {
    cy.start()
    cy.viewport(768, 842)

    cy.get('.characters')
    .should(($grid) => {
    const colunas = $grid.css('grid-template-columns').split(' ').length

    expect(colunas).to.equal(2)
  })

    cy.get('body').should('be.visible')
    
    cy.get('input[placeholder="Busca por nome..."]').click().type('Mestre Yoda')
    cy.contains('button', 'Buscar').click()
    cy.contains('.item p', 'Mestre Yoda')
    .should('be.visible')
    .parent()
    .find('img')
    .should('be.visible')
    .and('have.attr', 'alt', 'Mestre Yoda')

    cy.on('window:alert', (textoDoAlert) => {
      expect(textoDoAlert).to.equal('O personagem Mestre Yoda recebeu um like!')
    })

    cy.contains('p', 'Mestre Yoda')
    .parent()
    .find('span.like.material-symbols-outlined').click()
    
    cy.contains('p', 'Mestre Yoda')
    .parent()
    .find('span.delete').click()
  })

  it('Viewport 425 × 842 (G6-TC-004)', () => {
    cy.start()
    cy.viewport(425, 842)

    cy.get('.characters')
    .should(($grid) => {
    const colunas = $grid.css('grid-template-columns').split(' ').length

    expect(colunas).to.equal(1)
  })

    cy.get('body').should('be.visible')
    
    cy.get('input[placeholder="Busca por nome..."]').click().type('Mestre Yoda')
    cy.contains('button', 'Buscar').click()
    cy.contains('.item p', 'Mestre Yoda')
    .should('be.visible')
    .parent()
    .find('img')
    .should('be.visible')
    .and('have.attr', 'alt', 'Mestre Yoda')

    cy.on('window:alert', (textoDoAlert) => {
      expect(textoDoAlert).to.equal('O personagem Mestre Yoda recebeu um like!')
    })

    cy.contains('p', 'Mestre Yoda')
    .parent()
    .find('span.like.material-symbols-outlined').click()
    
    cy.contains('p', 'Mestre Yoda')
    .parent()
    .find('span.delete').click()
  })

    it('Viewport 375 × 842 (G6-TC-005)', () => {
    cy.start()
    cy.viewport(375, 842)

    cy.get('.characters')
    .should(($grid) => {
    const colunas = $grid.css('grid-template-columns').split(' ').length

    expect(colunas).to.equal(1)
  })

    cy.get('body').should('be.visible')
    
    cy.get('input[placeholder="Busca por nome..."]').click().type('Mestre Yoda')
    cy.contains('button', 'Buscar').click()
    cy.contains('.item p', 'Mestre Yoda')
    .should('be.visible')
    .parent()
    .find('img')
    .should('be.visible')
    .and('have.attr', 'alt', 'Mestre Yoda')

    cy.on('window:alert', (textoDoAlert) => {
      expect(textoDoAlert).to.equal('O personagem Mestre Yoda recebeu um like!')
    })

    cy.contains('p', 'Mestre Yoda')
    .parent()
    .find('span.like.material-symbols-outlined').click()
    
    cy.contains('p', 'Mestre Yoda')
    .parent()
    .find('span.delete').click()
    })

    it('Viewport 320 × 842 (G6-TC-006)', () => {
    cy.start()
    cy.viewport(320, 842)

    cy.get('.characters')
    .should(($grid) => {
    const colunas = $grid.css('grid-template-columns').split(' ').length

    expect(colunas).to.equal(1)
  })

    cy.get('body').should('be.visible')
    
    cy.get('input[placeholder="Busca por nome..."]').click().type('Mestre Yoda')
    cy.contains('button', 'Buscar').click()
    cy.contains('.item p', 'Mestre Yoda')
    .should('be.visible')
    .parent()
    .find('img')
    .should('be.visible')
    .and('have.attr', 'alt', 'Mestre Yoda')

    cy.on('window:alert', (textoDoAlert) => {
      expect(textoDoAlert).to.equal('O personagem Mestre Yoda recebeu um like!')
    })

    cy.contains('p', 'Mestre Yoda')
    .parent()
    .find('span.like.material-symbols-outlined').click()
    
    cy.contains('p', 'Mestre Yoda')
    .parent()
    .find('span.delete').click()
    })
})