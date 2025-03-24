class TeamPage {
    visit() {
      cy.visit('https://qaoncloud.com/dmax_staging/team_dmax_table');
    }
  
    selectMonth(month) {
      cy.get('#month').select(month);
    }
  
    selectYear(year) {
      cy.get('#year').select(year);
    }
  
    selectProject(project) {
      cy.get('#project').select(project);
    }
  
    assertNoEmployeesMessage() {
      cy.contains('No employees found reporting to you.');
    }
  
    assertEmployeeDetails(employeeName) {
      cy.contains(employeeName);
    }
  
    clickTargetButton(employeeName) {
      cy.contains(employeeName).parent().find('.btn-info').click();
    }
  }
  
  export default TeamPage;
  