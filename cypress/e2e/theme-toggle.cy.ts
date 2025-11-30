describe('Theme Toggle', () => {
    beforeEach(() => {
        // Clear localStorage before each test
        cy.clearLocalStorage()
        cy.visit('/')
    })

    it('should display the theme toggle button', () => {
        cy.get('[data-testid="theme-toggle"]').should('be.visible')
        cy.get('[data-testid="theme-toggle"]').should('contain', 'Light')
    })

    it('should start in dark mode by default', () => {
        cy.get('body').should('have.css', 'background-color', 'rgb(33, 34, 34)')
        cy.get('[data-testid="theme-toggle"]').should('contain', 'Light')
        cy.get('[data-testid="theme-toggle"]').should('contain', '☀️')
    })

    it('should switch to light mode when clicked', () => {
        // Verify starting in dark mode
        cy.get('body').should('have.css', 'background-color', 'rgb(33, 34, 34)')

        // Click the toggle button
        cy.get('[data-testid="theme-toggle"]').click()

        // Wait for the theme to change
        cy.wait(100)

        // Verify light mode
        cy.get('body').should(
            'have.css',
            'background-color',
            'rgb(245, 245, 245)'
        )
        cy.get('[data-testid="theme-toggle"]').should('contain', 'Dark')
        cy.get('[data-testid="theme-toggle"]').should('contain', '🌙')
    })

    it('should toggle back to dark mode', () => {
        // Switch to light mode
        cy.get('[data-testid="theme-toggle"]').click()
        cy.wait(100)
        cy.get('body').should(
            'have.css',
            'background-color',
            'rgb(245, 245, 245)'
        )

        // Switch back to dark mode
        cy.get('[data-testid="theme-toggle"]').click()
        cy.wait(100)

        // Verify dark mode
        cy.get('body').should('have.css', 'background-color', 'rgb(33, 34, 34)')
        cy.get('[data-testid="theme-toggle"]').should('contain', 'Light')
    })

    it('should persist theme preference in localStorage', () => {
        // Switch to light mode
        cy.get('[data-testid="theme-toggle"]').click()
        cy.wait(100)

        // Check localStorage
        cy.window().then(win => {
            expect(win.localStorage.getItem('theme')).to.equal('light')
        })

        // Switch back to dark mode
        cy.get('[data-testid="theme-toggle"]').click()
        cy.wait(100)

        // Check localStorage again
        cy.window().then(win => {
            expect(win.localStorage.getItem('theme')).to.equal('dark')
        })
    })

    it('should maintain theme preference after page reload', () => {
        // Switch to light mode
        cy.get('[data-testid="theme-toggle"]').click()
        cy.wait(100)
        cy.get('body').should(
            'have.css',
            'background-color',
            'rgb(245, 245, 245)'
        )

        // Reload the page
        cy.reload()

        // Verify light mode is maintained
        cy.get('body').should(
            'have.css',
            'background-color',
            'rgb(245, 245, 245)'
        )
        cy.get('[data-testid="theme-toggle"]').should('contain', 'Dark')
    })

    it('should maintain theme when navigating between pages', () => {
        // Switch to light mode
        cy.get('[data-testid="theme-toggle"]').click()
        cy.wait(100)
        cy.get('body').should(
            'have.css',
            'background-color',
            'rgb(245, 245, 245)'
        )

        // Navigate to resume page
        cy.contains('Resume').click()
        cy.url().should('include', '/resume')

        // Verify light mode is maintained
        cy.get('body').should(
            'have.css',
            'background-color',
            'rgb(245, 245, 245)'
        )
        cy.get('[data-testid="theme-toggle"]').should('contain', 'Dark')

        // Navigate back to home
        cy.contains('Home').click()
        cy.url().should('eq', Cypress.config().baseUrl + '/')

        // Verify light mode is still maintained
        cy.get('body').should(
            'have.css',
            'background-color',
            'rgb(245, 245, 245)'
        )
    })

    it('should update text colors when switching themes', () => {
        // Check dark mode text color (white)
        cy.get('body').should('have.css', 'color', 'rgb(255, 255, 255)')

        // Switch to light mode
        cy.get('[data-testid="theme-toggle"]').click()
        cy.wait(100)

        // Check light mode text color (dark)
        cy.get('body').should('have.css', 'color', 'rgb(33, 34, 34)')
    })

    it('should update header colors when switching themes', () => {
        // Check dark mode header (black background)
        cy.get('[data-testid="header"]').should(
            'have.css',
            'background-color',
            'rgb(0, 0, 0)'
        )

        // Switch to light mode
        cy.get('[data-testid="theme-toggle"]').click()
        cy.wait(100)

        // Check light mode header (white background)
        cy.get('[data-testid="header"]').should(
            'have.css',
            'background-color',
            'rgb(255, 255, 255)'
        )
    })
})
