describe('Fixture', () =>{
    let userdata;
    before(function() {
        cy.fixture("orangehrm.json").then(function(data){
           userdata=data
        })

    })
    it('Demo',function(){

        cy.visit("https://www.orangehrm.com/en/book-a-free-demo")
        cy.get("#Form_getForm_FullName").type(userdata.fullname)  //Full Name
        cy.get("#Form_getForm_Contact").type(userdata.phonenumber)  // contact
        cy.get('#Form_getForm_Email').type(userdata.email) // Business email
        cy.get("#Form_getForm_CompanyName").type(userdata.companyname)  //company name
        cy.get("#Form_getForm_Country").select(userdata.country).should('have.value','India') //Country
        cy.get('#Form_getForm_NoOfEmployees').select(userdata.totalemployees)
        cy.wait(8000)
        


    })


})