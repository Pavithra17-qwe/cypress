
/// <reference types="cypress" />
import 'cypress-iframe';

describe('Handling iFrames', () => {
    it('iFrames', () => {
        cy.visit("https://jqueryui.com/droppable/");
        
        // Ensure the iframe is correctly targeted
        cy.frameLoaded('iframe');
        
        // Switch to iframe and interact with elements inside
        cy.iframe().find('#draggable').should('contain.text', 'Drag me to my target')
          .then((res) => {
              const frmValue = res.text();
              cy.log(frmValue);
          });
    });
});