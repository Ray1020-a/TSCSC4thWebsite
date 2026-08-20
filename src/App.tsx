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
    if (window.location.pathname.endsWith('/join')) {
      window.location.replace(
        'https://docs.google.com/forms/d/e/1FAIpQLSd5xF2xHdWW-NV50dzmbj64lIYYCvMxXeKzae2MmiqiQC_J3g/viewform?usp=dialog'
      )
      return
    }

    document.body.style.overflow = ready ? '' : 'hidden'

    return () => {
      document.body.style.overflow = ''
    }
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
