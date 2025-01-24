
context('E2E - Desafio Tecnico PicPay', () => {
  beforeEach(() => {
    
  });
  it('Entrar com  CPF invalido', () => {
    cy.fixture('dados').then((dadosTeste) => {
      cy.visit('/')
      cy.get('#mat-mdc-form-field-label-0').click().type(dadosTeste.cpfValido)
      cy.get('button[type="submit"]').contains('Acessar').should('be.visible').click();
      cy.get('button[type="submit"]').contains('Acessar')
      cy.get('h1').contains('Gerencie seus contratos').should('be.visible')
      cy.get('p').contains('Insira o código de 5 dígitos enviado para (**)').should('be.visible')
      cy.get('p').contains('Código válido por').should('be.visible')
    })
  })

});
it.only('Validação de CPF invalido', () => {
  cy.fixture('dados').then((dadosTeste) => {
    cy.visit('/')
    cy.get('a[href="https://picpay.com/canais-de-atendimento"]').should('be.visible').and('not.be.disabled')
    cy.get('#mat-mdc-form-field-label-0').click().type(dadosTeste.cpfInvalido)
    cy.get('button[type="submit"]').contains('Acessar').should('be.visible').click();
    cy.get('mat-error').contains('*CPF Inválido').should('be.visible')
  })
});