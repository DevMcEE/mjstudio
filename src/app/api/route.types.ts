import { Locale } from "@/i18n/config.types";

export type MetadataType = {
  [key in Locale]: {
    title: string;
    description: string;
  }
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
export interface PageData {
  metadata: MetadataType[Locale];
  menu: Menu[Locale];
  body: unknown;
  footer: unknown;
}

export type PageLocaleData = {
  [key in Locale]: PageData;
}