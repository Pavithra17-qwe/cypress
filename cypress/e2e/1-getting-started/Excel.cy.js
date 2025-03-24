describe("Data Driven Testing Using Excel File", () => {
  let excelData;

  before(() => {
    // Read data from Excel file using Cypress task
    cy.task("parseXlsx", { filepath: "cypress/fixtures/excelData.xlsx" }).then((data) => {
      excelData = data; // Store parsed JSON data
    });
    cy.visit('https://angular-7-registration-login-example.stackblitz.io/login?returnUrl=%2F');
         cy.wait(5000)
         cy.get('span').click()
  });

  it("Data Driven: Register User", function () {
    // Loop through each row of data from Excel
    excelData.forEach((row) => {
      cy.visit('https://angular-7-registration-login-example.stackblitz.io/login?returnUrl=%2F');
      cy.wait(5000);
      cy.get('.btn-link').click();
     
      // Visit the registration page
      cy.visit("https://angular-7-registration-login-example.stackblitz.io/register");
    

      cy.get('input[formcontrolname="firstName"]').clear().type(row.firstName);
      cy.get('input[formcontrolname="lastName"]').clear().type(row.lastName);
      cy.get('input[formcontrolname="username"]').clear().type(row.username);
      cy.get('input[formcontrolname="password"]').clear().type(row.password);

      // Click Register button
      cy.get('.btn-primary').click();

      // Verify success message
      cy.get(".alert-success").should("contain.text", row.message);
    });
  });
});

