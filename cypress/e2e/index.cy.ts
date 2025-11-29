describe('Home Page', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should load successfully', () => {
        cy.url().should('eq', Cypress.config().baseUrl + '/')
    })

    it('should display the header with navigation links', () => {
        cy.contains('Home').should('be.visible')
        cy.contains('Resume').should('be.visible')
    })

    it('should display the ID card with correct information', () => {
        cy.get('[data-test-id="id-card-text"]')
            .contains('Zach Nahman')
            .should('be.visible')
        cy.contains('Senior Software Engineer').should('be.visible')
        cy.contains('He/Him/His').should('be.visible')
    })

    it('should display the "hello world" section header', () => {
        cy.contains('hello world').should('be.visible')
    })

    it('should display introduction paragraph with Workday link', () => {
        cy.contains('I am a Senior Software Engineer at').should('be.visible')
        cy.get('a[href="https://www.workday.com"]')
            .should('be.visible')
            .and('contain', 'Workday')
    })

    it('should display links to Colorado School of Mines', () => {
        cy.get('a[href="https://www.mines.edu"]')
            .should('be.visible')
            .and('contain', 'Colorado School of Mines')
    })

    it('should navigate to resume page when clicking Resume link', () => {
        cy.contains('Resume').click()
        cy.url().should('include', '/resume')
        cy.contains('Education:').should('be.visible')
    })

    it('should have footer', () => {
        cy.contains('View my LinkedIn').should('exist')
    })

    it('should have proper page styling', () => {
        cy.get('body').should('have.css', 'background-color', 'rgb(33, 34, 34)')
    })
})
