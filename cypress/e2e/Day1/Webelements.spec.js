/// <reference types="cypress" />

describe('Web elements', () => {

    //Tag name
    cy.get('input')

    //by ID - we can use # to represent ID
    cy.get('#radio1')

    //by class name - we can use . to represent class
    cy.get('.iCheck-helper')

    //by attribute name
    cy.get('[type]')

    //by attribute name and value
    cy.get('[name="abuse"]')

    //by class value - you can use this way or line 11
    cy.get('[class="iCheck-helper"]')

    //by tag name and attribute with value. In this example he gives a space between tag name(input) and attribute(name...)
    cy.get('input [name="abuse"]')

    //by two different attributes or more. Don't put spaces in between different attributes.
    cy.get('[name="abuse"][class="iCheck-helper"][style="position: absolute; opacity: 0;"]')

    //by text
    cy.contains('Blue').click()
})