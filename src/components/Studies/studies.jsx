import React from "react";

import styles from "./studies.module.css";
import studies from "../../data/studies.json";
import { getImageUrl } from "../../utils";
/*
    "camp": "Camp Name 1",
    "degree": "Degree Name 1",
    "fieldOfStudy": "Field of Study 1",
    "startYear": 2000,
    "endYear": 2004,
    "description": "Description about this study period 1"
*/
export const Studies = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Studies</h2>
      <div className={styles.content}>
        
        <ul className={styles.studies}>
          {studies.map((study, id) => {
            return (
              <li key={id} className={styles.study}>
                <img
                  src={getImageUrl(study.img)}
                  alt={`${study.img}`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${study.degree}, at ${study.camp} `}</h3>
                  <p>{`${study.startDate} - ${study.endDate}`}</p>
                  <p>{`${study.description}`}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};