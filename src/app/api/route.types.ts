import { Locale } from "@/i18n/config.types";

export type MetaDataLocale = {
  title: string;
  description: string;
  keywords: string;
  image: string;
}
export type MetadataType = {
  [key in Locale]: MetaDataLocale;
};

export const Route = {
  homePage: 'api/home-page',
  homePageMetadata: 'api/home-page/metadata',
  homePageBody: 'api/home-page/body',
  homePageFooter: 'api/home-page/footer',
  homePageMenu: 'api/home-page/menu',
} as const;

export type MenuItem = {
  title: string;
  url: string;
  hash: string;
}

export type Menu = {
  [key in Locale]: MenuItem[];
}

export type Price = {
  unit: string;
  price: string;
}

export type Service = {
  name: string;
  description: string;
  prices: Price[];
}

export type AboutBlock = {
  title: string;
  description: string[];
  abouyUsImage: string;
}

export type WorkingHour = {
  weekdays: string;
  hours: string;
}

export type SocialLinks = {
  facebook?: string;
  instagram?: string;
  twitter?: string;
  tiktok?: string;
}
export type Contact = {
  companyName: string;
  companyRegNum: string;
  companyAddress: string;
  workingHours: WorkingHour[];
  bookingNote: string;
  callToContact: string;
  email: string;
  phone: string;
  visiblePhone: string;
  socialLinks: SocialLinks;
}

export type JsonLd = {
  "@context"?: string;
  "@type": string;
  "@id": string;
  name: string;
  description: string;
  url: string;
  telephone: string;
  address: {
    "@type": string;
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
  };
  openingHours: string[];
  geo: {
    "@type": string;
    latitude: string;
    longitude: string;
  };
  image: string;
  priceRange: string;
  sameAs: string[];
};
export type ContentItem = {
  pageTitle: string;
  pageSubTitle: string;
  pageDescription: string;
  address: string;
  currency: string;
  serviceBlockId: string;
  services: Service[];
  extraServices: string[];
  aboutUsId: string;
  aboutUs: AboutBlock;
  contactsId: string;
  contacts: Contact;
  jsonLd: JsonLd;
}

export type Content = {
  [key in Locale]: ContentItem;
}

export interface PageData {
  metadata: MetadataType[Locale];
  menu: Menu[Locale];
  body: Content[Locale];
  footer: unknown;
}

export type PageLocaleData = {
  [key in Locale]: PageData;
}

export interface BusinessData {
  companyName: string;
  companyRegNum: string
  address: string;
  email: string;
  telephone: string;
  formattedPhone: string;
  country: string;
  postalCode: string;
  city: string;
  latitude: string;
  longitude:  string;
}