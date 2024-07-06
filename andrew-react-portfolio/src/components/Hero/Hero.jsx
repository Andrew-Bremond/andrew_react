import Reach from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return <section className={styles.container}>
    <div className={styles.content}> 
        <h1 className={styles.title}>Andrew Bremond</h1>
        <p className={styles.description}>
            I am a dedicated computer science student at the University of California, Riverside. 
            My passion lies in the dynamic field of software engineering, 
            where I am particularly enthusiastic about exploring the realms of machine learning and 
            artificial intelligence. I am constantly driven by the excitement of learning and discovering 
            new advancements in technology.
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
  </section>;
}