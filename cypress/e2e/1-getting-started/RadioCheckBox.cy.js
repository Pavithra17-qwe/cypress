describe('handle radio btn & check box', ()=>{

    it('checking radio buttons',()=>{
        cy.visit("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html");
        cy.get("input[value='green']").should('be.visible')
        cy.get("input[value='green']").check().should('be.checked')
        cy.get("input[value='blue']").should('not.be.checked')
    })

    it('checking check box',()=>{
        cy.visit("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html");
        cy.get("[value='option-1']").should('be.visible')
        cy.get("[value='option-1']").check().should('be.checked')
        cy.get("[value='option-2']").should('not.be.checked')
    })


    it('checking the value is disabled',()=>{
        cy.visit("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html");
        cy.get("[value='cabbage']").should('be.visible')
        cy.get("[value='cabbage']").should('be.disabled')
    })

    it('checking the value is checked already',()=>{
        cy.visit("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html");
        cy.get("[value='pumpkin']").should('be.visible')
        cy.get("[value='pumpkin']").should('be.checked')
    })

    it('checking multiple check box',()=>{
        cy.visit("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html");
        cy.get("[value='option-1']").should('be.visible')
        cy.get("[value='option-1']").check().should('be.checked')
        cy.get("[value='option-2']").check().should('be.checked')
    })
    
})