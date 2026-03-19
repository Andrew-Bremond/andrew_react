import { useEffect, useRef } from 'react'
import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import { Experience } from './components/Experience/Experience'
import { Projects } from './components/Projects/Projects'
import { Contact } from './components/Contact/Contact'

function App() {
  const parallaxZoneRef = useRef(null)

  useEffect(() => {
    const zone = parallaxZoneRef.current

    if (!zone) {
      return undefined
    }

    let animationFrame = 0

    const updateParallax = () => {
      const scrollOffset = Math.min(window.scrollY, 560)

      zone.style.setProperty('--parallax-base-offset', `${scrollOffset * -0.12}px`)
      zone.style.setProperty('--parallax-grid-offset', `${scrollOffset * -0.2}px`)
      zone.style.setProperty('--parallax-accent-offset', `${scrollOffset * -0.32}px`)
      zone.style.setProperty('--parallax-hero-offset', `${scrollOffset * -0.08}px`)
      animationFrame = 0
    }

    const onScroll = () => {
      if (animationFrame) {
        return
      }

      animationFrame = window.requestAnimationFrame(updateParallax)
    }

    updateParallax()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)

      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame)
      }
    }
  }, [])

  return (
    <div className={styles.App}>
      <Navbar />
      <div ref={parallaxZoneRef} className={styles.topParallaxZone}>
        <div className={styles.parallaxBackdrop}>
          <div className={`${styles.parallaxLayer} ${styles.parallaxBase}`} />
          <div className={`${styles.parallaxLayer} ${styles.parallaxGrid}`} />
          <div className={`${styles.parallaxLayer} ${styles.parallaxAccent}`} />
        </div>
        <div className={styles.topParallaxContent}>
          <Hero />
          <About />
        </div>
      </div>
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
