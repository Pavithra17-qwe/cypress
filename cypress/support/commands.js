// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


/// <reference types="cypress-xpath"/>

Cypress.Commands.add('login', (email, password) => {
    const loginUrl = Cypress.env('adminUrl') || 'https://admin-demo.nopcommerce.com/login'; // Fallback URL
    cy.visit(loginUrl);
    cy.get('input[name=Email]').clear().type(email || Cypress.env('adminEmail'));
    cy.get('input[name=Password]').clear().type(password || Cypress.env('adminPassword'));
    cy.get('input[type=submit]').click();
  });
  
  