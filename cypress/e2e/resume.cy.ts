describe('Resume Page', () => {
    beforeEach(() => {
        cy.visit('/resume')
    })

    it('should load successfully', () => {
        cy.url().should('include', '/resume')
    })

    it('should display the header with navigation links', () => {
        cy.contains('Home').should('be.visible')
        cy.contains('Resume').should('be.visible')
    })

    it('should display the Resume page header', () => {
        cy.contains('Resume').should('be.visible')
    })

    describe('Education Section', () => {
        it('should display Education section', () => {
            cy.contains('Education:').should('be.visible')
        })

        it('should display MS in Computer Science from CSM', () => {
            cy.contains('MS in Computer Science').should('be.visible')
            cy.contains('2017 - 2019').should('be.visible')
        })
    })

    describe('Work Experience Section', () => {
        it('should display Work Experience section', () => {
            cy.contains('Work Experience:').should('be.visible')
        })

        it('should display Senior Software Development Engineer at Workday', () => {
            cy.contains('Senior Software Development Engineer').should(
                'be.visible'
            )
            cy.contains('May 2024 - Present').should('be.visible')
        })
    })

    describe('Publications Section', () => {
        it('should display Publications section', () => {
            cy.contains('Publications:').should('be.visible')
        })

        it("should display Master's Thesis publication", () => {
            cy.contains(
                'Robot Learning for Loop Closure Detection and SLAM'
            ).should('be.visible')
            cy.contains("Master's Thesis: Zachary Nahman").should('be.visible')
        })
    })

    it('should navigate to home page when clicking Home link', () => {
        cy.contains('Home').click()
        cy.url().should('eq', Cypress.config().baseUrl + '/')
        cy.contains('hello world').should('be.visible')
    })

    it('should have footer', () => {
        cy.contains('View my LinkedIn').should('exist')
    })

    it('should have proper page styling', () => {
        cy.get('body').should('have.css', 'background-color', 'rgb(33, 34, 34)')
    })
})
