import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Why from './components/Why'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-slate-100">
      <Hero />
      <HowItWorks />
      <Features />
      <Why />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App
