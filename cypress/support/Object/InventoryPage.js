class InventoryPage {
    addProduct() {
        const indexes = [1, 2, 3, 4]

        indexes.forEach((i) => {
            cy.get('.inventory_item').eq(i).within(() => {
            cy.contains('ADD TO CART').click()
        })
        })
        
    }

    chartPage() {
        cy.get('.shopping_cart_link').click()

    }

    filterProduct() {
        cy.get('.product_sort_container').select('Name (Z to A)')
        cy.wait(500)
        cy.get('.product_sort_container').select('Name (A to Z)')
        cy.wait(500)
        cy.get('.product_sort_container').select('Price (low to high)')
        cy.wait(500)
        cy.get('.product_sort_container').select('Price (high to low)')
        cy.wait(500)
    }

    checkInventory() {
        cy.get('.inventory_item_img').should('be.visible')
        cy.get('.inventory_item_name').should('be.visible')
        cy.get('.inventory_item_desc').should('be.visible')
        cy.get('.inventory_item_price').should('be.visible')
        cy.contains('ADD TO CART').should('be.visible')
    }
}

export default new InventoryPage