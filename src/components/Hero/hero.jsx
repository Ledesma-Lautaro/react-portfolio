import React from "react";
import styles from "./hero.module.css"
import { getImageUrl } from "../../utils";

export const Hero =() => {
    return(
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi I'm Lautaro</h1>
            <p className={styles.description}>I'm a full-stack developer, front-end oriented</p>
            <a className={styles.contactBtn} href="mailto:ledesmalautaroezequiel02@gmail.com">Contact Me</a>
        </div>
        <img className={styles.heroImg} src={getImageUrl('hero/heroImage.png')} alt="image of me" />
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>

    </section>

    )
     
}