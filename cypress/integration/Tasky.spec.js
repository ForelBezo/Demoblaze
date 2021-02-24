
describe('Create Account using API', () => {
    it('BlazeDemo', () => {
        const  password = "ForelQareTest"
        let  base64Password = Buffer.from(password).toString('base64')
        
        cy.task('createAccount', { email: 'Jinnette', password: base64Password})
        .then(creationStatus =>{
            cy.log(creationStatus)
        })
    });

    it('logIn', () => {
        cy.visit('https://www.demoblaze.com/')
        cy.get('#login2').click()
        cy.wait(2000)
        cy.fixture('login').then((login) => {
            cy.get('#loginusername').type(login.username,{ delay: 200 })
            cy.get('#loginpassword').type(login.password,{ delay: 100 })
        })
        /*cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.wait(2000)
        cy.contains('Welcome Jinnette').should('be.visible')
        cy.contains("Laptops").click({force:true})
        cy.get('[href="prod.html?idp_=15"]').eq(1).click()
        cy.url().should('contain','prod.html?idp_=15')
        cy.contains('Add to cart').click()
        cy.wait(2000)
        cy.get('#cartur').click()
        cy.contains('MacBook Pro').should('be.exist')
        cy.contains('Delete').click()
        cy.contains('MacBook Pro').should('be.invisible')
        cy.get('#logout2').click()*/
    })

})

/*
let faker = require('faker')
describe('Create Account using API', () => {
    it('BlazeDemo', () => {
        const username = faker.internet.email()
        const password = 'azerty123*'
        let base64Password = Buffer.from(password).toString('base64')
        cy.task('createAccount', { email: username, password: base64Password })
        .then(creationStatus => {
            cy.log(creationStatus)
            //Ici vérifier qu'on peut se connecter avec succès avec l'utilisateur
            //Avec les identitfiants username && password
        })
   });
})*/ 
