describe('SignUpAPI', () => {

    it('Call API SignUp - Success', () => {
        //Generate fake data
        var username = cy.faker.name.firstName()
        var password = cy.faker.internet.password()

        //encoded Base64
        var encodedPassword = btoa(password);
        
        // Call Api SignUp
        cy.request({
            method: 'POST',
            url: 'https://api.demoblaze.com/signup',
            body: {
                username: username,
                password: encodedPassword
            }
        }).then((response) => {
          // Verification code status 200
            expect(response.status).to.equal(200)
        })
    })
})