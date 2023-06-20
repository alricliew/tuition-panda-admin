// Const V2 for Singapore

export const USER_BASE_PATH = "user/v1/base"
export const USER_INFO_PATH = "user/v1/info"

export const REQUEST_ADMIN = "request/v1/admin"
export const JOB_JOB = "job/v1/job"
export const JOB_PUBLIC = "job/v1/public"
export const JOB_APPLY = "job/v1/apply"

export const ADMIN_NOTIFICATION_PATH = "admin/v1/ev_noti"


export const colourOptions = [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
  { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' },
];

// Start of Normal Subject Area
export const AllCategory = [
  {id:"kindergarten",url:"kindergarten",name:"Kindergarten", seo:"Kindergarten"},
  {id:"upsr",url:"primary",name:"Primary", seo:"Primary"},
  {id:"pt3",url:"pbs",name:"PBS", seo:"PBS"},
  {id:"spm",url:"spm",name:"SPM", seo:"SPM"},
  {id:"stpm",url:"stpm",name:"STPM", seo:"STPM"},
  {id:"recep",url:"reception",name:"Reception/Nursery", seo:"Reception"},
  {id:"camPri",url:"cambridge-primary",name:"Cambridge Primary", seo:"Cambridge Primary"},
  {id:"camLowerSec",url:"cambridge-lower-secondary",name:"Cambridge Lower Secondary", seo:"Cambridge Lower Secondary"},
  {id:"igcse",url:"igcse",name:"IGCSE", seo:"IGCSE"},
  {id:"alevel",url:"a-level",name:"A Level", seo:"A Level"},
  {id:"ibEyp",url:"ib-early",name:"IB Early Years", seo:"IB Early Years"},
  {id:"ibPyp",url:"ib-primary",name:"IB Primary (PYP)", seo:"IB Primary"},
  {id:"ibMyp",url:"ib-middle",name:"IB Middle (MYP)", seo:"IB Middle"},
  {id:"ibDiploma",url:"ib-diploma",name:"IB Diploma", seo:"IB Diploma"},
  {id:"uecJun",url:"uec-junior",name:"UEC Junior", seo:"UEC Junior"},
  {id:"uecSen",url:"uec-senior",name:"UEC Senior", seo:"UEC Senior"},
  {id:"ausmat",url:"ausmat",name:"AUSMAT", seo:"AUSMAT"},
  {id:"sace",url:"sace",name:"South Australian Certificate of Education (SACE)", seo:"SACE"},
  {id:"psle",url:"psle",name:"Primary School Leaving Examination", seo:"PSLE"},
  // TODO: singapore secondary
  {id:"found",url:"foundation",name:"Foundation", seo:"Foundation"},
  {id:"exam",url:"exam",name:"Examinations", seo:"Exam", oid:"engExam"},
  // {id:"engExam",url:"english-exam",name:"English Exam", seo:"English Exam"},
  {id:"lan",url:"language",name:"Language", seo:"Language", oid:"adultLanguage"},
  // {id:"language",url:"language",name:"Language", seo:"Language"},
  {id:"music",url:"music",name:"Music", seo:"Music"},
  {id:"computer",url:"computer-programming",name:"Computer Programming", seo:""},
  {id:"art",url:"art",name:"Art & Design", seo:"Art & Design"},
  {id:"dance",url:"dance",name:"Dance", seo:"Dance"},
  {id:"sport",url:"sport",name:"Sports & Games", seo:"Sports & Games"},
  {id:"enrich",url:"academic-enrichment",name:"Academic Enrichment", seo:""},
];
export const CategoryUrlPattern = {
  "general":"%cat_url%-%sub_url%-tutor.html",
  "exam":"%sub_url%-private-tutor.html", // "exam",
  "lan":"%sub_url%-%cat_url%-tutor.html", //"lan",
  "music":"%sub_url%-teacher.html", //"music",
  "computer":"%sub_url%-lesson.html", //"computer",
  "art":"%sub_url%-lesson.html", //"art",
  "dance":"%sub_url%-lesson.html", //"dance",
  "sport":"%sub_url%-coaches.html", //"sport",
  "enrich":"%sub_url%.html", //"enrich"
};
export const AllSubject = [
  // Kindergarten
  {id:"kinBm",url:"bahasa-melayu",name:"Bahasa Melayu", cat:"kindergarten"},
  {id:"kinEnglish",url:"bahasa-inggeris",name:"Bahasa Inggeris", cat:"kindergarten"},
  {id:"kinBc",url:"bahasa-cina",name:"Bahasa Cina", cat:"kindergarten"},
  {id:"kinBt",url:"bahasa-tamil",name:"Bahasa Tamil", cat:"kindergarten"},
  {id:"kinMath",url:"matematik",name:"Matematik", cat:"kindergarten"},
  {id:"kinSains",url:"sains",name:"Sains", cat:"kindergarten"},
  {id:"kinPhonics",url:"phonics",name:"Phonics", cat:"kindergarten"},
  {id:"kinSukuKata",url:"suku-kata",name:"Suku Kata", cat:"kindergarten"},
  {id:"kinPi",url:"pendidikan-islam",name:"Pendidikan Islam", cat:"kindergarten"},
  {id:"kinPm",url:"pendidikan-moral",name:"Pendidikan Moral", cat:"kindergarten"},
  // Primary
  {id:"priBm",url:"bahasa-melayu",name:"Bahasa Melayu", cat:"upsr"},
  {id:"priEnglish",url:"bahasa-inggeris",name:"Bahasa Inggeris", cat:"upsr"},
  {id:"priMath",url:"matematik",name:"Matematik", cat:"upsr"},
  {id:"priScience",url:"sains",name:"Sains", cat:"upsr"},
  {id:"priBc",url:"bahasa-cina",name:"Bahasa Cina", cat:"upsr"},
  {id:"priBt",url:"bahasa-tamil",name:"Bahasa Tamil", cat:"upsr"},
  {id:"priSej",url:"sejarah",name:"Sejarah", cat:"upsr"},
  {id:"priRbk",url:"reka-bentuk-dan-teknologi",name:"Reka Bentuk dan Teknologi", cat:"upsr"},
  {id:"priPi",url:"pendidikan-islam",name:"Pendidikan Islam", cat:"upsr", oid:"priPim"},
  {id:"priPm",url:"pendidikan-moral",name:"Pendidikan Moral", cat:"upsr"},
  {id:"priArab",url:"bahasa-arab",name:"Bahasa Arab", cat:"upsr"},
  {id:"priIban",url:"bahasa-iban",name:"Bahasa Iban", cat:"upsr"},
  {id:"priKadazandusun",url:"bahasa-kadazandusun",name:"Bahasa Kadazandusun", cat:"upsr"},
  // PBS
  {id:"pt3Bm",url:"bahasa-melayu",name:"Bahasa Melayu", cat:"pt3"},
  {id:"pt3English",url:"bahasa-inggeris",name:"Bahasa Inggeris", cat:"pt3"},
  {id:"pt3Math",url:"mathematics",name:"Mathematics", cat:"pt3"},
  {id:"pt3Science",url:"science",name:"Science", cat:"pt3"},
  {id:"pt3Sej",url:"sejarah",name:"Sejarah", cat:"pt3"},
  {id:"pt3Geo",url:"geografi",name:"Geografi", cat:"pt3"},
  {id:"pt3Bc",url:"bahasa-cina",name:"Bahasa Cina", cat:"pt3"},
  {id:"pt3Bt",url:"bahasa-tamil",name:"Bahasa Tamil", cat:"pt3"},
  {id:"pt3Ask",url:"asas-sains-komputer",name:"Asas Sains Komputer", cat:"pt3"},
  {id:"pt3Rbk",url:"reka-bentuk-dan-teknologi",name:"Reka Bentuk dan Teknologi", cat:"pt3"},
  {id:"pt3Pi",url:"pendidikan-islam",name:"Pendidikan Islam", cat:"pt3"},
  {id:"pt3Arab",url:"bahasa-arab",name:"Bahasa Arab", cat:"pt3"},
  {id:"pt3Iban",url:"bahasa-iban",name:"Bahasa Iban", cat:"pt3"},
  {id:"pt3Kadazandusun",url:"bahasa-kadazandusu",name:"Bahasa Kadazandusun", cat:"pt3"},
  {id:"pt3Punjabi",url:"bahasa-punjabi",name:"Bahasa Punjabi", cat:"pt3"},
  {id:"pt3MaharatAlQuran",url:"maharat-al-quran",name:"Maharat al-Quran (KBT)", cat:"pt3"},
  {id:"pt3UsulAlDin",url:"usul-al-din",name:"Usul al-Din (KBD)", cat:"pt3"},
  {id:"pt3AlSyariah",url:"al-syariah",name:"Al-Syariah (KBD)", cat:"pt3"},
  {id:"pt3AlLugAlArabAlMua",url:"al-lughah-al-arabiah-al-muasirah",name:"Al-Lughah Al-Arabiah Al-Muasirah (KBD)", cat:"pt3"},
  // SPM
  {id:"spmBm",url:"bahasa-melayu",name:"Bahasa Melayu", cat:"spm"},
  {id:"spmEnglish",url:"bahasa-inggeris",name:"Bahasa Inggeris", cat:"spm"},
  {id:"spmMath",url:"matematik",name:"Matematik", cat:"spm"},
  {id:"spmSains",url:"sains",name:"Sains", cat:"spm"},
  {id:"spmSej",url:"sejarah",name:"Sejarah", cat:"spm"},
  {id:"spmPi",url:"pendidikan-islam",name:"Pendidikan Islam", cat:"spm"},
  {id:"spmPm",url:"pendidikan-moral",name:"Pendidikan Moral", cat:"spm"},
  {id:"spmAddmath",url:"additional-mathematics",name:"Additional Mathematics", cat:"spm"},
  {id:"spmChe",url:"chemistry",name:"Chemistry", cat:"spm"},
  {id:"spmBio",url:"biology",name:"Biology", cat:"spm"},
  {id:"spmPhy",url:"physics",name:"Physics", cat:"spm"},
  {id:"spmBc",url:"bahasa-cina",name:"Bahasa Cina", cat:"spm"},
  {id:"spmTamil",url:"bahasa-tamil",name:"Bahasa Tamil", cat:"spm"},
  {id:"spmIban",url:"bahasa-iban",name:"Bahasa Iban", cat:"spm"},
  {id:"spmEko",url:"ekonomi",name:"Ekonomi", cat:"spm"},
  {id:"spmPerniagaan",url:"perniagaan",name:"Perniagaan", cat:"spm"},
  {id:"spmPp",url:"prinsip-perakaunan",name:"Prinsip Perakaunan", cat:"spm"},
  {id:"spmGeo",url:"geografi",name:"Geografi", cat:"spm"},
  {id:"spmKesusasteraanMelayu",url:"kesusasteraan-melayu",name:"Kesusasteraan Melayu", cat:"spm"},
  {id:"spmKesusasteraanCina",url:"kesusasteraan-cina",name:"Kesusasteraan Cina", cat:"spm"},
  {id:"spmKesusasteraanTamil",url:"kesusasteraan-tamil",name:"Kesusasteraan Tamil", cat:"spm"},
  {id:"spmPsv",url:"pendidikan-seni-visual",name:"Pendidikan Seni Visual", cat:"spm"},
  {id:"spmGrafikKomTek",url:"grafik-komunikasi-teknikal",name:"Grafik Komunikasi Teknikal", cat:"spm"},
  {id:"spmPertanian",url:"pertanian",name:"Pertanian", cat:"spm"},
  {id:"spmSainsRumahTangga",url:"sains-rumah-tangga",name:"Sains Rumah Tangga", cat:"spm"},
  {id:"spmRekaCipta",url:"reka-cipta",name:"Reka Cipta", cat:"spm"},
  {id:"spmSainsKomputer",url:"sains-komputer",name:"Sains Komputer", cat:"spm"},
  {id:"spmSainsSukan",url:"sains-sukan",name:"Sains Sukan", cat:"spm"},
  {id:"spmAsasKelestarian",url:"asas-kelestarian",name:"Asas Kelestarian", cat:"spm"},
  {id:"spmLukisanKejuruteraan",url:"lukisan-kejuruteraan",name:"Lukisan Kejuruteraan", cat:"spm"},
  {id:"spmSainsTambahan",url:"sains-tambahan",name:"Sains Tambahan", cat:"spm"},
  {id:"spmSyariah",url:"pendidikan-syariah",name:"Pendidikan Syariah", cat:"spm"},
  {id:"spmAlQuranAlSunnah",url:"pendidikan-al-quran-dan-al-sunnah",name:"Pendidikan Al Quran dan Al Sunnah", cat:"spm"},
  {id:"spmTasawwurIslam",url:"tasawwur-islam",name:"Tasawwur Islam", cat:"spm"},
  {id:"spmUsulAlDin",url:"usul-al-din",name:"Usul Al-Din", cat:"spm"},
  {id:"spmAlSyariah",url:"al-syariah",name:"Al-Syariah", cat:"spm"},
  {id:"spmAlLugAlArabAlMua",url:"al-lughah-al-arabiah-al-muasirah",name:"Al-Lughah Al-Arabiah Al-Muasirah", cat:"spm"},
  {id:"spmManahijAlUlumAlIslamiah",url:"manahij-al-ulum-al-islamiah",name:"Manahij Al-Ulum Al-Islamiah", cat:"spm"},
  {id:"spmAlAdabWaAlBalaghah",url:"al-adab-wa-al-balaghah",name:"Al-Adab Wa Al-Balaghah", cat:"spm"},
  // STPM
  {id:"stpmPa",url:"pengajian-am",name:"Pengajian Am", cat:"stpm"},
  {id:"stpmMathM",url:"mathematics-m",name:"Mathematics (M)", cat:"stpm"},
  {id:"stpmMathT",url:"mathematics-t",name:"Mathematics (T)", cat:"stpm"},
  {id:"stpmPhy",url:"physics",name:"Physics", cat:"stpm"},
  {id:"stpmChe",url:"chemistry",name:"Chemistry", cat:"stpm"},
  {id:"stpmBio",url:"biology",name:"Biology", cat:"stpm"},
  {id:"stpmPp",url:"pengajian-perniagaan",name:"Pengajian Perniagaan", cat:"stpm"},
  {id:"stpmEko",url:"ekonomi",name:"Ekonomi", cat:"stpm"},
  {id:"stpmPerakaunan",url:"perakaunan",name:"Perakaunan", cat:"stpm"},
  {id:"stpmSej",url:"sejarah",name:"Sejarah", cat:"stpm"},
  {id:"stpmGeo",url:"geografi",name:"Geografi", cat:"stpm"},
  {id:"stpmKesusasteraanMelayu",url:"kesusasteraan-melayu",name:"Kesusasteraan Melayu", cat:"stpm"},
  {id:"stpmBm",url:"bahasa-melayu",name:"Bahasa Melayu", cat:"stpm"},
  {id:"stpmBc",url:"bahasa-cina",name:"Bahasa Cina", cat:"stpm"},
  {id:"stpmBt",url:"bahasa-tamil",name:"Bahasa Tamil", cat:"stpm"},
  {id:"stpmIct",url:"ict",name:"Information and Communications Technology (ICT)", cat:"stpm"},
  {id:"stpmSainsSukan",url:"sains-sukan",name:"Sains Sukan", cat:"stpm"},
  {id:"stpmSeniVisual",url:"seni-visual",name:"Seni Visual", cat:"stpm"},
  // Cambridge Reception/Nursery
  {id:"camNurPhonics",url:"phonics",name:"Phonics", cat:"recep"},
  {id:"camNurMath",url:"mathematics",name:"Mathematics", cat:"recep"},
  {id:"camNurBm",url:"malay",name:"Malay", cat:"recep"},
  {id:"camNurMan",url:"mandarin",name:"Mandarin", cat:"recep"},
  // Cambridge Primary
  {id:"camPriEng",url:"english",name:"English", cat:"camPri"},
  {id:"camPriMath",url:"mathematics",name:"Mathematics", cat:"camPri"},
  {id:"camPriScience",url:"science",name:"Science", cat:"camPri"},
  {id:"camPriMalay",url:"malay",name:"Malay", cat:"camPri"},
  {id:"camPriMandarin",url:"mandarin",name:"Mandarin", cat:"camPri"},
  {id:"camPriArt",url:"art",name:"Art", cat:"camPri"},
  {id:"camPriIct",url:"ict",name:"ICT", cat:"camPri"},
  {id:"camPriMusic",url:"music",name:"Music", cat:"camPri"},
  {id:"camPriDrama",url:"drama",name:"Drama", cat:"camPri"},
  // Cambridge Secondary
  {id:"camSecEng",url:"english",name:"English", cat:"camLowerSec"},
  {id:"camSecMath",url:"mathematics",name:"Mathematics", cat:"camLowerSec"},
  {id:"camSecScience",url:"science",name:"Science", cat:"camLowerSec"},
  {id:"camSecHuman",url:"humanities",name:"Humanities", cat:"camLowerSec"},
  {id:"camSecMalay",url:"malay",name:"Malay", cat:"camLowerSec"},
  {id:"camSecMandarin",url:"mandarin",name:"Mandarin", cat:"camLowerSec"},
  {id:"camSecArt",url:"art",name:"Art", cat:"camLowerSec"},
  {id:"camSecIct",url:"ict",name:"ICT", cat:"camLowerSec"},
  {id:"camSecMusic",url:"music",name:"Music", cat:"camLowerSec"},
  {id:"camSecDrama",url:"drama",name:"Drama", cat:"camLowerSec"},
  // IGCSE
  {id:"igcseAccounting",url:"accounting",name:"Accounting", cat:"igcse"},
  {id:"igcseAfrikaansSecondLan",url:"arikaans-second-language",name:"Afrikaans - Second Language", cat:"igcse"},
  {id:"igcseAgri",url:"agriculture",name:"Agriculture", cat:"igcse"},
  {id:"igcseArabicFirstLan",url:"arabic-first-language",name:"Arabic - First Language", cat:"igcse"},
  {id:"igcseArabicForeignLan",url:"arabic-foreign-language",name:"Arabic - Foreign Language", cat:"igcse"},
  {id:"igcseArt",url:"art-and-design",name:"Art & Design", cat:"igcse"},
  {id:"igcseBIndon",url:"bahasa-indonesia",name:"Bahasa Indonesia", cat:"igcse"},
  {id:"igcseBio",url:"biology",name:"Biology", cat:"igcse"},
  {id:"igcseBusiness",url:"business-studies",name:"Business Studies", cat:"igcse"},
  {id:"igcseChe",url:"chemistry",name:"Chemistry", cat:"igcse"},
  {id:"igcseChineseFirstLan",url:"chinese-first-language",name:"Chinese - First Language", cat:"igcse"},
  {id:"igcseChineseSecondLan",url:"chinese-second-language",name:"Chinese - Second Language", cat:"igcse"},
  {id:"igcseChineseForeignLan",url:"mandarin-chinese-foreign-language",name:"Mandarin Chinese - Foreign Language", cat:"igcse"},
  {id:"igcseCS",url:"computer-science",name:"Computer Science", cat:"igcse"},
  {id:"igcseDesignTech",url:"design-and-technology",name:"Design & Technology", cat:"igcse"},
  {id:"igcseDevStu",url:"development-studies",name:"Development Studies", cat:"igcse"},
  {id:"igcseDrama",url:"drama",name:"Drama", cat:"igcse"},
  {id:"igcseEco",url:"economics",name:"Economics", cat:"igcse"},
  {id:"igcseFirstEnglish",url:"english-first-language",name:"English - First Language", cat:"igcse"},
  {id:"igcseFirstEngUs",url:"english-first-language-us",name:"English - First Language (US)", cat:"igcse"},
  {id:"igcseEngLitUs",url:"english-literature-us",name:"English - Literature (US)", cat:"igcse"},
  {id:"igcseEngLit",url:"english-literature-in-english",name:"English - Literature in English", cat:"igcse"},
  {id:"igcseEngAddLan",url:"english-as-an-additional-language",name:"English (as an Additional Language)", cat:"igcse"},
  {id:"igcseSecondEnglish",url:"english-as-a-second-language",name:"English as a Second Language", cat:"igcse"},
  {id:"igcseEnt",url:"enterprise",name:"Enterprise", cat:"igcse"},
  {id:"igcseEnvMan",url:"environmental-management",name:"Environmental Management", cat:"igcse"},
  {id:"igcseFoodNut",url:"food-and-nutrition",name:"Food & Nutrition", cat:"igcse"},
  {id:"igcseFrenchFirstLan",url:"french-first-language",name:"French - First Language", cat:"igcse"},
  {id:"igcseFrenchForeignLan",url:"french-foreign-language",name:"French - Foreign Language", cat:"igcse"},
  {id:"igcseGeo",url:"geography",name:"Geography", cat:"igcse"},
  {id:"igcseGermanFirstLan",url:"german-first-language",name:"German - First Language", cat:"igcse"},
  {id:"igcseGermanForeignLan",url:"german-foreign-language",name:"German - Foreign Language", cat:"igcse"},
  {id:"igcseGloPer",url:"global-perspectives",name:"Global Perspectives", cat:"igcse"},
  {id:"igcseHindiSecondLan",url:"hindi-as-a-second-language",name:"Hindi as a Second Language", cat:"igcse"},
  {id:"igcseHis",url:"history",name:"History", cat:"igcse"},
  {id:"igcseHisUs",url:"history-american-us",name:"History - American (US)", cat:"igcse"},
  {id:"igcseICT",url:"ict",name:"Information & Communication Technology", cat:"igcse"},
  {id:"igcseIsiZuluSecondLan",url:"isizulu-as-a-second-language",name:"IsiZulu as a Second Language", cat:"igcse"},
  {id:"igcseIslam",url:"islamiyat",name:"Islamiyat", cat:"igcse"},
  {id:"igcseItalianForeignLan",url:"italian-foreign-language",name:"Italian - Foreign Language", cat:"igcse"},
  {id:"igcseJapForeignLan",url:"japanese-foreign-language",name:"Japanese - Foreign Language", cat:"igcse"},
  {id:"igcseLatin",url:"latin",name:"Latin", cat:"igcse"},
  {id:"igcseBm",url:"malay-first-language",name:"Malay - First Language", cat:"igcse"},
  {id:"igcseBmForeignLan",url:"malay-foreign-language",name:"Malay - Foreign Language", cat:"igcse"},
  {id:"igcseMarine",url:"marine-science",name:"Marine Science", cat:"igcse"},
  {id:"igcseMath",url:"mathematics",name:"Mathematics", cat:"igcse"},
  {id:"igcseAddmath",url:"mathematics-additional",name:"Mathematics - Additional", cat:"igcse"},
  {id:"igcseIntMath",url:"mathematics-international",name:"Mathematics - International", cat:"igcse"},
  {id:"igcseMathUs",url:"mathematics-us",name:"Mathematics (US)", cat:"igcse"},
  {id:"igcseMusic",url:"music",name:"Music", cat:"igcse"},
  {id:"igcsePakStu",url:"pakistan-studies",name:"Pakistan Studies", cat:"igcse"},
  {id:"igcsePhyEdu",url:"physical-education",name:"Physical Education", cat:"igcse"},
  {id:"igcsePhySc",url:"physical-science",name:"Physical Science", cat:"igcse"},
  {id:"igcsePhy",url:"physics",name:"Physics", cat:"igcse"},
  {id:"igcsePorFirstLan",url:"portuguese-first-language",name:"Portuguese - First Language", cat:"igcse"},
  {id:"igcseRelStu",url:"religious-studies",name:"Religious Studies", cat:"igcse"},
  {id:"igcseSans",url:"sanskrit",name:"Sanskrit", cat:"igcse"},
  {id:"igcseCombinedScience",url:"science-combined",name:"Science - Combined", cat:"igcse"},
  {id:"igcseCoorSc",url:"sciences-coordinated",name:"Sciences - Co-ordinated", cat:"igcse"},
  {id:"igcseSocio",url:"sociology",name:"Sociology", cat:"igcse"},
  {id:"igcseSpanFirstLan",url:"spanish-first-language",name:"Spanish - First Language", cat:"igcse"},
  {id:"igcseSpanForeignLan",url:"spanish-foreign-language",name:"Spanish - Foreign Language", cat:"igcse"},
  {id:"igcseSpanLit",url:"spanish-literature",name:"Spanish - Literature", cat:"igcse"},
  {id:"igcseSwahili",url:"swahili",name:"Swahili", cat:"igcse"},
  {id:"igcseThaiFirstLan",url:"thai-first-language",name:"Thai - First Language", cat:"igcse"},
  {id:"igcseTravel",url:"travel-and-tourism",name:"Travel & Tourism", cat:"igcse"},
  {id:"igcseTurFirstLan",url:"turkish-first-language",name:"Turkish - First Language", cat:"igcse"},
  {id:"igcseUrduSecondLan",url:"urdu-as-a-second-language",name:"Urdu as a Second Language", cat:"igcse"},
  {id:"igcseWorldLit",url:"world-literature",name:"World Literature", cat:"igcse"},
  // A Level
  {id:"alevelAccounting",url:"accounting",name:"Accounting", cat:"alevel",oid:"aLevelAccounting"},
  {id:"alevelAppliedICT",url:"applied-ict",name:"Applied ICT", cat:"alevel",oid:"aLevelAppliedICT"},
  {id:"alevelBio",url:"biology",name:"Biology", cat:"alevel",oid:"aLevelBio"},
  {id:"alevelBusiness",url:"business",name:"Business", cat:"alevel",oid:"aLevelBusiness"},
  {id:"alevelChe",url:"chemistry",name:"Chemistry", cat:"alevel",oid:"aLevelChe"},
  {id:"alevelCs",url:"computer-science",name:"Computer Science", cat:"alevel",oid:"aLevelCs"},
  {id:"alevelEco",url:"economics",name:"Economics", cat:"alevel",oid:"aLevelEco"},
  {id:"alevelEngLit",url:"english-literature",name:"English Literature", cat:"alevel",oid:"aLevelEngLit"},
  {id:"alevelFurmath",url:"further-mathematics",name:"Further Mathematics", cat:"alevel",oid:"aLevelFurmath"},
  {id:"alevelHist",url:"history",name:"History", cat:"alevel",oid:"aLevelHist"},
  {id:"alevelLaw",url:"law",name:"Law", cat:"alevel",oid:"aLevelLaw"},
  {id:"alevelMath",url:"mathematics",name:"Mathematics", cat:"alevel",oid:"aLevelMath"},
  {id:"alevelPhy",url:"physics",name:"Physics", cat:"alevel",oid:"aLevelPhy"},
  {id:"alevelPsy",url:"psychology",name:"Psychology", cat:"alevel",oid:"aLevelPsy"},
  {id:"alevelSocio",url:"sociology",name:"Sociology", cat:"alevel",oid:"aLevelSocio"},
  // IB Early Year
  {id:"ibEyPhonics",url:"phonics",name:"Phonics", cat:"ibEyp"},
  {id:"ibEyMath",url:"mathematics",name:"Mathematics", cat:"ibEyp"},
  {id:"ibEyBm",url:"malay",name:"Malay", cat:"ibEyp"},
  {id:"ibEyMan",url:"mandarin",name:"Mandarin", cat:"ibEyp"},
  // IB Primary
  {id:"ibPriBm",url:"malay",name:"Malay", cat:"ibPyp"},
  {id:"ibPriMan",url:"mandarin",name:"Mandarin", cat:"ibPyp"},
  {id:"ibPriEng",url:"english",name:"English", cat:"ibPyp", oid:"ibPriLan"},
  {id:"ibPriSocialStudies",url:"social-studies",name:"Social Studies", cat:"ibPyp"},
  {id:"ibPriMath",url:"mathematics",name:"Mathematics", cat:"ibPyp"},
  {id:"ibPriScience",url:"science",name:"Science", cat:"ibPyp"},
  {id:"ibPriArt",url:"art",name:"Art", cat:"ibPyp"},
  // IB Middle - https://www.iskl.edu.my/learning-at-iskl/middle-school/middle-school-curriculum/
  {id:"ibMidHuman",url:"humanities",name:"Humanities", cat:"ibMyp"},
  {id:"ibMidMath",url:"mathematics",name:"Mathematics", cat:"ibMyp"},
  {id:"ibMidScience",url:"science",name:"Science", cat:"ibMyp"},
  {id:"ibMidEng",url:"english",name:"English", cat:"ibMyp", oid:"ibMidLanAcq"},
  {id:"ibMidBm",url:"malay",name:"Malay", cat:"ibMyp"},
  {id:"ibMidChinese",url:"chinese",name:"Chinese", cat:"ibMyp"},
  {id:"ibMidFrench",url:"french",name:"French", cat:"ibMyp"},
  {id:"ibMidSpan",url:"spanish",name:"Spanish", cat:"ibMyp"},
  {id:"ibMidIndSoc",url:"individuals-and-societies",name:"Individuals and Societies", cat:"ibMyp"},
  {id:"ibMidLanLit",url:"language-and-literature",name:"Language and Literature", cat:"ibMyp"},
  {id:"ibMidDrama",url:"drama",name:"Drama", cat:"ibMyp"},
  {id:"ibMidArt",url:"visual-arts",name:"Visual Arts", cat:"ibMyp"},
  {id:"ibMidDesign",url:"design",name:"Design", cat:"ibMyp"},
  {id:"ibMidPhy",url:"physical-and-health-education",name:"Physical and Health Education", cat:"ibMyp"},

  // IB Diploma
  {id:"ibDipBio",url:"biology",name:"Biology SL/HL", cat:"ibDiploma"},
  {id:"ibDipBusMan",url:"business-and-management",name:"Business and Management SL/HL", cat:"ibDiploma"},
  {id:"ibDipChe",url:"chemistry",name:"Chemistry SL/HL", cat:"ibDiploma"},
  {id:"ibDipChiB",url:"chinese-b",name:"Chinese B SL/HL", cat:"ibDiploma"},
  {id:"ibDipChiLanLit",url:"chinese-language-and-literature",name:"Chinese Language and Literature SL", cat:"ibDiploma"},
  {id:"ibDipCs",url:"computer-science",name:"Computer Science SL/HL", cat:"ibDiploma"},
  {id:"ibDipDesignTech",url:"design-and-technology",name:"Design and Technology SL/HL", cat:"ibDiploma"},
  {id:"ibDipEco",url:"economics",name:"Economics SL/HL", cat:"ibDiploma"},
  {id:"ibDipEngB",url:"english-b",name:"English B SL/HL", cat:"ibDiploma"},
  {id:"ibDipEngLanLit",url:"english-language-and-literature",name:"English Language and Literature SL/HL", cat:"ibDiploma"},
  {id:"ibDipEngLitPer",url:"english-literature-and-performance",name:"English Literature and Performance SL", cat:"ibDiploma"},
  {id:"ibDipEngLit",url:"english-literature",name:"English Literature SL/HL", cat:"ibDiploma"},
  {id:"ibDipFrenchAbInitio",url:"french-ab-initio",name:"French Ab Initio SL", cat:"ibDiploma"},
  {id:"ibDipFrenchB",url:"french-b",name:"French B SL/HL", cat:"ibDiploma"},
  {id:"ibDipGeo",url:"geography",name:"Geography SL/HL", cat:"ibDiploma"},
  {id:"ibDipGloPolitics",url:"global-politics",name:"Global Politics SL/HL", cat:"ibDiploma"},
  {id:"ibDipHist",url:"history",name:"History SL/HL", cat:"ibDiploma"},
  {id:"ibDipMalayAbInitio",url:"malay-ab-initio",name:"Malay Ab Initio SL", cat:"ibDiploma"},
  {id:"ibDipMalayB",url:"malay-b",name:"Malay B SL", cat:"ibDiploma"},
  {id:"ibDipMalayLit",url:"malay-literature",name:"Malay Literature SL/HL", cat:"ibDiploma"},
  {id:"ibDipMath",url:"mathematics",name:"Mathematics SL/HL", cat:"ibDiploma"},
  {id:"ibDipMusic",url:"music",name:"Music SL/HL", cat:"ibDiploma"},
  {id:"ibDipPhy",url:"physics",name:"Physics SL/HL", cat:"ibDiploma"},
  {id:"ibDipPsy",url:"psychology",name:"Psychology SL/HL", cat:"ibDiploma"},
  {id:"ibDipSpanishAbInitio",url:"spanish-ab-initio",name:"Spanish Ab Initio SL", cat:"ibDiploma"},
  {id:"ibDipSpanishB",url:"spanish-b",name:"Spanish B SL/HL", cat:"ibDiploma"},
  {id:"ibDipSportHealthExerScience",url:"sports-health-and-exercise-science",name:"Sports Health and Exercise Science SL/HL", cat:"ibDiploma"},
  {id:"ibDipTheatreArt",url:"theatre-arts",name:"Theatre Arts SL/HL", cat:"ibDiploma"},
  {id:"ibDipVisualArt",url:"visual-arts",name:"Visual Arts SL/HL", cat:"ibDiploma"},
  {id:"ibDipWorldReligions",url:"world-religions",name:"World Religions SL", cat:"ibDiploma"},
  // UEC Junior
  {id:"uecJunChi",url:"chinese-language",name:"Chinese Language", cat:"uecJun"},
  {id:"uecJunEng",url:"english-language",name:"English Language", cat:"uecJun"},
  {id:"uecJunMalay",url:"malay-language",name:"Malay Language", cat:"uecJun"},
  {id:"uecJunMath",url:"mathematics",name:"Mathematics", cat:"uecJun"},
  {id:"uecJunScience",url:"science",name:"Science", cat:"uecJun"},
  {id:"uecJunGeo",url:"geography",name:"Geography", cat:"uecJun"},
  {id:"uecJunHist",url:"history",name:"History", cat:"uecJun"},
  {id:"uecJunArt",url:"art",name:"Art", cat:"uecJun"},
  // UEC Senior
  {id:"uecSenAcc",url:"accounting",name:"Accounting", cat:"uecSen"},
  {id:"uecSenAdvMath",url:"advanced-mathematics",name:"Advanced Mathematics", cat:"uecSen"},
  {id:"uecSenAdvMathI",url:"advanced-mathematics-i",name:"Advanced Mathematics (I)", cat:"uecSen"},
  {id:"uecSenAdvMathII",url:"advanced-mathematics-ii",name:"Advanced Mathematics (II)", cat:"uecSen"},
  {id:"uecSenArt",url:"art",name:"Art", cat:"uecSen"},
  {id:"uecSenBasicCirTheo",url:"basic-circuit-theory",name:"Basic Circuit Theory", cat:"uecSen"},
  {id:"uecSenBio",url:"biology",name:"Biology", cat:"uecSen"},
  {id:"uecSenBookKeepAcc",url:"book-keeping-and-accounts",name:"Book-keeping and Accounts", cat:"uecSen"},
  {id:"uecSenBusStu",url:"business-studies",name:"Business Studies", cat:"uecSen"},
  {id:"uecSenChe",url:"chemistry",name:"Chemistry", cat:"uecSen"},
  {id:"uecSenChiLan",url:"chinese-language",name:"Chinese Language", cat:"uecSen"},
  {id:"uecSenIct",url:"computing-and-information-technology",name:"Computing and Information Technology", cat:"uecSen"},
  {id:"uecSenDigLogic",url:"digital-logic",name:"Digital Logic", cat:"uecSen"},
  {id:"uecSenEco",url:"economics",name:"Economics", cat:"uecSen"},
  {id:"uecSenEngLan",url:"english-language",name:"English Language", cat:"uecSen"},
  {id:"uecSenFunEnE",url:"fundamentals-of-electrical-engineering",name:"Fundamentals of Electrical Engineering", cat:"uecSen"},
  {id:"uecSenGeo",url:"geography",name:"Geography", cat:"uecSen"},
  {id:"uecSenHist",url:"history",name:"History", cat:"uecSen"},
  {id:"uecSenMalayLan",url:"malay-language",name:"Malay Language", cat:"uecSen"},
  {id:"uecSenMath",url:"mathematics",name:"Mathematics", cat:"uecSen"},
  {id:"uecSenPhy",url:"physics",name:"Physics", cat:"uecSen"},
  {id:"uecSenPrinE",url:"principle-electronic",name:"Principle Electronic", cat:"uecSen"},
  // AUSMAT
  {id:"ausAccFin",url:"accounting-and-finance",name:"Accounting and Finance", cat:"ausmat"},
  {id:"ausAppliedIT",url:"applied-information-technology",name:"Applied Information Technology", cat:"ausmat"},
  {id:"ausBio",url:"biology",name:"Biology", cat:"ausmat"},
  {id:"ausBusManNEnt",url:"business-management-and-enterprise",name:"Business Management & Enterprise", cat:"ausmat"},
  {id:"ausChe",url:"chemistry",name:"Chemistry", cat:"ausmat"},
  {id:"ausChinese",url:"chinese",name:"Chinese", cat:"ausmat"},
  {id:"ausDesign",url:"design-dimensional-graphics-photography",name:"Design (Dimensional / Graphics / Photography)", cat:"ausmat"},
  {id:"ausDrama",url:"drama",name:"Drama", cat:"ausmat"},
  {id:"ausEco",url:"economics",name:"Economics", cat:"ausmat"},
  {id:"ausEng",url:"english",name:"English", cat:"ausmat"},
  {id:"ausEngAdd",url:"english-additional-language-or-dialect",name:"English Additional Language or Dialect", cat:"ausmat"},
  {id:"ausFoodStudies",url:"food-studies",name:"Food Studies", cat:"ausmat"},
  {id:"ausFrench",url:"french",name:"French", cat:"ausmat"},
  {id:"ausGeography",url:"geography",name:"Geography", cat:"ausmat"},
  {id:"ausHumanBio",url:"human-biology",name:"Human Biology", cat:"ausmat"},
  {id:"ausIndo",url:"indonesian",name:"Indonesian", cat:"ausmat"},
  {id:"ausLit",url:"literature",name:"Literature", cat:"ausmat"},
  {id:"ausMarine",url:"marine-and-maritime-studies",name:"Marine and Maritime Studies", cat:"ausmat"},
  {id:"ausMatDesignTech",url:"materials-design-technology-metal",name:"Materials Design Technology (Metal)", cat:"ausmat"},
  {id:"ausMathApp",url:"mathematics-applications",name:"Mathematics Applications", cat:"ausmat"},
  {id:"ausMathEss",url:"mathematics-essential",name:"Mathematics Essential", cat:"ausmat"},
  {id:"ausMathMeth",url:"mathematics-methods",name:"Mathematics Methods", cat:"ausmat"},
  {id:"ausMathSpe",url:"mathematics-specialist",name:"Mathematics Specialist", cat:"ausmat"},
  {id:"ausMediaProd",url:"media-production-and-analysis",name:"Media Production & Analysis", cat:"ausmat"},
  {id:"ausModHist",url:"modern-history",name:"Modern History", cat:"ausmat"},
  {id:"ausMusic",url:"music",name:"Music", cat:"ausmat"},
  {id:"ausOutEdu",url:"outdoor-education",name:"Outdoor Education", cat:"ausmat"},
  {id:"ausPhyEdu",url:"physical-education-studies",name:"Physical Education Studies", cat:"ausmat"},
  {id:"ausPhysics",url:"physics",name:"Physics", cat:"ausmat"},
  {id:"ausPolitics",url:"politics-and-law",name:"Politics & Law", cat:"ausmat"},
  {id:"ausPsy",url:"psychology",name:"Psychology", cat:"ausmat"},
  {id:"ausArt",url:"visual-arts",name:"Visual Arts", cat:"ausmat"},
  // SACE
  {id:"samAcc",url:"accounting",name:"Accounting", cat:"sace"},
  {id:"samBio",url:"biology",name:"Biology", cat:"sace"},
  {id:"samChe",url:"chemistry",name:"Chemistry", cat:"sace"},
  {id:"samEco",url:"economics",name:"Economics", cat:"sace"},
  {id:"samEngAdd",url:"english-as-an-additional-language",name:"English as an Additional Language", cat:"sace"},
  {id:"samLegal",url:"legal-studies",name:"Legal Studies", cat:"sace"},
  {id:"samMath",url:"mathematical-studies",name:"Mathematical Studies", cat:"sace"},
  {id:"samNutri",url:"nutrition",name:"Nutrition", cat:"sace"},
  {id:"samPhy",url:"physics",name:"Physics", cat:"sace"},
  {id:"samPsy",url:"psychology",name:"Psychology", cat:"sace"},
  {id:"samResearchProj",url:"research-project",name:"Research Project", cat:"sace", oid:"samResearchProjB"},
  {id:"samSpecialistMath",url:"specialist-mathematics",name:"Specialist Mathematics", cat:"sace"},
  // PSLE
  {id:"psleEng",url:"english",name:"English Language", cat:"psle"},
  {id:"psleChi",url:"chinese",name:"Chinese Language", cat:"psle"},
  {id:"psleMalay",url:"malay",name:"Malay Language", cat:"psle"},
  {id:"psleBt",url:"tamil",name:"Tamil Language", cat:"psle"},
  {id:"psleMath",url:"mathematics",name:"Mathematics", cat:"psle"},
  {id:"psleSc",url:"science",name:"Science", cat:"psle"},
  // Foundation
  {id:"foundEng",url:"english",name:"English",cat:"found"},
  {id:"foundPhy",url:"physics",name:"Physics",cat:"found"},
  {id:"foundChe",url:"chemistry",name:"Chemistry",cat:"found"},
  {id:"foundBio",url:"biology",name:"Biology",cat:"found"},
  {id:"foundMath",url:"mathematics",name:"Mathematics",cat:"found"},
  {id:"foundAdvMath",url:"advanced-mathematics",name:"Advanced Mathematics",cat:"found"},
  {id:"foundStat",url:"statistics",name:"Statistics",cat:"found"},
  {id:"foundQuanTech",url:"quantitative-technique",name:"Quantitative Technique",cat:"found"},
  {id:"foundAcc",url:"accounting",name:"Accounting",cat:"found"},
  {id:"foundEco",url:"economics",name:"Economics",cat:"found"},
  {id:"foundBus",url:"business",name:"Business",cat:"found"},
  {id:"foundBusInfoTech",url:"business-information-technology",name:"Business Information Technology",cat:"found"},
  {id:"foundFin",url:"finance",name:"Finance",cat:"found"},
  {id:"foundCS",url:"computer-science",name:"Computer Science",cat:"found"},
  {id:"foundNaturalEnv",url:"natural-and-built-environment",name:"Natural & Built Environment",cat:"found"},
  {id:"foundSocialPsy",url:"social-psychology",name:"Social Psychology",cat:"found"},
  {id:"foundCritThink",url:"critical-and-creative-thinking",name:"Critical and Creative Thinking Skills",cat:"found"},
  // Exam
  {id:"acca",url:"acca",name:"ACCA", cat:"exam"},
  {id:"cat",url:"cat",name:"CAT", cat:"exam"},
  {id:"cefr",url:"cefr",name:"CEFR", cat:"exam"},
  {id:"cpa",url:"cpa",name:"CPA", cat:"exam"},
  {id:"ged",url:"ged",name:"GED", cat:"exam"},
  {id:"gmat",url:"gmat",name:"GMAT", cat:"exam"},
  {id:"gre",url:"gre",name:"GRE", cat:"exam"},
  {id:"hsk",url:"hsk",name:"HSK, Hanyu Shuiping Kaoshi", cat:"exam"},
  {id:"ielts",url:"ielts",name:"IELTS", cat:"exam"},
  {id:"lnat",url:"lnat",name:"LNAT", cat:"exam"},
  {id:"lsat",url:"lsat",name:"LSAT", cat:"exam"},
  {id:"mcat",url:"mcat",name:"MCAT", cat:"exam"},
  {id:"muet",url:"muet",name:"MUET", cat:"exam"},
  {id:"pte",url:"pte",name:"PTE", cat:"exam"},
  {id:"sat",url:"sat",name:"SAT", cat:"exam"},
  {id:"toefl",url:"toefl",name:"TOEFL", cat:"exam"},
  {id:"toeic",url:"toeic",name:"TOEIC", cat:"exam"},
  // Language
  {id:"lanArabic",url:"arabic",name:"Arabic", cat:"lan",oid:"adultArabic"},
  {id:"lanMalay",url:"malay",name:"Bahasa Melayu, Malay", cat:"lan",oid:"adultMalay"},
  {id:"lanMandarin",url:"mandarin",name:"Chinese - Mandarin", cat:"lan",oid:"adultMandarin"},
  {id:"lanCantonese",url:"cantonese",name:"Chinese - Cantonese", cat:"lan"},
  {id:"lanHokkien",url:"hokkien",name:"Chinese - Hokkien", cat:"lan"},
  {id:"lanDutch",url:"dutch",name:"Dutch", cat:"lan"},
  {id:"lanEng",url:"english",name:"English", cat:"lan",oid:"adultEng"},
  {id:"lanEngComm",url:"business-english-communication",name:"English - Business Communication", cat:"lan"},
  {id:"lanFilipino",url:"filipino",name:"Filipino", cat:"lan"},
  {id:"lanFrench",url:"french",name:"French", cat:"lan",oid:"adultFrench"},
  {id:"lanGerman",url:"german",name:"German", cat:"lan",oid:"adultGerman"},
  {id:"lanIndo",url:"indonesian",name:"Indonesian", cat:"lan",oid:"adultIndo"},
  {id:"lanItaly",url:"italian",name:"Italian", cat:"lan",oid:"adultItaly"},
  {id:"lanJapan",url:"japanese",name:"Japanese", cat:"lan",oid:"adultJapan"},
  {id:"lanKorean",url:"korean",name:"Korean", cat:"lan",oid:"adultKorean"},
  {id:"lanPolish",url:"polish",name:"Polish", cat:"lan"},
  {id:"lanPortuguese",url:"portuguese",name:"Portuguese", cat:"lan"},
  {id:"lanPunjabi",url:"punjabi",name:"Punjabi", cat:"lan"},
  {id:"lanRussian",url:"russian",name:"Russian", cat:"lan",oid:"adultRussian"},
  {id:"lanSpanish",url:"spanish",name:"Spanish", cat:"lan",oid:"adultSpanish"},
  {id:"lanSwedish",url:"swedish",name:"Swedish", cat:"lan"},
  {id:"lanTamil",url:"tamil",name:"Tamil", cat:"lan",oid:"adultTamil"},
  {id:"lanThai",url:"thai",name:"Thai", cat:"lan"},
  {id:"lanTurkish",url:"turkish",name:"Turkish", cat:"lan"},
  {id:"lanVietnamese",url:"vietnamese",name:"Vietnamese", cat:"lan"},
  // Music
  {id:"musicAccordion",url:"accordion",name:"Accordion",cat:"music"},
  {id:"musicBaritone",url:"baritone",name:"Baritone",cat:"music"},
  {id:"musicBass",url:"bass",name:"Bass",cat:"music"},
  {id:"musicCarillone",url:"carillone",name:"Carillone",cat:"music"},
  {id:"musicCello",url:"cello",name:"Cello",cat:"music"},
  {id:"musicClarinet",url:"clarinet",name:"Clarinet",cat:"music"},
  {id:"musicComposition",url:"composition",name:"Composition",cat:"music"},
  {id:"musicDrums",url:"drums",name:"Drums",cat:"music"},
  {id:"musicFlute",url:"flute",name:"Flute",cat:"music"},
  {id:"musicFrenchHorn",url:"french-horn",name:"French Horn",cat:"music"},
  {id:"musicGuitar",url:"guitar",name:"Guitar",cat:"music"},
  {id:"musicHarmonica",url:"harmonica",name:"Harmonica",cat:"music"},
  {id:"musicHarp",url:"harp",name:"Harp",cat:"music"},
  {id:"musicJazz",url:"jazz",name:"Jazz",cat:"music"},
  {id:"musicKeyboard",url:"keyboard",name:"Keyboard",cat:"music"},
  {id:"musicLute",url:"lute",name:"Lute",cat:"music"},
  {id:"musicMusicTheory",url:"music-theory",name:"Music Theory",cat:"music"},
  {id:"musicOboe",url:"oboe",name:"Oboe",cat:"music"},
  {id:"musicOrgan",url:"organ",name:"Organ",cat:"music"},
  {id:"musicPercussion",url:"percussion",name:"Percussion",cat:"music"},
  {id:"musicPiano",url:"piano",name:"Piano",cat:"music"},
  {id:"musicSax",url:"saxophone",name:"Saxophone",cat:"music"},
  {id:"musicSinging",url:"singing",name:"Singing",cat:"music"},
  {id:"musicTrombone",url:"trombone",name:"Trombone",cat:"music"},
  {id:"musicTrumpet",url:"trumpet",name:"Trumpet",cat:"music"},
  {id:"musicTuba",url:"tuba",name:"Tuba",cat:"music"},
  {id:"musicUkulele",url:"ukulele",name:"Ukulele",cat:"music"},
  {id:"musicViolin",url:"violin",name:"Violin",cat:"music"},
  {id:"musicMalayInstru",url:"malay-musical-instruments",name:"Malay Musical Instruments",cat:"music"},
  {id:"musicChineseInstru",url:"chinese-musical-instrumetns",name:"Chinese Musical Instrumetns",cat:"music"},
  {id:"musicIndianInstru",url:"indian-musical-instruments",name:"Indian Musical Instruments",cat:"music"},
  // Computer Programming
  {id:"compAutoCad",url:"autocad",name:"AutoCAD", cat:"computer"},
  {id:"compImageEdit",url:"creative-design",name:"PhotoShop, Illustrator", cat:"computer", oid:"compIllu"},
  {id:"compVideoEdit",url:"video-editing",name:"Video Editing", cat:"computer"},
  {id:"compWebDesign",url:"web-design",name:"Web Design (Wordpress, ReactJs, Angular, Vue, Svelte, jQuery)", cat:"computer"},
  {id:"compMobileApp",url:"mobile-app",name:"Mobile App Development", cat:"computer"},
  {id:"compMSOffice",url:"microsoft-office",name:"Microsoft Office", cat:"computer"},
  {id:"compMacApp",url:"macos-app-development",name:"macOS App Development", cat:"computer"},
  {id:"compWinApp",url:"window-app-development",name:"Window App Development", cat:"computer"},
  {id:"compAspNet",url:"asp-net",name:"ASP.NET", cat:"computer"},
  {id:"compFlutter",url:"flutter",name:"Flutter", cat:"computer"},
  {id:"compCplus2",url:"c-plus-plus",name:"C++", cat:"computer"},
  {id:"compSharp",url:"c-sharp",name:"C#", cat:"computer"},
  {id:"compReactNative",url:"react-native",name:"React Native", cat:"computer", oid:"compReact"},
  {id:"compJava",url:"java",name:"Java", cat:"computer"},
  {id:"compPhp",url:"php",name:"PHP", cat:"computer"},
  {id:"compPython",url:"python",name:"Python", cat:"computer"},
  {id:"compSql",url:"sql",name:"SQL", cat:"computer"},
  {id:"compVb",url:"visual-basic",name:"Visual Basic", cat:"computer"},
  // Art & Design
  {id:"artAnimation",url:"animation",name:"Animation",cat:"art"},
  {id:"artArch",url:"architecture-design",name:"Architecture Design",cat:"art"},
  {id:"artCraft",url:"craft",name:"Craft",cat:"art"},
  {id:"artDraw",url:"drawing",name:"Drawing",cat:"art"},
  {id:"artGraphic",url:"graphic-design",name:"Graphic Design",cat:"art"},
  {id:"artInterior",url:"interior-design",name:"Interior Design",cat:"art"},
  {id:"artPaint",url:"painting",name:"Painting",cat:"art"},
  {id:"artPhoto",url:"photography",name:"Photography",cat:"art"},
  {id:"artPot",url:"pottery",name:"Pottery",cat:"art"},
  {id:"artSculpt",url:"sculpture",name:"Sculpture",cat:"art"},
  {id:"artSketch",url:"sketching",name:"Sketching",cat:"art"},
  {id:"artTerrarium",url:"terrarium",name:"Terrarium",cat:"art"},
  {id:"artVideo",url:"videography",name:"Videography",cat:"art"},
  // Dance
  {id:"danceBallet",url:"ballet",name:"Ballet",cat:"dance"},
  {id:"danceBallroom",url:"ballroom-dance",name:"Ballroom Dance",cat:"dance"},
  {id:"danceBollywood",url:"bollywood-dance",name:"Bollywood Dance",cat:"dance"},
  {id:"danceContemporary",url:"contemporary",name:"Contemporary",cat:"dance"},
  {id:"danceHiphop",url:"hiphop-dancing",name:"Hiphop Dancing",cat:"dance"},
  {id:"danceJazz",url:"jazz-dancing",name:"Jazz Dancing",cat:"dance"},
  {id:"danceJoget",url:"joget",name:"Joget",cat:"dance"},
  {id:"danceKPop",url:"k-pop-dance",name:"K-pop Dance",cat:"dance"},
  {id:"danceLion",url:"lion-dance",name:"Lion Dance",cat:"dance"},
  {id:"danceSalsa",url:"salsa",name:"Salsa",cat:"dance"},
  {id:"danceStreet",url:"street-dance",name:"Street Dance",cat:"dance"},
  {id:"danceTap",url:"tap-dancing",name:"Tap Dancing",cat:"dance"},
  {id:"danceZapin",url:"zapin",name:"Zapin",cat:"dance"},
  {id:"danceZumba",url:"zumba",name:"Zumba",cat:"dance"},
  {id:"danceMalayDances",url:"malay-dances",name:"Malay Dances",cat:"dance"},
  {id:"danceChineseDances",url:"chinese-dances",name:"Chinese Dances",cat:"dance"},
  {id:"danceIndianDances",url:"indian-dances",name:"Indian Dances",cat:"dance"},
  // Sports & Games
  {id:"sportAikido",url:"aikido",name:"Aikido",cat:"sport"},
  {id:"sportArchery",url:"archery",name:"Archery",cat:"sport"},
  {id:"sportBadminton",url:"badminton",name:"Badminton",cat:"sport"},
  {id:"sportBasketball",url:"basketball",name:"Basketball",cat:"sport"},
  {id:"sportPool",url:"billiards-pool",name:"Billiards, Pool Sports",cat:"sport"},
  {id:"sportBoardsports",url:"boardsports",name:"Boardsports",cat:"sport"},
  {id:"sportBoxing",url:"boxing",name:"Boxing",cat:"sport"},
  {id:"sportChess",url:"chess",name:"Chess",cat:"sport"},
  {id:"sportEquestrian",url:"equestrian",name:"Equestrian",cat:"sport"},
  {id:"sportFencing",url:"fencing",name:"Fencing",cat:"sport"},
  {id:"sportFitness",url:"fitness",name:"Fitness",cat:"sport"},
  {id:"sportFootball",url:"football",name:"Football",cat:"sport"},
  {id:"sportFreediving",url:"freediving",name:"Freediving",cat:"sport"},
  {id:"sportFutsal",url:"futsal",name:"Futsal",cat:"sport"},
  {id:"sportGaming",url:"gaming",name:"Gaming",cat:"sport"},
  {id:"sportGolf",url:"golf",name:"Golf",cat:"sport"},
  {id:"sportGymnastics",url:"gymnastics",name:"Gymnastics",cat:"sport"},
  {id:"sportIndoor",url:"indoor-sports",name:"Indoor Sports",cat:"sport"},
  {id:"sportJudo",url:"judo",name:"Judo",cat:"sport"},
  {id:"sportKarate",url:"karate-do",name:"Karate-Do",cat:"sport"},
  {id:"sportMartialArts",url:"martial-arts",name:"Martial Arts",cat:"sport"},
  {id:"sportOutdoor",url:"outdoor-sports",name:"Outdoor Sports",cat:"sport"},
  {id:"sportScubaDiving",url:"scuba-diving",name:"Scuba Diving",cat:"sport"},
  {id:"sportSkateboarding",url:"skateboarding",name:"Skateboarding",cat:"sport"},
  {id:"sportSquash",url:"squash",name:"Squash",cat:"sport"},
  {id:"sportSwim",url:"swimming",name:"Swimming",cat:"sport"},
  {id:"sportPingpong",url:"table-tennis-pingpong",name:"Table Tennis / Pingpong",cat:"sport"},
  {id:"sportTaekwondo",url:"taekwondo",name:"Taekwondo",cat:"sport"},
  {id:"sportTennis",url:"tennis",name:"Tennis",cat:"sport"},
  {id:"sportVolleyball",url:"volleyball",name:"Volleyball",cat:"sport"},
  {id:"sportYoga",url:"yoga",name:"Yoga",cat:"sport"},
  // Academic Enrichment
  {id:"enrichAbacus",url:"abacus",name:"Abacus",cat:"enrich"},
  {id:"enrichCalligraphy",url:"calligraphy",name:"Calligraphy",cat:"enrich"},
  {id:"enrichKaji",url:"kaji-al-quran-iqra-fardhu-ain",name:"Mengaji Al-Quran, Iqra & Fardhu Ain",cat:"enrich"}, // Mengaji Al-Quran, Fardhu Ain, Iqra, Muqaddam, Tajwid & Makhraj
  {id:"enrichMathOlympiad",url:"international-mathematical-olympiad",name:"International Mathematical Olympiad",cat:"enrich"},
  {id:"enrichKangarooMath",url:"kangaroo-math-competition",name:"Kangaroo Math Competition",cat:"enrich"},
  {id:"enrichHomework",url:"homework-guidance",name:"Homework Guidance",cat:"enrich"},
  {id:"enrichAssign",url:"assignment",name:"Assignment Helper",cat:"enrich"},
];

export const NullArea = {
  "id":"",
  "url":[],
  "name":[],
  "slc":"",
  "lc":"",
  "pc":[],
  "pr":"1",
  "st":"",
  "co":"MY",
  "oid":""
};

export const NullSubject = {
  "id":"english",
  "url":"english",
  "name":"English",
  "cat":"upsr"
};
// This function get the Subject Info based on subjectId
export function getSubject (subjectId){
  return AllSubject.filter(subject =>
    subject.id === subjectId || subject.oid === subjectId // For renamed subjectId
  );
}

// This function get the Subject Info List based on categoryId
export function getSubjectsBasedOnCatId (categoryId){
  return AllSubject.filter(subject =>
    subject.cat === categoryId
  );
}

// This function get the Category Info based on categoryId
export function getCategory (categoryId){
  return AllCategory.filter(category =>
    category.id === categoryId || category.oid === categoryId // For renamed categoryId
  );
}

// ----------------------- AREA ------------------------ //
// Param Description:
// id  - Area id
// url - Area url. !Important: The first url in the array is the main url for that area.
// name- Area name. !Important: The first name in the array is the main name for that area.
// slc - sublocality
// lc  - locality
// pc  - postcode
// pr  - priority
// st  - state
// co  - country
// oid - oldId for mapping & indexing purpose

// Singapore Specific
// pr : pc > lc > [slc]
// Note: slc mostly refer to small housing estate of HDB. Refering to "route"
// Note: lc refer to slc
// This file declare global export constants
export const SGAllState = ["North", "North East", "North West", "East", "West", "Central", "South"];
export const SGAllStateId = ["nt", "ne", "nw", "et", "wt", "ct", "st"];
export const citySingapore = [
  {id:"sg",url:["singapore"],name:["Singapore"],slc:[],lc:[],pc:"",pr:'6',st:"", co:"SG",oid:""},
  {id:"nt",url:["north"],name:["North"],slc:[],lc:[],pc:"",pr:'5',st:"nt", co:"SG",oid:""},
  {id:"ne",url:["north-east"],name:["North East"],slc:[],lc:[],pc:"",pr:'5',st:"ne", co:"SG",oid:""},
  {id:"nw",url:["north-west"],name:["North West"],slc:[],lc:[],pc:"",pr:'5',st:"nw", co:"SG",oid:""},
  {id:"et",url:["east"],name:["East"],slc:"",lc:"",pc:"",pr:'5',st:"et", co:"SG",oid:""},
  {id:"wt",url:["west"],name:["West"],slc:[],lc:[],pc:"",pr:'5',st:"wt", co:"SG",oid:""},
  {id:"ct",url:["central"],name:["Central"],slc:"",lc:"",pc:"",pr:'5',st:"ct", co:"SG",oid:""},
  {id:"st",url:["south"],name:["South"],slc:"",lc:"",pc:"",pr:'5',st:"st", co:"SG",oid:""},

];
export const cityOnline = [
  {id:"online",url:["online"],name:["Online"],slc:[],lc:[],pc:"",pr:'6',st:"", co:"SG"},
];
export const cityNull = [
  {id:"",url:["null"],name:["Null"],slc:[],lc:[],pc:[],pr:'6',st:"", co:"SG"},
];

export const slc_st01 = [
];
export const slc_st09 = [
];
export const slc_st15 = [
  //HDB
  "Jalan Bukit Merah", "Jalan Rumah Tinggi",
];
export const slc_st19 = [
  "Kallang", "Rochor"
];

export const citySouthObj = [
  //   {id:"kl",url:["kuala-lumpur"],name:["Kuala Lumpur",st:"kl", co:"SG",oid:""},
    {id:"st01",url:[""],name:["Marina Bay, Esplanade"],slc:slc_st01,lc:["Straits View", "Marina South"],pc:["01", "02", "03"],pr:'2',st:"st", co:"SG",oid:""},
    {id:"st04",url:[""],name:["Raffles Place"],slc:[],lc:["Downtown Core"],pc:["04"],pr:'4',st:"st", co:"SG",oid:""},
    {id:"st05",url:[""],name:["Chinatown"],slc:[],lc:["Chinatown"],pc:["05"],pr:'2',st:"st", co:"SG",oid:""},
    {id:"st06",url:[""],name:["Shenton Way"],slc:[],lc:["Downtown Core"],pc:["06"],pr:'2',st:"st", co:"SG",oid:""},
    {id:"st07",url:[""],name:["Tanjong Pagar"],slc:[],lc:["Tanjong Pagar"],pc:["07"],pr:'2',st:"st", co:"SG",oid:""},
    {id:"st08",url:[""],name:["Cantonment"],slc:[],lc:["Outram"],pc:["08"],pr:'2',st:"st", co:"SG",oid:""},
    {id:"st09",url:[""],name:["Harbourfront", "Sentosa"],slc:slc_st09,lc:["HarbourFront", "Radin Mas", "Bukit Purmei"],pc:["09"],pr:'2',st:"st", co:"SG",oid:""},
    {id:"st10",url:[""],name:["Telok Blangah"],slc:[],lc:["Bukit Merah"],pc:["10"],pr:'2',st:"st", co:"SG",oid:""},
    {id:"st11",url:[""],name:["Pasir Panjang"],slc:[],lc:["Queenstown"],pc:["11"],pr:'2',st:"st", co:"SG",oid:""},
    {id:"st12",url:[""],name:["Clementi"],slc:[],lc:["Clementi"],pc:["12"],pr:'2',st:"st", co:"SG",oid:""},
    {id:"st13",url:[""],name:["Dover"],slc:[],lc:["Queenstown"],pc:["13"],pr:'2',st:"st", co:"SG",oid:""},
    {id:"st14",url:[""],name:["Queenstown"],slc:[],lc:["Queenstown"],pc:["14"],pr:'4',st:"st", co:"SG",oid:""},
    {id:"st15",url:[""],name:["Redhill"],slc:slc_st15,lc:["Bukit Merah", "Alexandra"],pc:["15"],pr:'2',st:"st", co:"SG",oid:""},
    {id:"st16",url:[""],name:["Tiong Bahru, Havelock"],slc:[],lc:["Tiong Bahru"],pc:["16"],pr:'2',st:"st", co:"SG",oid:""},
    {id:"st17",url:[""],name:["City Hall"],slc:[],lc:["Museum, Downtown Core"],pc:["17"],pr:'2',st:"st", co:"SG",oid:""},
    {id:"st18",url:[""],name:["Bugis"],slc:[],lc:["Downtown Core"],pc:["18"],pr:'2',st:"st", co:"SG",oid:""},
    {id:"st19",url:[""],name:["Beach Road"],slc:slc_st19,lc:["Kampong Glam"],pc:["19"],pr:'2',st:"st", co:"SG",oid:""},

]

export const slc_ct20 = [
  "Little India", "Kallang",
];
export const slc_ct26 = [
  "Holland Village"
];
export const slc_ct32 = [
  "Whampoa", "Kallang", "Novena",
  // HDB
  "Jalan Bahagia", " Jalan Tenteram", "Jalan Dusun"

];
export const cityCentralObj = [
  //   {id:"kl",url:["kuala-lumpur"],name:["Kuala Lumpur",st:"kl", co:"SG",oid:""},
    {id:"ct20",url:[""],name:["Jalan Besar", "Little India", "Lavender"],slc:slc_ct20,lc:["Little India"],pc:"20",pr:'2',st:"nt", co:"SG",oid:""},
    {id:"ct21",url:[""],name:["Farrer Park "],slc:[],lc:["Kallang"],pc:["2"],pr:'21',st:"ct", co:"SG",oid:""},
    {id:"ct22",url:[""],name:["Newton", "Cairnhill"],slc:[],lc:["Newton"],pc:["2"],pr:'22',st:"ct", co:"SG",oid:""},
    {id:"ct23",url:[""],name:["River Valley", "Somerset", "Great World"],slc:[],lc:["River Valley"],pc:["2"],pr:'23',st:"ct", co:"SG",oid:""},
    {id:"ct24",url:[""],name:["Tanglin"],slc:[],lc:["Tanglin"],pc:["24"],pr:'4',st:"ct", co:"SG",oid:""},
    {id:"ct25",url:[""],name:["Botanic Garden"],slc:[],lc:["Tanglin"],pc:["2"],pr:'25',st:"ct", co:"SG",oid:""},
    {id:"ct26",url:[""],name:["Bukit Timah"],slc:[],lc:["Bukit Timah"],pc:["4"],pr:'26',st:"ct", co:"SG",oid:""},
    {id:"ct27",url:[""],name:["Ghim Moh"],slc:slc_ct26,lc:["Ghim Moh"],pc:["2"],pr:'27',st:"ct", co:"SG",oid:""},
    {id:"ct28",url:[""],name:["Watten Estate"],slc:[],lc:["Bukit Timah"],pc:["2"],pr:'28',st:"ct", co:"SG",oid:""},
    {id:"ct29",url:[""],name:["Mount Pleasant"],slc:[],lc:["Novena"],pc:["2"],pr:'29',st:"ct", co:"SG",oid:""},
    {id:"ct30",url:[""],name:["Novena"],slc:[],lc:["Novena"],pc:["4"],pr:'30',st:"ct", co:"SG",oid:""},
    {id:"ct31",url:[""],name:["Toa Payoh"],slc:[],lc:["Toa Payoh"],pc:["2"],pr:'31',st:"ct", co:"SG",oid:""},
    {id:"ct32",url:[""],name:["Balestier Road"],slc:slc_ct32,lc:["Novena"],pc:["2"],pr:'32',st:"ct", co:"SG",oid:""},
    {id:"ct33",url:[""],name:["Bendemeer"],slc:["Kallang"],lc:["Bendemeer"],pc:["2"],pr:'33',st:"ct", co:"SG",oid:""},
]

export const cityEastObj = [
  //   {id:"kl",url:["kuala-lumpur"],name:["Kuala Lumpur",st:"kl", co:"SG",oid:""},
    {id:"et34",url:[""],name:["Potong Pasir"],slc:[],lc:[""],pc:"34",pr:'2',st:"et", co:"SG",oid:""},
    {id:"et35",url:[""],name:["Braddell"],slc:[],lc:[""],pc:["35"],pr:'2',st:"et", co:"SG",oid:""},
    {id:"et36",url:[""],name:["Upper Aljunied"],slc:[],lc:[""],pc:["36"],pr:'2',st:"et", co:"SG",oid:""},
    {id:"et37",url:[""],name:["Circuit"],slc:[],lc:[""],pc:["37"],pr:'2',st:"et", co:"SG",oid:""},
    {id:"et38",url:[""],name:["Aljunied"],slc:[],lc:[""],pc:["38"],pr:'2',st:"et", co:"SG",oid:""},
    {id:"et39",url:[""],name:["Mountbatten, Dakota"],slc:[],lc:[""],pc:["39"],pr:'2',st:"et", co:"SG",oid:""},
    {id:"et40",url:[""],name:["Ubi"],slc:[],lc:[""],pc:["40"],pr:'2',st:"et", co:"SG",oid:""},
    {id:"et41",url:[""],name:["Kembangan"],slc:[],lc:[""],pc:["41"],pr:'2',st:"et", co:"SG",oid:""},
    {id:"et42",url:[""],name:["Still Road"],slc:[],lc:[""],pc:["42"],pr:'2',st:"et", co:"SG",oid:""},
    {id:"et43",url:[""],name:["Tanjong Rhu"],slc:[],lc:[""],pc:["43"],pr:'2',st:"et", co:"SG",oid:""},
    {id:"et44",url:[""],name:["Marina Parade"],slc:[],lc:[""],pc:["44"],pr:'2',st:"et", co:"SG",oid:""},
    {id:"et45",url:[""],name:["Siglap"],slc:[],lc:[""],pc:["45"],pr:'2',st:"et", co:"SG",oid:""},
    {id:"et46",url:[""],name:["Bedok"],slc:[],lc:[""],pc:["46"],pr:'2',st:"et", co:"SG",oid:""},
    {id:"et47",url:[""],name:["Bedok North"],slc:[],lc:[""],pc:["47"],pr:'2',st:"et", co:"SG",oid:""},
    {id:"et48",url:[""],name:["Simei"],slc:[],lc:[""],pc:["48"],pr:'2',st:"et", co:"SG",oid:""},
    {id:"et49",url:[""],name:["Changi Airport"],slc:[],lc:[""],pc:["49", "81"],pr:'2',st:"et", co:"SG",oid:""},
    {id:"et50",url:[""],name:["Loyang"],slc:[],lc:[""],pc:["50"],pr:'2',st:"et", co:"SG",oid:""},
    {id:"et51",url:[""],name:["Pasir Ris"],slc:[],lc:[""],pc:["51"],pr:'2',st:"et", co:"SG",oid:""},
    {id:"et52",url:[""],name:["Tampines"],slc:[],lc:[""],pc:["52"],pr:'2',st:"et", co:"SG",oid:""},
    // {id:"et",url:[""],name:["Changi Airport"],slc:[],lc:[""],pc:["81"],pr:'2',st:"et", co:"SG",oid:""},

]

export const cityNorthEastObj = [
  //   {id:"kl",url:["kuala-lumpur"],name:["Kuala Lumpur",st:"kl", co:"SG",oid:""},
    {id:"ne53",url:[""],name:["Hougang"],slc:[],lc:[""],pc:"53",pr:'2',st:"ne", co:"SG",oid:""},
    {id:"ne54",url:[""],name:["Sengkang"],slc:[],lc:[""],pc:["54"],pr:'2',st:"ne", co:"SG",oid:""},
    {id:"ne55",url:[""],name:["Serangoon"],slc:[],lc:[""],pc:["55"],pr:'2',st:"ne", co:"SG",oid:""},
    {id:"ne56",url:[""],name:["Ang Mo Kio"],slc:[],lc:[""],pc:["56"],pr:'2',st:"ne", co:"SG",oid:""},
    {id:"ne57",url:[""],name:["Bishan"],slc:[],lc:[""],pc:["57"],pr:'2',st:"ne", co:"SG",oid:""},
    {id:"ne78",url:[""],name:["Lentor"],slc:[],lc:[""],pc:["78"],pr:'2',st:"ne", co:"SG",oid:""},
    {id:"ne79",url:[""],name:["Seletar"],slc:[],lc:[""],pc:["79"],pr:'2',st:"ne", co:"SG",oid:""},
    {id:"ne80",url:[""],name:["Yio Chu Kang"],slc:[],lc:[""],pc:["80"],pr:'2',st:"ne", co:"SG",oid:""},
    {id:"ne82",url:[""],name:["Punggol"],slc:[],lc:[""],pc:["82"],pr:'2',st:"ne", co:"SG",oid:""},

]

export const cityWestObj = [
  //   {id:"kl",url:["kuala-lumpur"],name:["Kuala Lumpur",st:"kl", co:"SG",oid:""},
    {id:"wt58",url:[""],name:["Mablewood"],slc:[],lc:[""],pc:"58",pr:'2',st:"wt", co:"SG",oid:""},
    {id:"wt59",url:[""],name:["Beauty World"],slc:[],lc:[""],pc:["59"],pr:'2',st:"wt", co:"SG",oid:""},
    {id:"wt60",url:[""],name:["Jurong East"],slc:[],lc:[""],pc:["60"],pr:'2',st:"wt", co:"SG",oid:""},
    {id:"wt61",url:[""],name:["Jalan Buroh"],slc:[],lc:[""],pc:["61"],pr:'2',st:"wt", co:"SG",oid:""},
    {id:"wt62",url:[""],name:["Gul Circle"],slc:[],lc:[""],pc:["62"],pr:'2',st:"wt", co:"SG",oid:""},
    {id:"wt63",url:[""],name:["Tuas"],slc:[],lc:[""],pc:["63"],pr:'2',st:"wt", co:"SG",oid:""},
    {id:"wt64",url:[""],name:["Boon Lay"],slc:[],lc:[""],pc:["64"],pr:'2',st:"wt", co:"SG",oid:""},
]
export const cityNorthWestObj = [
  //   {id:"kl",url:["kuala-lumpur"],name:["Kuala Lumpur",st:"kl", co:"SG",oid:""},
    {id:"nw65",url:[""],name:["Bukit Batok"],slc:[],lc:[""],pc:"65",pr:'2',st:"nw", co:"SG",oid:""},
    {id:"nw66",url:[""],name:["Hillview"],slc:[],lc:[""],pc:["66"],pr:'2',st:"nw", co:"SG",oid:""},
    {id:"nw67",url:[""],name:["Bukit Panjang"],slc:[],lc:[""],pc:["67"],pr:'2',st:"nw", co:"SG",oid:""},
    {id:"nw68",url:[""],name:["Choa Chu Kang, Yew Tee"],slc:[],lc:[""],pc:["68"],pr:'2',st:"nw", co:"SG",oid:""},
    {id:"nw69",url:[""],name:["Sungei Tengah, Tengah"],slc:[],lc:[""],pc:["69"],pr:'2',st:"nw", co:"SG",oid:""},
    // {id:"nw70",url:[""],name:[""],slc:[],lc:[""],pc:["70"],pr:'2',st:"nw", co:"SG",oid:""},
    {id:"nw71",url:[""],name:["Lim Chu Kang"],slc:[],lc:[""],pc:["70, 71"],pr:'2',st:"nw", co:"SG",oid:""},
]

export const slc_nt72 = [
  "Sungei Kadut", "Kranji",
];
export const slc_nt73 = [
  "Marsiling", "Woodlands",
];
export const slc_nt75 = [
  "Canberra"
];
export const slc_nt76 = [
  "Khatib"
];
export const cityNorthObj = [
  //   {id:"kl",url:["kuala-lumpur"],name:["Kuala Lumpur",st:"kl", co:"SG",oid:""},
    {id:"nt72",url:[""],name:["Sungei Kadut", "Kranji"],slc:[],lc:["Sungei Kadut"],pc:"72",pr:'2',st:"nt", co:"SG",oid:""},
    {id:"nt73",url:[""],name:["Admiralty, Woodlands", "Admiralty", "Marsiling", "Woodlands"],slc:slc_nt73,lc:["Singapore"],pc:["73"],pr:'2',st:"nt", co:"SG",oid:""},
    // {id:"nt74",url:[""],name:["Sambawang"],slc:[],lc:[""],pc:["74"],pr:'2',st:"nt", co:"SG",oid:""},
    {id:"nt75",url:[""],name:["Sambawang", "Canberra"],slc:slc_nt75,lc:["Sambawang"],pc:["74","75"],pr:'2',st:"nt", co:"SG",oid:""},
    {id:"nt76",url:[""],name:["Yishun"],slc:slc_nt76,lc:["Yishun"],pc:["76"],pr:'2',st:"nt", co:"SG",oid:""},
    {id:"nt77",url:[""],name:["Mandai"],slc:[],lc:["Yishun"],pc:["77"],pr:'2',st:"nt", co:"SG",oid:""},
]

export const cityAll = citySingapore.concat(cityOnline, citySouthObj, cityNorthObj, cityNorthEastObj, cityNorthWestObj, cityEastObj, cityWestObj);

export const cityAllNoState = citySouthObj.concat(cityNorthObj, cityNorthEastObj, cityNorthWestObj, cityEastObj, cityWestObj);

// ----------------- Version 2 Area Functions  ----------------- //


// This function get the stateId from administrative_area_level_1 from Google Map API
export function getStateIdBasedOnState(state){
  if (["Federal Territory of Kuala Lumpur", "Wilayah Persekutuan Kuala Lumpur"].includes(state)){
    return "kl"
  }else if (["Selangor"].includes(state)){
    return "sg";
  }else if (["Penang", "Pulau Pinang"].includes(state)){
    return "pn";
  }else if (["Johor"].includes(state)){
    return "jh";
  }else if (["Melaka","Malacca"].includes(state)){
    return "mk";
  }else if (['Negeri Sembilan'].includes(state)){
    return "ns";
  }else if (["Pahang"].includes(state)){
    return "ph";
  }else if (["Perak"].includes(state)){
    return "pk";
  }else if (["Terengganu"].includes(state)){
    return "tr";
  }else if (["Kelantan"].includes(state)){
    return "kt";
  }else if (["Kedah"].includes(state)){
    return "kd";
  }else if (["Sabah"].includes(state)){
    return "sh";
  }else if (["Sarawak"].includes(state)){
    return "sw";
  }else if (["Perlis"].includes(state)){
    return "pl";
  }else if (["Putrajaya"].includes(state)){
    return "pj";
  }else if (["Labuan"].includes(state)){
    return "lb";
  }else {
    return "";
  }
}


// This function check if sublocality existed.
export function getAreaInfoBasedOnSublocalityLocalityPriorityAndState (priority, sublocality, locality, state){

  // areaInfo[0] - Result
  // areaInfo[1] - Debug: return prior 1 & 2 areaId that have the locality, but do not have the sublocality.
  let areaInfo = [null, {debug: false, areaIdArr: []}];

  // areaInfo Temporary for each cases
  let areaInfoPrio7 = null;
  let areaInfoPrio12 = null;
  let areaInfoPrio4 = null;
  let areaInfoPrio5 = null;
  let areaInfoPrio6 = null;

  let BREAK = false;

  let sublocalTemp = sublocality.toLowerCase()
  // console.log(sublocalTemp)
  // console.log(locality)

  // Indicator:
  let localityFinalized = false; // True if  locality with prior 4 is exactly founded, hence lock areaInfoPrio4
  let stateFinalized = false; // True if  locality with prior 4 is exactly founded, hence lock areaInfoPrio4

  // We want to know if a place is included in sublocalities for all area with prior 1, 2 & 4.
  // Some localities are included in locality of areas with prior 1 & 2. At the same time, there is a single area with prior 4 that contain this locality.
  // Some localities only existed in areas with prior 1 & 2.
  // In order to know if the input sublocality really existed in an area for query with priority 1 / 2, return an array of areaIds from prior 1 & 2 that include
  // the input locality, but the input sublocality is not found in the sublocalities of the areas.
  //
  // i.e Sungai Jawi existed twice in locality in area: pnSgJwi(prior 2) pnSAmpat(prior 2), if the input sublocality does not match the sublocalities in
  // these area, return these array.
  // i.e
  let flagAreaIdArrwithNoSublocalitiesFound = []; // As long as the locality is not finalized
  for (let i = 0; i < cityAll.length; i++){

    let area = cityAll[i]

    // NEW IMPLEMENTATION: Get all areas based Priorities
    if (area.pr === "7"){
      // Priority 7 check only the sublocality match
      // if (area.lc.includes(locality)) {

        for (let j = 0; j < area.slc.length; j++){

          let subLocality = area.slc[j].toLowerCase()

          if (subLocality === sublocalTemp){
            areaInfoPrio7 = area;

            if (!stateFinalized) areaInfoPrio5 = getAreaBasedOnStateId(area.st);

            BREAK = true;
            break;
          }

        // }

        // Break
        if (BREAK) {
          break;
        }
      }
    }
    else if (area.pr === "1" || area.pr === "2"){
        // console.log(sublocalTemp)
        // console.log(area.lc.includes(locality))

      if (area.lc.includes(locality) && area.st === state) {
        // Store the locality & state info too.
        // console.log(area)

        if (!localityFinalized) areaInfoPrio4 = area;
        if (!stateFinalized) areaInfoPrio5 = getAreaBasedOnStateId(area.st);

        for (let j = 0; j < area.slc.length; j++){
          let subLocality = area.slc[j].toLowerCase()
          // console.log(area.slc[j].toLowerCase())
          // console.log(subLocality + " " + sublocalTemp)
          if (subLocality === sublocalTemp){
            // console.log("Found")
            areaInfoPrio12 = area;
            BREAK = true;
            break;
          }
          // As log as the locality is not finalized, Flag this area includes the locality, but do not have the places in sublocalities
          // If the areaInfoPrio4 aready finalized, this func will automatically returns the prior 4 area if not sublocalities is found.
          else {
            if (!localityFinalized) flagAreaIdArrwithNoSublocalitiesFound.push(area.id)
          }
        }

        // Break
        if (BREAK) {
          break;
        }

      }

    }
    else if (area.pr === "4"){

      // For prior 4, we want to prioritize single locality over array of localities
      // i.e Padawan existed in Kota Samarahan & Kuching
      //   console.log("area.lc:"+ area.lc)

      if (area.lc === locality && area.st === state){

        areaInfoPrio4 = area;
        localityFinalized  = true;

        if (!stateFinalized) areaInfoPrio5 = getAreaBasedOnStateId(area.st);


        // break; // Once we found it, ignore the rest
      }
      else if (area.lc.includes(locality) && area.st === state) {

        if (!localityFinalized) areaInfoPrio4 = area;
        if (!stateFinalized) areaInfoPrio5 = getAreaBasedOnStateId(area.st);

        // BREAK = true;
        // break;
      }
    }

    else if (area.pr === "5"){
      // console.log(area.st + "-" + state + "-" + area.st.includes(state))
      if (area.st === state) {
        areaInfoPrio5 = area;
        stateFinalized = true;
        // BREAK = true;
        // break;
      }
      else if (area.st.includes(state)) {
        areaInfoPrio5 = area;
        // BREAK = true;
        // break;
      }
    }

    else if (area.pr === "6"){
      // If areaInfo is still null, assign administrative_area_level_1
      if (area.co === 'MY') {
        areaInfoPrio6 = area;
        // BREAK = true;
        // break;
      }
    }
    else {

    }

  }

  // console.log("pr:" + priority)
  // console.log("Prior 7")
  // console.log(areaInfoPrio7)
  // console.log("Prior 1 & 2")
  // console.log(areaInfoPrio12)
  // console.log("Prior 4")
  // console.log(areaInfoPrio4)
  // console.log("Prior 5")
  // console.log(areaInfoPrio5)
  // console.log("Prior 6")
  // console.log(areaInfoPrio6)
  // console.log("flagAreaIdArrwithNoSublocalitiesFound")
  let flagAreaIdArrwithIncludeLocalityButNoSublocalitiesFoundNew = [...new Set(flagAreaIdArrwithNoSublocalitiesFound)]
  // console.log(flagAreaIdArrwithIncludeLocalityButNoSublocalitiesFoundNew)

  // Checking Priorites
  if (priority.includes("7")) {
    if (areaInfoPrio7 !== null){
      areaInfo[0] = areaInfoPrio7;
    }
    else if (areaInfoPrio12 !== null){
      areaInfo[0] = areaInfoPrio12;
    }else if (areaInfoPrio4 !== null){
      areaInfo[0] = areaInfoPrio4;
    } else {
      areaInfo[0] = areaInfoPrio5;
    }
    // console.log(BREAK)
    // If not BREAK, meaning the input sublocality is not in the sublocalities array. Report it.
    if (!BREAK) areaInfo[1] = {debug: true, areaIdArr: flagAreaIdArrwithIncludeLocalityButNoSublocalitiesFoundNew}
  }
  else if (priority.includes("1") || priority.includes("2")) {
    // areaInfo[0] = areaInfoPrio12;
    if (areaInfoPrio12 !== null){
      areaInfo[0] = areaInfoPrio12;

    }else if (areaInfoPrio4 !== null  && localityFinalized){
      areaInfo[0] = areaInfoPrio4;

    } else {
      areaInfo[0] = areaInfoPrio5;
    }
    // console.log(BREAK)
    // If not BREAK, meaning the input sublocality is not in the sublocalities array. Report it.
    if (!BREAK) areaInfo[1] = {debug: true, areaIdArr: flagAreaIdArrwithIncludeLocalityButNoSublocalitiesFoundNew}
  }
  else if (priority.includes("4") ) {
    // console.log("stateFinalized " + stateFinalized)
    // console.log("localityFinalized " + localityFinalized)
    // console.log("priority.includes(4)")
    // console.log(areaInfoPrio4)
    // console.log(areaInfoPrio5)

    if (areaInfoPrio4 !== null && state != "kl"){ // For state, accept only locality that are finalized,
      areaInfo[0] = areaInfoPrio4;
    } else {
      areaInfo[0] = areaInfoPrio5;
    }
    // Special case for KL: Kuala Lumpur is a locality and state.
  }
  else if (priority.includes("5")) {
    areaInfo[0] = areaInfoPrio5;
  }
  else if (priority.includes("6")) {
    areaInfo[0] = areaInfoPrio6;
  }

  return areaInfo;

}

// This function get Area Info of a state
export function getAreaBasedOnStateId(state){

  let areaInfo = null;

  for (let i = 0; i < citySingapore.length; i++){

    let area = citySingapore[i]

    if (area.st === state){
      areaInfo = area;
    }

  }

  return areaInfo
}


// This function select Area Info based on Priority, Locality, and State from Google Map API
export function getAreaBasedOnSublocalityLocalityPriorityAndState(sublocality, locality, state, priority){

  let stateId = getStateIdBasedOnState(state);
//   console.log(stateId)
  return getAreaInfoBasedOnSublocalityLocalityPriorityAndState (priority, sublocality, locality, stateId) ;

}

// This function select Area Info based on AreaId
export function getAreaBasedOnAreaId(areaId){
  return (areaId === null || areaId === "") ? [] : cityAll.filter(city => city.id === areaId)
}

// This function get All Areas Info based on stateId
export function getAreasBasedOnStateId(stateId){
  return (stateId === null || stateId === "") ? [] : cityAll.filter(city => city.st === stateId)
}

// This function select Area Info based on Url
export function getAreaBasedOnAreaUrl(areaUrl){
  return (areaUrl === null || areaUrl === "") ? [] : cityAll.filter(city => city.url === areaUrl)
}


// This function get Url based on Subject & Area
export function getUrlFromSubjectArea(subjectId, areaId){

  let subjectInfo = getSubject(subjectId)
  let areaInfo = getAreaBasedOnAreaId(areaId)

  let validArea = areaInfo !== null && areaInfo.length >= 1 && areaInfo !== "";
  let validSubject = subjectInfo !== null && subjectInfo.length >= 1 && subjectInfo !== "";
  // console.log(areaId + " " +  subjectId)
  // console.log(subjectInfo)
  // console.log(areaInfo)

  // console.log(getCategory(subjectInfo[0].category))
  let subjectUrl = "";
  if (validSubject){
    let categoryUrl = getCategory(subjectInfo[0].category)[0].url
    // console.log(categoryUrl)
    subjectUrl = categoryUrl + "-" +subjectInfo[0].url + "-tutor.html"
  }

  let areaUrl = "";
  if (validArea){
    areaUrl = areaInfo[0].url;
  }

  if (validArea && validSubject){
    return "https://golearn.com.my/areas/" + areaUrl + "/" + subjectUrl;
  }
  else if (validArea && !validSubject){
    return "https://golearn.com.my/areas/" + areaUrl + "/";
  }
  else if (!validArea && validSubject){
    return "https://golearn.com.my/areas/" + "online" + "/" + subjectUrl;
  }
  else {
    return ""
  }

}

// This function return array of areaId based on oldId
// USED mainly in indexer-v2
export function getAreaIdArrBasedOnOldId(areaId){
  let tempAreaIdArr = []
  if (areaId === null || areaId === "") {
    tempAreaIdArr = [];
  }
  else {
    let cityList = cityAll.filter(city => city.oid === areaId)

    if (cityList.length > 0) {
      cityList.forEach((city) => {
        tempAreaIdArr.push(city.id)
      })
    }
  }


  return tempAreaIdArr

}

// This function select Area Info based on area oid
export function getAreaBasedOnAreaOid(areaId){
  return (areaId === null || areaId === "") ? [] : cityAll.filter(city => city.oid === areaId)
}

// All frequently used utilities functions are here
export const MyTime = ["8am - 12pm", "12pm - 3pm", "3pm - 6pm", "6pm Onwards"];
export const MyTimeId = ["8to12", "12to3", "3to6", "6onwards"];

export const MyDayOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
export const MyDayOfWeekAbr = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
export const MyDayOfWeekId = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

export const MyMonth =["January","February","March","April","May","June","July","August","September","October","November","December"];
export const MyMonthAbr =["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
export const MyMonthId =["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];


