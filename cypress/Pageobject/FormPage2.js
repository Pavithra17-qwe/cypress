import 'cypress-file-upload';

class FormPage2 {
  visitForm() {
    cy.visit('https://mytestingthoughts.com/Sample/home.html');
  }

  fillFirstName(firstName) {
    cy.get('input[placeholder="First Name"]').type(firstName);
  }

  fillLastName(lastName) {
    cy.get('input[placeholder="Last Name"]').type(lastName);
  }

  selectGender(gender) {
    cy.get(`input[value="${gender}"]`).check();
  }

  selectHobbies(hobbies) {
    // Select multiple options in the dropdown
    cy.get('#exampleFormControlSelect2').select(hobbies); 
  }
  
  selectDepartment(department) {
    // Assuming department names like 'Department of Engineering' are present with matching values
    cy.get('select[name="department"]').select('Department of Engineering');
  }
  
  
  
  fillUsername(username) {
    cy.get('input[placeholder="Username"]').type(username);
  }

  fillPassword(password) {
    cy.get('input[placeholder="Password"]').type(password);
    cy.get('input[placeholder="Confirm Password"]').type(password);
  }

  fillEmail(email) {
    cy.get('input[placeholder="E-Mail Address"]').type(email);
  }

  fillContactNo(contactNo) {
    // Select the input field by its name attribute and ensure it is visible
    cy.get('input[name="contact_no"]').should('be.visible').type(contactNo);
  }
  
  submitForm() {
    cy.get('button[type="submit"]').click();
  }
}

export default FormPage2;
