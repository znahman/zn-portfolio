import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import ParagraphHeader from './paragraph-header'

it('can render a paragraph header', async () => {
    render(<ParagraphHeader title={'Test Header'} />)

    expect(screen.getByText('Test Header')).toBeVisible()
})
