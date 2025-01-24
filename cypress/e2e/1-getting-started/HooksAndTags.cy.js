//before
//after
//beforeEach
//AfterEach

describe('Hooks', ()=>{

    before(()=>{
       cy.log('Before all it blocks')
    })
    after(()=>{
        cy.log('after all it blocks')
    })
    beforeEach(()=>{
        cy.visit("https://adactinhotelapp.com/index.php");
        cy.get("#username").type("pavithrashiva")
        cy.get("#password").type("pavithra")
        cy.get("#login").click()
    })
    afterEach(()=>{
        cy.log('after each it block');
    })
    
    
    
    it('Select Location',()=>{
        cy.get("#location").select('London')
    })
     it('Select Hotel',()=>{
        cy.get("#hotels").select('Hotel Hervey')
     })
    it('Enter date',()=>{
        cy.get("#datepick_in").type("09/02/2024")
        cy.get("#datepick_out").type("17/01/2024")
    })
    
    
    
    })










