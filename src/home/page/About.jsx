
import { ThemeProviderWrapper } from "../components/ThemeProviderWrapper.jsx"
import { Navbar } from "../components/Navbar.jsx"
import Importante from "../components/Importante";

import Footer from "../components/Footer.jsx"

export const About = () => (
  <ThemeProviderWrapper>
    {({ toggleTheme, isDark }) => (
      <div className="root">
        <Navbar toggleTheme={toggleTheme} isDark={isDark} />
        <main>
                 <Importante />

          <Footer />
        </main>
      </div>
    )}
  </ThemeProviderWrapper>
)