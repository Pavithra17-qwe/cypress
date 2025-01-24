describe('My First Test', () => {
  it('verify title +ve', () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/");
      cy.title().should('eq', 'OrangeHRM');  // Positive case: Title should be 'OrangeHRM'
  });

  it('verify title -ve', () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/");
      cy.title().should('eq', 'OrangeHRM123');  // Negative case: Title should NOT be 'OrangeHRM123' (this will fail)
  });
});

    