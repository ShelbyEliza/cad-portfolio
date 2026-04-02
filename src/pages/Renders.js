// css:
import styles from "../pages-css/Renders.module.css";

// assets:
import {
  Lyre1,
  Lyre2,
  waffle1,
  waffle2,
  waffle3,
  waffle4,
  waffle5,
  // wheel1,
  // wheel2,
  // wheel3,
  // wheel4,
  // wheel5,
  // patio1,
  // patio2,
  // draftingDesk1,
  // draftingDesk2,
  // draftingDesk3,
  // draftingDesk4,
  // draftingDesk5,
  // birdHouse1,
  // birdHouse2,
  // sheetMetal1,
  // sheetMetal2,
  // tableSupport,
  // neonSign,
  // beltTightener,
  // gear,
} from "../assets/models";

export default function Models() {
  let lyreImages = [
    {
      src: Lyre1,
      alt: "Lyre Front",
      title: "Lyre Front",
      description: "fhsiri eowhfndfjs  dofsienf isjhoie ue[ajenf woiwuer ",
    },
    {
      src: Lyre2,
      alt: "Lyre Back",
      title: "Lyre Back",
      description: "fhsiri eowhfndfjs  dofsienf isjhoie ue[ajenf woiwuer ",
    },
  ];
  let waffleImages = [
    {
      src: waffle1,
      alt: "Waffle Maker",
      title: "Waffle Maker",
      description: "fhsiri eowhfndfjs  dofsienf isjhoie ue[ajenf woiwuer ",
    },
    {
      src: waffle2,
      alt: "Waffle Maker",
      title: "Waffle Maker",
      description: "fhsiri eowhfndfjs  dofsienf isjhoie ue[ajenf woiwuer ",
    },
    {
      src: waffle3,
      alt: "Waffle Maker",
      title: "Waffle Maker",
      description: "fhsiri eowhfndfjs  dofsienf isjhoie ue[ajenf woiwuer ",
    },
    {
      src: waffle4,
      alt: "Waffle Maker",
      title: "Waffle Maker",
      description: "fhsiri eowhfndfjs  dofsienf isjhoie ue[ajenf woiwuer ",
    },
    {
      src: waffle5,
      alt: "Waffle Maker",
      title: "Waffle Maker!",
      description: "fhsiridf eowhfndfjs  dofsienf isjhoie ue[ajenf woiwuer ",
    },
  ];

  return (
    <div className={`page-content ${styles["my-sites"]}`}>
      <div className={styles.top}>
        <h1 className={styles["page-heading"]}>My Models</h1>
      </div>
      <section>
        <div className={styles.top}>
          <h2 className={styles["section-header"]}>Lyre Stand</h2>
          <p className={styles.description}>
            Overall project description here...
          </p>
        </div>
        <ul className={styles.list}>
          {lyreImages.map((image) => {
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
          {waffleImages.map((image) => {
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
    </div>
  );
}
