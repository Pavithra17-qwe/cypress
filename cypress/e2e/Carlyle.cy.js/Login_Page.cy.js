describe('Login Test for Carlyle', () => {
    it('should log in successfully with valid credentials', () => {
        // Visit the login page
        cy.visit('https://carlyle-stagingx.unqork.io/#/auth/login');
    
        // Enter the email address
        cy.get('#username') // Selects the input field by its ID
          .type('alex+ProductOwner@auxosolutions.io');
        
        // Enter the password
        cy.get('#password') // Selects the input field by its ID
          .type('Unqork12345!');
        
        // Click the Login button
        cy.get('input[type="submit"]') // Selects the login button by its type
          .click();
        
        // Verify successful login
        cy.url().should('include', '/dashboard'); // Update with the correct URL after login
        cy.contains('Welcome').should('be.visible'); // Update with the correct page content
    });
});
