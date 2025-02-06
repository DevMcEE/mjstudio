import { formatPriceCurrency } from '@/app/utils/formatPriceCurrency';
import { SelectedServices } from '../Stepper/Stepper.types';
import styles from './ServiceInfoBar.module.css';

export type InfoBarStyle = "primary" | "secondary";

export interface ServiceInfoBarProps {
    selectedService: SelectedServices;
    variant: InfoBarStyle;
}

export const ServiceInfoBar = ({selectedService, variant="primary"}: ServiceInfoBarProps) => {

  const { name, unit, price, date, time } = selectedService;
  const formattedPrice = isNaN(Number(price))
    ? ""
    : formatPriceCurrency(Number(price));

  return (
    <div className={styles.serviceInfoBar + " " + styles[variant]}>
      <div className={styles.serviceInfoBarDetails}>
        <div className={styles.serviceInfoBarDescription}>
          <div className={`${styles.serviceDescription} ${styles[variant]} ${date ? styles.date : ''}`}>{date || name}</div>
          <div className={styles.serviceSubDescription}>{unit || time}</div>
        </div>
        <div className={styles.servicePrice + " " + styles[variant]}>{formattedPrice}</div>
      </div>
    </div>
  );
};
