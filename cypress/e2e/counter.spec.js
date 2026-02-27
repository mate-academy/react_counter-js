describe('Counter App', () => {
  it('should load the page', () => {
    cy.visit('/');
    cy.contains('Counter');
  });
});
describe('Counter App', () => {
  it('should show initial value', () => {
    cy.visit('/');
    cy.contains('102');
  });

  it('should have buttons', () => {
    cy.visit('/');
    cy.contains('Add 1');
    cy.contains('Add 100');
    cy.contains('Increase');
  });
});
