import { Service } from "@/app/api/route.types";
import { useTranslations } from "next-intl";
import styles from "../page.module.css";
import { ServiceItem } from "../_components/ServiceItem";

interface ServicesBlockProps {
  services?: Service[];
  currency?: string;
  serviceBlockId?: string;
};
export const ServicesBlock = ({ services = [], currency = '', serviceBlockId='services'}: ServicesBlockProps) => {
  const t = useTranslations();
  return (
    <div className={styles.serviceBlockContainer} id={serviceBlockId}>
      <div className={styles.serviceBlockContent}>
        <div className={styles.blockTitleContainer}>
          <h2 className={styles.blockTitle}>{t('services.title')}</h2>
        </div>
        <div className={styles.servicesListContainer}>
          { services.length === 0 && <div>{t('services.noServices')}</div> }
          { services.map((service, index) => (
            <ServiceItem currency={currency} key={index} {...service} />
          ))}
        </div>
      </div>

    </div>
  );
};