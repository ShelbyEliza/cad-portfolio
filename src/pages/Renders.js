import styles from "../pages-css/Renders.module.css";
import { RendersData } from "../assets/models/index.js";
import { useState } from "react";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Models() {
  const renders = RendersData();

  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = (images, index) => {
    setLightboxImages(images.map((img) => ({ src: img.src, alt: img.alt })));
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const renderImageList = (images) =>
    images.map((image, index) => (
      <li key={image.title} className={styles.item}>
        <div
          className={styles.border}
          onClick={() => openLightbox(images, index)}
        >
          <img className={styles.shot} src={image.src} alt={image.alt} />
        </div>
      </li>
    ));

  return (
    <div className={`page-content ${styles["my-sites"]}`}>
      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={lightboxImages}
          index={lightboxIndex}
        />
      )}

      <section>
        <div className={styles.top}>
          <h2 className={styles["section-header"]}>Lyre Stand</h2>
        </div>
        <ul className={styles.list}>{renderImageList(renders.lyreImages)}</ul>
        <p className={styles.description}>
          Designed in Inventor, this lyre stand began with hand-traced
          measurements of the instrument to establish the cradling curve, string
          clearance zone, and a 70° tilt-back angle.
        </p>
        <p className={styles.description}>
          While early concept designs prioritized aesthetics, the final design
          revision was also informed by 3D printing constraints. Final design
          decisions were guided by print bed limitations, support angle
          thresholds above 45°, and connection tolerances, with dissolvable
          filament used at support interfaces for a cleaner finish. A tolerance
          issue with the connecting bar required a targeted reprint,
          demonstrating the importance of fit testing before finalizing
          assemblies.
        </p>
      </section>

      <section>
        <div className={styles.top}>
          <h2 className={styles["section-header"]}>Waffle Maker</h2>
        </div>
        <ul className={styles.list}>{renderImageList(renders.waffleImages)}</ul>
        <p className={styles.description}>
          The Yaw-Baker is a concept waffle maker designed in Inventor for a
          Product Design and Development course, developed through a full
          product design pipeline - from customer persona research and
          competitive analysis through CAD modeling, internal component layout,
          and marketing strategy.
        </p>
        <p className={styles.description}>
          The design centers on three user-focused features: overall slim
          profile for convenient storage, swappable patterned grill pans for
          unique breakfast customization, and a rail-mounted syrup warming tray
          passively heated by the cooking element, eliminating the need for a
          separate warming device. A Bluetooth-connected display allows users to
          stream music while cooking, transitioning to a chime alert when
          waffles are ready.
        </p>
        <p className={styles.description}>
          Internally, the design accounts for heat shielding around sensitive
          electrical components and heat funneling system, channeling residual
          heat to the syrup tray. The project also included a full SWOT
          analysis, identifying supply chain complexity and feature-cost balance
          as key risks, alongside opportunities in social media marketability
          and brand partnerships.
        </p>
      </section>

      <section>
        <div className={styles.top}>
          <h2 className={styles["section-header"]}>Cat Wheel</h2>
        </div>
        <ul className={styles.list}>{renderImageList(renders.wheelImages)}</ul>
        <p className={styles.description}>
          This project involved reverse-engineering a commercial cat exercise
          wheel in Inventor and redesigning its curved plate components
          (originally manufactured via plastic injection molding) for aluminum
          die casting.
        </p>
        <p className={styles.description}>
          Aluminum A380 was selected for its balance of lightweight properties,
          medium strength, machinability, and cost-effectiveness. With 9
          individual plates per unit, aluminum's low density directly reduces
          packaging requirements and shipping costs compared to heavier alloys.
          Cold-chamber die casting was specified to accommodate aluminum's high
          melting point and corrosive characteristics.
        </p>
        <p className={styles.description}>
          Key design decisions were driven by die casting constraints: a nominal
          wall thickness of 0.1" (exceeding the 0.08" minimum for aluminum),
          fillets of 0.15" applied to all inside corners to prevent stress
          concentrations, and outside corners left unfilleted to maintain
          contact with the corresponding rail. Ribs were added for stiffness,
          and the parting line was placed along the junction of the inside curve
          and sides to eliminate the need for side-action tooling - a deliberate
          tradeoff acknowledging that a curved parting line is non-ideal but
          minimizes tooling complexity. A minimum tolerance of ±0.002" was
          specified throughout, with ejector pin placement reserved for open
          areas along the outside curve.
        </p>
      </section>

      <section>
        <div className={styles.top}>
          <h2 className={styles["section-header"]}>Sheet Metal Projects</h2>
        </div>
        <ul className={styles.list}>
          {renderImageList(renders.sheetMetalImages)}
        </ul>
      </section>

      <section>
        <div className={styles.top}>
          <h2 className={styles["section-header"]}>Drafting Desk</h2>
          <p className={styles.description}>
            Functional Mechanical Drafting Desk
          </p>
        </div>
        <ul className={styles.list}>{renderImageList(renders.deskImages)}</ul>
      </section>

      <section>
        <div className={styles.top}>
          <h2 className={styles["section-header"]}>3D Printed Solutions</h2>
        </div>
        <ul className={styles.list}>
          {renderImageList(renders.threeDPrintsImages)}
        </ul>
      </section>

      <section>
        <div className={styles.top}>
          <h2 className={styles["section-header"]}>Even More!</h2>
        </div>
        <ul className={styles.list}>{renderImageList(renders.otherImages)}</ul>
      </section>
    </div>
  );
}
