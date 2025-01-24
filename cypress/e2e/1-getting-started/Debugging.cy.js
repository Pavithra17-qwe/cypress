// <reference types="Cypress" />  

describe('Debug or stop?' , () => {

    it('Debug', function () {
    
        cy.visit("https://automationintesting.online/#/")
        cy.get('.col-2 > .btn').should('have.text', 'Let me hack!');
        cy.get('#name').clear();
        cy.get('#name').type('Zara');
        cy.wait(2000);
        cy.get('#email').clear();
        cy.get('#email').type('zara@gmail.com');
        cy.wait(2000);
        cy.get('#phone').clear();
        cy.get('#phone').type('55555356666');
        cy.wait(2000);
        cy.get('#subject').clear();
        cy.get('#subject').type('Test program for debugging using breakpoints in cypress');
        cy.get('#subject').click();
        cy.wait(2000);
        cy.get('#description').click();
        cy.get('#description').type('This is a test for debugging in cypress using breakpoints');
        cy.wait(2000);
        cy.get('#submitContact').click();
        cy.wait(5000);  // Increase wait time before assertion
        cy.get('.contact > :nth-child(2) > div > :nth-child(2)', { timeout: 15000 }).should('be.visible');
        
    
    
    })
    
    })