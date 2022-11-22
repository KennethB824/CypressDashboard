/// <reference types="cypress" />

describe('checkboxes testing', () => {

    it('Checkbox testing', ()=> {
        
        cy.visit('http://practice.cybertekschool.com/checkboxes')

        cy.get('#box1').check().should('be.checked') //check works just like click for checkboxes and radio buttons

        cy.wait(1000)
        cy.get('[name="checkbox2"]').click().should('not.be.checked')

    })

    it('Checkbox testing for Iphone', ()=> {
        
        cy.visit('http://practice.cybertekschool.com/checkboxes')

        cy.viewport('iphone-xr') //changing the viewport to iphone. can do other ones.

        cy.get('#box1').check().should('be.checked') //check works just like click for checkboxes and radio buttons

        cy.wait(1000)
        cy.get('[name="checkbox2"]').click().should('not.be.checked')

    })

})