import CtaSection from "./components/CtaSection"
import Feedback from "./components/Feedback"
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
      
    </>
  )
}

export default App
