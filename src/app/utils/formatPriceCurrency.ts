import { Locale } from "@/i18n/config.types";
import {currencyMap} from "@/app/utils/currencyMap";

export type PriceCurrency = {
  value: number,
  formattedPrice: string,
}

interface FormatPriceCurrencyParams {
  price: number,
  currency: string,
  locale?: Locale,
} 

export const formatPriceCurrency = ({price, currency, locale = "et"}: FormatPriceCurrencyParams): PriceCurrency => ({
  value: price,
  formattedPrice: new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyMap[currency],
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
    useGrouping: true,
  }).format(price)
});