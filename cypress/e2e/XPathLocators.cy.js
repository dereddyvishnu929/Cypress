

describe('CSS Selector', () => {

    it('css selector', () =>
    {
        // Launching the application
        cy.visit("http://www.automationpractice.pl/index.php")

        //finding element and psssing input field
        cy.xpath('//input[@id="search_query_top"]').type("T-Shirts")

        // Clicking search button
        cy.xpath('//button[@name="submit_search"]').click()

         // Assertion
        cy.xpath("//span[@class='lighter']").contains('T-Shirts')

    })

})