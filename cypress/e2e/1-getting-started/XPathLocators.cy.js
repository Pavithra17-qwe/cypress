describe('XPathLocators', ()  =>{

    it('find no of products', ()=> {
    
    cy.visit(" http://www.automationpractice.pl/index.php")
    
    cy.xpath("//ul[@id='homefeatured']/li").should('have.length',7)
    
    
    })
    
    })