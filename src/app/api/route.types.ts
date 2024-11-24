import { Locale } from "@/i18n/config.types";

export type MetadataType = {
  [key in Locale]: {
    title: string;
    description: string;
  }
};