import { NavLink } from "react-router-dom";
import styles from './Navigation.module.scss';
import cx from 'classnames';

const links = [
  { link: '/', name: 'Home', onlyMobile: true },
  { link: '/events', name: 'Schedule/Timeline' },
  { link: '/gallery', name: 'Gallery' },
  { link: 'https://forms.gle/YOUR_FORM_LINK', name: 'Register', external: true }
];

const NavItem = ({ name, link, handleClick, external }) => {
  if (external) {
    return (
      <a 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={cx(styles['router-link'], 'link')}
      >
        {name}
      </a>
    );
  }
  
  return (
    <NavLink 
      to={link} 
      onClick={handleClick} 
      className={state => cx(
        styles['router-link'], 
        'link',
        { [styles.active]: state.isActive }
      )}
    >
      {name}
    </NavLink>
  );
};

const Navigation = () => {
  const toggleMobileNav = () => {
    const mobileNav = document.querySelector(`.${styles.mobile}`);
    const mobileNavBtns = document.querySelectorAll(`.${styles['mobile-hamburger-btn']}`);
    mobileNavBtns.forEach(btn => {
      btn.classList.toggle(styles.active);
    });
    mobileNav.classList.toggle(styles.active);
    document.body.style.overflow = mobileNav.classList.contains(styles.active) ? 'hidden' : 'auto';
  };

  return (
    <header>
      <nav className={styles.nav} id="nav">
        <div className={styles.logo}>
          <NavLink to={'/'}>ASTITVA</NavLink>
        </div>
        <div className={cx(styles["router-links"], styles.desktop)}>
          {links.filter(link => !link.onlyMobile).map(link => 
            <NavItem key={link.name} {...link} />
          )}
        </div>
        <button 
          aria-label="Menu" 
          className={styles['mobile-hamburger-btn']} 
          type='button'
          onClick={(e) => { e.preventDefault(); toggleMobileNav(); }}
        >
          Close
        </button>
      </nav>
      <nav className={styles.mobile}>
        <button 
          aria-label="Menu" 
          className={styles['mobile-hamburger-btn']} 
          type='button'
          onClick={(e) => { e.preventDefault(); toggleMobileNav(); }}
        >
          Close
        </button>
        <ul className={styles["router-links"]}>
          {links.map(link =>
            <li key={link.name}>
              <NavItem handleClick={toggleMobileNav} {...link} />
            </li>
          )}
        </ul>
        <div className={styles['nav-footer']}>
          &copy;2024 USC-UIT
        </div>
      </nav>
    </header>
  );
};

export default Navigation;