import styles from "../pages-css/About.module.css";
import {
  SiJavascript,
  SiReact,
  SiCss3,
  SiHtml5,
  SiFirebase,
  SiInkscape,
  SiNodedotjs,
  SiGithub,
} from "react-icons/si";

export default function About() {
  return (
    <div className="page-content">
      <div className={styles["about-container"]}>
        <section className={styles["edu-skills-section"]}>
          <div className={styles["col-2"]}>
            <div className={styles["col-2-content"]}>
              <h3>Education</h3>
              <h4 className={styles.indent}>
                Computer Aided Design and Drafting (CADD) Certificate
              </h4>
              <div className={styles["subtitle"]}>
                <p>Portland Community College</p>
                <p>Portland, OR</p>
                <p>Spring 2026</p>
              </div>
              <h4 className={styles.indent}>
                Bachelor of Science | Major in Geology
              </h4>
              <div className={styles["subtitle"]}>
                <p>University of Arkansas</p>
                <p>Fayetteville, AR</p>
                <p>Spring 2015</p>
              </div>
              <div className={styles["exp-section"]}>
                <h3>Experience</h3>
                <p className={styles.indent}>
                  Knowledgeable and motivated CADD designer with over 2 years of
                  experience working with 3D modeling tools such as{" "}
                  <b>Inventor</b>, <b>Solidworks</b>, and <b>Fusion 360</b>.
                  Eager to contribute to a manufacturing team aimed at creating
                  highly parametric, durable, and innovative products. A
                  background in front-end web development informs CADD modeling
                  approach centered on usability and iterative workflows.
                </p>
                <h4>Hightlights & Qualifications:</h4>
                <ul className={styles["experience"]}>
                  <li className={styles["kumar"]}>
                    Possesses a robust understanding of design intent,
                    functional manufacturing requirements, and material
                    selection
                  </li>
                  <li className={styles["proza"]}>
                    Self-motivated, detail-oriented, reliable, skilled at
                    anticipating design pitfalls and problem solving effectively
                  </li>
                  <li>
                    Quick to learn and keep up with new tools and technology
                    trends
                  </li>
                  <li>
                    Experienced team collaborator with a background in customer
                    service and project coordinating
                  </li>
                </ul>
                <h4>CAD:</h4>
                <ul className={styles["experience"]}>
                  <li>
                    Created complex 3D parts and assemblies with a focus on
                    manufacturability and functionality
                  </li>
                  <li>
                    Drafted precise 2D technical drawings in compliance with
                    GD&T and ANSI Standards
                  </li>
                  <li>
                    Leveraged Inventor Studio to produce visually compelling
                    renderings that showcase key product features and improve
                    market appeal
                  </li>
                  <li>
                    Utilized iLogic forms within Inventor to build resilient,
                    adaptable models that minimize reworks and accommodate
                    changing project needs
                  </li>
                  <li>
                    Managed file structures and revision control using Inventor
                    Vault and GitHub in collaborative design environments
                  </li>
                </ul>
                <h4>Programing & Web Development:</h4>
                <ul className={styles["experience"]}>
                  <li>
                    Developed and maintained a portfolio of 7+ web projects,
                    including a collaborative project management site, a budget
                    tracker, a reading library/blog, a of reproduction of the
                    classic game of Snake, and more
                  </li>
                  <li>
                    Designed sites that prioritize usability and long-term
                    maintainability, incorporating responsive layouts,
                    accessibility standards, and evolving digital design trends
                  </li>
                </ul>
              </div>

              <section className={styles["skills-section"]}>
                <ul className={styles["skills-list"]}>
                  <li className={styles.skill}>
                    <figure>
                      <img
                        className={styles.fig}
                        // aria-label="Inventor logo"
                        alt="Inventor logo"
                        src="/images/inventor-outline.svg"
                      />
                      <figcaption>
                        <h4>Inventor</h4>
                      </figcaption>
                    </figure>
                  </li>
                  <li className={styles.skill}>
                    <figure>
                      <img
                        className={styles.fig}
                        // aria-label="Fusion logo"
                        alt="Fusion logo"
                        src="/images/fusion.svg"
                      />
                      <figcaption>
                        <h4>Fusion</h4>
                      </figcaption>
                    </figure>
                  </li>
                  <li className={styles.skill}>
                    <figure>
                      <img
                        className={styles.fig}
                        // aria-label="AutoCAD logo"
                        alt="AutoCAD logo"
                        src="/images/autocad.svg"
                      />
                      <figcaption>
                        <h4>AutoCAD</h4>
                      </figcaption>
                    </figure>
                  </li>
                  <li className={styles.skill}>
                    <figure>
                      <img
                        className={styles.fig}
                        // aria-label="Revit logo"
                        alt="Revit logo"
                        src="/images/revit.svg"
                      />
                      <figcaption>
                        <h4>Revit</h4>
                      </figcaption>
                    </figure>
                  </li>
                  <li className={styles.skill}>
                    <figure>
                      <img
                        className={styles.fig}
                        // aria-label="Solidworks logo"
                        alt="Solidworks logo"
                        src="/images/solidworks.svg"
                      />
                      <figcaption>
                        <h4>Solidworks</h4>
                      </figcaption>
                    </figure>
                  </li>
                  <li className={styles.skill}>
                    <figure>
                      <SiJavascript
                        className={styles.fig}
                        aria-label="JavaScript logo"
                      />
                      <figcaption>
                        <h4>JavaScript</h4>
                      </figcaption>
                    </figure>
                  </li>
                  <li className={styles.skill}>
                    <figure>
                      <SiReact className={styles.fig} aria-label="React logo" />
                      <figcaption>
                        <h4>React</h4>
                      </figcaption>
                    </figure>
                  </li>
                  <li className={styles.skill}>
                    <figure>
                      <SiCss3 className={styles.fig} aria-label="CSS logo" />
                      <figcaption>
                        <h4>CSS</h4>
                      </figcaption>
                    </figure>
                  </li>
                  <li className={styles.skill}>
                    <figure>
                      <SiHtml5 className={styles.fig} aria-label="HTML logo" />
                      <figcaption>
                        <h4>HTML</h4>
                      </figcaption>
                    </figure>
                  </li>
                  <li className={styles.skill}>
                    <figure>
                      <SiFirebase
                        className={styles.fig}
                        aria-label="Firebase logo"
                      />
                      <figcaption>
                        <h4>Firebase</h4>
                      </figcaption>
                    </figure>
                  </li>
                  <li className={styles.skill}>
                    <figure>
                      <SiInkscape
                        className={styles.fig}
                        aria-label="Inkscape logo"
                      />
                      <figcaption>
                        <h4>Vector Art</h4>
                      </figcaption>
                    </figure>
                  </li>
                  <li className={styles.skill}>
                    <figure>
                      <SiNodedotjs
                        className={styles.fig}
                        aria-label="Node.js logo"
                      />
                      <figcaption>
                        <h4>Node.js</h4>
                      </figcaption>
                    </figure>
                  </li>
                  <li className={styles.skill}>
                    <figure>
                      <SiGithub
                        className={styles.fig}
                        aria-label="GitHub logo"
                      />
                      <figcaption>
                        <h4>GitHub</h4>
                      </figcaption>
                    </figure>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </section>

        {/* <section className={styles["passions-section"]}>
          <div className={styles["passions-header"]}>
            <h2 className={styles["section-heading"]}>Passions</h2>
          </div>
          <div className={styles["passions-content"]}>
            <ul>
              <li>
                <h3>monotonous tinkering.</h3>
                <p className={styles.indent}>
                  It may not be for everyone, but I love tedious tasks like
                  <br />
                  <b> constructing jigsaw puzzles</b>,
                  <b> adjusting vector nodes</b>, and
                  <b> tweaking website styles</b>.
                </p>
                <p>
                  Trekking through the CSS weeds never bogs me down because
                  subtle refinements to color and spacing lead to vibrant and
                  smooth web layouts, and that is something I treasure.
                </p>
              </li>
              <li>
                <h3>paying attention to the details.</h3>
                <p className={styles.indent}>
                  Activities, which require a <b>keen eye</b> and a{" "}
                  <b>patient nature</b>, take up most of my time.
                </p>
                <p>
                  From ardently tasting and refining the flavors of my homemade
                  beans and soups, to discovering fresh spring buds during a
                  hike, or scrutinizing the impressive (or not so impressive..)
                  UI decisions found across the web,{" "}
                  <b>I find joy in the details.</b>
                </p>
              </li>
              <li>
                <h3>spending time with loved ones.</h3>
                <p className={styles.indent}>
                  I am pleased to brag that I am a beloved auntie to{" "}
                  <b>three wonderful munchkins</b>. Whether it&#39;s imaginative
                  play or tickle-monster-tag time, I love fostering secure and
                  positive relationships with my niblings.
                </p>
              </li>
            </ul>
          </div>
        </section> */}
      </div>
    </div>
  );
}
