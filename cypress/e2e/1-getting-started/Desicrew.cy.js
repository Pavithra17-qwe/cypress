describe('Submit Contact Form', () => {
    it('Clicks on Lets Connect and fills the form', () => {
      // Step 1: Visit the Desicrew website
      cy.visit('https://desicrew.in/');

      it('Should check the page title and url', () => {
        cy.title().should('include', 'DesiCrew');
        cy.get('.elementor-sticky--active > .elementor-element-3f72148 > .elementor-widget-container > a > .attachment-full').should('be.visible');
        cy.url().should('eq', 'http://desicrew.in/');
    });
    it('Should navigate to the About Us section', () => {
        cy.get('.elementor-element-68c25e3').click();
        cy.url().should('include', '/about-us');
        //cy.get(':nth-child(2) > .nav-link').click();
        cy.get(':nth-child(2) > .nav-link').click();
        cy.wait(2000)
        cy.scrollTo('bottom');
        
    });
      
    // Click on "Let's Connect" button
      cy.contains('Let\'s Connect').click();
  
      //Verify that we have landed on the contact page
      cy.url().should('include', 'connect');
  
      //  Fill the form fields with dummy data
      cy.get('#form-field-first_name').type('Dummy'); // First Name
      cy.get('#form-field-field_c3d76e4').type('User'); // Last Name
      cy.get('#form-field-email').type('dummy@gmail.com'); // Email
      cy.get('#form-field-phone_number').type('2015550123'); // Phone number (already includes country code)
  
      // Select service
      cy.get('#form-field-field_a130775').select('Software Testing'); // Select Service
  
      // Fill Company Name
      cy.get('#form-field-comapny_name').type('Dummy Corp'); // Company Name
  
      // Fill How Can We Help
      cy.get('#form-field-how_can_we_help').type('I need assistance with software testing services.'); // Help description
  
      cy.contains('Colleagues / Friends').click(); // Select "Colleagues / Friends"
  
      
      cy.contains('Submit').click();
  cy.wait(2000)
      //  Assert the success message after form submission
      cy.get('.elementor-message')
        .should('be.visible')
        .and('contain.text', 'Thank you for your interest. We will get back to you within 24 hours.');
    });
  });
  