import React from 'react'
import styled from '@emotion/styled'
import { useTheme, ThemeColors } from '../context/theme-context'

const ToggleButton = styled.button<{ themeColors: ThemeColors }>`
    background: ${props => props.themeColors.headerBackground};
    border: 2px solid ${props => props.themeColors.border};
    border-radius: 20px;
    padding: 8px 16px;
    cursor: pointer;
    color: ${props => props.themeColors.headerText};
    font-family: Verdana;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
    margin-left: auto;
    margin-right: 32px;

    &:hover {
        background: ${props => props.themeColors.headerHover};
        color: ${props =>
            props.themeColors.headerBackground === '#000000'
                ? '#000000'
                : '#ffffff'};
        border-color: ${props => props.themeColors.headerHover};
    }

    &:focus {
        outline: 2px solid ${props => props.themeColors.accentGreen};
        outline-offset: 2px;
    }
`

const Icon = styled.span`
    font-size: 18px;
`

const ThemeToggle: React.FC = () => {
    const { theme, themeColors, toggleTheme } = useTheme()

    return (
        <ToggleButton
            onClick={toggleTheme}
            themeColors={themeColors}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            data-testid="theme-toggle"
            data-test-id="theme-toggle"
        >
            <Icon>{theme === 'dark' ? '☀️' : '🌙'}</Icon>
            <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
        </ToggleButton>
    )
}

export default ThemeToggle
