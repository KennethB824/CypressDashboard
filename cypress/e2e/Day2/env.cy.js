const { data } = require('cypress/types/jquery')
var url = require('../../fixtures')

if(Url.include('staging')){
    cy.fixture('staging.json').then((url)=>{
        data.username()
        data.password()
        data.url()
    })
}else if(Url.include('uat')){
    cy.fixture('uat.json').then((url)=>{

    })
}else if(Url.include('prod')){
    cy.fixture('prod.json').then((url)=>{

    })
}