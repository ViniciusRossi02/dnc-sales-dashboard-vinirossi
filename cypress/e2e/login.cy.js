describe(' Login Flow Correct Credentials', () => {
  beforeEach(()=>{
    cy.visit( 'http://localhost:5173/')
  })

  it('should display login form', ()=> {
    cy.get('form').should('be.visible')
  })

   it('should login with valid creditials', ()=> {
    cy.get('input[type="email"').type('be.visible')
    cy.get('input[type="password"').type('')
    cy.get('button[type="submit"').click()
    cy.url('header').should('be.visible')
  })
})

describe(' Login Flow invalid credentials', () => {
  beforeEach(()=>{
    cy.visit( 'http://localhost:5173/')
  })

  it('should display login form', ()=> {
    cy.get('form').should('be.visible')
  })

   it('should login with valid credentials', ()=> {
    cy.get('input[type="email"').type('email')
    cy.get('input[type="password"').type('senha')
    cy.get('button[type="submit"').click()
    cy.contains('Email e/ou senha inválidos').should('be.visible')
  })
})