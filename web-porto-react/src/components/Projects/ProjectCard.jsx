import React from "react";
import styles from "./ProjectCard.module.css";

// Import all project images directly
import chatAppImage from "../../assets/projects/Chat.png";
import memorabiliaImage from "../../assets/projects/memorabilia.png";
import bookInventoryImage from "../../assets/projects/BookInventory.png";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  const projectImageMapping = {
    "../../assets/projects/Chat.png": chatAppImage,
    "../../assets/projects/memorabilia.png": memorabiliaImage,
    "../../assets/projects/BookInventory.png": bookInventoryImage,
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <img
        src={projectImageMapping[imageSrc] || imageSrc} 
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={source} className={styles.link}>
          Source
        </a>
      </div>
    </div>
  );
};
