describe('404 Page', () => {
  beforeEach(() => {
    // Visit a non-existent route to trigger the 404 page
    cy.visit('/non-existent-page', { failOnStatusCode: false })
  })

  it('should load the 404 page for non-existent routes', () => {
    cy.url().should('include', '/non-existent-page')
    cy.contains('Preview custom 404 page').should('be.visible').click()
    cy.contains('404: not found').should('be.visible')
    cy.contains("You just hit a route that doesn't exist :(").should('be.visible')
  })
})

