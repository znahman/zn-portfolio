import React, { createContext, useContext, useState, useEffect } from 'react'

export type Theme = 'dark' | 'light'

export interface ThemeColors {
    background: string
    text: string
    headerBackground: string
    headerText: string
    headerHover: string
    linkColor: string
    linkHover: string
    accentGreen: string
    border: string
    cardBorder: string
}

const darkTheme: ThemeColors = {
    background: '#212222',
    text: '#ffffff',
    headerBackground: '#000000',
    headerText: '#ffffff',
    headerHover: '#66ff00',
    linkColor: '#15f4ee',
    linkHover: '#ffffff',
    accentGreen: '#66ff00',
    border: '#ffffff',
    cardBorder: '#ffffff',
}

const lightTheme: ThemeColors = {
    background: '#f5f5f5',
    text: '#212222',
    headerBackground: '#ffffff',
    headerText: '#212222',
    headerHover: '#007700',
    linkColor: '#0066aa',
    linkHover: '#004488',
    accentGreen: '#007700',
    border: '#cccccc',
    cardBorder: '#212222',
}

interface ThemeContextType {
    theme: Theme
    themeColors: ThemeColors
    toggleTheme: () => void
}

// Provide a default context value for initial render
const defaultContextValue: ThemeContextType = {
    theme: 'dark',
    themeColors: darkTheme,
    toggleTheme: () => {},
}

const ThemeContext = createContext<ThemeContextType>(defaultContextValue)

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [theme, setTheme] = useState<Theme>('dark')
    const [mounted, setMounted] = useState(false)

    // Load theme from localStorage on mount
    useEffect(() => {
        setMounted(true)
        if (typeof window !== 'undefined' && window.localStorage) {
            const savedTheme = localStorage.getItem('theme') as Theme | null
            if (savedTheme) {
                setTheme(savedTheme)
            }
        }
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme)
        if (typeof window !== 'undefined' && window.localStorage) {
            localStorage.setItem('theme', newTheme)
            // Update body styles immediately
            const background = newTheme === 'dark' ? '#212222' : '#f5f5f5'
            const textColor = newTheme === 'dark' ? '#ffffff' : '#212222'
            document.documentElement.style.backgroundColor = background
            document.body.style.backgroundColor = background
            document.body.style.color = textColor
        }
    }

    const themeColors = theme === 'dark' ? darkTheme : lightTheme

    // Prevent flash of unstyled content (but not in test environments)
    const isTestEnvironment =
        typeof process !== 'undefined' && process.env.NODE_ENV === 'test'
    if (!mounted && !isTestEnvironment) {
        return <div style={{ visibility: 'hidden' }}>{children}</div>
    }

    return (
        <ThemeContext.Provider value={{ theme, themeColors, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext)
    return context
}
