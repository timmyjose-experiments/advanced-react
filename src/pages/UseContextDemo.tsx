import { useNavigate } from "react-router-dom"
import { globalStyles } from "../globalStyles"
import { useContext, useEffect } from "react"
import { ThemeContext } from "../providers/ThemeContextProvider"

const UseContextDemo = () => {
  const navigate = useNavigate()
  const { theme, toggleTheme } = useContext(ThemeContext)

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-theme')
    } else {
      document.body.classList.remove('dark-theme')
    }
  }, [theme])

  return (
    <div style={globalStyles.container}>
      <p>Current Theme: {theme}</p>
      <button
        style={globalStyles.button}
        onClick={() => { 
          toggleTheme()
        }}>
          Toggle Theme
      </button>
      <button
        style={globalStyles.button}
        onClick={() => navigate('/')}>
          Home
      </button>
    </div>
  )
}

export default UseContextDemo
