describe('CustomSuite', function(){

    it ('LoginTest', function(){
    cy.login('admin@yourstore.com','admin')
    cy.title().should('be.equal','Dashboard / nopCommerce administration')
    
    cy.login('admin@yourstore.com','admin12')// in valid
    cy.title().should('be.equal','Your store. Login')
    
    
    cy.login('admin@yourstore123.com','admin') //valid
    cy.title().should('be.equal','Your store. Login')
    
    })
    
    it('Add customer', function(){
    
        cy.login('admin@yourstore.com','admin')
    
        cy.log('Adding customer')
    
        cy.visit('/admin/customers'); // Navigate to the "Add customer" page
        cy.get('.add-customer-btn').click(); // Replace with your actual selector
        cy.get('#customerName').type('John Doe'); // Replace with your actual selector
        cy.get('#saveCustomer').click(); // Replace with your actual selector
    
        // Verify the customer was added
        cy.contains('Customer added successfully').should('be.visible');
      });
    });
    