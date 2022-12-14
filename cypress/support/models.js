import { modelSURL, comparePageUrl } from "./authentication.constant";

var data = require('../fixtures/modelsPage.json')
var comparePage = require('../fixtures/comparePage.json')

export class ModelS{

urlVerification(){

    cy.wait(1000)
    cy.contains('Model S').click()
    cy.url().should('eq', modelSURL)

}

privacy_Verification(){
    cy.scrollTo('bottomLeft')

    cy.get('[class="tds-link tcl-link"]').each(($el, index)=>{

        const text = $el.text()
        expect(text).to.contain(data.ModelS[index])

    })
}

modelScomparePage() {
    cy.wait(1000)
    cy.get('[href="/compare"]').click()
    cy.wait(1000)
    cy.url().should('eq', comparePageUrl)
    cy.scrollTo('bottomLeft')

    cy.get('[class="tds-text--caption tcl-compare-models__item-title"]').each(($el, index) => {
        const text = $el.text()
        expect(text).to.contain(comparePage.comparePageText[index])
    })
}

}

export const onModelSPage = new ModelS;