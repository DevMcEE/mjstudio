export type CountryCode = string; // 2 chars iso code
export type CountryDialCode = `+${number}`;

export type CountryData = {
  name: string;
  code: CountryCode;
  dialCode: CountryDialCode;
  flag: string;
}

export type CountryMap = {
  [key: CountryCode]: CountryData;
}

export const CountryData: CountryMap = {
  // Priority order
  EE: { name: "Estonia", code: "EE", dialCode: "+372", flag: "🇪🇪" },
  FI: { name: "Finland", code: "FI", dialCode: "+358", flag: "🇫🇮" },
  LV: { name: "Latvia", code: "LV", dialCode: "+371", flag: "🇱🇻" },
  LT: { name: "Lithuania", code: "LT", dialCode: "+370", flag: "🇱🇹" },
  TH: { name: "Thailand", code: "TH", dialCode: "+66", flag: "🇹🇭" },

  // European Countries
  AL: { name: "Albania", code: "AL", dialCode: "+355", flag: "🇦🇱" },
  AD: { name: "Andorra", code: "AD", dialCode: "+376", flag: "🇦🇩" },
  AT: { name: "Austria", code: "AT", dialCode: "+43", flag: "🇦🇹" },
  BE: { name: "Belgium", code: "BE", dialCode: "+32", flag: "🇧🇪" },
  BA: { name: "Bosnia and Herzegovina", code: "BA", dialCode: "+387", flag: "🇧🇦" },
  BG: { name: "Bulgaria", code: "BG", dialCode: "+359", flag: "🇧🇬" },
  HR: { name: "Croatia", code: "HR", dialCode: "+385", flag: "🇭🇷" },
  CY: { name: "Cyprus", code: "CY", dialCode: "+357", flag: "🇨🇾" },
  CZ: { name: "Czech Republic", code: "CZ", dialCode: "+420", flag: "🇨🇿" },
  DK: { name: "Denmark", code: "DK", dialCode: "+45", flag: "🇩🇰" },
  FR: { name: "France", code: "FR", dialCode: "+33", flag: "🇫🇷" },
  DE: { name: "Germany", code: "DE", dialCode: "+49", flag: "🇩🇪" },
  GR: { name: "Greece", code: "GR", dialCode: "+30", flag: "🇬🇷" },
  HU: { name: "Hungary", code: "HU", dialCode: "+36", flag: "🇭🇺" },
  IS: { name: "Iceland", code: "IS", dialCode: "+354", flag: "🇮🇸" },
  IE: { name: "Ireland", code: "IE", dialCode: "+353", flag: "🇮🇪" },
  IT: { name: "Italy", code: "IT", dialCode: "+39", flag: "🇮🇹" },
  LU: { name: "Luxembourg", code: "LU", dialCode: "+352", flag: "🇱🇺" },
  MT: { name: "Malta", code: "MT", dialCode: "+356", flag: "🇲🇹" },
  NL: { name: "Netherlands", code: "NL", dialCode: "+31", flag: "🇳🇱" },
  NO: { name: "Norway", code: "NO", dialCode: "+47", flag: "🇳🇴" },
  PL: { name: "Poland", code: "PL", dialCode: "+48", flag: "🇵🇱" },
  PT: { name: "Portugal", code: "PT", dialCode: "+351", flag: "🇵🇹" },
  RO: { name: "Romania", code: "RO", dialCode: "+40", flag: "🇷🇴" },
  SK: { name: "Slovakia", code: "SK", dialCode: "+421", flag: "🇸🇰" },
  SI: { name: "Slovenia", code: "SI", dialCode: "+386", flag: "🇸🇮" },
  ES: { name: "Spain", code: "ES", dialCode: "+34", flag: "🇪🇸" },
  SE: { name: "Sweden", code: "SE", dialCode: "+46", flag: "🇸🇪" },
  CH: { name: "Switzerland", code: "CH", dialCode: "+41", flag: "🇨🇭" },
  UA: { name: "Ukraine", code: "UA", dialCode: "+380", flag: "🇺🇦" },
  GB: { name: "United Kingdom", code: "GB", dialCode: "+44", flag: "🇬🇧" },

  RU: { name: "Russia", code: "RU", dialCode: "+7", flag: "🇷🇺" },
  BY: { name: "Belarus", code: "BY", dialCode: "+375", flag: "🇧🇾" },
  KZ: { name: "Kazakhstan", code: "KZ", dialCode: "+7", flag: "🇰🇿" },
  MD: { name: "Moldova", code: "MD", dialCode: "+373", flag: "🇲🇩" },

  // Asian Countries
  AF: { name: "Afghanistan", code: "AF", dialCode: "+93", flag: "🇦🇫" },
  AM: { name: "Armenia", code: "AM", dialCode: "+374", flag: "🇦🇲" },
  AZ: { name: "Azerbaijan", code: "AZ", dialCode: "+994", flag: "🇦🇿" },
  BH: { name: "Bahrain", code: "BH", dialCode: "+973", flag: "🇧🇭" },
  BD: { name: "Bangladesh", code: "BD", dialCode: "+880", flag: "🇧🇩" },
  BT: { name: "Bhutan", code: "BT", dialCode: "+975", flag: "🇧🇹" },
  BN: { name: "Brunei", code: "BN", dialCode: "+673", flag: "🇧🇳" },
  KH: { name: "Cambodia", code: "KH", dialCode: "+855", flag: "🇰🇭" },
  CN: { name: "China", code: "CN", dialCode: "+86", flag: "🇨🇳" },
  GE: { name: "Georgia", code: "GE", dialCode: "+995", flag: "🇬🇪" },
  IN: { name: "India", code: "IN", dialCode: "+91", flag: "🇮🇳" },
  ID: { name: "Indonesia", code: "ID", dialCode: "+62", flag: "🇮🇩" },
  IR: { name: "Iran", code: "IR", dialCode: "+98", flag: "🇮🇷" },
  IQ: { name: "Iraq", code: "IQ", dialCode: "+964", flag: "🇮🇶" },
  IL: { name: "Israel", code: "IL", dialCode: "+972", flag: "🇮🇱" },
  JP: { name: "Japan", code: "JP", dialCode: "+81", flag: "🇯🇵" },
  JO: { name: "Jordan", code: "JO", dialCode: "+962", flag: "🇯🇴" },
  KW: { name: "Kuwait", code: "KW", dialCode: "+965", flag: "🇰🇼" },
  KG: { name: "Kyrgyzstan", code: "KG", dialCode: "+996", flag: "🇰🇬" },
  LA: { name: "Laos", code: "LA", dialCode: "+856", flag: "🇱🇦" },
  LB: { name: "Lebanon", code: "LB", dialCode: "+961", flag: "🇱🇧" },
  MY: { name: "Malaysia", code: "MY", dialCode: "+60", flag: "🇲🇾" },
  MV: { name: "Maldives", code: "MV", dialCode: "+960", flag: "🇲🇻" },
  MN: { name: "Mongolia", code: "MN", dialCode: "+976", flag: "🇲🇳" },
  MM: { name: "Myanmar", code: "MM", dialCode: "+95", flag: "🇲🇲" },
  NP: { name: "Nepal", code: "NP", dialCode: "+977", flag: "🇳🇵" },
  KP: { name: "North Korea", code: "KP", dialCode: "+850", flag: "🇰🇵" },
  OM: { name: "Oman", code: "OM", dialCode: "+968", flag: "🇴🇲" },
  PK: { name: "Pakistan", code: "PK", dialCode: "+92", flag: "🇵🇰" },
  PS: { name: "Palestine", code: "PS", dialCode: "+970", flag: "🇵🇸" },
  PH: { name: "Philippines", code: "PH", dialCode: "+63", flag: "🇵🇭" },
  QA: { name: "Qatar", code: "QA", dialCode: "+974", flag: "🇶🇦" },
  SA: { name: "Saudi Arabia", code: "SA", dialCode: "+966", flag: "🇸🇦" },
  SG: { name: "Singapore", code: "SG", dialCode: "+65", flag: "🇸🇬" },
  KR: { name: "South Korea", code: "KR", dialCode: "+82", flag: "🇰🇷" },
  LK: { name: "Sri Lanka", code: "LK", dialCode: "+94", flag: "🇱🇰" },
  SY: { name: "Syria", code: "SY", dialCode: "+963", flag: "🇸🇾" },
  TJ: { name: "Tajikistan", code: "TJ", dialCode: "+992", flag: "🇹🇯" },
  TL: { name: "Timor-Leste", code: "TL", dialCode: "+670", flag: "🇹🇱" },
  TR: { name: "Turkey", code: "TR", dialCode: "+90", flag: "🇹🇷" },
  TM: { name: "Turkmenistan", code: "TM", dialCode: "+993", flag: "🇹🇲" },
  AE: { name: "United Arab Emirates", code: "AE", dialCode: "+971", flag: "🇦🇪" },
  UZ: { name: "Uzbekistan", code: "UZ", dialCode: "+998", flag: "🇺🇿" },
  VN: { name: "Vietnam", code: "VN", dialCode: "+84", flag: "🇻🇳" },
  YE: { name: "Yemen", code: "YE", dialCode: "+967", flag: "🇾🇪" },

  // Americas
  US: { name: "United States", code: "US", dialCode: "+1", flag: "🇺🇸" },
  CA: { name: "Canada", code: "CA", dialCode: "+1", flag: "🇨🇦" },
  BR: { name: "Brazil", code: "BR", dialCode: "+55", flag: "🇧🇷" },
  MX: { name: "Mexico", code: "MX", dialCode: "+52", flag: "🇲🇽" },

  // African Countries
  ZA: { name: "South Africa", code: "ZA", dialCode: "+27", flag: "🇿🇦" },
  EG: { name: "Egypt", code: "EG", dialCode: "+20", flag: "🇪🇬" },
  NG: { name: "Nigeria", code: "NG", dialCode: "+234", flag: "🇳🇬" },
} as const;

