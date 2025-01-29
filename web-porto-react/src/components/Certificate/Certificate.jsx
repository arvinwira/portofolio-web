import React from "react";

import styles from "./Certificate.module.css";
import certificateIcon from "../../assets/certificate/certificateIcon.png";

export const Certificate = () => {
  return (
    <section className={styles.container} id="certificate">
      <h2 className={styles.title}>Certificate</h2>
      <div className={styles.content}>
      
        <ul className={styles.certificateItems}>
          <li className={styles.certificateItem}>
            <a href="https://drive.google.com/file/d/1mFRfdq4rJMROMOZVy0XUiURh8UOsPtE7/view" target="_blank" rel="noreferrer" className={styles.certificateLink}>
            <img className={styles.certificateImage} src={certificateIcon} alt="Certificate icon" />
            <div className={styles.certificateItemText}>
              <h3>Java Foundations Certified Junior Associate Certification</h3>
              <p>
                Oracle, Issued Nov 2022
              </p>
            </div>
            </a>
          </li>
          <li className={styles.certificateItem}>
          <a href="https://drive.google.com/file/d/1r3M3yXMfpFmjWlFrUBwRjf_ekwxYQFFp/view" target="_blank" rel="noreferrer" className={styles.certificateLink}>
          <img className={styles.certificateImage} src={certificateIcon} alt="Certificate icon" />
            <div className={styles.certificateItemText}>
              <h3>HCIA-Cloud Computing V5.0 Course</h3>
              <p>
                Huawei, Issued Oct 2023
              </p>
            </div>
            </a>
          </li>
          <li className={styles.certificateItem}>
          <a href="https://drive.google.com/file/d/1P_oxHQDN6a7ef5hwDnWAJNKFJt3KqSgW/view" target="_blank" rel="noreferrer" className={styles.certificateLink}>
          <img className={styles.certificateImage} src={certificateIcon} alt="Certificate icon" />
            <div className={styles.certificateItemText}>
              <h3>HCIA-Big Data V3.0 Course</h3>
              <p>
                Huawei, Issued Oct 2023
              </p>
            </div>
            </a>
          </li>
          <li className={styles.certificateItem}>
          <a href="https://www.dicoding.com/certificates/ERZR11WNNZYV" target="_blank" rel="noreferrer" className={styles.certificateLink}>
          <img className={styles.certificateImage} src={certificateIcon} alt="Certificate icon" />
            <div className={styles.certificateItemText}>
              <h3>Belajar Pengembangan Aplikasi Android Intermediate</h3>
              <p>
                Dicoding Indonesia, Issued May 2024
              </p>
            </div>
            </a>
          </li>
          <li className={styles.certificateItem}>
          <a href="https://www.dicoding.com/certificates/53XEOEKOYZRN" target="_blank" rel="noreferrer" className={styles.certificateLink}>
          <img className={styles.certificateImage} src={certificateIcon} alt="Certificate icon" />
            <div className={styles.certificateItemText}>
              <h3>Belajar Dasar AI</h3>
              <p>
              Dicoding Indonesia, Issued Apr 2024
              </p>
            </div>
            </a>
          </li>
          <li className={styles.certificateItem}>
          <a href="https://drive.google.com/file/d/150a1E5bK8TrivzAZPS9qJ5XbZvVScg84/view" target="_blank" rel="noreferrer" className={styles.certificateLink}>
          <img className={styles.certificateImage} src={certificateIcon} alt="Certificate icon" />
            <div className={styles.certificateItemText}>
              <h3>Python Course</h3>
              <p>
              Progate, Issued Oct 2021
              </p>
            </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};