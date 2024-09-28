describe('CSS Selector', () => {

    it('css selector', () =>
    {
        // Launching the application
        cy.visit("http://www.automationpractice.pl/index.php")

        //finding element and psssing input field
        cy.get('#search_query_top').type("T-Shirts")   

        // Clicking search button
        cy.get('[name="submit_search"]').click()

        // Assertion
        cy.get('.lighter').contains("T-Shirts")
    })

})