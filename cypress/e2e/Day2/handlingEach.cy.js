
var data = require('../../fixtures/staging.json')

describe('Handling each function', () =>{

    before(function(){
            cy.visit('https://opensource-demo.orangehrmlive.com/')
            cy.get('[name="username"]').clear().type('Admin')
            cy.get('[name="password"]').clear().type('admin123')
            cy.get('[type="submit"]').click();
    })

    it('Testing each text', ()=>{
            cy.get('[class="oxd-grid-item oxd-grid-item--gutters orangehrm-quick-launch-card"]').each((element, index)=>{

                console.log('element: ', element.text());
                const text = element.text()

                expect(text).to.contain(data.quickLaunch[index])
            })
    })


})
//left video at 1.23.20