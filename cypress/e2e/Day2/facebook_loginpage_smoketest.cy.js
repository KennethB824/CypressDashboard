describe('Login Page Smoke Test',()=>{

    it('Negative testing right username wrong password', ()=>{

        cy.negative_password_test()
    })

    it('Negative testing wrong username right password', ()=>{

        cy.negative_username_test()
    })

    it('Negative testing wrong username wrong password',()=>{

        cy.negative_username_password_test()
    })

    it('Positive testing login',()=>{

        cy.login_positive_test()
    })

})