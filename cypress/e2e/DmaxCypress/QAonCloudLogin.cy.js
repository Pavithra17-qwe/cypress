describe('Login and Dropdown Selection Test', () => {
  it('should log in and select month and year', () => {
    // Visit the login page
    cy.visit('https://qaoncloud.com/dmax_staging/?next=%2Fdmax_staging%2Fregister');
    
    // Enter username and password
    cy.get('input[name="username"]').type('DC6271');
    cy.get('input[name="password"]').type('6271');
    
    // Click the login button
    cy.get('button[type="submit"]').click();
    
    // Verify login by checking if redirected to the dashboard page
    // Wait for the page to load and verify the URL
    cy.url({timeout: 10000}).should('include', '/dmax_staging/view_dscore');
    
    // Wait for the month dropdown to be visible
    cy.get('#month', {timeout: 10000}).should('be.visible');
    
    // Select the month dropdown and choose a month (e.g., January)
    cy.get('#month').select('1');  // 1 represents January
    
    // Verify the month selection
    cy.get('#month').should('have.value', '1');
    
    // Wait for the year dropdown to be visible
    cy.get('#year', {timeout: 10000}).should('be.visible');
    
    // Select the year dropdown and choose a year (e.g., 2023)
    cy.get('#year').select('2023');  // 2023 represents the year
    
    // Verify the year selection
    cy.get('#year').should('have.value', '2023');
    
  
    cy.get('.inner_filter_div', {timeout: 10000}).should('be.visible'); 
  });
});
