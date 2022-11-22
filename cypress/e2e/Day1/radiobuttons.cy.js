/// <reference types="cypress" />

import {URL} from '../../support/authentication'

describe('checkboxes testing', () => {

    beforeEach('opening the URL', () => {
        cy.visit(URL)
    })

    it('Radio button tests', ()=> {
        
    
        //the below line gets a list of elements and we're adding them as an array to the parameter with the name radioButtons
        cy.get('[type="radio"]').then(radioButtons =>{ 
            // cy.wrap(radioButtons).first()
            // .check()
            // .should('be.checked')


            for(var i = 0; i <= radioButtons.length - 1; i++){
                cy.wrap(radioButtons).eq(i) //wrap makes it go one by one and we're specifying it with equal (eq) and i with the loop
                .check({force:true})
                .should('be.visible')
                cy.wait(500)
                console.log(i);
            }
        })

    })

    
})