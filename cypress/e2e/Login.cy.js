import LoginPage from "../support/Object/LoginPage"

describe('Login Test', () => {
  it('Login with valid username and password', () => {
    LoginPage.visit()
    LoginPage.checkloginForm()
    LoginPage.validUser()
    LoginPage.succesLogin()
  })
})