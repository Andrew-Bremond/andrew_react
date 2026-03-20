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
  );
};
