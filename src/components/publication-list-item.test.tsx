import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import PublicationListItem from './publication-list-item'
import ALink from './alink'
import { ThemeProvider } from '../context/theme-context'

const renderWithTheme = (component: React.ReactElement) => {
    return render(<ThemeProvider>{component}</ThemeProvider>)
}

it('can render a publication list item as expected where I am not the first author', async () => {
    renderWithTheme(
        <PublicationListItem
            titleLink={
                <ALink
                    linkText={`This is link text`}
                    href={`www.example.com`}
                />
            }
            authors="One Name, Two Name, Three Name, My Name, Four Name"
            me="My Name"
            venue="Awesome Conference"
        />
    )

    expect(screen.getByText('My Name')).toHaveStyle('font-weight: bold')
})

it('can render a publication list item as expected where I am the only author', async () => {
    renderWithTheme(
        <PublicationListItem
            titleLink={
                <ALink
                    linkText={`This is link text`}
                    href={`www.example.com`}
                />
            }
            authors="My Name"
            me="My Name"
            venue="Awesome Conference"
        />
    )

    expect(screen.getByText('My Name')).toHaveStyle('font-weight: bold')
})

it('can render a publication list item as expected where I am the first author of many', async () => {
    renderWithTheme(
        <PublicationListItem
            titleLink={
                <ALink
                    linkText={`This is link text`}
                    href={`www.example.com`}
                />
            }
            authors="My Name, Two Name, Three Name, Four Name"
            me="My Name"
            venue="Awesome Conference"
        />
    )

    expect(screen.getByText('My Name')).toHaveStyle('font-weight: bold')
})
