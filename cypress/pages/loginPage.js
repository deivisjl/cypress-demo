import basePage from './basePage'

const loginPage = {
  inputUsername: '[name=user_name]',
  inputPassword: '[name=user_password]',
  btnLogin: '[type=submit]',

  homeText: 'a[class="navbar-brand"]',
  btnLogout: 'a[href="login.php?logout"]',

  doLogin(){
    cy.get(this.inputUsername).type('corecodeqa')
    cy.get(this.inputPassword).type('Corecode2022!')
    cy.get(this.btnLogin).click()
  },

  homePage(){
    return cy.get(this.homeText)
  },

  logout(){
    cy.get(this.btnLogout).click()
  },
}
export default { ...basePage, ...loginPage }