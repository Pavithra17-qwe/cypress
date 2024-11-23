//before
//after
//beforeEach
//AfterEach


describe('MyTestSuite', () =>{

before (() => {

    cy.log("*** Launch app ***");
})

after(()=>{ 


cy.log("*** close App ***");

})


beforeEach(() => {

cy.log("*** login ***");

})

afterEach(()=>{

cy.log("*** Logout ***");

})

it ('search', () =>{

    cy.log("*** Searching ***");

})

it('advanced search', () =>{

    cy.log("*** advanced search ***");

})

it('listing Products',()=>{

    cy.log("*** listing Products ***");

})

})

















