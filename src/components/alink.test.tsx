import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ALink from './alink'
import React from 'react'

it('can render a link', async () => {
    render(<ALink
        linkText={'super cool link'}
        href={'/test'}
    />)

    expect(screen.getByRole('link')).toHaveTextContent('super cool link')
    expect(screen.getByRole('link')).toHaveProperty('href', 'http://localhost/test')
})