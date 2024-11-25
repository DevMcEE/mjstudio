import { Locale } from "@/i18n/config.types";
import { Menu, MetadataType, PageLocaleData } from "../route.types";

export const metadata: MetadataType = {
  [Locale.en]: {
    title: 'MJ Studio',
    description: 'Refresh Your Look! Expert Care for Face, Head and Shoulders',
  },
  [Locale.ru]: {
    title: 'MJ Studio',
    description: 'Освежите свой образ! Профессиональный уход за лицом, головой и плечами',
  },
  [Locale.et]: {
    title: 'MJ Studio',
    description: 'Värskenda oma välimust! Professionaalne näo-, pea- ja õlahooldus',
  },
  [Locale.th]: {
    title: 'MJ Studio',
    description: 'เปลี่ยนลุคของคุณให้สดใหม่! การดูแลมืออาชีพสำหรับใบหน้า ศีรษะ และไหล่',
  },
} as const;

export const menu: Menu = {
  [Locale.en]: [
    { title: 'Prices', url: '/', hash: '#prices' },
    { title: 'About us', url: '/', hash: '#about' },
    { title: 'Contact', url: '/', hash: '#contact' },
  ],
  [Locale.ru]: [
    { title: 'Цены', url: '/', hash: '#tseni' },
    { title: 'О нас', url: '/', hash: '#o-nas' },
    { title: 'Контакты', url: '/', hash: '#kontakt6' },
  ],
  [Locale.et]: [
    { title: 'Hinnad', url: '/', hash: '#hinnad' },
    { title: 'Meist', url: '/', hash: '#meist' },
    { title: 'Kontakt', url: '/', hash: '#kontaktid' },
  ],
  [Locale.th]: [
    { title: 'ราคา', url: '/', hash: '#raka' },
    { title: 'เกี่ยวกับเรา', url: '/', hash: '#kieo-kap-rao' },
    { title: 'ติดต่อ', url: '/', hash: '#tit-to' },
  ],
};

export const data: PageLocaleData = {
  [Locale.en]: {
    metadata: metadata[Locale.en],
    menu: menu[Locale.en],
    body: {},
    footer: {},
  },
  [Locale.ru]: {
    metadata: metadata[Locale.ru],
    menu: menu[Locale.ru],
    body: {},
    footer: {},
  },
  [Locale.et]: {
    metadata: metadata[Locale.et],
    menu: menu[Locale.et],
    body: {},
    footer: {},
  },
  [Locale.th]: {
    metadata: metadata[Locale.th],
    menu: menu[Locale.th],
    body: {},
    footer: {},
  },
}
