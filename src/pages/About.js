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
                  Knowledgeable and motivated CADD designer with 1.5 years of
                  experience in <em>Autodesk Inventor</em>, <em>SolidWorks</em>,{" "}
                  <em>AutoCAD</em>, <em>Revit</em>, and <em>Fusion 360</em>.
                  Eager to contribute to a manufacturing team focused on
                  creating highly <b>parametric</b>, <b>durable</b>, and{" "}
                  <b>innovative </b>products - with a particular interest in{" "}
                  <b>sustainable product design</b> and
                  <b> low-environmental impact manufacturing</b>. A background
                  in front-end web development informs a CAD approach centered
                  on usability, iterative workflows, and clean design
                  documentation.
                </p>
                <h4>Hightlights & Qualifications:</h4>
                <ul className={styles["experience"]}>
                  <li className={styles["kumar"]}>
                    Robust understanding of <b>design intent</b>,{" "}
                    <b>functional manufacturing requirements</b>, and{" "}
                    <b>material selection</b>, demonstrated through projects,
                    such as:
                    <ul className={styles["sub-list"]}>
                      <li>
                        a 3D printed lyre stand designed around print bed
                        constraints, part stability, and layer orientation
                      </li>
                      <li>
                        an aluminum die casting redesign specifying draft
                        angles, fillet radii and placement, avoidance of
                        cutouts, and ejector pin positioning
                      </li>
                    </ul>
                  </li>
                  <li className={styles["proza"]}>
                    Self-motivated and detail-oriented, with a particular focus
                    on identifying and resolving design pitfalls before the
                    production phase. Experienced across multiple{" "}
                    <b>Fusion 360 workspaces</b>, including:
                    <ul className={styles["sub-list"]}>
                      <li>
                        <b>Simulation</b> workflows for static stress,
                        structural buckling, and shape optimization testing
                      </li>
                      <li>
                        <b>Manufacturing</b> - created custom CAM toolpaths for
                        milling and etching CAD designs in wood and acrylic
                        using an Othermill CNC
                      </li>
                      <li>
                        <b>Generative design</b>, identifying key preserve and
                        obstacle geometries informed by an understanding of
                        structural constraints
                      </li>
                    </ul>
                  </li>
                  <li>
                    Quick to learn and apply new tools and technologies,
                    bringing the same disciplined process to unfamiliar software
                    as to design problems
                  </li>
                  <li>
                    Experienced <b>team collaborator</b> with a background in
                    customer service and <b>project coordination</b>
                  </li>
                </ul>
                <h4>CAD:</h4>
                <ul className={styles["experience"]}>
                  <li>
                    Created complex 3D parts and assemblies with a focus on
                    manufacturability and functionality, including a{" "}
                    <b>full product design pipeline</b> for a concept waffle
                    maker guided by a<b> customer persona</b>, a{" "}
                    <b>SWOT analysis</b>, and a <b>Gantt chart timeline</b>. The
                    CAD modeling was informed by this extensive research and
                    product constraints such as <b></b>internal component
                    relationships, heat shielding requirements for sensitive
                    components, overall size and user-facing smart features,
                    including a Bluetooth-connected display for music streaming
                    control
                  </li>
                  <li>
                    Drafted <b>precise technical drawings</b> in compliance with
                    <b> GD&T</b> and <b>ANSI standards</b>, with advanced weld
                    symbol annotation on sheet metal projects including a patio
                    table and rear panel housing reproduction
                  </li>
                  <li>
                    Developed a working understanding of <b>sheet metal</b>{" "}
                    design considerations: bend placement and radii, hole and
                    cutout positioning, notch sizing, thickness tolerancing, and
                    mating part allowances
                  </li>
                  <li>
                    Leveraged <b>Inventor Studio</b> to produce visually
                    compelling renderings that showcase key product features and
                    improve market appeal
                  </li>
                  <li>
                    Utilized <b>iLogic forms</b> within Inventor to build
                    resilient, adaptable models that minimize reworks and
                    accommodate changing project needs
                  </li>
                  <li>
                    Managed file structures and revision control using GitHub in
                    collaborative design environments
                  </li>
                </ul>
                <h4>Programing & Web Development:</h4>
                <ul className={styles["experience"]}>
                  <li>
                    Developed and maintained a{" "}
                    <b>portfolio of 7+ web projects </b>
                    built in React, including a collaborative project management
                    site, a budget tracker, a reading library and blog, and a
                    reproduction of the classic Snake game
                  </li>
                  <li>
                    Designed sites that prioritize <b>usability</b> and{" "}
                    <b>long-term maintainability</b>, incorporating{" "}
                    <b>responsive layouts</b>, <b>accessibility standards</b>,
                    and evolving <b>digital design trends</b>
                  </li>
                  <li>
                    Currently migrating a React-based portfolio from Firebase to
                    Cloudflare Pages, including <b>dependency modernization</b>{" "}
                    and removal of legacy backend integrations
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
