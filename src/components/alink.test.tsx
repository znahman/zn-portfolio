import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ALink from './alink'
import React from 'react'
import { ThemeProvider } from '../context/theme-context'

it('can render a link', async () => {
    render(
        <ThemeProvider>
            <ALink linkText={'super cool link'} href={'/test'} />
        </ThemeProvider>
    )

    expect(screen.getByRole('link')).toHaveTextContent('super cool link')
    expect(screen.getByRole('link')).toHaveProperty(
        'href',
        'http://localhost/test'
    )
})