export const PriorityCountries: CountryData[] = [
  CountryData.EE,
  CountryData.FI,
  CountryData.LV,
  CountryData.LT,
  CountryData.TH,
];

export const EuropeanCountries: CountryData[] = [
  CountryData.EE,
  CountryData.FI,
  CountryData.LV,
  CountryData.LT,
  CountryData.AL, CountryData.AD, CountryData.AT, CountryData.BE, CountryData.BA, CountryData.BG, CountryData.HR, CountryData.CY, CountryData.CZ, CountryData.DK, CountryData.FR, CountryData.DE,
  CountryData.GR, CountryData.HU, CountryData.IS, CountryData.IE, CountryData.IT, CountryData.LU, CountryData.MT, CountryData.NL, CountryData.NO, CountryData.PL, CountryData.PT, CountryData.RO,
  CountryData.SK, CountryData.SI, CountryData.ES, CountryData.SE, CountryData.CH, CountryData.UA, CountryData.GB, CountryData.RU, CountryData.BY, CountryData.KZ, CountryData.MD
];

export const AllCountries: CountryData[] = [
  ...PriorityCountries,
  ...EuropeanCountries.filter(country => !PriorityCountries.includes(country)),
  ...[CountryData.AF, CountryData.AM, CountryData.AZ, CountryData.BH, CountryData.BD, CountryData.BT, CountryData.BN, CountryData.KH, CountryData.CN, CountryData.GE, CountryData.IN, CountryData.ID, CountryData.IR,
    CountryData.IQ, CountryData.IL, CountryData.JP, CountryData.JO, CountryData.KW, CountryData.KG, CountryData.LA, CountryData.LB, CountryData.MY, CountryData.MV, CountryData.MN, CountryData.MM, CountryData.NP,
    CountryData.KP, CountryData.OM, CountryData.PK, CountryData.PS, CountryData.PH, CountryData.QA, CountryData.SA, CountryData.SG, CountryData.KR, CountryData.LK, CountryData.SY, CountryData.TJ, CountryData.TL,
    CountryData.TR, CountryData.TM, CountryData.AE, CountryData.UZ, CountryData.VN, CountryData.YE, CountryData.US, CountryData.CA, CountryData.BR, CountryData.MX, CountryData.ZA, CountryData.EG, CountryData.NG]
];