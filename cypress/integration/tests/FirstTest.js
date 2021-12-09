describe('My Test Suite', function(){
    it('Verify Title of The Page - positive', function(){
        cy.visit('https://demo.nopcommerce.com/')
        cy.title().should('eq', 'nopCommerce demo store')
    })

    it('Verify Title of The Page - negative', function(){
        cy.visit('https://demo.nopcommerce.com/')
        cy.title().should('eq', 'nopCommerce store')
    })
    
})