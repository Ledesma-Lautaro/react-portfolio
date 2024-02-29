import React from "react";
import styles from "./about.module.css"
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img className={styles.aboutImage} src={getImageUrl("about/undraw_profile_details_re_ch9r.svg")} alt="a photo of me again" />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="a crusor" />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend developer</h3>
                            <p>Description</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="a server" />
                        <div className={styles.aboutItemText}>
                            <h3>Backend developer</h3>
                            <p>Description</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/uiIcon.png")} alt="a crusor" />
                        <div className={styles.aboutItemText}>
                            <h3>UX/UI designer</h3>
                            <p>Description</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}