import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import ThemeToggle from './theme-toggle'
import { ThemeProvider } from '../context/theme-context'
import userEvent from '@testing-library/user-event'

describe('ThemeToggle', () => {
    beforeEach(() => {
        // Clear localStorage before each test
        localStorage.clear()
    })

    it('can render the theme toggle button', async () => {
        render(
            <ThemeProvider>
                <ThemeToggle />
            </ThemeProvider>
        )

        const button = screen.getByTestId('theme-toggle')
        expect(button).toBeInTheDocument()
        expect(button).toHaveTextContent('Light')
    })

    it('toggles theme when clicked', async () => {
        render(
            <ThemeProvider>
                <ThemeToggle />
            </ThemeProvider>
        )

        const button = screen.getByTestId('theme-toggle')
        expect(button).toHaveTextContent('Light')

        await userEvent.click(button)

        expect(button).toHaveTextContent('Dark')
    })

    it('shows sun icon in dark mode and moon icon in light mode', async () => {
        render(
            <ThemeProvider>
                <ThemeToggle />
            </ThemeProvider>
        )

        const button = screen.getByTestId('theme-toggle')
        expect(button.textContent).toContain('☀️')

        await userEvent.click(button)

        expect(button.textContent).toContain('🌙')
    })
})
