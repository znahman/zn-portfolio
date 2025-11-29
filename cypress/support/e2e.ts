// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Handle React hydration errors that can occur in production builds
// React error #418: Hydration failed because the initial UI does not match what was rendered on the server
Cypress.on('uncaught:exception', err => {
    // Check if it's a React error #418 (hydration error)
    if (err.message.includes('Minified React error #418')) {
        // Return false to prevent the test from failing
        return false
    }
    // Check if it's a React error #423 (another hydration-related error)
    if (err.message.includes('Minified React error #423')) {
        return false
    }
    // Let other errors fail the test
    return true
})
