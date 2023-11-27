// cypress/integration/add_plant_to_garden.spec.js

describe('Add to Garden Test', () => {
  it('allows a logged-in user to add a plant to their garden', () => {
    // Visit the login page
    cy.visit('/login');

    // Fill in the login form
    cy.get('input[name="username"]').type('a'); // Replace with your actual username field
    cy.get('input[name="password"]').type('aaaaaa'); // Replace with your actual password field

    // Click the login button
    cy.get('button[type="submit"]').click();

    // Navigate to the directory to add a plant
    cy.visit('/directory');

    // Assuming you have a list of plants and each plant has an "Add to Garden" button
    // The test will click the first button it finds
    cy.contains('Add to Garden').click();

    // Add additional steps based on your application's flow

    // Navigate to the user's garden to check if the plant has been added
    cy.visit('/user-garden');

    // Verify the new plant is displayed in the garden
    cy.contains('Plant Name').should('exist'); // Replace 'Plant Name' with the actual name or a unique identifier
  });
});
