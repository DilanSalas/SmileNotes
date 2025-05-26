import { useState, useEffect } from "react"
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material"

export const ThemeProviderWrapper = ({ children }) => {
  const [theme, setTheme] = useState("light")
  const [mounted, setMounted] = useState(false)
  const isDark = theme === "dark"

  useEffect(() => {
    const saved = localStorage.getItem("smileNotesTheme")
    if (saved) {
      setTheme(saved)
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      setTheme(prefersDark ? "dark" : "light")
    }
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      document.body.className = theme
      localStorage.setItem("smileNotesTheme", theme)
    }
  }, [theme, mounted])

  const muiTheme = createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
      primary: { main: "#8b5cf6" },
      secondary: { main: "#ec4899" },
    },
    typography: {
      fontFamily: "'Nunito', 'Quicksand', sans-serif",
      h1: { fontWeight: 700 },
      h2: { fontWeight: 700 },
      button: { fontWeight: 600 },
    },
  })

  if (!mounted) return null

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children({ theme, toggleTheme: () => setTheme(prev => (prev === "light" ? "dark" : "light")), isDark })}
    </ThemeProvider>
  )
}
