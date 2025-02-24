import { Price, Service } from "@/app/api/route.types";
import { PriceCurrency } from "@/app/utils/formatPriceCurrency";

export type ServiceWithFormattedPrice = Omit<Service, "prices"> & {
    prices: (Omit<Price, "price"> & { price: PriceCurrency })[];
  };