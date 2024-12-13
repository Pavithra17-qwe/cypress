
describe('Custom Commands Demo', function(){


  it('Student Login', function(){

      cy.logiin('student','Password123')
      cy.title().should('be.equal','Logged In Successfully | Practice Test Automation') //Valid

      //Data Driven

      cy.logiin('student','Password')
      cy.title().should('not.be.equal','Logged In Successfully | Practice Test Automation') //inValid

})

  it('Adding Student ', function(){
      cy.logiin('student','Password123')

      // Scripts to add new student
      cy.log('Adding a student..........')
  })

  
  it('Editing student', function(){

      cy.logiin('student','Password123')

      // Scripts to edit a student
      cy.log('Editing a student..........')     
  })
})


/*
//Customised login command
Cypress.Commands.add('logiin', (email, password) => {
      cy.visit('https://practicetestautomation.com/practice-test-login/')
      cy.get('#username').type(email)
      cy.get('#password').type(password)
      cy.get('#submit').click()
})
       */