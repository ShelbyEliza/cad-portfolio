import styles from "../components-css/HeaderSimple.module.css";
import { NavLink } from "react-router-dom";
import selfie from "../assets/selfie.jpg"; // swap in your actual photo path

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles["header-container"]}>
        <div className={styles["top-section"]}>
          <img className={styles.photo} src={selfie} alt="Shelby Shipley" />
          <div className={styles["name-block"]}>
            <h1 className={styles.name}>Shelby Shipley</h1>
            <p className={styles.subtitle}>Certified CAD Designer & Drafter</p>
            <div className={styles["contact-info"]}>
              <a href="mailto:mail@shelbyshipley.dev">mail@shelbyshipley.dev</a>
              <a
                href="https://github.com/ShelbyEliza"
                target="_blank"
                rel="noreferrer"
              >
                github.com/ShelbyEliza
              </a>
            </div>
          </div>
        </div>

        <nav className={styles.nav}>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/models">Renders</NavLink>
          <NavLink to="/sites">Websites</NavLink>
        </nav>
      </div>
    </header>
  );
}
