export class NavigationPage{
   
    private searchFieldClass: string;  
    private selectAndClickClass: string;
    private verifyTitleByIdClass: string;


    constructor(){
        this.searchFieldClass = '.si-field__placeholder';
        this.selectAndClickClass = '[class="si-ellipsed ng-star-inserted"]';
        this.verifyTitleByIdClass = '[title="Product Code"]';
    }

    NavigateToWeb(url: string){
        cy.visit(url);
        cy.wait(2000)
    }

    SearchField(productCode: string|number) {
        cy.get(this.searchFieldClass)
        .type(`${productCode}{enter}`);
    }
    
    SelectClick() {
        cy.get(this.selectAndClickClass)
        .parents('ul')
        .click()
    }

    VerifyTitleById(productCode: string|number) {
    cy.get(this.verifyTitleByIdClass) 
    .parents('div') 
    .should('contain',productCode) 
    }

}

export const navigateTo = new NavigationPage() 
