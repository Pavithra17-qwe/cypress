
import 'cypress-downloadfile/lib/downloadFileCommand';


  describe('My First Test', () => {
    it('File download test', function() {
        // Download file and save to 'mydownloads' folder with filename 'example.jpg'
        cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg', 'mydownloads', 'example.jpg');
    });
});