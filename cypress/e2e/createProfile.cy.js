describe('Check if create profile page randers the correct components', () => {
  beforeEach(()=>{
    cy.visit( 'http://localhost:5173/cadastro')
  })

  it('should steps 1 and 2 works', ()=> {
    cy.get('input[type="text"').type('Nome')
    cy.get('input[type="email"').type('email_valido')
    cy.get('input[type="tel"').type('telefone')
    cy.get('button[type="submit"').click()
    cy.get('input[type="password"').type('senha')
    cy.get('button[type="submit"').should('be.visible')
  })
})