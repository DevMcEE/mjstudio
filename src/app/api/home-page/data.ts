import { Locale } from "@/i18n/config.types";
import { Content, Menu, MetadataType, PageLocaleData } from "../route.types";

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
    { title: 'Services', url: '/', hash: 'services' },
    { title: 'About us', url: '/', hash: 'about' },
    { title: 'Contact', url: '/', hash: 'contact' },
  ],
  [Locale.ru]: [
    { title: 'Услуги', url: '/', hash: 'uslugi' },
    { title: 'О нас', url: '/', hash: 'o-nas' },
    { title: 'Контакты', url: '/', hash: 'kontakt6' },
  ],
  [Locale.et]: [
    { title: 'Teenused', url: '/', hash: 'teenused' },
    { title: 'Meist', url: '/', hash: 'meist' },
    { title: 'Kontakt', url: '/', hash: 'kontaktid' },
  ],
  [Locale.th]: [
    { title: 'บริการ', url: '/', hash: 'brikar' },
    { title: 'เกี่ยวกับเรา', url: '/', hash: 'kieo-kap-rao' },
    { title: 'ติดต่อ', url: '/', hash: 'tit-to' },
  ],
};

export const content: Content = {
  [Locale.en]: {
    pageTitle: 'MJ Studio',
    pageSubTitle: 'face massage',
    pageDescription: 'Expert Care for Face, Head and Shoulders',
    address: 'Viru 9, TALLINN',
    currency: '€',
    serviceBlockId: menu[Locale.en][0].hash,
    services: [
      {
        name: 'Face massage',
        description: 'Clean face, Face massage, Head & Shoulder massage',
        prices: [
          { unit: '60min', price: '50' },
          { unit: '90min', price: '60' },
        ],
      },
      {
        name: 'Face scrap',
        description: 'Clean face, Face scrap, Face massage, Head & Shoulder massage',
        prices: [
          { unit: '60min', price: '50' },
          { unit: '90min', price: '60' },
        ]
      },
      {
        name: 'MJ Course Treatment Massage',
        description: 'Clean face, Face scrap, Face massage treatment, head & shoulder massage',
        prices: [
          { unit: '90min', price: '65' },
          { unit: '120min', price: '95' },
        ]
      },
      {
        name: 'MJ Full Course for hairs ',
        description: 'Wash hair, Hair treatment, Hair dryer, Full face treatment,  head & shoulder massage, Chest & hands massage',
        prices: [
          { unit: 'Short hair', price: '125' },
          { unit: 'Long Hair ', price: '135' },
        ]
      },
      {
        name: 'Washing hairs',
        description: '',
        prices: [
          { unit: 'Short hair', price: '25' },
          { unit: 'Long Hair ', price: '35' },
        ]
      },
    ],
    aboutUs: {
      title: 'About Us',
      description:[ 
        'Welcome to our cozy and professional studio, located in the heart of the Old Town at Viru 9. With a convenient and easily accessible location, we aim to provide a tranquil space where you can escape the hustle of daily life and focus on self-care.',
        'Our team consists of two highly skilled therapists: Jen, a certified expert from Thailand, and Tracy, a certified specialist from India. Both bring years of experience in massage and face care, combining traditional techniques with modern methods to ensure the best results for your skin and well-being.',
        'At our studio, we are committed to helping you relax, rejuvenate, and rediscover your natural beauty. Whether you\'re looking for a refreshing face treatment, therapeutic massage, or a holistic care experience, we are here to make you feel your best.',
        'Visit us and let our experts take care of you— you\'ll leave feeling refreshed, revitalized, and glowing!'
      ] ,
      abouyUsImage:  '/aboutUsImage.JPG',
    },
  },
  [Locale.ru]: {
    pageTitle: 'MJ Studio',
    pageSubTitle: 'массаж лица',
    pageDescription: 'Профессиональный уход за лицом, головой и плечами',
    address: 'Viru 9, ТАЛЛИНН',
    currency: '€',
    serviceBlockId: menu[Locale.ru][0].hash,
    services: [
      {
        name: 'Массаж лица',
        description: 'Чистка лица, Массаж лица, Массаж головы и плеч',
        prices: [
          { unit: '60мин', price: '50' },
          { unit: '90мин', price: '60' },
        ]
      },
      {
        name: 'Скраб лица',
        description: 'Чистка лица, Скраб лица, Массаж лица, Массаж головы и плеч',
        prices: [
          { unit: '60мин', price: '50' },
          { unit: '90мин', price: '60' },
        ]
      },
      {
        name: 'Курс лечения MJ',
        description: 'Чистка лица, Скраб лица, Лечебный массаж лица, Массаж головы и плеч',
        prices: [
          { unit: '90мин', price: '65' },
          { unit: '120мин', price: '95' },
        ]
      },
      {
        name: 'Полный курс MJ для волос',
        description: 'Мытье волос, Лечение волос, Сушка волос, Полный уход за лицом, Массаж головы и плеч, Массаж груди и рук',
        prices: [
          { unit: 'Короткие волосы', price: '125' },
          { unit: 'Длинные волосы', price: '135' },
        ]
      },
      {
        name: 'Мытье волос',
        description: '',
        prices: [
          { unit: 'Короткие волосы', price: '25' },
          { unit: 'Длинные волосы', price: '35' },
        ]
      },
    ],
    aboutUs: {
      title: 'О нас',
      description:[ 
        'Добро пожаловать в нашу уютную и профессиональную студию, расположенную в самом сердце Старого города на Виру 9. Благодаря удобному и легко доступному месторасположению, мы стремимся обеспечить спокойное пространство, где вы можете сбежать от суеты повседневной жизни и сосредоточиться на заботе о себе.',
        'Наша команда состоит из двух высококвалифицированных терапевтов: Джен, сертифицированного эксперта из Таиланда, и Трейси, сертифицированного специалиста из Индии. Обе имеют многолетний опыт в массаже и уходе за лицом, сочетая традиционные техники с современными методами, чтобы обеспечить наилучшие результаты для вашей кожи и благополучия.',
        'В нашей студии мы стремимся помочь вам расслабиться, омолодиться и заново открыть свою природную красоту. Независимо от того, ищете ли вы освежающий уход за лицом, лечебный массаж или комплексный опыт ухода, мы здесь, чтобы вы чувствовали себя превосходно.',
        'Посетите нас, и наши эксперты позаботятся о вас — вы уйдете, чувствуя себя обновленными, полными сил и сияющими!'
      ] ,
      abouyUsImage:  '/aboutUsImage.JPG',
    },
  },
  [Locale.et]: {
    pageTitle: 'MJ Studio',
    pageSubTitle: 'Näomassaaž',
    pageDescription: 'Professionaalne näo-, pea- ja õlahooldus',
    address: 'Viru 9, TALLINN',
    currency: '€',
    serviceBlockId: menu[Locale.et][0].hash,
    services: [
      {
        name: 'Näomassaaž',
        description: 'Näo puhastamine, Näomassaaž, Pea- ja õlamassaaž',
        prices: [
          { unit: '60min', price: '50' },
          { unit: '90min', price: '60' },
        ]
      },
      {
        name: 'Näokoorimine',
        description: 'Näo puhastamine, Näokoorimine, Näomassaaž, Pea- ja õlamassaaž',
        prices: [
          { unit: '60min', price: '50' },
          { unit: '90min', price: '60' },
        ]
      },
      {
        name: 'MJ kursuse ravi massaaž',
        description: 'Näo puhastamine, Näokoorimine, Näomassaaži ravi, Pea- ja õlamassaaž',
        prices: [
          { unit: '90min', price: '65' },
          { unit: '120min', price: '95' },
        ]
      },
      {
        name: 'MJ täiskursus juustele',
        description: 'Juuste pesemine, Juuste ravi, Juuste kuivatamine, Täielik näohooldus, Pea- ja õlamassaaž, Rinna- ja kätemassaaž',
        prices: [
          { unit: 'Lühikesed juuksed', price: '125' },
          { unit: 'Pikad juuksed', price: '135' },
        ]
      },
      {
        name: 'Juuste pesemine',
        description: '',
        prices: [
          { unit: 'Lühikesed juuksed', price: '25' },
          { unit: 'Pikad juuksed', price: '35' },
        ]
      },
    ],
    aboutUs: {
      title: 'Meist',
      description:[ 
        'Tere tulemast meie hubasesse ja professionaalsesse stuudiosse, mis asub Viru 9. vanalinnas. Mugava ja kergesti ligipääsetava asukohaga soovime pakkuda rahulikku ruumi, kus saate põgeneda igapäevase elu sagimisest ja keskenduda enesehooldusele.',
        'Meie meeskond koosneb kahest kõrgelt kvalifitseeritud terapeudist: Jenist, Tai sertifitseeritud eksperdist, ja Tracyist, India sertifitseeritud spetsialistist. Mõlemad toovad massaaži ja näohoolduse valdkonnas aastatepikkuse kogemuse, ühendades traditsioonilised tehnikad kaasaegsete meetoditega, et tagada parimad tulemused teie naha ja heaolu jaoks.',
        'Meie stuudios oleme pühendunud aitama teil lõõgastuda, noorendada ja taasavastada oma loomulikku ilu. Otsite värskendavat näohooldust, terapeutilist massaaži või holistilist hoolduskogemust, oleme siin, et te tunneksite end oma parimal viisil.',
        'Külastage meid ja laske meie ekspertidel enda eest hoolitseda — lahkute tunne, et olete värskendatud, elustatud ja sädelev!'
      ] ,
      abouyUsImage:  '/aboutUsImage.JPG',
    },
  },
  [Locale.th]: {
    pageTitle: 'MJ Studio',
    pageSubTitle: 'นวดหน้า',
    pageDescription: 'การดูแลมืออาชีพสำหรับใบหน้า ศีรษะ และไหล่',
    address: 'Viru 9, ชั้น 2, 1\nทาลลินน์, เอสโตเนีย',
    currency: '€',
    serviceBlockId: menu[Locale.th][0].hash,
    services: [
      {
        name: 'นวดหน้า',
        description: 'ทำความสะอาดหน้า, นวดหน้า, นวดศีรษะและไหล่',
        prices: [
          { unit: '60นาที', price: '50' },
          { unit: '90นาที', price: '60' },
        ]
      },
      {
        name: 'ขัดหน้า',
        description: 'ทำความสะอาดหน้า, ขัดหน้า, นวดหน้า, นวดศีรษะและไหล่',
        prices: [
          { unit: '60นาที', price: '50' },
          { unit: '90นาที', price: '60' },
        ]
      },
      {
        name: 'นวดบำบัดหลักสูตร MJ',
        description: 'ทำความสะอาดหน้า, ขัดหน้า, นวดบำบัดหน้า, นวดศีรษะและไหล่',
        prices: [
          { unit: '90นาที', price: '65' },
          { unit: '120นาที', price: '95' },
        ]
      },
      {
        name: 'หลักสูตรเต็มรูปแบบ MJ สำหรับผม',
        description: 'สระผม, บำบัดผม, เป่าผม, บำบัดหน้าครบวงจร, นวดศีรษะและไหล่, นวดหน้าอกและมือ',
        prices: [
          { unit: 'ผมสั้น', price: '125' },
          { unit: 'ผมยาว', price: '135' },
        ]
      },
      {
        name: 'สระผม',
        description: '',
        prices: [
          { unit: 'ผมสั้น', price: '25' },
          { unit: 'ผมยาว', price: '35' },
        ]
      },
    ],
    aboutUs: {
      title: 'เกี่ยวกับเรา',
      description:[ 
        'ยินดีต้อนรับสู่สตูดิโอที่อบอุ่นและมืออาชีพของเรา ตั้งอยู่ในใจกลางเมืองเก่าที่ Viru 9 ด้วยทำเลที่สะดวกและเข้าถึงง่าย เรามุ่งมั่นที่จะมอบพื้นที่เงียบสงบให้คุณสามารถหลีกหนีจากความวุ่นวายของชีวิตประจำวันและมุ่งเน้นการดูแลตัวเองได้',
        'ทีมของเราประกอบด้วยนักบำบัดที่มีทักษะสูงสองคน: เจน ผู้เชี่ยวชาญที่ได้รับการรับรองจากประเทศไทย และเทรซี ผู้เชี่ยวชาญที่ได้รับการรับรองจากอินเดีย ทั้งสองมีประสบการณ์หลายปีในด้านการนวดและการดูแลผิวหน้า ผสมผสานเทคนิคดั้งเดิมกับวิธีการสมัยใหม่เพื่อให้ได้ผลลัพธ์ที่ดีที่สุดสำหรับผิวและความเป็นอยู่ที่ดีของคุณ',
        'ที่สตูดิโอของเรา เรามุ่งมั่นที่จะช่วยให้คุณผ่อนคลาย ฟื้นฟู และค้นพบความงามตามธรรมชาติของคุณอีกครั้ง ไม่ว่าคุณกำลังมองหาการดูแลผิวหน้าที่สดชื่น การนวดบำบัด หรือประสบการณ์การดูแลแบบองค์รวม เราพร้อมที่จะทำให้คุณรู้สึกดีที่สุด',
        'มาเยี่ยมเราสิ และให้ผู้เชี่ยวชาญของเราดูแลคุณ—you\'ll ออกจากที่นี่ด้วยความรู้สึกสดชื่น ฟื้นฟู และเปล่งประกาย!'
      ] ,
      abouyUsImage:  '/aboutUsImage.JPG',
    },
  }
};

export const data: PageLocaleData = {
  [Locale.en]: {
    metadata: metadata[Locale.en],
    menu: menu[Locale.en],
    body: content[Locale.en],
    footer: {},
  },
  [Locale.ru]: {
    metadata: metadata[Locale.ru],
    menu: menu[Locale.ru],
    body: content[Locale.ru],
    footer: {},
  },
  [Locale.et]: {
    metadata: metadata[Locale.et],
    menu: menu[Locale.et],
    body: content[Locale.et],
    footer: {},
  },
  [Locale.th]: {
    metadata: metadata[Locale.th],
    menu: menu[Locale.th],
    body:  content[Locale.th],
    footer: {},
  },
}
