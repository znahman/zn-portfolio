import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import ParagraphHeader from './paragraph-header'
import { ThemeProvider } from '../context/theme-context'

it('can render a paragraph header', async () => {
    render(
        <ThemeProvider>
            <ParagraphHeader title={'Test Header'} />
        </ThemeProvider>
    )

    expect(screen.getByText('Test Header')).toBeVisible()
})
