import styles from './Footer.module.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  let yearsRange = `${currentYear}`;

  if (process.env.COPYRIGHT_START_YEAR && +process.env.COPYRIGHT_START_YEAR !== currentYear) {
    yearsRange = `${process.env.COPYRIGHT_START_YEAR}-${currentYear}`;
  }

  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>© {yearsRange} ATMW Invest OÜ | Developed by <a href='https://devmc.ee/'>Devmcee</a></p>
    </footer>
  );
};