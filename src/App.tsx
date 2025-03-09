import FloatingButtons from "./buttons/FloatingButtons"
import CtaSection from "./components/CtaSection"
import FaqSection from "./components/FaqSection"
import Feedback from "./components/Feedback"
import Footer from "./components/Footer"
import FormsSection from "./components/FormsSection"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Solutions from "./components/Solutions"
import SucessCases from "./components/SucessCases"
import { GlobalStyles } from "./styles/global"

const App = () => {

  return (
    <>
    <GlobalStyles />
      <Header />
      <Hero />
      <Solutions />
      <Feedback />
      <SucessCases />
      <CtaSection />
      <FormsSection />
      <FaqSection />
      <Footer />
      
      <FloatingButtons />
    </>
  )
}

export default App
