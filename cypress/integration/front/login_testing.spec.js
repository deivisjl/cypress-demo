import loginPage from "../../pages/loginPage";

describe('Login page', ()=>{
    beforeEach(()=>{
        loginPage.goto('login.php')
    })

    afterEach(()=>{
        loginPage.logout()
    })

    it('should navigate at home page', ()=>{
        loginPage.doLogin()
        loginPage.homePage().should('have.text','Sistema de Inventario')
    })
})