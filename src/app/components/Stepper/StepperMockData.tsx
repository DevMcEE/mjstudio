import { Content } from '@/app/api/route.types';
import { SubmitButton } from '../SubmitButton';
import styles from './Stepper.module.css';
import { Locale } from '@/i18n/config.types';
import { SelectedServices } from './Stepper.types';
import { Dispatch, SetStateAction } from 'react';

const getServices = (content: Content, locale: Locale, range: number) => {
  const serviceOptinos = [];

  for (let i = 0; i <= range; i++) {
    serviceOptinos[i] = content[locale].services[i];
  }

  return serviceOptinos;
};

export interface FromsProps {
    handleSubmit: () => void
    handleResetForm: () => void
}

export const form = ({ handleSubmit, handleResetForm }: FromsProps): JSX.Element => {

  return (
    <div className={styles.mock}>
      <button onClick={handleSubmit}>CONFIRM</button>
      <button onClick={handleResetForm}>RESET</button>
    </div>
  );
};

export interface MockFormProps {
    handleSubmit: () => void;
    locale: Locale;
    content: Content;
    selectedService: SelectedServices;
    setSelectedService: Dispatch<SetStateAction<SelectedServices>>
}

export const mockForm = ({handleSubmit,locale, content, selectedService, setSelectedService}: MockFormProps): JSX.Element => {
  const serviceRange = 5;
  const services = getServices(content, locale, serviceRange);

  const handleSelect = ({ name, unit, price }: SelectedServices): void => {
    setSelectedService({ name, unit, price });
    handleSubmit();
  };

  return (
    <>
      {services.map((service) => (
        <div key={service.name} className={styles.mockForm}>
          <div>
            <span>{service.name}</span>
          </div>
          <div>
            {service.prices.map((price) => (
              <SubmitButton
                key={price.unit}
                title={`${service.name} ${price.unit} - ${price.price} EUR`}
                colorless={
                  service.name !== selectedService.name ||
                                    price.price !== selectedService.price
                }
                onClick={() =>
                  handleSelect({
                    name: service.name,
                    unit: price.unit,
                    price: price.price,
                  })
                }
              />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};
