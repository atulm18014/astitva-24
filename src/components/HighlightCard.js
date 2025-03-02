import styles from './HighlightCard.module.scss';

const HighlightCard = ({ figureSrc, title, desc }) => (
  <article className={styles.card}>
    <figure>
      <img alt={title} src={figureSrc} />
    </figure>
    <main>
      <h3 className={styles.cardTitle}>{title}</h3>
      <div className={styles.cardSubtitle}>
        <div className={styles.desc}>{desc}</div>
      </div>
    </main>
  </article>
)

export default HighlightCard;

