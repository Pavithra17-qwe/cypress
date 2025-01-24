// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  // Handle the exception as needed
  console.error('Uncaught Exception:', err.message);
  // Return false to prevent the unhandled exception from failing the test
  return false;
});

describe('Automation Testing Registration Page', () => {
  it('Filling Registration form', () => {
    // Navigate to the URL before each test
    cy.visit('https://demo.automationtesting.in/Register.html');
    
    // Fill out the text fields
    cy.get('input[placeholder="First Name"]').type('pavi');
    cy.get('input[placeholder="Last Name"]').type('A');
    cy.get('textarea[ng-model="Adress"]').type('103, RG nagar, Chennai');
    cy.get('input[type="email"]').type('Syn122@gmail.com');
    cy.get('input[type="tel"]').type('8859755555');
    
    // Select Gender
    cy.get('input[value="Male"]').check({ force: true });
    
    // Select Hobbies
    cy.get('#checkbox1').check({ force: true }); // Cricket
    cy.get('#checkbox2').check({ force: true }); // Movies
    
    // Select Skills from dropdown
    cy.get('#Skills').select('Design');
    
   // Select Country from dropdown
   cy.get('#countries').select('India');

   // Select Country from searchable dropdown
   cy.get('.select2-selection').click();
   cy.get('.select2-search__field').type('Australia{enter}');

    // Select Date of Birth
    cy.get('#yearbox').select('1999');
    cy.get('select[placeholder="Month"]').select('July');
    cy.get('#daybox').select('17');

    // Set Password and Confirm Password
    cy.get('#firstpassword').type('pavi123');
    cy.get('#secondpassword').type('pavi1234');
    
    // Click the Submit button
    cy.get('#submitbtn').click();

    // Assert submission or redirection (depending on behavior)
    cy.url().should('not.include', 'Register.html');
  });
});
