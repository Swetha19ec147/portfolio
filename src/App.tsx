import Scene from './components/canvas/Scene'
import Navbar from './components/ui/Navbar'
import Hero from './pages/Hero'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'

function App() {
  return (
    <main className="bg-black min-h-screen text-white selection:bg-primary selection:text-white">
      <Scene />
      <Navbar />

      <div className="relative z-10">
        <Hero />

        <About />
        <Services />
        <Portfolio />
        <Contact />
      </div>
    </main>
  )
}

export default App
