import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Projects />
      <Skills />
      <Footer />
    </div>
  )
}

export default App
