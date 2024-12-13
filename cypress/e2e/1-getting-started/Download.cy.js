
describe("File Download", ()=>{

    it("image download",()=>{
        cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')
    })

})