import cx from "classnames";
import styles from "../styles/Home.module.scss";

import Carousel from "../components/Carousel";
import HighlightCard from "../components/HighlightCard";

import { events, highlights } from "../data/data";
import { mainCoordinators } from "../data/data";
import Hero from "../components/Hero";
import { motion } from "framer-motion";

// Example tags (you can adjust this as needed)
const tags = [
  "cosplay",
  "fun",
  "poetry",
  "face painting",
  "solo song",
  "dance",
  "essay",
  "sketching",
  "concert",
  "flash mob",
  "film making",
  "joy",
  "concert",
  "dj",
  "poetry slam",
  "technology",
  "hacking",
];

// Example sponsor images (these paths will reference files in the /public/sponsors/ directory)
const sponsors = [
  "media/sponsors/wiki.png",
  "media/sponsors/gdg.png",
  "media/sponsors/logo1.png",
];

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <section className={cx(styles["intro-section"], styles["home-section"])}>
        <div className={styles["intro-bg"]}>
          <div className={styles.rail}>
            {tags.map((tag, i) => (
              <span key={i}>{tag} </span>
            ))}
          </div>
          <div className={styles.rail}>
            {tags.map((tag, i) => (
              <span key={i}>{tag} </span>
            ))}
          </div>
          <div className={styles.rail}>
            {tags.map((tag, i) => (
              <span key={i}>{tag} </span>
            ))}
          </div>
        </div>
        <header
          className={cx(styles.introContent, styles.sectionHeader, "container")}
        >
          <h2 className={styles.text}>
            <span style={{ marginRight: "3ch" }}>Astitva</span>
            <span className={styles._ar}>2024</span>
          </h2>
          
        </header>
        <p className={styles.subtitle}>
            <b>ASTITVA</b> embodies <i>existence</i> in Sanskrit, <br />{" "}
            Celebrating our vibrant college community. <br /> This grand event
            showcases the essence of creativity and talent through five dynamic
            clubs: <br />
            • <b>Rhetorical Cosmos</b> <br />
            • <b>Developers Club</b> <br /> 
            • <b>Cultural Club</b> <br />
            • <b>Robotics and IoT Club</b> <br />
            • <b>Sports Club</b> <br />
            <br />
            ASTITVA promises an extraordinary experience, blending intellect,
            innovation, and cultural flair.
          </p>
      </section>

      <section
        className={cx(styles["home-section"], "container", styles.highlights)}
      >
        <header className={styles.sectionHeader}>
          <h2 className={styles.heading}>
            <span>Event highlights</span>
          </h2>
        </header>

        <main>
          <div className={styles.hlgallery}>
            {highlights.map((id) => (
              <HighlightCard key={id} {...events[id]} />
            ))}
          </div>
        </main>
      </section>

      <section
        className={cx(styles["home-section"], "container", styles.sponsors)}
      >
        <header className={styles.sectionHeader}>
          <h2 className={styles.heading}>
            <span>Sponsors</span>
          </h2>
        </header>
        {/* Sponsors Grid */}
        <main>
          <div className={styles.sponsorGrid}>
            {sponsors.map((src, index) => (
              <div key={index} className={styles.sponsorItem}>
                <img src={src} alt={`Sponsor ${index + 1}`} />
              </div>
            ))}
          </div>
        </main>
      </section>

      <section className={cx(styles["home-section"], styles.coordinators)}>
        <header className={cx(styles.sectionHeader, "container")}>
          <h2 className={styles.heading}>
            <span style={{ marginRight: "3ch" }}>Our</span>
            <span className={styles._ar}>Team</span>
          </h2>
        </header>
        <main>
          <Carousel cardsList={mainCoordinators} />
        </main>
      </section>
    </motion.div>
  );
};

export default Home;
