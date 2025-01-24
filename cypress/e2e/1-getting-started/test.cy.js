import 'cypress-file-upload';

describe('My First Test', () => {  // this ia a test suite
    it('File upload test', function() {   // this is one of the testcase
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
        const Imagefile = 'PNGImage.png';
        cy.get('#filesToUpload').attachFile(Imagefile);
     })

  })