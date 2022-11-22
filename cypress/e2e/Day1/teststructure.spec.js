/// <reference types="cypress" />

describe('Dev-864', ()=>{ //you can do describe.only if you want to run only these test cases

    beforeEach('Before each method',()=>{

    })

    afterEach('After each method',()=>{

    })

    it('#AC1 Test',()=>{ //you can do it.only to run only this specific test

    })

    it('#AC2 Test',()=>{ //you can do it.skip to skip this specific test
        
    })

    it('#AC3 Test',()=>{
        
    })
})

describe('Dev-865', ()=>{ //you can do describe.skip if you want to disregard all of these test cases under this describe

    before('Before method', ()=>{

    })

    after('After method',()=>{

    })

    it('#AC1 Test',()=>{

    })

    it('#AC2 Test',()=>{
        
    })
})