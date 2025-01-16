import React from 'react';

import styles from "./Skill.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";
const Skill = () => {
  return (
    <section className={styles.container} id='skill'>
      <h2 className={styles.title}>Skill</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return(
              <div key={id} className={styles.skill}>
              <div className={styles.skillImagecontainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title}/>
              </div>
              <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Skill
