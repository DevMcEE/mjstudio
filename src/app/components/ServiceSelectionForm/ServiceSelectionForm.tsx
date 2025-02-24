'use client';

import { PageLocaleData } from '@/app/api/route.types';
import { SubmitButton } from '../SubmitButton';
import { useCallback, useEffect, useMemo, useState } from 'react';
import styles from './ServiceSelectionForm.module.css';
import { FormComponentProps, SelectedServices } from '../Stepper/Stepper.types';
import { fetchContent, getServices } from './services';

export const ServiceSelectionForm = ({ handleSubmit, locale, selectedService, setSelectedService }: FormComponentProps): JSX.Element => {
  const [data, setData] = useState<PageLocaleData | null>(null);
  const services = useMemo(() => (data && locale ? getServices(data, locale) : []), [data, locale]);

  useEffect(() => {
    
    (async () => {
      try {
        const fetchedData = await fetchContent();

        setData(fetchedData);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    })();

  }, []);

  const handleSelect = useCallback(
    ({ name, unit, price, date, time }: SelectedServices): void => {
      if (setSelectedService) {
        setSelectedService({ name, unit, price, date, time });
      }
      handleSubmit();
    },
    [setSelectedService, handleSubmit]
  );

  return (
    <>
      {services.map((service) => (
        <div key={service.name} className={styles.serviceSelectionForm}>
          <div>
            <span>{service.name}</span>
          </div>
          <div>
            {service.prices.map((servicePrice) => {
              const price = servicePrice.price.formattedPrice;

              return (
                <SubmitButton
                  key={servicePrice.unit}
                  title={`${service.name} ${servicePrice.unit} - ${price}`}
                  secondary={
                    selectedService 
                      ? service.name !== selectedService.name ||
                      price !== selectedService.price
                      : false
                  }
                  onClick={() =>
                    handleSelect({
                      name: service.name,
                      unit: servicePrice.unit,
                      price: price,
                    })
                  }
                />
              );
            })}
          </div>
        </div>
      ))}
    </>
  );
};