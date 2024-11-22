describe('Alerts',()=>{

    it('Simple Alert',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
        cy.get("button[onclick='jsAlert()']").click()

        cy.on('window:alert',(t)=>{ // t is the alert
            expect(t).to.contains('I am a JS Alert')
        })    

    })

    it('confirm Alert',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
        cy.get("button[onclick='jsConfirm()']").click()
 
        cy.on('window:confirm',(t)=>{ // t is the alert
            expect(t).to.contains('I am a JS Confirm')
        })   

    })

    it('confirm Alert',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
        cy.get("button[onclick='jsConfirm()']").click()
 
        cy.on('window:confirm',(t)=>{ // t is the alert
            expect(t).to.contains('I am a JS Confirm')
        })  

        cy.on('window:confirm',()=> false); //this will click cancel btn
        
    })

    it('prompt Alert',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
 
    
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('Hi')
        })
        
        cy.get("button[onclick='jsPrompt()']").click()
        cy.get("#result").should('have.text','You entered: Hi')
  

    })

})