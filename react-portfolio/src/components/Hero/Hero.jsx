import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";

export const Hero = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi I'm Prakhar Beohar</h1>
        <p className={styles.description}>Front-End Developer & UI/UX Designer .I craft user-friendly interfaces with clean code & translate designs into performant experiences. Exploring Machine Learning's potential.</p>
        <a href="mailto:prakharbeohar81@gmail.com" className={styles.contactBtn}>Contact Me</a>
    </div>
    <img src={getImageUrl("hero/heroImage.png")} alt ="Hero image of me" className={styles.heroImg}/>
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur}/>
  </section>
}
