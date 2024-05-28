import React from "react";
import styles from "./about.module.css"
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About me</h2>
            <div className={styles.content}>
                <img className={styles.aboutImage} src={getImageUrl("about/undraw_profile_details_re_ch9r.svg")} alt="a photo of me again" />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="a crusor" />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend developer</h3>
                            <p>My name is Lautaro Ledesma, I’m a twenty one years old passionate Full-Stack developer with a strong focus on Front-End development.
                                 I consider myself to be a proactive, sociable person with excellent teamwork skills. I have a great capacity for learning and I easily adapt
                                  to new environments and technologies. </p>
                        </div>
                    </li>
                    
                </ul>
            </div>
        </section>
    )
}