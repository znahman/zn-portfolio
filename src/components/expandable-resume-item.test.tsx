import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import ExpandableResumeItem from './expandable-resume-item'
import userEvent from '@testing-library/user-event'
import { ThemeProvider } from '../context/theme-context'

const renderWithTheme = (component: React.ReactElement) => {
    return render(<ThemeProvider>{component}</ThemeProvider>)
}

it('can render an exapandable resume item', async () => {
    renderWithTheme(
        <ExpandableResumeItem
            jobTitle="Test Title"
            workplaceTitle={`Test Workplace`}
            workplaceLink={`https://www.example.com/`}
            rightAlignText={`2016`}
            description={<li>This is a list react node!</li>}
        />
    )

    expect(screen.getByText('Test Title')).toBeVisible()
    expect(screen.getByText('Test Workplace')).toBeVisible()
    expect(screen.getByText('2016')).toBeVisible()

    expect(screen.getByRole('link')).toHaveTextContent('Test Workplace')
    expect(screen.getByRole('link')).toHaveProperty(
        'href',
        'https://www.example.com/'
    )

    expect(
        screen.queryByText('This is a list react node!')
    ).not.toBeInTheDocument()
})

it('can render description text when clicked', async () => {
    renderWithTheme(
        <ExpandableResumeItem
            jobTitle="Test Title"
            workplaceTitle={`Test Workplace`}
            workplaceLink={`https://www.example.com/`}
            rightAlignText={`2016`}
            description={<li>This is a list react node!</li>}
        />
    )

    expect(
        screen.queryByText('This is a list react node!')
    ).not.toBeInTheDocument()

    await userEvent.click(screen.getByText('Test Title'))

    expect(screen.queryByText('This is a list react node!')).toBeVisible()
})

it('can render description text when opened via keyboard navigation', async () => {
    renderWithTheme(
        <ExpandableResumeItem
            jobTitle="Test Title"
            workplaceTitle={`Test Workplace`}
            workplaceLink={`https://www.example.com/`}
            rightAlignText={`2016`}
            description={<li>This is a list react node!</li>}
        />
    )

    expect(
        screen.queryByText('This is a list react node!')
    ).not.toBeInTheDocument()

    await userEvent.tab()
    await userEvent.keyboard('{enter}')

    expect(screen.queryByText('This is a list react node!')).toBeVisible()
})
