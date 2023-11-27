
describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/login');

    // Assuming your login form has fields with data-testid attributes
    cy.get('[data-testid="username-input"]').type('surinder');
    cy.get('[data-testid="password-input"]').type('surinder');
    cy.get('[data-testid="login-button"]').click();

    // Wait for authentication to complete (you may need to add additional waits or assertions based on your app's behavior)
    cy.wait(2000); // Adjust the wait time as needed

    cy.get('[data-testid="plant-reminder-heading"]').should('exist')

    cy.get('[data-testid="content-reminder-heading"]').should('exist')
    
    cy.get('[data-testid="date-reminder-heading"]').should('exist')

    cy.get('[data-testid="interval-reminder-heading"]').should('exist')
    
    cy.get('[data-testid="delete-reminder-heading"]').should('exist')
    
  })
})