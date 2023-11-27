//Checking water today and all reminders
describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/login');

    // Assuming your login form has fields with data-testid attributes
    cy.get('[data-testid="username-input"]').type('surinder');
    cy.get('[data-testid="password-input"]').type('surinder');
    cy.get('[data-testid="login-button"]').click();

    // Wait for authentication to complete (you may need to add additional waits or assertions based on your app's behavior)
    cy.wait(2000); // Adjust the wait time as needed

  
    cy.get('[data-testid="water-today-test"]').should('exist');
    cy.get('[data-testid="all-plant-test"]').should('exist');
    cy.get('[data-testid="add-reminder-test"]').should('exist');

  })
})