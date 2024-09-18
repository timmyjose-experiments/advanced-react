import { createContext, useState } from 'react'

export type ThemeMode = 'light' | 'dark'

export type Theme = {
  theme: ThemeMode
  toggleTheme: () => void
}

const defaultTheme: Theme = {
  theme: 'light',
  toggleTheme: () => {}
}

export const ThemeContext = createContext<Theme>(defaultTheme)

const ThemeContextProvider = ( { children } : { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeMode>(defaultTheme.theme)

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      { children }
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
