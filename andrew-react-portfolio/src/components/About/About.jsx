import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title} id="about">
            About Me
          </h1>
          <p className={styles.description}>
            I am a dedicated computer science student at the University of California, Riverside. My
            passion lies in the dynamic field of software engineering, where I am particularly
            enthusiastic about exploring the realms of machine learning and artificial intelligence. I
            am constantly driven by the excitement of learning and discovering new advancements in
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
                  I have fullstack developer with experience in building end-to-end web applications,
                  from responsive front-end to scalable back-end
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
