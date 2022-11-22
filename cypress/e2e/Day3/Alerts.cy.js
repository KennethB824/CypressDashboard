describe('Javascript Alerts Testing',()=>{

    beforeEach('Visit the page', () =>{
        cy.visit('http://practice.cybertekschool.com/javascript_alerts')
    })

    it ('Handling JS Alert - Validate Alert text and click OK',()=>{

        cy.get('[onclick="jsAlert()"]').click()

        cy.on('window:alert',(str)=>{
            expect(str).to.equal('I am a JS Alert')
        })

        cy.get('#result').should('have.text', 'You successfully clicked an alert')

    })

    it ('Handling JS Confirm - Click OK',()=>{

        cy.get('[onclick="jsConfirm()"]').click()

       cy.on('window:confirm',(str)=>{
        expect(str).to.equal("I am a JS Confirm")
       })

       cy.on('window:confirm',()=>true) //click OK
       cy.get('#result').should('have.text','You clicked: Ok')
    })

    it ('Handling JS Confirm - Click Cancel',()=>{

        cy.get('[onclick="jsConfirm()"]').click()

       cy.on('window:confirm',(str)=>{
        expect(str).to.equal("I am a JS Confirm")
       })

       cy.on('window:confirm',()=>false) //click Cancel
       cy.get('#result').should('have.text','You clicked: Cancel')
    })

    it ('Handling JS Prompt - Input text in prompt, Click OK and Validate the input text',()=>{

        cy.window().then(($window)=>{
            cy.stub($window,'prompt').returns('Hello hello what is going on')
            cy.get('[onclick="jsPrompt()"]').click()
        })

       cy.get('#result').should('have.text','You entered: Hello hello what is going on')
    })

})