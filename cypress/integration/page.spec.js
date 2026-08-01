describe('Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001/'); // Ensure correct port
    cy.get('body', { timeout: 10000 }).should('be.visible'); // Wait for page load
  });

  it('should have count 0 by default', () => {
    cy.get('[data-testid="title"]', { timeout: 10000 }).should('be.visible'); // Update selector
    cy.get('[data-testid="count"]').should('contain', '0');
  });

  it('Add 1 button should add 1 on a single click', () => {
    cy.get('button').contains('Add 1').click();
    cy.get('[data-testid="count"]').should('contain', '1');
  });

  it('Add 1 button should add 7 after 7 clicks', () => {
    cy.get('button').contains('Add 1').click({ multiple: true, times: 7 });
    cy.get('[data-testid="count"]').should('contain', '7');
  });

  it('Add 100 button should add 100 on a single click', () => {
    cy.get('button').contains('Add 100').click();
    cy.get('[data-testid="count"]').should('contain', '100');
  });

  it('Add 100 button should add 400 after 4 clicks', () => {
    cy.get('button').contains('Add 100').click({ multiple: true, times: 4 });
    cy.get('[data-testid="count"]').should('contain', '400');
  });

  it('Increase button should run addOne and add100 if count is 0', () => {
    cy.get('button').contains('Increase').click();
    cy.get('[data-testid="count"]').should('contain', '101');
  });

  it('Increase button should run only addOne if count is 1', () => {
    cy.get('button').contains('Add 1').click();
    cy.get('button').contains('Increase').click();
    cy.get('[data-testid="count"]').should('contain', '2');
  });

  it('Increase button should run only addOne if count is 101', () => {
    cy.get('button').contains('Add 100').click();
    cy.get('button').contains('Add 1').click();
    cy.get('button').contains('Increase').click();
    cy.get('[data-testid="count"]').should('contain', '102');
  });

  it('Increase button should run addOne and add100 if count is 100', () => {
    cy.get('button').contains('Add 100').click();
    cy.get('button').contains('Increase').click();
    cy.get('[data-testid="count"]').should('contain', '201');
  });

  it('should count as expected after 7 clicks', () => {
    cy.get('button').contains('Add 1').click({ multiple: true, times: 7 });
    cy.get('[data-testid="count"]').should('contain', '7');
  });
});
