import { useEffect, useState } from "react";
import CountdownTimer from "./CountdownTimer";
import { eventStartDate } from "../data/data";
import { ReactComponent as ScrollDownIcon } from '../media/icons/down.svg';
// import HeroVideo from '../media/astitva-intro.mp4';
// import HeroImage from '../media/astitva-intro.png';
import styles from './Hero.module.scss';

const Hero = () => {
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const navEl = document.getElementById('nav');
    const heroEl = document.getElementById('hero');
    const heroLogoLetters = document.querySelectorAll('.shouldAnimate');
    const coordinatorNames = document.getElementById('coordinatorsList');

    const parallaxAnimate = () => {
      if (!heroLogoLetters || heroLogoLetters.length === 0 || !coordinatorNames) return;

      // animate hero logo letters
      const offsetTop = heroLogoLetters[0].offsetTop;
      const speed = 0.04;

      heroLogoLetters.forEach((el, i) => {
        /** @type {HTMLElement} */
        const shift = Math.abs(3 - i) * speed * (offsetTop - el.getBoundingClientRect().top);
        el.style.transform = `translate3d(0, ${shift.toFixed(3)}px, 0)`;
      });

      // parallax animate coordinators
      const coordNamesTopOffset = coordinatorNames.getBoundingClientRect().top;
      coordinatorNames.style.transform = `translate3d(0, ${speed * coordNamesTopOffset.toFixed(3)}px, 0)`;
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navEl.style.position = 'absolute';
          navEl.style.top = '100vh';
        } else {
          navEl.style.position = 'fixed';
          navEl.style.top = '0';
        }
      });
    });

    if (heroEl) observer.observe(heroEl);
    if (heroLogoLetters.length > 0) {
      window.addEventListener('scroll', parallaxAnimate);
    }

    return () => {
      window.removeEventListener('scroll', parallaxAnimate);
      observer.disconnect();
      if (navEl) {
        navEl.style.position = 'fixed';
        navEl.style.top = '0';
      }
    };
  }, []);

  return (
    <div className={styles.hero} id="hero">
      <img className={styles['hero-bg']} src={HeroImage} alt="Astitva Hero" />
      <div className={styles.grain}></div>
      <video className={styles['hero-bg']} autoPlay muted loop>
        <source src={HeroVideo} type="video/mp4" />
      </video>
      <div className={styles.content}>
        <h1 className={styles.logo}>
          <span className='shouldAnimate'>A</span>
          <span className='shouldAnimate'>S</span>
          <span className='shouldAnimate'>T</span>
          <span className='shouldAnimate'>I</span>
          <span className='shouldAnimate'>T</span>
          <span className='shouldAnimate'>V</span>
          <span className='shouldAnimate'>A</span>
          <span className='shouldAnimate'> </span>
          <br />
          <span className='shouldAnimate'>'</span>
          <span className='shouldAnimate'>2</span>
          <span className='shouldAnimate'>4</span>
        </h1>

        <div className={styles.registerBtnContainer}>
          <a href="/register" className={styles.registerBtn}>
            Register Now
          </a>
        </div>

        <div className={styles.timeline}>
          {!isLive && (
            <CountdownTimer countdownDate={eventStartDate} handleTimerComplete={setIsLive} />
          )}

          <div className={styles.registerBtnContainer}>
            <a href="/register" className={styles.registerBtn}>
              Register Now
            </a>
          </div>
        </div>
      </div>
      <div className={styles.scrollDown} aria-hidden='true'>
        <ScrollDownIcon />
        <p className={styles.scrollDownText}>Scroll Down</p>
      </div>
    </div>
  );
};

export default Hero;
