import { teslaURL } from "../../support/authentication.constant"
import { onModelSPage } from "../../support/models"

describe('Tesla.com automation testing',() => {

    beforeEach('Navigate to page tesla.com', ()=>{
        cy.visit(teslaURL)
    })

    it ('Test One', ()=>{
    
        onModelSPage.urlVerification()
        onModelSPage.privacy_Verification()

    })

    it ('Compare Test', () =>{
        onModelSPage.urlVerification()
        onModelSPage.modelScomparePage()
    })

})