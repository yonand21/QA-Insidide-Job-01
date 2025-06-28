class LoginPage {
    visit() {
        cy.visit('https://www.saucedemo.com/v1/')
    }

    fillUsername(username) {
        cy.get('[data-test="username"]').type(username)
    }

    fillPassword(password) {
        cy.get('[data-test="password"]').type(password)
    }

    clickButton() {
        cy.get('#login-button').click()

    }

    validUser() {
        cy.fixture('user').then((data) => {
            this.fillUsername(data.ValidUser.username)
            this.fillPassword(data.ValidUser.password)
            this.clickButton()
        })
    }

    invalidUser() {
        cy.fixture('user').then((data) => {
            this.fillUsername(data.InvalidUser.username)
            this.fillPassword(data.InvalidUser.password)
            this.clickButton()
        })
    }

    succesLogin() {
        cy.url().should('include', '/inventory.html')

    }

    UnsuccesLogin() {
        cy.get('[data-test="error"]').should('be.visible')
    }

    checkloginForm() {
        cy.get('[data-test="username"]').should('be.visible')
        cy.get('[data-test="password"]').should('be.visible')
        cy.get('#login-button').should('be.visible')
    }

}

export default new LoginPage