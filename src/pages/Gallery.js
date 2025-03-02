import { motion } from 'framer-motion';
import cx from 'classnames';
import styles from '../styles/Gallery.module.scss';
import Video from '../components/Video';

const Gallery = () => {
  return (
    <motion.div className={cx(styles.events, 'page-transition', 'container')}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
    >
      <header className={cx('page-header', styles['page-header'])}>
        <h1 className='heading'>
          <span>Gallery</span>
        </h1>
        <div className={cx('subtitle', styles['header-subtitle'])}>
          <h2>ASTITVA'23 Glimpse</h2>
        </div>
      </header>
      <main className={cx(styles['main-content'])}>
        <div className={cx(styles['gallery'])}>
          <div className={cx(styles['h1'])}>
            <h1>Video Glimpse</h1>
          </div>
          <div className={styles.videoContainer}>
            <Video embedId="km4f4qnEXq4" />
          </div>
        </div>
        <br />
        <hr />
        <div className={cx(styles['gallery'])}>
          <div className={styles.videoContainer}>
            <Video embedId="j3GeOzDE3OI" />
          </div>
        </div>
        <br />
        <hr />
        <div className={cx(styles['gallery'])}>
          <div className={styles.videoContainer}>
            <Video embedId="N5iamAgatug" />
          </div>
        </div>
        <br />
        <hr />
        <div className={cx(styles['gallery'])}>
          <div className={styles.videoContainer}>
            <Video embedId="N88jbkZBniE" />
          </div>
        </div>
        <br />
        <hr />
        <div className={cx(styles['gallery'])}>
          <div className={styles.videoContainer}>
            <Video embedId="B06u1RQocTI" />
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default Gallery;
