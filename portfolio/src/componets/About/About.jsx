import React from 'react'
import styles from "./About.module.css";
const About = () => {
  return (
    <section className={styles.container} id='about'>
      <div className={styles.main} >
        <h2 className={styles.title}>About</h2>
    
        <p className={styles.contain}>
        I am very curious about
learning new technologies.
To be a part of an
organization where get a
chance to use my
knowledge and skills to
contribute in the progress of
the organization as well as
myself.
        </p>
      </div>
    </section>
  )
}

export default About
