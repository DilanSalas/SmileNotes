import { Navbar } from "../Components/Navbar.jsx"
import { HeroSection } from "../Components/HeroSection.jsx"
import { QuotesSection } from "../Components/QuotesSection.jsx"
import { ThemeProviderWrapper } from "../Components/ThemeProviderWrapper.jsx"
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
