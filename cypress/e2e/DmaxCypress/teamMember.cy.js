
import LoginPage from '../../support/pages/LoginPage';
import TeamPage from '../../support/pages/TeamPage';

describe('Login and Target View Test with POM', () => {
  const loginPage = new LoginPage();
  const teamPage = new TeamPage();

  it('should login, navigate to the required page, and then handle Akyrian and Opus Clip selection', () => {
    // Login
    loginPage.visit();
    loginPage.login('DC6271', '6271'); 

    // After login, wait for the page to load and redirect to view_dscore
    cy.url().should('include', '/view_dscore'); 

    //  Click on the menu item 
    cy.get(':nth-child(1) > .menu-item > .fa-solid').click();  

    //  After redirection, visit the team_dmax_table page
    teamPage.visit();

    // Select a month
    teamPage.selectMonth('03'); // March

    // Select a year 
    teamPage.selectYear('2025');

    // Select the  project
    teamPage.selectProject('Akyrian');
    
    // Assert that the "No employees found reporting to you" message appears
    teamPage.assertNoEmployeesMessage();

    // ow select the "Opus Clip" project
    teamPage.selectProject('Opus Clip');
    
    // Assert that the employee details for "Opus Clip" are displayed
    teamPage.assertEmployeeDetails('Monisha 6271');  

    // Click the "eye icon" button to view targets
    teamPage.clickTargetButton('Monisha 6271'); 
    
    //  Verify if it redirects to the correct page
    cy.url().should('include', '/view_targets');
    cy.url().should('include', 'emp_id=DC6271');
    cy.url().should('include', 'month=March');
    cy.url().should('include', 'year=2025');
  });
});
