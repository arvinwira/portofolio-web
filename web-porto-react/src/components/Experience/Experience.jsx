import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";

// Import all images directly
import upnvjImage from "../../assets/history/upnvj.png";
import bangkitImage from "../../assets/history/bangkit.png";
import htmlImage from "../../assets/skills/html.png";
import cssImage from "../../assets/skills/css.png";
import javascriptImage from "../../assets/skills/javascript.png";
import reactImage from "../../assets/skills/react.png";
import androidImage from "../../assets/skills/android.png";
import pythonImage from "../../assets/skills/python.png";
import figmaImage from "../../assets/skills/figma.png";
import kotlinImage from "../../assets/skills/kotlin.png";

export const Experience = () => {
  // Mapping for history item images
  const imageMapping = {
    "../../assets/history/upnvj.png": upnvjImage,
    "../../assets/history/bangkit.png": bangkitImage,
  };

  // Mapping for skills images
  const skillImageMapping = {
    "../../assets/skills/html.png": htmlImage,
    "../../assets/skills/css.png": cssImage,
    "../../assets/skills/javascript.png": javascriptImage,
    "../../assets/skills/react.png": reactImage,
    "../../assets/skills/android.png": androidImage,
    "../../assets/skills/python.png": pythonImage,
    "../../assets/skills/figma.png": figmaImage,
    "../../assets/skills/kotlin.png": kotlinImage,
  };

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience & Education</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  {/* Use skillImageMapping for skills */}
                  <img
                    src={skillImageMapping[skill.imageSrc] || skill.imageSrc}
                    alt={skill.title}
                  />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                {/* Use imageMapping for history items */}
                <img
                  src={imageMapping[historyItem.imageSrc] || historyItem.imageSrc}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role},`}</h3>
                  <h3>{`${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
