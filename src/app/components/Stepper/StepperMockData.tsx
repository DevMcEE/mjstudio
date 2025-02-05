import { PageLocaleData, Service } from '@/app/api/route.types';
import { SubmitButton } from '../SubmitButton';
import styles from './Stepper.module.css';
import { Locale } from '@/i18n/config.types';
import { SelectedServices } from './Stepper.types';
import { Dispatch, SetStateAction, useCallback, useEffect, useMemo, useState } from 'react';
import { formatPriceCurrency } from '@/app/utils/formatPriceCurrency';

const fetchContent = async (): Promise<PageLocaleData> => {
  const response = await fetch('/api/home-page/services');

  if (!response.ok) {
    throw new Error('Failed to fetch services');
  }

  return response.json();
};

const getServices = (data: PageLocaleData, locale: Locale): Service[] => {
  return data[locale]?.body?.services ?? [];
};

export interface FormsProps {
  handleSubmit: () => void
  handleResetForm: () => void
}

export const Form = ({ handleSubmit, handleResetForm }: FormsProps): JSX.Element => {

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
  const [data, setData] = useState<PageLocaleData | null>(null);
  const services = useMemo(() => (data ? getServices(data, locale) : []), [data, locale]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await fetchContent();

        setData(fetchedData);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchData();
  }, []);

  const handleSelect = useCallback(
    ({ name, unit, price, date, time }: SelectedServices): void => {
      setSelectedService({ name, unit, price, date, time });
      handleSubmit();
    },
    [setSelectedService, handleSubmit]
  );

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