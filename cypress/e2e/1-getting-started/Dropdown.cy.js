describe('handle dropdowns',()=>{
    it('dropdown with select',()=>{
        cy.visit("https://www.zoho.com/commerce/free-demo.html");
        cy.get("#zcf_address_country")
        .select('Haiti')
        .should('have.value','Haiti') //have.value used to see the value is same
    })


    it('dropdwon without select',()=>{
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");
        cy.get("#select2-billing_country-container").click()
        cy.get(".select2-search__field").type('Italy').type('{enter}') //like sendkeys("value",.keys.enter)
        cy.get("#select2-billing_country-container").should('have.text','Italy') // have.text used to see the text value is same
    })

    it('Auto dropdown select',()=>{
        cy.visit("https://www.wikipedia.org/");
        cy.get('#searchInput').type('Delhi')
        cy.get('.suggestion-title').contains('Delhi University').click()
    })

    it('dropdown with select 1',()=>{
        cy.visit("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html");
        cy.get("select#dropdowm-menu-1").select('JAVA').contains('JAVA') 
    })

})