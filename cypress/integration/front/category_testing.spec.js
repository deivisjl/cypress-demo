import categoryPage from "../../pages/categoryPage";

describe('Category page', ()=>{
    beforeEach(()=>{
        categoryPage.goto('login.php')
    })

    afterEach(()=>{
        
    })

    it('should navigate at category page', ()=>{
        categoryPage.doLogin()
        categoryPage.navigateToCategories()
        categoryPage.searchText()
                .should(($h4) =>{
                    expect($h4).to.have.length(3)
                    const text = $h4[0]
                    expect(text).to.have.text(' Buscar Categorías')
                })
    })

    it('should can save new category',()=>{
        categoryPage.doLogin()
        categoryPage.navigateToCategories()
        categoryPage.openFormNewCategory()
        categoryPage.succeededMessageText().should('have.class', 'alert-success')
    })
})