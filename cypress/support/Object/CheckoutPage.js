class CheckoutPage {
    fillForm() {
        cy.get('[data-test="firstName"]').type('abc')
        cy.get('[data-test="lastName"]').type('abc')
        cy.get('[data-test="postalCode"]').type('abc')
    }

    clickContinue() {
        cy.contains('CONTINUE').click()
    }

    clickFinish() {
        cy.contains('FINISH').click()
        cy.get('.complete-header').should('be.visible')

    }

    checkinfoForm() {
        cy.get('[data-test="firstName"]').should('be.visible')
        cy.get('[data-test="lastName"]').should('be.visible')
        cy.get('[data-test="postalCode"]').should('be.visible')
        cy.get('.btn_primary').should('be.visible')
        cy.get('.btn_primary').should('be.visible')
    }

    checkOverview() {
        cy.get('.cart_list').should('be.visible')
        cy.get('.summary_info').should('be.visible')
        cy.get('.summary_subtotal_label').should('be.visible')
        cy.get('.summary_tax_label').should('be.visible')
        cy.get('.summary_total_label').should('be.visible')
        cy.get('.btn_action').should('be.visible')
        cy.get('.cart_cancel_link').should('be.visible')
    }
}

export default new CheckoutPage