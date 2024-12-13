
describe('fileupload', ()=>{

    it('File upload test', ()=>{

        cy.visit("https://demo.automationtesting.in/Register.html")

        const myimagefile = "Puppy.jpg"
        cy.get('#imagesrc').attachFile('Puppy.jpg');

    })

    it('Mutiple file uploads', ()=>{

        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
        cy.get("#filesToUpload").attachFile(['example.json', 'orangehrm.json','Puppy.jpg']);
    })

})