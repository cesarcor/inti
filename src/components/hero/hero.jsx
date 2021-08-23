import React from "react";
import styles from "./hero.module.scss";
import heroImg from "../../assets/images/tempimg1.jpg"

const Hero = () => {
  return (
    <div className={styles.hero}>
        <div className={styles.hero_content_col}>
            <h1>Mega Planters</h1>
            <p>Lorem ipsum dolor sit amet, consetur sapipang individunt pakisan</p>
        </div>
        <div className={styles.hero_image_col}>
            <figure>
             <img src={heroImg} />
            </figure>
        </div>
    </div>
  );
};

export default Hero;