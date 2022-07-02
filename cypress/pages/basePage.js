const basePage = {
    baseUrl: 'https://corecode-qa-bootcamp-site.herokuapp.com/',
  
    /**
     * wrapper for visit so we can use relative urls and append them to baseUrl
     * @param  {string} relativeUrl
     */
    goto (relativeUrl = '') {
      cy.visit(`${this.baseUrl}${relativeUrl}`)
    }
  }
  export default basePage