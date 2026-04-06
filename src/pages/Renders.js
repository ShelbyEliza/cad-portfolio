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
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
          <section>
            <div className={styles.top}>
              <h2 className={styles["section-header"]}>Cat Wheel</h2>
              <p className={styles.description}>
                Plastic Injection Molded Part (base) Redesigned for Aluminum Die
                Casting Manufacturing
              </p>
            </div>
            <ul className={styles.list}>
              {renders.wheelImages.map((image) => {
                return (
                  <li key={image.title} className={styles.item}>
                    <div className={styles.border}>
                      <img
                        className={styles.shot}
                        src={image.src}
                        alt={image.alt}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
          <section>
            <div className={styles.top}>
              <h2 className={styles["section-header"]}>Sheet Metal Projects</h2>
              <p className={styles.description}>Sheet Metal</p>
            </div>
            <ul className={styles.list}>
              {renders.sheetMetalImages.map((image) => {
                return (
                  <li key={image.title} className={styles.item}>
                    <div className={styles.border}>
                      <img
                        className={styles.shot}
                        src={image.src}
                        alt={image.alt}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
          <section>
            <div className={styles.top}>
              <h2 className={styles["section-header"]}>Drafting Desk</h2>
              <p className={styles.description}>
                Functional Mechanical Drafting Desk
              </p>
            </div>
            <ul className={styles.list}>
              {renders.deskImages.map((image) => {
                return (
                  <li key={image.title} className={styles.item}>
                    <div className={styles.border}>
                      <img
                        className={styles.shot}
                        src={image.src}
                        alt={image.alt}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
          <section>
            <div className={styles.top}>
              <h2 className={styles["section-header"]}>3D Printed Solutions</h2>
              <p className={styles.description}>3D Printed Parts</p>
            </div>
            <ul className={styles.list}>
              {renders.threeDPrintsImages.map((image) => {
                return (
                  <li key={image.title} className={styles.item}>
                    <div className={styles.border}>
                      <img
                        className={styles.shot}
                        src={image.src}
                        alt={image.alt}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
          <section>
            <div className={styles.top}>
              <h2 className={styles["section-header"]}>Even More!</h2>
              <p className={styles.description}>Extra Designs</p>
            </div>
            <ul className={styles.list}>
              {renders.otherImages.map((image) => {
                return (
                  <li key={image.title} className={styles.item}>
                    <div className={styles.border}>
                      <img
                        className={styles.shot}
                        src={image.src}
                        alt={image.alt}
                      />
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
