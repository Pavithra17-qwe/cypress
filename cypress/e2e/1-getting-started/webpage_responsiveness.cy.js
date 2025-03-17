describe("Page Responsiveness Test", ()=>{
    it("Twitter Login",()=>{
        cy.visit("https://x.com/i/flow/login")
        cy.get('.r-1roi411 > :nth-child(1) > .r-16y2uox').type("pavithra@gmail.com")
    })

    it('Twitter Login Page - iphone-se2, ', ()=>{
        cy.viewport('iphone-se2')
        cy.visit("https://x.com/i/flow/login")
        cy.get('.r-1roi411 > :nth-child(1) > .r-16y2uox').type("pavithra@gmail.com")
    })

    it('Twitter Login Page - macbook-16', ()=>{
        cy.viewport('macbook-16')
        cy.visit("https://x.com/i/flow/login")
        cy.get('.r-1roi411 > :nth-child(1) > .r-16y2uox').type("pavithra@gmail.com")
    })

    it('Twitter Login Page - ipad-2', ()=>{
        cy.viewport('ipad-2')
        cy.visit("https://x.com/i/flow/login")
        cy.get('.r-1roi411 > :nth-child(1) > .r-16y2uox').type("pavithra@gmail.com")
    })

    it('Twitter Login Page - samsung-note9', ()=>{
        cy.viewport('samsung-note9')
        cy.visit("https://x.com/i/flow/login")
        cy.get('.r-1roi411 > :nth-child(1) > .r-16y2uox').type("pavithra@gmail.com")
    })
})