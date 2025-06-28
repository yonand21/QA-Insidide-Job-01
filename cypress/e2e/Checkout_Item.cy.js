import LoginPage from "../support/Object/LoginPage"
import InventoryPage from "../support/Object/InventoryPage"
import CartPage from "../support/Object/CartPage"
import CheckoutPage from "../support/Object/CheckoutPage"

describe('UI Test', () => {
  it('passes', () => {
    cy.visit('https://www.saucedemo.com/v1/')
    cy.viewport('macbook-15')
    cy.wait(500)
    cy.viewport('macbook-13')
    cy.wait(500)
    cy.viewport('macbook-11')
    cy.wait(500)
    cy.viewport('ipad-2')
    cy.wait(500)
    cy.viewport('ipad-mini')
    cy.wait(500)
    cy.viewport('iphone-x')
    cy.wait(500)
    cy.viewport('samsung-s10')
    cy.wait(500)
    cy.viewport('macbook-15')

    LoginPage.checkloginForm()

    LoginPage.validUser()
    LoginPage.succesLogin()

    InventoryPage.checkInventory()
    InventoryPage.filterProduct()
    InventoryPage.addProduct()
    InventoryPage.chartPage()

    CartPage.verifyItem()
    CartPage.clickCheckout()

    CheckoutPage.checkinfoForm()
    CheckoutPage.fillForm()
    CheckoutPage.clickContinue()
    CheckoutPage.checkOverview()
    CheckoutPage.clickFinish()
    
  })
})