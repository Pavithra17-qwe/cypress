import 'cypress-downloadfile/lib/downloadFileCommand';

/// <reference types="cypress-xpath"/>
import 'cypress-file-upload';
import '@4tw/cypress-drag-drop';
import 'cypress-xpath'; // Ensure this is imported only once
import 'cypress-iframe';




// Custom login command for Practice Test Automation
Cypress.Commands.add('logiin', (email, password) => {
    cy.visit('https://practicetestautomation.com/practice-test-login/')
    cy.get('#username').type(email)
    cy.get('#password').type(password)
    cy.get('#submit').click()
});

// Another custom login command for NopCommerce
Cypress.Commands.add('login', (email, password) => {
    cy.visit('https://admin-demo.nopcommerce.com/login');
    cy.get('input[name=Email]').type(email)
    cy.get('input[name=Password]').type(password)
    cy.get('input[type=submit]').click();
});
