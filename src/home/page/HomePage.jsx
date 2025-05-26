import { Navbar } from "../components/Navbar.jsx"
import { HeroSection } from "../components/HeroSection.jsx"
import { QuotesSection } from "../components/QuotesSection.jsx"
import { ThemeProviderWrapper } from "../components/ThemeProviderWrapper.jsx"
import ReflectionSection from "../components/ReflectionSection.jsx"
import PracticeSection from "../components/PracticeSection.jsx"
import CtaSection from "../components/CtaSection.jsx"
import Footer from "../components/Footer.jsx"

export const HomePage = () => (
  <ThemeProviderWrapper>
    {({ toggleTheme, isDark }) => (
      <div className="root">
        <Navbar toggleTheme={toggleTheme} isDark={isDark} />
        <main>
          <HeroSection />
          <QuotesSection />
          <ReflectionSection />
          <PracticeSection />
          <CtaSection />
          <Footer />
        </main>
      </div>
    )}
  </ThemeProviderWrapper>
)
