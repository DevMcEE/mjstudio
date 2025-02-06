export const formatPriceCurrency = (price: number) => new Intl.NumberFormat("et", {
  style: 'currency',
  currency: 'EUR',
  currencyDisplay: 'code',
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
  useGrouping: true,
}).format(price);