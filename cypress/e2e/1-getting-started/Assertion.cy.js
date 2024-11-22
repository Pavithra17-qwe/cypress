describe('Assertions',()=>{
  
    it('Implicit assertion login +scenario', function() {   // this is one of the testcase
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        cy.title().should('eq','OrangeHRM');
        cy.get("[placeholder='Username']").type('Admin')
        cy.get("[placeholder='Password']").type('admin123')
        cy.get("[type='submit']").click();
     })

     it('Validating URL with SHOULD & AND keywords', function() {   // this is one of the testcase
        cy.visit("https://opensource-demo.orangehrmlive.com/");

       
        cy.url().should('include','orangehrmlive.com')
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('contain','orangehrmlive')

     
        cy.url().should('include','orangehrmlive.com')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','orangehrmlive')
     })

     it('Validating URL with negative scenario', function() {   // this is one of the testcase
        cy.visit("https://opensource-demo.orangehrmlive.com/");

      
        cy.url().should('include','orangehrmlive.com')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('not.contain','greenhrmlive')
     })

     it('Validating image is visible or not', function() {   // this is one of the testcase
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        cy.get("[alt='company-branding']").should('be.visible')
        cy.get("[alt='company-branding']").should('exist')
     })

     it('Finding No of links in the particular page', function() {   // this is one of the testcase
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        cy.xpath("//a").should('have.length','5')
     })

     it('Checking username is crtly entered or not', function() {   // this is one of the testcase
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        cy.get("[placeholder='Username']").type('Admin')
        cy.get("[placeholder='Username']").should('have.value','Admin')
     })

     it('Explicit assertions login +scenario', function() {   // this is one of the testcase
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        cy.get("[placeholder='Username']").type('Admin')
        cy.get("[placeholder='Password']").type('admin123')
        cy.get("[type='submit']").click();
     })

     it('Dynamically checking the user profile', function() {   // this is one of the testcase
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        cy.get("[placeholder='Username']").type('Admin')
        cy.get("[placeholder='Password']").type('admin123')
        cy.get("[type='submit']").click();

        let expName = "John Doe";
        cy.get(".oxd-userdropdown-name").then(   (x)=>{

         let actName = x.text()
         //BDD style 
         expect(actName).to.equal(expName)
         expect(actName).to.not.equal("moni")

         //TDD style
         assert.equal(actName,expName)
         assert.notEqual(actName,"moni")
        })
     })
})