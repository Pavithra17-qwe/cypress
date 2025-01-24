import FormPage2 from '../../Page_object/FormPage2';

describe('Automate FormPage 2', () => {
  const formPage2 = new FormPage2();

  before(() => {
    cy.fixture('FormPage2').as('FormData2');
  });

  it('Fills and submits the registration form', function () {
    formPage2.visitForm();
    formPage2.fillFirstName(this.FormData2.firstName);
    formPage2.fillLastName(this.FormData2.lastName);
    formPage2.selectGender(this.FormData2.gender);
    formPage2.selectHobbies(this.FormData2.hobbies);
    formPage2.selectDepartment(this.FormData2.department);
    formPage2.fillUsername(this.FormData2.username);
    formPage2.fillPassword(this.FormData2.password);
    formPage2.fillEmail(this.FormData2.email);
    formPage2.fillContactNo(this.FormData2.contactNo);
    formPage2.submitForm();
  });
});
