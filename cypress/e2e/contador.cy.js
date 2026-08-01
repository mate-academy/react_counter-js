describe('Contador', () => {
  it('deve começar em 0', () => {
    cy.visit('/');
    cy.get('.counter').should('have.text', '0');
  });

  it('adiciona 1 corretamente', () => {
    cy.visit('/');
    cy.get('.add1').click();
    cy.get('.counter').should('have.text', '1');
  });

  it('adiciona 100 corretamente', () => {
    cy.visit('/');
    cy.get('.add100').click();
    cy.get('.counter').should('have.text', '100');
  });

  it('increase deve adicionar 1 ou 101 dependendo do valor', () => {
    cy.visit('/');
    cy.get('.increase').click();
    // como começa em 0, increase → 1
    cy.get('.counter').should('have.text', '1');
  });
});
