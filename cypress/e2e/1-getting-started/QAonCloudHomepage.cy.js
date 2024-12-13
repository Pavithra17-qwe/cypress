describe('QAonCloud Website',function(){

   it('Visit the page and verify the title',function(){
       cy.visit("https://www.qaoncloud.com")
       cy.title().should('eq','QA Testing Services | Software Testing Services - QAonCloud')
   })

   

   it('Navigating to the Insights Header (blogs)',function(){
       cy.visit("https://www.qaoncloud.com")
       cy.get('.elementskit-menu-hamburger > :nth-child(3)').click()
       cy.get('#menu-item-319 > .ekit-menu-nav-link > .icon').click()
       cy.get('.elementor-element-4eceb4cb > .elementor-widget-container').click()
       cy.get('#navbarDropdown4').click()
       cy.wait(2000)
       cy.get(':nth-child(4) > .dropdown-menu > :nth-child(1) > ul > :nth-child(1) > .dropdown-item').click()
       cy.wait(2000)
       cy.get('#navbarDropdown4').click()
       cy.get(':nth-child(4) > .dropdown-menu > :nth-child(1) > ul > :nth-child(2) > .dropdown-item').click()        
       cy.get('#navbarDropdown4').click()
       cy.get(':nth-child(4) > .dropdown-menu > :nth-child(1) > ul > :nth-child(3) > .dropdown-item').click()
       cy.wait(2000)
       cy.get('#navbarDropdown4').click()
       cy.get(':nth-child(4) > .dropdown-menu > :nth-child(1) > ul > :nth-child(4) > .dropdown-item').click()
       cy.wait(2000)
   })

   
   it('Contact US form ', function(){
       cy.visit("https://www.qaoncloud.com")
       cy.get(".elementor-button-text").click() //Contact US
       cy.get('form > [name="name"]').type('QA testing')
       cy.get('form > [name="email"]').type('qaengineer@qaoncloud.com ')
       cy.get('form > .onlyNumber').type('123234435454')
       cy.get('form > [name="companyname"]').type('QAonCloud')
       cy.get('form > [name="role"]').type('QA Engineer')
       cy.get('form > textarea.form-control').type('Test the applications that is developed by our dev steam')
       //cy.get('.recaptcha-checkbox-border').check().should('be.visible')
       cy.get('.contact-send > .btn').click()
   })

  

})