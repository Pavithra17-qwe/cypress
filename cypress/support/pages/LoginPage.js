class LoginPage {
    visit() {
      cy.visit('https://qaoncloud.com/dmax_staging/?next=%2Fdmax_staging%2Fregister');
    }
  
    fillUsername(username) {
      cy.get('input[name="username"]').type(username);
    }
  
    fillPassword(password) {
      cy.get('input[name="password"]').type(password);
    }
  
    submit() {
      cy.get('button[type="submit"]').click();
    }
  
    login(username, password) {
      this.fillUsername(username);
      this.fillPassword(password);
      this.submit();
    }
  }
  
  export default LoginPage;
  