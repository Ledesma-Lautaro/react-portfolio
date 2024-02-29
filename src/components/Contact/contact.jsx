import React from "react";
import styles from "./contact.module.css"
import { getImageUrl } from "../../utils";

export const Contact = () => {
    return(
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
                    <a href="mailto:ledesmalautaroezequiel02@gmail.com">ledesmalautaroezequiel02</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedin icon" />
                    <a href="https://www.linkedin.com/in/lautaro-ledesma-620607240/">linkedin.com/Lautaro-Ledesma</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="github icon" />
                    <a href="https://github.com/Ledesma-Lautaro">github.com/Lautaro-Ledesma</a>
                </li>
            </ul>
        </footer>
    )
}