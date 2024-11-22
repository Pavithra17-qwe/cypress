describe ('My First Test', () => {
    it ('verify title +ve',() => {
    cy.visit("https://opensource-demo.orangehrmlive.com/")
    cy.title().should('eq','OrangeHRM' )
    
    })
    it ('verify title -ve',() => {
      cy.visit("https://opensource-demo.orangehrmlive.com/")
      cy.title().should('eq','OrangeHRM123' )
      
      })
      
        
      
    
    }
    
    )
    