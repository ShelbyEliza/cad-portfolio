// css:
import styles from "../pages-css/Sites.module.css";
import "../public/sites.json";
// assets:
import Screenshot from "../components/Screenshot";

import { useState, useEffect } from "react";
// import { useCollection } from "../hooks/useCollection";

export default function Sites() {
  const [sites, setSites] = useState(null);
  const [documentError, setDocumentError] = useState(null);
  const documents = require("../public/data/sites.json");
  // useEffect(() => {
  //   setSites(docs);
  // }, []);
  // const { documents, error } = useCollection("sites");

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
            {sites.list.map((site) => {
              return (
                <li key={site.title} className={styles.item}>
                  <div className={styles.border}>
                    <div className={styles.left}>
                      <a href={site.link} className={styles.link}>
                        <Screenshot site={site} />
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
