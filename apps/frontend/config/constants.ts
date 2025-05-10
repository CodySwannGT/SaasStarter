/* eslint-disable max-lines -- no logic, just lots of variables */
const tableColors = [
  "primary",
  "secondary",
  "success",
  "yellow",
  "orange",
  "purple",
  "pink",
];

const adminOrganizationId = process.env.EXPO_PUBLIC_ADMIN_ORG_ID;

// This object maps country codes to their international calling codes
export const countryCallingCodes = {
  AC: "247",
  AD: "376",
  AE: "971",
  AF: "93",
  AG: "1-268",
  AI: "1-264",
  AL: "355",
  AM: "374",
  AO: "244",
  AQ: "672",
  AR: "54",
  AS: "1-684",
  AT: "43",
  AU: "61",
  AW: "297",
  AX: "358",
  AZ: "994",
  BA: "387",
  BB: "1-246",
  BD: "880",
  BE: "32",
  BF: "226",
  BG: "359",
  BH: "973",
  BI: "257",
  BJ: "229",
  BL: "590",
  BM: "1-441",
  BN: "673",
  BO: "591",
  BQ: "599",
  BR: "55",
  BS: "1-242",
  BT: "975",
  BV: "47",
  BW: "267",
  BY: "375",
  BZ: "501",
  CA: "1",
  CC: "61",
  CD: "243",
  CF: "236",
  CG: "242",
  CH: "41",
  CI: "225",
  CK: "682",
  CL: "56",
  CM: "237",
  CN: "86",
  CO: "57",
  CP: "N/A",
  CR: "506",
  CU: "53",
  CV: "238",
  CW: "599",
  CX: "61",
  CY: "357",
  CZ: "420",
  DE: "49",
  DG: "246",
  DJ: "253",
  DK: "45",
  DM: "1-767",
  DO: "1-809",
  DZ: "213",
  EA: "34",
  EC: "593",
  EE: "372",
  EG: "20",
  EH: "212",
  ER: "291",
  ES: "34",
  ET: "251",
  EU: "N/A",
  FI: "358",
  FJ: "679",
  FK: "500",
  FM: "691",
  FO: "298",
  FR: "33",
  GA: "241",
  GB: "44",
  GD: "1-473",
  GE: "995",
  GF: "594",
  GG: "44-1481",
  GH: "233",
  GI: "350",
  GL: "299",
  GM: "220",
  GN: "224",
  GP: "590",
  GQ: "240",
  GR: "30",
  GS: "500",
  GT: "502",
  GU: "1-671",
  GW: "245",
  GY: "592",
  HK: "852",
  HM: "N/A",
  HN: "504",
  HR: "385",
  HT: "509",
  HU: "36",
  IC: "34",
  ID: "62",
  IE: "353",
  IL: "972",
  IM: "44-1624",
  IN: "91",
  IO: "246",
  IQ: "964",
  IR: "98",
  IS: "354",
  IT: "39",
  JE: "44-1534",
  JM: "1-876",
  JO: "962",
  JP: "81",
  KE: "254",
  KG: "996",
  KH: "855",
  KI: "686",
  KM: "269",
  KN: "1-869",
  KP: "850",
  KR: "82",
  KW: "965",
  KY: "1-345",
  KZ: "7",
  LA: "856",
  LB: "961",
  LC: "1-758",
  LI: "423",
  LK: "94",
  LR: "231",
  LS: "266",
  LT: "370",
  LU: "352",
  LV: "371",
  LY: "218",
  MA: "212",
  MC: "377",
  MD: "373",
  ME: "382",
  MF: "590",
  MG: "261",
  MH: "692",
  MK: "389",
  ML: "223",
  MM: "95",
  MN: "976",
  MO: "853",
  MP: "1-670",
  MQ: "596",
  MR: "222",
  MS: "1-664",
  MT: "356",
  MU: "230",
  MV: "960",
  MW: "265",
  MX: "52",
  MY: "60",
  MZ: "258",
  NA: "264",
  NC: "687",
  NE: "227",
  NF: "672",
  NG: "234",
  NI: "505",
  NL: "31",
  NO: "47",
  NP: "977",
  NR: "674",
  NU: "683",
  NZ: "64",
  OM: "968",
  PA: "507",
  PE: "51",
  PF: "689",
  PG: "675",
  PH: "63",
  PK: "92",
  PL: "48",
  PM: "508",
  PN: "64",
  PR: "1-787",
  PS: "970",
  PT: "351",
  PW: "680",
  PY: "595",
  QA: "974",
  RE: "262",
  RO: "40",
  RS: "381",
  RU: "7",
  RW: "250",
  SA: "966",
  SB: "677",
  SC: "248",
  SD: "249",
  SE: "46",
  SG: "65",
  SH: "290",
  SI: "386",
  SJ: "47",
  SK: "421",
  SL: "232",
  SM: "378",
  SN: "221",
  SO: "252",
  SR: "597",
  SS: "211",
  ST: "239",
  SV: "503",
  SX: "1-721",
  SY: "963",
  SZ: "268",
  TA: "290",
  TC: "1-649",
  TD: "235",
  TF: "N/A",
  TG: "228",
  TH: "66",
  TJ: "992",
  TK: "690",
  TL: "670",
  TM: "993",
  TN: "216",
  TO: "676",
  TR: "90",
  TT: "1-868",
  TV: "688",
  TW: "886",
  TZ: "255",
  UA: "380",
  UG: "256",
  UM: "N/A",
  UN: "N/A",
  US: "1",
  UY: "598",
  UZ: "998",
  VA: "39-06",
  VC: "1-784",
  VE: "58",
  VG: "1-284",
  VI: "1-340",
  VN: "84",
  VU: "678",
  WF: "681",
  WS: "685",
  XK: "383",
  YE: "967",
  YT: "262",
  ZA: "27",
  ZM: "260",
  ZW: "263",
  ENGLAND: "44",
  SCOTLAND: "44",
  WALES: "44",
};

// Sample usage:
// const countryCode = "FR";
// const callingCode = countryCallingCodes[countryCode]; // "33"

