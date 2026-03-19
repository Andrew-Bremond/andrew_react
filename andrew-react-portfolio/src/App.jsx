import { useEffect, useRef } from 'react'
import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import { Experience } from './components/Experience/Experience'
import { Projects } from './components/Projects/Projects'
import { Contact } from './components/Contact/Contact'
import { getImageUrl } from './utils'

function App() {
  const parallaxSceneRef = useRef(null)

  useEffect(() => {
    const scene = parallaxSceneRef.current

    if (!scene) {
      return undefined
    }

    let animationFrame = 0

    const updateParallax = () => {
      const scrollOffset = Math.min(window.scrollY, 1520)
      const titleOpacity = Math.max(0.08, 1 - scrollOffset / 520)

      scene.style.setProperty('--scene-background-offset', `${scrollOffset * -0.12}px`)
      scene.style.setProperty('--scene-title-offset', `${scrollOffset * 0.48}px`)
      scene.style.setProperty('--scene-title-opacity', `${titleOpacity}`)
      scene.style.setProperty('--scene-cloud-back-offset', `${scrollOffset * -0.12}px`)
      scene.style.setProperty('--scene-mountain-offset', `${scrollOffset * -0.2}px`)
      scene.style.setProperty('--scene-cloud-front-offset', `${scrollOffset * -0.18}px`)
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
      <section ref={parallaxSceneRef} className={styles.parallaxScene} aria-label="Parallax intro">
        <img
          src={getImageUrl('history/background.png')}
          alt=""
          aria-hidden="true"
          className={`${styles.sceneLayer} ${styles.sceneBackground}`}
        />
        <h1 className={`${styles.sceneLayer} ${styles.sceneTitle}`}>Andrew Bremond</h1>
        <img
          src={getImageUrl('history/cloud_1.png')}
          alt=""
          aria-hidden="true"
          className={`${styles.sceneLayer} ${styles.sceneCloudBack}`}
        />
        <img
          src={getImageUrl('history/mountain.png')}
          alt=""
          aria-hidden="true"
          className={`${styles.sceneLayer} ${styles.sceneMountain}`}
        />
        <img
          src={getImageUrl('history/cloud_2.png')}
          alt=""
          aria-hidden="true"
          className={`${styles.sceneLayer} ${styles.sceneCloudFront}`}
        />
      </section>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
