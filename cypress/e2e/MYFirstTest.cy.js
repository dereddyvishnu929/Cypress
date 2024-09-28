describe('MyFirstTest', () =>
{
    it('Verify title Positive Test',() =>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq','OrangeHRM')
    })

    it('Verify title Negative Test',() =>
        {
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
            cy.title().should('eq','OrangeHRM123')
        })
})