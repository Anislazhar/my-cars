import React from 'react'
import { Link } from 'react-router-dom';

import styles from '../styles/Hero.module.css';
import btnStyles from "../styles/Button.module.css"



const Hero = ({ headline, subline }) => {
    return (
      <>
        <div className={styles.Hero}>
          <h1 className={styles.MegaHeader}>{headline}</h1>
          <h2 className={styles.HeroBlurb}>{subline}</h2>
        </div>
        <hr className={styles.FullDivider} />
      </>
    );
}


export default Hero