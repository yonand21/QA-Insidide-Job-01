import LoginPage from "../support/Object/LoginPage"

describe('Negative Login Test', () => {
  it('Login with wrong username and password', () => {
    LoginPage.visit()
    LoginPage.checkloginForm()
    LoginPage.invalidUser()
    LoginPage.UnsuccesLogin()
  })
})