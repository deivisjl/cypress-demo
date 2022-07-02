import basePage from './basePage'
const { faker } = require('@faker-js/faker');

const categoryPage = {
  inputUsername: '[name=user_name]',
  inputPassword: '[name=user_password]',
  btnLogin: '[type=submit]',

  categoryLink: 'a[href="categorias.php"]',
  searchCategoryText: 'h4',

  btnNewCategory: 'button[data-target="#nuevoCliente"]',
  inputNameCategory: 'input[name="nombre"]',
  inputDescriptionCategory: 'textarea[name="descripcion"]',
  btnSaveCategory: 'button[id="guardar_datos"]',
  succeededMessage: 'div[role="alert"]',

  btnLogout: 'a[href="login.php?logout"]',
  closeModal: 'button[class="close"]',

  doLogin(){
    cy.get(this.inputUsername).type('corecodeqa')
    cy.get(this.inputPassword).type('Corecode2022!')
    cy.get(this.btnLogin).click()
  },

  navigateToCategories(){
    cy.get(this.categoryLink).click()
  },

  searchText(){
      return cy.get(this.searchCategoryText)
  },

  openFormNewCategory(){
    const randomCategoryName = faker.commerce.product();
    const randomCategoryDescription = faker.hacker.phrase();

    cy.get(this.btnNewCategory).click()
    cy.get(this.inputNameCategory).type(randomCategoryName)
    cy.get(this.inputDescriptionCategory).type(randomCategoryDescription)
  },

  succeededMessageText(){
    cy.get(this.btnSaveCategory).click()
    return cy.get(this.succeededMessage)
  },

  logout(){
    cy.get(this.closeModal).click()
    cy.get(this.btnLogout).click()
  },
}
export default { ...basePage, ...categoryPage }