describe('Registration Test', () => {
    it('should register with valid details', () => {
      // Step 1: Visit the main page and click the Register button
      cy.visit('https://qaoncloud.com/dmax/');
      cy.contains('Register').click(); 
  
      // Step 2: Verify that the registration page has loaded
      cy.url().should('include', '/register');  
      cy.get('h1').should('contain.text', 'Register');  
  
      // Step 3: Fill in the registration form
      cy.get('input[name="username"]').type('DC0001');  // Enter Employee ID
      cy.get('input[name="password"]').type('0001');  // Enter password
      cy.get('input[name="email"]').type('dummy@qaoncloud.com');  // Enter email
      cy.get('input[name="name"]').type('dummy0001');  // Enter name
      
      // Step 4: Select the role from the dropdown
      cy.get('select[name="role"]').select('crewmate');  
      
      // Step 5: Submit the form
      cy.get('button[type="submit"]').click(); 
  
      // Step 6: Verify successful registration 
      
      cy.url().should('not.include', 'register');  
      // Look for a success message
      // For example, if redirected to a login page:
      cy.get('h1').should('contain.text', 'Login');  
    });
  });
  