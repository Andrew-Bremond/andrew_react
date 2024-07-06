import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
            <img src={getImageUrl("about/machinelearning.png")} alt="Machine Learning icon" style={{ width: '45px', height: 'auto', marginRight: '10px' }}/>
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
                I have fullstack developer with experience in building end-to-end 
                web applications, from responsive front-end to scalable back-end
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};