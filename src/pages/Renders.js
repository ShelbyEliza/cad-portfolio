// css:
import styles from "../pages-css/Renders.module.css";
import { RendersData } from "../assets/models/index.js";

import { useState, useEffect } from "react";

export default function Models() {
  const [renders, setRenders] = useState(null);
  const [documentError, setDocumentError] = useState(null);
  const documents = RendersData;

  useEffect(() => {
    if (documents) {
      setRenders(documents);
    } else {
      setDocumentError("Error loading documents");
    }
  }, [documents]);

  return (
    <div className={`page-content ${styles["my-sites"]}`}>
      <div className={styles.top}>
        <h1 className={styles["page-heading"]}>My Models</h1>
      </div>
      {documentError && <p>{documentError}</p>}
      {renders && (
        <>
          <section>
            <div className={styles.top}>
              <h2 className={styles["section-header"]}>Lyre Stand</h2>
              <p className={styles.description}>
                Overall project description here...
              </p>
            </div>
            <ul className={styles.list}>
              {renders.lyreImages.map((image) => {
                return (
                  <li key={image.title} className={styles.item}>
                    <div className={styles.border}>
                      <img
                        className={styles.shot}
                        src={image.src}
                        alt={image.alt}
                      />
                      <h3 className={styles.title}>{image.title}</h3>
                      <p className={styles["image-description"]}>
                        {image.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
          <section>
            <div className={styles.top}>
              <h2 className={styles["section-header"]}>Waffle Maker</h2>
              <p className={styles.description}>
                Overall project description here...
              </p>
            </div>
            <ul className={styles.list}>
              {renders.waffleImages.map((image) => {
                return (
                  <li key={image.title} className={styles.item}>
                    <div className={styles.border}>
                      <img
                        className={styles.shot}
                        src={image.src}
                        alt={image.alt}
                      />
                      {/* <h3 className={styles.title}>{image.title}</h3>
                  <p className={styles["image-description"]}>
                    {image.description}
                  </p> */}
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        </>
      )}
    </div>
  );
}
