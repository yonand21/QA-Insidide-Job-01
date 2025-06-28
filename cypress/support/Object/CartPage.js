class CartPage {
    clickCheckout() {
        cy.contains('CHECKOUT').click()
    }

    removeItem() {
        cy.get('.cart_item').each(($e1) => {
            cy.wrap($e1).within(() => {
                cy.contains('REMOVE').click()
            })
        })
    }

    verifyItem() {
        cy.get('.cart_list').should('be.visible')
    }

    verifyremoveItem() {
        cy.get('.cart_item').should('not.exist')
    }
}

export default new CartPage