
var data = require('../../fixtures/states.json')
describe('Dropdown Testing',()=>{

    it ('State Selection',()=>{

        cy.visit('http://practice.cybertekschool.com/dropdown')

        cy.get('[id="state"] > option').each(($el,index)=>{

            const text = $el.text()

            expect(text).to.contain(data.states[index])

            cy.get('[id="state"]').select($el.text()).should('be.visible')
        })

    })

    it ('Select birthday', ()=>{

        cy.visit('http://practice.cybertekschool.com/dropdown')

        cy.get('[id="year"]').select("2009").should('be.visible')
        cy.get('[id="month"]').select("June").should('be.visible')
        cy.get('[id="day"]').select("26").should('be.visible')
    })

})