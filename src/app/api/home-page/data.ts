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

export const SocialLinks = {
  facebook: 'https://www.facebook.com/profile.php?id=61568231552804',
  instagram: 'https://www.instagram.com/mjstudiofacemassage/'
}

const Price = {
  faceMassage: {
    min60: '50',
    min90: '60',
  },
  faceScrap: {
    min60: '55',
    min90: '65',
  },
  mjCourseMassage: {
    min90: '75',
    min120: '95',
  },
  mjCourseHairs: {
    short: '125',
    long: '135',
  },
  washHairs: {
    short: '25',
    long: '35',
  }
}

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
          { unit: '60min', price: Price.faceMassage.min60 },
          { unit: '90min', price: Price.faceMassage.min90 },
        ],
      },
      {
        name: 'Face scrap',
        description: 'Clean face, Face scrap, Face massage, Head & Shoulder massage, Face Ozone',
        prices: [
          { unit: '60min', price: Price.faceScrap.min60 },
          { unit: '90min', price: Price.faceScrap.min90 },
        ]
      },
      {
        name: 'MJ Course Treatment Massage',
        description: 'Clean face, Face scrap, Face massage treatment, head & shoulder massage, Face Ozone',
        prices: [
          { unit: '90min', price: Price.mjCourseMassage.min90 },
          { unit: '120min', price: Price.mjCourseMassage.min120 },
        ]
      },
      {
        name: 'MJ Full Course',
        description: 'Wash hair, Hair treatment, Hair dryer, Full face treatment,  head & shoulder massage, Chest & hands massage, Face Ozone',
        prices: [
          { unit: '150min Short Hair', price: Price.mjCourseHairs.short },
          { unit: '150min Long Hair', price:  Price.mjCourseHairs.long },
        ]
      },
      {
        name: 'Washing hairs',
        description: '',
        prices: [
          { unit: 'Short hair', price:  Price.washHairs.short },
          { unit: 'Long Hair ', price:   Price.washHairs.long },
        ]
      },
    ],
    aboutUsId: menu[Locale.en][1].hash,
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
    contactsId: menu[Locale.en][2].hash,
    contacts: {
      companyName: 'ATMW Invest OÜ',
      companyRegNum: '16859397',
      companyAddress: 'Viru 9, TALLINN',
      workingHours: [
        { weekdays: 'Mon - Fri', hours: '10:00 - 18:00' },
        { weekdays: 'Sat - Sun', hours: '12:00 - 18:00' },
      ],
      bookingNote: 'NB! Our studio operates by appointment only—therapists are available exclusively during booked sessions.',
      callToContact: 'Schedule your appointment by contacting us',
      email: 'mjstudio.ee@gmail.com',
      phone: '(+372)58494331',
      socialLinks: SocialLinks
    }
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
          { unit: '60мин', price: Price.faceMassage.min60 },
          { unit: '90мин', price: Price.faceMassage.min90 },
        ]
      },
      {
        name: 'Скраб лица',
        description: 'Чистка лица, Скраб лица, Массаж лица, Массаж головы и плеч, Озон для лица',
        prices: [
          { unit: '60мин', price: Price.faceScrap.min60 },
          { unit: '90мин', price:  Price.faceScrap.min90 },
        ]
      },
      {
        name: 'Курс лечения MJ',
        description: 'Чистка лица, Скраб лица, Лечебный массаж лица, Массаж головы и плеч, Озон для лица',
        prices: [
          { unit: '90мин', price:   Price.mjCourseMassage.min90 },
          { unit: '120мин', price: Price.mjCourseMassage.min120 },
        ]
      },
      {
        name: 'Полный курс MJ',
        description: 'Мытье волос, Лечение волос, Сушка волос, Полный уход за лицом, Массаж головы и плеч, Массаж груди и рук, Озон для лица',
        prices: [
          { unit: '150min кор. волосы', price: Price.mjCourseHairs.short },
          { unit: '150min дл. волосы', price: Price.mjCourseHairs.long },
        ]
      },
      {
        name: 'Мытье волос',
        description: '',
        prices: [
          { unit: 'Короткие волосы', price: Price.washHairs.short },
          { unit: 'Длинные волосы', price: Price.washHairs.long },
        ]
      },
    ],
    aboutUsId: menu[Locale.ru][1].hash,
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
    contactsId: menu[Locale.ru][2].hash,
    contacts: {
      companyName: 'ATMW Invest OÜ',
      companyRegNum: '16859397',
      companyAddress: 'Viru 9, TALLINN',
      workingHours: [
        { 
          weekdays: 'Пн - Пт', 
          hours: '10:00 - 18:00' 
        },
        { 
          weekdays: 'Сб - Вс', 
          hours: '12:00 - 18:00' },
      ],
      bookingNote: 'NB! Наша студия работает только по предварительной записи — терапевты доступны исключительно во время забронированных сеансов.',
      callToContact: 'Запишитесь на прием, связавшись с нами через:',
      email: 'mjstudio.ee@gmail.com',
      phone: '(+372)58494331',
      socialLinks: SocialLinks
    }
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
          { unit: '60min', price: Price.faceMassage.min60 },
          { unit: '90min', price: Price.faceMassage.min90 },
        ]
      },
      {
        name: 'Näokoorimine',
        description: 'Näo puhastamine, Näokoorimine, Näomassaaž, Pea- ja õlamassaaž, Näo osoon',
        prices: [
          { unit: '60min', price: Price.faceScrap.min60 },
          { unit: '90min', price: Price.faceScrap.min90 },
        ]
      },
      {
        name: 'MJ kursuse ravi massaaž',
        description: 'Näo puhastamine, Näokoorimine, Näomassaaži ravi, Pea- ja õlamassaaž,  Näo osoon',
        prices: [
          { unit: '90min', price: Price.mjCourseMassage.min90 },
          { unit: '120min', price: Price.mjCourseMassage.min120 },
        ]
      },
      {
        name: 'MJ täiskursus',
        description: 'Juuste pesemine, Juuste ravi, Juuste kuivatamine, Täielik näohooldus, Pea- ja õlamassaaž, Rinna- ja kätemassaaž,  Näo osoon',
        prices: [
          { unit: '150min lüh. juuksed', price: Price.mjCourseHairs.short },
          { unit: '150min p. juuksed', price: Price.mjCourseHairs.long },
        ]
      },
      {
        name: 'Juuste pesemine',
        description: '',
        prices: [
          { unit: 'Lühikised juuksed', price: Price.washHairs.short },
          { unit: 'Pikkad juuksed', price: Price.washHairs.long },
        ]
      },
    ],
    aboutUsId: menu[Locale.et][1].hash,
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
    contactsId: menu[Locale.et][2].hash,
    contacts: {
      companyName: 'ATMW Invest OÜ',
      companyRegNum: '16859397',
      companyAddress: 'Viru 9, TALLINN',
      workingHours: [
        { weekdays: 'Mon - Fri', hours: '10:00 - 18:00' },
        { weekdays: 'Sat - Sun', hours: '12:00 - 18:00' },
      ],
      bookingNote: 'NB! Meie stuudio töötab ainult eelnevalt kokkuleppel — terapeutidel on saadaval ainult broneeritud seansside ajal.',
      callToContact: 'Broneeri aeg, võttes meiega ühendust',
      email: 'mjstudio.ee@gmail.com',
      phone: '(+372)58494331',
      socialLinks: SocialLinks
    }
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
          { unit: '60นาที', price: Price.faceMassage.min60 },
          { unit: '90นาที', price: Price.faceMassage.min90 },
        ]
      },
      {
        name: 'ขัดหน้า',
        description: 'ทำความสะอาดหน้า, ขัดหน้า, นวดหน้า, นวดศีรษะและไหล่, นวดหน้าอกและมือ',
        prices: [
          { unit: '60นาที', price: Price.faceScrap.min60 },
          { unit: '90นาที', price: Price.faceScrap.min90 },
        ]
      },
      {
        name: 'นวดบำบัดหลักสูตร MJ',
        description: 'ทำความสะอาดหน้า, ขัดหน้า, นวดบำบัดหน้า, นวดศีรษะและไหล่, นวดหน้าอกและมือ',
        prices: [
          { unit: '90นาที', price: Price.mjCourseMassage.min90 },
          { unit: '120นาที', price: Price.mjCourseMassage.min120 },
        ]
      },
      {
        name: 'หลักสูตร MJ ครบวงจร',
        description: 'สระผม, บำบัดผม, เป่าผม, บำบัดหน้าครบวงจร, นวดศีรษะและไหล่, นวดหน้าอกและมือ',
        prices: [
          { unit: '150นาที ผมสั้น', price: Price.mjCourseHairs.short },
          { unit: '150นาที ผมยาว', price: Price.mjCourseHairs.long },
        ]
      },
      {
        name: 'สระผม',
        description: '',
        prices: [
          { unit: 'ผมสั้น', price: Price.washHairs.short },
          { unit: 'ผมยาว', price: Price.washHairs.long },
        ]
      },
    ],
    aboutUsId: menu[Locale.th][1].hash,
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
    contactsId: menu[Locale.th][2].hash,
    contacts: {
      companyName: 'ATMW Invest OÜ',
      companyRegNum: '16859397',
      companyAddress: 'Viru 9, TALLINN',
      workingHours: [
        { weekdays: 'Mon - Fri', hours: '10:00 - 18:00' },
        { weekdays: 'Sat - Sun', hours: '12:00 - 18:00' },
      ],
      bookingNote: 'หมายเหตุ! สตูดิโอของเราเปิดให้บริการตามการนัดหมายเท่านั้น—นักบำบัดมีให้บริการเฉพาะในช่วงเวลาที่มีการจองเท่านั้น.',
      callToContact: 'กำหนดการนัดหมายของคุณโดยการติดต่อเรา',
      email: 'mjstudio.ee@gmail.com',
      phone: '(+372)58494331',
      socialLinks: SocialLinks
    }
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
