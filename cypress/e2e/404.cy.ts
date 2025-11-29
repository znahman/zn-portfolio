describe('404 Page', () => {
    beforeEach(() => {
        // Visit a non-existent route to trigger the 404 page
        cy.visit('/non-existent-page', { failOnStatusCode: false })
    })

    it('should display the 404 page header', () => {
        cy.contains('404: not found').should('be.visible')
    })

    it('should display the error message', () => {
        cy.contains("You just hit a route that doesn't exist :(").should(
            'be.visible'
        )
    })

    it('should display the header with navigation links', () => {
        cy.contains('Home').should('be.visible')
        cy.contains('Resume').should('be.visible')
    })

    it('should be able to navigate to home from 404 page', () => {
        cy.contains('Home').click()
        cy.url().should('eq', Cypress.config().baseUrl + '/')
        // Wait for the page to fully load and hydrate
        cy.wait(100)
        cy.contains('hello world', { timeout: 10000 }).should('be.visible')
    })

    it('should be able to navigate to resume from 404 page', () => {
        cy.contains('Resume').click()
        cy.url().should('include', '/resume')
        // Wait for the page to fully load and hydrate
        cy.wait(100)
        cy.contains('Education:', { timeout: 10000 }).should('be.visible')
    })

    it('should have footer', () => {
        cy.contains('View my LinkedIn').should('exist')
    })

    it('should have proper page styling', () => {
        cy.get('body').should('have.css', 'background-color', 'rgb(33, 34, 34)')
    })
})
