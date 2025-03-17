describe("Swagger UI API ", () => {
    it("get API request", () => {
      cy.request("GET", "https://petstore.swagger.io/#/store/getInventory").then(
        (response) => {
          expect(response.status).equal(200);
        }
      );
    });
  
    it("Order success verification", () => {
      const data = {
        id: 1,
        petId: 10,
        quantity: 1,
        shipDate: "2025-01-09T010:48:22.219Z",
        status: "placed",
        complete: true,
      };
  
      cy.request({
        method: "POST",
        url: "https://petstore.swagger.io/v2/store/order",
        body: data,
        headers: {
          "Content-Type": "application/json",
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.be.oneOf([200, 201]);
        //expect(response.body.id).to.equal(data.id);
      });
      cy.request({
        method: "GET",
        url: "https://petstore.swagger.io/v2/store/order/1",
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(404);
        //expect(response.body).to.have.property('id', 1); // Use only if 'id' is present in the body.
       // expect(response.body.id).to.equal(1);
      });
    });
    it("get the order by id", () => {
      cy.request("GET", "https://petstore.swagger.io/#/store/getOrderById").then(
        (response) => {
          expect(response.status).equal(200);
        }
      );
    });
  
    it("Verify the Successful Users Creation", () => {
      const users = [
        {
          id: 1,
          username: "Pavithra",
          firstName: "A",
          lastName: "shiva",
          email: "pavithraa2017@gmail.com",
          password: "Synergy$7z",
          phone: "9789376668",
          userStatus: 0,
        },
      ];
    
      cy.request({
        method: "POST",
        url: "https://petstore.swagger.io/v2/user/createWithList",
        body: users,
        headers: {
          "Content-Type": "application/json",
        },
        failOnStatusCode: false,
      }).then((response) => {
        console.log(response.body);  
        expect(response.status).to.be.oneOf([200, 201]);
        expect(response.body).to.have.property("message", "ok");
        
        //expect(response.body.username).to.equal(users[0].username);  
      });
      it("Update user",()=>{
        
        
        cy.request({
          method: "PUT",
          url: "https://petstore.swagger.io/v2/user/jack",
          body: {
            id: 1,
            username: "Pavi",
            firstName: "Pavithra",
            lastName: "2017",
            email: "pavithraa2017@gmail.com",
            password: "pavi@1234",
            phone: "9789376668",
            userStatus: 1
          }
        })
          cy.request({
            method: "GET",
            url: "https://petstore.swagger.io/v2/user/jack"
          }).then((Res) => {
            expect(Res.status).to.equal(200);  
            expect(Res.body.firstName).to.equal('pavi'); 
            expect(Res.body.id).to.equal(1) 
          });
        });

        cy.request({
            method: "POST",
            url: "https://petstore.swagger.io/v2/user/jack",
            body: users,
            headers: {
              "Content-Type": "application/json",
            },
            failOnStatusCode: false,
          }).then((response) => {
            console.log(response.body);  
            expect(response.status).to.be.oneOf([200, 405]);
           // expect(response.body).to.have.property("message", "ok");
            expect(response.body.username).to.equal(users[0].pavi);  
          });
    });
    it('User Login',()=>{
      cy.request({
        method:"GET",
        url:"https://petstore.swagger.io/v2/user/login?username=pavi&password=Synergy$7z"
      }).then((res)=>{
        expect(res.status).to.equal(200)
      })
    })
    it("User Logout",()=>{
      cy.request({
        method:"GET",
        url:"https://petstore.swagger.io/v2/user/logout?username=pavi&password=Synergy$7z"
      }).then((res)=>{
        expect(res.status).to.equal(200)
      })
    })
    
    });