import { PageLocaleData, Service } from '@/app/api/route.types';
import { SubmitButton } from '../SubmitButton';
import styles from './Stepper.module.css';
import { Locale } from '@/i18n/config.types';
import { SelectedServices } from './Stepper.types';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { formatPriceCurrency } from '@/app/utils/formatPriceCurrency';

const fetchContent = async (): Promise<PageLocaleData> => {
  const response = await fetch('/api/home-page/services');
  const data = await response.json();

  return data;
};

const getServices = (data: PageLocaleData, locale: Locale, range: number): Service[] => {
  const serviceOptinos: Service[] = [];
  const servicesList = data[locale]?.body?.services;

  if (!servicesList || !Array.isArray(servicesList)) {
    return [];
  }

  range = range > servicesList.length ? servicesList.length : range;

  for (let i = 0; i < range; i++) {
    serviceOptinos.push(servicesList[i]);
  }

  return serviceOptinos;
};

export interface FromsProps {
  handleSubmit: () => void
  handleResetForm: () => void
}

export const Form = ({ handleSubmit, handleResetForm }: FromsProps): JSX.Element => {

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
  selectedService: SelectedServices;
  setSelectedService: Dispatch<SetStateAction<SelectedServices>>
}

export const MockForm = ({ handleSubmit, locale, selectedService, setSelectedService }: MockFormProps): JSX.Element => {
  const [data, setData] = useState<PageLocaleData>(() => ({} as PageLocaleData));
  const [services, setServices] = useState<Service[]>(() => ([] as Service[]));

  const serviceRange = 5;

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await fetchContent();

      setData(fetchedData);
    };

    fetchData();
  }, []);

  useEffect(() => {
    setServices(getServices(data, locale, serviceRange));
  }, [data, locale, serviceRange]);

  const handleSelect = ({ name, unit, price, date, time }: SelectedServices): void => {
    setSelectedService({ name, unit, price, date, time });
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
                title={`${service.name} ${price.unit} - ${formatPriceCurrency(Number(price.price))}`.trim()}
                secondary={
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