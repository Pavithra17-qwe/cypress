describe('Navigation',()=>{

    it('',()=>{
        cy.visit("http://www.automationpractice.pl/index.php");
        cy.get("#search_query_top").type("T-Shirts");
        cy.get("[name = 'submit_search']").click();
        cy.get(".lighter").contains("T-Shirts"); 
        cy.go('back'); //nav back
        cy.go('forward'); //nav forward
    })

})