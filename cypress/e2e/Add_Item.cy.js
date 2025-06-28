import LoginPage from "../support/Object/LoginPage";
import InventoryPage from "../support/Object/InventoryPage";
import CartPage from "../support/Object/CartPage";

describe('Cart Test', () => {
  it('Add item to cart', () => {
    LoginPage.visit()
    LoginPage.checkloginForm()
    LoginPage.validUser()
    LoginPage.succesLogin()

    InventoryPage.checkInventory()
    InventoryPage.addProduct()
    InventoryPage.chartPage()
    CartPage.verifyItem()
    
  })
})