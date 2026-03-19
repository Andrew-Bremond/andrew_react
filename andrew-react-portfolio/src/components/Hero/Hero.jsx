import React, { useEffect, useRef } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const parallaxSceneRef = useRef(null);

  useEffect(() => {
    const scene = parallaxSceneRef.current;

    if (!scene) {
      return undefined;
    }

    let animationFrame = 0;

    const updateParallax = () => {
      const scrollOffset = Math.min(window.scrollY, 1520);
      const cloudScrollOffset = Math.min(window.scrollY, 6080);

      scene.style.setProperty("--scene-background-offset", `${scrollOffset * -0.12}px`);
      scene.style.setProperty("--scene-title-offset", `${scrollOffset * 0.48}px`);
      scene.style.setProperty("--scene-cloud-back-offset", `${cloudScrollOffset * -0.48}px`);
      scene.style.setProperty("--scene-mountain-offset", `${scrollOffset * -0.06}px`);
      scene.style.setProperty("--scene-cloud-front-offset", `${cloudScrollOffset * -0.72}px`);
      animationFrame = 0;
    };

    const onScroll = () => {
      if (animationFrame) {
        return;
      }

      animationFrame = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);

      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <section className={styles.heroSection}>
      <section ref={parallaxSceneRef} className={styles.parallaxScene} aria-label="Parallax intro">
        <img
          src={getImageUrl("hero/background.png")}
          alt=""
          aria-hidden="true"
          className={`${styles.sceneLayer} ${styles.sceneBackground}`}
        />
        <h1 className={`${styles.sceneLayer} ${styles.sceneTitle}`}>Andrew Bremond</h1>
        <img
          src={getImageUrl("hero/cloud_1.png")}
          alt=""
          aria-hidden="true"
          className={`${styles.sceneLayer} ${styles.sceneCloudBack}`}
        />
        <img
          src={getImageUrl("hero/mountain.png")}
          alt=""
          aria-hidden="true"
          className={`${styles.sceneLayer} ${styles.sceneMountain}`}
        />
        <img
          src={getImageUrl("hero/cloud_2.png")}
          alt=""
          aria-hidden="true"
          className={`${styles.sceneLayer} ${styles.sceneCloudFront}`}
        />
      </section>

      <div className={styles.aboutSection}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title} id="about">About Me</h1>
            <p className={styles.description}>
              I am a dedicated computer science student at the University of California, Riverside.
              My passion lies in the dynamic field of software engineering, where I am particularly
              enthusiastic about exploring the realms of machine learning and artificial intelligence.
              I am constantly driven by the excitement of learning and discovering new advancements in
              technology.
            </p>
            <a href="mailto:abrem005@ucr.edu" className={styles.contactBtn}>
              Contact Me
            </a>
          </div>
          <img
            src={getImageUrl("hero/heroImage.png")}
            alt="hero img of me"
            className={styles.heroImg}
          />
          <div className={styles.topBlur} />
          <div className={styles.bottomBlur} />
        </div>

        <div className={styles.detailsCard}>
          <div className={styles.detailsContent}>
            <img
              src={getImageUrl("about/aboutImage.png")}
              alt="Me sitting with a laptop"
              className={styles.aboutImage}
            />
            <ul className={styles.aboutItems}>
              <li className={styles.aboutItem}>
                <img
                  src={getImageUrl("about/machinelearning.png")}
                  alt="Machine Learning icon"
                  style={{ width: "45px", height: "auto", marginRight: "10px" }}
                />
                <div className={styles.aboutItemText}>
                  <h3>Machine Learning</h3>
                  <p>
                    I have developed and deployed machine learning models for various applications,
                    including computer vision and natural language processing
                  </p>
                </div>
              </li>
              <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
                <div className={styles.aboutItemText}>
                  <h3>Web Designer</h3>
                  <p>
                    Designed and implemented multiple websites, focusing on user experience,
                    accessibility, responsive design, and modern design principles
                  </p>
                </div>
              </li>
              <li className={styles.aboutItem}>
                <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
                <div className={styles.aboutItemText}>
                  <h3>Fullstack Developer</h3>
                  <p>
                    I have fullstack developer with experience in building end-to-end web
                    applications, from responsive front-end to scalable back-end
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
