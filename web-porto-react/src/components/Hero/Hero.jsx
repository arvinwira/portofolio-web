import React from "react";

import styles from "./Hero.module.css";
import heroImage from '../../assets/hero/heroImage-modified2.png';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello, I'm Arvin</h1>
        <p className={styles.description}> 
        I am passionate about technology, with a focus on web development, mobile applications, and software development. Currently honing my skills in these areas, I strive to adapt and contribute effectively to the dynamic tech industry.
        </p>
    
      </div>
      <img
        src={heroImage}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};