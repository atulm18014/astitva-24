import styles from '../styles/Footer.module.scss';
import cx from 'classnames'
import { ReactComponent as MailIcon } from '../media/icons/mail.svg';
import { ReactComponent as WAIcon } from '../media/icons/wa.svg';


const Footer = () => {
 

  return (
    <footer className='container'>
      <div className={styles.MainFooterContent}>
        <div className={styles.footerItems}>
          <div >
            <p>Contact us</p>
            <ul className={styles.SocialHandles}>
              <li className={cx(styles['handle-wrapper'])}>
                <a className={styles.handle} target='_blank' rel='noreferrer' href="#">
                  <svg role="presentation" aria-label="Insta" aria-hidden="true">
                    <use href="/media/icons/sprite.svg#social-instagram"></use>
                  </svg>
                </a>
              </li>
              <li className={cx(styles['handle-wrapper'])}>
                <a className={styles.handle} target='_blank' rel='noreferrer' href="mailto:">
                  <MailIcon />
                </a>
              </li>
              <li className={cx(styles['handle-wrapper'])}>
                <a className={styles.handle} target='_blank' rel='noreferrer' href="#">
                  <WAIcon />
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.thanks}>
            <span>Thank you  for your support</span>
          </div>
         
        </div>
      </div>
      <div className={styles.copyright}>
        <div className={styles.team}>
          <span>
            Designed by <a className={cx('link', styles.ln)} target='_blank' rel='noreferrer' href="https://github.com/atulm18014">@AtulMaurya</a>
          
          </span>
          <span className={styles.sep}>~</span>
          <span>&copy; 2024 USC-UIT</span>
         
        </div>
      </div>
    </footer>
  )
}

export default Footer