export const nationalities = [
  {
    name: "Ascension Island",
    code: "AC",
    callingCode: "247",
    emoji: "🇦🇨",
    unicode: "U+1F1E6 U+1F1E8",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AC.svg",
  },
  {
    name: "Andorra",
    code: "AD",
    callingCode: "376",
    emoji: "🇦🇩",
    unicode: "U+1F1E6 U+1F1E9",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AD.svg",
  },
  {
    name: "United Arab Emirates",
    code: "AE",
    callingCode: "971",
    emoji: "🇦🇪",
    unicode: "U+1F1E6 U+1F1EA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AE.svg",
  },
  {
    name: "Afghanistan",
    code: "AF",
    callingCode: "93",
    emoji: "🇦🇫",
    unicode: "U+1F1E6 U+1F1EB",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AF.svg",
  },
  {
    name: "Antigua & Barbuda",
    code: "AG",
    callingCode: "1-268",
    emoji: "🇦🇬",
    unicode: "U+1F1E6 U+1F1EC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AG.svg",
  },
  {
    name: "Anguilla",
    code: "AI",
    callingCode: "1-264",
    emoji: "🇦🇮",
    unicode: "U+1F1E6 U+1F1EE",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AI.svg",
  },
  {
    name: "Albania",
    code: "AL",
    callingCode: "355",
    emoji: "🇦🇱",
    unicode: "U+1F1E6 U+1F1F1",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AL.svg",
  },
  {
    name: "Armenia",
    code: "AM",
    callingCode: "374",
    emoji: "🇦🇲",
    unicode: "U+1F1E6 U+1F1F2",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AM.svg",
  },
  {
    name: "Angola",
    code: "AO",
    callingCode: "244",
    emoji: "🇦🇴",
    unicode: "U+1F1E6 U+1F1F4",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AO.svg",
  },
  {
    name: "Antarctica",
    code: "AQ",
    callingCode: "672",
    emoji: "🇦🇶",
    unicode: "U+1F1E6 U+1F1F6",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AQ.svg",
  },
  {
    name: "Argentina",
    code: "AR",
    callingCode: "54",
    emoji: "🇦🇷",
    unicode: "U+1F1E6 U+1F1F7",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AR.svg",
  },
  {
    name: "American Samoa",
    code: "AS",
    callingCode: "1-684",
    emoji: "🇦🇸",
    unicode: "U+1F1E6 U+1F1F8",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AS.svg",
  },
  {
    name: "Austria",
    code: "AT",
    callingCode: "43",
    emoji: "🇦🇹",
    unicode: "U+1F1E6 U+1F1F9",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AT.svg",
  },
  {
    name: "Australia",
    code: "AU",
    callingCode: "61",
    emoji: "🇦🇺",
    unicode: "U+1F1E6 U+1F1FA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AU.svg",
  },
  {
    name: "Aruba",
    code: "AW",
    callingCode: "297",
    emoji: "🇦🇼",
    unicode: "U+1F1E6 U+1F1FC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AW.svg",
  },
  {
    name: "Åland Islands",
    code: "AX",
    callingCode: "358",
    emoji: "🇦🇽",
    unicode: "U+1F1E6 U+1F1FD",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AX.svg",
  },
  {
    name: "Azerbaijan",
    code: "AZ",
    callingCode: "994",
    emoji: "🇦🇿",
    unicode: "U+1F1E6 U+1F1FF",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AZ.svg",
  },
  {
    name: "Bosnia & Herzegovina",
    code: "BA",
    callingCode: "387",
    emoji: "🇧🇦",
    unicode: "U+1F1E7 U+1F1E6",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BA.svg",
  },
  {
    name: "Barbados",
    code: "BB",
    callingCode: "1-246",
    emoji: "🇧🇧",
    unicode: "U+1F1E7 U+1F1E7",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BB.svg",
  },
  {
    name: "Bangladesh",
    code: "BD",
    callingCode: "880",
    emoji: "🇧🇩",
    unicode: "U+1F1E7 U+1F1E9",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BD.svg",
  },
  {
    name: "Belgium",
    code: "BE",
    callingCode: "32",
    emoji: "🇧🇪",
    unicode: "U+1F1E7 U+1F1EA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BE.svg",
  },
  {
    name: "Burkina Faso",
    code: "BF",
    callingCode: "226",
    emoji: "🇧🇫",
    unicode: "U+1F1E7 U+1F1EB",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BF.svg",
  },
  {
    name: "Bulgaria",
    code: "BG",
    callingCode: "359",
    emoji: "🇧🇬",
    unicode: "U+1F1E7 U+1F1EC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BG.svg",
  },
  {
    name: "Bahrain",
    code: "BH",
    callingCode: "973",
    emoji: "🇧🇭",
    unicode: "U+1F1E7 U+1F1ED",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BH.svg",
  },
  {
    name: "Burundi",
    code: "BI",
    callingCode: "257",
    emoji: "🇧🇮",
    unicode: "U+1F1E7 U+1F1EE",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BI.svg",
  },
  {
    name: "Benin",
    code: "BJ",
    callingCode: "229",
    emoji: "🇧🇯",
    unicode: "U+1F1E7 U+1F1EF",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BJ.svg",
  },
  {
    name: "St. Barthélemy",
    code: "BL",
    callingCode: "590",
    emoji: "🇧🇱",
    unicode: "U+1F1E7 U+1F1F1",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BL.svg",
  },
  {
    name: "Bermuda",
    code: "BM",
    callingCode: "1-441",
    emoji: "🇧🇲",
    unicode: "U+1F1E7 U+1F1F2",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BM.svg",
  },
  {
    name: "Brunei",
    code: "BN",
    callingCode: "673",
    emoji: "🇧🇳",
    unicode: "U+1F1E7 U+1F1F3",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BN.svg",
  },
  {
    name: "Bolivia",
    code: "BO",
    callingCode: "591",
    emoji: "🇧🇴",
    unicode: "U+1F1E7 U+1F1F4",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BO.svg",
  },
  {
    name: "Caribbean Netherlands",
    code: "BQ",
    callingCode: "599",
    emoji: "🇧🇶",
    unicode: "U+1F1E7 U+1F1F6",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BQ.svg",
  },
  {
    name: "Brazil",
    code: "BR",
    callingCode: "55",
    emoji: "🇧🇷",
    unicode: "U+1F1E7 U+1F1F7",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BR.svg",
  },
  {
    name: "Bahamas",
    code: "BS",
    callingCode: "1-242",
    emoji: "🇧🇸",
    unicode: "U+1F1E7 U+1F1F8",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BS.svg",
  },
  {
    name: "Bhutan",
    code: "BT",
    callingCode: "975",
    emoji: "🇧🇹",
    unicode: "U+1F1E7 U+1F1F9",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BT.svg",
  },
  {
    name: "Bouvet Island",
    code: "BV",
    callingCode: "47",
    emoji: "🇧🇻",
    unicode: "U+1F1E7 U+1F1FB",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BV.svg",
  },
  {
    name: "Botswana",
    code: "BW",
    callingCode: "267",
    emoji: "🇧🇼",
    unicode: "U+1F1E7 U+1F1FC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BW.svg",
  },
  {
    name: "Belarus",
    code: "BY",
    callingCode: "375",
    emoji: "🇧🇾",
    unicode: "U+1F1E7 U+1F1FE",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BY.svg",
  },
  {
    name: "Belize",
    code: "BZ",
    callingCode: "501",
    emoji: "🇧🇿",
    unicode: "U+1F1E7 U+1F1FF",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BZ.svg",
  },
  {
    name: "Canada",
    code: "CA",
    callingCode: "1",
    emoji: "🇨🇦",
    unicode: "U+1F1E8 U+1F1E6",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CA.svg",
  },
  {
    name: "Cocos (Keeling) Islands",
    code: "CC",
    callingCode: "61",
    emoji: "🇨🇨",
    unicode: "U+1F1E8 U+1F1E8",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CC.svg",
  },
  {
    name: "Congo - Kinshasa",
    code: "CD",
    callingCode: "243",
    emoji: "🇨🇩",
    unicode: "U+1F1E8 U+1F1E9",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CD.svg",
  },
  {
    name: "Central African Republic",
    code: "CF",
    callingCode: "236",
    emoji: "🇨🇫",
    unicode: "U+1F1E8 U+1F1EB",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CF.svg",
  },
  {
    name: "Congo - Brazzaville",
    code: "CG",
    callingCode: "242",
    emoji: "🇨🇬",
    unicode: "U+1F1E8 U+1F1EC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CG.svg",
  },
  {
    name: "Switzerland",
    code: "CH",
    callingCode: "41",
    emoji: "🇨🇭",
    unicode: "U+1F1E8 U+1F1ED",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CH.svg",
  },
  {
    name: "Côte d’Ivoire",
    code: "CI",
    emoji: "🇨🇮",
    unicode: "U+1F1E8 U+1F1EE",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CI.svg",
  },
  {
    name: "Cook Islands",
    code: "CK",
    callingCode: "682",
    emoji: "🇨🇰",
    unicode: "U+1F1E8 U+1F1F0",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CK.svg",
  },
  {
    name: "Chile",
    code: "CL",
    callingCode: "56",
    emoji: "🇨🇱",
    unicode: "U+1F1E8 U+1F1F1",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CL.svg",
  },
  {
    name: "Cameroon",
    code: "CM",
    callingCode: "237",
    emoji: "🇨🇲",
    unicode: "U+1F1E8 U+1F1F2",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CM.svg",
  },
  {
    name: "China",
    code: "CN",
    callingCode: "86",
    emoji: "🇨🇳",
    unicode: "U+1F1E8 U+1F1F3",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CN.svg",
  },
  {
    name: "Colombia",
    code: "CO",
    emoji: "🇨🇴",
    unicode: "U+1F1E8 U+1F1F4",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CO.svg",
  },
  {
    name: "Clipperton Island",
    code: "CP",
    emoji: "🇨🇵",
    unicode: "U+1F1E8 U+1F1F5",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CP.svg",
  },
  {
    name: "Costa Rica",
    code: "CR",
    emoji: "🇨🇷",
    unicode: "U+1F1E8 U+1F1F7",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CR.svg",
  },
  {
    name: "Cuba",
    code: "CU",
    emoji: "🇨🇺",
    unicode: "U+1F1E8 U+1F1FA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CU.svg",
  },
  {
    name: "Cape Verde",
    code: "CV",
    emoji: "🇨🇻",
    unicode: "U+1F1E8 U+1F1FB",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CV.svg",
  },
  {
    name: "Curaçao",
    code: "CW",
    emoji: "🇨🇼",
    unicode: "U+1F1E8 U+1F1FC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CW.svg",
  },
  {
    name: "Christmas Island",
    code: "CX",
    emoji: "🇨🇽",
    unicode: "U+1F1E8 U+1F1FD",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CX.svg",
  },
  {
    name: "Cyprus",
    code: "CY",
    emoji: "🇨🇾",
    unicode: "U+1F1E8 U+1F1FE",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CY.svg",
  },
  {
    name: "Czechia",
    code: "CZ",
    emoji: "🇨🇿",
    unicode: "U+1F1E8 U+1F1FF",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CZ.svg",
  },
  {
    name: "Germany",
    code: "DE",
    emoji: "🇩🇪",
    unicode: "U+1F1E9 U+1F1EA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DE.svg",
  },
  {
    name: "Diego Garcia",
    code: "DG",
    emoji: "🇩🇬",
    unicode: "U+1F1E9 U+1F1EC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DG.svg",
  },
  {
    name: "Djibouti",
    code: "DJ",
    emoji: "🇩🇯",
    unicode: "U+1F1E9 U+1F1EF",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DJ.svg",
  },
  {
    name: "Denmark",
    code: "DK",
    emoji: "🇩🇰",
    unicode: "U+1F1E9 U+1F1F0",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DK.svg",
  },
  {
    name: "Dominica",
    code: "DM",
    emoji: "🇩🇲",
    unicode: "U+1F1E9 U+1F1F2",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DM.svg",
  },
  {
    name: "Dominican Republic",
    code: "DO",
    emoji: "🇩🇴",
    unicode: "U+1F1E9 U+1F1F4",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DO.svg",
  },
  {
    name: "Algeria",
    code: "DZ",
    emoji: "🇩🇿",
    unicode: "U+1F1E9 U+1F1FF",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DZ.svg",
  },
  {
    name: "Ceuta & Melilla",
    code: "EA",
    emoji: "🇪🇦",
    unicode: "U+1F1EA U+1F1E6",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EA.svg",
  },
  {
    name: "Ecuador",
    code: "EC",
    emoji: "🇪🇨",
    unicode: "U+1F1EA U+1F1E8",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EC.svg",
  },
  {
    name: "Estonia",
    code: "EE",
    emoji: "🇪🇪",
    unicode: "U+1F1EA U+1F1EA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EE.svg",
  },
  {
    name: "Egypt",
    code: "EG",
    emoji: "🇪🇬",
    unicode: "U+1F1EA U+1F1EC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EG.svg",
  },
  {
    name: "Western Sahara",
    code: "EH",
    emoji: "🇪🇭",
    unicode: "U+1F1EA U+1F1ED",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EH.svg",
  },
  {
    name: "Eritrea",
    code: "ER",
    emoji: "🇪🇷",
    unicode: "U+1F1EA U+1F1F7",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ER.svg",
  },
  {
    name: "Spain",
    code: "ES",
    emoji: "🇪🇸",
    unicode: "U+1F1EA U+1F1F8",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ES.svg",
  },
  {
    name: "Ethiopia",
    code: "ET",
    emoji: "🇪🇹",
    unicode: "U+1F1EA U+1F1F9",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ET.svg",
  },
  {
    name: "European Union",
    code: "EU",
    emoji: "🇪🇺",
    unicode: "U+1F1EA U+1F1FA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EU.svg",
  },
  {
    name: "Finland",
    code: "FI",
    emoji: "🇫🇮",
    unicode: "U+1F1EB U+1F1EE",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FI.svg",
  },
  {
    name: "Fiji",
    code: "FJ",
    emoji: "🇫🇯",
    unicode: "U+1F1EB U+1F1EF",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FJ.svg",
  },
  {
    name: "Falkland Islands",
    code: "FK",
    emoji: "🇫🇰",
    unicode: "U+1F1EB U+1F1F0",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FK.svg",
  },
  {
    name: "Micronesia",
    code: "FM",
    emoji: "🇫🇲",
    unicode: "U+1F1EB U+1F1F2",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FM.svg",
  },
  {
    name: "Faroe Islands",
    code: "FO",
    emoji: "🇫🇴",
    unicode: "U+1F1EB U+1F1F4",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FO.svg",
  },
  {
    name: "France",
    code: "FR",
    emoji: "🇫🇷",
    unicode: "U+1F1EB U+1F1F7",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FR.svg",
  },
  {
    name: "Gabon",
    code: "GA",
    emoji: "🇬🇦",
    unicode: "U+1F1EC U+1F1E6",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GA.svg",
  },
  {
    name: "United Kingdom",
    code: "GB",
    emoji: "🇬🇧",
    unicode: "U+1F1EC U+1F1E7",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GB.svg",
  },
  {
    name: "Grenada",
    code: "GD",
    emoji: "🇬🇩",
    unicode: "U+1F1EC U+1F1E9",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GD.svg",
  },
  {
    name: "Georgia",
    code: "GE",
    emoji: "🇬🇪",
    unicode: "U+1F1EC U+1F1EA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GE.svg",
  },
  {
    name: "French Guiana",
    code: "GF",
    emoji: "🇬🇫",
    unicode: "U+1F1EC U+1F1EB",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GF.svg",
  },
  {
    name: "Guernsey",
    code: "GG",
    emoji: "🇬🇬",
    unicode: "U+1F1EC U+1F1EC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GG.svg",
  },
  {
    name: "Ghana",
    code: "GH",
    emoji: "🇬🇭",
    unicode: "U+1F1EC U+1F1ED",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GH.svg",
  },
  {
    name: "Gibraltar",
    code: "GI",
    emoji: "🇬🇮",
    unicode: "U+1F1EC U+1F1EE",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GI.svg",
  },
  {
    name: "Greenland",
    code: "GL",
    emoji: "🇬🇱",
    unicode: "U+1F1EC U+1F1F1",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GL.svg",
  },
  {
    name: "Gambia",
    code: "GM",
    emoji: "🇬🇲",
    unicode: "U+1F1EC U+1F1F2",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GM.svg",
  },
  {
    name: "Guinea",
    code: "GN",
    emoji: "🇬🇳",
    unicode: "U+1F1EC U+1F1F3",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GN.svg",
  },
  {
    name: "Guadeloupe",
    code: "GP",
    emoji: "🇬🇵",
    unicode: "U+1F1EC U+1F1F5",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GP.svg",
  },
  {
    name: "Equatorial Guinea",
    code: "GQ",
    emoji: "🇬🇶",
    unicode: "U+1F1EC U+1F1F6",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GQ.svg",
  },
  {
    name: "Greece",
    code: "GR",
    emoji: "🇬🇷",
    unicode: "U+1F1EC U+1F1F7",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GR.svg",
  },
  {
    name: "South Georgia & South Sandwich Islands",
    code: "GS",
    emoji: "🇬🇸",
    unicode: "U+1F1EC U+1F1F8",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GS.svg",
  },
  {
    name: "Guatemala",
    code: "GT",
    emoji: "🇬🇹",
    unicode: "U+1F1EC U+1F1F9",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GT.svg",
  },
  {
    name: "Guam",
    code: "GU",
    emoji: "🇬🇺",
    unicode: "U+1F1EC U+1F1FA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GU.svg",
  },
  {
    name: "Guinea-Bissau",
    code: "GW",
    emoji: "🇬🇼",
    unicode: "U+1F1EC U+1F1FC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GW.svg",
  },
  {
    name: "Guyana",
    code: "GY",
    emoji: "🇬🇾",
    unicode: "U+1F1EC U+1F1FE",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GY.svg",
  },
  {
    name: "Hong Kong SAR China",
    code: "HK",
    emoji: "🇭🇰",
    unicode: "U+1F1ED U+1F1F0",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HK.svg",
  },
  {
    name: "Heard & McDonald Islands",
    code: "HM",
    emoji: "🇭🇲",
    unicode: "U+1F1ED U+1F1F2",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HM.svg",
  },
  {
    name: "Honduras",
    code: "HN",
    emoji: "🇭🇳",
    unicode: "U+1F1ED U+1F1F3",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HN.svg",
  },
  {
    name: "Croatia",
    code: "HR",
    emoji: "🇭🇷",
    unicode: "U+1F1ED U+1F1F7",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HR.svg",
  },
  {
    name: "Haiti",
    code: "HT",
    emoji: "🇭🇹",
    unicode: "U+1F1ED U+1F1F9",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HT.svg",
  },
  {
    name: "Hungary",
    code: "HU",
    emoji: "🇭🇺",
    unicode: "U+1F1ED U+1F1FA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HU.svg",
  },
  {
    name: "Canary Islands",
    code: "IC",
    emoji: "🇮🇨",
    unicode: "U+1F1EE U+1F1E8",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IC.svg",
  },
  {
    name: "Indonesia",
    code: "ID",
    emoji: "🇮🇩",
    unicode: "U+1F1EE U+1F1E9",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ID.svg",
  },
  {
    name: "Ireland",
    code: "IE",
    emoji: "🇮🇪",
    unicode: "U+1F1EE U+1F1EA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IE.svg",
  },
  {
    name: "Israel",
    code: "IL",
    emoji: "🇮🇱",
    unicode: "U+1F1EE U+1F1F1",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IL.svg",
  },
  {
    name: "Isle of Man",
    code: "IM",
    emoji: "🇮🇲",
    unicode: "U+1F1EE U+1F1F2",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IM.svg",
  },
  {
    name: "India",
    code: "IN",
    emoji: "🇮🇳",
    unicode: "U+1F1EE U+1F1F3",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IN.svg",
  },
  {
    name: "British Indian Ocean Territory",
    code: "IO",
    emoji: "🇮🇴",
    unicode: "U+1F1EE U+1F1F4",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IO.svg",
  },
  {
    name: "Iraq",
    code: "IQ",
    emoji: "🇮🇶",
    unicode: "U+1F1EE U+1F1F6",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IQ.svg",
  },
  {
    name: "Iran",
    code: "IR",
    emoji: "🇮🇷",
    unicode: "U+1F1EE U+1F1F7",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IR.svg",
  },
  {
    name: "Iceland",
    code: "IS",
    emoji: "🇮🇸",
    unicode: "U+1F1EE U+1F1F8",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IS.svg",
  },
  {
    name: "Italy",
    code: "IT",
    emoji: "🇮🇹",
    unicode: "U+1F1EE U+1F1F9",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IT.svg",
  },
  {
    name: "Jersey",
    code: "JE",
    emoji: "🇯🇪",
    unicode: "U+1F1EF U+1F1EA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JE.svg",
  },
  {
    name: "Jamaica",
    code: "JM",
    emoji: "🇯🇲",
    unicode: "U+1F1EF U+1F1F2",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JM.svg",
  },
  {
    name: "Jordan",
    code: "JO",
    emoji: "🇯🇴",
    unicode: "U+1F1EF U+1F1F4",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JO.svg",
  },
  {
    name: "Japan",
    code: "JP",
    emoji: "🇯🇵",
    unicode: "U+1F1EF U+1F1F5",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JP.svg",
  },
  {
    name: "Kenya",
    code: "KE",
    emoji: "🇰🇪",
    unicode: "U+1F1F0 U+1F1EA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KE.svg",
  },
  {
    name: "Kyrgyzstan",
    code: "KG",
    emoji: "🇰🇬",
    unicode: "U+1F1F0 U+1F1EC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KG.svg",
  },
  {
    name: "Cambodia",
    code: "KH",
    emoji: "🇰🇭",
    unicode: "U+1F1F0 U+1F1ED",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KH.svg",
  },
  {
    name: "Kiribati",
    code: "KI",
    emoji: "🇰🇮",
    unicode: "U+1F1F0 U+1F1EE",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KI.svg",
  },
  {
    name: "Comoros",
    code: "KM",
    emoji: "🇰🇲",
    unicode: "U+1F1F0 U+1F1F2",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KM.svg",
  },
  {
    name: "St. Kitts & Nevis",
    code: "KN",
    emoji: "🇰🇳",
    unicode: "U+1F1F0 U+1F1F3",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KN.svg",
  },
  {
    name: "North Korea",
    code: "KP",
    emoji: "🇰🇵",
    unicode: "U+1F1F0 U+1F1F5",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KP.svg",
  },
  {
    name: "South Korea",
    code: "KR",
    emoji: "🇰🇷",
    unicode: "U+1F1F0 U+1F1F7",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KR.svg",
  },
  {
    name: "Kuwait",
    code: "KW",
    emoji: "🇰🇼",
    unicode: "U+1F1F0 U+1F1FC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KW.svg",
  },
  {
    name: "Cayman Islands",
    code: "KY",
    emoji: "🇰🇾",
    unicode: "U+1F1F0 U+1F1FE",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KY.svg",
  },
  {
    name: "Kazakhstan",
    code: "KZ",
    emoji: "🇰🇿",
    unicode: "U+1F1F0 U+1F1FF",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KZ.svg",
  },
  {
    name: "Laos",
    code: "LA",
    emoji: "🇱🇦",
    unicode: "U+1F1F1 U+1F1E6",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LA.svg",
  },
  {
    name: "Lebanon",
    code: "LB",
    emoji: "🇱🇧",
    unicode: "U+1F1F1 U+1F1E7",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LB.svg",
  },
  {
    name: "St. Lucia",
    code: "LC",
    emoji: "🇱🇨",
    unicode: "U+1F1F1 U+1F1E8",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LC.svg",
  },
  {
    name: "Liechtenstein",
    code: "LI",
    emoji: "🇱🇮",
    unicode: "U+1F1F1 U+1F1EE",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LI.svg",
  },
  {
    name: "Sri Lanka",
    code: "LK",
    emoji: "🇱🇰",
    unicode: "U+1F1F1 U+1F1F0",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LK.svg",
  },
  {
    name: "Liberia",
    code: "LR",
    emoji: "🇱🇷",
    unicode: "U+1F1F1 U+1F1F7",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LR.svg",
  },
  {
    name: "Lesotho",
    code: "LS",
    emoji: "🇱🇸",
    unicode: "U+1F1F1 U+1F1F8",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LS.svg",
  },
  {
    name: "Lithuania",
    code: "LT",
    emoji: "🇱🇹",
    unicode: "U+1F1F1 U+1F1F9",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LT.svg",
  },
  {
    name: "Luxembourg",
    code: "LU",
    emoji: "🇱🇺",
    unicode: "U+1F1F1 U+1F1FA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LU.svg",
  },
  {
    name: "Latvia",
    code: "LV",
    emoji: "🇱🇻",
    unicode: "U+1F1F1 U+1F1FB",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LV.svg",
  },
  {
    name: "Libya",
    code: "LY",
    emoji: "🇱🇾",
    unicode: "U+1F1F1 U+1F1FE",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LY.svg",
  },
  {
    name: "Morocco",
    code: "MA",
    emoji: "🇲🇦",
    unicode: "U+1F1F2 U+1F1E6",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MA.svg",
  },
  {
    name: "Monaco",
    code: "MC",
    emoji: "🇲🇨",
    unicode: "U+1F1F2 U+1F1E8",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MC.svg",
  },
  {
    name: "Moldova",
    code: "MD",
    emoji: "🇲🇩",
    unicode: "U+1F1F2 U+1F1E9",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MD.svg",
  },
  {
    name: "Montenegro",
    code: "ME",
    emoji: "🇲🇪",
    unicode: "U+1F1F2 U+1F1EA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ME.svg",
  },
  {
    name: "St. Martin",
    code: "MF",
    emoji: "🇲🇫",
    unicode: "U+1F1F2 U+1F1EB",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MF.svg",
  },
  {
    name: "Madagascar",
    code: "MG",
    emoji: "🇲🇬",
    unicode: "U+1F1F2 U+1F1EC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MG.svg",
  },
  {
    name: "Marshall Islands",
    code: "MH",
    emoji: "🇲🇭",
    unicode: "U+1F1F2 U+1F1ED",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MH.svg",
  },
  {
    name: "North Macedonia",
    code: "MK",
    emoji: "🇲🇰",
    unicode: "U+1F1F2 U+1F1F0",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MK.svg",
  },
  {
    name: "Mali",
    code: "ML",
    emoji: "🇲🇱",
    unicode: "U+1F1F2 U+1F1F1",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ML.svg",
  },
  {
    name: "Myanmar (Burma)",
    code: "MM",
    emoji: "🇲🇲",
    unicode: "U+1F1F2 U+1F1F2",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MM.svg",
  },
  {
    name: "Mongolia",
    code: "MN",
    emoji: "🇲🇳",
    unicode: "U+1F1F2 U+1F1F3",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MN.svg",
  },
  {
    name: "Macao SAR China",
    code: "MO",
    emoji: "🇲🇴",
    unicode: "U+1F1F2 U+1F1F4",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MO.svg",
  },
  {
    name: "Northern Mariana Islands",
    code: "MP",
    emoji: "🇲🇵",
    unicode: "U+1F1F2 U+1F1F5",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MP.svg",
  },
  {
    name: "Martinique",
    code: "MQ",
    emoji: "🇲🇶",
    unicode: "U+1F1F2 U+1F1F6",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MQ.svg",
  },
  {
    name: "Mauritania",
    code: "MR",
    emoji: "🇲🇷",
    unicode: "U+1F1F2 U+1F1F7",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MR.svg",
  },
  {
    name: "Montserrat",
    code: "MS",
    emoji: "🇲🇸",
    unicode: "U+1F1F2 U+1F1F8",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MS.svg",
  },
  {
    name: "Malta",
    code: "MT",
    emoji: "🇲🇹",
    unicode: "U+1F1F2 U+1F1F9",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MT.svg",
  },
  {
    name: "Mauritius",
    code: "MU",
    emoji: "🇲🇺",
    unicode: "U+1F1F2 U+1F1FA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MU.svg",
  },
  {
    name: "Maldives",
    code: "MV",
    emoji: "🇲🇻",
    unicode: "U+1F1F2 U+1F1FB",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MV.svg",
  },
  {
    name: "Malawi",
    code: "MW",
    emoji: "🇲🇼",
    unicode: "U+1F1F2 U+1F1FC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MW.svg",
  },
  {
    name: "Mexico",
    code: "MX",
    emoji: "🇲🇽",
    unicode: "U+1F1F2 U+1F1FD",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MX.svg",
  },
  {
    name: "Malaysia",
    code: "MY",
    emoji: "🇲🇾",
    unicode: "U+1F1F2 U+1F1FE",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MY.svg",
  },
  {
    name: "Mozambique",
    code: "MZ",
    emoji: "🇲🇿",
    unicode: "U+1F1F2 U+1F1FF",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MZ.svg",
  },
  {
    name: "Namibia",
    code: "NA",
    emoji: "🇳🇦",
    unicode: "U+1F1F3 U+1F1E6",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NA.svg",
  },
  {
    name: "New Caledonia",
    code: "NC",
    emoji: "🇳🇨",
    unicode: "U+1F1F3 U+1F1E8",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NC.svg",
  },
  {
    name: "Niger",
    code: "NE",
    emoji: "🇳🇪",
    unicode: "U+1F1F3 U+1F1EA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NE.svg",
  },
  {
    name: "Norfolk Island",
    code: "NF",
    emoji: "🇳🇫",
    unicode: "U+1F1F3 U+1F1EB",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NF.svg",
  },
  {
    name: "Nigeria",
    code: "NG",
    emoji: "🇳🇬",
    unicode: "U+1F1F3 U+1F1EC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NG.svg",
  },
  {
    name: "Nicaragua",
    code: "NI",
    emoji: "🇳🇮",
    unicode: "U+1F1F3 U+1F1EE",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NI.svg",
  },
  {
    name: "Netherlands",
    code: "NL",
    emoji: "🇳🇱",
    unicode: "U+1F1F3 U+1F1F1",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NL.svg",
  },
  {
    name: "Norway",
    code: "NO",
    emoji: "🇳🇴",
    unicode: "U+1F1F3 U+1F1F4",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NO.svg",
  },
  {
    name: "Nepal",
    code: "NP",
    emoji: "🇳🇵",
    unicode: "U+1F1F3 U+1F1F5",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NP.svg",
  },
  {
    name: "Nauru",
    code: "NR",
    emoji: "🇳🇷",
    unicode: "U+1F1F3 U+1F1F7",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NR.svg",
  },
  {
    name: "Niue",
    code: "NU",
    emoji: "🇳🇺",
    unicode: "U+1F1F3 U+1F1FA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NU.svg",
  },
  {
    name: "New Zealand",
    code: "NZ",
    emoji: "🇳🇿",
    unicode: "U+1F1F3 U+1F1FF",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NZ.svg",
  },
  {
    name: "Oman",
    code: "OM",
    emoji: "🇴🇲",
    unicode: "U+1F1F4 U+1F1F2",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/OM.svg",
  },
  {
    name: "Panama",
    code: "PA",
    emoji: "🇵🇦",
    unicode: "U+1F1F5 U+1F1E6",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PA.svg",
  },
  {
    name: "Peru",
    code: "PE",
    emoji: "🇵🇪",
    unicode: "U+1F1F5 U+1F1EA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PE.svg",
  },
  {
    name: "French Polynesia",
    code: "PF",
    emoji: "🇵🇫",
    unicode: "U+1F1F5 U+1F1EB",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PF.svg",
  },
  {
    name: "Papua New Guinea",
    code: "PG",
    emoji: "🇵🇬",
    unicode: "U+1F1F5 U+1F1EC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PG.svg",
  },
  {
    name: "Philippines",
    code: "PH",
    emoji: "🇵🇭",
    unicode: "U+1F1F5 U+1F1ED",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PH.svg",
  },
  {
    name: "Pakistan",
    code: "PK",
    emoji: "🇵🇰",
    unicode: "U+1F1F5 U+1F1F0",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PK.svg",
  },
  {
    name: "Poland",
    code: "PL",
    emoji: "🇵🇱",
    unicode: "U+1F1F5 U+1F1F1",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PL.svg",
  },
  {
    name: "St. Pierre & Miquelon",
    code: "PM",
    emoji: "🇵🇲",
    unicode: "U+1F1F5 U+1F1F2",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PM.svg",
  },
  {
    name: "Pitcairn Islands",
    code: "PN",
    emoji: "🇵🇳",
    unicode: "U+1F1F5 U+1F1F3",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PN.svg",
  },
  {
    name: "Puerto Rico",
    code: "PR",
    emoji: "🇵🇷",
    unicode: "U+1F1F5 U+1F1F7",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PR.svg",
  },
  {
    name: "Palestinian Territories",
    code: "PS",
    emoji: "🇵🇸",
    unicode: "U+1F1F5 U+1F1F8",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PS.svg",
  },
  {
    name: "Portugal",
    code: "PT",
    emoji: "🇵🇹",
    unicode: "U+1F1F5 U+1F1F9",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PT.svg",
  },
  {
    name: "Palau",
    code: "PW",
    emoji: "🇵🇼",
    unicode: "U+1F1F5 U+1F1FC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PW.svg",
  },
  {
    name: "Paraguay",
    code: "PY",
    emoji: "🇵🇾",
    unicode: "U+1F1F5 U+1F1FE",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PY.svg",
  },
  {
    name: "Qatar",
    code: "QA",
    emoji: "🇶🇦",
    unicode: "U+1F1F6 U+1F1E6",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/QA.svg",
  },
  {
    name: "Réunion",
    code: "RE",
    emoji: "🇷🇪",
    unicode: "U+1F1F7 U+1F1EA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RE.svg",
  },
  {
    name: "Romania",
    code: "RO",
    emoji: "🇷🇴",
    unicode: "U+1F1F7 U+1F1F4",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RO.svg",
  },
  {
    name: "Serbia",
    code: "RS",
    emoji: "🇷🇸",
    unicode: "U+1F1F7 U+1F1F8",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RS.svg",
  },
  {
    name: "Russia",
    code: "RU",
    emoji: "🇷🇺",
    unicode: "U+1F1F7 U+1F1FA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RU.svg",
  },
  {
    name: "Rwanda",
    code: "RW",
    emoji: "🇷🇼",
    unicode: "U+1F1F7 U+1F1FC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RW.svg",
  },
  {
    name: "Saudi Arabia",
    code: "SA",
    emoji: "🇸🇦",
    unicode: "U+1F1F8 U+1F1E6",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SA.svg",
  },
  {
    name: "Solomon Islands",
    code: "SB",
    emoji: "🇸🇧",
    unicode: "U+1F1F8 U+1F1E7",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SB.svg",
  },
  {
    name: "Seychelles",
    code: "SC",
    emoji: "🇸🇨",
    unicode: "U+1F1F8 U+1F1E8",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SC.svg",
  },
  {
    name: "Sudan",
    code: "SD",
    emoji: "🇸🇩",
    unicode: "U+1F1F8 U+1F1E9",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SD.svg",
  },
  {
    name: "Sweden",
    code: "SE",
    emoji: "🇸🇪",
    unicode: "U+1F1F8 U+1F1EA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SE.svg",
  },
  {
    name: "Singapore",
    code: "SG",
    emoji: "🇸🇬",
    unicode: "U+1F1F8 U+1F1EC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SG.svg",
  },
  {
    name: "St. Helena",
    code: "SH",
    emoji: "🇸🇭",
    unicode: "U+1F1F8 U+1F1ED",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SH.svg",
  },
  {
    name: "Slovenia",
    code: "SI",
    emoji: "🇸🇮",
    unicode: "U+1F1F8 U+1F1EE",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SI.svg",
  },
  {
    name: "Svalbard & Jan Mayen",
    code: "SJ",
    emoji: "🇸🇯",
    unicode: "U+1F1F8 U+1F1EF",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SJ.svg",
  },
  {
    name: "Slovakia",
    code: "SK",
    emoji: "🇸🇰",
    unicode: "U+1F1F8 U+1F1F0",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SK.svg",
  },
  {
    name: "Sierra Leone",
    code: "SL",
    emoji: "🇸🇱",
    unicode: "U+1F1F8 U+1F1F1",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SL.svg",
  },
  {
    name: "San Marino",
    code: "SM",
    emoji: "🇸🇲",
    unicode: "U+1F1F8 U+1F1F2",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SM.svg",
  },
  {
    name: "Senegal",
    code: "SN",
    emoji: "🇸🇳",
    unicode: "U+1F1F8 U+1F1F3",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SN.svg",
  },
  {
    name: "Somalia",
    code: "SO",
    emoji: "🇸🇴",
    unicode: "U+1F1F8 U+1F1F4",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SO.svg",
  },
  {
    name: "Suriname",
    code: "SR",
    emoji: "🇸🇷",
    unicode: "U+1F1F8 U+1F1F7",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SR.svg",
  },
  {
    name: "South Sudan",
    code: "SS",
    emoji: "🇸🇸",
    unicode: "U+1F1F8 U+1F1F8",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SS.svg",
  },
  {
    name: "São Tomé & Príncipe",
    code: "ST",
    emoji: "🇸🇹",
    unicode: "U+1F1F8 U+1F1F9",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ST.svg",
  },
  {
    name: "El Salvador",
    code: "SV",
    emoji: "🇸🇻",
    unicode: "U+1F1F8 U+1F1FB",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SV.svg",
  },
  {
    name: "Sint Maarten",
    code: "SX",
    emoji: "🇸🇽",
    unicode: "U+1F1F8 U+1F1FD",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SX.svg",
  },
  {
    name: "Syria",
    code: "SY",
    emoji: "🇸🇾",
    unicode: "U+1F1F8 U+1F1FE",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SY.svg",
  },
  {
    name: "Eswatini",
    code: "SZ",
    emoji: "🇸🇿",
    unicode: "U+1F1F8 U+1F1FF",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SZ.svg",
  },
  {
    name: "Tristan da Cunha",
    code: "TA",
    emoji: "🇹🇦",
    unicode: "U+1F1F9 U+1F1E6",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TA.svg",
  },
  {
    name: "Turks & Caicos Islands",
    code: "TC",
    emoji: "🇹🇨",
    unicode: "U+1F1F9 U+1F1E8",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TC.svg",
  },
  {
    name: "Chad",
    code: "TD",
    emoji: "🇹🇩",
    unicode: "U+1F1F9 U+1F1E9",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TD.svg",
  },
  {
    name: "French Southern Territories",
    code: "TF",
    emoji: "🇹🇫",
    unicode: "U+1F1F9 U+1F1EB",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TF.svg",
  },
  {
    name: "Togo",
    code: "TG",
    emoji: "🇹🇬",
    unicode: "U+1F1F9 U+1F1EC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TG.svg",
  },
  {
    name: "Thailand",
    code: "TH",
    emoji: "🇹🇭",
    unicode: "U+1F1F9 U+1F1ED",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TH.svg",
  },
  {
    name: "Tajikistan",
    code: "TJ",
    emoji: "🇹🇯",
    unicode: "U+1F1F9 U+1F1EF",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TJ.svg",
  },
  {
    name: "Tokelau",
    code: "TK",
    emoji: "🇹🇰",
    unicode: "U+1F1F9 U+1F1F0",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TK.svg",
  },
  {
    name: "Timor-Leste",
    code: "TL",
    emoji: "🇹🇱",
    unicode: "U+1F1F9 U+1F1F1",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TL.svg",
  },
  {
    name: "Turkmenistan",
    code: "TM",
    emoji: "🇹🇲",
    unicode: "U+1F1F9 U+1F1F2",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TM.svg",
  },
  {
    name: "Tunisia",
    code: "TN",
    emoji: "🇹🇳",
    unicode: "U+1F1F9 U+1F1F3",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TN.svg",
  },
  {
    name: "Tonga",
    code: "TO",
    emoji: "🇹🇴",
    unicode: "U+1F1F9 U+1F1F4",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TO.svg",
  },
  {
    name: "Turkey",
    code: "TR",
    emoji: "🇹🇷",
    unicode: "U+1F1F9 U+1F1F7",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TR.svg",
  },
  {
    name: "Trinidad & Tobago",
    code: "TT",
    emoji: "🇹🇹",
    unicode: "U+1F1F9 U+1F1F9",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TT.svg",
  },
  {
    name: "Tuvalu",
    code: "TV",
    emoji: "🇹🇻",
    unicode: "U+1F1F9 U+1F1FB",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TV.svg",
  },
  {
    name: "Taiwan",
    code: "TW",
    emoji: "🇹🇼",
    unicode: "U+1F1F9 U+1F1FC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TW.svg",
  },
  {
    name: "Tanzania",
    code: "TZ",
    emoji: "🇹🇿",
    unicode: "U+1F1F9 U+1F1FF",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TZ.svg",
  },
  {
    name: "Ukraine",
    code: "UA",
    emoji: "🇺🇦",
    unicode: "U+1F1FA U+1F1E6",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UA.svg",
  },
  {
    name: "Uganda",
    code: "UG",
    emoji: "🇺🇬",
    unicode: "U+1F1FA U+1F1EC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UG.svg",
  },
  {
    name: "U.S. Outlying Islands",
    code: "UM",
    emoji: "🇺🇲",
    unicode: "U+1F1FA U+1F1F2",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UM.svg",
  },
  {
    name: "United Nations",
    code: "UN",
    emoji: "🇺🇳",
    unicode: "U+1F1FA U+1F1F3",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UN.svg",
  },
  {
    name: "United States",
    code: "US",
    emoji: "🇺🇸",
    unicode: "U+1F1FA U+1F1F8",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/US.svg",
  },
  {
    name: "Uruguay",
    code: "UY",
    emoji: "🇺🇾",
    unicode: "U+1F1FA U+1F1FE",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UY.svg",
  },
  {
    name: "Uzbekistan",
    code: "UZ",
    emoji: "🇺🇿",
    unicode: "U+1F1FA U+1F1FF",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UZ.svg",
  },
  {
    name: "Vatican City",
    code: "VA",
    emoji: "🇻🇦",
    unicode: "U+1F1FB U+1F1E6",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VA.svg",
  },
  {
    name: "St. Vincent & Grenadines",
    code: "VC",
    emoji: "🇻🇨",
    unicode: "U+1F1FB U+1F1E8",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VC.svg",
  },
  {
    name: "Venezuela",
    code: "VE",
    emoji: "🇻🇪",
    unicode: "U+1F1FB U+1F1EA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VE.svg",
  },
  {
    name: "British Virgin Islands",
    code: "VG",
    emoji: "🇻🇬",
    unicode: "U+1F1FB U+1F1EC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VG.svg",
  },
  {
    name: "U.S. Virgin Islands",
    code: "VI",
    emoji: "🇻🇮",
    unicode: "U+1F1FB U+1F1EE",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VI.svg",
  },
  {
    name: "Vietnam",
    code: "VN",
    emoji: "🇻🇳",
    unicode: "U+1F1FB U+1F1F3",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VN.svg",
  },
  {
    name: "Vanuatu",
    code: "VU",
    emoji: "🇻🇺",
    unicode: "U+1F1FB U+1F1FA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VU.svg",
  },
  {
    name: "Wallis & Futuna",
    code: "WF",
    emoji: "🇼🇫",
    unicode: "U+1F1FC U+1F1EB",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/WF.svg",
  },
  {
    name: "Samoa",
    code: "WS",
    emoji: "🇼🇸",
    unicode: "U+1F1FC U+1F1F8",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/WS.svg",
  },
  {
    name: "Kosovo",
    code: "XK",
    emoji: "🇽🇰",
    unicode: "U+1F1FD U+1F1F0",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/XK.svg",
  },
  {
    name: "Yemen",
    code: "YE",
    emoji: "🇾🇪",
    unicode: "U+1F1FE U+1F1EA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/YE.svg",
  },
  {
    name: "Mayotte",
    code: "YT",
    emoji: "🇾🇹",
    unicode: "U+1F1FE U+1F1F9",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/YT.svg",
  },
  {
    name: "South Africa",
    code: "ZA",
    emoji: "🇿🇦",
    unicode: "U+1F1FF U+1F1E6",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ZA.svg",
  },
  {
    name: "Zambia",
    code: "ZM",
    emoji: "🇿🇲",
    unicode: "U+1F1FF U+1F1F2",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ZM.svg",
  },
  {
    name: "Zimbabwe",
    code: "ZW",
    emoji: "🇿🇼",
    unicode: "U+1F1FF U+1F1FC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ZW.svg",
  },
  {
    name: "England",
    code: "ENGLAND",
    emoji: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    unicode: "U+1F3F4 U+E0067 U+E0062 U+E0065 U+E006E U+E0067 U+E007F",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ENGLAND.svg",
  },
  {
    name: "Scotland",
    code: "SCOTLAND",
    emoji: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    unicode: "U+1F3F4 U+E0067 U+E0062 U+E0073 U+E0063 U+E0074 U+E007F",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SCOTLAND.svg",
  },
  {
    name: "Wales",
    code: "WALES",
    emoji: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
    unicode: "U+1F3F4 U+E0067 U+E0062 U+E0077 U+E006C U+E0073 U+E007F",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/WALES.svg",
  },
];

const actionSheetPadding = 300;

const spacingForDevicesWithoutNotch = 24;

export {
  actionSheetPadding,
  adminOrganizationId,
  spacingForDevicesWithoutNotch,
  tableColors,
};

/* eslint-enable max-lines -- no logic, just lots of variables */
