//cypress library. might not need this line all the time because it might be in cypress.config.js file
<reference types="cypress" />

//visit
cy.visit('open url')
cy.visit('url', {timeout : 10000})

//should is promise
cy.url().should('include','someword')

//finding the element
cy.get(locator).click()
cy.get(anotherlocator).should('be.visible')
cy.get(locatoragain).should('be.exist')

//negative ones
cy.get(locator).should('not.be.visible')
cy.get(locator).should('not.be.exist')

cy.get('h1').should('have.length',3)
cy.get('h1').should('have.text','somemorewords')
cy.get('h1').should('have.value','cypress')

//parent to child
cy.get(loc).first()
cy.get(loc).last()
cy.get(loc).eq(3).click() //gets the 3rd index

cy.go('back')
cy.get('tbody tr ').nextAll.click({multiple:true}) //if there's 10 elements, it'll click all of them one by one
//if line 30 clicks take you to another page. implement line 29 "back" so it can send you back to original page

cy.get(locator).prev.click();
cy.get(locator).prevAll.click({multiple:true});

//hover handling
cy.get(locator).trigger('mouseover').click();
cy.get(locator).trigger('mouseup').click();

cy.get('#username').clear().type('username');
