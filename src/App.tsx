import { useEffect, useState } from 'react'
import IntroLoader from './components/IntroLoader'
import Navbar from './components/Navbar'
import About from './components/About'
import Courses from './components/Courses'
import Team from './components/Team'
import Join from './components/Join'
import Footer from './components/Footer'

function App() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    document.body.style.overflow = ready ? '' : 'hidden'
  }, [ready])

  return (
    <>
      <IntroLoader onDone={() => setReady(true)} />
      <div className={`page ${ready ? 'is-ready' : ''}`}>
        <Navbar />
        <main>
          <About />
          <Courses />
          <Team />
          <Join />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
