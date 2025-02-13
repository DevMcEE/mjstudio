import { PageLocaleData } from "@/app/api/route.types";
import { Locale } from "@/i18n/config.types";
import { ServiceWithFormattedPrice } from "./ServiceSelectionForm.types";
import { formatPriceCurrency } from "@/app/utils/formatPriceCurrency";

export const fetchContent = async (): Promise<PageLocaleData> => {
  const response = await fetch('/api/home-page/services');

  if (!response.ok) {
    throw new Error('Failed to fetch services');
  }

  return response.json();
};

export const getServices = (data: PageLocaleData, locale: Locale) => {
  const services = data[locale]?.body?.services ?? [];
  const currency = data[locale]?.body?.currency ?? '€';
  const formattedServices: ServiceWithFormattedPrice[]  = services.map((service) => ({
    ...service,
    prices: service.prices.map(({ unit, price }) => ({
      unit,
      price: formatPriceCurrency({price: Number(price), currency, locale}),
    }))
  }));

  return formattedServices;
};
