// css:
import styles from "../pages-css/Sites.module.css";

// assets:
import { SitesData } from "../assets/sites-screenshots/sites-index.js";

import { useState, useEffect } from "react";

export default function Sites() {
  const [sites, setSites] = useState(null);
  const [documentError, setDocumentError] = useState(null);
  const documents = SitesData;

  useEffect(() => {
    if (documents) {
      setSites(documents);
    } else {
      setDocumentError("Error loading documents");
    }
  }, [documents]);

  return (
    <div className={`page-content ${styles["my-sites"]}`}>
      <div className={styles.top}>
        <h1 className={styles["page-heading"]}>My Sites</h1>
      </div>
      {documentError && <p>{documentError}</p>}
      {sites && (
        <section>
          <ul className={styles.list}>
            {sites.map((site) => {
              return (
                <li key={site.title} className={styles.item}>
                  <div className={styles.border}>
                    <div className={styles.left}>
                      <a href={site.link} className={styles.link}>
                        <img
                          className={styles.shot}
                          src={site.src}
                          alt={`${site.title}'s screenshot`}
                        />
                      </a>
                    </div>
                    <div className={styles.right}>
                      <h3 className={styles.title}>{site.title}</h3>
                      <p className={styles.description}>{site.description}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </div>
  );
}
