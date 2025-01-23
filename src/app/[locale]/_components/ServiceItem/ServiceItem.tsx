import { Service } from "@/app/api/route.types";
import styles from "./ServiceItem.module.css";

interface ServiceItemProps extends Service {
  currency: string;
};

export const ServiceItem = ({ name = '', description = '', prices = [], currency = '' }: ServiceItemProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      <div>
        {prices.map((item, index) => (
          <p className={styles.unitPrice} key={index}><span>{item.price}{currency}</span> <span className={styles.unit}>{item.unit}</span></p>
        ))}
      </div>
    </div>
  );
};