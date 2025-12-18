import { lazy, Suspense } from 'react'
import Scene from './components/canvas/Scene'
import Navbar from './components/ui/Navbar'

// Lazy load page components for better performance
const Hero = lazy(() => import('./pages/Hero'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const Contact = lazy(() => import('./pages/Contact'))

function App() {
  return (
    <main className="bg-black min-h-screen text-white selection:bg-primary selection:text-white">
      <Scene />
      <Navbar />

      <div className="relative z-10">
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-pulse text-primary text-xl">Loading...</div></div>}>
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Contact />
        </Suspense>
      </div>
    </main>
  )
}

export default App
