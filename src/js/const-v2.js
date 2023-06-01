
export const USER_BASE_PATH = "user/v1/base"
export const USER_INFO_PATH = "user/v1/info"

export const REQUEST_ADMIN = "request/v1/admin"

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

// SEO /area/[city]/[subject]/[category]
// ✅ - Match with new places
// ⚠️ - Match, but the url does not match (TODO: create seo pages for these removed/merged areas.)
// ❌ - No match or place removed
// This file declare global export constants
export const MYAllState = ["Kuala Lumpur", "Selangor", "Penang", "Johor", "Melaka",
  "Negeri Sembilan", "Pahang", "Perak", "Terengganu", "Kelantan", "Kedah", "Sabah", "Sarawak",
  "Perlis", "Putrajaya", "Labuan"];
export const MYAllStateId = ["kl", "sg", "pn", "jh", "mk",
  "ns", "ph", "pk", "tr", "kt", "kd", "sh", "sw",
  "pl", "pj", "lb"];
export const cityMalaysia = [
  {id:"my",url:["malaysia"],name:["Malaysia"],slc:[],lc:[],pc:"",pr:'6',st:"", co:"MY",oid:""},
  {id:"kl",url:["kuala-lumpur"],name:["Kuala Lumpur"],slc:[],lc:[],pc:"",pr:'5',st:"kl", co:"MY",oid:""},
  {id:"sg",url:["selangor"],name:["Selangor"],slc:[],lc:[],pc:"",pr:'5',st:"sg", co:"MY",oid:""},
  {id:"pn",url:["penang"],name:["Penang"],slc:"",lc:"",pc:"",pr:'5',st:"pn", co:"MY",oid:""},
  {id:"jh",url:["johor"],name:["Johor"],slc:[],lc:[],pc:"",pr:'5',st:"jh", co:"MY",oid:""},

  {id:"pk",url:["perak"],name:["Perak"],slc:"",lc:"",pc:"",pr:'5',st:"pk", co:"MY",oid:""},
  {id:"ns",url:["negeri-sembilan"],name:["Negeri Sembilan"],slc:"",lc:"",pc:"",pr:'5',st:"ns", co:"MY",oid:""},
  {id:"mk",url:["melaka"],name:["Melaka"],slc:"",lc:"",pc:"",pr:'5',st:"mk", co:"MY",oid:""},
  {id:"kd",url:["kedah"],name:["Kedah"],slc:"",lc:"",pr:"5",st:"kd",co:"MY",oid:"kd"},
  {id:"pl",url:["perlis"],name:["Perlis"],slc:"",lc:"",pr:"5",st:"pl",co:"MY",oid:"pl"},
  {id:"kt",url:["kelantan"],name:["Kelantan"],slc:"",lc:"",pr:"5",st:"kt",co:"MY",oid:"kt"},
  {id:"ph",url:["pahang"],name:["Pahang"],slc:"",lc:"",pr:"5",st:"ph",co:"MY",oid:"ph"},
  {id:"tr",url:["terengganu"],name:["Terengganu"],slc:"",lc:"",pr:"5",st:"tr",co:"MY",oid:"tr"},
  {id:"sh",url:["sabah"],name:["Sabah"],slc:"",lc:"",pr:"5",st:"sh",co:"MY",oid:"sh"},
  {id:"sw",url:["sarawak"],name:["Sarawak"],slc:"",lc:"",pr:"5",st:"sw",co:"MY",oid:"sw"},
  {id:"pj",url:["putrajaya"],name:["Putrajaya"],slc:"",lc:"Putrajaya",pr:"5",st:"pj",co:"MY",oid:"pj"},
  {id:"lb",url:["labuan"],name:["Labuan"],slc:"",lc:"Labuan",pr:"5",st:"lb",co:"MY",oid:"lb"},
];
export const cityOnline = [
  {id:"online",url:["online"],name:["Online"],slc:[],lc:[],pc:"",pr:'6',st:"", co:"MY"},
];
export const cityNull = [
  {id:"",url:["null"],name:["Null"],slc:[],lc:[],pc:"",pr:'6',st:"", co:"MY"},
];

// export const cityMalaysia = [
//   {id:"my",url:["malaysia"],name:["Malaysia",st:""},
// ]
// export const cityOnline = [
//   {id:"online",url:["online"],name:["Online",st:""},
// ]

export const postcode_Setapak = ["53000", "53100", "53300"];
export const postcode_SgBesi = ["57000", "57100"];

export const slc_KL_AlamDamai_BdrDamaiPerdana = [
  "Alam Damai", "Bandar Damai Perdana",

  "Taman Desa Cheras", "The Corner @ Alam Damai", "Seri Bulan", "Taman Damai Rasa", "Taman Damai Kasih",
  "Taman Damai Murni", "Taman Damai Budi", "Taman Damai Bakti", "Damai 23", "Taman Desa Damai", "Jalan Damai Puspa",
  "Taman Gayana", "Taman Desa Bukit Cahaya", "Taman Cheras Utama", "Taman Damai Indah", "Taman Cheras Utama",
  "Taman Jaya Baru", "Taman Seri Taming", "Taman Koperasi Maju Jaya", "Taman Desa Baiduri", "Taman Bukit Anggerik",
  "Taman Damai Impian", "Taman Damai Impian 2", "Taman Dahlia", "Taman Delima", "Taman Bukit Cheras",
];
// Bandar Sri Damansara, Taman Wangsa Permai
export const slc_KL_BdrSriDamansara = [
  "Bandar Sri Damansara", "Taman Wangsa Permai",
  "Rafflesia", "Taman Perindustrian Kip", "Damansara Suria, Kipark", "Tmn Perindustrian Desa Aman"
];
// Taman Desa Jaya 	Desa Jaya	Taman Daya	Taman Intan Baiduri
export const slc_KL_DesaJaya_IntanBaiduri_TmnDaya = [
  "Taman Desa Jaya", "Intan Baiduri", "Taman Ehsan", "Taman Intan Baiduri", "Taman Daya",
  "Desa Aman Puri", "Kawasan Industri Bukit Desa", "Kawasan Industri Taman Ehsan", "Taman Bukit Desa", "Taman Usaha Jaya",
  "Taman Sri Ehsan", "Taman Perindustrian Ehsan Jaya", "Taman Frim Kepong", "Taman Kepong Indah", "Kampung Melayu Kepong",
];
// Bandar Menjalara	Desa Parkcity	Taman Sri Bintang

export const slc_KL_Menjalara_DesaParkcity = [
  "Bandar Menjalara", "Desa Parkcity",
  "Villa Manja Sunway Spk Damansara", "Amelia", "Ridgewood", "Sunway Spk Damansara", "Nadia", "Safa", "Southlake",
  "Levenue 2", "Levenue 1", "Levenue", "Zenia", "Amelia", "Medan Putra Bussiness Centre", "Taman Sri Bintang",
  "Taman Sri Sinar", "Taman Flora Impian", "Taman Prima Impian", "Bukit Prima Pelangi", "Kampung Segambut Dalam",
  "Bukit Segambut", "Laman Damaisari", "Segambut Jaya", "Kampung Melayu Segambut", "Segambut Bahagia", "M-avenue",
  "Segambut Bahagia", "Taman Segambut Sppk", "Taman Desa Segambut", "Kampung Segambut Tengah",

];
// Kepong Baru	Taman Bukit Maluri	Jinjang Selatan

export const slc_KL_KepongBaru_BktMaluri_JinJangSelatan = [
  "Kepong Baru", "Jinjang Selatan", "Taman Bukit Maluri",
  "Taman Kepong", "Desa Jaya Kepong", "Kawasan Perusahaan Taman Bukit Maluri", "Kepong Baru Industrial Estate",
  "Metro Prima", "Mwe Kepong Commercial Park", "Kawasan Perusahaan Kepong", "Tsi Business & Industrial Park",
  "Taman Jinjang Baru", "Taman Pusat Kepong", "Taman Sri Segambut", "Taman Petaling", "Taman Megah", "Taman Seri Kepong Baru",
  "Taman Megah Kepong", "Kampung Benting Segambut", "Taman Sejahtera", "Jinjang Selatan Tambahan", "Taman Lawa",
  "Taman Batu", "Taman Kok Doh",
];
// Jinjang Utara, Kepong	Laman Rimbunan	Taman Wahyu

export const slc_KL_JinJangUtara_LamanRimbunan = [
  "Jinjang Utara", "Taman Usahawan", "Laman Rimbunan",
  "Taman Perdana", "Taman Indah Perdana", "Seri Edaran Light Industrial Park", "Pekan Kepong", "Taman Usahawan Kepong",
  "Kepong Metropolitan Lake-garden", "Kepong Entreprenurs Park", "Taman Fadason", "Jinjang Utara Tambahan",
  "Perumahan Awam Jinjang Utara", "Taman Aman Putra", "Taman Beringin", "Taman Wahyu 1", "Laman Residen Kipark",
  "Sri Utara Business Park", "Taman Residensi Kipark", "Sri Utara Kipark", "Kampung Batu", "Taman Wahyu", "Kampung Batu Delima",
  "Seri Utara Off Jalan Ipoh",
];
// Mont Kiara	Sri Hartamas	Desa Sri Hartamas	Duta Nusantara
export const slc_KL_MontKiara_SriHartamas_Dutamas = [
  "Mont Kiara", "Sri Hartamas", "Duta Nusantara", "Dutamas",
  "Desa Sri Hartamas", "Taman Sri Hartamas", "Solaris Mont Kiara", "Kampung Segambut Dalam", "Amarin Kiara",
  "Kenny Heights Sanctuary", "Kiara Hills", "Sunway Palazzio", "Solaris On The Park", "Duta Tropika", "Hartamas Heights",
  "Solaris Dutamas", "Kompleks Kerajaan", "Changkat Kiara Bayu", "Changkat Kiara Surya", "Changkat Kiara Rimbun",
  "Kensington Park", "Mesra Terrace",
];
// Segambut	Taman Kaya	Taman Kok Lian	Taman Tasik Indah	Taman Mastiara
export const slc_KL_Segambut_TmnKaya_Mastiara = [
  "Segambut", "Batu", "Taman Kaya", "Taman Mastiara",
  "Kampung Pasir Segambut", "Kawasan Perusahaan Segambut", "Taman Segambut", "Taman Goh Nam Huat",
  "Batu Complex Bussiness Centre", "Taman Rainbow", "Taman Impian", "Taman Eastern", "Kem Batu Kentonmen",
  "Batu 4 Jalan Ipoh", "Taman City", "Taman Sri Kuching", "Taman Bamboo", "Taman Kok Lian",
  "Taman Tasik Indah", "Tasik Indah Mewah", "Kampung Batu", "Kampung Batu Muda"
];
// Sentul	Bandar Baru Sentul	Kampung Batu Muda	Taman Dato' Senu
export const slc_KL_Sentul = [
  "Sentul", "Bandar Baru Sentul",
  "Taman Bullion Mewah", "Sentul Raya Boulevard", "Sentul Selatan", "Kampung Puah Bahagia", "Sentul Pasar",
  "Taman Dato' Senu", "Taman Dato Senu", "Taman Kosmo Jaya", "Kampung Puah Seberang", "Taman Sentul Jaya",
  "Sentul Garden", "Bandar Sentul Utama", "Kampung Sentul Pasar", "Taman Pelangi", "Kampung Sri Batu",
  "Kampung Batu Muda Tambahan", "Kawasan Industri Mara",
];
// Jalan Ipoh	Taman Duta	Bukit Tunku	Taman Golden	Taman Million
export const slc_KL_JlnIpoh_BktTunku = [
  "Jalan Ipoh", "Bukit Tunku",
  "Taman Million", "Taman Golden", "Putra Majestik", "Taman Duta", "Tijani 2", "Tijani 2 South",
  "Taman Tunku"
];
// Kampung Simpang Tiga	Kampung Changkat	Kampung Padang Balang	Kampung Bandar Dalam
// Kampung Tengah Lembah Gombak	Taman Perwira Satu	Taman Melati	Gombak Setia

export const slc_KL_KpgChangkat_Gombak_KpgKerdas = [
  "Kampung Changkat", "Gombak Setia", "Gombak", "Kampung Kerdas",
  "Kampung Simpang Tiga", "Kampung Lembah Melewar", "Kampung Padang Balang", "Kampung Bandar Dalam",
  "Kampung Chubadak", "Taman Pelangi Jaya", "Kampung Tengah Lembah Gombak", "Batu 7 Gombak",
  "Taman Kenangan", "Taman Gombak Jaya", "Kampung Lee Rubber", "Batu 5 Gombak", "Kampung Sungai Mulia",
  "Mutiara Gombak 1", "Taman Bukit Sentosa", "Taman Melati", "Taman Bukit Lela", "Taman Harmonis", "Kampung Tengah Tambahan",
  "Kampung Tengah Gombak", "Taman Cemerlang", "Taman Perwira Satu", "Seri Setia", "Cemerlang Heights",

];
// Setapak	Taman Setapak	Taman P. Ramlee	Danau Kota	Taman Setapak Indah	Setapak Jaya
export const slc_KL_Setapak_DanauKota_AyerPanas = [
  "Setapak", "Danau Kota", "Taman Ayer Panas",
  "Taman Setapak Indah Jaya", "Kampung Sungai Merali", "Kampung Puah", "Kampung Puah Seberang", "Taman Desa Gombak",
  "Kampung Bandar Dalam",
  "Taman Setapak", "Taman Suria Setapak", "Medan Idaman", "Taman Ibukota", "Taman Ibukota Kiri", "Medan Idaman Business Centre",
  "Kampung Kuantan", "Taman Setapak Indah", "Wardieburn Camp", "Taman Bunga Raya", "Taman Teratai Mewah",
  "Taman Tai Onn", "Taman P. Ramlee", "Diamond Square", "Kampung Baru Air Panas", "Setapak Jaya",
  "Taman Setapak Jaya", "Taman Setapak Permai", "Taman Megan Setapak", "Kawasan Perusahaan Pkns"
];
// Wangsa Maju	Taman Sri Rampai

export const slc_KL_WangsaMaju_SriRampai = [
  "Wangsa Maju", "Taman Sri Rampai",
  "Rampai Business Park", "Seksyen 1 Wangsa Maju", "Seksyen 2 Wangsa Maju", "Seksyen 3 Wangsa Maju",
  "Seksyen 4 Wangsa Maju", "Seksyen 5 Wangsa Maju", "Seksyen 6 Wangsa Maju", "Desa Setapak", "Pusat Latihan Kor Polis Tentera Diraja",
  "Wangsa Metroview", "Bukit Wangsamas"
];
// Taman Melawati
export const slc_KL_TmnMelawati = [
  "Taman Melawati",
  "Taman Desa Melawati", "Melati Utama", "Taman Melati", "Kampung Tengah Tambahan Mrr2", "Kampung Setia Jaya",
  "Desa Melawati", "Kampung Kelang Gates Baharu", "Taman Bukit Mas",
  "Riverview Kemensah", "Amberhill", "Kampung Wira Jaya", "Sunway Montana (U/C)",
];
// Lembah Keramat	Taman Wangsa Melawati	Au 3, 4, 5

export const slc_KL_LKeramat_Au345 = [
  "Lembah Keramat",
  "Taman Wangsa Melawati", "Wangsa Melawati", "Taman Permata", "Taman Lembah Keramat",
  "Au 3", "Au 4", "Au 5", "Taman Sepakat",
];
// Setiawangsa	Desa Tun Hussein Onn

export const slc_KL_Stiawgsa = [
  "Setiawangsa", "Desa Tun Hussein Onn",
];
// Taman Keramat	Kementah	Kampung Datuk Keramat	Au 1, 2
export const slc_KL_TKeramat_KpgDtkKeramat_Kementah_Au12 = [
  "Taman Keramat", "Au 2", "Au 1", "Kampung Datuk Keramat", "Kementah", "Kampung Padang Tembak"
];
// Titiwangsa, Chow Kit	Kampung Baru
export const slc_KL_Titiwgsa_ChowKit_KpgBaru = [
  "Titiwangsa", "Chow Kit", "Kampung Baru",
  "Malaysian Police Training Centre", "Titiwangsa Sentral", "Pekeliling", "Bandar Wawasan",
];
// Desa Pandan	Taman U Thant	Ampang, Kuala Lumpur	Kampung Pandan Dalam

export const slc_KL_DesaPandan_UThant = [
  "Desa Pandan", "Taman U Thant", "Kampung Berembang", "Kampung Pandan Dalam",
  "Ampang, Kuala Lumpur", "Desa Pahlawan", "971 Ampang", "Kampung Perwira Jaya", "Kampung Desa Pahlawan",
  "Ampang Hilir", "Kampung Pandan Luar", "Taman Angsana Hilir", "Taman Sri Angsana Hilir",
];
// Taman Maluri	Pandan Jaya	Kampung Pandan	Miharja

export const slc_KL_Maluri_PandanJaya_Miharja_KpgPandan = [
  "Maluri", "Pandan Jaya", "Sunway Velocity", "Taman Miharja",
  "Kampung Pandan", "Dataran Pandan Prima", "Cheras Batu 2 1/2", "Fraser Business Park",
];
// Pandan Perdana	Taman Pertama	Shamelin

export const slc_KL_PandanPerdana_Shamelin_TPertama = [
  "Taman Shamelin Perkasa", "Pandan Perdana", "Taman Pertama",
  "Taman Cheras Indah", "Taman Maju Jaya", "Taman Bukit Mewah",
  "Taman Kobena", "Taman Bukit Ria", "Shamelin Heights Business Park", "Taman Pudu Ulu", "Taman Sri Bahtera",

];
// Pandan Indah	Taman Muda
export const slc_KL_PandanIndah_TMuda = [
  "Pandan Indah", "Taman Muda",
  "Pandan Cahaya", "Kampung Baru Ampang Tambahan", "Taman Komersial Pandan Indah", "Taman Industri Pandan Indah",
  "Taman Lembah Maju", "Taman Lembah Maju", "Taman Kencana", "Taman Seraya", "Taman Bukit Teratai", "Taman Putra",
  "Taman Mastika", "Taman Mega Jaya", "Taman Mawar",
];
// Taman Bukit Segar	Kampung Cheras Baru
export const slc_KL_BktSegar_KpgCherasBaru = [
  "Bukit Segar", "Kampung Cheras Baru",
  "Taman Cheras", "Taman Rakyat", "Taman Cheras Utama", "Taman Supreme", "Taman Desa Aman",
  "Taman Bukit Permai", "Taman Bukit Segar", "Cheras Business Centre", "Taman Cheras Makmur", "Taman Gemilang",
  "Taman Mutiara Timur",
  "Pinggiran Bukit Segar", "Taman Bukit Segar", "Bayu Segar", "Taman Segar", "Cheras Hartamas", "Taman Bukit Segar Jaya 1",
  "Taman Bukit Segar Jaya 2", "Masera Bukit Segar", "Taman Cheras Hartamas",

];
// Taman connaught	Taman Taynton View	Taman Len Seng
export const slc_KL_TConnaught_TTayntonView_TLenSeng = [
  "Taman Taynton View", "Taman Connaught",
  "Taman Bukit Hijau", "Taman Bukit Tiara", "Taman Billion", "Taman Mutiara Barat", "Taman Orkid Desa", "Taman Len Seng",
  "Phoenix Business Park", "Bukit Mandarina Phase 1", "Taman Mas 2", "Bukit Mandarina",
];
// Bandar Tun Razak	Taman Midah	Cheras
export const slc_KL_BTRzk_TMidah = [
  "Bandar Tun Razak", "Taman Midah",
  "Taman Ikhlas", "Taman Mulia", "Taman Jaya", "Cheras",
];
// Sri Permaisuri	Bandar Sri Permaisuri	Ikan Emas	Chan Sow Lin	Salak Selatan

export const slc_KL_BSPermaisuri_ChanSowLin_SlkSouth = [
  "Bandar Sri Permaisuri", "Salak South", "Chan Sow Lin", "Taman Ikan Emas",
  "Taman Ikhsan", "Taman Tenaga", "Kawasan Perindustrian Trisegi", "Kampung Sri Indah", "Salak Selatan"

];
// New Salak South	Taman Salak Selatan, Taman Sungai Besi	Terminal Bersepadu Selatan (TBS)

export const slc_KL_DsPtl_TSlkSelatan = [
  "Desa Petaling", "New Salak South Village", "Taman Salak Selatan",
  "Taman Desa Petaling","Taman Sungai Besi", "Taman Salak Jaya", "Kampung Malaysia Tambahan", "Kampung Malaysia Raya",
  "Taman Castlefield", "Terminal Bersepadu Selatan (TBS)", "Kampung Muhibbah", "Kampung Malaysia", "Pusat Industri Capital",
  "Kampung Baru Salak Selatan", "Salak South Garden", "Taman Naga Emas", "Salak South Garden",
];
// Sri Petaling	Bandar Baru Sri Petaling	Taman Bukit Indah	Taman Serangkai

export const slc_KL_BSPtl_TBktIndah_TSrgkai = [
  "Bandar Baru Sri Petaling", "Taman Bukit Indah", "Taman Serangkai",
  "Taman Bukit Aman", "Desa Tiara", "Taman Bukit Intan", "Taman Sri Endah"
];
// Sungai Besi	Desa Tun Razak
export const slc_KL_SgBs_DesaTRzk = [
  "Sungai Besi", "Desa Tun Razak",
  "Taman Tasik Damai", "Taman Desa Tasek", "Desa Tasik", "Bandar Tasik Selatan", "Pekan Sungai Besi",
];
// Bukit Jalil
export const slc_KL_BktJlil = [
  "Bukit Jalil", "Technology Park Malaysia", "Taman Teknologi Malaysia",
  "Arked Esplanad", "Taman Esplanad", "Jalil Sutera", "Bukit OUG", "PPR Kampung Muhibbah", "Bukit Jalil Light Integrated Business Park",
  "Mutiara Bukit Jalil", "Alam Sutera", "Taman Ltat", "Taman Impian Indah", "Avenue Green", "Taman Bukit Jalil",
  "The Treez",
];
// Oug	Taman Sri Sentosa
export const slc_KL_OUG = [
  "Taman OUG", "Taman Yarl",
  "Tmn Sri Pandyan", "Taman Angkasa", "Kampung Bohol Baharu", "Taman Kuchai", "Taman Perindustrian Oug", "Taman Tan Yew Lai",
  "Taman Lucky", "Greenview Height", "Villa Bovelin", "Villa Yarl", "Taman Oug Square", "Taman Sri Jati"
];
// Kuchai Lama	Taman United
export const slc_KL_KchaiLama_HpyGrdn_TUnited = [
  "Kuchai Lama", "Happy Garden", "Taman United",
  "Kuchai Entrepreneurs Park", "Kuchai Avenue", "Sri Desa Entrepreneur Park", "Taman Kuchai Jaya", "Taman Continental",
  "Taman Pagar Ruyung", "Taman Indrahana", "Taman Lian Hoe", "Kuchai Business Centre", "Taman Goodwood", "Taman Skyline",
  "Old Klang Road", "Taman Pasir Permata", "Bedford Business Park", "Tiara Villa", "Taman Gembira",
];
// Taman Desa	Taman Danau Desa

export const slc_KL_TDsa_TDnauDsa = [
  "Taman Desa", "Taman Danau Desa",
  "Taman Abadi Indah", "Taman Bukit Desa", "Seputeh", "Taman Halimahton", "Petaling Lama", "Taman Angsona",
  "Pusat Dagangan 3rd Mile Square", "Taman Shanghai", "Taman Desa Business Park", "Taman Hock Ann", "The Scott Garden",

];
// Bukit Bintang	KLCC	Pudu

export const slc_KL_BktBntg_KLCC_Pudu = [
  "Bukit Bintang", "Kuala Lumpur City Centre", "Pudu",
  "Bukit Ceylon", "Hampshire Park",
  "Kuala Lumpur", "Imbi", "Perdana Botanical Gardens", "Tasik Perdana"
];
// Brickfields	Kuala Lumpur Sentral	Mid Valley City

export const slc_KL_Bfields_Spth_MidVlly = [
  "Brickfields", "Kuala Lumpur Sentral", "Mid Valley City", "Seputeh",
  "KL Eco City", "Kampung Haji Abdullah Hukum", "Taman Bukit Seputeh", "Taman Desa Seputeh", "Mutiara Seputeh",
  "Casa Lumini Seputeh Heights", "Casa Elita", "Taman Seputeh", "Taman Persiaran Desa", "Royal Malaysian Air Force Base",
  "Kampung Kerayung", "Bukit Petaling", "Kampung Attap", "Istana Negara", "Bukit Seputeh",
];
// Bukit Damansara	Taman Damansara Endah	Jelutong Villas

export const slc_KL_BktDman = [
  "Bukit Damansara",
  "Desa Damansara", "Anggun", "Beringin Residence", "Damansara Town Centre", "Taman Damansara Endah", "Taman Bukit Damansara",
  "Bukit Kiara Equestrian", "Medan Damansara", "Seri Beringin", "Semantan Villas", "Jelutong Villas", "Damansara Heights",
  "Damansara Villa", "Idamansara", "Taman Sa", "Seventy Damansara",
];
// Bangsar	Taman Bandaraya

export const slc_KL_Bgsr_BktPrsktn = [
  "Bangsar", "Taman Bandaraya", "Bukit Persekutuan",
  "The Ara Bangsar", "Bukit Bandaraya", "Lucky Garden", "Bukit Pantai", "Taman Lucky", "Taman Bukit Pantai",
  "Off Jalan Bangsar", "Bukit Bangsar",
];
// Kerinchi	Bangsar South	Kampung Pasir	Lembah Pantai

export const slc_KL_BgsrSouth_Krnchi = [
  "Kerinchi", "Bangsar South",
  "Kampung Kerinchi", "Pantai Dalam", "Bukit Putra", "Taman Bukit Angkasa", "Centrio", "Bukit Kerinchi",
  "Pantai Hill Park", "Pantai Permai", "Kampung Pantai", "Taman Pantai Indah", "Kampung Dato' Tatah", "Kampung Pasir",
  "Kampung Pantai Dalam", "Taman Desa Kerinchi", "Gasing Indah",
];
// Taman Tun Dr Ismail TTDI	Sungai Penchala
export const slc_KL_TTDI = [
  "Taman Tun Dr Ismail", "Pinggiran Taman Tun Dr Ismail", "Sungai Penchala",
  "Kampung Palimbayan Indah", "Kampung Palimbayan", "Bukit Lanjan", "Country Heights Damansara",
  "Ttdi Hills",
];

export const cityKL = [
  "⚠️Alam Damai", "❌Ampang, KL", "❌Bandar Sg Long", "⚠️Bandar Tun Razak", "✅Bangsar", "⚠️Bangsar South", "⚠️Brickfields", "⚠️Bukit Bintang", "✅Bukit Damansara", "✅Bukit Jalil",
  "❌Cheras, KL", "⚠️Chow Kit", "❌City Center (KLCC)", "⚠️Desa Pandan", "⚠️Desa Park City", "⚠️Jalan Ipoh", "⚠️Kepong, KL", "⚠️Kerinchi", "❌KL Town", "✅Kuchai Lama", "✅Lembah Keramat",
  "❌Lembah Pantai", "⚠️Menjalara", "⚠️Mont Kiara", "⚠️Oug", "⚠️Segambut", "❌Selayang, KL", "⚠️Sentul", "⚠️Seputeh", "⚠️Setapak", "✅Setiawangsa", "⚠️Sri Hartamas", "⚠️Sri Permaisuri",
  "⚠️Sri Petaling", "✅Sungai Besi", "⚠️Taman Bukit Segar", "⚠️Taman Connaught", "✅Taman Desa", "❌Taman Len Seng", "⚠️Taman Maluri", "⚠️Taman Melawati", "⚠️Taman Tun Dr Ismail (TDDI)",
  "⚠️Wangsa Maju"]; //43


export const cityKLId = [
    "klAlamDamai", "klAmpg", "klSgLg", "klBTRzk", "klBgsr", "klBSouth", "klBfields", "klBBntg", "klBDman", "klBJlil",
    "klChras", "klChowKit", "klKLCC", "klDesaPandan", "klDPCity", "klJIph", "klKpg", "klKrnchi", "klTwn", "klKLma", "klLKeramat",
    "klLPntai", "klMenjalara", "klMKiara", "klOug", "klSegambut", "klSlyg", "klSntul", "klSeputeh", "klStpk", "klStiawgsa", "klSHtmas", "klSPermaisuri",
    "klSPtl", "klSgBs", "klTBktSegar", "klTConnaught", "klTDsa", "klTLenSeng", "klTMaluri", "klTMlwti", "klTTDI",
    "klWMju"];

export const cityKLObj = [
//   {id:"kl",url:["kuala-lumpur"],name:["Kuala Lumpur",st:"kl", co:"MY",oid:""},
  {id:"klAlamDamai",url:["alam-damai-bandar-damai-perdana","alam-damai","bandar-damai-perdana"],name:["Alam Damai, Bandar Damai Perdana","Alam Damai","Bandar Damai Perdana"], // "alam-damai-bandar-damai-perdana"
  slc:slc_KL_AlamDamai_BdrDamaiPerdana,lc:["Kuala Lumpur"],pc:"56000",pr:'2',st:"kl", co:"MY",oid:"klAlamDamai"},

  {id:"klBSPtl_TBktIndah_TSrgkai",url:["bandar-baru-sri-petaling", "taman-bukit-indah-kl","taman-serangkai"],
  name:["Bandar Baru Sri Petaling, Taman Bukit Indah, Taman Serangkai","Taman Bukit Indah","Taman Serangkai"],slc:slc_KL_BSPtl_TBktIndah_TSrgkai,lc:["Kuala Lumpur"],pc:"51000",pr:'2',st:"kl", co:"MY",oid:"klSPtl"},
  {id:"klBdrSriDamansara",url:["bandar-sri-damansara", "taman-wangsa-permai"],name:["Bandar Sri Damansara, Taman Wangsa Permai", "Taman Wangsa Permai"],slc:slc_KL_BdrSriDamansara,lc:["Kuala Lumpur"],pc:"",pr:'2',st:"kl", co:"MY",oid:"klMenjalara"},
  {id:"klMenjalara_DesaParkcity",url:["menjalara-desa-parkcity", "bandar-menjalara","desa-parkcity","taman-sri-bintang"],
  name:["Bandar Menjalara, Desa Parkcity, Taman Sri Bintang","Bandar Menjalara","Desa Parkcity","Taman Sri Bintang"],
  slc:slc_KL_Menjalara_DesaParkcity,lc:["Kuala Lumpur"],pc:"56000",pr:'2',st:"kl", co:"MY",oid:"klDPCity"},
  {id:"klBSPermaisuri_ChanSowLin_SlkSouth",url:["bandar-sri-permaisuri-salak-south","bandar-sri-permaisuri","salak-south","chan-sow-lin"],
  name:["Bandar Sri Permaisuri, Salak South, Chan Sow Lin","Bandar Sri Permaisuri","Salak South","Chan Sow Lin"],slc:slc_KL_BSPermaisuri_ChanSowLin_SlkSouth,lc:["Kuala Lumpur"],pc:"55100",pr:'2',st:"kl", co:"MY",oid:"klSPermaisuri"},
  {id:"klBTRzk_TMidah",url:["bandar-tun-razak-taman-midah","bandar-tun-razak","cheras-kl", "taman-midah"],name:["Bandar Tun Razak, Cheras, Taman Midah","Bandar Tun Razak", "Cheras, KL", "Taman Midah"],slc:slc_KL_BTRzk_TMidah,lc:["Kuala Lumpur"],pc:"58200",pr:'2',st:"kl", co:"MY",oid:"klBTRzk"},

  {id:"klBgsr_BktPrsktn",url:["bangsar", "bukit-persekutuan"],name:["Bangsar, Bukit Persekutuan", "Bukit Persekutuan"],slc:slc_KL_Bgsr_BktPrsktn,lc:["Kuala Lumpur"],pc:"56000",pr:'2',st:"kl", co:"MY",oid:"klBgsr"},
  {id:"klBgsrSouth_Krnchi",url:["bansar-south-kerinchi", "bangsar-south","kerinchi"],name:["Bangsar South, Kerinchi", "Bangsar South","Kerinchi"],slc:slc_KL_BgsrSouth_Krnchi,lc:["Kuala Lumpur"],pc:"58100",pr:'2',st:"kl", co:"MY",oid:"klBSouth"},
  {id:"klBfields_Spth_MidVlly",url:["brickfields-seputeh-midvalley","brickfields","seputeh","mid-valley"],name:["Brickfields, Seputeh, Mid Valley","Brickfields","Seputeh","Mid Valley"],slc:slc_KL_Bfields_Spth_MidVlly,lc:["Kuala Lumpur"],pc:postcode_SgBesi,pr:'2',st:"kl", co:"MY",oid:"klBfields"},
  {id:"klBktBntg_KLCC_Pudu",url:["bukit-bintang-klcc-pudu","bukit-bintang","kuala-lumpur-city-centre","pudu"],name:["Bukit Bintang, Kuala Lumpur City Centre, Pudu","Bukit Bintang","Kuala Lumpur City Centre","Pudu"],slc:slc_KL_BktBntg_KLCC_Pudu,lc:["Kuala Lumpur"],pc:"57000",pr:'2',st:"kl", co:"MY",oid:"klBBntg"},
  {id:"klBktDman",url:["bukit-damansara"],name:["Bukit Damansara"],slc:slc_KL_BktDman,lc:["Kuala Lumpur"],pc:"56100",pr:'2',st:"kl", co:"MY",oid:"klBDman"},
  {id:"klBktJlil",url:["bukit-jalil", "technology-park-malaysia"],name:["Bukit Jalil", "Technology Park Malaysia"],slc:slc_KL_BktJlil,lc:["Kuala Lumpur"],pc:postcode_Setapak,pr:'2',st:"kl", co:"MY",oid:"klBJlil"},
  {id:"klTBktSegar_KpgCherasBaru",url:["bukit-segar-kampung-cheras-baru","bukit-segar","kampung-cheras-baru"],name:["Bukit Segar, Kampung Cheras Baru","Bukit Segar","Kampung Cheras Baru"],slc:slc_KL_BktSegar_KpgCherasBaru,lc:["Kuala Lumpur"],pc:"52200",pr:'2',st:"kl", co:"MY",oid:"klTBktSegar"},

  {id:"klDesaPandan_UThant",url:["desa-pandan-kampung-berembang","desa-pandan","kampung-berembang","u-thant","pandan-dalam"],
  name:["Desa Pandan, Kampung Berembang, U Thant, Pandan Dalam","Desa Pandan","Kampung Berembang","U Thant","Pandan Dalam"],slc:slc_KL_DesaPandan_UThant,lc:["Kuala Lumpur"],pc:"59200",pr:'2',st:"kl", co:"MY",oid:"klDesaPandan"},
  {id:"klDsPtl_TSlkSelatan",url:["taman-salak-selatan-desa-petaling"],name:["Desa Petaling, Taman Salak Selatan, New Salak South Village"],slc:slc_KL_DsPtl_TSlkSelatan,lc:["Kuala Lumpur"],pc:"51200",pr:'2',st:"kl", co:"MY",oid:"klSPtl"},

  {id:"klKpgChangkat_Gombak_KpgKerdas",url:["gombak-changkat-kerdas","kampung-changkat","kampung-kerdas"],
  name:["Gombak, Changkat, Kerdas","Kampunng Changkat","Kampung Kerdas"],slc:slc_KL_KpgChangkat_Gombak_KpgKerdas,lc:["Kuala Lumpur"],pc:"56000",pr:'2',st:"kl", co:"MY",oid:"klWMju"},

  {id:"klJlnIpoh_BktTunku",url:["jalan-ipoh-bukit-tunku","jalan-ipoh","bukit-tunku"],name:["Jalan Ipoh, Bukit Tunku","Jalan Ipoh","Bukit Tunku"],slc:slc_KL_JlnIpoh_BktTunku,lc:["Kuala Lumpur"],pc:"57000",pr:'2',st:"kl", co:"MY",oid:"klJIph"},
  {id:"klJinJangUtara_LamanRimbunan",url:["taman-usahawan-laman-rimbunan-jinjang-utara","jinjang-utara","taman-usahawan","laman-rimbunan"],
  name:["Jinjang Utara, Taman Usahawan, Laman Rimbunan","Jinjang Utara","Taman Usahawan","Laman Rimbunan"],slc:slc_KL_JinJangUtara_LamanRimbunan,lc:["Kuala Lumpur"],pc:"59200",pr:'2',st:"kl", co:"MY",oid:"klKpg"},

  {id:"klKepongBaru_BktMaluri_JinJangSelatan",url:["kepong-jinjang-selatan-bukit-maluri", "kepong","jinjang-selatan","taman-bukit-maluri"],
  name:["Kepong, Jinjang Selatan, Taman Bukit Maluri","Kepong","Jinjang Selatan","Taman Bukit Maluri"],slc:slc_KL_KepongBaru_BktMaluri_JinJangSelatan,lc:["Kuala Lumpur"],pc:"59000",pr:'2',st:"kl", co:"MY",oid:"klKpg"},
  {id:"klKchaiLama_HpyGrdn_TUnited",url:["kuchai-lama","happy-garden","taman-united"],name:["Kuchai Lama","Happy Garden","Taman United"],slc:slc_KL_KchaiLama_HpyGrdn_TUnited,lc:["Kuala Lumpur"],pc:"50480",pr:'2',st:"kl", co:"MY",oid:"klKLma"},

  {id:"klLKeramat_Au345",url:["lembah-keramat", "wangsa-melawati"],name:["Lembah Keramat", "Wangsa Melawati"],slc:slc_KL_LKeramat_Au345,lc:["Kuala Lumpur"],pc:"52200",pr:'7',st:"kl", co:"MY",oid:"klLKeramat"},


  {id:"klMontKiara_SriHartamas_Dutamas",url:["mont-kiara-sri-hartamas", "mont-kiara","sri-hartamas","duta-nusantara","dutamas"],
  name:["Mont Kiara, Sri Hartamas, Duta Nusantara, Dutamas","Mont Kiara","Sri Hartamas","Duta Nusantara","Dutamas"],slc:slc_KL_MontKiara_SriHartamas_Dutamas,lc:["Kuala Lumpur"],pc:"",pr:'2',st:"kl", co:"MY",oid:"klMKiara"},
  {id:"klMaluri_PandanJaya_Miharja_KpgPandan",url:["maluri", "pandan-jaya", "sunway-velocity"],name:["Maluri", "Pandan Jaya", "Sunway Velocity"],slc:slc_KL_Maluri_PandanJaya_Miharja_KpgPandan,lc:["Kuala Lumpur"],pc:"58200",pr:'2',st:"kl", co:"MY",oid:"klTMaluri"},

  {id:"klPandanIndah_TMuda",url:["pandan-indah-taman-muda", "pandan-indah","taman-muda"],name:["Pandan Indah, Taman Muda","Pandan Indah","Taman Muda"],slc:slc_KL_PandanIndah_TMuda,lc:["Kuala Lumpur"],pc:"59200",pr:'2',st:"kl", co:"MY",oid:"klTMaluri"},

  {id:"klPandanPerdana_Shamelin_TPertama",url:["shamelin-perkasa","pandan-perdana","taman-pertama"],name:["Shamelin Perkasa","Pandan Perdana","Taman Pertama"],slc:slc_KL_PandanPerdana_Shamelin_TPertama,lc:["Kuala Lumpur"],pc:"54200",pr:'2',st:"kl", co:"MY",oid:"klBTRzk"},

  {id:"klSegambutt_TmnKaya_Mastiara",url:["segambut-batu","segambut","batu"],
  name:["Segambut, Batu, Taman Kaya, Mastiara","Segambut","Batu"],slc:slc_KL_Segambut_TmnKaya_Mastiara,lc:["Kuala Lumpur"],pc:"",st:"kl",pr:'2', co:"MY",oid:"klSegambut"},

  {id:"klSntul",url:["bandar-baru-sentul"],name:["Sentul, Bandar Baru Sentul"],slc:slc_KL_Sentul,lc:["Kuala Lumpur"],pc:"50490",pr:'2',st:"kl", co:"MY",oid:"klSntul"},
  {id:"klSetapak_DanauKota_AyerPanas",url:["setapak-danau-kota","setapak","danau-kota","taman-ayer-panas"],name:["Setapak, Danau Kota, Taman Ayer Panas","Setapak","Danau Kota","Taman Ayer Panas"],slc:slc_KL_Setapak_DanauKota_AyerPanas,lc:["Kuala Lumpur"],pc:"",pr:'2',st:"kl", co:"MY",oid:"klStpk"},

  {id:"klStiawgsa",url:["setiawangsa", "desa-tun-hussein-onn"],name:["Setiawangsa, Desa Tun Hussein Onn", "Desa Tun Hussein Onn"],slc:slc_KL_Stiawgsa,lc:["Kuala Lumpur"],pc:"51200",pr:'2',st:"kl", co:"MY",oid:"klStiawgsa"},
  {id:"klSgBs_DesaTRzk",url:["sungai-besi", "desa-tun-razak"],name:["Sungai Besi", "Desa Tun Razak"],slc:slc_KL_SgBs_DesaTRzk,lc:["Kuala Lumpur"],pc:"58000",pr:'2',st:"kl", co:"MY",oid:"klSgBs"},

  {id:"klTConnaught_TTayntonView_TLenSeng",url:["taman-taynton-view-taman-connaught","taman-taynton-view","taman-connaught"],name:["Taman Taynton View, Taman Connaught","Taman Taynton View","Taman Connaught"],slc:slc_KL_TConnaught_TTayntonView_TLenSeng,lc:["Kuala Lumpur"],pc:"50480",pr:'2',st:"kl", co:"MY",oid:"klTConnaught"},
  {id:"klTDsa_TDnauDsa",url:["taman-desa", "taman-danau-desa"],name:["Taman Desa, Taman Danau Desa", "Taman Danau Desa"],slc:slc_KL_TDsa_TDnauDsa,lc:["Kuala Lumpur"],pc:"56000",pr:'2',st:"kl", co:"MY",oid:"klTDsa"},
  {id:"klDesaJaya_IntanBaiduri_TmnDaya",url:["taman-desa-jaya-intan-baiduri","taman-desa-jaya-kl","intan-baiduri",],
  name:["Taman Desa Jaya, Intan Baiduri, Taman Ehsan, Taman Daya","Taman Desa Jaya","Intan Baiduri"],
  slc:slc_KL_DesaJaya_IntanBaiduri_TmnDaya,lc:["Kuala Lumpur"],pc:"52200",pr:'2',st:"kl", co:"MY",oid:"klDPCity"},
  {id:"klTKeramat_KpgDtkKeramat_Kementah_Au12",url:["kampung-datuk-keramat-taman-keramat","taman-keramat","kampung-datuk-keramat","kementah"],
  name:["Taman Keramat, Kampung Datuk Keramat, Kementah","Taman Keramat","Kampung Datuk Keramat","Kementah"],slc:slc_KL_TKeramat_KpgDtkKeramat_Kementah_Au12,lc:["Kuala Lumpur"],pc:"51200",pr:'2',st:"kl", co:"MY",oid:"klStiawgsa"},
  {id:"klTmnMelawati",url:["melawati-taman-melati","taman-melawati","taman-melati"],name:["Taman Melawati, Taman Melati","Taman Melawati","Taman Melati"],slc:slc_KL_TmnMelawati,lc:["Kuala Lumpur"],pc:"55100",pr:'2',st:"kl", co:"MY",oid:"klTMlwti"},
  {id:"klOug",url:["taman-oug-taman-yarl","taman-oug","taman-yarl"],name:["Taman OUG, Taman Yarl","Taman OUG","Taman Yarl"],slc:slc_KL_OUG,lc:["Kuala Lumpur"],pc:"54200",pr:'2',st:"kl", co:"MY",oid:"klOug"},
  {id:"klTitiwgsa_ChowKit_KpgBaru",url:["titiwangsa-chow-kit-kampung-baru","titiwangsa","chow-kit","kampung-baru"],name:["Titiwangsa, Chow Kit, Kampung Baru","Titiwangsa","Chow Kit","Kampung Baru"],slc:slc_KL_Titiwgsa_ChowKit_KpgBaru,lc:["Kuala Lumpur"],pc:"52100",pr:'2',st:"kl", co:"MY",oid:"klChowKit"},

  {id:"klTTDI",url:["ttdi"],name:["TTDI, Sungai Penchala"],slc:slc_KL_TTDI,lc:["Kuala Lumpur"],pc:"",pr:'2',st:"kl", co:"MY",oid:"klTTDI"},
  {id:"klWangsaMaju_SriRampai",url:["wangsa-maju", "taman-sri-rampai"],name:["Wangsa Maju", "Taman Sri Rampai"],slc:slc_KL_WangsaMaju_SriRampai,lc:["Kuala Lumpur"],pc:"50088",pr:'2',st:"kl", co:"MY",oid:"klWMju"},

];

// Taman Dagang Jaya, Taman Nirwana
export const slc_Ampg_TmnDagang_PandanIndah = [
  "Pandan Indah", "Bandar Baru Ampang", "Taman Dagang",
  "Taman Ampang Utama", "One Ampang Avenue", "Taman Putra Sulaiman", "Duta Suria", "Taman Nirwana", "Ampang Hilir", "Taman Angsana Hilir",
  "Taman Bakti", "Taman Cempaka", "Taman Cahaya Suria", "Pekan Ampang", "Ampang Mewah", "Taman Cahaya Indah", "Kampung Baru Ampang",
  "Pandan Cahaya", "Taman Industri Pandan Indah", "Kampung Ampang Campuran", "Taman Komersial Pandan Indah", "Taman Sri Merdeka",
  "Taman Wawasan", "Taman Sri Watan", "Taman Kesuma", "Taman Bukit Ampang", "Taman Seri Ampang", "Taman Halaman", "Taman Dagang Jaya",
  "Taman Dagang Permai", "Sri Taman Baru", "Taman Tasik Tambahan", "Taman Permai Jaya", "Kampung Tasek Tambahan",
  "Kampung Tasek Permai", "Kampung Tasik Permai", "Kampung Tasik Tambahan", "Taman Dagang Permai", "Kampung Indah Permai", "Taman Seri Bayu",
  "Taman Seri Intan", "Taman Lembah Jaya", "Kampung Muhibbah Ampang", "Kampung Lembah Jaya Selatan",
  "Ampang Saujana", "Taman Saujana Ampang", "Taman Mulia Jaya",
  "Taman Pandan Mewah", "Taman Seri Raya", "Taman Putra", "Taman Melur", "Taman Saga", "Taman Bukit Teratai",
];
// Ukay Heights, Taman Bukit Indah, Taman Kosas, Taman Tun Abdul Razak
export const slc_Ampg_UkayHeights_TmnKosas_TmnBktIndah = [
  "Ukay Heights","Taman Kosas", "Taman Bukit Indah", "Ampang Waterfront", "Taman Tun Abdul Razak",
  "Dataran Ukay", "Taman Hijau", "Kelab Darul Ehsan", "Ampang Jaya",
  "Taman Dato Ahmad Razali", "Kampung Melayu Ampang", "Taman Uda Jaya", "Taman Perwira Dua", "Kampung Melayu Ampang",
  "Kampung Melayu Tambahan", "Kampung Sri Melur", "Kosas 5 Residence", "Taman Rasmi Jaya", "Taman Ampang Indah", "Kampung Dato Mufti",
  "Kampung Lembah Jaya Utara", "Kampung Tengah Ampang"
];
// Ukay Perdana, Bukit Antarabangsa
export const slc_Ampg_Ukay_BktAntarabangsa = [
  "Ukay Perdana", "Bukit Antarabangsa", "Kemensah Heights",
  "Tropika Kemensah", "Taman Tropika Kemensah", "Taman Melawati", "Prima Villa", "Prima Court",
  "Twin Palms Kemensah", "Kampung Kemensah", "Kemensah Mewah", "Taman Zooview", "Melawati Heights",
  "Somerset Ville", "Taman Sierra Ukay", "Sungai Sering", "Taman Riana Ukay", "Sering Ukay",
  "Taman Nusa Tropika", "Taman Ukay Bistari", "Tijani Ukay", "Taman Bukit Mulia", "Taman Kelab Ukay",
  "Beverly Heights", "Hulu Kelang", "Taman Andaman Ukay", "Taman Bukit Mewah", "Taman Wangsa Ukay",
  "Taman Pinggiran Ukay", "Taman Bukit Jobina", "Villa Sri Ukay", "Taman Bukit Jaya",
  "Taman Hill View", "Taman Sri Ukay", "Ulu Kelang", "Taman Puncak Bukit Utama", "Taman Bukit Utama"
];

export const slc_Balakong = [
  "Taman Seri Timah", "Taming Jaya Industry Park", "Taman Taming Jaya", "Kawasan Perniagaan Desa Ria Balakong",
  "Taman Industri Selesa Jaya", "Kawasan Perindustrian Taming Jaya",
  // Area from Cheras
  "Simpang Balak", "Kawasan Perindustrian Cheras Jaya", "Taman Sri Indah", "Taman Cheras Prima",
  "Bukit Angkat",
  // Area from Kajang
  "One Industrial Park", "Taman Sutera", "Taman Bukit Emas", "Desa Karun Mas",
  // Area from Seri Kembangan
  "Kampung Baru Balakong", "Kawasan Perindustrian Balakong", "Taman Setia Balakong", "Taman Setia Balakong 2",
  "Taman Impian Ehsan", "Taman Sinaran", "Taman TamingTaming Maju", "Taman Cheras Jaya",
  "Taman Desa Karunmas",
  // Area from Seri Kembangan, Bkt Serdang
  "Bukit Gita Bayu",
  "Taman Desa Serdang", "Serdang Lama", "Bluwater Estate", "Taman Balakong Jaya", "Seri Pulai", "Taman Putra Budiman",
  "Putra Square", "Kawasan Perindustrian Balakong Jaya", "Taman Perindustrian Balakong Jaya 2",
  "Taman Puncak Utama", "Jade Terrace",
];
export const postcode_BatangBerjuntai = ["45600", "45607", "45609", "45620"]; // Note: Bestari Jaya (45600) will be the representative for Batang Berjuntai

// Cheras
export const postcode_Cheras = ["43200", "43207", "56000", "56100"];
// Taman Segar Perdana, Kampung Sungai Raya
export const slc_Cheras_SegarPerdana= [
  "Taman Cuepacs", "Taman Segar Perdana",
  "Tiara Hatamas", "Bukit Hatamas", "Taman Cheras Awana", "One Legenda",
  "Taman Cheras Permata 1", "Taman Cheras Permata 2", "Sunway Cheras", "Taman Wangsa Cheras", "Taman Hijauan Residen",
  "Hijauan Residence", "Taman Mudun", "Taman Sunway", "Taman Emas", "Taman Orkid", "Taman Sri Mujur", "Taman Fern Grove",
  "Taman Suntex", "Pekan Batu 9 Cheras", "Taman Cheras Permai", "Taragon Puteri Cheras", "Suria Residen",
  "Taman Kemacahaya", "Taman Cheras Intan", "Taman Mas 1", "Taman Mas 2", "Kawasan Perindustrian Mas Jaya", "Kawasan Perusahaan Mas Jaya",
  "Kampung Melaka", "Kampung Sungai Raya", "Taman Sri Raya", "Taman Prima Suria", "Taman Hulu Langat Jaya", "Suria Residen",
  "Taman Puteri", "Taragon Puteri Cheras", "Bandar Batu 9", "Kampung Batu 10 Cheras",
];
// Bandar Mahkota Cheras
export const slc_Cheras_BdrMahkotaCheras= [
  "Bandar Mahkota Cheras",
  "Seksyen 3 Bandar Mahkota Chera", "Seksyen 7 Bandar Mahkota Cheras", "East Park 72",
  // Area from Kajang
  "Cheras Vista", "Seri Budiman", "Taman Cheras Vista", "Taman Desa Permai", "Desa Permai"

];
// Tun Hussein Onn
export const slc_Cheras_TunHusseinOnn= [
  "Tun Hussein Onn", "Cheras Perdana",
  "Avenue One", "Puncak Perdana", "Taman Kasturi", "Taman Indah", "Cheras 11 Miles", "Taman Cheras Perdana",
  "Taman Desa Baiduri", "Primaya",
  "Taman Rasa Sayang Prima", "Taman Cheras Mas", "The Peak", "Taman Sri Aman", "Taman Rasa Sayang Prima", "Taman Rasa Sayang",
  "Taman Tun Perak", "Taman Suria Jaya", "Taman Seri Bahagia", "Taman Bukit Angsana", "Taman Minang", "Taman Minang Ria",
  "Taman Seri Minang", "Taman Putri Jaya", "Taman Kota Cheras", "Taman Murni", "Taman Damai Jaya", "Taman Seri Cheras",
  "Taman Seri Cheras Jaya", "Taman Shahjaya Cheras", "Taman Megah", "Taman Megah 2", "Kampung Bharu Cheras"
];

export const postcode_Cyberjaya = ["63000", "63100", "63200", "63300" ];
export const postcode_Dengkil = ["43800", "43807"];
export const postcode_Jenjarom = ["42600", "42610"];
// Kajang
export const postcode_Kajang = ["43000", "43007", "43009", "43558"];
export const slc_Kjg_BdrBktMahkota_BdrSeriPutra= [
  "Bandar Bukit Mahkota", "Bandar Seri Putra",
  "Anjung Suasana", "Kampung Bahagia",
  "Taman Impian Putra", "Taman Bangi Indah", "Taman Bangi Villa", "Taman Seri Bangi", "Taman Seri Bangi 2",
  "Pekan Bangi", "Bangi Avenue",
  "Kampung Sungai Kembong Hilir", "Kampung Batu Lima Bangi", "Desa Mahkota", "Kampung Rinching Hilir",
  "Kampung Batu Tiga Jalan Bangi"
];
export const slc_Kjg_DesaPinggiranPutra= [
  "Desa Pinggiran Putra", "Kampung Limau Manis", "Desa Putra",
  "Kampung Sungai Merab", "Taman Desa Saujana", "Kampung Tengah Sungai Merab", "Kampung Sungai Merab Hulu",
  "Kampung Sungai Merab Luar", "Kampung Dato Abu Bakar Baginda"
];
export const slc_Kjg_TmnTropikaSetiaAlamsari = [
  "Taman Tropika", "Alam Sari",
  "Taman Tropika 2", "Kampung Sungai Tangkas", "Taman Universiti", "Setia Alam Sari",
  "Taman Tenaga", "Pusat Hentian Kajang", "Taman Perindustrian Kajang", "Vista Emas"
];

export const slc_Kjg_BktMewah_Jasmin_KjgUtama = [
  "Taman Bukit Mewah", "Taman Jasmin", "Taman Kajang Utama",
  "Taman Bukit Kajang Baru", "Taman Bukit", "Taman Kajang Jaya", "Taman Bukit Ria", "Taman Bukit Mutiara",
  "Taman Bukit Indah", "Taman Zamrud", "Taman Permai", "Taman Damai Indah", "Taman Jasmin II", "Taman Kajang Prima",
  "Taman Aman Utara", "Taman Seri Mewah", "Taman Nadayu 92",

  "Reko Sentral", "Taman Sri Langat", "Taman Bangi", "Taman Mewah Indah"
];
export const slc_Kjg_CountryHeights_SgChua = [
  "Country Heights", "Sungai Chua",
  "Widuri Villas", "Kampung Bukit Angkat", "Taman Sri Kenari", "Taman Sungai Ramal Baru", "Kampung Sungai Ramal Luar",
  "Sungai Ramal Luar", "Taman Sri Ramal", "Taman Ramal Indah", "Sungai Ramal Baru", "Taman Bukit Meringin", "Bukit Meringin",
  "Taman Muhibbah", "Taman Sri Jambu", "Kampung Jambu",
  "Taman Cahaya", "Kampung Baru Sungai Chua", "Kampung Sungai Chua", "Taman Sri Saga", "Desa Bunga Raya",
  "Taman Sri Kajang", "Taman Sri Sungai Chua", "Pusat Perindustrian Sungai Chua", "Taman Kajang Indah", "Taman Cempaka",
  "Taman Berjaya", "Taman Berjaya Baru", "Taman Taming Emas", "Taman Seri Emas","Taman Sepakat Indah",
  "Taman Pasir Emas", "Taman Koperasi Lln", "Taman Kajang Raya",
  "Taman Sungai Mas", "Taman Mas", "Taman Jelita", "Taman Mahkota","Taman Sri Reko","Taman Hijau", "Taman Reko Jaya",

  "Kampung Sungai Ramal Dalam", "Taman Ramal Suria", "Kampung Sungai Ramal", "Taman Ramal Desa", "Taman Sri Kejora",
  "Taman Desa Surada", "Putra Kajang Commercial Center", "Bandar Baru Kajang", "Taman Semarak", "Taman Kajang Putra",
  "Taman Kajang Mewah", "Taman Sri Melor", "Taman Sri Intan", "Taman Sepakat Indah 2"
];
export const slc_Kjg_PrimaSaujana = [
  "Prima Saujana", "Taman Melor", "Taman Melati", "Taman Asa Jaya", "Taman Kajang Perdana",
  "Saujana Villa", "Taman Impian Jaya", "Kampung Sungai Kantan", "Taman Sri Kantan",
  "Bandar Kajang", "Taman Desa Ros", "Taman Angkasa Indah", "Taman Maju Satu", "Taman Saga Emas", "Taman Sri Minang",
  "Sentosa Heights", "Taman Megah", "Taman Indah", "Taman Kajang Baru", "Taman Ria", "Taman Sungai Jelok", "Tmn Kajang Mulia",
  "Taman Saujana Mutiara", "Taman Berlian", "Taman Kajang Baru", "Taman Ria", "Taman Sungai Jelok", "Taman Nilam",
  "Taman Jelok Indah", "Taman Jelok Ria", "Taman Sri Jelok", "Taman Sungai Jelok", "Taman Seri Damai", "Taman Sakap",
  "Taman Villa Height", "Taman Villa Heights 2","Taman Maju","Square 1"
];
export const slc_Kjg_DesaBaru_SaujanaImpian = [
  "Taman Desa Baru", "Saujana Impian",
  "Taman Koperasi Cuepacs", "Taman Rakan", "Taman Cheras Idaman", "Taman Lingkaran Nur", "Kampung Sungai Sekamat",
  "Taman Pinggiran Sekamat", "Bukit Suria", "Taman Suria Villa", "Taman Bukit Suria Ii", "Taman Kasih",
  "Taman Sekamat", "Taman Sekamat Indah", "Taman Sri Sekamat", "Taman Delima", "Kampung Sungai Kantan", "Taman Mesra",
  "Taman Saujana Impian", "Taman Impian Gemilang", "Taman Impian Murni", "Taman Desa Impian",
  "Taman Pinggiran Saujana", "Taman Saujana Damai", "Taman Puncak Saujana", "Taman Jenaris",
  "Taman Kantan Permai", "Taman Perindustrian Sri Jenaris", "Taman Jelok Impian", "Taman Semanja",
];
export const slc_Kjg_BdrSgLong = [
  "Bandar Sungai Long", "Taman Desa Budiman", "Bandar Baru Sungai Long",
  "Taman Taming Indah", "Bukit Sungai Long", "Bukit Sungai Long 1", "Bukit Sungai Long 2"]
// Klang
export const postcode_Klang_TmnSentosa_ = ["41200"]
export const slc_Klang_TmnSentosa = [
"Taman Sentosa",
"Bandar Putera", "Bandar Putera 2",
"Bandar Puteri",
"Taman Mewah Jaya 3", "Taman Sentosa Perdana 2", "Taman Desa Idaman 2", "Taman Sri Sentosa", "Taman Bukit Sentosa",
"Taman Millenium Sentosa", "Taman Wangsa 2",
"Taman Johan Setia Permai", "Taman Wira Setia", "Taman Setia", "Taman Setia Permai", "Taman Johan", "Taman Johan Setia",
"Kampung Johan Setia", "Kampung Batu Tujuh"
];

export const postcode_Klang_TmnSriAndalas = ["41200"]
export const slc_Klang_TmnSriAndalas = [
"Taman Sri Andalas", "Taman Indah", "Taman Andalas Permai", "Taman Desa Utama", "Taman Klang Jaya", "Taman Desawan",
"Kawasan 3"];


export const postcode_Klang_Kws1_2 = ["41000"];
export const slc_Klang_Kws1_2  = [
"Kawasan 1", "Kawasan 2",
"Taman Kampung Medan", "Taman Sri Istana", "Kampung Jawa", "Kampung Pandan", "Taman Shahbandar", "Taman Bukit Jati",
"Taman Alam Shah", "Taman Alam Shah 2", "Taman Seri Mewah", "Taman Bijaya", "Taman Raja Nong",
"Taman Bunga Raya", "Taman Saujana", "Taman Sungai Jati Permai", "Taman Sejati 5", "Taman Saujana Jati",
"Taman Saga", "Taman Saga 1", "Taman Saga 2", "Taman Saga 3", "Taman Saga 4",

"Kampung Datok Dagang","Kampung Bukit Badak","Taman Menegon Indah","Kampung Telok Menegun","Taman Sri Menegong","Taman Maznah",
"Kampung Sungai Kandis",
"Taman Mesra Indah", "Taman Klang Indah", "Taman Emas", "Desa Latania",
"Taman Emas", "Taman Bunga Ros", "Taman Mewah Baru", "Taman Sentosa Utama", "Taman Mewah Jaya", "Taman Mesra", "Taman Indah",
"Taman Kandis Permai", "Taman Seri Bahagia", "Taman Sentosa Perdana", "Taman Sejahtera"

];


export const postcode_Klang_Parklands_ = ["41200"];
export const slc_Klang_Parklands = [
"Bandar Parklands", "Bandar Bukit Tinggi 3", "Bayuemas", "Bandar Bestari"];

export const postcode_Klang_BdrBotanik = ["41200"];
export const slc_Klang_BdrBotanik = [
"Bandar Botanik", "KS 07", "Ambang Botanic"];


export const postcode_Klang_BktTinggi = ["41200"];
export const slc_Klang_BktTinggi = [
"Bandar Bukit Tinggi", "Bandar Bukit Tinggi 1", "Bandar Bukit Tinggi 2"];


export const postcode_Klang_TmnBayuPerdana_ChiLiung = ["41200"];
export const slc_Klang_TmnBayuPerdana_ChiLiung = [
"Taman Bayu Perdana", "Taman Chi Liung", "Taman Palm Grove", "Taman Petaling Indah", "Taman Selatan", "Taman Suria",
"Taman Bayu Emas", "Southern Park"];


export const postcode_Klang_Kws6_7_TmnGembira = ["41100"];
export const slc_Klang_Kws6_7_TmnGembira = [
"Kawasan 6", "Kawasan 7",
"Taman Gembira",
"Teluk Gadong", "Taman Teluk Pulai", "Taman Kota Jaya", "Taman Teluk Pulai Indah", "Taman Wangi",
"Taman Sri Delek", "Kampung Delek", "Kampung Sireh", "Kampung Delek Kanan", "Kampung Sungai Udang", "Taman Aneka Baru",
"Taman Seri Batik", "Taman Sri Pesona", "Taman Melawis",

];


export const postcode_Klang_Kws1516 = ["41300"];
export const slc_Klang_Kws1516 = [
"Kawasan 15", "Kawasan 16", "Taman Bukit Kuda", "Taman Submmit", "Bukit Kuda Height", "Taman Aman",
"Kampung Bukit Kuda", "Kampung Kuantan", "Taman Intan", "Batu Tiga"];

export const postcode_Klang_Kws17to19_TmnEngAnn= ["41150", "41400"];
export const slc_Klang_Kws17to19_TmnEngAnn = [
"Taman Eng Ann", "Taman Berkeley", "Bandar Baru Klang",
"Kawasan 17", "Kawasan 18", "Kawasan 19",
"Kampung Sungai Pinang Dalam", "Taman Bunga Melor", "Taman Jernih", "Sungai Pinang", "Taman Kim", "Taman Meru Selatan",
"Batu 2 1/4", "Taman Meru", "Kampung Sungai Pinang Dalam", "Taman Sri Pinang",
"Taman Bukit Intan",
];

export const postcode_Klang_Meru = ["41050"];
export const slc_Klang_Meru = [
"/meru/", "Aman Perdana"];

export const postcode_Klang_BdrBukitRaja = ["42100"];
export const slc_Klang_BdrBukitRaja = [
"Bandar Bukit Raja", "Taman Klang Utama", "Mutiara Bukit Raja", "Mutiara Bukit Raja 2"];

export const postcode_Klang_RantauPanjang= ["42000"];
export const slc_Klang_RantauPanjang = [
"Batu 4", "Kampung Rantau Panjang"];



export const postcode_KualaKubuBaru = ["44000", "44010", "44020", "44110"];

// Shah Alam
export const postcode_SA_Sek1to8 = ["46000", "46050", "46200"];
export const slc_SA_Sek1to8 = [
"seksyen 1", "section 1",
"seksyen 2", "section 2",
"seksyen 3", "section 3",
"seksyen 4", "section 4",
"seksyen 5", "section 5",
"seksyen 6", "section 6",
"seksyen 7", "section 7", "I-City",
"seksyen 8", "section 8"];

export const postcode_SA_Sek9to14 = ["46000", "46050", "46200"];
export const slc_SA_Sek9to14 = [
"seksyen 9", "section 9",
"seksyen 10", "section 10",
"seksyen 11", "section 11",
"seksyen 12", "section 12",
"seksyen 13", "section 13", "D'kayangan",
"seksyen 14", "section 14",
];

export const postcode_SA_Sek9to13 = ["46000", "46050", "46200"];
export const slc_SA_Sek15to24 = [
"seksyen 15", "section 15",
"seksyen 16", "section 16",
"seksyen 17", "section 17", "Kampung Padang Jawa",
"seksyen 18", "section 18",
"seksyen 19", "section 19",
"seksyen 20", "section 20",
"seksyen 21", "section 21",
"seksyen 22", "section 22",
"seksyen 23", "section 23",
"seksyen 24", "section 24",
];
export const postcode_SA_Sek25_343536 = ["40400", "40460", "40470"];
export const slc_SA_Sek25_343536 = [
"seksyen 25", "section 25", "Taman Sri Muda",
"seksyen 34", "section 34",
"seksyen 35", "section 35", "Alam Impian",
"seksyen 36", "section 36", "Kampung Sungai Kandis",
];
export const postcode_SA_Sek26to28 = [];
export const slc_SA_Sek26to28 = [
"seksyen 26", "section 26", "Taman Bukit Saga", "Hicom Industrial Estate",
"seksyen 27", "section 27", "Taman Bunga Negara",
"seksyen 28", "section 28", "Taman Alam Megah",
];
export const postcode_SA_Sek29to33 = ["46060"];
export const slc_SA_Sek29to33 = [
"seksyen 29", "section 29", "Kampung Lombong",
"seksyen 30", "section 30", "Kampung Jln Kebun",
"seksyen 31", "section 31", "Kota Kemuning",
"seksyen 32", "section 32", "Bukit Rimau",
"seksyen 33", "section 33", "Taman Alam Indah"
];
export const postcode_SA_U1_2_8 = ["40150"];
export const slc_SA_U1_2_8 = [
"u 8", "seksyen u8", "U8 Shah Alam", "Bukit Jelutong", "Kampung Lombong",
"u 2", "seksyen u1", "U2 Shah Alam", "Taman TTDI Jaya",
"u 1", "seksyen u1", "U1 Shah Alam", "Glenmarie Golf And Country Club", "Kawasan Perindustrian Temasya",
];
export const postcode_SA_U3to7 = ["46000", "46050", "46200"];
export const slc_SA_U3to7 = [
"u 3", "seksyen u3", "U3 Shah Alam", "Taman Subang Perdana",
"u 4", "seksyen u4", "U4 Shah Alam",
"u 5", "seksyen u5", "U5 Shah Alam", "Bandar Pinggiran Subang", "Taman Nusa Subang", "Subang Bestari", "Subang Impian",
"u 6", "seksyen u6", "U6 Shah Alam", "Kampung Melayu Subang", "Desa Subang Permai",
"u 7", "seksyen u7", "U7 Shah Alam", "Kampung Subang Baru"
];
export const postcode_SA_U9_10_15_16 = ["40160"];
export const slc_SA_U9_10_15_16 = [
"u 9", "seksyen u9", "U9 Shah Alam", "Cahaya SPK", "Sunway Kayangan", "Kayangan Heights",
"u 10", "seksyen u10", "U10 Shah Alam", "Sunway Alam Suria", "Puncak Perdana", "Alam Budiman", "Perdana Heights",
"Taman Sandaran Permai", "Taman Bukit Sandaran", "Bandar Nusa Rhu", "Taman Puncak Perdana", "Subang Impian", "Taman Bukit Tengku",
"u 15", "seksyen u15", "U15 Shah Alam",
"u 16", "seksyen u16", "U16 Shah Alam", "Denai Alam", "Taman Bukit Subang",
];
export const postcode_SA_U11to14 = ["40170"];
export const slc_SA_U11to14 = [
"u 11", "seksyen u11", "U11 Shah Alam", "Bukit Bandaraya",
"u 12", "seksyen u12", "U12 Shah Alam", "Cahaya Alam",
"u 13", "seksyen u13", "U13 Shah Alam", "Setia Alam", "Setia Eco-park", "Alam Nusantara",
"u 14", "seksyen u14", "U14 Shah Alam",
];
export const postcode_SA_U17to20 = ["40160"];
export const slc_SA_U17to20 = [
"u 17", "seksyen u17", "U17 Shah Alam", "Kampung Merbau Sempak",
"u 18", "seksyen u18", "U18 Shah Alam", "Kampung Paya Jaras Dalam", "Kampung Paya Jaras", "Kampung Paya Jaras Tengah", "Kampung Paya Jaras Hulu",
"u 19", "seksyen u19", "U19 Shah Alam",
"u 20", "seksyen u20", "U20 Shah Alam", "Kampung Sungai Pelong", "Kampung Baru Sungai Buloh", "Bukit Rahman Putra"
];

// Petaling Jaya
export const postcode_PJ_Sek1234_51_18_Pjs123456 = ["46000", "46050", "46150"];
export const slc_PJ_Sek1234_51_18_Pjs123456 = [
  "seksyen 1", "seksyen 1a", "sekyen 1", "seksyen 1 petaling jaya", "pj old town",
  "seksyen 2 petaling jaya", "seksyen 2", "pjs 2",
  "seksyen 3 petaling jaya", "seksyen 3", "pjs 3",
  "seksyen 4 petaling jaya", "seksyen 4", "pjs 4",
  "seksyen 51 petaling jaya", "seksyen 51", "pjs 51",
  "seksyen 18 petaling jaya", "seksyen 18", "pjs 18", "taman kanagapuram",
  "taman petaling utama", "psj 1",
  "PJ Seksyen 2C - 2D", "taman dato harun",
  "Taman Medan", "Taman Medan Baru",
  "Taman Sri Manja", // PSJ 4
  "Taman Desaria", "pjs 5",
  "Kampung Lindungan", "pjs 6"
];
export const postcode_PJ_Sek5_52_678910 = ["46000", "46050", "46200"];
export const slc_PJ_Sek5_52_678910 = [
  "seksyen 5", "seksyen 5 petaling jaya", "bukit gasing",
  "seksyen 52", "seksyen 52 petaling jaya",
  "seksyen 6", "seksyen 6 petaling jaya",
  "seksyen 7", "seksyen 7 petaling jaya",
  "seksyen 8", "seksyen 8 petaling jaya",
  "seksyen 9", "seksyen 9 petaling jaya",
  "seksyen 10", "seksyen 10 petaling jaya",
  "seksyen 11", "seksyen 11 petaling jaya",
  "seksyen 12", "seksyen 12 petaling jaya",
];

export const postcode_PJ_Sek51A_13141617_17A_19202122 = [ "46100", "46200", "46300", "46350", "46400"];
export const slc_PJ_Sek51A_13141617_17A_19202122 = [
  "seksyen 51a", "seksyen 51a petaling jaya",
  "Seksyen 13", "seksyen 13 petaling jaya",
  "seksyen 14", "seksyen 14 petaling jaya",
  "seksyen 16", "seksyen 16 petaling jaya",
  "seksyen 17", "seksyen 17 petaling jaya",
  "seksyen 17a", "seksyen 17a petaling jaya",
  "seksyen 19", "seksyen 19 petaling jaya",
  "seksyen 20", "seksyen 20 petaling jaya", "Taman Paramount", "Paramount Garden",
  "seksyen 21", "seksyen 21 petaling jaya", "Sea Park",
  "seksyen 22", "seksyen 22 petaling jaya",
];
export const postcode_PJ_Ss1_3_89_9a_10 = ["47300", "47301"];
export const slc_PJ_Ss1_3_89_9a_10 = [
  "Ss 1", "Kampung Tunku",
  "ss 3", "Taman Universiti",
  "ss 8", "Sungai Way Free Trade Industrial Zone",
  "ss 9", "Sungai Way",
  "ss 9a",
  "ss 10",
];
export const postcode_PJ_KelanaJaya_Ss4567_11 = "47301";
export const slc_PJ_KelanaJaya_Ss4567_11 = [
  "Ss 4", "Jalan Bahagia",
  "ss 5",
  "ss 6",
  "ss 7", "SS7",
  "ss 11",
];
export const postcode_PJ_Ss2_20to26 = ["47300", "47301", "47400"];
export const slc_PJ_Ss2_20to26 = [
  "SS 2",
  "ss 20", "Damansara Kim",
  "ss 21", "Damansara Utama",
  "ss 22", "ss 22a", "Damansara Jaya",
  "ss 23", "Taman Sea",
  "ss 24", "Taman Megah",
  "ss 25", "Taman Mayang Jaya",
  "ss 26", "Taman Mayang",
];
export const postcode_PJ_AraDamansara = "47301";
export const slc_PJ_AraDamansara = [
  "Pju 1", "Pju 1a",
  "Ara Damansara",
  // "/ara\sdamansara/", // NOTE: regex to match with the ara damansara
  "Aman Suria", "Kampung Cempaka", "Dataran Prima", "Taman Putra Damai"
];
export const postcode_PJ_Tropicana = "47410";
export const slc_PJ_Tropicana = [
  "Tropicana",
  "Tropicana Indah",
  "Sunway Damansara",
  "Sunway Rymba Hills",
];
export const postcode_PJ_Pju7_8 = ["47810", "47820"];
export const slc_PJ_Pju7_8 = [
  "Damansara Perdana",
  "Mutiara Damansara",
];
export const postcode_PJ_Pju10 = "47830";
export const slc_PJ_Pju10 = [
  "Damansara Damai",
  "Saujana Damansara"
];
// Priority 7: Bandar Sunway
export const postcode_BandarSunway = ["46150", "47500"];
export const slc_BandarSunway = [
  "Bandar Sunway", "Bandar Sri Subang", "Taman Subang Indah",
  "Pjs 7",
  "Pjs 8",
  "Pjs 9",
  "Pjs 10",
];

export const postcode_PJ = ["46000", "46050", "46100", "46150", "46200", "46300", "46350", "46400", "46506", "46547", "46549", "46551", "46564", "46582", "46598",
 "46662", "46667", "46668", "46672", "46675", "46700", "46710", "46720", "46730", "46740", "46750", "46760", "46770", "46780", "46781", "46782", "46783", "46784",
 "46785", "46786", "46787", "46788", "46789", "46790", "46791", "46792", "46793", "46794", "46795", "46796", "46797", "46798", "46799", "46800", "46801", "46802",
 "46803", "46804", "46805", "46806", "46860", "46870", "46960", "46962", "46964", "46966", "46968", "46970", "46972", "46974", "46976", "46978", "47300", "47301",
 "47307", "47308", "47400", "47410", "47500", "47800", "47810", "47820", "47830" ];

export const portcode_PortKlang = ["42000", "42009", "42920"];
export const slc_PortKlang = [
"Taman Suria", "Taman Bayu Emas" // Under Tmana Bayu Perdana (Klang)
];

// Puchong
export const postcode_Puchong = ["47100", "47110", "47120", "47130", "47140", "47150", "47160", "47170", "47180", "47190"];
export const slc_Puchong_BdrKinrara = [
  "Bandar Kinrara", "Taman Damai Utama",
  "Bandar Kinrara 1", "Bandar Kinrara 2", "Bandar Kinrara 3",
  "Bandar Kinrara 4", "Bandar Kinrara 5", "Bandar Kinrara 6",
  "Bandar Kinrara 7", "Bandar Kinrara 8", "Bandar Kinrara 9",
  "Taman Bukit Kinrara", "Taman Puncak Kinrara",
  "Taman Perindustrian Kinrara"
];
export const slc_Puchong_TmnKinrara = [
  "Taman Kinrara", "Taman Kinrara Seksyen 1", "Taman Kinrara Seksyen 2", "Taman Kinrara Seksyen 3",
  "Taman Kinrara Seksyen 4", "Taman Kinrara Seksyen 5",
  "Kampung Desa Kuchai", "Taman Bukit Kuchai", "Aman Sari", "Taman Tenaga",
];
export const slc_Puchong_BdrPuchongJaya = [
  "Bandar Puchong Jaya",
];
export const slc_Puchong_BdrPuteriPuchong = [
  "Bandar Puteri Puchong", "Taman Wawasan",
  "Bandar Puteri", "Batu 13 1/2", "Taman Puchong Hartamas 1", "Taman Puchong Hartamas 2",
  "Lake Edge Puchong", "Taman Mutiara Puchong", "Pusat Bandar Puchong",
  "Kampung Pasir Bahru Puchong", "Kampung Pasir Puchong", "Taman Perindustrian Pusat Bandar Puchong",
  "Taman Sri Puchong", "Taman Perindustrian Puchong", "Taman Perindustrian Puchong 5&6",
];

export const slc_Puchong_TmnPuchongPerdana = [
  "Taman Puchong Perdana", "Taman Puchong Prima", "Lake View Homes", "Taman Puchong Indah",
  "Desa Impiana", "Taman Puchong Tekali",
  "Taman Tasik Prima", "Lake Vista", "Taman Dahlia", "Taman Puchong Permai", "Taman Puchong Intan",
  "Kampung Seri Aman", "Kampung Seri Aman Hilir", "Kampung Seri Aman Tengah", "Kampung Seri Aman Luar",
  "Kampung Seri Aman Bestari", "Kampung Seri Andalas", "Kampung Sri Langkas", "Kampung Bersatu", "Kampung Seri Puchong",
  "Kampung Tengah", "Kampung Perahu", "Kampung Kuala Sungai Baru"
];

export const slc_Puchong_TmnPutraPrima = [
  "Taman Putra Prima", "Taman Meranti Jaya", "D'island",
  "Taman Meranti Permai", "Taman Tasik Puchong", "Taman Desa Ayer Hitam",
  "Taman Putra Impiana", "Taman Desiran Bayu", "Taman Mas Sepang", "Taman Mas"
];

export const slc_Puchong_TmnPutraPerdana = [
  "Taman Putra Perdana", "Putra Perdana", "Taman Aman Putra", "Bandar Nusa Putra", "La Cottage Taman Putra Perdana",
];

export const slc_Puchong_BdrBukitPuchong = [
  "Bandar Bukit Puchong", "Taman Puchong Utama", "Bandar Puchong Utama",
  "Puchong Perdana", "Taman Perindustrian Puchong Utama", "Kampung Baru Puchong",
  "Kawasan Perniagaan Bandar Puchong Utama", "Taman Sri Puchong Batu 14", "Bandar Bukit Puchong 2", "Puchong Utama Court 1"
];

export const slc_Puchong_Bdr16Sierra = [
  "Bandar 16 Sierra", "D'alpinia", "Kampung Batu Sembilan", "Taman Meranti Indah", "Kampung Pulau Meranti",
];


export const postcode_Rawang = ["48000", "48010", "48020", "48050", "48100", "48300"];;

// Selayang
export const slc_Selayang = [
  "Taman Amansiara","Andari Townvilla","Templer Hills","Taman Pinggiran Templer", "Perdana Residence",
  "Puncak Templer", "Dataran Templer", "Taman Selayang Segar", "Taman Selayang Baru", "Kawasan Industri Selayang Indah",
  "Kawasan Industri Taman Selayang Baru", "Baru Selayang", "Taman Selayang Mutiara", "Selayang Baru", "Kampung Kok Doh",
  "Taman Selayang", "Taman Selayang Sejati", "Kampung Makhkota", "Taman Selayang Satu Pkns", "Dataran Selayang",

  "Idaman Hills", "Taman Prima Selayang", "Taman Bukit Idaman",
  "Taman Selayang Jaya", "Taman Bidara", "Prima Selayang", "Taman Selayang Utama", "Taman Selayang Utama Industrial Park",
  "Taman Paragon Utama", "Taman Selayang Bahagia", "Taman Selayang Indah", "Taman Seri Melati", "Taman Desa Bakti",
  "Kampung Selayang Pandang", "Taman Sri Murni", "Taman Wilayah Selayang", "Pusat Bandar Utara Selayang", "Taman Batu View",
  "Sri Utara Kipark", "Taman Residensi Kipark", "Laman Residen Kipark",
];


// Broga, Uni Nottingham
export const slc_Smyh_Broga = [
  "Taman Tasik Semenyih", "Broga", "Tiara East"
];
// Bandar Tasik Kesuma, Bandar Rinching, Taman Pelangi
export const slc_Smyh_BdrTasikKesuma_BdrRinching_SetiaEcoHill= [
  "Bandar Sri Kesuma", "Setia EcoHill",
  "Taman Pelangi Semenyih", "Taman Pelangi Semenyih 2", "Kampung Rinching Ulu", "Taman Rinching Indah", "Kampung Rinching Tengah",
  "Kampung Sungai Rinching",
  "Bandar Rinching Seksyen 1", "Bandar Rinching Seksyen 2", "Bandar Rinching Seksyen 3", "Bandar Rinching Seksyen 4",
  "Bandar Rinching Seksyen 5", "Bandar Rinching Seksyen 6", "Taman Pkns Beranang", "Precint 3",
];
// Bandar Teknologi Kajang, Taman Dusun Jaya, Bandar Sunway Semenyih
export const slc_Smyh_BdrTekKjg= [
  "Bandar Teknologi Kajang", "Bandar Sunway Semenyih",
  "Taman Anggerik Emas", "Taman Seri Baiduri", "Taman Baiduri Jaya", "Taman Harmoni", "Hillpark 2",
  "Seksyen 5 Bandar Teknologi Kajang",
  "Taman Desa Mewah", "Taman Semenyih Idaman", "Taman Heiw Piow", "Taman Sri Tanjung", "Kampung Tanjung", "Kampung Sentosa",
  "Taman Semenyih Indah", "Taman Semenyih Mewah", "Taman Semenyih Mewah Fasa 2", "Taman Semenyih Mewah Fasa 3", "Taman Semenyih Mewah Fasa 4",
  "Taman Kenanga", "Taman Bukit Semenyih", "Taman Jaya", "TAMAN SRI SEMENYIH", "Taman Paling Jaya",
  "Kampung Baru Semenyih", "Taman Bunga Raya", "Taman Permai", "Taman Dusun Jaya", "Kampung Sungai Sireh",
  "Pekan Semenyih", "Kawasan Perindustrian LEKAS 18", "Taman Kim Lai", "Taman Semenyih Sentral", "Taman Seri Mawar",
  "Technology Park", "Kawasan Perindustrian Sungai Purun", "Taman Dalma", "Kampung Sungai Purun"
];

export const postcode_SerbakBernam=["45200", "45207", "45209"];
// Seri Kembangan
// Mines Wellness City, Taman Sungai Besi Indah, Bukit Gita Bayu
export const slc_SrKmbgn_SerdangRaya_SgBesiIndah= [
  "Mines Wellness City", "Taman Sungai Besi Indah", "Taman Serdang Raya", "Taman Serdang Perdana",
  "Taman Putera Indah", "Taman Muhibbah",
  "Selangor Turf Club", "Taman Juara Jaya", "Taman Bukit Belimbing", "Taman Harmoni Indah", "Taman Sungai Besi Indah 2",
  "One South"
];
export const slc_SrKmbgn_BdrPutraPermai_Equine= [
  "Lestari Perdana", "Bandar Putra Permai", "Lestari Putra",
  "Pusat Bandar Putra Permai", "Taman Desaminium", "Lestari Mansions", "Taman Equine", "Taman Putra Permai",
  "Taman Pinggiran Putra", "Le Putra Avenue", "Putra Walk", "Taman Dato Demang", "Sek 2 Seri Kembangan",
  "Sovereign", "Taman Lestari Permai", "Alam Sanctuary @ Taman Alam Putra", "Taman Prima Tropika",
  "The Atmosphere", "Kota Perdana", "Taman Kota Perdana"
];

export const slc_SrKmbgn_PckJalil= [
  "Puncak Jalil", "Taman Puncak Jalil",
  "Puj 1", "Puj 2", "Puj 3", "Puj 4", "Puj 5", "Puj 6", "Puj 7", "Puj 8", "Puj 9", "Kinrara Square",
];
// Taman Bukit Serdang, Kampung Baru Sri Kembangan
export const slc_SrKmbgn_BktSerdang= [
  "Taman Bukit Serdang", "Taman Sri Serdang",
  "Kampung Baru Seri Kembangan",
  "The Park", "Taman Serdang Utama",
  "Serdang Jaya", "Taman Serdang Jaya", "Taman Universiti Indah",
  "Taman Jinma", "Sun Garden Villa", "Jia Residence", "Serdang Height", "Serdang Heights", "Cahaya Villa",
  "Pusat Perdagangan Seri Kembangan", "Kawasan Perindustrian Seri Kembangan", "Mardi",

  "Kampung Baru Seri Kembangan 1", "Kampung Baru Seri Kembangan 2", "Kampung Baru Seri Kembangan 3","Kampung Baru Seri Kembangan 4",
  "Kampung Baru Seri Kembangan 5","Kampung Baru Seri Kembangan 6","Kampung Baru Seri Kembangan 7","Kampung Baru Seri Kembangan 8",
  "Kampung Baru Seri Kembangan 9","Kampung Baru Seri Kembangan 10","Kampung Baru Seri Kembangan 11","Kampung Baru Seri Kembangan 12",
];

export const postcode_ShahAlam = ["40000", "40100", "40150", "40160", "40170", "40200", "40300", "40400", "40450", "40460", "40470", "40500", "40502", "40503",
"40505", "40512", "40517", "40520", "40529", "40542", "40548", "40550", "40551", "40560", "40564", "40570", "40572", "40576", "40578", "40582", "40590", "40592",
"40594", "40596", "40598", "40604", "40607", "40608", "40610", "40612", "40620", "40622", "40626", "40632", "40646", "40648", "40660", "40664", "40670", "40672",
"40673", "40674", "40675", "40676", "40680", "40690", "40700", "40702", "40704", "40706", "40708", "40710", "40712", "40714", "40716", "40718", "40720", "40722",
"40724", "40726", "40728", "40730", "40732", "40800", "40802", "40804", "40806", "40808", "40810", "40990"];

// Subang Jaya
export const postcode_SubangJaya = ["47500", "47507", "47600", "47610", "47620", "47630", "47640", "47650"];
// Speical: USJ areas is a subset of SubangJaya:
export const postcode_USJ = ["47600", "47610", "47620", "47630", "47640"];
export const slc_USJ =["Usj 2","UEP Subang Jaya","Usj 3","Usj 4","Usj 5","Usj 6","Usj 7","Usj 8","Usj 9","Taipan Business Centre","Usj 11","Usj 12",
"Usj 13","Usj 14","USJ 15","Usj 16","Usj 17","Usj 18","Usj 19","Usj 20","Usj 21","Usj 22","Usj 23","Usj 24","Usj 25","One City","Usj 26","Usj 27"];
export const postcode_Ss12to19 = "47500";
export const slc_Ss12to19 =["Ss 12","Ss 13","Ss 14","Ss 15","Ss 16","Ss 17","Ss 18","Ss 19"];
export const postcode_PutraHeights = "47650";
export const slc_PutraHeights = ["Putra Heights","Putra Indah","Laman Putra","Putra Permai"];
export const postcode_TmnSubangMewah = "47500";
export const slc_TmnSubangMewah = ["Usj 1","Taman Subang Mewah","Taman Perindustrian Usj 1","USJ One Park","Subang Light Industrial Park",
"Taman Perindustrian Subang","Taman Indah Subang Uep","Sungai Penaga Industrial Park","Kampung Kenangan"];

export const postcode_SgBuloh = ["47000", "47100"];
export const postcode_TelokPanglimaGarang = ["42425", "42500", "42507", "42509"];

export const citySelangor = [
  "❌Alam Budiman", "⚠️Alam Impian", "❌Ampang", "⚠️Ampang Jaya", "⚠️Ampang Point", "✅Ara Damansara", "✅Balakong", "✅Bandar 16 Sierra",
  "✅Bandar Baru Bangi", "✅Bandar Baru Kajang", "✅Bandar Botanik", "⚠️Bandar Bukit Puchong", "✅Bandar Kinrara", "✅Bandar Mahkota Cheras", "✅Bandar Puchong Jaya",
  "⚠️Bandar Puteri", "⚠️Bandar Puteri Puchong", "⚠️Bandar Putra Permai", "✅Bandar Sunway", "⚠️Bandar Tasik Kesuma", "✅Bandar Teknologi Kajang",
  "✅Bandar Tun Hussein Onn", "Bandar Utama", "✅Bangi", "✅Banting", "✅Batang Kali", "⚠️Batu 9", "✅Batu Arang", "✅Batu Caves", "✅Beranang", "✅Bestari Jaya",
  "✅Broga", "⚠️Bukit Antarabangsa", "✅Bukit Jelutong", "⚠️Bukit Makhota", "⚠️Bukit Raja", "Bukit Rotan", "✅Bukit Serdang", "Bukit Tinggi", "✅Cheras", "✅Cyberjaya",
  "❌Damansara", "✅Damansara Damai", "⚠️Damansara Jaya", "❌Damansara Perdana", "✅Dengkil", "✅Gombak", "Hulu Klang", "✅Hulu Langat", "✅Jenjarom", "✅Jeram",
  "✅Kajang", "❌Kajang Perdana", "⚠️Kajang Utama", "⚠️Kampung Tunku", "✅Kapar", "✅Kelana Jaya", "Kepong", "✅Kerling", "✅Klang", "❌Klang Jaya", "❌Klang Utama",
  "❌KLIA", "✅Kota Damansara", "⚠️Kota Kemuning", "✅Kuala Kubu Baru", "✅Kuala Selangor", "✅Kuang", "✅Kundang", "✅Meru", "Mutiara Damansara",
  "❌Pandan Indah", "✅Petaling Jaya", "✅Port Klang", "✅Puchong", "✅Pulau Carey", "✅Pulau Indah", "✅Pulau Ketam", "✅Puncak Alam", "✅Puncak Jalil",
  "⚠️Puncak Perdana", "✅Putra Heights", "❌Putrajaya, Selangor", "✅Rasa", "✅Rawang", "✅Sabak Bernam", "⚠️Saujana Impian", "U16, Shah Alam", "✅Sekinchan", "⚠️Seksyen 17, Petaling Jaya",
  "⚠️Seksyen 19, Shah Alam", "⚠️Seksyen 7, Shah Alam", "⚠️Seksyen 9, Shah Alam", "✅Selayang", "✅Semenyih", "✅Sepang", "✅Serdang", "✅Serendah", "✅Seri Kembangan", "✅Setia Alam", "✅Shah Alam",
  "Sri Damansara", "❌SS 19", "⚠️SS 2", "✅Subang", "✅Subang Jaya", "✅Sungai Ayer Tawar", "✅Sungai Besar", "✅Sungai Buloh", "❌Sungai Chua", "⚠️Sungai Long",
  "✅Sungai Pelek", "⚠️Taman Alam Megah", "⚠️Taman Bukit Mewah", "Taman Gembira", "✅Taman Kinrara", "✅Taman Putra Perdana", "❌Taman Sentosa", "⚠️Taman Sri Andalas",
  "❌Taman Sri Serdang", "⚠️Taman Subang Mewah", "✅Tanjong Karang", "✅Tanjung Sepat", "✅Telok Panglima Garang", "✅Tropicana", "⚠️Ukay Perdana", "✅USJ"]; //127

export const citySelangorId = [
  "sgSAU10AlamBudiman", "sgSASec35", "sgAmpg", "sgAmpgJ", "sgAmpgPoint", "sgPJU1A", "sgBalakong", "sgB16Sierra",
  "sgBBBgi", "sgBBKjg", "sgBBotanik", "sgBBktPchg", "sgBKinrara", "sgBMakhotaCheras", "sgBPchgJ",
  "sgBPuteri", "sgBPuteriPchg", "sgBPutraPermai", "sgPJS7891011", "sgBTKesuma", "sgBTekKjg",
  "sgBTHusseinOnn", "sgPJU6", "sgBgi", "sgBntg", "sgBtgKali", "sgBatu9", "sgBArg", "sgBCv", "sgBerang", "sgBestariJ",
  "sgBroga", "sgBktAntarabangsa", "sgSAU8", "sgBktMakhota", "sgBktRaja", "sgBktRotan", "sgBSerdang", "sgBktTinggi", "sgChs", "sgCJ",
  "sgDman", "sgPJU10", "sgSS22", "sgPJU8", "sgDngkl", "sgGmbk", "sgHKlg", "sgHLgt", "sgJenjarom", "sgJeram",
  "sgKjg", "sgKjgPerdana", "sgKjgUtama", "sgSS1", "sgKpar", "sgKJ", "sgKepg", "sgKerling", "sgKlg", "sgKlgJaya", "sgKlgUtama",
  "sgKLIA", "sgPJU5", "sgKKmng", "sgKKubuBaru", "sgKSlg", "sgKuang", "sgKundang", "sgMeru", "sgPJU7",
  "sgPandanIndah", "sgPJ", "sgPKlg", "sgPchg", "sgPCarey", "sgPIndah", "sgPKetam", "sgSAU15", "sgPuncakJalil",
  "sgSAU10PuncakPerdana", "sgPHeights", "sgPtraJ", "sgRasa", "sgRwg", "sgSBrnm", "sgSaujImp", "sgSAU16", "sgSekinchan", "sgSek17",
  "sgSASec19", "sgSASec7", "sgSASec9", "sgSlyg", "sgSmyh", "sgSepang", "sgsSerdang", "sgSerendah", "sgSKmbg", "sgStiaA", "sgShA",
  "sgPJU9", "sgSS19", "sgSS2", "sgSbg", "sgSbgJ", "sgSgAyerTawar", "sgSgBesar", "sgSgBloh", "sgSgChua", "sgSgLong",
  "sgSgPelek", "sgSASec27", "sgTBMewah", "sgTGembira", "sgTKinrara", "sgTPutraPerdana", "sgTSentosa", "sgTSAndalas",
  "sgTSriSerdang", "sgUSJ1", "sgTnjKarang", "sgTnjSepat", "sgTPGrg", "sgPJU3", "sgUkay", "sgUSJ"];

// Ref: https://worldpostalcode.com/malaysia/selangor
// SKIPPED: Subang Airport (47200)
export const citySelangorObj = [
  // {id:"sg",url:["selangor"],name:["Selangor"],slc:[],lc:[],pc:"",pr:'5',st:"sg", co:"MY",oid:""},

  {id:"sgAmpgPoint",url:["bandar-baru-ampang-pandan-indah","ampang-point", "pandan-indah-ampang", "bandar-baru-ampang", "taman-saga-ampang"],
  name:["Ampang Point, Pandan Indah, Bandar Baru Ampang, Taman Saga", "Ampang Point", "Pandan Indah", "Bandar Baru Ampang", "Taman Saga"],
  slc:slc_Ampg_TmnDagang_PandanIndah,lc:["Ampang", "Ampang Jaya"],pc:"68000",pr:'1',st:"sg", co:"MY",oid:"sgAmpgPoint"},
  {id:"sgBktAntarabangsa",url:["bukit-antarabangsa-ukay-perdana-kemensah", "bukit-antarabangsa", "ukay-perdana", "kemensah"],
  name:["Bukit Antarabangsa, Ukay Perdana, Kemensah", "Bukit Antarabangsa", "Ukay Perdana", "Kemensah"],
  slc:slc_Ampg_Ukay_BktAntarabangsa,lc:["Ampang", "Ampang Jaya"],pc:"68000",pr:'1',st:"sg", co:"MY",oid:"sgBktAntarabangsa"},
  {id:"sgUkay",url:["ukay-height-taman-tar-taman-bukit-indah","ukay-heights","taman-tar","taman-bukit-indah","taman-kosas"],
  name:["Ukay Heights, Taman TAR, Taman Bukit Indah, Taman Kosas","Ukay Heights","Taman TAR","Taman Bukit Indah","Taman Kosas"],
  slc:slc_Ampg_UkayHeights_TmnKosas_TmnBktIndah,lc:["Ampang", "Ampang Jaya"],pc:"68000",pr:'1',st:"sg", co:"MY",oid:"sgUkay"},// ukay-height-taman-tar-taman-bukit-indah
  {id:"sgAmpg",url:["ampang-jaya"],name:["Ampang Jaya"],slc:"",lc:["Ampang", "Ampang Jaya"],pc:"68000",pr:'4',st:"sg", co:"MY",oid:"sgAmpg"},

  {id:"sgBalakong",url:["balakong"],name:["Balakong"],slc:slc_Balakong,lc:["Balakong", "Seri Kembangan", "Cheras", "Kajang"],pc:"43300",pr:'2',st:"sg", co:"MY",oid:"sgBalakong"},
  {id:"sgBBBgi",url:["bandar-baru-bangi"],name:["Bandar Baru Bangi"],slc:"",lc:"Bandar Baru Bangi",pc:"43650",pr:'4',st:"sg", co:"MY",oid:"sgBBBgi"},
  // {id:"sgBBKjg",url:["bandar-baru-kajang"],name:["Bandar Baru Kajang"],slc:"",lc:"Bandar Baru Kajang",pc:"43000",pr:'4',st:"sg", co:"MY",oid:""},
  {id:"sgPJS7891011",url:["bandar-sunway"],name:["Bandar Sunway"],slc:slc_BandarSunway,lc:["Subang Jaya", "PJ"],pc:postcode_BandarSunway,pr:'2',st:"sg", co:"MY",oid:"sgPJS7891011"},

  {id:"sgBgi",url:["bangi"],name:["Bangi"],slc:"",lc:"Bangi",pc:"43600 ",pr:'4',st:"sg", co:"MY",oid:"sgBgi"},
  {id:"sgBntg",url:["banting"],name:["Banting"],slc:"",lc:"Banting",pc:"42700",pr:'4',st:"sg", co:"MY",oid:"sgBntg"},
  {id:"sgBtgKali",url:["batang-kali"],name:["Batang Kali"],slc:"",lc:"Batang Kali",pc:"44300",pr:'4',st:"sg", co:"MY",oid:"sgBtgKali"},
  {id:"sgBArg",url:["batu-arang"],name:["Batu Arang"],slc:"",lc:"Batu Arang",pc:"48100",pr:'4',st:"sg", co:"MY",oid:"sgBArg"},
  {id:"sgBCv",url:["batu-caves"],name:["Batu Caves"],slc:"",lc:"Batu Caves",pc:"68100",pr:'4',st:"sg", co:"MY",oid:"sgBCv"},
  {id:"sgBerang",url:["beranang"],name:["Beranang"],slc:"",lc:"Beranang",pc:"43700",pr:'4',st:"sg", co:"MY",oid:"sgBerang"},
  {id:"sgBestariJ",url:["bestari-jaya"],name:["Bestari Jaya"],slc:"",lc:"Bestari Jaya",pc:postcode_BatangBerjuntai,pr:'4',st:"sg", co:"MY",oid:"sgBestariJ"},
  {id:"sgBktRotan",url:["bukit-rotan"],name:["Bukit Rotan"],slc:"",lc:"Bukit Rotan",pc:"45700",pr:'4',st:"sg", co:"MY",oid:"sgBktRotan"},
  // Cheras
  {id:"sgBMakhotaCheras",url:["bandar-mahkota-cheras"],name:["Bandar Mahkota Cheras"],slc:slc_Cheras_BdrMahkotaCheras,lc:["Cheras", "Kajang"],pc:"43200",pr:'2',st:"sg", co:"MY",oid:"sgBMakhotaCheras"},
  {id:"sgBTHusseinOnn",url:["bandar-tun-hussein-onn","cheras-mas","cheras-perdana","the-peak"],
    name:["Bandar Tun Hussein Onn, Cheras Mas, Cheras Perdana, The Peak","Cheras Mas","Cheras Perdana","The Peak"],
    slc:slc_Cheras_TunHusseinOnn,lc:["Cheras"],pc:"43200",pr:'2',st:"sg", co:"MY",oid:"sgBTHusseinOnn"},// bandar-tun-hussein-onn
  {id:"sgBatu9",url:["taman-cuepacs-taman-segar-perdana","taman-cuepacs","batu-9-cheras","taman-segar-perdana"],
    name:["Taman Cuepacs, Batu 9, Taman Segar Perdana","Taman Cuepacs","Batu 9, Cheras","Taman Segar Perdana"],
    slc:slc_Cheras_SegarPerdana,lc:["Cheras"],pc:"43200",pr:'2',st:"sg", co:"MY",oid:"sgBatu9"},// taman-cuepacs-taman-segar-perdana
  {id:"sgChs",url:["cheras"],name:["Cheras"],slc:"",lc:"Cheras",pc:postcode_Cheras,pr:'4',st:"sg", co:"MY",oid:"sgChs"},

  {id:"sgCJ",url:["cyberjaya"],name:["Cyberjaya"],slc:"",lc:"Cyberjaya",pc:postcode_Cyberjaya,pr:'4',st:"sg", co:"MY",oid:"sgCJ"},
  {id:"sgDngkl",url:["dengkil"],name:["Dengkil"],slc:"Pekan Dengkil",lc:"Dengkil",pc:postcode_Dengkil,pr:'4',st:"sg", co:"MY",oid:"sgDngkl"},
  {id:"sgGmbk",url:["gombak"],name:["Gombak"],slc:"",lc:"Gombak",pc:"53100",pr:'4',st:"sg", co:"MY",oid:"sgGmbk"},
  {id:"sgHLgt",url:["hulu-langat"],name:["Hulu Langat"],slc:"",lc:"Hulu Langat",pc:"43100",pr:'4',st:"sg", co:"MY",oid:"sgHLgt"},
  {id:"sgJenjarom",url:["jenjarom"],name:["Jenjarom"],slc:"",lc:"Jenjarom",pc:postcode_Jenjarom,pr:'4',st:"sg", co:"MY",oid:"sgJenjarom"},
  {id:"sgJeram",url:["jeram"],name:["Jeram"],slc:"",lc:"Jeram",pc:"45800",pr:'4',st:"sg", co:"MY",oid:"sgJeram"},
  // Kajang
  {id:"sgBktMakhota",url:["bandar-bukit-mahkota-bandar-seri-putra","bandar-bukit-mahkota","bandar-seri-putra"],
  name:["Bandar Bukit Mahkota, Bandar Seri Putra","Bandar Bukit Mahkota","Bandar Seri Putra"],
  slc:slc_Kjg_BdrBktMahkota_BdrSeriPutra,lc:["Kajang"],pc:"43000",pr:'1',st:"sg", co:"MY",oid:"sgBktMakhota"},// "bandar-bukit-mahkota-bandar-seri-putra"
  {id:"sgKjgPrimaSaujnAsaJ",
  url:["prima-saujana-asa-jaya-taman-melor","prima-saujana","asa-jaya","taman-melati-kajang","taman-melor"],
  name:["Prima Saujana, Asa Jaya, Taman Melati, Taman Melor","Prima Saujana","Asa Jaya","Taman Melati","Taman Melor"],
  slc:slc_Kjg_PrimaSaujana,lc:["Kajang"],pc:"43000",pr:'1',st:"sg", co:"MY",oid:"sgKjgUtama"},//"prima-saujana-asa-jaya-taman-melor"
  {id:"sgKjgUtama",
  url:["kajang-utama-taman-bukit-mewah","kajang-utama","taman-bukit-mewah","taman-jasmin"],
  name:["Kajang Utama, Taman Bukit Mewah, Taman Jasmin","Kajang Utama","Taman Bukit Mewah","Taman Jasmin"],
  slc:slc_Kjg_BktMewah_Jasmin_KjgUtama,lc:["Kajang"],pc:"43000",pr:'1',st:"sg", co:"MY",oid:"sgKjgUtama"}, //"kajang-utama-taman-bukit-mewah"
  {id:"sgSaujImp",
    url:["saujana-impian-desa-baru-jelok-impian","saujana-impian","taman-desa-baru","taman-jelok-impian"],
    name:["Saujana Impian , Taman Desa Baru , Taman Jelok Impian","Saujana Impian","Taman Desa Baru","Taman Jelok Impian"],
    slc:slc_Kjg_DesaBaru_SaujanaImpian,lc:["Kajang"],pc:"43000",pr:'1',st:"sg", co:"MY",oid:"sgSaujImp"}, // "saujana-impian-desa-baru-jelok-impian"
  {id:"sgBBKjg",
    url:["sungai-chua-country-heights-sungai-ramal","sungai-chua","sungai-ramal","country-heights"],
    name:["Sungai Chua, Sungai Ramal , Country Heights","Sungai Chua","Sungai Ramal","Country Heights"],
    slc:slc_Kjg_CountryHeights_SgChua,lc:["Kajang"],pc:"43000",pr:'1',st:"sg", co:"MY",oid:"sgBBKjg"}, //sungai-chua-country-heights-sungai-ramal
  {id:"sgSgLong",url:["bandar-sungai-long","taman-desa-budiman"],name:["Bandar Sungai Long, Taman Desa Budiman","Taman Desa Budiman"],slc:slc_Kjg_BdrSgLong,lc:["Kajang"],pc:"43000",pr:'1',st:"sg", co:"MY",oid:"sgSgLong"}, //bandar-sungai-long
  {id:"sgAlmSr",
    url:["alam-sari-taman-tropika","alam-sari","taman-tropika"],
    name:["Alam Sari, Taman Tropika","Alam Sari","Taman Tropika"],
    slc:slc_Kjg_TmnTropikaSetiaAlamsari,lc:["Kajang", "Bandar Baru Bangi", "Bangi"],pc:"43000",pr:'1',st:"sg", co:"MY",oid:"sgBgi"},// "alam-sari-taman-tropika"
  {id:"sgDsPngrnPtr",url:["desa-pinggiran-putra","kampung-sungai-merab"],name:["Desa Pinggiran Putra","Kampung Sungai Merab"],slc:slc_Kjg_DesaPinggiranPutra,lc:["Kajang"],pc:"43000",pr:'1',st:"sg", co:"MY",oid:"sgBktMakhota"}, // "desa-pinggiran-putra"
  {id:"sgKjg",url:["kajang"],name:["Kajang"],slc:"",lc:"Kajang",pc:postcode_Kajang,pr:'4',st:"sg", co:"MY",oid:"sgKjg"},
  {id:"sgKpar",url:["kapar"],name:["Kapar"],slc:"",lc:"Kapar",pc:"42200",pr:'4',st:"sg", co:"MY",oid:"sgKpar"},
  {id:"sgKerling",url:["kerling"],name:["Kerling"],slc:"",lc:"Kerling",pc:"44100",pr:'4',st:"sg", co:"MY",oid:"sgKerling"},
  // Klang
  {id:"sgBktRaja",url:["bandar-bukit-raja","klang-utama"],name:["Bandar Bukit Raja","Klang Utama"],slc:slc_Klang_BdrBukitRaja,lc:["Klang"],pc:"41200",pr:'1',st:"sg", co:"MY",oid:"sgBktRaja"}, //"bandar-bukit-raja-klang-utama"
  {id:"sgBBotanik",url:["bandar-botanik"],name:["Bandar Botanik"],slc:slc_Klang_BdrBotanik,lc:["Klang"],pc:"41200",pr:'1',st:"sg", co:"MY",oid:"sgBBotanik"},
  {id:"sgEngAnnBBKlg",url:["taman-eng-ann","bandar-baru-klang"],name:["Taman Eng Ann","Bandar Baru Klang"],slc:slc_Klang_Kws17to19_TmnEngAnn,lc:["Klang"],pc:"41200",pr:'1',st:"sg", co:"MY",oid:""}, //"taman-eng-ann-bandar-baru-klang"
  {id:"sgMeru",url:["meru","aman-perdana"],name:["Meru, Aman Perdana","Aman Perdana"],slc:slc_Klang_Meru,lc:["Klang"],pc:"41050",pr:'1',st:"sg", co:"MY",oid:"sgMeru"}, // "meru"
  {id:"sgBPuteri",
    url:["taman-sentosa-bandar-puteri","taman-sentosa","bandar-puteri"],
    name:["Taman Sentosa, Bandar Puteri","Taman Sentosa","Bandar Puteri"],
    slc:slc_Klang_TmnSentosa,lc:["Klang"],pc:"41000",pr:'1',st:"sg", co:"MY",oid:"sgBPuteri"}, // "taman-sentosa-bandar-puteri"
  {id:"sgTSAndalas",url:["taman-sri-andalas","klang-jaya"],name:["Taman Sri Andalas, Klang Jaya","Klang Jaya"],slc:slc_Klang_TmnSriAndalas,lc:["Klang"],pc:"41200",pr:'1',st:"sg", co:"MY",oid:"sgTSAndalas"},// "sri-andalas"
  {id:"sgBktKudaKws1516",url:["bukit-kuda"],name:["Bukit Kuda, Kawasan 15-16"],slc:slc_Klang_Kws1516,lc:["Klang"],pc:"41200",pr:'1',st:"sg", co:"MY",oid:"sglg"},
  {id:"sgByPrdnTChLiung",
    url:["bayu-perdana-chi-liung-taman-selatan","taman-bayu-perdana","taman-chi-liung","taman-selatan"],
    name:["Taman Bayu Perdana, Taman Chi Liung, Taman Selatan","Taman Bayu Perdana","Taman Chi Liung","Taman Selatan"],
    slc:slc_Klang_TmnBayuPerdana_ChiLiung,lc:["Klang"],pc:"41200",pr:'1',st:"sg", co:"MY",oid:""}, //"bayu-perdana-chi-liung-taman-selatan"
  {id:"sgBktTgi",url:["bandar-bukit-tinggi"],name:["Bandar Bukit Tinggi"],slc:slc_Klang_BktTinggi,lc:["Klang"],pc:"41200",pr:'1',st:"sg", co:"MY",oid:"sgBBotanik"},
  {id:"sgPrklnd",
    url:["parklands-bayuemas-bandar-bestari","parklands","bayuemas","bandar-bestari"],
    name:["Parklands, Bayuemas, Bandar Bestari","Parklands","Bayuemas","Bandar Bestari"],
    slc:slc_Klang_Parklands,lc:["Klang"],pc:"41200",pr:'1',st:"sg", co:"MY",oid:"sgBBotanik"}, //"parklands-bayuemas-bandar-bestari"
  {id:"sgKws1_2TSagaTMznh",
    url:["taman-saga-taman-maznah","taman-saga-klang","taman-maznah-klang","kawasan-1-2-klang"],
    name:["Taman Saga, Taman Maznah, Kawasan 1-2, Klang","Taman Saga","Taman Maznah","Kawasan 1-2, Klang"],
    slc:slc_Klang_Kws1_2,lc:["Klang"],pc:"41200",pr:'1',st:"sg", co:"MY",oid:""}, // "taman-saga-taman-maznah"
  {id:"sgKRantauPnjg",url:["rantau-panjang","batu-4-klang"],name:["Rantau Panjang, Batu 4","Batu 4, Klang"],slc:slc_Klang_RantauPanjang,lc:["Klang"],pc:"41200",pr:'1',st:"sg", co:"MY",oid:""}, // "rantau-panjang"
  {id:"sgTGembira",
    url:["taman-gembira-sungai-udang-taman-melawis","taman-gembira","kampung-sungai-udang","taman-melawis"],
    name:["Taman Gembira, Kampung Sungai Udang, Taman Melawis","Taman Gembira","Kampung Sungai Udang","Taman Melawis"],
    slc:slc_Klang_Kws6_7_TmnGembira,lc:["Klang"],pc:"41200",pr:'1',st:"sg", co:"MY",oid:""}, // "taman-gembira-sungai-udang-taman-melawis"
  {id:"sgKlg",url:["klang"],name:["Klang"],slc:"",lc:"Klang",pc:"41100",pr:'4',st:"sg", co:"MY",oid:"sgKlg"},

  {id:"sgKKubuBaru",url:["kuala-kubu-bharu"],name:["Kuala Kubu Bharu"],slc:"",lc:"Kuala Kubu Bharu",pc:postcode_KualaKubuBaru,pr:'4',st:"sg", co:"MY",oid:"sgKKubuBaru"},
  {id:"sgKSlg",url:["kuala-selangor"],name:["Kuala Selangor"],slc:"",lc:"Kuala Selangor",pc:"45000",pr:'4',st:"sg", co:"MY",oid:"sgKSlg"},

  {id:"sgPJU10",url:["damansara-damai"],name:["Damansara Damai"],slc:slc_PJ_Pju10,lc:["PJ"],pc:"47830",pr:'2',st:"sg", co:"MY",oid:"sgPJU10"},
  {id:"sgPJU6",url:["bandar-utama"],name:["Bandar Utama"],slc:["Bandar Utama"],lc:["PJ"],pc:"47800",pr:'1',st:"sg", co:"MY",oid:"sgPJU6"},
  {id:"sgPJU1A",url:["ara-damansara"],name:["Ara Damansara"],slc:slc_PJ_AraDamansara,lc:["PJ"],pc:"47301",pr:'2',st:"sg", co:"MY",oid:"sgPJU1A"},
  {id:"sgPJU5",url:["kota-damansara"],name:["Kota Damansara"],slc:["Kota Damansara"],lc:["PJ"],pc:"47810",pr:'1',st:"sg", co:"MY",oid:"sgPJU5"},
  {id:"sgPJPju7_8",url:["mutiara-damansara","damansara-perdana"],name:["Mutiara Damansara, Damansara Perdana","Damansara Perdana"],slc:slc_PJ_Pju7_8,lc:["PJ"],pc:postcode_PJ_Pju7_8,pr:'2',st:"sg", co:"MY",oid:"sgPJU7"}, //"mutiara-damansara"
  {id:"sgPJSek1234_51_18_Pjs123456",
    url:["pj-old-town-taman-sri-manja-taman-desaria","pj-old-town","seksyen-1-petaling-jaya","seksyen-2-petaling-jaya","seksyen-3-petaling-jaya","seksyen-4-petaling-jaya",
    "seksyen-51-petaling-jaya","seksyen-18-petaling-jaya","pjs-1-petaling-jaya","pjs-2-petaling-jaya","pjs-3-petaling-jaya","pjs-4-petaling-jaya",
    "pjs-5-petaling-jaya","pjs-6-petaling-jaya","taman-sri-manja","taman-desaria"],
    name:["PJ Old Town, Taman Sri Manja, Taman Desaria","PJ Old Town","Seksyen 1, Petaling Jaya","Seksyen 2, Petaling Jaya","Seksyen 3, Petaling Jaya","Seksyen 4, Petaling Jaya",
    "Seksyen 51, Petaling Jaya","Seksyen 18, Petaling Jaya","Pjs 1, Petaling Jaya","Pjs 2, Petaling Jaya","Pjs 3, Petaling Jaya","Pjs 4, Petaling Jaya",
    "Pjs 5, Petaling Jaya","Pjs 6, Petaling Jaya","Taman Sri Manja","Taman Desaria"],
    slc:slc_PJ_Sek1234_51_18_Pjs123456,lc:["PJ"],pc:postcode_PJ_Sek1234_51_18_Pjs123456,pr:'2',st:"sg", co:"MY",oid:""}, // "pj-old-town-taman-sri-manja-taman-desaria"
  {id:"sgPJSek5_52_678910",
    url:["bukit-gasing","seksyen-5-petaling-jaya","seksyen-52-petaling-jaya","seksyen-6-petaling-jaya","seksyen-7-petaling-jaya",
    "seksyen-8-petaling-jaya","seksyen-9-petaling-jaya","seksyen-10-petaling-jaya"],
    name:["Bukit Gasing, Seksyen 6-12","Seksyen 5, Petaling Jaya","Seksyen 52, Petaling Jaya","Seksyen 6, Petaling Jaya","Seksyen 7, Petaling Jaya",
    "Seksyen 8, Petaling Jaya","Seksyen 9, Petaling Jaya","Seksyen 10, Petaling Jaya"],
    slc:slc_PJ_Sek5_52_678910,lc:["PJ"],pc:postcode_PJ_Sek5_52_678910,pr:'2',st:"sg", co:"MY",oid:""}, // "bukit-gasing"
  {id:"sgPJSek51A_13141617_17A_19202122",
    url:["sea-park","taman-paramount","seksyen-51a-petaling-jaya","seksyen-13-petaling-jaya","seksyen-14-petaling-jaya","seksyen-15-petaling-jaya","seksyen-16-petaling-jaya",
    "seksyen-17-petaling-jaya","seksyen-17a-petaling-jaya","seksyen-19-petaling-jaya","seksyen-20-petaling-jaya","seksyen-21-petaling-jaya","seksyen-22-petaling-jaya"],
    name:["Sea Park","Taman Paramount","Seksyen 1, Petaling Jaya","Seksyen 13, Petaling Jaya","Seksyen 14, Petaling Jaya","Seksyen 15, Petaling Jaya","Seksyen 16, Petaling Jaya",
    "Seksyen 17, Petaling Jaya","Seksyen 17a, Petaling Jaya","Seksyen 19, Petaling Jaya","Seksyen 20, Petaling Jaya","Seksyen 21, Petaling Jaya","Seksyen 22, Petaling Jaya"],
    slc:slc_PJ_Sek51A_13141617_17A_19202122,lc:["PJ"],pc:postcode_PJ_Sek51A_13141617_17A_19202122,pr:'2',st:"sg", co:"MY",oid:"sgSS22"}, // "sea-park-taman-paramount"
  {id:"sgPJSs1_3_89_9a_1011",
    url:["kampung-tunku-taman-universiti-sungai-way","kampung-tunku-ss1","taman-universiti-ss3","sungai-way-ss8-ss9-ss9a","ss10"],
    name:["Kampung Tunku, Taman Universiti, Sungai Way","Kampung Tunku, SS 1","Taman Universiti, SS 3","Sungai Way, SS 8, SS 9a, SS 9","SS 10"],
    slc:slc_PJ_Ss1_3_89_9a_10,lc:["PJ"],pc:postcode_PJ_Ss1_3_89_9a_10,pr:'2',st:"sg", co:"MY",oid:""}, // "kampung-tunku-taman-university-sungai-way"
  {id:"sgKJ",url:["kelana-jaya","ss4","ss5","ss6","ss7","ss11"],
    name:["Kelana Jaya, SS 4-7","SS 4","SS 5","SS 6","SS 7","SS 11"],
    slc:slc_PJ_KelanaJaya_Ss4567_11,lc:["PJ"],pc:"47301",pr:'2',st:"sg", co:"MY",oid:"sgKJ"}, //  "kelana-jaya"
  {id:"sgPJSs2_20to26",
    url:["ss2-damansara-jaya","ss-2","damansara-kim-ss20","damansara-utama-ss21","damansara-jaya-ss22",
    "taman-sea-ss23","taman-megah-ss24","taman-mayang-jaya-ss25","taman-mayang-ss26"],
    name:["SS 2, Damansara Jaya, Taman Megah, Damansara Kim","SS 2","Damansara Kim, SS 20","Damansara Utama, SS 21","Damansara Jaya, SS 22, SS 22a",
    "Taman Sea, SS 23","Taman Megah, SS 24","Taman Mayang Jaya, SS 25","Taman Mayang, SS 26"],
    slc:slc_PJ_Ss2_20to26,lc:["PJ"],pc:postcode_PJ_Ss2_20to26,pr:'2',st:"sg", co:"MY",oid:"sgSS2"}, //"ss2-damansara-jaya"
  {id:"sgPJU3",url:["tropicana"],name:["Tropicana"],slc:slc_PJ_Tropicana,lc:["PJ"],pc:"47410",pr:'1',st:"sg", co:"MY",oid:"sgPJU3"},
  {id:"sgPJ",url:["petaling-jaya"],name:["Petaling Jaya"],slc:"",lc:["PJ"],pc:postcode_PJ,pr:'4',st:"sg", co:"MY",oid:"sgPJ"},
  {id:"sgPKlg",url:["port-klang"],name:["Port Klang"],slc:"",lc:["Port Klang", "Pelabuhan Klang"],pc:portcode_PortKlang,pr:'4',st:"sg", co:"MY",oid:"sgPKlg"},
  // Puchong
  {id:"sgB16Sierra",url:["bandar-16-sierra"],name:["Bandar 16 Sierra, D'alpinia"],slc:slc_Puchong_Bdr16Sierra,lc:["Puchong"],pc:"47110",pr:'1',st:"sg", co:"MY",oid:"sgB16Sierra"},
  {id:"sgTKinrara",url:["taman-kinrara"],name:["Taman Kinrara, Aman Sari"],slc:slc_Puchong_TmnKinrara,lc:["Puchong"],pc:"47180",pr:'1',st:"sg", co:"MY",oid:"sgTKinrara"},
  {id:"sgBKinrara",url:["bandar-kinrara"],name:["Bandar Kinrara, Taman Damai Utama"],slc:slc_Puchong_BdrKinrara,lc:["Puchong"],pc:"47180",pr:'1',st:"sg", co:"MY",oid:"sgBKinrara"},
  {id:"sgTPutraPerdana",url:["taman-putra-perdana"],name:["Taman Putra Perdana"],slc:slc_Puchong_TmnPutraPerdana,lc:["Puchong"],pc:"47130",pr:'1',st:"sg", co:"MY",oid:"sgTPutraPerdana"},
  {id:"sgBBktPchg",url:["bandar-bukit-puchong-puchong-utama","bandar-bukit-puchong","puchong-utama"],
  name:["Bandar Bukit Puchong, Puchong Utama","Bandar Bukit Puchong","Puchong Utama"],
  slc:slc_Puchong_BdrBukitPuchong,lc:["Puchong"],pc:"47140",pr:'1',st:"sg", co:"MY",oid:"sgBBktPchg"}, //bandar-bukit-puchong-puchong-utama
  {id:"sgBPchgJ",url:["bandar-puchong-jaya"],name:["Bandar Puchong Jaya"],slc:slc_Puchong_BdrPuchongJaya,lc:["Puchong"],pc:"47100",pr:'1',st:"sg", co:"MY",oid:"sgBPchgJ"},
  {id:"sgBPuteriPchg",url:["bandar-puteri-puchong-taman-wawasan","bandar-puteri-puchong","taman-wawasan","lake-edge"],
  name:["Bandar Puteri Puchong, Taman Wawasan, Lake Edge","Bandar Puteri Puchong","Taman Wawasan","Lake Edge"],
  slc:slc_Puchong_BdrPuteriPuchong,lc:["Puchong"],pc:"47100",pr:'1',st:"sg", co:"MY",oid:"sgBPuteriPchg"},// "bandar-puteri-puchong-taman-wawasan"
  {id:"sgPchgPrdn",url:["taman-puchong-perdana-taman-puchong-prima","puchong-perdana","puchong-prima","lake-view-homes","puchong-indah"],
  name:["Puchong Perdana, Puchong Prima, Lake View Homes, Puchong Indah","Puchong Perdana","Puchong Prima","Lake View Homes","Puchong Indah"],
  slc:slc_Puchong_TmnPuchongPerdana,lc:["Puchong"],pc:"47100",pr:'1',st:"sg", co:"MY",oid:"sgBPuteriPchg"}, //taman-puchong-perdana-taman-puchong-prima
  {id:"sgTPtraPrima",url:["taman-putra-prima-taman-meranti-jaya-disland","taman-putra-prima","taman-meranti-jaya","d-island"],
  name:["Taman Putra Prima, Taman Meranti Jaya, D'island","Taman Putra Prima","Taman Meranti Jaya","D'island"],
  slc:slc_Puchong_TmnPutraPrima,lc:["Puchong"],pc:"47100",pr:'1',st:"sg", co:"MY",oid:""},
  {id:"sgPchg",url:["puchong"],name:["Puchong"],slc:"",lc:"Puchong",pc:postcode_Puchong,pr:'4',st:"sg", co:"MY",oid:"sgPchg"},

  {id:"sgPCarey",url:["pulau-carey"],name:["Pulau Carey"],slc:"",lc:"Carey Island",pc:"42960",pr:'4',st:"sg", co:"MY",oid:"sgPCarey"},
  {id:"sgPIndah",url:["pulau-indah"],name:["Pulau Indah"],slc:"",lc:"Pulau Indah",pc:"42920",pr:'4',st:"sg", co:"MY",oid:"sgPIndah"},
  {id:"sgPKetam",url:["pulau-ketam"],name:["Pulau Ketam"],slc:"",lc:"Pulau Ketam",pc:"42940",pr:'4',st:"sg", co:"MY",oid:"sgPKetam"},
  {id:"sgSAU15",url:["puncak-alam"],name:["Puncak Alam"],slc:"Puncak Alam",lc:["Kuala Selangor"],pc:"42300",pr:'1',st:"sg", co:"MY",oid:"sgSAU15"},
  {id:"sgPHeights",url:["putra-heights"],name:["Putra Heights"],slc:slc_PutraHeights,lc:["Subang Jaya"],pc:"47650",pr:'1',st:"sg", co:"MY",oid:"sgPHeights"},
  {id:"sgRasa",url:["rasa"],name:["Rasa"],slc:"",lc:"Rasa",pc:"44200",pr:'4',st:"sg", co:"MY",oid:"sgRasa"},

  {id:"sgKuang",url:["kuang"],name:["Kuang"],slc:"Kuang",lc:["Rawang"],pc:"47000",pr:'1',st:"sg", co:"MY",oid:"sgKuang"},
  {id:"sgKundang",url:["kundang"],name:["Kundang"],slc:"Kundang",lc:["Rawang"],pc:"48020",pr:'1',st:"sg", co:"MY",oid:"sgKundang"},
  {id:"sgRwg",url:["rawang"],name:["Rawang"],slc:"",lc:"Rawang",pc:postcode_Rawang,pr:'4',st:"sg", co:"MY",oid:"sgRwg"},

  {id:"sgSBrnm",url:["sabak-bernam"],name:["Sabak Bernam"],slc:"",lc:"Sabak",pc:postcode_SerbakBernam,pr:'4',st:"sg", co:"MY",oid:"sgSBrnm"},
  {id:"sgSekinchan",url:["sekinchan"],name:["Sekinchan"],slc:"",lc:"Sekinchan",pc:"45400",pr:'4',st:"sg", co:"MY",oid:"sgSekinchan"},

  {id:"sgSlyg",url:["selayang"],name:["Selayang"],slc:slc_Selayang,lc:["Selayang", "Batu Caves"],pc:"68100",pr:'2',st:"sg", co:"MY",oid:"sgSlyg"},
  // Semenyih
  {id:"sgBTKesuma",url:["bandar-tasik-kesuma-bandar-rinching-setia-ecohill","bandar-tasik-kesuma","bandar-rinching","setia-ecohill","taman-pelangi"],
  name:["Bandar Tasik Kesuma, Bandar Rinching, Setia Ecohill, Taman Pelangi","Bandar Tasik Kesuma","Bandar Rinching","Setia Ecohill","Taman Pelangi"],
  slc:slc_Smyh_BdrTasikKesuma_BdrRinching_SetiaEcoHill,lc:["Semenyih"],pc:"43500",pr:'1',st:"sg", co:"MY",oid:"sgBTKesuma"}, // "bandar-tasik-kesuma-bandar-rinching-setia-ecohill"
  {id:"sgBTekKjg",url:["bandar-teknologi-kajang","taman-semenyih-mewah","bandar-sunway-semenyih"],
  name:["Bandar Teknologi Kajang, Taman Semenyih Mewah, Bandar Sunway Semenyih","Taman Semenyih Mewah","Bandar Sunway Semenyih"],
  slc:slc_Smyh_BdrTekKjg,lc:["Semenyih"],pc:"43500",pr:'1',st:"sg", co:"MY",oid:"sgBTekKjg"}, // "bandar-teknologi-kajang"
  {id:"sgBroga",url:["broga","taman-tasik-semenyih"],name:["Broga, Taman Tasik Semenyih","Taman Tasik Semenyih"],slc:slc_Smyh_Broga,lc:"Broga",pc:"71750",pr:'4',st:"sg", co:"MY",oid:"sgBroga"}, // broga
  {id:"sgSmyh",url:["semenyih"],name:["Semenyih"],slc:"",lc:"Semenyih",pc:"43500",pr:'4',st:"sg", co:"MY",oid:"sgSmyh"},
  {id:"sgSepang",url:["sepang"],name:["Sepang"],slc:"",lc:"Sepang",pc:"43900",pr:'4',st:"sg", co:"MY",oid:"sgSepang"},
  {id:"sgSerdang",url:["serdang"],name:["Serdang"],slc:"",lc:["Serdang", "Putrajaya"],pc:"43400",pr:'4',st:"sg", co:"MY",oid:"sgsSerdang"},
  {id:"sgSerendah",url:["serendah"],name:["Serendah"],slc:"",lc:"Serendah",pc:"48200",pr:'4',st:"sg", co:"MY",oid:"sgSerendah"},

  // Seri Kembangan
  {id:"sgBdrPutraPermai_Equine",url:["bandar-putra-permai-taman-equine-lestari-putra","bandar-putra-permai","taman-equine","lestari-putra"],
  name:["Bandar Putra Permai, Taman Equine, Lestari Putra","Bandar Putra Permai","Taman Equine","Lestari Putra"],
  slc:slc_SrKmbgn_BdrPutraPermai_Equine,lc:["Seri Kembangan"],pc:"43300",pr:'1',st:"sg", co:"MY",oid:"sgBPutraPermai"}, // bandar-putra-permai-taman-equine-lestari-putra
  {id:"sgBSerdang",url:["bukit-serdang-sri-serdang","bukit-serdang","taman-sri-serdang","kampung-baru-seri-kembangan"],
  name:["Bukit Serdang, Taman Sri Serdang, Kampung Baru Seri Kembangan","Bukit Serdang","Taman Sri Serdang","Kampung Baru Seri Kembangan"],
  slc:slc_SrKmbgn_BktSerdang,lc:["Seri Kembangan"],pc:"43300",pr:'1',st:"sg", co:"MY",oid:"sgBSerdang"}, //bukit-serdang-sri-serdang
  {id:"sgSerdangRaya_SgBesiIndah",
    url:["mines-wellness-city-serdang-raya","mines-wellness-city","sungai-besi-indah","serdang-raya","serdang-perdana"],
    name:["Mines Wellness City, Sungai Besi Indah, Serdang Raya, Serdang Perdana","Mines Wellness City","Sungai Besi Indah","Serdang Raya","Serdang Perdana"],
    slc:slc_SrKmbgn_SerdangRaya_SgBesiIndah,lc:["Seri Kembangan"],pc:"43400",pr:'1',st:"sg", co:"MY",oid:""}, // mines-wellness-city-serdang-raya
  {id:"sgPuncakJalil",url:["puncak-jalil"],name:["Puncak Jalil"],slc:slc_SrKmbgn_PckJalil,lc:["Seri Kembangan"],pc:"43300",pr:'1',st:"sg", co:"MY",oid:"sgPuncakJalil"},
  {id:"sgSKmbg",url:["seri-kembangan"],name:["Seri Kembangan"],slc:"",lc:"Seri Kembangan",pc:"43300",pr:'4',st:"sg", co:"MY",oid:"sgSKmbg"},
  // Shah Alam
  {id:"sgSAU11to14",url:["setia-alam","bukit-bandaraya-u11","cahaya-alam-u12","u14-shah-alam"],
    name:["Setia Alam, Setia Eco-park, Alam Nusantara","Bukit Bandaraya, U11","Cahaya Alam, U12","u14-shah-alam", ],
    slc:slc_SA_U11to14,lc:["Shah Alam"],pc:"40170",pr:'1',st:"sg", co:"MY",oid:"sgStiaA"}, //setia-alam
  {id:"sgSASek1to8",url:["seksyen-1-to-8-shah-alam","seksyen-1-shah-alam","seksyen-2-shah-alam","seksyen-3-shah-alam","seksyen-4-shah-alam","seksyen-5-shah-alam",
    "seksyen-6-shah-alam","seksyen-7-shah-alam","seksyen-8-shah-alam"],
    name:["Seksyen 1 to 8, Shah Alam", "Seksyen 1, Shah Alam", "Seksyen 2, Shah Alam", "Seksyen 3, Shah Alam", "Seksyen 4, Shah Alam", "Seksyen 5, Shah Alam",
    "Seksyen 6, Shah Alam", "Seksyen 7, Shah Alam", "Seksyen 8, Shah Alam", ],
    slc:slc_SA_Sek1to8,lc:["Shah Alam"],pc:"40000",pr:'1',st:"sg", co:"MY",oid:"sgSASec7"}, //seksyen-1-to-8-shah-alam
  {id:"sgSASek9to13",url:["seksyen-9-to-13-shah-alam","seksyen-9-shah-alam","seksyen-10-shah-alam","seksyen-11-shah-alam","seksyen-12-shah-alam","seksyen-13-shah-alam"],
    name:["Seksyen 9 to 13, Shah Alam", "Seksyen 9, Shah Alam", "Seksyen 10, Shah Alam", "Seksyen 11, Shah Alam", "Seksyen 12, Shah Alam", "Seksyen 13, Shah Alam"],
    slc:slc_SA_Sek9to14,lc:["Shah Alam"],pc:"40100",pr:'1',st:"sg", co:"MY",oid:"sgSASec9"}, // "seksyen-9-to-13-shah-alam"
  {id:"sgSASek15to24",url:["seksyen-17-to-24-shah-alam","seksyen-17-shah-alam","seksyen-18-shah-alam","seksyen-19-shah-alam","seksyen-20-shah-alam","seksyen-21-shah-alam",
    "seksyen-22-shah-alam","seksyen-23-shah-alam","seksyen-24-shah-alam"],
    name:["Seksyen 17 to 24, Shah Alam","Seksyen 17, Shah Alam", "Seksyen 18, Shah Alam", "Seksyen 19, Shah Alam", "Seksyen 20, Shah Alam", "Seksyen 21, Shah Alam",
    "Seksyen 22, Shah Alam", "Seksyen 23, Shah Alam", "Seksyen 24, Shah Alam"],
    slc:slc_SA_Sek15to24,lc:["Shah Alam"],pc:"40300",pr:'1',st:"sg", co:"MY",oid:"sgSASec19"}, // seksyen-17-to-24-shah-alam'
  {id:"sgSASek25_343536",url:["alam-impian-taman-sri-muda", "taman-sri-muda-seksyen-25","seksyen-34-shah-alam","alam-impian-seksyen-35","kampung-sungai-kandis-seksyen-36"],
    name:["Alam Impian, Taman Sri Muda", "Taman Sri Muda, Seksyen 25", "Seksyen 34, Shah Alam", "Alam Impian, Seksyen 35", "Kampung Sungai Kandis, Seksyen 36"],
    slc:slc_SA_Sek25_343536,lc:["Shah Alam"],pc:"40000",pr:'1',st:"sg", co:"MY",oid:"sgSASec35"},
  {id:"sgSASek26to28",url:["alam-megah-taman-bunga-negara","taman-bukit-saga-seksyen-26","taman-bunga-negara-seksyen-27","taman-alam-megah-seksyen-28"],
    name:["Alam Megah, Taman Bunga Negara", "Taman Bukit Saga, Seksyen 26", "Taman Bunga Negara, Seksyen 27", "Taman Alam Megah, Seksyen 28"],
    slc:slc_SA_Sek26to28,lc:["Shah Alam"],pc:"40000",pr:'1',st:"sg", co:"MY",oid:"sgSASec27"}, // alam-megah-taman-bunga-negara
  {id:"sgSASek29to33",url:["kota-kemuning-bukit-rimau","kampung-lombong-seksyen-29","kampung-jln-kebun-seksyen-30","kota-kemuning-seksyen-31","bukit-rimau-seksyen-32",
    "taman-alam-indah-seksyen-33"],
    name:["Kota Kemuning, Bukit Rimau", "Kampung Lombong, Seksyen 29", "Kampung Jln Kebun, Seksyen 30", "Kota Kemuning, Seksyen 31", " Bukit Rimau, Seksyen 32",
    "Taman Alam Indah, Seksyen 33"],
    slc:slc_SA_Sek29to33,lc:["Shah Alam"],pc:"40000",pr:'1',st:"sg", co:"MY",oid:"sgKKmng"}, //"kota-kemuning-bukit-rimau"
  {id:"sgSAU1_2_8",url:["bukit-jelutong","taman-ttdi-jaya-u2"],
    name:["Bukit Jelutong, Glemarie", "Taman TTDI Jaya, U2 Shah Alam"],
    slc:slc_SA_U1_2_8,lc:["Shah Alam"],pc:"40000",pr:'1',st:"sg", co:"MY",oid:"sgSAU8"}, // "bukit-jelutong",
  {id:"sgSAU3to7",url:["bandar-pinggiran-subang"],
    name:["Bandar Pinggiran Subang, Kampung Melayu Subang"],
    slc:slc_SA_U3to7,lc:["Shah Alam"],pc:"40000",pr:'1',st:"sg", co:"MY",oid:""}, // "bandar-pinggiran-subang",
  {id:"sgSAU9_10_15_16",url:["denai-alam-puncak-perdana","cahaya-spk-u9","alam-budiman","puncak-perdana","u15-shah-alam","denai-alam-u16"],
    name:["Denai Alam, Puncak Perdana", "Cahaya SPK, U9", "Alam Budiman, U10", "Puncak Perdana, U10", "U15, Shah Alam", "Denai Alam, U16"],
    slc:slc_SA_U9_10_15_16,lc:["Shah Alam"],pc:"40000",pr:'1',st:"sg", co:"MY",oid:"sgSAU10PuncakPerdana"}, //"denai-alam-puncak-perdana",
  {id:"sgSAU17to20",url:["bukit-rahman-putra","kampung-merbau-sempak-u17","kampung-paya-jaras-u18","u19-shah-alam"],
    name:["Bukit Rahman Putra, Paya Jaras", "Kampung Merbau Sempak, U17", "Kampung Paya Jaras, U18", "U19, Shah Alam"],
    slc:slc_SA_U17to20,lc:["Shah Alam"],pc:"40000",pr:'1',st:"sg", co:"MY",oid:""}, // "bukit-rahman-putra",
  {id:"sgShA",url:["shah-alam"],name:["Shah Alam"],slc:"",lc:"Shah Alam",pc:postcode_ShahAlam,pr:'4',st:"sg", co:"MY",oid:"sgShA"},
  // Subang Jaya
  {id:"sgSs12to19",url:["ss12-to-ss19","ss12","ss13","ss14","ss15","ss16","ss17","ss18", "ss19"],
    name:["SS 12 - 19","SS 12","SS 13","SS 14","SS 15","SS 16","SS 17","SS 18", "SS 19"],
    slc:slc_Ss12to19,lc:["Subang Jaya"],pc:"47500",pr:'2',st:"sg", co:"MY",oid:""}, // "ss12-to-ss19"
  {id:"sgSbg",url:["subang"],name:["Subang"],slc:"",lc:"Subang",pc:"",pr:'4',st:"sg", co:"MY",oid:"sgSbg"},
  {id:"sgSbgJ",url:["subang-jaya"],name:["Subang Jaya"],slc:"",lc:"Subang Jaya",pc:postcode_SubangJaya,pr:'4',st:"sg", co:"MY",oid:"sgSbgJ"},
  {id:"sgSgAyerTawar",url:["sungai-ayer-tawar"],name:["Sungai Ayer Tawar"],slc:"",lc:"Sungai Ayer Tawar",pc:"45100",pr:'4',st:"sg", co:"MY",oid:"sgSgAyerTawar"},
  {id:"sgSgBesar",url:["sungai-besar"],name:["Sungai Besar"],slc:"",lc:"Sungai Besar",pc:"45300",pr:'4',st:"sg", co:"MY",oid:"sgSgBesar"},
  {id:"sgSgBloh",url:["sungai-buloh"],name:["Sungai Buloh"],slc:"",lc:"Sungai Buloh",pc:postcode_SgBuloh,pr:'4',st:"sg", co:"MY",oid:"sgSgBloh"},
  {id:"sgSgPelek",url:["sungai-pelek"],name:["Sungai Pelek"],slc:"",lc:"Sungai Pelek",pc:"43950",pr:'4',st:"sg", co:"MY",oid:"sgSgPelek"},
  {id:"sgUSJ1",url:["taman-subang-mewah"],name:["Taman Subang Mewah, Usj 1"],slc:slc_TmnSubangMewah,lc:["Subang Jaya"],pc:"47500",pr:'1',st:"sg", co:"MY",oid:"sgUSJ1"},
  {id:"sgTnjKarang",url:["tanjung-karang"],name:["Tanjung Karang"],slc:"",lc:"Tanjung Karang",pc:"45500",pr:'4',st:"sg", co:"MY",oid:"sgTnjKarang"},
  {id:"sgTnjSepat",url:["tanjong-sepat"],name:["Tanjong Sepat"],slc:"",lc:"Tanjong Sepat",pc:"42800",pr:'4',st:"sg", co:"MY",oid:"sgTnjSepat"},
  {id:"sgTPGrg",url:["telok-panglima-garang"],name:["Telok Panglima Garang"],slc:"",lc:"Telok Panglima Garang",pc:postcode_TelokPanglimaGarang,pr:'4',st:"sg", co:"MY",oid:"sgTPGrg"},
  {id:"sgUSJ",url:["usj","usj-2","usj-3","usj-4","usj-5","usj-6","usj-7","usj-8","usj-9","taipan-business-centre","usj-11","usj-12",
  "usj-13","usj-14","usj-15","usj-16","usj-17","usj-18","usj-19","usj-20","usj-21","usj-22","usj-23","usj-24","usj-25","usj-26","usj-27"],
  name:["USJ","UEP Subang Jaya, Usj 2","Usj 3","Usj 4","Usj 5","Usj 6","Usj 7","Usj 8","Usj 9","Taipan Business Centre","Usj 11","Usj 12",
  "Usj 13","Usj 14","USJ 15","Usj 16","Usj 17","Usj 18","Usj 19","Usj 20","Usj 21","Usj 22","Usj 23","Usj 24","One City, Usj 25","Usj 26","Usj 27"],
  slc:slc_USJ,lc:["Subang Jaya"],pc:postcode_USJ,pr:'2',st:"sg", co:"MY",oid:"sgUSJ"} // usj
];

export const cityJohor = [
  "Austin Heights","Bandar Baru Uda", "Bandar Dato Onn", "Bandar Seri Alam", "Batu Pahat", "Bukit Indah", "Gelang Patah", "Johor Bahru",
  "Johor Jaya", "Kangkar Pulai", "Kluang", "Kota Tinggi", "Kulai", "Larkin", "Masai", "Mersing", "Mount Austin", "Muar", "Mutiara Rini",
  "Nusajaya", "Pasir Gudang", "Permas Jaya", "Pontian", "Pulai Indah", "Segamat", "Senai", "Setia Tropika", "Skudai", "Taman Abad",
  "Taman Bukit Dahlia", "Taman Daya", "Taman Impian Emas", "Taman Molek", "Taman Johor Jaya", "Taman Pelangi", "Taman Perling", "Taman Puteri Wangsa",
  "Taman Rinting", "Taman Sri Tebrau", "Taman Setia Indah", "Taman Sutera Utama", "Taman Ungku Tun Aminah",
  "Taman University", "Tangkak", "Ulu Tiram"]; //45

export const cityJohorId = [
  "jhAustinHeights", "jhBBUda", "jhBDOnn", "jhSAlm", "jhBPhat", "jhBIndah", "jhGelngPatah", "jhJB",
  "jhJJaya", "jhKngkarPulai", "jhKluang", "jhKTggi", "jhKlai", "jhLarkin", "jhMsai", "jhMrsg", "jhMAstin", "jhMuar", "jhMRni",
  "jhNsaJ", "jhPGdg", "jhPrmsJ", "jhPntian", "jhPulaiIndah", "jhSgmat", "jhSnai", "jhSTrpka", "jhSkdai", "jhTAbd",
  "jhTBDhlia", "jhTDya", "jhTIEmas", "jhTMlek", "jhTJJ", "jhTPlgi", "jhTPrlg", "jhTPtrWgsa",
  "jhTRntg", "jhTSTbrau", "jhTStiaIndah", "jhTSUtm", "jhTUTAminah",
  "jhTU", "jhTgkak", "jhUlTram"]; //45

export const slc_Jh_BdrBaruUda= [
  "Bandar Baru Uda", "Kampung Usaha Jaya",
  "Kampung Bakar Batu","Taman Damansara Aliff","Taman Bukit Alif","Taman Desa Rahmat","Kampung Seri Serdang",
  "Kampung Seri Jaya","Taman Tampoi Utama",
  // point
  "Taman Skudai Kanan","Kawasan Perumahan Bandar Baru Tampoi Uda","Kawasan Perumahan Mara",
];
export const slc_Jh_BdrDatoOnn= [
  "Bandar Dato Onn",
  "Kampung Baru Sri Aman","Kampung Maju Jaya","Taman Seri Austin","Bandar Dato Onn","Adda Heights",
  // point
  "Kampung Sinaran Baru",
];
export const slc_Jh_BktIndah= [
  "Bukit Indah", "Bukit Indah 2", "Taman Bukit Indah","Taman Bukit Indah 2",
  // point
  "Rochester","Delima Mutiara","Intan Topaz","Setiakasih",
];
export const slc_Jh_DngBay= [
  "Danga Bay","Bukit Serene","Kampung Jawa","Straits View","Taman Nong Chik","Kampung Nong Chik","Kampung Mohd Amin",
  "Sri Gelam","Dataran Bandaraya Johor Bahru","Kampung Bahru","Geylang Bahru","Ulu Air Molek","Yahya Awal",
  "Kampung Mahmoddiah","Gertak Merah","Taman Istana",
  // point
  "Kampung Wadi Hassan","Taman Imigresen","Ng Ngee Heng",
];
export const slc_Jh_Kmpas= [
  "Kempas",
  "Taman Bukit Kempas","Kempas Banjaran","Kempas Denai","Kampung Sri Kempas 1","Kempas Baru","Kempas Permatang","Taman Kempas",
  // point
  "Kampung Palas","Kampung Melayu Sri Kempas","Taman Purnama","Kampung Kempas Lama","Kampung Denai Aman",
];
export const slc_Jh_Lrkin= [
  "Larkin",
  "Taman Sri Bahagia","Kawasan Perindustrian Tampoi","Kawasan Perindustrian Tanah Tampoi","Taman Perindustrian Tampoi Jaya",
  "Kampung Ungku Mohsin","Kawasan Perindustrian Dato Onn","Taman Larkin Perdana","Larkin Jaya","Jabatan Pendidikan Negeri Johor",
  "Kampung Muafakat","Taman Suria Muafakat","Kampung Kastam Larkin","Ulu Air Molek","Larkin","Kampung Aman",
  // point
  "Kawasan Perindustrian Tampoi Jaya","Larkin Indah","Taman Dato Onn","Taman Imigresen","Taman Sinaran Harapan Jubli",
];
export const slc_Jh_MAustn= [
  "Taman Jaya Putra","Taman Desa Tebrau","Taman Austin Heights","Taman Mount Austin",
  // point
  "Tebrau Tropical","Austin Residence","Kawasan Perindustrian Mount Austin","Kawasan Perindustrian Tebrau 3",
]
export const slc_Jh_STrpka= [
  "Setia Tropika",
  "Kampung Ubi Tebrau","Desa Mutiara","Taman Bukit Mutiara","Nasa City","Kawasan Perindustrian Kampung Maju Jaya",
  "Taman Perindustrian Berjaya","Taman Belati","Taman Sinaran Kempas",
  // point
  "Kampung Kangkar Kechil","Kampung Ulu Kempas","Fenix Villas","Kemajuan Tanah Tebrau","Alexandre Avenue",
]
export const slc_Jh_Southkey= [
  "Southkey",
  "Taman Gembira","Taman Perindustrian Gembira","Taman Mulia","Kampung Bahru Majidee","Kawasan Perindustrian Dewani",
  "Kawasan Perindustrian Temenggong","Kampung Melayu Majidee","Kampung Bendahara","Kampung Dato Sulaiman Menteri",
  "Kampung Tok Siak", "Taman Majidee","Taman Suria",
  //point
  "Kampung Ubi Baru","Kampung Desa Jaya","Kampung Desa Melayu",
];

export const slc_Jh_TAbadSentosa= [
  "Tanjung Puteri","Kampung Ah Siang","Stulang Darat","Kim Teng Park","Taman Serene","Bukit Senyum","Taman Pelangi",
  "Pasir Pelangi","Taman Sri Tebrau","Taman Sentosa","Taman Abad","Taman Melodies","Taman Century","Wadi Hana",
  // point
  "Kampung Stulang Laut","Stulang","Taman Perumahan Rakyat Sri Tulang","Taman Sri Intan","Polo Park",
];
export const slc_Jh_TDaya= [
  "Taman Daya",
  "Kawasan Perindustrian Tebrau",
  // point
  "Kawasan Perindustrian Tebrau 3"
]
export const slc_Jh_TDsJaya= [
  "Taman Bukit Tropika","Taman Desa Cemerlang","Taman Ehsan Jaya","Taman Desa Jaya","Ehsan Heights",
];
export const slc_Jh_TMlek= [
  "Taman Molek",
  "Kampung Seri Purnama","Kangkar Tebrau Baru","Taman Istimewa","Kampung Baru Pandan",
  "Kawasan Perindustrian Tebrau 2","Taman Sri Pandan","Rejimen 501 Askar Wataniah Kem Tebrau",
  "Taman Dato Penggawa Timur","Taman Redang","Taman Ponderosa","Desa Perwira","Taman Desa Harmoni","Taman Saujana",
  // point
  "Kem Tebrau","Kampung Melayu Pandan","Kampung Pandan Darat","Lagenda Molek","Taman Impiana Molek",
  "Kampung Saujana Baru","Kampung Sri Plentong","Kampung Rumah 10","Sunway Bukit Lenang","Kampung Sri Tasek",
  "Kampung Plentong Tengah"
];
export const slc_Jh_TJJ= [
  "Taman Johor Jaya"
];
export const slc_Jh_TPrlg= [
  "Bandar Uda Utama","Taman Tan Sri Yaacob","Kampung Telok Serdang","Taman Sutera","Taman Perling",
  "Taman Baiduri","Taman Laguna",
  // point
  "Taman Amira","Casa Almyra","Kampung Tuah Jaya","Taman Perindustrian Jp Perdana","Kampung Teluk Serdang Pinggir",
  "Kampung Sungai Perling","Riviera Courtyard Homes","Kampung Sungai Danga","Kampung Tanjung Danga","Kampung Sungai Melayu",
];
export const slc_Jh_TStiaIndah= [
  "Taman Setia Indah", "Bandar Jaya Putra", "Taman Jaya Putra",
  // point
  "Summer Pavilion", "Taman Ekoflora"
];
export const slc_Jh_Tampoi= [
  "Taman Tampoi Indah","Taman Melor","Taman Dahlia","Taman Johor","Taman Kemas","Taman Cempaka","Taman Bukit Mewah",
  "Taman Sri Putra","Taman Impian Skudai","Taman Perusahaan Ringan Pulai",
  // point
  "Puncak Lagenda",
];
export const slc_Jh_KngkarPulai= [
  "Taman Sri Pulai","Taman Teratai","Taman Sri Pulai Perdana","Taman Pulai Emas","Taman Pulai Jaya",
  "Bandar Baru Kangkar Pulai","Kampung Melayu Kangkar Pulai","Taman Desa Permai","Orchid Valley",
  "Taman Pulai Indah","Sri Pulai Perdana 2",
  // point
  "Taman Pulai Mutiara",
];
export const slc_Jh_TRntg= [
  "Taman Rinting",
  "Kawasan Perindustrian Kota Puteri","Taman Megah Ria","Kampung Teluk Jawa","Taman Bukit Rinting","Taman Sierra Perdana",
  // point
  "Cahaya Kota Puteri","Kampung Kuala Masai","Kampung Sungai Rinting","Kampung Changkat"
];
export const slc_Jh_PrmsJ= [
  "Bandar Baru Permas Jaya",
  "Taman Perindustrian Plentong","Taman Plentong Utama","Rumah Awam Plentong","Taman Ria","Taman Perindustrian Sri Plentong",
  "Taman Perindustrian Desa Plentong","Kampung Plentong Baru","Permas Jaya","Taman Bayu Senibong",
  "Kampung Plentong Baru","Senibong Cove",
  // point
  "The Straits View Residence","Kampung Senibong","Kampung Plentong","Kampung Sambanthan"
];
export const slc_Jh_BdrSAlm= [
  "Bandar Baru Seri Alam","Kampung Sepakat","Taman Masai","Taman Bunga Raya",
  // point
  "The Valley"
];
export const slc_Jh_HrzHills= [
  "Horizon Hills","Taman Nusa Indah","Presint 8 Nusa Idaman","Kiara Hill","Presint 2, Nusa Idaman","Presint 3 (Selatan), Nusa Idaman",
  "Presint 3 (Utara), Nusa Idaman","Presint 4, Nusa Idaman",
  // point
  "Taman Nusa Sentral","Presint 6 Nusa Idaman","Canna Precinct Nusa Idaman","Presint 7 Nusa Idaman","Presint 5 Nusa Idaman",
];
export const slc_Jh_Merdini= [
  "Medini Iskandar Malaysia",
  "Kampung Tiram","Ledang Heights","East Ledang","Taman Medini Iskandar",
  // point
  "Ledang Heights Bungalow Park","Taman Eco Botani","Kota Iskandar","Puteri Harbour", "Medini",
];
export const slc_Jh_TIEmas= [
  "Taman Impian Emas",
  // point
  "Impian Heights","Kampung Laut Batu 10","Lembah Jaya",
];
export const slc_Jh_MRni= [
  "Mutiara Rini",
  "Taman Perumahan Rakyat Lima Kedai","Lima Kedai","Taman Seri Orkid","Taman Skudai Indah",
  "Taman Universiti","Taman Pulai Utama","Taman Pulai Flora","Kawasan Perindustrian Taman Universiti","Taman Harmoni 2",
  "Taman Bukit Gemilang","Taman Nesa","Taman Sri Putri","Taman Sri Skudai","Taman Desa Skudai",
  // point
  "Rini Hills","Presint Jasa","Presint Bakti","Taman Skudai","Kampung S.K.","Taman Etnologi Tasik",
];
export const slc_Jh_Senai = [
  "Taman Teknologi Johor","Taman Aman","Taman Sepakat","Taman Beringin","Taman Perindustrian Murni Senai","Taman Mewah",
  "Taman Bintang Utama","Kawasan Perindustrian Senai 1","Kawasan Perindustrian Senai Fasa 3","Taman Pancasila",
  "Taman Sutra","Taman Mesra","Taman Perindustrian Senai","Taman Desa Idaman","Kampung Baru Seelong","Kampung Pemuda Jaya",
  "Taman Impian Jaya","Taman Muhibbah","Taman Sri Saleng","Taman Senai Utama","Taman Dasa",
  // point
  "Taman Dewani","Kampungi Baru Senai","Taman Dasa","Taman Senai Utama","Taman Perindu","Saleng","Taman Saleng Baru",
  "Kampung Baru Saleh","Hkt Industri","Seelong","Kampung Seelong Jaya","Taman Bertema","Taman Mestijaya","Taman Sepakat"
];
export const slc_Jh_TAmn= [
  "Taman Ungku Tun Aminah",
  "Taman Melawati","Taman Selesa Jaya","Taman Jaya Mas","Taman Nusa Jaya Mas","Taman Industri Jaya","Taman Timor","Taman Damai Jaya","Taman Skudai Baru",
  "Taman Sutera Utama","Taman Nusa Bestari 2",
  // point
  "Bandar Taman Selesa Jaya","Taman Johor Bahru"
];
export const slc_Jh_PGdg = [
  "Kampung Pasir Gudang Baru","Malaysia Heavy Marine Engineering","Taman Bukit Dahlia","Taman Mawar",
  "Taman Cendana","Kawasan Perindustrian Pasir Gudang","Pelabuhan Johor Pasir Gudang","Taman Tanjung Puteri",
  "Taman Pasir Putih","Taman Cendana","Taman Nusa Damai","Taman Flora Heights","Taman Desa Rakyat Perdana",
  "Kampung Kopok Baru","Kampung Sentosa Barat","Kampung Cahaya Baru","Bandar Bistari Perdana","Taman Cahaya Masai",
  "Taman Kota Masai","Kawasan Perindustrian Tanjung Langsat","Taman Scientex",
  // point
  "Perumahan Bakti 2 Taman Air Biru","Perjiranan 9 Taman Air Biru","Perjiranan 8 Taman Air Biru","Taman Pasir Emas",
  "Kampung Pasir Putih","Taman Tanjung Puteri Resort","Taman Scientex Impiana","Taman Scientex Heliconia",
  "Kampung Delima","Tanjung Langsat","Kampung Sri Aman"
];
export const cityJohorObj = [
  {id:"jhBPhat",url:["batu-pahat"],name:["Batu Pahat"],slc:"",lc:"Batu Pahat",pc:"",pr:'4',st:"jh", co:"MY",oid:"jhBPhat"},
  {id:"jhGelngPatah",url:["gelang-patah"],name:["Gelang Patah"],slc:"",lc:"Gelang Patah",pc:"",pr:'4',st:"jh", co:"MY",oid:"jhGelngPatah"},

  // Johor Bahru
  // {id:"jhAustinHeights",url:["Austin Heights"],name:[""],slc:"",lc:["Johor Bahru"],pc:"",pr:'2',st:"jh", co:"MY",oid:"jhAustinHeights"},
  // {id:"jhJJaya",url:[""],name:["Johor Jaya"],slc:"",lc:["Johor Bahru"],pc:"",pr:'2',st:"jh", co:"MY",oid:"jhJJaya"},
  // {id:"jhTPlgi",url:[""],name:["Taman Pelangi"],slc:"",lc:["Johor Bahru"],pc:"",pr:'2',st:"jh", co:"MY",oid:"jhTPlgi"},
  // {id:"jhTSTbrau",url:[""],name:["Taman Sri Tebrau"],slc:"",lc:["Johor Bahru"],pc:"",pr:'2',st:"jh", co:"MY",oid:"jhTSTbrau"},

  {id:"jhBBUda",url:["bandar-baru-uda"],name:["Bandar Baru Uda"],slc:slc_Jh_BdrBaruUda,lc:["Johor Bahru"],pc:"",pr:'2',st:"jh", co:"MY",oid:"jhBBUda"},
  {id:"jhBDOnn",url:["bandar-dato-onn"],name:["Bandar Dato Onn"],slc:slc_Jh_BdrDatoOnn,lc:["Johor Bahru"],pc:"",pr:'2',st:"jh", co:"MY",oid:"jhBDOnn"},
  {id:"jhBIndah",url:["bukit-indah"],name:["Bukit Indah"],slc:slc_Jh_BktIndah,lc:["Johor Bahru"],pc:"",pr:'2',st:"jh", co:"MY",oid:"jhBIndah"},
  {id:"jhDBay",url:["danga-bay"],name:["Danga Bay"],slc:slc_Jh_DngBay,lc:["Johor Bahru"],pc:"",pr:'2',st:"jh", co:"MY",oid:""},
  {id:"jhKpas",url:["kempas"],name:["Kempas"],slc:slc_Jh_Kmpas,lc:["Johor Bahru"],pc:"",pr:'2',st:"jh", co:"MY",oid:""},
  {id:"jhLarkin",url:["larkin"],name:["Larkin"],slc:slc_Jh_Lrkin,lc:["Johor Bahru"],pc:"",pr:'2',st:"jh", co:"MY",oid:"jhLarkin"},
  {id:"jhMAstin",url:["mount-austin"],name:["Mount Austin"],slc:slc_Jh_MAustn,lc:["Johor Bahru"],pc:"",pr:'2',st:"jh", co:"MY",oid:"jhMAstin"},
  {id:"jhSTrpka",url:["setia-tropika"],name:["Setia Tropika"],slc:slc_Jh_STrpka,lc:["Johor Bahru", "Skudai"],pc:"",pr:'2',st:"jh", co:"MY",oid:"jhSTrpka"},
  {id:"jhSoutky",url:["southkey"],name:["Southkey"],slc:slc_Jh_Southkey,lc:["Johor Bahru"],pc:"",pr:'2',st:"jh", co:"MY",oid:""},
  {id:"jhTAbd",url:["taman-abad-taman-pelangi-taman-sentosa"],name:["Taman Abad, Taman Pelangi, Taman Sentosa, CIQ"],slc:slc_Jh_TAbadSentosa,lc:["Johor Bahru"],pc:"",pr:'2',st:"jh", co:"MY",oid:"jhTAbd"},
  {id:"jhTDya",url:["taman-daya"],name:["Taman Daya"],slc:slc_Jh_TDaya,lc:["Johor Bahru"],pc:"",pr:'2',st:"jh", co:"MY",oid:"jhTDya"},
  {id:"jhTDsJaya",url:["taman-desa-jaya"],name:["Taman Desa Jaya"],slc:slc_Jh_TDsJaya,lc:["Johor Bahru", "Ulu Tiram"],pc:"",pr:'2',st:"jh", co:"MY",oid:"jhTDya"},
  {id:"jhTJJ",url:["taman-johor-jaya"],name:["Taman Johor Jaya"],slc:slc_Jh_TJJ,lc:["Johor Bahru"],pc:"",pr:'2',st:"jh", co:"MY",oid:"jhTJJ"},
  {id:"jhTMlek",url:["taman-molek"],name:["Taman Molek"],slc:slc_Jh_TMlek,lc:["Johor Bahru", "Masai"],pc:"",pr:'2',st:"jh", co:"MY",oid:"jhTMlek"},
  {id:"jhTPrlg",url:["taman-perling", "taman-sutera-utama"],name:["Taman Perling", "Taman Sutera Utama"],slc:slc_Jh_TPrlg,lc:["Johor Bahru", "Skudai"],pc:"",pr:'2',st:"jh", co:"MY",oid:"jhTPrlg"},
  {id:"jhTStiaIndah",url:["taman-setia-indah"],name:["Taman Setia Indah"],slc:slc_Jh_TStiaIndah,lc:["Johor Bahru"],pc:"",pr:'2',st:"jh", co:"MY",oid:"jhTStiaIndah"},
  {id:"jhTmpoi",url:["tampoi"],name:["Tampoi"],slc:slc_Jh_Tampoi,lc:["Johor Bahru"],pc:"",pr:'2',st:"jh", co:"MY",oid:""},
  {id:"jhJB",url:["johor-bahru"],name:["Johor Bahru"],slc:"",lc:"Johor Bahru",pc:"",pr:'4',st:"jh", co:"MY",oid:"jhJB"},

  // {id:"jhPulaiIndah",url:[""],name:["Pulai Indah"],slc:"",lc:"Johor Bahru",pc:"",pr:'4',st:"jh", co:"MY",oid:"jhPulaiIndah"},
  {id:"jhKngkarPulai",url:["kangkar-pulai"],name:["Kangkar Pulai"],slc:slc_Jh_KngkarPulai,lc:["Kangkar Pulai", "Skudai", "Johor Bahru", "Iskandar Puteri"],pc:"",pr:'2',st:"jh", co:"MY",oid:"jhKngkarPulai"},
  {id:"jhKluang",url:["kluang"],name:["Kluang"],slc:"",lc:"Kluang",pc:"",pr:'4',st:"jh", co:"MY",oid:"jhKluang"},
  {id:"jhKTggi",url:["kota-tinggi"],name:["Kota Tinggi"],slc:"",lc:"Kota Tinggi",pc:"",pr:'4',st:"jh", co:"MY",oid:"jhKTggi"},
  {id:"jhKlai",url:["kulai"],name:["Kulai"],slc:"",lc:"Kulai",pc:"",pr:'4',st:"jh", co:"MY",oid:"jhKlai"},

  {id:"jhTRntg",url:["taman-rinting"],name:["Taman Rinting"],slc:slc_Jh_TRntg,lc:["Masai"],pc:"",pr:'2',st:"jh", co:"MY",oid:"jhTRntg"},
  {id:"jhPrmsJ",url:["permas-jaya"],name:["Permas Jaya"],slc:slc_Jh_PrmsJ,lc:["Masai"],pc:"",pr:'2',st:"jh", co:"MY",oid:"jhPrmsJ"},
  {id:"jhSAlm",url:["bandar-seri-alam"],name:["Bandar Seri Alam"],slc:slc_Jh_BdrSAlm,lc:["Masai"],pc:"",pr:'2',st:"jh", co:"MY",oid:"jhSAlm"},
  {id:"jhMsai",url:["masai"],name:["Masai"],slc:"",lc:"Masai",pc:"",pr:'4',st:"jh", co:"MY",oid:"jhMsai"},
  {id:"jhMrsg",url:["mersing"],name:["Mersing"],slc:"",lc:"Mersing",pc:"",pr:'4',st:"jh", co:"MY",oid:"jhMrsg"},
  {id:"jhMuar",url:["muar"],name:["Muar"],slc:"",lc:["Muar","Bukit Pasir", "Bukit Bakri", "Sungai Mati", "Parit Jawa", "Pagoh"],pc:"",pr:'4',st:"jh", co:"MY",oid:"jhMuar"},

  {id:"jhHrzHills",url:["horizon-hills"],name:["Horizon Hills"],slc:slc_Jh_HrzHills,lc:["Iskandar Puteri", "Johor Bahru"],pc:"",pr:'2',st:"jh", co:"MY",oid:""},
  {id:"jhMerdini",url:["medini-iskandar-malaysia"],name:["Medini Iskandar Malaysia"],slc:slc_Jh_Merdini,lc:["Iskandar Puteri", "Gelang Patah",],pc:"",pr:'2',st:"jh", co:"MY",oid:""},
  {id:"jhNsaJ",url:["nusajaya"],name:["Nusajaya"],slc:"",lc:"Iskandar Puteri",pc:"",pr:'4',st:"jh", co:"MY",oid:"jhNsaJ"},

  // {id:"jhTBDhlia",url:[""],name:["Taman Bukit Dahlia"],slc:"",lc:"",pc:"",pr:'4',st:"jh", co:"MY",oid:"jhTBDhlia"},
  {id:"jhPGdg",url:["pasir-gudang"],name:["Pasir Gudang"],slc:slc_Jh_PGdg,lc:["Pasir Gudang"],pc:"",pr:'2',st:"jh", co:"MY",oid:"jhPGdg"},

  {id:"jhPntian",url:["pontian"],name:["Pontian"],slc:"",lc:["Pontian", "Pontian District"],pc:"",pr:'4',st:"jh", co:"MY",oid:"jhPntian"},
  {id:"jhSgmat",url:["segamat"],name:["Segamat"],slc:"",lc:["Segamat", "Segamat District"],pc:"",pr:'4',st:"jh", co:"MY",oid:"jhSgmat"},
  {id:"jhSnai",url:["senai"],name:["Senai"],slc:slc_Jh_Senai,lc:["Senai", "Kulai"],pc:"",pr:'2',st:"jh", co:"MY",oid:"jhSnai"},

  {id:"jhTIEmas",url:["impian-emas"],name:["Taman Impian Emas"],slc:slc_Jh_TIEmas,lc:["Skudai"],pc:"",pr:'2',st:"jh", co:"MY",oid:"jhTIEmas"},
  {id:"jhMRni",url:["mutiara-rini"],name:["Mutiara Rini, Taman University"],slc:slc_Jh_MRni,lc:["Skudai"],pc:"",pr:'2',st:"jh", co:"MY",oid:"jhMRni"},
  // {id:"jhTSUtm",url:[""],name:["Taman Sutera Utama"],slc:slc_Jh_TSUtm,lc:"Skudai",pc:"",pr:'2',st:"jh", co:"MY",oid:"jhTSUtm"},
  {id:"jhTUTAminah",url:["taman-ungku-tun-aminah"],name:["Taman Ungku Tun Aminah"],slc:slc_Jh_TAmn,lc:["Skudai"],pc:"",pr:'2',st:"jh", co:"MY",oid:"jhTUTAminah"},
  // {id:"jhTU",url:[""],name:["Taman University"],slc:"",lc:"",pc:"",pr:'2',st:"jh", co:"MY",oid:"jhTU"},
  {id:"jhSkdai",url:["skudai"],name:["Skudai"],slc:"",lc:"Skudai",pc:"",pr:'4',st:"jh", co:"MY",oid:"jhSkdai"},

  {id:"jhTgkak",url:["tangkak"],name:["Tangkak"],slc:"",lc:"Tangkak",pc:"",pr:'4',st:"jh", co:"MY",oid:"jhTgkak"},

  // {id:"jhTPtrWgsa",url:[""],name:["Taman Puteri Wangsa"],slc:"",lc:"Ulu Tiram",pc:"",pr:'4',st:"jh", co:"MY",oid:"jhTPtrWgsa"},
  {id:"jhUlTram",url:["ulu-tiram"],name:["Ulu Tiram"],slc:"",lc:"Ulu Tiram",pc:"",pr:'4',st:"jh", co:"MY",oid:"jhUlTram"},
];

export const cityPenang = [
  "Air Itam", "Balik Pulau", "Batu Ferringhi", "Batu Kawan", "Batu Lanchang", "Batu Maung", "Bayan Baru", "Bayan Lepas", "Bukit Mertajam",
  "Butterworth", "Gelugor", "Georgetown", "Jelutong", "Kepala Batas", "Kulim", "Nibong Tebal", "Perai",
  "Permatang Pauh", "Pulau Tikus", "Simpang Ampat", "Sungai Ara", "Sungai Jawi", "Tasek Gelugor", "Tanjung Bungah",
  "Tanjung Tokong", "Teluk Kumbar"]; //26

export const cityPenangId = [
  "pnAItam", "pnBPulau", "pnBFerr", "pnBKwn", "pnBLnchg", "pnBMaung", "pnBBaru", "pnBLpas", "pnBMtjm",
  "pnBW", "pnGelugor", "pnGT", "pnJltg", "pnKBtas", "pnKlim", "pnNTbal", "pnPrai",
  "pnPPauh", "pnPTkus", "pnSAmpat", "pnSgAra", "pnSgJwi", "pnTGlgor", "pnTBgah",
  "pnTTkg", "pnTKmbar"]; //26

export const slc_Pn_AItam = [
  "Ayer Itam", "Air Itam",
  "Taman Harmoni","Taman Lumba Kuda","Taman Goh Guan Ho","Taman Ayer Itam","Taman Rifle","Reservoir Garden",
  "Taman Ria","Taman Padang Tembak","Kampung Melayu Lama","Taman David Chen","Kampung Baharu","Kampung Melayu",
  "Kampung Pisang","Pekan Ayer Itam","Taman Happy Valley","Desa Baiduri","Emerald Heights",
  // point
  "Desa Scotland","Taman Bound","Rumah Seratus","Taman Green Field","Kampung Cantik",
];
export const slc_Pn_BFerr= [
  "Batu Ferringhi",
  "Kampung Tengah","Kampung Teluk Awak","Kampung Nelayan","Teluk Bahang","Kampung Keling","Feringgi Villas",
  "Kampung Batu Feringgi","Kawasan Perumahan Sungai Emas","Taman Pantai Batu","Beverly Hills",
  "Chee Seng Garden","Taman Leader","Alila Homes",
  // point
  "Pearl Hill",
];
export const slc_Pn_BMaung= [
  "Taman Mewah","Taman Seri Indah","Taman Ipeng","Taman Indah","Taman Muhibbah","Batu Maung","Sunway Mutiara",
  "Diamond Valley Industrial Park","Sunway Tunas Jaya","Taman Desa Wangsa","Kampung Permatang Tepi Bendang",
  "Taman Sri Bayan","Permatang Damar Laut",
  // point
  "Kampung Naran","Bayan Lepas Free Industrial Zone Phase 4","Residencesouthbay","Kampung Teluk Tempoyak Kecil",
  "Southbay","Sunway Cassia",
];
export const slc_Pn_BBaru= [
  "Bandar Bayan Baru",

  "Taman Melati Jaya","Sungai Nibong Kecil","Bayan Baru", "Bandar Bayan Lepas","Elite Height","Pangsapuri Jalan Tengah","Taman Gedung Heights",
  // point
  "Bayan Lepas Free Industrial Zone Phase 3","Taman Sri Tunas","Bayan Lepas Free Industrial Zone Phase 2","Bayan Lepas Free Industrial Zone",
];
export const slc_Pn_BLpas = [
  "Sunway Merica","Taman Sri Bayan","Mutiara Perdana","Setia Pearl Island","Kampung Perlis","Kampung Sungai Tiram","Taman Tunas Damai",
  "Kampung Masjid","Kampung Bukit","Kampung Seronok","Kampung Padang","Kampung Binjai","Kampung Permatang Damar Laut","Krystal Country Home",
  "Saujana Height","Teluk Kumbar Heights","Prestige Heights",
  // point
  "The One Residence","Bayan Indah","Taman Sri Bayu","Emerald Park",
];
export const slc_Pn_BktJmbul= [
  "Bukit Jambul",

  "Taman Sri Nibong","Sungai Nibong","Taman Lip Sin","Taman Bukit Jambul","Bayan Residences","Taman Sri Aman","Desa Indah","Taman Desa Relau",
  // point
  "Krystal Court Apartment","Taman Bendera","Taman Metropolitan Relau","Setia Vista"
];
export const slc_Pn_SgAra= [
  "Sungai Ara",

  "Kampung Darat","Kampung Manggis","Kampung Sungai Ara","Kampung Tersusun Sungai Ara","Kampung Baru Sungai Ara",
  "Taman Seri Acres","Desa Ria","Taman Sri Puteri",
  // point
  "Summerhill Villas","Setia Greens","Desaria Sri Merpati",
];
export const slc_Pn_BMtjm= [
  "Bukit Mertajam",

  "Kampung Kubang Semang","Taman Berapit Indah","Taman Berapit","Taman Mutiara Jaya","Taman Mutiara Indah","Perkampungan Berapit",
  "Taman Pearl","Taman Koperasi Guru","Kampung Uma","Taman Serempun Berapit","Kampung Besar","Kampung Paya","Taman Tan Sai Gin",
  "Bandar Baru Perda","Bukit Tengah","Simpang Ampat Kampung Baru","Taman Kerjasama","Taman Indah","Kampung Tok Panjang",
  "Kampung Bukit Tengah","Taman Iks Bkt Tengah","Kampung Siam","Taman Desa Damai","Taman Jambu Mawar","Taman Gemilang Jaya",
  "Taman Seri Gemilang","Taman Jambu Madu","Taman Mutiara","Pusat Perniagaan Gemilang","Taman Manggis Indah","Taman Eng Seng",
  "Taman Kekwa","Taman Sungai Rambai","Taman Betik Manis","Taman Bukit Kecil","Taman Bukit Keci Indah","Taman Chuan Liew",
  "Taman Belimbing","Taman Bayu Mutiara","Taman Sri Rambai","Kota Permai","Kampung Permatang Tengah","Kampung Telok",
  "Taman Bukit Minyak Utama","Taman Iks Bukit Minyak","Taman Markisah","Kawasan Perindustrian Asas Murni","Taman Sukun",
  "Kawasan Perindustrian Ringan Permatang Tinggi","Taman Permai Jaya","Taman Kota Permai","Taman Keenways","Taman Saujana Permai",
  "Pusat Perniagaan Maju","Pusat Perniagaan Maju Utama","Pusat Perniagaan Maju Jaya","Taman Jaya","Taman Sentosa","Taman Tenang",
  "Taman Seri Bukit Indah","Taman Bandaraya","Taman Sri Tenang","Taman Perpaduan","Taman Jernih","Taman Bee","Taman Alma",
  "Taman Desa Palma","Taman Permata Indah","Taman Permata","Kampung Ceruk Tok Kun B","Pusat Perniagaan Alma","Taman Aman Jaya",
  "Taman Seri Kijang","Kampung Kijang","Taman Alma Jaya","Taman Selamat","Taman Sejahtera Indah","Taman Sejahtera",
  "Kampung Pisang","Taman Remia","Taman Seri Janggus","Taman Selesa","Taman Alma Ria","Taman Impian","Taman Impian Ria",
  "Taman Impian Indah","Desa Impian","Permatang Tinggi","Taman Saujana Indah","Taman Seri Sejahtera","Taman Sejahtera Jaya",
  "Taman Sejahtera Permai","Taman Machang Bubok","Machang Bubok","Taman Jambu","Kampung Macang Bubuk","Taman Bidara",
  "Kampung Berangan Sembilan","Kampung Bukit Teh",
  // point
  "Taman Suria Aman","Kampung Tok Elong","Kampung Desa Wawasan","Taman Sai Gin Baru","Permatang Rawa","Taman Kebun Sireh",
  "Kampung Alma","Kensington Residence","Cherok Tok Kun","Taman Sunyi","Taman Desa Cahaya","Taman Nirwana"
];
export const slc_Pn_BW= [
  "Butterworth",

  "Taman Air Tawar Indah","Kampung Benggali","Taman Sejahtera Indah","Teluk Air Tawar","Taman Ratna","Taman Teluk Molek",
  "Taman Robina","Taman Senangan","Taman Seri Kenangan","Taman Wira","Taman Perkasa","Kampung Bagan Ajam","Bagan Ajam",
  "Taman Tun Dr Awang","Taman Emas","Taman Seri Ceraya","Taman Putra","Taman Selayang Indah","Taman Selayang","Kampung Sungai Puyu",
  "Taman Sri Pinang","Taman Sungai Dua Utama","Sungai Lokan","Ladang Kampung Peng Malayan Machang","Taman Desa Murni",
  "Taman Pengkalan Machang","Taman Seri Murni","Taman Merbau Indah","Merbau Kudung",
  "Taman Perusahaan Sungai Lokan","Kampung Manggis","Kampung Pokok Keras","Kampung Sama Gagah Dalam","Taman Cengal","Taman Pandan",
  "Taman Teratai","Taman Baiduri","Taman Cengkih","Taman Puyu","Taman Bagan Lalang","Taman Dedap Indah","Taman Dedap","Taman Mesra Permai",
  "Taman Perindustrian Teras Jaya","Taman Merbau","Taman Molek","Taman Bagan Ajam","Kampung Tengah","Taman Jermal Indah","Kampung Kastam",
  "Taman Tanjung Aman","Taman Tanjung Indah","Taman Sentral","Taman Segar Jaya","Taman Segar","Taman Segar Indah","Taman Bayu","Taman Mekar",
  "Taman Sri Nasib","Taman Tanjung","Taman Riang","Kampung Gajah","Kampung Paya","Taman Aman Jaya","Taman Dahlia","Kawasan Perindustrian Mak Mandin",
  "Villa Sri Bagan","Taman Bagan","Kampung Simpah","Kampung Nyiur","Kompleks Chain Ferry","Taman Limbungan Indah","Kampung Perlis","Bagan Dalam",
  "Taman Bagan Baru","Kampung Jawa","Taman Mewah","Taman Selat","Taman Ampang Jajar","Taman Kerapu",
  // point
  "Bagan Belat","Taman Teluk Air Tawar","Taman Zamrud","Bagan Lebai Tahir","Taman Udara","Alor Merah","Taman Merbau Jaya",
  "Kawasan Perusahaan Sungai Rokan","Kampung Tok Sani","Taman Mega","Taman Intan","Taman Pantai Bersih"
];
export const slc_Pn_TCentury = [
  "Taman Century", "Queensbay",

  "Sunway Bukit Gambier","Kampung Batu Uban","Century Garden","Taman Century","Kampung Dua Bukit","Desa Permai Indah",
  "Taman Saw Kit","Baygarden","Taman Pantai Jerjak","Taman Sri Bunga",
  // point
  "Taman Utama"
];
export const slc_Pn_Gelugor= [
  "Kampung Kastam","Taman Tun Sardon","Taman Bukit Gambier","Ashley Green","Desa Mutiara Ii","Taman Brown","Kampung Gelugor","Minden Heights"
];
export const slc_Pn_GT = [
  "Taman Lalulintas","Taman Scotland","Taman Dhoby Ghaut","Taman Rampas","Taman Kampar","Taman Free School","Kampung Dodol",
  "Taman Jelutong Jaya","Taman Penang","Sungai Pinang","Taman Lembah Sungai","Pengkalan Weld","Taman Cemerlang","Taman Abidin",
  "Kampung Rawa","Taman Windmill","Fortune Park",
  // point
  "Taman Wangi","Kampung Jawa Lama"
];
export const slc_Pn_Jelutong= [
  "Jelutong","Taman Lita","Taman Ara","Taman Desa Green","Taman Sri Husin","Taman Cheeseman","Taman Kennedy","Taman Guan Joo Seng",
  "Island Park","Taman Lembah Hijau","Taman Greenview","Taman Island Glades","Taman Gelugur",
  "Bukit Dumbar","Taman Green Lane","Taman Koperasi Jelutong","Taman Continental","Taman Sri Damai",
  // point
  "Desa Jelutong","Metro Avenue",
];
export const slc_Pn_NTbal = [
  "Taman Nibong Tebal Jaya","Taman Perindustrian Nibong Tebal","Taman Cenderawasih Indah","Taman Belatuk","Taman Camar Jaya",
  "Taman Bersatu","Taman Panchor Indah","Taman Ilmu","Kampung Teluk","Taman Ilmu","Taman Sempadan","Taman Transkrian",
  "Taman Golden Jade","Taman Tempua","Taman Seri Emas","Taman Selesa","Taman Harapan","Taman Seri Acheh","Taman Sinar",
  "Taman Fajar Indah","Kampung Permatang Keling","Kampung Sungai Tongkang","Kampung Sungai Bakau","Kampung Sungai Setar Besar",
  "Kampung Sungai Setar","Kampung Tanjung Berembang","Kampung Sungai Tok Tuntung","Kampung Udang Kecil","Kampung Sungai Aceh",
  "Taman Victoria","Taman Seri Bistari","Taman Tekukur Indah","Taman Bistari",
  // point
  "Kampung Ladang Kerian","Bukit Panchor","Kampung Permatang Tok Mahat","Sungai Chenaam","Kampung Chelsa","Taman Nuri",
];
export const slc_Pn_Perai= [
  "Perai", "Seberang Perai", "Seberang Jaya",

  "Taman Inderawasih","Taman Senangin","Seberang Jaya","Taman Tun Hussein Onn","Taman Sutera Prima","Taman Sutera",
  "Kampung Setul","Kampung Teluk","Taman Pauh Jaya","Taman Pauh","Taman Bunga Raya","Taman Nagasari","Kawasan Perusahaan Perai 3",
  "Taman Perindustrian Saga Jaya","Kampung Jawa","Kawasan Perusahaan Bebas Perai","Kawasan Perindustrian Prai Fasa 4",
  "Kawasan Perusahaan Perai","Bandar Perai Jaya","Taman Supreme","Taman Emas","Kampung Dock","Taman Perai Utama",
  // point
  "Seri Tenggiri","Lampam",
];
export const slc_Pn_PTkus= [
  "Hong Seng Estate",
  "Pulau Tikus",
  "Taman Jesselton Height",
  "Taman Barat",
  "Kampung Syed",
];
export const slc_Pn_SgJwi=[
  "Kawasan Perindustrian Valdor","Kampung Gurun","Val d'Or","Taman Bakap Indah","Taman Sri Aman","Taman Gamelan Indah",
  "Taman Kuang","Kampung Permatang Ara","Kampung Makau Suah","Taman Seruling Emas","Kampung Kebun Nyiur","Kampung Bagan Buaya",
  "Kampung Wellesley","Kampung Lima","Taman Jawi Permai","Taman Jawi Indah","Taman Widuri","Kampung Sungai Duri","Kampung Sungai Baong",
  // point
  "Ladang Valdor","Taman Seruling","Perkampungan Jawi","Pulau Burung","Kampung Ladang Sempah",
];
export const slc_Pn_TBgah= [
  "", "",
  "", "", "", "", "", "", "", "",
];
export const slc_Pn_TTkg= [
  "Tanjung Tokong",

  "Seri Tanjung Pinang","Taman Teguh","Kampung Masjid Bagan",
  // point
  "Tanjung Villa","Ladang Lada","Taman Ong Bee Neoh",
];
export const slc_Pn_TKmbar= [
  "Teluk Kumbar",

  "Taman Batu Bukit","Taman Pantai Indah","Vanilla Bay","Kampung Teluk Kumbar","Kampung Hutan Nibung","Bandar Baru Telok Kumbar",
  "Taman Kumbar Permai","Kampung Masjid","Kampung Tengah","Kampung Suluk",
  // point
  "Bandar Baru Telok Kumbar B","Taman Gertak Sanggul",
];
export const slc_Pn_Juru= [
  "Taman Bukit Minyak Indah","Taman Sentul Jaya","Taman Juru","Juru","Taman Seri Juru","Kampung Junjong Mati",
  "Kawasan Industri Ringan Asas Jaya","Kawasan Perindustrian Bukit Minyak","Taman Perindustrian Ringan Usahajaya",
  "Taman Industri Teguh","Taman Perindustrian Ringan Juru","Residency Cendana","Kampung Sungai Semilang","Juru Heights",

  "Taman Bukit Minyak",
  // point
  "Desa Mutiara","Taman Perwira Indah","Taman Pinang","Taman Kota Permai",
];
export const slc_Pn_SAmpat= [
  "Taman Nilam Tanjung","Taman Mutiara Tanjung","Taman Mutiara Cempaka","Kampung Masjid","Batu Kawan","Crescentia Park",
  "Kampung Pa Mong","Kampung Pa Bo","Taman Merpati Indah","Taman Merak","Taman Iks","Taman Tangling","Taman Merak Jaya",
  "Taman Tambun Indah","Taman Kasawari","Taman Tempua",
  "Kampung Cempedak","Kampung Kepala Gajah","Taman Puteri Gunung","Bandar Tasek Mutiara","Taman Pekatra Indah",
  "Kampung Jawi Sempit","Kampung Tasek Cempedak","Kampung Padang Lalang","Kampung Tasik","Kampung Cangkat",
  // point
  "Bandar Cassia","Bukit Tambun","Taman Tangling Jaya","Taman Murai Jaya","Tasek","Kampung Balik Bukit",
];
export const cityPenangObj = [
  {id:"pnAItam",url:["air-itam"],name:["Air Itam"],slc:slc_Pn_AItam,lc:["Ayer Itam", "Air Itam"],pc:"",pr:'2',st:"pn", co:"MY",oid:"pnAItam"},
  {id:"pnBPulau",url:["balik-pulau"],name:["Balik Pulau"],slc:"",lc:"Balik Pulau",pc:"",pr:'4',st:"pn", co:"MY",oid:"pnBPulau"},
  {id:"pnBFerr",url:["batu-ferringhi"],name:["Batu Ferringhi"],slc:slc_Pn_BFerr,lc:["Batu Ferringhi", "Tanjung Bungah"],pc:"",pr:'2',st:"pn", co:"MY",oid:""},

  {id:"pnBMaung",url:["batu-maung"],name:["Batu Maung"],slc:slc_Pn_BMaung,lc:["Bayan Lepas", "Batu Maung"],pc:"",pr:'2',st:"pn", co:"MY",oid:""},
  {id:"pnBBaru",url:["bayan-baru"],name:["Bayan Baru"],slc:slc_Pn_BBaru,lc:["Bayan Lepas"],pc:"",pr:'2',st:"pn", co:"MY",oid:"pnBBaru"},
  {id:"pnBktJmbul",url:["bukit-jambul"],name:["Bukit Jambul"],slc:slc_Pn_BktJmbul,lc:["Bayan Lepas"],pc:"",pr:'2',st:"pn", co:"MY",oid:""},
  {id:"pnSgAra",url:["sungai-ara"],name:["Sungai Ara"],slc:slc_Pn_SgAra,lc:["Bayan Lepas"],pc:"",pr:'2',st:"pn", co:"MY",oid:"pnSgAra"},
  {id:"pnBLpas",url:["bayan-lepas"],name:["Bayan Lepas"],slc:slc_Pn_BLpas,lc:"Bayan Lepas",pc:"",pr:'4',st:"pn", co:"MY",oid:"pnBLpas"},

  {id:"pnBMtjm",url:["bukit-mertajam"],name:["Bukit Mertajam"],slc:slc_Pn_BMtjm,lc:["Bukit Mertajam"],pc:"",pr:'2',st:"pn", co:"MY",oid:"pnBMtjm"},
  {id:"pnBW",url:["butterworth"],name:["Butterworth"],slc:slc_Pn_BW,lc:["Butterworth"],pc:"",pr:'2',st:"pn", co:"MY",oid:"pnBW"},

  {id:"pnTCentury",url:["taman-century-queensbay"],name:["Taman Century, Queensbay"],slc:slc_Pn_TCentury,lc:["Gelugor", "Bayan Lepas"],pc:"",pr:'2',st:"pn", co:"MY",oid:"pnGelugor"},
  {id:"pnGelugor",url:["gelugor"],name:["Gelugor"],slc:slc_Pn_Gelugor,lc:["Gelugor"],pc:"",pr:'2',st:"pn", co:"MY",oid:"pnGelugor"},

  {id:"pnPTkus",url:["pulau-tikus"],name:["Pulau Tikus"],slc:slc_Pn_PTkus,lc:["George Town"],pc:"",pr:'2',st:"pn", co:"MY",oid:"pnPTkus"},
  {id:"pnGT",url:["george-town"],name:["George Town"],slc:slc_Pn_GT,lc:"George Town",pc:"",pr:'4',st:"pn", co:"MY",oid:"pnGT"},

  // {id:"pnBLnchg",url:[""],name:["Batu Lanchang"],slc:"",lc:"",pc:"",pr:'4',st:"pn", co:"MY",oid:""},
  {id:"pnJltg",url:["jelutong"],name:["Jelutong"],slc:slc_Pn_Jelutong,lc:["Jelutong"],pc:"",pr:'2',st:"pn", co:"MY",oid:"pnJltg"},

  {id:"pnKBtas",url:["kepala-batas"],name:["Kepala Batas"],slc:"",lc:"Kepala Batas",pc:"",pr:'4',st:"pn", co:"MY",oid:"pnKBtas"},
  // {id:"pnKlim",url:[""],name:["Kulim"],slc:"",lc:"",pc:"",pr:'4',st:"pn", co:"MY",oid:"pnKlim"},
  {id:"pnNTbal",url:["nibong-tebal"],name:["Nibong Tebal"],slc:slc_Pn_NTbal,lc:"Nibong Tebal",pc:"",pr:'4',st:"pn", co:"MY",oid:"pnNTbal"}, // Overlapped
  {id:"pnPenaga",url:["penaga"],name:["Penaga"],slc:"",lc:"Penaga",pc:"",pr:'4',st:"pn", co:"MY",oid:""},
  {id:"pnPrai",url:["perai"],name:["Perai"],slc:slc_Pn_Perai,lc:["Perai", "Seberang Perai", "Seberang Jaya"],pc:"",pr:'4',st:"pn", co:"MY",oid:"pnPrai"},
  {id:"pnPPauh",url:["permatang-pauh"],name:["Permatang Pauh"],slc:"",lc:"Permatang Pauh",pc:"",pr:'4',st:"pn", co:"MY",oid:"pnPPauh"},

  // {id:"pnBKwn",url:[""],name:["Batu Kawan"],slc:"",lc:"",pc:"",pr:'4',st:"pn", co:"MY",oid:""},
  {id:"pnJuru",url:["juru"],name:["Juru"],slc:slc_Pn_Juru,lc:["Simpang Ampat", "Bukit Mertajam"],pc:"",pr:'2',st:"pn", co:"MY",oid:""},
  {id:"pnSAmpat",url:["simpang-ampat"],name:["Simpang Ampat"],slc:slc_Pn_SAmpat,lc:["Simpang Ampat", "Sungai Jawi"],pc:"",pr:'2',st:"pn", co:"MY",oid:"pnSAmpat"},

  {id:"pnSgDua",url:["sungai-dua"],name:["Sungai Dua"],slc:"",lc:"Sungai Dua",pc:"",pr:'4',st:"pn", co:"MY",oid:""}, // Overlapped
  {id:"pnSgJwi",url:["sungai-jawi"],name:["Sungai Jawi"],slc:slc_Pn_SgJwi,lc:["Sungai Jawi", "Nibong Tebal"],pc:"",pr:'2',st:"pn", co:"MY",oid:"pnSgJwi"},
  {id:"pnTGlgor",url:["tasek-gelugor"],name:["Tasek Gelugor"],slc:"",lc:"Tasek Gelugor",pc:"",pr:'4',st:"pn", co:"MY",oid:"pnTGlgor"},
  {id:"pnTBgah",url:["tanjung-bungah"],name:["Tanjung Bungah"],slc:"//slc_Pn_TBgah",lc:["Tanjung Bungah"],pc:"",pr:'4',st:"pn", co:"MY",oid:"pnTBgah"},
  {id:"pnTTkg",url:["tanjung-tokong"],name:["Tanjung Tokong"],slc:slc_Pn_TTkg,lc:["Tanjung Tokong", "George Town", "Tanjung Bungah"],pc:"",pr:'2',st:"pn", co:"MY",oid:"pnTTkg"},
  {id:"pnTKmbar",url:["teluk-kumbar"],name:["Teluk Kumbar"],slc:slc_Pn_TKmbar,lc:["Teluk Kumbar"],pc:"",pr:'2',st:"pn", co:"MY",oid:"pnTKmbar"},
]


export const cityNegeriSembilan = ["Ampangan", "Bahau", "Bandar Ainsdale","Bandar Baru Nilai",
    "Bandar Enstek", "Bandar Seri Jempol", "Bandar Springhill", "Bandar Sri Sendayan",
    "Batu Kikir", "Gemas", "Gemencheh", "Johol", "Kota", "Kuala Klawang", "Kuala Pilah",
    "Labu", "Lavender Heights", "Linggi", "Lukut", "Mambau", "Mantin", "Nilai", "Paroi", "Port Dickson",
    "Pusat Bandar Palong", "Rantau", "Rasah Jaya", "Rembau", "Rompin", "S2 Heights", "Senawang", "Seremban", "Seremban 2",
    "Seremban 3", "Si Rusa", "Sikamat", "Simpang Durian", "Simpang Pertang",
    "Tampin", "Tanjong Ipoh", "Teluk Kemang"]; // 41

export const cityNegeriSembilanId = ["n9Ampgn", "n9Bhau", "n9BAinsd","n9BBNlai",
    "n9BEnstek", "n9BSJpl", "n9BSprghill", "n9BSSdyan",
    "n9BKkr", "n9Gmas", "n9Gmcheh", "n9Jhl", "n9Kota", "n9KKlwg", "n9KPlah",
    "n9Lbu", "n9LvndrH", "n9Lggi", "n9Lkut", "n9Mbau", "n9Mtn", "n9Nlai", "n9Proi", "n9PD",
    "n9PBPlg", "n9Rtau", "n9RshJ", "n9Rbau", "n9Rpin", "n9S2H", "n9Snwg", "n9Srmbn", "n9Srmbn2",
    "n9Srmbn3", "n9SRusa", "n9Skmt", "n9SDrian", "n9SPrtg",
    "n9Tmpn", "n9TIpoh", "n9TKmg"];

export const slc_ns_Ampngn= [

  "Kampung Bahagia Ampangan","Gedong Lalang","Kampung Ismail","Bandar Baru Ampangan","Golf Height","Taman Dato Shah Bandar",
  "Taman Lee Siew Joo","Taman Purba","Taman Nyior","Taman Dusun Setia","Taman Dusun Nyior","Taman Bidara","Taman Merdeka Height",
  "Taman Guru Melayu","Taman Kasih","Taman Dato Wan","Taman Bukti Setia","Taman Sri Negeri",
  // point
  "Ampangan","Taman Shukor","Rahang Kechil","Taman Sri Siantan","Taman Forest Heights Precinct 4","Taman Sri Bakawali",
];
export const slc_ns_BAinsd= [
  "Bandar Ainsdale", "Taman Jasper Jaya","Taman Bukit Galena","Galla Industrial Park","Taman Mutiara Galla",
  // point
  "Suci","Bandar Ainsdale (Mekar dan Segar)","Bandar Ainsdale (Anggun)","Frontier City @ Bandar Ainsdale",
];
export const slc_ns_Sdyn= [
  "", "",
  "", "", "", "", "", "", "", "",
];
export const slc_ns_LvndrH= [

  "Taman Desa Duranta","Taman Melati Indah","Taman Kiambang Indah","Desa Duranta","Taman Sri Kasih","Taman Ros Mewah",
  "Taman Cempaka","Taman Desa Orkid","Taman Seri Bayu","Kampung Sentosa","Taman Kwang Tong","Taman Perindustrian Senawang",
  "Kampung Paroi","Taman Seri Pagi","Taman Lily","Taman Tasik Jaya","Lavendar Heights",
];
export const slc_ns_Snwg =[
"Desa Flora","Taman Desa Ixora","Taman Teratai","Pusat Bandar Senawang","Taman Desa Melor","Taman Marida","Taman Desa Dahlia",
"Taman Kobena","Taman Senawang Indah","Taman Satria","Taman Alamanda","Taman Desa Anggerik","Taman Jasmin","Taman Senawang Jaya",
"Taman Cattleya","Taman Tuanku Jaafar","Senawang Light Industry Area","Taman Perniagaan Senawang","Taman Senangin","Taman Seremban Jaya",
"Taman Pinggiran Senawang",
//point
"Angsi Ville","Kasia Ville","Taman Perindustrial Tuanku Jafaar 1","Kawasan Perindustrian Ringan Andalas","Sri Senawang Industrial Area",
"Industri Tunku Jaafar 2","Seremban Forest Heights",
];
export const slc_ns_S2H= [
  "Green Street Homes Seremban 2","Emerald Park Seremban 2","Central Park Seremban 2","Aviva Green","S2 Heights","Taman Bukit Kepayang",
  "Taman Bukit Kepayang 1","Taman Bukit Kaya","Taman Labu Utama","Taman Bukit Labu",
  // point
  "Serena S2 Heights","Symphony S2 Heights","Taman Melody",
];
export const slc_ns_Srmbn= [
  "Seremban",

  "Taman Bukit Intan","Taman Bukit Jed","Taman Makmur","Taman Baiduri","Taman Koop","Taman Permata","Kampung Lobak","Taman Dawn",
  "Taman Templer","Taman Suria","Bukit Mika","Taman Chip Aik","Bukit Desa","Kawasan Perindustrian Ringan Jalan Tun Dr Ismail",
  "Taman Bukit Berlian","Taman Gembira","Taman Bukit Sentosa","Taman Bukit Zamrud","Taman Bukit Mutiara","Taman King Wong","Kampung Bukit Jong",
  "Taman Jaya Emas","Taman Nee Yan","Kampung Baharu Batu Temiang","Taman Bukit Temiang","Taman Unian","Taman Bukit Lemon",
  "Taman Saga","Rumah Pangsa Lobak","Taman Ast","Taman Labu Jaya","Taman Bukit Merbok","Taman Bukit Tembok","Taman Duyung",
  "Kemayan Square","Taman Permai","Taman Oakland","Taman Permai Ii","Taman Permai Iii","Kampung Baru Rasah","Taman Bukit Chedang",
  "Taman Klana Jubli","Taman Ho","Taman Limau Emas","Taman Ban Aik","Taman Anggur Jaya","Bukit Rasah","Kampung Dato Mansor","Taman Negeri",
  "Kampung Abok","Taman Seri Rahang","Taman Bukit Nona","Kampung Tekir","Taman Sim",
  // point
  "Taman Kelana Indah","Kawasan Perindustrian Ringan Jalan Tun Dr. Ismail","Era Square",
];
export const slc_ns_Srmbn2= [
  "Seremban 2",

  "Taman Oakland Fasa 3","Taman Chedang Indah","Taman Megah","Green Technology Park","Taman Bukit Chedang Fasa 2",
  "Green Technology Park Seremban 2","City Centre","Biz Avenue Shop","Vision Homes","Sri Carcosa Seremban 2",
  "Park Avenue Seremban 2","Garden Avenue Seremban 2","Kampung Kayu Ara","Garden Homes Seremban 2","Pearl 132",
  "Taman Mambau Baru","Kampung Baharu Mambau","Kampung Mambau",
  // point
  "Lake View Square Seremban 2","Uptown Avenue Seremban 2","Biz Avenue Seremban 2","Arowana Indah","Saffron Seremban 2","Acacia Seremban 2","Rimba Residensi",
];
export const slc_ns_Srmbn3= [
  "Taman Kian Kee","Taman Seremban","Taman Tan Chee Hoe","Taman Sri Mawar","Taman Merpati","Kampung Baru Rahang","Taman Ideal","Taman South East",
  "Taman Layang-layang","Taman Sri Kamban","Taman Sea","Taman Bunga Blossom","Taman Kenari","Taman Star Light","Kampung Tok Ungku",
  "Taman Blossom Height","Taman Ujong","Taman Loop","Taman Punca Emas","Taman Thivy Jaya","Taman Sri Puteh","Taman Kasturi","Taman Bahagia",
  "Taman Sungai Ujong","Taman Harapan Baru","Taman Merbok Ria","Seremban 3","Taman Kok Ann","Taman Desa Rasah","Taman Rasah Jaya",
  "Kampung Belangkan Ulu","Kampung Nyatoh","Taman Bunga Sejati","Kuala Sawah","Kampung Kuala Sawah Pasir",
  "Kampung Dalam","Kampung Landas","Kampung Ulu Lalang","Kampung Bemban","Kampung Bemban Hilir",
];
export const slc_ns_Skmt= [
  "Sikamat",

  "Taman Desa Rhu","Sikamat Acassia Country Height","Taman Sri Penaga","Taman Sri Sikamat","Taman Sri Jati","Taman Sikamat Utama","Taman College Heights",
  "Taman Bukit Coral","Taman Desa Kiara","Taman Sri Pulai","Taman Suliana","Taman Rashida Indah","Taman Indah","Taman Temiang Jaya","Taman Tunku Kurshiah",
  "Taman Pinang Gading","Taman Sikamat Baru","Taman England","Taman Tuah","Taman Sikamat","Taman Murugesu","Taman Cermai Jaya","Taman Desa Manggis",
  "Kampung Bukit Merbah","Taman Angsana","Taman Sri Pulai 2","Taman Megaway","Desa Beringin","Taman Selaseh",
  "Taman Jujur","Taman Pelangi","Taman Sri Inai","Taman Kiara Indah","Kampung Seri Sikamat Seremban","Kampung Ujong Pasir",
  "Taman Ujung Pasir","Taman Kayu Manis","Taman Desa Permai","Taman Ampangan Jaya","Kawasan Perusahaan Pantai","Kampung Dato Wong Seng Chau",
  "Kampung Sikamat","Precinct 4",
  // point
  "Kampung Baru Sikamat","Bandar Warisan Puteri",
];
export const slc_ns_Proi= [
  "Paroi", "Taman Bukit Ampangan",

  "Taman Pinggiran Golf","Taman Paroi Jaya","Palma Jaya Perdana","Taman Panchor Jaya","Taman Manong","Taman Sri Telawi",
  "Perumahan Rakyat Panchor","Kampung Melayu Panchur","Taman Zamrud","Taman Bukit Margosa",
  // point
  "Taman Pj Perdana","Taman Ampangan",
];
export const cityNegeriSembilanObj = [
  {id:"n9Bhau",url:["bahau"],name:["Bahau"],slc:"",lc:"Bahau",pc:"",pr:'4',st:"ns", co:"MY",oid:"n9Bhau"},
  // {id:"n9BBNlai",url:["bandar-baru-nilai"],name:["Bandar Baru Nilai"],slc:"",lc:"Nilai",pc:"",pr:'4',st:"ns", co:"MY",oid:"n9BBNlai"},

  {id:"n9BEnstek",url:["bandar-enstek"],name:["Bandar Enstek"],slc:"",lc:"Bandar Baru Enstek",pc:"",pr:'4',st:"ns", co:"MY",oid:"n9BEnstek"},
  {id:"n9BSJpl",url:["bandar-seri-jempol"],name:["Bandar Seri Jempol"],slc:"",lc:"Bandar Seri Jempol",pc:"",pr:'4',st:"ns", co:"MY",oid:"n9BSJpl"},
  // {id:"n9BSprghill",url:["springhill"],name:["Bandar Springhill"],slc:"",lc:"Siliau",pc:"",pr:'4',st:"ns", co:"MY",oid:"n9BSprghill"},
  // {id:"n9BKkr",url:["n"],name:["Batu Kikir"],slc:"",lc:"",pc:"",pr:'4',st:"ns", co:"MY",oid:"n9BKkr"},
  {id:"n9Gmas",url:["gemas"],name:["Gemas"],slc:"",lc:"Gemas",pc:"",pr:'4',st:"ns", co:"MY",oid:"n9Gmas"},
  {id:"n9Gmcheh",url:["gemencheh"],name:["Gemencheh"],slc:"",lc:"Gemencheh",pc:"",pr:'4',st:"ns", co:"MY",oid:"n9Gmcheh"},
  {id:"n9Jhl",url:["johol"],name:["Johol"],slc:"",lc:"Johol",pc:"",pr:'4',st:"ns", co:"MY",oid:"n9Jhl"},
  {id:"n9Kota",url:["kota"],name:["Kota"],slc:"",lc:"Kota",pc:"",pr:'4',st:"ns", co:"MY",oid:"n9Kota"},
  {id:"n9KKlwg",url:["kuala-klawang"],name:["Kuala Klawang"],slc:"",lc:"Kuala Klawang",pc:"",pr:'4',st:"ns", co:"MY",oid:"n9KKlwg"},
  {id:"n9KPlah",url:["kuala-pilah"],name:["Kuala Pilah"],slc:"",lc:"Kuala Pilah",pc:"",pr:'4',st:"ns", co:"MY",oid:"n9KPlah"},
  {id:"n9Lbu",url:["labu"],name:["Labu"],slc:"",lc:"Labu",pc:"",pr:'4',st:"ns", co:"MY",oid:"n9Lbu"},
  {id:"n9Lggi",url:["linggi"],name:["Linggi"],slc:"",lc:"Linggi",pc:"",pr:'4',st:"ns", co:"MY",oid:"n9Lggi"},
  {id:"n9Lkut",url:["lukut"],name:["Lukut"],slc:"",lc:"Lukut",pc:"",pr:'4',st:"ns", co:"MY",oid:"n9Lkut"},
  // {id:"n9Mbau",url:["n"],name:["Mambau"],slc:"",lc:"",pc:"",pr:'4',st:"ns", co:"MY",oid:"n9Mbau"},
  {id:"n9Mtn",url:["mantin"],name:["Mantin"],slc:"",lc:"Mantin",pc:"",pr:'4',st:"ns", co:"MY",oid:"n9Mtn"},
  {id:"n9Nlai",url:["nilai"],name:["Nilai"],slc:"",lc:"Nilai",pc:"",pr:'4',st:"ns", co:"MY",oid:"n9Nlai"},
  {id:"n9PD",url:["port-dickson"],name:["Port Dickson"],slc:"",lc:"Port Dickson",pc:"",pr:'4',st:"ns", co:"MY",oid:"n9PD"},
  // {id:"n9PBPlg",url:["n"],name:["Pusat Bandar Palong"],slc:"",lc:"",pc:"",pr:'4',st:"ns", co:"MY",oid:"n9PBPlg"},
  {id:"n9Rtau",url:["rantau"],name:["Rantau"],slc:"",lc:"Rantau",pc:"",pr:'4',st:"ns", co:"MY",oid:"n9Rtau"},
  // {id:"n9RshJ",url:["n"],name:["Rasah Jaya"],slc:"",lc:"",pc:"",pr:'4',st:"ns", co:"MY",oid:"n9RshJ"},
  {id:"n9Rbau",url:["rembau"],name:["Rembau"],slc:"",lc:"Rembau",pc:"",pr:'4',st:"ns", co:"MY",oid:"n9Rbau"},
  {id:"n9Rpin",url:["rompin"],name:["Rompin"],slc:"",lc:"Rompin",pc:"",pr:'4',st:"ns", co:"MY",oid:"n9Rpin"},
  {id:"n9Snwg",url:["senawang"],name:["Senawang"],slc:slc_ns_Snwg,lc:["Senawang"],pc:"",pr:'2',st:"ns", co:"MY",oid:"n9Snwg"},

  {id:"n9Ampgn",url:["ampangan"],name:["Ampangan"],slc:slc_ns_Ampngn,lc:["Seremban", "Ampangan"],pc:"",pr:'2',st:"ns", co:"MY",oid:"n9Ampgn"},
  {id:"n9BAinsd",url:["bandar-ainsdale"],name:["Bandar Ainsdale"],slc:slc_ns_BAinsd,lc:["Seremban", "Labu"],pc:"",pr:'2',st:"ns", co:"MY",oid:"n9BAinsd"},
  {id:"n9BSSdyan",url:["bandar-sri-sendayan"],name:["Bandar Sri Sendayan"],slc:slc_ns_Sdyn,lc:["Seremban"],pc:"",pr:'2',st:"ns", co:"MY",oid:"n9BSSdyan"},
  {id:"n9LvndrH",url:["lavender-heights"],name:["Lavender Heights"],slc:slc_ns_LvndrH,lc:["Seremban"],pc:"",pr:'2',st:"ns", co:"MY",oid:"n9LvndrH"},
  {id:"n9Proi",url:["paroi"],name:["Paroi"],slc:slc_ns_Proi,lc:["Seremban", "Paroi"],pc:"",pr:'2',st:"ns", co:"MY",oid:"n9Proi"},
  {id:"n9S2H",url:["s2-heights"],name:["S2 Heights"],slc:slc_ns_S2H,lc:["Seremban", "Labu"],pc:"",pr:'2',st:"ns", co:"MY",oid:"n9S2H"},
  {id:"n9Srmbn2",url:["seremban-2"],name:["Seremban 2"],slc:slc_ns_Srmbn2,lc:["Seremban"],pc:"",pr:'2',st:"ns", co:"MY",oid:"n9Srmbn2"},
  {id:"n9Srmbn3",url:["seremban-3"],name:["Seremban 3"],slc:slc_ns_Srmbn3,lc:["Seremban", "Rantau"],pc:"",pr:'2',st:"ns", co:"MY",oid:"n9Srmbn3"},
  {id:"n9Skmt",url:["sikamat"],name:["Sikamat"],slc:slc_ns_Skmt,lc:["Seremban"],pc:"",pr:'2',st:"ns", co:"MY",oid:"n9Skmt"},
  {id:"n9Srmbn",url:["seremban"],name:["Seremban"],slc:slc_ns_Srmbn,lc:"Seremban",pc:"",pr:'4',st:"ns", co:"MY",oid:"n9Srmbn"}, // Special case pr 4 with slc

  {id:"n9SRusa",url:["si-rusa"],name:["Si Rusa"],slc:"",lc:"Si Rusa",pc:"",pr:'4',st:"ns", co:"MY",oid:"n9SRusa"},
  {id:"n9SDrian",url:["simpang-durian"],name:["Simpang Durian"],slc:"",lc:"Simpang Durian",pc:"",pr:'4',st:"ns", co:"MY",oid:"n9SDrian"},
  {id:"n9SPrtg",url:["simpang-pertang"],name:["Simpang Pertang"],slc:"",lc:"Simpang Pertang",pc:"",pr:'4',st:"ns", co:"MY",oid:"n9SPrtg"},
  {id:"n9Tmpn",url:["tampin"],name:["Tampin"],slc:"",lc:"Tampin",pc:"",pr:'4',st:"ns", co:"MY",oid:"n9Tmpn"},
  // {id:"n9TIpoh",url:["n"],name:["Tanjong Ipoh"],slc:"",lc:"",pc:"",pr:'4',st:"ns", co:"MY",oid:"n9TIpoh"},
  // {id:"n9TKmg",url:["n"],name:["Teluk Kemang"],slc:"",lc:"",pc:"",pr:'4',st:"ns", co:"MY",oid:"n9TKmg"},
]

export const cityMelaka = ["Alai", "Alor Gajah","Asahan", "Ayer Keroh", "Ayer Molek",
    "Bachang", "Batu Berendam", "Bemban", "Bukit Baru", "Bukit Beruang", "Bukit Katil", "Bukit Rambai", "Cheng",
    "Durian Tunggal", "Jasin","Kem Trendak", "Klebang", "Krubong",
    "Kuala Sungai Baru", "Lendu", "Lubok China", "Machap Baru", "Malim Jaya", "Masjid Tanah",
    "Melaka Raya", "Merlimau", "Nyalas", "Selandar", "Serkam", "Simpang Ampat, Melaka",
    "Sungai Rambai", "Sungai Udang", "Tanjung Bidara", "Tanjong Kling",
    "Telok Mas", "Ujong Pasir"]; //36
export const cityMelakaId = ["mkAlai", "mkAGjh","mkAshn", "mkAKerh", "mkAMolk",
    "mkBchg", "mkBBrdm", "mkBmbn", "mkBBru", "mkBBruang", "mkBKtil", "mkBRmbi", "mkChg",
    "mkDTggal", "mkJsn","mkKTrndk", "mkKlebg", "mkKrubg",
    "mkKSgBru", "mkLndu", "mkLChina", "mkMchpBru", "mkMlmJ", "mkMasjTnh",
    "mkMRaya", "mkMlimau", "mkNyals", "mkSldar", "mkSkam", "mkSAmpat",
    "mkSgRmbai", "mkSgUdg", "mkTBdr", "mkTKlng",
    "mkTlkMas", "mkUjgPasir"];
export const slc_mk_Alai = [
  "Alai", "Telok Mas", "Merlimau", "Tanjung Kling",

  "Kampung Tambak Sebelong","Taman Permatang Pasir Permai","Kampung Bukit Punggor","Kampung Balik Bukit","Kampung Ketapang",
  "Taman Seri Telok Emas","Kampung Jawa","Kampung Tasek","Taman Bukit Tembakau","Taman Balkis","Kampung Bukit Tembakau",
  "Umbai","Kampung Tengah",
  // point
  "Taman Kandang Permai",
];
export const slc_mk_AMolk= [
  "Ayer Molek",

  "Taman Duyong Permai","Kampung Bukit Baharu","Taman Semabok Jaya","Taman Semabok Permai","Kampung Jambatan Duyong",
  "Taman Seri Duyong 2","Taman Seri Duyong","Taman Demang","Taman Desa Molek","Taman Ayer Molek","Kampung Permatang",
  "Kampung Ayer Molek","Kampung Tambak Paya","Kampung Tengah .","Kampung Bukit Batu",
  // point
  "Taman Seri Duyong Seksyen 1","Taman Mesra Ayer Molek","Kampung Tanjong Mak Midah","Taman Paya Dalam","Taman Seri Paya Dalam","Kampung Bakar Batu",
];
export const slc_mk_AKerh= [
  "Ayer Keroh",

  "Taman Bukit Beruang Indah","Taman Bukit Beruang Utama","Ibu Pejabat Polis Negeri Melaka","Kampung Ayer Keroh",
  "Kampung Baru Ayer Keroh","Taman Belia Antarabangsa","Malacca International Trade Centre","Taman Ayer Keroh Heights",
  "Taman Muzaffar Shah","Taman Muzaffar Heights","Taman Cendana","Kampung Tun Razak","Taman Tun Rahah","Taman Saujana Indah",
  "Taman Ozana Impian","Taman Pelangi","Kampung Ladang Baharu","Kampung Gapam",
  // point
  "Pangsapuri Bukit Beruang Bistari","Vista Kirana","Country Villas Resort",
];
export const slc_mk_BBrdm= [
  "Taman Sutera Wangi","Taman Sri Songket","Kampung Sungai Putat","Taman Jati","Taman Seri Jati","Taman Ara Permai",
  "Taman Ara Insan","Taman Seri Wangsa","Kampung Tengah","Taman Batu Berendam Putera","Taman Melaka Baru Fasa 3",
  "Taman Melaka Baru","Taman Merdeka Permai","Taman Perindustrian Batu Berendam",
  // point
  "Kampung Pulau Samak","Taman Mas Merah","Taman Sri Selendang","Taman Devadason",
];
export const slc_mk_BBruang= [
  "Taman Bunga Raya","Taman Kerjasama","Kampung Bukit Beruang","Taman Bukit Baru","Taman Sentosa","Putra Heights","Taman Perkota",
  // point
  "Taman Bukit Melaka","Taman Faridah","Taman Akasia",
];
export const slc_mk_BRmbi= [
  "Kampung Paya Rumput Jaya","Taman Bertam Impian","Kampung Bertam Ulu","Taman Bertam Setia","Kampung Alor","Taman Bertam Permai",
  "Taman Bertam Indah","Kampung Tanjong Minyak","Taman Tanjung Minyak Utama","Taman Rambai Utama","Taman Tanjung Minyak Setia",
  "Kampung Bertam Malim","Rumah Awam Bertam Malim","Taman Saga","Taman Gadong Perdana","Taman Rambai Ria","Kampung Paya Mengkuang",
  "Taman Rambai Indah","Kampung Ayer Salak","Taman Arked Seri Rambai","Kampung Rambai Tengah",
  // point
  "Kampung Seberang Gajah","Kampung Alor Jaya","Taman Tanjung Minyak","Taman Tanjung Minyak Fasa 2","Rumah Awam Bukit Rambai 2",
  "Taman Rambai Idaman","Taman Ayer Salak","Taman Bukit Rambai Seksyen 2","Kampung Bukit Kechil","Kampung Tanjung Laboh",
];
export const slc_mk_BKtil= [
  "Kampung Teluk Baharu","Taman Suria","Kampung Bukit Katil","Taman Bukit Katil","Taman Merak Mas","Taman Bukit Katil Indah",
  // point
  "Taman Iks Bukit Katil",
];
export const slc_mk_Chg= [

  "Kampung Ayer Supai","Taman Paya Emas","Taman Paya Rumput Perdana","Taman Seri Paya Rumput","Taman Bertam Jaya","Taman Cheng Perdana",
  "Taman Cheng Jaya","Taman Bukit Cheng","Kampung Cheng","Taman Cheng Utama","Taman Cheng Baru","Cheng Height","Taman Cheng Ria",
  // point
  "Taman Paya Rumput Indah","Taman Cheng Setia","Taman Pewira Rumah Awam Cheng","Taman Desa Damai Cheng",
];
export const slc_mk_Klebg= [
  "Kampung Balai Panjang","Rumah Pangsa Pandan Malim","Puncak Bertam","Taman Pandan Jaya","Taman Pandan Maju","Taman Kesidang Seksyen 2",
  "Taman Puspa","Taman Kenanga Mewah","Kampung Tujuh","Kampung Tujuh Gajah Berang","Kampung Chetti","Kampung Lima",
  "Kampung Enam","Morten Village","Kampung Bukit China","Taman Kota Laksamana","Taman Mahajaya","Kampung Lapan Tengkera",
  "Taman Siantan Seksyen 2","Kampung Lapan Bachang","Kampung Tengkera Pantai Dua","Kampung Kolam Limbongan","Kampung Limbongan",
  "Klebang Kechil","Taman Melati","Taman Anggerik","Solok Kampung Baharu","Kampung Batak","Pokok Mangga",
  "Kampung Padang","Taman Pokok Mangga","Taman Balkis","Kompleks Kesidang","Taman Kesidang Seksyen 1","Taman Setia Jaya",
  "Taman Pandan Mawar","Taman Pandan Indah","Tengkera Kampung Sembilan",
  // point
  "Taman Seri Mangga Seksyen 1","Taman Mutiara","Taman Kenanga Section 3","Taman Siantan Puri","Taman Sri Pandan 1",
  "Taman Seri Mangga Seksyen 2","Taman Malim Indah",
];

export const slc_mk_Krubg= [
  "Kawasan Perindustrian Krubong","Kampung Tampoi","Kampung Padang Siapong","Kampung Kerubong","Kampung Sungai Badau",
  // point
  "Taman Kerubong Jaya","Taman Kerubong Jaya Fasa 2","Taman Krubong Permai","Taman Krubong Perdana",

];
export const slc_mk_MlmJ= [

  "Taman Malim Jaya","Kampung Bachang","Kampung Bachang Pasir Puteh","Kampung Balai Panjang","Taman Rumpun Bahagia","Taman Bachang Baru",
  "Taman Industri Malim Jaya",
  // point
  "Taman Malim Indah",
];
export const slc_mk_MRaya= [
  "Melaka Raya", "Ujong Pasir",

  "Taman Sinn Semabok","Taman Kasturi","Taman Semabok","Taman Bukit Senjuang","Kampung Ujong Pasir","Portuguese Settlement, Melaka",
  "Taman Aman","Taman Nam Seng","Taman Nam Fong","Taman Teratai","Taman Jaya 2","Taman Padang Temu Indah",
  "Kampung Padang Temu","Taman Jaya Padang Temu","Taman Pertam Jaya","Kampung Kubu","Kampung Ujong","Kampung Bandar Hilir",
  "Hatten City","Taman Pulau Melaka","Kampung Banda Kaba","Plaza Mahkota",
  // point
  "Taman Bakti",
];
export const slc_mk_Prgt= [
  "Taman Datuk Palembang","Kampung Paya Ikan","Bukit Baru","Solok Bukit Piatu","Solok Bukit Baru","Taman Setia Kawan",
  "Kampung Bukit Piatu","Kampung Solok Musai","Taman Kayu Ara","Taman Delima Raya","Taman Temenggong Bukit Sekubor",
  "Kampung Solok Bukit Baru Dalam","Taman Bukit Piatu Mutiara","Taman Sin Hoe","Taman Putra"," Taman Desa Peringgit",
  "Taman Bachang Utama","Taman Peringgit Permai","Taman Peringgit Ria","Plaza Melaka Sentral","Taman Seri Cempaka","Taman Peringgit Jaya",
  "Kampung Mata Kuching","Kampung Pengkalan Rama Pantai","Kampung Durian Daun","Kampung Bukit Gedong","Pengkalan Rama Tengah",
  "Kampung Bukit China","Bukit Tempurong","Kampung Ayer Leleh","Padang Semabok","Bukit Serindit","Taman Seri Serindit",
  "Taman Bukit Serindit","Kampung Durian Daun Dalam","Kampung Musai",
  // point
  "Taman Delima Raya","Taman Panglima","Taman Elok","Taman Tun Fatimah",
];
export const slc_mk_SgUdg = [
  "Terendak","Taman Indah","Taman Sungai Udang","Kampung Sungai Udang","Taman Peruna","Plaza Sungai Udang",
  // point
  "Perkampungan Tanah Merah Km 21","Taman Terendak Permai",
];
export const slc_mk_TMrdk= [
  "Kampung Tualang","Kampung Gangsa","Taman Seri Bayan","Taman Angkasa Nuri","Taman Merdeka","Lapangan Terbang Batu Berendam",
  // point
  "Taman Belatuk Emas","Taman Merdeka Jaya","Taman Industri Kecil & Sederhana Merdeka","Taman Garuda Gangsa",
];
export const slc_mk_TKlng= [
  "Tanjung Kling", "Klebang Besar", "Batang Tiga",

  "Kampung Pantai Dusun","Kampung Pantai Kundor","Kampung Tangga Batu","Tangga Batu","Taman Sri Gelam","Kampung Tanah Merah Jaya",
  "Taman Imigresin","Kampung Gelam","Kampung Pengkalan Perigi","Kampung Balik Bukit","Kampung Tanjong Keling","Kampung Pinang Batang Tiga",
  "Taman Pantai Emas","Taman Muhibbah",
  // point
  "Tangga Batu Industrial Estate","Kampung Bukit Salleh","Taman Tangga Batu","Kampung Gaffar Baba","Taman Seri Tanjung",
  "Kampung Seri Tanjung","Kampung Hailam","Kampung Kelongkong","Taman Tanjung Kling","Kampung Pengkalan Lanjut","Taman Meranti",
  "Taman Cempaka","Taman Mayfair",
];
export const cityMelakaObj = [
  {id:"mkAlai",url:["alai"],name:["Alai, Telok Mas"],slc:slc_mk_Alai,lc:["Alai", "Telok Mas", "Merlimau", "Tanjung Kling"],pc:"",pr:'2',st:"mk", co:"MY",oid:"mkAlai"},
  {id:"mkAGjh",url:["alor-gajah"],name:["Alor Gajah"],slc:"",lc:"Alor Gajah",pc:"",pr:'4',st:"mk", co:"MY",oid:"mkAGjh"},
  {id:"mkAshn",url:["asahan"],name:["Asahan"],slc:"",lc:"Pekan Asahan",pc:"",pr:'4',st:"mk", co:"MY",oid:"mkAshn"},
  {id:"mkAKerh",url:["ayer-keroh"],name:["Ayer Keroh"],slc:slc_mk_AKerh,lc:["Ayer Keroh", "Bukit Beruang", "Bemban","Melaka"],pc:"",pr:'2',st:"mk", co:"MY",oid:"mkAKerh"},
  {id:"mkAMolk",url:["ayer-molek"],name:["Ayer Molek"],slc:slc_mk_AMolk,lc:["Ayer Molek"],pc:"",pr:'2',st:"mk", co:"MY",oid:"mkAMolk"},
  // {id:"mkBchg",url:["bachang"],name:["Bachang"],slc:"",lc:"Bachang",pc:"",pr:'4',st:"mk", co:"MY",oid:"mkBchg"},
  {id:"mkBBrdm",url:["batu-berendam"],name:["Batu Berendam"],slc:slc_mk_BBrdm,lc:["Batu Berendam", "Melaka"],pc:"",pr:'2',st:"mk", co:"MY",oid:"mkBBrdm"},
  {id:"mkBmbn",url:["bemban"],name:["Bemban"],slc:"",lc:"Bemban",pc:"",pr:'4',st:"mk", co:"MY",oid:"mkBmbn"},
  // {id:"mkBBru",url:[""],name:["Bukit Baru"],slc:"",lc:"",pc:"",pr:'4',st:"mk", co:"MY",oid:"mkBBru"},
  {id:"mkBBruang",url:["bukit-beruang"],name:["Bukit Beruang"],slc:slc_mk_BBruang,lc:["Bukit Beruang", "Melaka"],pc:"",pr:'2',st:"mk", co:"MY",oid:"mkBBruang"},
  {id:"mkBKtil",url:["bukit-katil"],name:["Bukit Katil"],slc:slc_mk_BKtil,lc:["Bukit Katil", "Melaka"],pc:"",pr:'2',st:"mk", co:"MY",oid:"mkBKtil"},
  {id:"mkBRmbi",url:["bukit-rambai"],name:["Bukit Rambai"],slc:slc_mk_BRmbi,lc:["Bukit Rambai", "Bertam Ulu", "Tanjong Minyak","Melaka", "Sungai Udang"],pc:"",pr:'2',st:"mk", co:"MY",oid:"mkBRmbi"},
  {id:"mkChg",url:["cheng"],name:["Cheng"],slc:slc_mk_Chg,lc:["Cheng", "Alor Gajah", "Melaka"],pc:"",pr:'2',st:"mk", co:"MY",oid:"mkChg"},
  {id:"mkDTggal",url:["durian-tunggal"],name:["Durian Tunggal"],slc:"",lc:"Durian Tunggal",pc:"",pr:'4',st:"mk", co:"MY",oid:"mkDTggal"},
  {id:"mkJsn",url:["jasin"],name:["Jasin"],slc:"",lc:"Jasin",pc:"",pr:'4',st:"mk", co:"MY",oid:"mkJsn"},
  // {id:"mkKTrndk",url:[""],name:["Kem Trendak"],slc:"",lc:"",pc:"",pr:'4',st:"mk", co:"MY",oid:"mkKTrndk"},
  {id:"mkKlebg",url:["klebang"],name:["Klebang"],slc:slc_mk_Klebg,lc:["Klebang", "Melaka"],pc:"",pr:'2',st:"mk", co:"MY",oid:"mkKlebg"},
  {id:"mkKrubg",url:["krubong"],name:["Krubong"],slc:slc_mk_Krubg,lc:["Krubong", "Durian Tunggal", "Melaka"],pc:"",pr:'2',st:"mk", co:"MY",oid:"mkKrubg"},
  {id:"mkKSgBru",url:["kuala-sungai-baru"],name:["Kuala Sungai Baru"],slc:"",lc:"Kuala Sungai Baru",pc:"",pr:'4',st:"mk", co:"MY",oid:"mkKSgBru"},
  // {id:"mkLndu",url:[""],name:["Lendu"],slc:"",lc:"",pc:"",pr:'4',st:"mk", co:"MY",oid:"mkLndu"},
  {id:"mkLChina",url:["lubok-china"],name:["Lubok China"],slc:"",lc:"Lubok China",pc:"",pr:'4',st:"mk", co:"MY",oid:"mkLChina"},
  // {id:"mkMchpBru",url:[""],name:["Machap Baru"],slc:"",lc:"",pc:"",pr:'4',st:"mk", co:"MY",oid:"mkMchpBru"},
  {id:"mkMlmJ",url:["malim-jaya"],name:["Malim Jaya"],slc:slc_mk_MlmJ,lc:["Malim Jaya", "Melaka"],pc:"",pr:'2',st:"mk", co:"MY",oid:"mkMlmJ"},
  {id:"mkMasjTnh",url:["masjid-tanah"],name:["Masjid Tanah"],slc:"Masjid Tanah",lc:"Masjid Tanah",pc:"",pr:'4',st:"mk", co:"MY",oid:"mkMasjTnh"},
  {id:"mkMRaya",url:["melaka-raya-ujong-pasir"],name:["Melaka Raya, Ujong Pasir"],slc:slc_mk_MRaya,lc:["Melaka", "Ujong Pasir", "Malacca"],pc:"",pr:'2',st:"mk", co:"MY",oid:"mkMRaya"},
  {id:"mkMlimau",url:["merlimau"],name:["Merlimau"],slc:"",lc:"Merlimau",pc:"",pr:'4',st:"mk", co:"MY",oid:"mkMlimau"},
  {id:"mkNyals",url:["nyalas"],name:["Nyalas"],slc:"",lc:"Nyalas",pc:"",pr:'4',st:"mk", co:"MY",oid:"mkNyals"},
  {id:"mkPrgt",url:["peringgit-bukit-baru"],name:["Peringgit, Bukit Baru"],slc:slc_mk_Prgt,lc:["Peringgit", "Melaka"],pc:"",pr:'2',st:"mk", co:"MY",oid:""},
  {id:"mkSldar",url:["selandar"],name:["Selandar"],slc:"",lc:"Selandar",pc:"",pr:'4',st:"mk", co:"MY",oid:"mkSldar"},
  // {id:"mkSkam",url:[""],name:["Serkam"],slc:"",lc:"",pc:"",pr:'4',st:"mk", co:"MY",oid:"mkSkam"},
  // {id:"mkSAmpat",url:[""],name:["Simpang Ampat"],slc:"",lc:"",pc:"",pr:'4',st:"mk", co:"MY",oid:"mkSAmpat"},
  {id:"mkSgRmbai",url:["sungai-rambai"],name:["Sungai Rambai"],slc:"",lc:"Sungai Rambai",pc:"",pr:'4',st:"mk", co:"MY",oid:"mkSgRmbai"},
  {id:"mkSgUdg",url:["sungai-udang-kem-trendak"],name:["Sungai Udang, Kem Trendak"],slc:slc_mk_SgUdg,lc:["Sungai Udang", "Terendak"],pc:"",pr:'2',st:"mk", co:"MY",oid:"mkSgUdg"},
  {id:"mkTMrdk",url:["taman-merdeka"],name:["Taman Merdeka"],slc:slc_mk_TMrdk,lc:["Batu Berendam", "Durian Tunggal","Melaka"],pc:"",pr:'2',st:"mk", co:"MY",oid:""},
  // {id:"mkTBdr",url:[""],name:["Tanjung Bidara"],slc:"",lc:"",pc:"",pr:'4',st:"mk", co:"MY",oid:"mkTBdr"},
  {id:"mkTKlng",url:["tanjong-kling"],name:["Tanjong Kling"],slc:slc_mk_TKlng,lc:["Tanjung Kling", "Klebang Besar", "Batang Tiga", "Melaka"],pc:"",pr:'2',st:"mk", co:"MY",oid:"mkTKlng"},
  // {id:"mkTlkMas",url:[""],name:["Telok Mas"],slc:"",lc:"",pc:"",pr:'4',st:"mk", co:"MY",oid:"mkTlkMas"},
  // {id:"mkUjgPasir",url:[""],name:["Ujong Pasir"],slc:"",lc:"",pc:"",pr:'4',st:"mk", co:"MY",oid:"mkUjgPasir"},

]

export const cityPerak = ["Ayer Tawar","Bagan Datoh","Bagan Serai", "Bandar Seri Iskandar", "Batu Gajah",
    "Batu Kurau", "Bercham", "Behrang Stesen", "Bidor", "Bota", "Bruas", "Buntong, Ipoh", "Changkat Jering", "Changkat Keruing",
    "Chemor", "Chenderiang", "Chenderong Balai", "Chikus", "Enggor", "Gerik", "Gopeng", "Gunung Rapat", "Hutan Melintang",
    "Intan", "Ipoh", "Jelapang, Ipoh", "Jeram, Perak", "Kampar", "Kampung Gajah", "Kampung Kepayang", "Kamunting", "Klebang, Perak", "Kuala Kangsar",
    "Kuala Kurau", "Kuala Sepetang", "Lahat", "Lambor Kanan", "Langkap", "Lenggong", "Lumut", "Malim Nawar", "Manong",
    "Matang", "Menglembu", "Meru, Perak", "Padang Rengas", "Pangkor", "Pantai Remis", "Parit", "Parit Buntar", "Pasir Putih, Ipoh", "Pengkalan, Lahat", "Pengkalan Hulu", "Pusing",
    "Rantau Panjang", "Sauk", "Selama", "Selekoh", "Seri Manjong", "Silibin, Ipoh", "Simpang", "Simpang Ampat Semanggol",
    "Sitiawan", "Slim River", "Station 18, Ipoh", "Sungai Siput", "Sungai Sumun", "Sungkai", "Taiping", "Tambun", "Tanjong Malim",
    "Tanjong Piandang", "Tanjong Rambutan", "Tanjong Tualang", "Tapah", "Tapah Road", "Tasek, Ipoh", "Teluk Intan", "Temoh",
    "Trolak", "Trong", "Tronoh", "Ulu Bernam", "Ulu Kinta"]; // 70

export const cityPerakId = ["pkATwr","pkBgnDth","pkBgnSr", "pkBSIskdr", "pkBGjah",
    "pkBKrau", "pkBrchm", "pkBhrgStn", "pkBdr", "pkBt", "pkBrs", "pkBntng", "pkChktJrg", "pkChktKrg",
    "pkChmr", "pkChdrg", "pkChdrgBl", "pkChks", "pkEgr", "pkGrk", "pkGpg", "pkGRpt", "pkHtnMltg",
    "pkItn", "pkIph", "pkJlpg", "pkJrm", "pkKmpar", "pkKpgGjah", "pkKpgKpyg", "pkKmntg", "pkKlbg", "pkKKgsar",
    "pkKKrau", "pkKSptng", "pkLht", "pkLmbrKn", "pkLgkp", "pkLggng", "pkLmt", "pkMlmNwr", "pkMng",
    "pkMtg", "pkMglmb", "pkMru", "pkPdgRngs", "pkPgkr", "pkPRmis", "pkPrit", "pkPritBntr", "pkPsrPth", "pkPeng", "pkPengHlu", "pkPsg",
    "pkRntPjg", "pkSauk", "pkSlama", "pkSlkh", "pkSMnjg", "pkSlbn", "pkSmpg", "pkSmpgAmptSmnggl",
    "pkStiawn", "pkSlmRvr", "pkS18", "pkSgSpt", "pkSgSmn", "pkSngkai", "pkTaipg", "pkTmbn", "pkTMlim",
    "pkTPiandg", "pkTRmbtn", "pkTTualg", "pkTpah", "pkTpahRoad", "pkTsk", "pkTlkIntn", "pkTmh",
    "pkTrlk", "pkTrng", "pkTrnh", "pkUluBrnm", "pkUluKnta"];

export const slc_pkBrchm= [
  "Taman Perak","Taman Ipoh Permai","Taman Ipoh Timur","Taman Sri Kurau","Taman Tasek Indra","Taman Ria","Taman Kinta Mas",
  "Bercham Heights","Taman Desa Kenchana","Taman Pakatan","Taman Seri Bercham","Taman Bercham Baru","Kampung Bercham",
  "Kampung Tersusun Tasek","Anjung Bercham Megah","Kampung Tasek","Taman Anda","Kawasan Perindustrian Ringan Bercham",
  "Taman Putra Indah","Desa Putra Indah","Bandar Baru Putra",
  // point
  "Taman Ipoh Indah","Medan Bercham Bistari","Taman Bercham Tropicana","Kawasan Perindustrian Pinggir Bercham",
];
export const slc_pkBntng  = [
  "Kawasan Perindustrian Silibin","Taman Rishah","Taman Pertama","Guntong","Taman Birch","Taman Buntong Jaya",
  "Kampung Buntong 3","Kampung Buntong 4","Kampung Buntong 3 Tambahan","Desa Rishah","Taman Buntong Ria","Taman Mas",
  // point
  "Kampung Buntong Tambahan 2","Garden Terrace",
];
export const slc_pkCanJblee = [
  "Taman Jubilee","Kampung Jawa","Pusat Perdagangan Greentown",
  "Taman Fair Park","Taman Fair","Taman Kin Mee","Kompleks Sukan Ipoh","Taman Jepun","Sekolah Menengah Teknik Ipoh",
  "Taman Canning","Taman Ipoh","Kampung Seri Jaya","Taman Star","Kampung Simee","Kampung Kepayang Masjid","Taman Mirindi",
  "Taman Wah Keong","Taman Ipoh Selatan","Taman Ipoh","Taman Bandaraya",
  // points
  "Greentown Nova","Flora Tropika","Arena Kepayang Putra","Medan Ipoh Bestari",
];
export const slc_pkGRpt= [

  "Kem Rejimen Askar Melayu Diraja Tambun","Taman Cempaka","Institut Penyelidikan Haiwan Semenanjung Malaysia",
  "Kampung Ampang Baru","Taman Razaki","Taman Golf","Taman Mutiara","Taman Sri Rokam","Taman Ipoh Jaya",
  "Kampung Gunung Rapat","Kampung Baharu Gunung Rapat","Taman Rapat Setia","Taman Saikat","Rapat Setia",
  "Taman Indah Jaya","Taman Rapat Indah","Taman Ipoh Jaya","Taman Rapat Setia Baru","Desa Perwira","Taman Rapat",
  "Taman Gunong View","Halaman Ampang Indah","Kampung Sri Ampang","Desa Seri Ampang","Taman Ampang","Taman Ampang Indah",
  // point
  "The Enclave",
];
export const slc_pkIphEast = [
  "Taman Pengkalan Bandaraya","Taman Pengkalan Timah","Taman Desa Pengkalan","Taman Seri Megah","Kampung Pengkalan Pegoh",
  "Taman Desa Aman","Taman Perdana","Kampung Paya","Taman Temara","Taman Pengkalan Jaya","Taman Sentosa","Taman Boon Bak",
  "Taman Shatin","Taman Keramat","Kampung Pasir Putih","Kampung Sri Kinta","Kampung Cempaka Sari","Pasir Puteh Baharu",
  "Taman Melor","Taman Mayfair","Kampung Pasir Puteh Baharu","Taman Sunlight","Taman Camay","Taman Bersatu","Pasir Penjih",
  "Kampung Paluh","Kampung Kuchai","Kampung Tebing Tinggi","Kampung Temiang","Kampung Pasir Pinji Baru","Taman Hoover",
  "Taman Kampar","Taman Victoria","Taman Mansion","Taman Gopeng","Taman Chateau","Kampung Chakadi","Taman Mas Jaya",
  // point
  "Desa Pangkalan Bandar Raya","Taman Pengkalan Utama","Taman Pengkalan Baru",
];
export const slc_pkIphSouth = [
  "Panorama Lapangan Perdana", "Bandar Seri Botani",

  "Taman Maju Rapat","Taman Lapangan Terbang","Kampung Melayu Sungai Rapat","Medan Gopeng","Kampung Rapat Jaya",
  "Institut Latihan Tentera Udara Ipoh","Kawasan Industri Ringan Kinta Jaya","Taman Lapangan SSI","Taman Lapangan Ria",
  "Kampung Pinji","Desa Rapat Jaya","Taman Desa Pakatan","Kampung Changkat Larang","Kampung Meranti 8","Taman Pinji Mewah",
  "Bandar Cyber","Kawasan Perindustrian Ringan Sri Rapat","Kampung Rapat Jaya Tambahan","Kampung Sengat","Taman Song Choon",
  "Medan Lapangan Legenda","Taman Seri Berjaya",
  // point
  "Medan Pengkalan Saujana","Taman Mahajaya","Taman Pinji Mewah","Medan Pengkalan Impian","Seri Palma","Seri Margosa",
  "Pulai Heights","Medan Lapangan Suria","Shen Jai High School",
];
export const slc_pkJlpg = [
  "Jelapang Tambahan","Puncak Jelapang","Puncak Jelapang Indah","Jelapang","Kampung Dato Ahmad Said Tambahan ll",
  "Kampung Dato' Ahmad Said","Kampung Sungai Tapah Hujong","Kampung Manjoi Baru","Kampung Dato' Ahmad Said Tambahan 3",
  "Taman Merdeka","Kampung Seberang Sungai Tapah","Kampung Tengku Husin Lama","Manjoi","Taman Pari","Taman Idris",
  "Taman Cherry","Kampung Kuala Tanggong","Taman Silibin","Kawasan Perkilangan Jelapang","Kampung Sungai Tapah Tambahan",
  // point
  "Pusat Perindustrian Jelapang",
];
export const slc_pkKlbg = [
  "Kawasan Perindustrian Igb","Taman Bertuah","Kampung Seri Kelebang Tambahan 2","Taman Klebang Utama",
  "Kampung Tersusun Kelebang Selatan","Taman Klebang Jaya","Strand Park",
  // point
  "Taman Klebang Emas","Klebang Ria","The Grand Retreats","Medan Klebang Mewah","Zon Perindustrian Bebas Kinta",
  "Zon Perindustrian Bebas Kinta",
];
export const slc_pkMglmb = [
  "Kawasan Perindustrian Menglembu","Taman Rasi","Taman Kledang Sentosa","Taman Kledang","Taman Hong Kong",
  "Taman Gelombang","Taman Wang","Kampung Baru Menglembu","Taman Bukit Merah","Kampung Baru Bukit Merah",
  "Taman Menglembu Impiana Adril","Taman Menglembu Timur","Taman Bandar Baru","Taman Kledang",
  // point
  "Taman Perindustrian Menglembu Jaya","Taman Falim Indah","Taman Kledang Permai","Taman Rasi Jaya","Bukit Kledang Indah",
];
export const slc_pkMru= [
  "Taman Meru","Taman Jati","Taman Meru Jaya","Meru Valley","Taman Meru 1A","Taman Seri Meru",
  // point
  "Halaman Meru Permai","Halaman Meru Impian","Anastoria Homes","Halaman Meru Damai","Bandar Meru Raya",
  "Taman Meru 2b","Meru Hills","Gerbang Meru Indah","Taman Meru 1","Meru Heights","Kampung Tersusun Jelapang Jaya",
];
export const slc_pkTmbn  = [
  "Kampung Tersusun Batu 5","Taman Desa Tambun Indah","Bandar Baru Tambun","Kampung Tersusun Batu 4","Taman Tambun",
  "Kampung Baru Tambun","Taman Desa Tambun","Taman Sri Tambun",
  // point
  "Taman Perpaduan Indah","Montbleu Residence",
];
export const slc_pkTsek = [
  "Taman Lim",

  "Taman Tasek Manikavasagam","Taman Musim Bunga","Taman Tasek Jaya","Taman Ehsan","Kampung Tawas","Taman Tasek Damai",
  "Taman Tasek Mewah","Taman Permai","Taman Seri Desa","Taman Tawas Permai","Kawasan Perindustrian Tasek",
];
export const slc_pkTRmbtn = [
  "Taman Kinding Raya","Taman Bahagia","Kampung Kolam","Taman Sungai Kinta","Taman Berjaya","Kampung Baru 8",
  // point
  "Taman Rambutan","Taman Tanjung Mutiara","Taman Sri Tanjung","Gerbang Tanjung Permai","Gerbang Tanjung Idaman",
  "Kawasan Industri Mara Tambun","Taman Kinta Jaya","Taman Tanjung Bakti"
];
export const slc_pkUluKnta  = [
  "Taman Perkatan Jaya","Taman Bistari","Taman Perpaduan Jaya","Taman Malar","Taman Bercham Jaya","Taman Bagus",
  "Kampung Tersusun Batu 5","Taman Perpaduan","Sunway City Ipoh",
  // point
  "Taman Pakatan Jaya","Taman Mewah",
];
export const cityPerakObj = [
  {id: "pkATwr",url:["ayer-tawar"],name:["Ayer Tawar"],slc:[],lc:"Ayer Tawar",pr:"4",st:"pk",co:"MY",oid:"pkATwr"},
  {id: "pkBgnDth",url:["bagan-datoh"],name:["Bagan Datoh"],slc:[],lc:"Bagan Datoh",pr:"4",st:"pk",co:"MY",oid:"pkBgnDth"},
  {id: "pkBgnSr",url:["bagan-serai"],name:["Bagan Serai"],slc:[],lc:"Bagan Serai",pr:"4",st:"pk",co:"MY",oid:"pkBgnSr"},
  {id: "pkBSIskdr",url:["bandar-seri-iskandar-bota"],name:["Bandar Seri Iskandar", "Bota"],slc:[],lc:["Seri Iskandar", "Bota"],pr:"4",st:"pk",co:"MY",oid:"pkBSIskdr"},
  {id: "pkBGjah",url:["batu-gajah-pusing-siputeh"],name:["Batu Gajah, Pusing, Siputeh"],slc:[],lc:["Batu Gajah", "Pusing", "Siputeh"],pr:"4",st:"pk",co:"MY",oid:"pkBGjah"},
  {id: "pkBKrau",url:["batu-kurau"],name:["Batu Kurau"],slc:[],lc:"Batu Kurau",pr:"4",st:"pk",co:"MY",oid:"pkBKrau"},
  {id: "pkBrchm",url:["bercham"],name:["Bercham"],slc:slc_pkBrchm,lc:["Bercham", "Ipoh", "Ulu Kinta"],pr:"2",st:"pk",co:"MY",oid:"pkBrchm"},
  {id: "pkBhrgStn",url:["behrang-stesen"],name:["Behrang Stesen"],slc:[],lc:"Behrang Stesen",pr:"4",st:"pk",co:"MY",oid:"pkBhrgStn"},
  {id: "pkBdr",url:["bidor"],name:["Bidor"],slc:[],lc:"Bidor",pr:"4",st:"pk",co:"MY",oid:"pkBdr"},
  // {id: "pkBt",url:["bota"],name:["Bota"],slc:[],lc:"Bota",pr:"4",st:"pk",co:"MY",oid:"pkBt"},
  {id: "pkBrs",url:["bruas"],name:["Bruas"],slc:[],lc:"Bruas",pr:"4",st:"pk",co:"MY",oid:"pkBrs"},
  {id: "pkChktJrg",url:["changkat-jering"],name:["Changkat Jering"],slc:[],lc:"Changkat Jering",pr:"4",st:"pk",co:"MY",oid:"pkChktJrg"},
  // {id: "pkChktKrg",url:["Changkat Keruing"],name:["Changkat Keruing"],slc:[],lc:"Changkat Keruing",pr:"4",st:"pk",co:"MY",oid:"pkChktKrg"},
  {id: "pkChmr",url:["chemor"],name:["Chemor"],slc:[],lc:"Chemor",pr:"4",st:"pk",co:"MY",oid:"pkChmr"},
  // {id: "pkChdrg",url:["Chenderiang"],name:["Chenderiang"],slc:[],lc:"Chenderiang",pr:"4",st:"pk",co:"MY",oid:"pkChdrg"},
  // {id: "pkChdrgBl",url:["Chenderong Balai"],name:["Chenderong Balai"],slc:[],lc:"Chenderong Balai",pr:"4",st:"pk",co:"MY",oid:"pkChdrgBl"},
  // {id: "pkChks",url:["Chikus"],name:["Chikus"],slc:[],lc:"Chikus",pr:"4",st:"pk",co:"MY",oid:"pkChks"},
  // {id: "pkEgr",url:["Enggor"],name:["Enggor"],slc:[],lc:"Enggor",pr:"4",st:"pk",co:"MY",oid:"pkEgr"},
  // {id: "pkGrk",url:["Gerik"],name:["Gerik"],slc:[],lc:"Gerik",pr:"4",st:"pk",co:"MY",oid:"pkGrk"},
  {id: "pkGpg",url:["gopeng"],name:["Gopeng"],slc:[],lc:"Gopeng",pr:"4",st:"pk",co:"MY",oid:"pkGpg"},
  {id: "pkGRpt",url:["gunung-rapat"],name:["Gunung Rapat, Taman Cempaka, Kek Look Tong"],slc:slc_pkGRpt,lc:["Gunung Rapat"],pr:"4",st:"pk",co:"MY",oid:"pkGRpt"},
  // {id: "pkHtnMltg",url:["Hutan Melintang"],name:["Hutan Melintang"],slc:[],lc:"Hutan Melintang",pr:"4",st:"pk",co:"MY",oid:"pkHtnMltg"},
  // {id: "pkItn",url:["Intan"],name:["Intan"],slc:[],lc:"Intan",pr:"4",st:"pk",co:"MY",oid:"pkItn"},

  {id: "pkBntng",url:["buntong"],name:["Buntong, Taman Pertama"],slc:slc_pkBntng,lc:["Ipoh", "Lahat"],pr:"2",st:"pk",co:"MY",oid:"pkBntng"},
  {id: "pkTsek",url:["tasek-taman-merdeka-taman-lim"],name:["Tasek, Taman Merdeka, Taman Lim"],slc:slc_pkTsek,lc:["Ipoh"],pr:"2",st:"pk",co:"MY",oid:""},
  {id: "pkCanJblee",url:["taman-canning-taman-jubilee-kepayang"],name:["Taman Canning, Taman Jubilee, Kepayang"],slc:slc_pkCanJblee,lc:["Ipoh"],pr:"2",st:"pk",co:"MY",oid:""},
  {id: "pkIphSouth",url:["panorama-lapangan-seri-botani"],name:["Panorama Lapangan, Bandar Seri Botani"],slc:slc_pkIphSouth,lc:["Ipoh", "Kampung Kepayang", "Lahat"],pr:"2",st:"pk",co:"MY",oid:""},
  {id: "pkJlpg",url:["jelapang"],name:["Jelapang, Taman Silibin"],slc:slc_pkJlpg,lc:["Ipoh"],pr:"2",st:"pk",co:"MY",oid:"pkJlpg"},
  {id: "pkKlbg",url:["klebang-ipoh"],name:["Klebang, Perak"],slc:slc_pkKlbg,lc:["Ipoh", "Chemor"],pr:"2",st:"pk",co:"MY",oid:"pkKlbg"},
  {id: "pkMglmb",url:["menglembu"],name:["Menglembu"],slc:slc_pkMglmb,lc:["Ipoh", "Lahat"],pr:"2",st:"pk",co:"MY",oid:"pkMglmb"},
  {id: "pkMru",url:["taman-meru-ipoh"],name:["Taman Meru"],slc:slc_pkMru,lc:["Ipoh"],pr:"2",st:"pk",co:"MY",oid:"pkMru"},
  {id: "pkIphEast",url:["tebing-tinggi-pasir-pinji"],name:["Tebing Tinggi, Pasir Pinji, Pengkalan, Taman Chateau"],slc:slc_pkIphEast,lc:["Ipoh", "Lahat"],pr:"2",st:"pk",co:"MY",oid:"pkS18"},
  {id: "pkIph",url:["ipoh"],name:["Ipoh"],slc:[],lc:"Ipoh",pr:"4",st:"pk",co:"MY",oid:"pkIph"},

  // {id: "pkJrm",url:["Jeram, Perak"],name:["Jeram, Perak"],slc:[],lc:"Jeram, Perak",pr:"4",st:"pk",co:"MY",oid:"pkJrm"},
  {id: "pkKmpar",url:["kampar"],name:["Kampar"],slc:[],lc:"Kampar",pr:"4",st:"pk",co:"MY",oid:"pkKmpar"},
  // {id: "pkKpgGjah",url:["kampung Gajah"],name:["Kampung Gajah"],slc:[],lc:"Kampung Gajah",pr:"4",st:"pk",co:"MY",oid:"pkKpgGjah"},
  {id: "pkKpgKpyg",url:["kampung-kepayang"],name:["Kampung Kepayang, Simpang Pulai"],slc:[],lc:["Kampung Kepayang", "Simpang Pulai"],pr:"4",st:"pk",co:"MY",oid:"pkKpgKpyg"},
  {id: "pkKmntg",url:["kamunting"],name:["Kamunting"],slc:[],lc:"Kamunting",pr:"4",st:"pk",co:"MY",oid:"pkKmntg"},
  {id: "pkKKgsar",url:["kuala-kangsar"],name:["Kuala Kangsar"],slc:[],lc:["Kuala Kangsar", "Padang Rengas"],pr:"4",st:"pk",co:"MY",oid:"pkKKgsar"},
  // {id: "pkKKrau",url:["kuala Kurau"],name:["Kuala Kurau"],slc:[],lc:"Kuala Kurau",pr:"4",st:"pk",co:"MY",oid:"pkKKrau"},
  // {id: "pkKSptng",url:["kuala Sepetang"],name:["Kuala Sepetang"],slc:[],lc:"Kuala Sepetang",pr:"4",st:"pk",co:"MY",oid:"pkKSptng"},
  {id: "pkLht",url:["lahat"],name:["Lahat"],slc:[],lc:"Lahat",pr:"4",st:"pk",co:"MY",oid:"pkLht"},
  // {id: "pkLmbrKn",url:["lambor Kanan"],name:["Lambor Kanan"],slc:[],lc:"Lambor Kanan",pr:"4",st:"pk",co:"MY",oid:"pkLmbrKn"},
  // {id: "pkLgkp",url:["langkap"],name:["Langkap"],slc:[],lc:"Langkap",pr:"4",st:"pk",co:"MY",oid:"pkLgkp"},
  // {id: "pkLggng",url:["lenggong"],name:["Lenggong"],slc:[],lc:"Lenggong",pr:"4",st:"pk",co:"MY",oid:"pkLggng"},
  // {id: "pkLmt",url:["lumut"],name:["Lumut"],slc:[],lc:"Lumut",pr:"4",st:"pk",co:"MY",oid:"pkLmt"},
  {id: "pkMlmNwr",url:["malim-nawar"],name:["Malim Nawar"],slc:[],lc:["Malim Nawar", "Jeram"],pr:"4",st:"pk",co:"MY",oid:"pkMlmNwr"},
  // {id: "pkMng",url:["manong"],name:["Manong"],slc:[],lc:"Manong",pr:"4",st:"pk",co:"MY",oid:"pkMng"},
  {id: "pkMtg",url:["matang"],name:["Matang"],slc:[],lc:"Matang",pr:"4",st:"pk",co:"MY",oid:"pkMtg"},

  // {id: "pkPdgRngs",url:["padang Rengas"],name:["Padang Rengas"],slc:[],lc:"Padang Rengas",pr:"4",st:"pk",co:"MY",oid:"pkPdgRngs"},
  // {id: "pkPgkr",url:["pangkor"],name:["Pangkor"],slc:[],lc:"Pangkor",pr:"4",st:"pk",co:"MY",oid:"pkPgkr"},
  {id: "pkPRmis",url:["pantai-remis"],name:["Pantai Remis"],slc:[],lc:"Pantai Remis",pr:"4",st:"pk",co:"MY",oid:"pkPRmis"},
  // {id: "pkPrit",url:["parit"],name:["Parit"],slc:[],lc:"Parit",pr:"4",st:"pk",co:"MY",oid:"pkPrit"},
  {id: "pkPritBntr",url:["parit-buntar"],name:["Parit Buntar"],slc:[],lc:"Parit Buntar",pr:"4",st:"pk",co:"MY",oid:"pkPritBntr"},
  // {id: "pkPsrPth",url:["pasir Putih, Ipoh"],name:["Pasir Putih, Ipoh"],slc:[],lc:"Pasir Putih, Ipoh",pr:"4",st:"pk",co:"MY",oid:"pkPsrPth"},
  // {id: "pkPeng",url:["pengkalan, Lahat"],name:["Pengkalan, Lahat"],slc:[],lc:"Pengkalan, Lahat",pr:"4",st:"pk",co:"MY",oid:"pkPeng"},
  {id: "pkPengHlu",url:["pengkalan-hulu"],name:["Pengkalan Hulu"],slc:[],lc:"Pengkalan Hulu",pr:"4",st:"pk",co:"MY",oid:"pkPengHlu"},
  // {id: "pkPsg",url:["pusing"],name:["Pusing"],slc:[],lc:"Pusing",pr:"4",st:"pk",co:"MY",oid:"pkPsg"},
  // {id: "pkRntPjg",url:["Rantau Panjang"],name:["Rantau Panjang"],slc:[],lc:"Rantau Panjang",pr:"4",st:"pk",co:"MY",oid:"pkRntPjg"},
  // {id: "pkSauk",url:["sauk"],name:["Sauk"],slc:[],lc:"Sauk",pr:"4",st:"pk",co:"MY",oid:"pkSauk"},
  // {id: "pkSlama",url:["selama"],name:["Selama"],slc:[],lc:"Selama",pr:"4",st:"pk",co:"MY",oid:"pkSlama"},
  // {id: "pkSlkh",url:["selekoh"],name:["Selekoh"],slc:[],lc:"Selekoh",pr:"4",st:"pk",co:"MY",oid:"pkSlkh"},
  // {id: "pkSMnjg",url:["seri Manjong"],name:["Seri Manjong"],slc:[],lc:"Seri Manjong",pr:"4",st:"pk",co:"MY",oid:"pkSMnjg"},
  // {id: "pkSlbn",url:["silibin, Ipoh"],name:["Silibin, Ipoh"],slc:[],lc:"Silibin, Ipoh",pr:"4",st:"pk",co:"MY",oid:"pkSlbn"},
  // {id: "pkSmpg",url:["simpang"],name:["Simpang"],slc:[],lc:"Simpang",pr:"4",st:"pk",co:"MY",oid:"pkSmpg"},
  // {id: "pkSmpgAmptSmnggl",url:["simpang Ampat Semanggol"],name:["Simpang Ampat Semanggol"],slc:[],lc:"Simpang Ampat Semanggol",pr:"4",st:"pk",co:"MY",oid:"pkSmpgAmptSmnggl"},
  {id: "pkStiawn",url:["sitiawan"],name:["Sitiawan"],slc:[],lc:["Sitiawan", "Seri Manjung", "Lumut"],pr:"4",st:"pk",co:"MY",oid:"pkStiawn"},
  // {id: "pkSlmRvr",url:["slim River"],name:["Slim River"],slc:[],lc:"Slim River",pr:"4",st:"pk",co:"MY",oid:"pkSlmRvr"},
  {id: "pkSgSpt",url:["sungai-siput"],name:["Sungai Siput"],slc:[],lc:"Sungai Siput",pr:"4",st:"pk",co:"MY",oid:"pkSgSpt"},
  // {id: "pkSgSmn",url:["sungai Sumun"],name:["Sungai Sumun"],slc:[],lc:"Sungai Sumun",pr:"4",st:"pk",co:"MY",oid:"pkSgSmn"},
  {id: "pkSngkai",url:["sungkai"],name:["Sungkai"],slc:[],lc:"Sungkai",pr:"4",st:"pk",co:"MY",oid:"pkSngkai"},
  {id: "pkTaipg",url:["taiping"],name:["Taiping"],slc:[],lc:"Taiping",pr:"4",st:"pk",co:"MY",oid:"pkTaipg"},
  {id: "pkTmbn",url:["tambun"],name:["Tambun"],slc:slc_pkTmbn,lc:["Tambun", "Ipoh"],pr:"4",st:"pk",co:"MY",oid:"pkTmbn"},
  {id: "pkTMlim",url:["tanjong-malim"],name:["Tanjong Malim"],slc:[],lc:"Tanjong Malim",pr:"4",st:"pk",co:"MY",oid:"pkTMlim"},
  {id: "pkTPiandg",url:["tanjong-piandang"],name:["Tanjung Piandang"],slc:[],lc:["Tanjong Piandang", "Tanjung Piandang"],pr:"4",st:"pk",co:"MY",oid:"pkTPiandg"},
  {id: "pkTRmbtn",url:["tanjong-rambutan"],name:["Tanjung Rambutan"],slc:slc_pkTRmbtn,lc:["Tanjong Rambutan", "Tanjung Rambutan", "Changkat Kinding"],pr:"4",st:"pk",co:"MY",oid:"pkTRmbtn"},
  // {id: "pkTTualg",url:["tanjong Tualang"],name:["Tanjong Tualang"],slc:[],lc:"Tanjong Tualang",pr:"4",st:"pk",co:"MY",oid:"pkTTualg"},
  {id: "pkTpah",url:["tapah"],name:["Tapah"],slc:[],lc:["Tapah", "Tapah Road"],pr:"4",st:"pk",co:"MY",oid:"pkTpah"},
  // {id: "pkTpahRoad",url:["tapah Road"],name:["Tapah Road"],slc:[],lc:"Tapah Road",pr:"4",st:"pk",co:"MY",oid:"pkTpahRoad"},
  // {id: "pkTsk",url:["tasek, Ipoh"],name:["Tasek, Ipoh"],slc:[],lc:"Tasek, Ipoh",pr:"4",st:"pk",co:"MY",oid:"pkTsk"},
  {id: "pkTlkIntn",url:["teluk-intan"],name:["Teluk Intan"],slc:[],lc:"Teluk Intan",pr:"4",st:"pk",co:"MY",oid:"pkTlkIntn"},
  {id: "pkTmh",url:["temoh"],name:["Temoh"],slc:[],lc:"Temoh",pr:"4",st:"pk",co:"MY",oid:"pkTmh"},
  // {id: "pkTrlk",url:["trolak"],name:["Trolak"],slc:[],lc:"Trolak",pr:"4",st:"pk",co:"MY",oid:"pkTrlk"},
  // {id: "pkTrng",url:["trong"],name:["Trong"],slc:[],lc:"Trong",pr:"4",st:"pk",co:"MY",oid:"pkTrng"},
  {id: "pkTrnh",url:["tronoh"],name:["Tronoh"],slc:[],lc:"Tronoh",pr:"4",st:"pk",co:"MY",oid:"pkTrnh"},
  // {id: "pkUluBrnm",url:["ulu Bernam"],name:["Ulu Bernam"],slc:[],lc:"Ulu Bernam",pr:"4",st:"pk",co:"MY",oid:"pkUluBrnm"},
  {id: "pkUluKnta",url:["ulu-kinta"],name:["Ulu Kinta"],slc:slc_pkUluKnta,lc:["Ulu Kinta", "Ipoh", "Tambun"],pr:"2",st:"pk",co:"MY",oid:"pkUluKnta"},

];

export const cityKedah = ["Alor Setar","Ayer Hitam","Baling","Bandar Baharu", "Bandar Puteri Jaya, Sungai Petani", "Bedong", "Bukit Kayu Hitam",
    "Changloon", "Gurun","Jeniang", "Jitra", "Karangan", "Kepala Batas, Kedah", "Kodiang", "Kota Kuala Muda",
    "Kota Sarang Semut", "Kuala Kedah", "Kuala Ketil", "Kuala Nerang", "Kuala Pegang", "Kulim, Kedah",
    "Kupang", "Langgar", "Langkawi", "Lunas", "Merbok", "Padang Serai", "Pendang", "Pokok Sena",
    "Serdang, Kedah", "Sik", "Simpang Empat", "Sungai Petani", "Taman Ria, Sungai Petani", "Taman Sejati Indah, Sungai Petani", "Universiti Utara Malaysia", "Yan"]; // 37

export const cityKedahId = ["ktASetar","ktAHitam","kdBalg","kdBBhr", "kdBPtrJ", "ktBdg", "ktBKHitam",
    "ktChngln", "ktGerun","ktJniang", "ktJitra", "ktKrgn", "ktKplBatas", "ktKodiang", "ktKKMuda",
    "ktKSSemut", "ktKKedah", "ktKKetil", "ktKMerg", "ktKPegng", "kdKlim",
    "ktKpg", "ktLanggar", "kdLgkawi", "ktLunas", "ktMrbk", "ktPSerai", "kdPndg", "kdPSna",
    "ktSerdg", "kdSik", "ktSEmpat", "ktSgPetani", "ktTRia", "ktTSjtIndh", "ktUUM", "kdYan"];
export const slc_BdrLaguna = [
  "Bandar Laguna Merbok","Bedong","Taman Desa Permai","Ambangan Heights","Taman Gemilang","Taman Seri Bayu",
  // point
  "Taman Desa Aman Fasa 2","Taman Desa Aman Fasa 4","Aman Suria","Taman Perbandaran Sungai Tukang","Taman Lembah Permai",
  "Bukit Bayu","Taman Seri Bayu 2","Taman Bayu Indah",
];
export const slc_kdBktBanyan = [
  "Bukit Banyan",

  "Taman Ria Jaya","Kampung Hj Wahab","Kampung Raja","Kawasan Perindustrian Sungai Petani","Darulaman Perdana","Amanjaya",
  "Kampung Rusa","Taman Kelisa Ria","Bandar Mutiara","Taman Batik",
  // point
  "Taman Seruling","Taman Sari","Sutera Parkhomes","Spice Village","Sp Heights",
];
export const slc_kdTRia = [
  "Bandar Amanjaya",

  "Kampung Sungai Layar Hujong","Kampung Sungai Layar Tengah","Kampung Keda Che Bema","Taman Seroja","Kampung Sungai Layar",
  "Taman Pekan Baru","Kampung Teroi","Taman Bunga Raya","Taman Sri Melati","Taman Sri Tanjung","Taman Orkid Jaya","Taman Lagenda Indah",
  "Lagenda Heights","Taman Ria","Kampung Ayer Mendidih","Taman Ria Indah","Taman Bandar Baru","Kampung Sungai Tongka",
  // point
  "Taman Kiara","Desa Keda Kampung Che Bema","Kampung Teluk Sungai Layar","Kampung Bakar Kapor","Taman Widuri","Taman Melati Indah",
  "Taman Padimas","Taman Desa Enggang","Taman Desa Jaya","Taman Desa Aman","Taman Desa Indah","Taman Wira Indah","Taman Ria Fasa 2",
  "Taman Ria Murni","Kampung Ayer Mendidih","Taman Berlian Indah","Taman Mutiara","Kampung Serkum","Taman Kenari Indah",
];
export const slc_TSjtIndh = [
  "Taman Petani Jaya",

  "Taman Sinar Intan","Taman Nilam","Taman Arked","Kampung Masjid","Taman Desa Meranti Indah","Taman Kristal","Kampung Padang Buloh",
  "Taman Sri Pinang","Taman Rhu","Taman Kempas","Kampung Matang Gedong","Taman Sejati Indah","Kampung Tepi Sungai","Bakar Arang",
  "Taman Aman","Taman Patani Jaya","Taman Sentosa","Taman Patani Jaya","Taman Sri Wang","Kampung Pengkalan Lebai Man","Taman Beringin",
  // point
  "Taman Delima","Taman Intan","Taman Delima","Taman Permata Semarak","Taman Semarak","Taman Pasir Emas","Taman Pasir Emas Indah",
  "Padang Temusu","Taman Permata Indah","Sungai Pasir","Taman Pinang Jaya","Taman Rhu 2","Taman Seri Gedong","Taman Palma","Taman Patani Jaya 2",
  "Taman Bersatu","Taman Setia Jaya","Taman Sejahtera","Taman Berjaya Baru","Taman Cengal Emas","Taman Berangan Seri",
];
export const slc_kdBPtrJ = [
  "Bandar Puteri Jaya","Bandar Utama","Kampung Serukam","Taman Songket","Bandar Perdana","Taman Industri Sungai Petani","Kampung Kelang Makau",
  // point
  "Taman Sidam Kiri","Pr1ma Residensi Utama","Tijana","Seri Astana","Taman Cindai Jaya","Taman Sutera Suria","Taman Keladi",
  "Bandar Seri Cendana","Kampung Tengah","Kampung Permatang Berangan","Taman Pinang Indah","Kampung Permatang Kedundung","Taman Rhu 3",
];
export const cityKedahObj = [
  {id:"kdASetar",url:["alor-setar"],name:["Alor Setar"],slc:"",lc:"Alor Setar",pr:"4",st:"kd",co:"MY",oid:"ktASetar"},
  {id:"kdAHitam",url:["ayer-hitam"],name:["Ayer Hitam"],slc:"",lc:"Ayer Hitam",pr:"4",st:"kd",co:"MY",oid:"ktAHitam"},
  {id:"kdBalg",url:["baling"],name:["Baling"],slc:"",lc:"Baling",pr:"4",st:"kd",co:"MY",oid:"kdBalg"},
  {id:"kdBBhr",url:["bandar-baharu"],name:["Bandar Baharu"],slc:"",lc:"Bandar Baharu",pr:"4",st:"kd",co:"MY",oid:"kdBBhr"},
  {id:"kdBdg",url:["bedong"],name:["Bedong"],slc:"",lc:"Bedong",pr:"4",st:"kd",co:"MY",oid:"ktBdg"},
  {id:"kdBKHitam",url:["bukit-kayu-hitam"],name:["Bukit Kayu Hitam"],slc:"",lc:"Bukit Kayu Hitam",pr:"4",st:"kd",co:"MY",oid:"ktBKHitam"},
  {id:"kdChngln",url:["changloon"],name:["Changloon"],slc:"",lc:"Changloon",pr:"4",st:"kd",co:"MY",oid:"ktChngln"},
  {id:"kdGerun",url:["gurun"],name:["Gurun"],slc:"",lc:"Gurun",pr:"4",st:"kd",co:"MY",oid:"ktGerun"},
  // {id:"kdJniang",url:["jeniang"],name:["Jeniang"],slc:"",lc:"Jeniang",pr:"4",st:"kd",co:"MY",oid:"ktJniang"},
  {id:"kdJitra",url:["jitra"],name:["Jitra"],slc:"",lc:"Jitra",pr:"4",st:"kd",co:"MY",oid:"ktJitra"},
  {id:"kdKrgn",url:["karangan"],name:["Karangan"],slc:"",lc:"Karangan",pr:"4",st:"kd",co:"MY",oid:"ktKrgn"},
  {id:"kdKplBatas",url:["kepala-batas-kedah"],name:["Kepala Batas"],slc:"",lc:"Kepala Batas",pr:"4",st:"kd",co:"MY",oid:"ktKplBatas"},
  {id:"kdKodiang",url:["kodiang"],name:["Kodiang"],slc:"",lc:"Kodiang",pr:"4",st:"kd",co:"MY",oid:"ktKodiang"},
  {id:"kdKKMuda",url:["kota-kuala-muda"],name:["Kota Kuala Muda"],slc:"",lc:"Kota Kuala Muda",pr:"4",st:"kd",co:"MY",oid:"ktKKMuda"},
  {id:"kdKSSemut",url:["kota-sarang-semut"],name:["Kota Sarang Semut"],slc:"",lc:"Kota Sarang Semut",pr:"4",st:"kd",co:"MY",oid:"ktKSSemut"},
  {id:"kdKKedah",url:["kuala-kedah"],name:["Kuala Kedah"],slc:"",lc:"Kuala Kedah",pr:"4",st:"kd",co:"MY",oid:"ktKKedah"},
  {id:"kdKKetil",url:["kuala-ketil"],name:["Kuala Ketil"],slc:"",lc:"Kuala Ketil",pr:"4",st:"kd",co:"MY",oid:"ktKKetil"},
  {id:"kdKMerg",url:["kuala-nerang"],name:["Kuala Nerang"],slc:"",lc:"Kuala Nerang",pr:"4",st:"kd",co:"MY",oid:"ktKMerg"},
  // {id:"kdKPegng",url:["kuala-pegang"],name:["Kuala Pegang"],slc:"",lc:"Kuala Pegang",pr:"4",st:"kd",co:"MY",oid:"ktKPegng"},
  {id:"kdKlim",url:["kulim"],name:["Kulim"],slc:"",lc:"Kulim",pr:"4",st:"kd",co:"MY",oid:"kdKlim"},
  {id:"kdKpg",url:["kupang"],name:["Kupang"],slc:"",lc:"Kupang",pr:"4",st:"kd",co:"MY",oid:"ktKpg"},
  {id:"kdLanggar",url:["langgar"],name:["Langgar"],slc:"",lc:"Langgar",pr:"4",st:"kd",co:"MY",oid:"ktLanggar"},
  {id:"kdLgkawi",url:["langkawi"],name:["Langkawi"],slc:"",lc:"Langkawi",pr:"4",st:"kd",co:"MY",oid:"kdLgkawi"},
  {id:"kdLunas",url:["lunas"],name:["Lunas"],slc:"",lc:"Lunas",pr:"4",st:"kd",co:"MY",oid:"ktLunas"},
  {id:"kdMrbk",url:["merbok"],name:["Merbok"],slc:"",lc:"Merbok",pr:"4",st:"kd",co:"MY",oid:"ktMrbk"},
  {id:"kdPSerai",url:["padang-serai"],name:["Padang Serai"],slc:"",lc:"Padang Serai",pr:"4",st:"kd",co:"MY",oid:"ktPSerai"},
  {id:"kdPndg",url:["pendang"],name:["Pendang"],slc:"",lc:"Pendang",pr:"4",st:"kd",co:"MY",oid:"kdPndg"},
  {id:"kdPSna",url:["pokok-sena"],name:["Pokok Sena"],slc:"",lc:"Pokok Sena",pr:"4",st:"kd",co:"MY",oid:"kdPSna"},
  {id:"kdSerdg",url:["serdang-kedah"],name:["Serdang"],slc:"",lc:"Serdang",pr:"4",st:"kd",co:"MY",oid:"ktSerdg"},
  {id:"kdSik",url:["sik"],name:["Sik"],slc:"",lc:"Sik",pr:"4",st:"kd",co:"MY",oid:"kdSik"},
  {id:"kdSEmpat",url:["simpang-empat"],name:["Simpang Empat"],slc:"",lc:"Simpang Empat",pr:"4",st:"kd",co:"MY",oid:"ktSEmpat"},

  {id:"kdBdrLaguna",url:["bandar-laguna-merbok"],name:["Bandar Laguna Merbok, Bedong, Sungai Lalang"],slc:slc_BdrLaguna,lc:["Sungai Petani", "Bedong", "Sungai Lalang"],pr:"2",st:"kd",co:"MY",oid:""},
  {id:"kdBktBanyan",url:["bukit-banyan-bandar-mutiara"],name:["Bukit Banyan, Bandar Mutiara"],slc:slc_kdBktBanyan,lc:["Sungai Petani"],pr:"2",st:"kd",co:"MY",oid:""},
  {id:"kdTRia",url:["amanjaya-taman-ria"],name:["Taman Ria, Bandar Amanjaya"],slc:slc_kdTRia,lc:["Sungai Petani"],pr:"2",st:"kd",co:"MY",oid:"ktTRia"},
  {id:"kdTSjtIndh",url:["sejati-indah-petani-jaya-sinar-intan"],name:["Taman Sejati Indah, Taman Petani Jaya, Taman Sinar Intan"],slc:slc_TSjtIndh,lc:["Sungai Petani"],pr:"2",st:"kd",co:"MY",oid:"ktTSjtIndh"},
  {id:"kdBPtrJ",url:["bandar-puteri-jaya"],name:["Bandar Puteri Jaya, Bandar Utama"],slc:slc_kdBPtrJ,lc:["Sungai Petani"],pr:"2",st:"kd",co:"MY",oid:"kdBPtrJ"},
  {id:"kdSgPetani",url:["sungai-petani"],name:["Sungai Petani"],slc:"",lc:"Sungai Petani",pr:"4",st:"kd",co:"MY",oid:"ktSgPetani"},
  // {id:"kdUUM",url:["universiti Utara Malaysia"],name:["Universiti Utara Malaysia"],slc:"",lc:"Universiti Utara Malaysia",pr:"4",st:"kd",co:"MY",oid:"ktUUM"},
  {id:"kdYan",url:["yan"],name:["Yan"],slc:"",lc:"Yan",pr:"4",st:"kd",co:"MY",oid:"kdYan"},
]

export const cityKelantan = ["Ayer Lanas", "Bachok", "Cherang Ruku", "Dabong",
    "Gua Musang", "Jeli", "Kem Desa Pahlawan", "Ketereh", "Kota Bharu", "Kuala Balah",
    "Kuala Krai", "Machang", "Melor", "Pasir Mas", "Pasir Puteh", "Pulai Chondong",
    "Rantau Panjang, Kelantan", "Selising", "Tanah Merah", "Temangan", "Tumpat", "Wakaf Bharu"]; //22

export const cityKelantanId = ["ktALnas", "ktBchok", "ktCherngRk", "ktDbg",
    "ktGMusg", "ktJli", "ktKDsPahlawn", "ktKtr", "ktKBhru", "ktKBlah",
    "ktKKrai", "ktMachg", "ktMelor", "ktPMas", "ktPPuteh", "ktPChndng",
    "ktRantPjng", "ktSelisg", "ktTMrah", "ktTmgan", "ktTmpat", "ktWkfBharu"];

export const cityKelantanObj = [
  {id:"ktALnas",url:["ayer-lanas"],name:["Ayer Lanas"],slc:"",lc:"Ayer Lanas",pr:"4",st:"kt",co:"MY",oid:"ktALnas"},
  {id:"ktBchok",url:["bachok"],name:["Bachok"],slc:"",lc:"Bachok",pr:"4",st:"kt",co:"MY",oid:"ktBchok"},
  {id:"ktCherngRk",url:["cherang-ruku"],name:["Cherang Ruku"],slc:"",lc:"Cherang Ruku",pr:"4",st:"kt",co:"MY",oid:"ktCherngRk"},
  {id:"ktDbg",url:["dabong"],name:["Dabong"],slc:"",lc:"Dabong",pr:"4",st:"kt",co:"MY",oid:"ktDbg"},
  {id:"ktGMusg",url:["gua-musang"],name:["Gua Musang"],slc:"",lc:"Gua Musang",pr:"4",st:"kt",co:"MY",oid:"ktGMusg"},
  {id:"ktJli",url:["jeli"],name:["Jeli"],slc:"",lc:"Jeli",pr:"4",st:"kt",co:"MY",oid:"ktJli"},
  {id:"ktKDsPahlawn",url:["kem-desa-pahlawan"],name:["Kem Desa Pahlawan"],slc:"",lc:"Kem Desa Pahlawan",pr:"4",st:"kt",co:"MY",oid:"ktKDsPahlawn"},
  {id:"ktKtr",url:["ketereh"],name:["Ketereh"],slc:"",lc:"Ketereh",pr:"4",st:"kt",co:"MY",oid:"ktKtr"},
  {id:"ktKBhru",url:["kota-bharu"],name:["Kota Bharu"],slc:"",lc:"Kota Bharu",pr:"4",st:"kt",co:"MY",oid:"ktKBhru"},
  {id:"ktKBlah",url:["kuala-balah"],name:["Kuala Balah"],slc:"",lc:"Kuala Balah",pr:"4",st:"kt",co:"MY",oid:"ktKBlah"},
  {id:"ktKKrai",url:["kuala-krai"],name:["Kuala Krai"],slc:"",lc:"Kuala Krai",pr:"4",st:"kt",co:"MY",oid:"ktKKrai"},
  {id:"ktMachg",url:["machang"],name:["Machang"],slc:"",lc:"Machang",pr:"4",st:"kt",co:"MY",oid:"ktMachg"},
  {id:"ktMelor",url:["melor"],name:["Melor"],slc:"",lc:"Melor",pr:"4",st:"kt",co:"MY",oid:"ktMelor"},
  {id:"ktPMas",url:["pasir-mas"],name:["Pasir Mas"],slc:"",lc:"Pasir Mas",pr:"4",st:"kt",co:"MY",oid:"ktPMas"},
  {id:"ktPPuteh",url:["pasir-puteh"],name:["Pasir Puteh"],slc:"",lc:"Pasir Puteh",pr:"4",st:"kt",co:"MY",oid:"ktPPuteh"},
  {id:"ktPChndng",url:["pulai-chondong"],name:["Pulai Chondong"],slc:"",lc:"Pulai Chondong",pr:"4",st:"kt",co:"MY",oid:"ktPChndng"},
  {id:"ktRantPjng",url:["rantau-panjang-pasir-mas"],name:["Rantau Panjang"],slc:"",lc:"Rantau Panjang",pr:"4",st:"kt",co:"MY",oid:"ktRantPjng"},
  {id:"ktSelisg",url:["selising"],name:["Selising"],slc:"",lc:"Selising",pr:"4",st:"kt",co:"MY",oid:"ktSelisg"},
  {id:"ktTMrah",url:["tanah-merah"],name:["Tanah Merah"],slc:"",lc:"Tanah Merah",pr:"4",st:"kt",co:"MY",oid:"ktTMrah"},
  {id:"ktTmgan",url:["temangan"],name:["Temangan"],slc:"",lc:"Temangan",pr:"4",st:"kt",co:"MY",oid:"ktTmgan"},
  {id:"ktTmpat",url:["tumpat"],name:["Tumpat"],slc:"",lc:"Tumpat",pr:"4",st:"kt",co:"MY",oid:"ktTmpat"},
  {id:"ktWkfBharu",url:["wakaf-bharu"],name:["Wakaf Bharu"],slc:"",lc:"Wakaf Bharu",pr:"4",st:"kt",co:"MY",oid:"ktWkfBharu"},
]

export const cityPahang = ["Balok", "Bandar Bera", "Bandar Indera Mahkota, Kuantan", "Bandar Pusat Jengka", "Bandar Tun Abdul Razak",
    "Benta", "Bentong", "Brinchang", "Bukit Fraser", "Bukit Goh", "Bukit Kuin", "Bukit Sekilau, Kuantan", "Cameron Highlands", "Chenor",
    "Chini", "Damak", "Dong", "Gambang", "Genting Highlands", "Jerantut", "Karak",
    "Kemayan", "Kuala Krau", "Kuala Lipis", "Kuala Rompin", "Kuantan", "Lanchang", "Lurah Bilut",
    "Maran", "Mentakab", "Muadzam Shah", "Padang Tengku", "Pekan", "Raub", "Ringlet",
    "Sega", "Sungai Koyan", "Sungai Lembing", "Tanah Rata", "Temerloh", "Triang"]; //41

export const cityPahangId = ["phBlok", "phBra", "phBIMahkota","phBPJgka", "phBTARazak",
    "phBnta", "phBntg", "phBrchg", "phBFrser", "phBGh", "phBKuin", "phBSkl", "phCH", "phChnr",
    "phChni", "phDmak", "phDg", "phGbg", "phGenting", "phJtut", "phKrak",
    "phKmyn", "phKKrau", "phKLps", "phKRpin", "phKuantn", "phLchg", "phLrhBlt",
    "phMrn", "phMtkb", "phMdzmSh", "phPTgku", "phPekn", "phRaub", "phRlt",
    "phSg", "phSgKyan", "phSgLbg", "phTRta", "phTmrlh", "phTrg"];
export const cityPahangObj = [
  {id:"phBlok",url:["balok"],name:["Balok"],slc:"",lc:"Balok",pr:"4",st:"ph",co:"MY",oid:"phBlok"},
  {id:"phBra",url:["bandar-bera"],name:["Bandar Bera"],slc:"",lc:"Bandar Bera",pr:"4",st:"ph",co:"MY",oid:"phBra"},
  {id:"phBIMahkota",url:["bandar-indera-mahkota"],name:["Bandar Indera Mahkota"],slc:"",lc:"Kuantan",pr:"4",st:"ph",co:"MY",oid:"phBIMahkota"},
  {id:"phBPJgka",url:["bandar-tun-razak-pahang"],name:["Bandar Tun Razak, Jengka Town Center"],slc:"",lc:"Bandar Tun Razak",pr:"4",st:"ph",co:"MY",oid:"phBPJgka"},
  {id:"phBTARazak",url:["bandar-tun-abdul-razak"],name:["Bandar Tun Abdul Razak"],slc:"",lc:"Bandar Tun Abdul Razak",pr:"4",st:"ph",co:"MY",oid:"phBTARazak"},
  {id:"phBnta",url:["benta"],name:["Benta"],slc:"",lc:"Benta",pr:"4",st:"ph",co:"MY",oid:"phBnta"},
  {id:"phBntg",url:["bentong"],name:["Bentong"],slc:"",lc:"Bentong",pr:"4",st:"ph",co:"MY",oid:"phBntg"},
  // {id:"phBrchg",url:["brinchang"],name:["Brinchang"],slc:"",lc:"Brinchang",pr:"4",st:"ph",co:"MY",oid:"phBrchg"},
  {id:"phBFrser",url:["bukit-fraser"],name:["Bukit Fraser"],slc:"",lc:["Fraser's Hill", "Bukit Fraser"],pr:"4",st:"ph",co:"MY",oid:"phBFrser"},
  {id:"phBGh",url:["bukit-goh"],name:["Bukit Goh"],slc:"",lc:"Bukit Goh",pr:"4",st:"ph",co:"MY",oid:"phBGh"},
  // {id:"phBKuin",url:["bukit-kuin"],name:["Bukit Kuin"],slc:"",lc:"Bukit Kuin",pr:"4",st:"ph",co:"MY",oid:"phBKuin"},
  // {id:"phBSkl",url:["bukit Sekilau, Kuantan"],name:["Bukit Sekilau, Kuantan"],slc:"",lc:"Bukit Sekilau, Kuantan",pr:"4",st:"ph",co:"MY",oid:"phBSkl"},
  {id:"phCH",url:["cameron-highlands"],name:["Cameron Highlands"],slc:"",lc:["Cameron Highlands", "Brinchang", "Tanah Rata", "Ringlet"],pr:"4",st:"ph",co:"MY",oid:"phCH"},
  {id:"phChnr",url:["chenor"],name:["Chenor"],slc:"",lc:"Chenor",pr:"4",st:"ph",co:"MY",oid:"phChnr"},
  {id:"phChni",url:["chini"],name:["Chini"],slc:"",lc:"Chini",pr:"4",st:"ph",co:"MY",oid:"phChni"},
  // {id:"phDmak",url:["damak"],name:["Damak"],slc:"",lc:"Damak",pr:"4",st:"ph",co:"MY",oid:"phDmak"},
  // {id:"phDg",url:["dong"],name:["Dong"],slc:"",lc:"Dong",pr:"4",st:"ph",co:"MY",oid:"phDg"},
  {id:"phGbg",url:["gambang"],name:["Gambang"],slc:"",lc:"Gambang",pr:"4",st:"ph",co:"MY",oid:"phGbg"},
  {id:"phGenting",url:["genting-highlands"],name:["Genting Highlands"],slc:"",lc:"Genting Highlands",pr:"4",st:"ph",co:"MY",oid:"phGenting"},
  {id:"phJtut",url:["jerantut"],name:["Jerantut"],slc:"",lc:"Jerantut",pr:"4",st:"ph",co:"MY",oid:"phJtut"},
  {id:"phKrak",url:["karak"],name:["Karak"],slc:"",lc:"Karak",pr:"4",st:"ph",co:"MY",oid:"phKrak"},
  // {id:"phKmyn",url:["kemayan"],name:["Kemayan"],slc:"",lc:"Kemayan",pr:"4",st:"ph",co:"MY",oid:"phKmyn"},
  // {id:"phKKrau",url:["kuala Krau"],name:["Kuala Krau"],slc:"",lc:"Kuala Krau",pr:"4",st:"ph",co:"MY",oid:"phKKrau"},
  {id:"phKLps",url:["kuala-lipis"],name:["Kuala Lipis"],slc:"",lc:"Kuala Lipis",pr:"4",st:"ph",co:"MY",oid:"phKLps"},
  {id:"phKRpin",url:["kuala-rompin"],name:["Kuala Rompin"],slc:"",lc:"Kuala Rompin",pr:"4",st:"ph",co:"MY",oid:"phKRpin"},
  {id:"phKuantn",url:["kuantan"],name:["Kuantan"],slc:"",lc:"Kuantan",pr:"4",st:"ph",co:"MY",oid:"phKuantn"},
  // {id:"phLchg",url:["lanchang"],name:["Lanchang"],slc:"",lc:"Lanchang",pr:"4",st:"ph",co:"MY",oid:"phLchg"},
  // {id:"phLrhBlt",url:["lurah Bilut"],name:["Lurah Bilut"],slc:"",lc:"Lurah Bilut",pr:"4",st:"ph",co:"MY",oid:"phLrhBlt"},
  {id:"phMrn",url:["maran"],name:["Maran"],slc:"",lc:"Maran",pr:"4",st:"ph",co:"MY",oid:"phMrn"},
  {id:"phMtkb",url:["mentakab"],name:["Mentakab"],slc:"",lc:"Mentakab",pr:"4",st:"ph",co:"MY",oid:"phMtkb"},
  {id:"phMdzmSh",url:["muadzam-shah"],name:["Muadzam Shah"],slc:"",lc:"Muadzam Shah",pr:"4",st:"ph",co:"MY",oid:"phMdzmSh"},
  {id:"phPTgku",url:["padang-tengku"],name:["Padang Tengku"],slc:"",lc:"Padang Tengku",pr:"4",st:"ph",co:"MY",oid:"phPTgku"},
  {id:"phPekn",url:["pekan"],name:["Pekan"],slc:"",lc:"Pekan",pr:"4",st:"ph",co:"MY",oid:"phPekn"},
  {id:"phRaub",url:["raub"],name:["Raub"],slc:"",lc:["Raub", "Raub District"],pr:"4",st:"ph",co:"MY",oid:"phRaub"},
  // {id:"phRlt",url:["ringlet"],name:["Ringlet"],slc:"",lc:"Ringlet",pr:"4",st:"ph",co:"MY",oid:"phRlt"},
  // {id:"phSg",url:["sega"],name:["Sega"],slc:"",lc:"Sega",pr:"4",st:"ph",co:"MY",oid:"phSg"},
  // {id:"phSgKyan",url:["sungai Koyan"],name:["Sungai Koyan"],slc:"",lc:"Sungai Koyan",pr:"4",st:"ph",co:"MY",oid:"phSgKyan"},
  // {id:"phSgLbg",url:["sungai Lembing"],name:["Sungai Lembing"],slc:"",lc:"Sungai Lembing",pr:"4",st:"ph",co:"MY",oid:"phSgLbg"},
  // {id:"phTRta",url:["tanah Rata"],name:["Tanah Rata"],slc:"",lc:"Tanah Rata",pr:"4",st:"ph",co:"MY",oid:"phTRta"},
  {id:"phTmrlh",url:["temerloh"],name:["Temerloh"],slc:"",lc:"Temerloh",pr:"4",st:"ph",co:"MY",oid:"phTmrlh"},
  {id:"phTrg",url:["triang"],name:["Triang"],slc:"",lc:"Triang",pr:"4",st:"ph",co:"MY",oid:"phTrg"},
]

export const cityTerengganu = ["Ajil", "Al Muktatfi Billah Shah", "Ayer Puteh", "Bukit Besi", "Bukit Payong",
    "Ceneh", "Chalok", "Chukai", "Dungun", "Gong Badak", "Jerteh", "Kampung Raja", "Kemasek", "Kerteh",
    "Ketengah Jaya", "Kijal", "Kuala Berang", "Kuala Besut", "Kuala Terengganu",
    "Marang", "Paka", "Permaisuri", "Sungai Tong"]; //23

export const cityTerengganuId = ["trAjl", "trAlMkttfBlhShh", "trAPteh", "trBktBsi", "trBktPyng",
    "trCnh", "trChlk", "trCkai", "trDngun", "trGngBdk", "trJrth", "trKpgRja", "trKmsk", "trKrth",
    "trKtnghJ", "trKjl", "trKBrang", "trBsut", "trKTer",
    "trMrg", "trPka", "trPrmaisr", "trSgTng"];
export const cityTerengganuObj = [
  {id:"trAjl",url:["ajil"],name:["Ajil"],slc:"",lc:"Ajil",pr:"4",st:"tr",co:"MY",oid:"trAjl"},
  {id:"trAlMkttfBlhShh",url:["al-muktatfi-billah-shah"],name:["Al-Muktafi Billah Shah"],slc:"",lc:"Al Muktatfi Billah Shah",pr:"4",st:"tr",co:"MY",oid:"trAlMkttfBlhShh"},
  // {id:"trAPteh",url:["ayer Puteh"],name:["Ayer Puteh"],slc:"",lc:"Ayer Puteh",pr:"4",st:"tr",co:"MY",oid:"trAPteh"},
  {id:"trBktBsi",url:["bukit-besi"],name:["Bukit Besi"],slc:"",lc:"Bukit Besi",pr:"4",st:"tr",co:"MY",oid:"trBktBsi"},
  {id:"trBktPyng",url:["bukit-payong"],name:["Bukit Payong"],slc:"",lc:"Bukit Payong",pr:"4",st:"tr",co:"MY",oid:"trBktPyng"},
  // {id:"trCnh",url:["ceneh"],name:["Ceneh"],slc:"",lc:"Ceneh",pr:"4",st:"tr",co:"MY",oid:"trCnh"},
  {id:"trChlk",url:["chalok"],name:["Chalok"],slc:"",lc:"Chalok",pr:"4",st:"tr",co:"MY",oid:"trChlk"},
  {id:"trCkai",url:["chukai"],name:["Chukai"],slc:"",lc:["Chukai", "Kemaman"],pr:"4",st:"tr",co:"MY",oid:"trCkai"},
  {id:"trDngun",url:["dungun"],name:["Dungun"],slc:"",lc:"Kuala Dungun",pr:"4",st:"tr",co:"MY",oid:"trDngun"},
  // {id:"trGngBdk",url:["gong Badak"],name:["Gong Badak"],slc:"",lc:"Gong Badak",pr:"4",st:"tr",co:"MY",oid:"trGngBdk"},
  {id:"trJrth",url:["jerteh"],name:["Jerteh, Besut, Kampung Raja"],slc:"",lc:["Jerteh", "Kampung Raja", "Besut"],pr:"4",st:"tr",co:"MY",oid:"trJrth"},
  // {id:"trKpgRja",url:["kampung Raja"],name:["Kampung Raja"],slc:"",lc:"Kampung Raja",pr:"4",st:"tr",co:"MY",oid:"trKpgRja"},
  {id:"trKmsk",url:["kemasek"],name:["Kemasek"],slc:"",lc:"Kemasek",pr:"4",st:"tr",co:"MY",oid:"trKmsk"},
  {id:"trKrth",url:["kerteh"],name:["Kerteh"],slc:"",lc:"Kerteh",pr:"4",st:"tr",co:"MY",oid:"trKrth"},
  {id:"trKtnghJ",url:["ketengah-jaya"],name:["Ketengah Jaya"],slc:"",lc:"Ketengah Jaya",pr:"4",st:"tr",co:"MY",oid:"trKtnghJ"},
  {id:"trKjl",url:["kijal"],name:["Kijal"],slc:"",lc:"Kijal",pr:"4",st:"tr",co:"MY",oid:"trKjl"},
  {id:"trKBrang",url:["kuala-berang"],name:["Kuala Berang"],slc:"",lc:"Kuala Berang",pr:"4",st:"tr",co:"MY",oid:"trKBrang"},
  // {id:"trBsut",url:["kuala Besut"],name:["Kuala Besut"],slc:"",lc:"Kuala Besut",pr:"4",st:"tr",co:"MY",oid:"trBsut"},
  {id:"trKTer",url:["kuala-terengganu"],name:["Kuala Terengganu"],slc:"",lc:"Kuala Terengganu",pr:"4",st:"tr",co:"MY",oid:"trKTer"},
  {id:"trMrg",url:["marang"],name:["Marang"],slc:"",lc:"Marang",pr:"4",st:"tr",co:"MY",oid:"trMrg"},
  {id:"trPka",url:["paka"],name:["Paka"],slc:"",lc:"Paka",pr:"4",st:"tr",co:"MY",oid:"trPka"},
  {id:"trPrmaisr",url:["permaisuri"],name:["Permaisuri"],slc:"",lc:"Permaisuri",pr:"4",st:"tr",co:"MY",oid:"trPrmaisr"},
  // {id:"trSgTng",url:["sungai Tong"],name:["Sungai Tong"],slc:"",lc:"Sungai Tong",pr:"4",st:"tr",co:"MY",oid:"trSgTng"}
]

export const cityPerlis = ["Arau", "Kaki Bukit", "Kangar", "Kuala Perlis", "Padang Besar", "Simpang Ampat, Perlis"];//6
export const cityPerlisId = ["plArau", "plKBkt", "plKngr", "plKPrls", "plPdgBsr", "plSmpngAmpt"];
export const cityPerlisObj = [
  {id:"plArau",url:["arau"],name:["Arau"],slc:"",lc:"Arau",pr:"4",st:"pl",co:"MY",oid:"plArau"},
  {id:"plKBkt",url:["kaki-bukit"],name:["Kaki Bukit"],slc:"",lc:"Kaki Bukit",pr:"4",st:"pl",co:"MY",oid:"plKBkt"},
  {id:"plKngr",url:["kangar"],name:["Kangar"],slc:"",lc:"Kangar",pr:"4",st:"pl",co:"MY",oid:"plKngr"},
  {id:"plKPrls",url:["kuala-perlis"],name:["Kuala Perlis"],slc:"",lc:"Kuala Perlis",pr:"4",st:"pl",co:"MY",oid:"plKPrls"},
  {id:"plPdgBsr",url:["padang-besar"],name:["Padang Besar"],slc:"",lc:"Padang Besar",pr:"4",st:"pl",co:"MY",oid:"plPdgBsr"},
  {id:"plSmpngAmpt",url:["simpang-ampat-perlis"],name:["Simpang Ampat"],slc:"",lc:"Simpang Ampat",pr:"4",st:"pl",co:"MY",oid:"plSmpngAmpt"},
]

export const citySabah = ["Beaufort", "Beluran", "Beverly", "Bongawan", "Damai", "Inanam", "Keningau", "Kepayan",
    "Kingfisher", "Kota Belud", "Kota Kinabalu", "Kota Kinabatangan", "Kota Marudu", "Kuala Penyu", "Kudat",
    "Kunak", "Lahad Datu", "Likas", "Luyang", "Membakut", "Menumbok", "Nabawan", "Pamol", "Papar",
    "Penampang", "Pitas", "Putatan", "Ranau", "Sandakan", "Semporna", "Sipitang", "Tambunan", "Tamparuli",
    "Tanjung Aru", "Tawau", "Telipok", "Tenghilan", "Tenom", "Tongod", "Tuaran"];  //40

export const citySabahId = ["shBfort", "shBlurn", "shBvrly", "shBngwn", "shDmai", "shInnm", "shKngau", "shKpyn",
    "shKgfshr", "shKBelud", "shKK", "shKnbtg", "shMrudu", "shKPnyu", "shKdat",
    "shKnak", "shLDtu", "shLkas", "shLyg", "shMmbkt", "shMnmbk", "shNbawan", "shPml", "shPpar",
    "shPnampg", "shPtas", "shPtatan", "shRnau", "shSndakan", "shSmpor", "shSpitg", "shTmbunan", "shTmprli",
    "shTAru", "shTwau", "shTlpk", "shTnghln", "shTnom", "shTngod", "shTuarn"];

export const slc_shInnm = [
  "Kampung Keliangau","Kampung Darau","Inanam","Kolombong/Bdc Industrial Estate","Taman Nelly","Taman Casa Palma",
  "Taman Bdc","Taman Khidmat","Taman Bunga Raja (Phase 3 & 4)","Taman Ria 1","Kampung Madpai",
  // point
  "Kampong Rampayan",
];
export const slc_shKpyn = [
  "Kepayan",

  "Taman Shangrila","Taman Kepayan Ridge","Kepayan Low Cost Housing","Taman Friendship Phase 2","Taman Deluxe","Taman Olivia Phase 1",
  "Kampung Ganang","Kampung Peringatan Petagas","Kepayan","Taman Viewland","Taman Masjaya","Taman Suria","Taman Kendara","Taman Rainfield",
  "Kampung Kobusak","Taman Oriental","Towering Industry Centre","Taman Palm Villa","Kampung Mogonibong","Kampung Hungab","Kampung Gunsing",
  "Kampung Sukod","Kampung Kepayan",
];
export const slc_shKgfshr = [
  "Kingfisher",

  "Taman Bukit Sepangar","Taman Indah Permai",
  // point
  "Sepanggar","Alamesra",
];
export const slc_shLyg = [
  "Rumah Pangsa Lppb","Kampung Tanjung Aru Lama","Taman Sempelang Tanjung Aru","Taman Sempelang","Grace Court Apartment","Grace Villa",
  "Kampung Sembulan","Karamunsing Complex","Karamunsing","Taman Seri Gaya","Luyang Perdana","Taman Foh Sang","Taman Fortuna Phase 2",
  "Taman Fortuna","Taman Maya","Taman Orkid","Taman Mesra","Taman Che Mei","Teck Guan Villa","Taman Cantek","Taman Waja",
  "Taman Austral Park Kepayan Ridge",
  // point
  "Taman Kinaty Phase 2",
];
export const slc_shBdrKK = [
  "Kota Kinabalu", "Pusat Bandar",

  "Taman Kurnia Jaya","Taman Kemajuan","Taman Milian","Taman Hon Kong","Taman Cempaka","Likas","Taman Chin Sang",
  "Taman Likas","Chanyai Villa","Taman Public","Taman Public Jaya","Taman Likas","Taman Likas Jaya","Bandaran Berjaya",
  "Taman Fantasi","Taman Prestij","Bandaran Berjaya","Api-api Centre","Kampung Air","Taman Beauty Garden","Luyang Commercial Centre",
  "Taman Seputeh","Taman Sinar Baru","Taman Kim Leng","Taman Bunga Raja","Taman Seri Manis","Taman Iramanis","Kampung Cendrakasih",
  "Dah Yeh Villa","Taman Tai Tet","Taman Melor","Taman Iramanis","Kampung Cendrakasih",
  // point
  "Greater Kota Kinabalu","Taman Foo Loong",
];
export const slc_shPnampg = [
  "Kampung Minintod","Taman Khidmat","Kampung Sukang","Taman Golf Garden","Taman Tun Fuad Stephen","Taman Golfview",
  "Taman Far East","Taman Dixon","Taman Hiburan","Taman Kemayan","Taman Farmosa","Beverly Hills Apartment","Taman Cemerlang",
  "Bandar Baru Penampang","Kampung Puluduk","Taman Regency Park Phase 5","Taman Penampang Phase 2","Vista Minintod","Kampung Kibabaig",
  "Kampung Tuavon","Kampung Kivatu","Kampung Nampasan","Kampung Tanaki","Pekan Donggongon","Taman Manis","Taman Donggongon","Kampung Kambau",
  // point
  "Gaya Park",
];
export const citySabahObj = [
  {id:"shBfort",url:["beaufort"],name:["Beaufort"],slc:"",lc:"Beaufort",pr:"4",st:"sh",co:"MY",oid:"shBfort"},
  {id:"shBlurn",url:["beluran"],name:["Beluran"],slc:"",lc:"Beluran",pr:"4",st:"sh",co:"MY",oid:"shBlurn"},
  // {id:"shBvrly",url:["beverly"],name:["Beverly"],slc:"",lc:"Beverly",pr:"4",st:"sh",co:"MY",oid:"shBvrly"},
  {id:"shBngwn",url:["bongawan"],name:["Bongawan"],slc:"",lc:"Bongawan",pr:"4",st:"sh",co:"MY",oid:"shBngwn"},
  // {id:"shDmai",url:["damai"],name:["Damai"],slc:"",lc:"Damai",pr:"4",st:"sh",co:"MY",oid:"shDmai"},
  {id:"shKngau",url:["keningau"],name:["Keningau"],slc:"",lc:"Keningau",pr:"4",st:"sh",co:"MY",oid:"shKngau"},
  {id:"shKBelud",url:["kota-belud"],name:["Kota Belud"],slc:"",lc:"Kota Belud",pr:"4",st:"sh",co:"MY",oid:"shKBelud"},

  {id:"shInnm",url:["inanam"],name:["Inanam"],slc:slc_shInnm,lc:["Kota Kinabalu"],pr:"2",st:"sh",co:"MY",oid:"shInnm"},
  {id:"shKpyn",url:["kepayan"],name:["Kepayan"],slc:slc_shKpyn,lc:["Kota Kinabalu"],pr:"2",st:"sh",co:"MY",oid:"shKpyn"},
  {id:"shKgfshr",url:["kingfisher"],name:["Kingfisher"],slc:slc_shKgfshr,lc:["Kota Kinabalu"],pr:"2",st:"sh",co:"MY",oid:"shKgfshr"},
  {id:"shLyg",url:["luyang"],name:["Luyang"],slc:slc_shLyg,lc:["Kota Kinabalu"],pr:"2",st:"sh",co:"MY",oid:"shLyg"},
  {id:"shBdrKK",url:["pusat-bandar-kota-kinabalu"],name:["Pusat Bandar Kota Kinabalu"],slc:slc_shBdrKK,lc:["Kota Kinabalu"],pr:"2",st:"sh",co:"MY",oid:"shLyg"},
  {id:"shKK",url:["kota-kinabalu"],name:["Kota Kinabalu"],slc:"",lc:"Kota Kinabalu",pr:"4",st:"sh",co:"MY",oid:"shKK"},

  {id:"shKnbtg",url:["kota-kinabatangan"],name:["Kota Kinabatangan"],slc:"",lc:"Kota Kinabatangan",pr:"4",st:"sh",co:"MY",oid:"shKnbtg"},
  {id:"shMrudu",url:["kota-marudu"],name:["Kota Marudu"],slc:"",lc:"Kota Marudu",pr:"4",st:"sh",co:"MY",oid:"shMrudu"},
  {id:"shKPnyu",url:["kuala-penyu"],name:["Kuala Penyu"],slc:"",lc:"Kuala Penyu",pr:"4",st:"sh",co:"MY",oid:"shKPnyu"},
  {id:"shKdat",url:["kudat"],name:["Kudat"],slc:"",lc:"Kudat",pr:"4",st:"sh",co:"MY",oid:"shKdat"},
  {id:"shKnak",url:["kunak"],name:["Kunak"],slc:"",lc:"Kunak",pr:"4",st:"sh",co:"MY",oid:"shKnak"},
  {id:"shLDtu",url:["lahad-datu"],name:["Lahad Datu"],slc:"",lc:"Lahad Datu",pr:"4",st:"sh",co:"MY",oid:"shLDtu"},
  {id:"shLkas",url:["likas"],name:["Likas"],slc:"",lc:"Likas",pr:"4",st:"sh",co:"MY",oid:"shLkas"},
  {id:"shMmbkt",url:["membakut"],name:["Membakut"],slc:"",lc:"Membakut",pr:"4",st:"sh",co:"MY",oid:"shMmbkt"},
  {id:"shMnmbk",url:["menumbok"],name:["Menumbok"],slc:"",lc:"Menumbok",pr:"4",st:"sh",co:"MY",oid:"shMnmbk"},
  {id:"shNbawan",url:["nabawan"],name:["Nabawan"],slc:"",lc:"Nabawan",pr:"4",st:"sh",co:"MY",oid:"shNbawan"},
  {id:"shPml",url:["pamol"],name:["Pamol"],slc:"",lc:"Pamol",pr:"4",st:"sh",co:"MY",oid:"shPml"},
  {id:"shPpar",url:["papar"],name:["Papar"],slc:"",lc:"Papar",pr:"4",st:"sh",co:"MY",oid:"shPpar"},

  {id:"shPnampg",url:["penampang"],name:["Penampang, Beverly Hills"],slc:slc_shPnampg,lc:["Penampang", "Kota Kinabalu"],pr:"2",st:"sh",co:"MY",oid:"shPnampg"},

  // {id:"shPtas",url:["pitas"],name:["Pitas"],slc:"",lc:"Pitas",pr:"4",st:"sh",co:"MY",oid:"shPtas"},
  {id:"shPtatan",url:["putatan"],name:["Putatan"],slc:"",lc:"Putatan",pr:"4",st:"sh",co:"MY",oid:"shPtatan"},
  {id:"shRnau",url:["ranau"],name:["Ranau"],slc:"",lc:"Ranau",pr:"4",st:"sh",co:"MY",oid:"shRnau"},
  {id:"shSndakan",url:["sandakan"],name:["Sandakan"],slc:"",lc:"Sandakan",pr:"4",st:"sh",co:"MY",oid:"shSndakan"},
  {id:"shSmpor",url:["semporna"],name:["Semporna"],slc:"",lc:"Semporna",pr:"4",st:"sh",co:"MY",oid:"shSmpor"},
  {id:"shSpitg",url:["sipitang"],name:["Sipitang"],slc:"",lc:"Sipitang",pr:"4",st:"sh",co:"MY",oid:"shSpitg"},
  {id:"shTmbunan",url:["tambunan"],name:["Tambunan"],slc:"",lc:"Tambunan",pr:"4",st:"sh",co:"MY",oid:"shTmbunan"},
  {id:"shTmprli",url:["tamparuli"],name:["Tamparuli"],slc:"",lc:"Tamparuli",pr:"4",st:"sh",co:"MY",oid:"shTmprli"},
  // {id:"shTAru",url:["tanjung Aru"],name:["Tanjung Aru"],slc:"",lc:"Tanjung Aru",pr:"4",st:"sh",co:"MY",oid:"shTAru"},
  {id:"shTwau",url:["tawau"],name:["Tawau"],slc:"",lc:"Tawau",pr:"4",st:"sh",co:"MY",oid:"shTwau"},
  // {id:"shTlpk",url:["telipok"],name:["Telipok"],slc:"",lc:"Telipok",pr:"4",st:"sh",co:"MY",oid:"shTlpk"},
  // {id:"shTnghln",url:["tenghilan"],name:["Tenghilan"],slc:"",lc:"Tenghilan",pr:"4",st:"sh",co:"MY",oid:"shTnghln"},
  {id:"shTnom",url:["tenom"],name:["Tenom"],slc:"",lc:"Tenom",pr:"4",st:"sh",co:"MY",oid:"shTnom"},
  {id:"shTngod",url:["tongod"],name:["Tongod"],slc:"",lc:"Tongod",pr:"4",st:"sh",co:"MY",oid:"shTngod"},
  {id:"shTuarn",url:["tuaran"],name:["Tuaran"],slc:"",lc:"Tuaran",pr:"4",st:"sh",co:"MY",oid:"shTuarn"},
]
export const citySarawak = ["Asajaya", "Balingian", "Baram", "Batu Kawa", "Bau", "BDC", "Bekenu", "Belaga",
    "Belawai", "Betong", "Bintangor", "Bintulu", "Dalat", "Daro", "Debak", "Engkilili", "Julau",
    "Kabong", "Kanowit", "Kapit", "Kota Samarahan", "Kuching", "Lawas", "Limbang", "Lingga", "Long Lama",
    "Lubok Antu", "Lundu", "Lutong", "Marudi", "Matang Jaya", "Matu", "Miri", "Mukah", "Nanga Medamit",
    "Niah", "Pakan", "Petra Jaya", "Pusa", "Roban", "Saratok", "Sarikei", "Sebauh", "Sebuyau", "Selangau", "Serian", "Sibu",
    "Siburan", "Simunjan", "Song", "Spaoh", "Sri Aman", "Stapok", "Stutong", "Sundar", "Tabuan Jaya", "Tatau", "Tebedu"]; //58

export const citySarawakId = ["swAJ", "swBlngian", "swBrm", "swBKw", "swBau", "swBDC", "swBkn", "swBlaga",
    "swBlwai", "swBtg", "swBntngr", "swBin", "swDlt", "swDro", "swDbk", "swEngkll", "swJlau",
    "swKbng", "swKnwit", "swKpit", "swSmrhn", "swKch", "swLwas", "swLmbg", "swLngg", "swLgLma",
    "swLA", "swLndu", "swLtng", "swMrdi", "swMtngJ", "swMtu", "swMri", "swMkh", "swNngaMdmt",
    "swNiah", "swPkn", "swPtrJ", "swPsa", "swRbn", "swSrtok", "swSrkei", "swSbauh", "swSbyau", "swSlngau", "swSrian", "swSbu",
    "swSburn", "swSmnjn", "swSg", "swSpaoh", "swSAman", "swStpk", "swSttg", "swSndr", "swTbnJ", "swTtau", "swTbdu"];

export const slc_swBKw = [
  "Taman Genesis","Desa Moyan","Rantau Panjang","Batu Kawa","Highfield","Taman Shing Yu","Stapok","Taman Kwong Thiong",
  "Taman Sri Borneo","Taman Desa Wira","Taman Flora","Everbright Park","Metro Park","Pheonix Garden","Rose Garden",
  "Taman Union","Sunny Hill Garden","Charming Garden","Taman Park View","Kit Fah Garden","Royal Garden","Bandar Baru Batu Kawa",
  "Taman Stapok","Kampung Segedup","Kampung Stapok",
];
export const slc_swBDC = [
  "Kampung Stutong Baru","Taman Bdc Stampin","Taman Bdc","Kempas Heights","Taman Daya","Taman Satria Jaya","Pelita Heights",
  "Taman Satria Jaya","Kampung Cemerlang","Taman Iris","Taman Timberland","Hua Joo Park","Taman Hui Sing","Taman Jelita",
  "Green Heights","Taman Borneo Heights","Richmond Hill",
  // point
  "Kampung Stampin",
];
export const slc_swBLntng = [
  "Kenny Hill","Taman Ridgeway","Taman Hwata","Iris Garden","Central Park Commercial Centre","Min Chu Garden","Bormill Commercial Centre",
  "Batu Lintang","Lintang Park","Taman Liong Seng","Taman Bunga Teratai","Westwood","Rikett Estate","Taman Sun Valley","Panggung Udara",
  "Gan Swee Cho Garden","Taman Budaya",
];
export const slc_swKStosa = [
  "Batu Kitang",

  "Kampung Sungai Tapang","Kota Sentosa","6th Mile","Taman Sarmax","Kota Sentosa Industry Park","Taman Boulder Built",
  "Kampung Bukit Panchur","Country Hill","Kampung Semeba"
];
export const slc_swPdwn = [
  "Taman Sri Permai","Padawan, Sarawak","Kang Cheng Light Industrial Estate","Taman Golden View","Taman In Ling",
  "Beverly Garden","Sungai Entingan","Kampung Kuap","Taman Mustafa","Taman Hill View",
  // point
  "Taman Penrissen",
];
export const slc_swPndng = [
  "Kenyalang Park",

  "Kampung Kenyalang Park","Kampung Simpang Tiga","Taman Chung Hua","Traffic Garden","Sekama","Three Hills Park","Poh Ming Park",
  "Tanah Putih","Pending Heights I","Biawak Industrial Estate","Pending Industrial Estate","Taman Riverview","Kampung Bintawa",
  "Bintawa Industrial Estate","Sungai Apong","Taman Kali","Taman Kuching","Taman Supreme",
  // note
  "City Bridge Commercial Centre","Sungai Kuap","Kali Garden",
];
export const slc_swPtrJ = [
  "Petra Jaya",

  "Kampung Matang Batu","Kampung Matang","Taman Suria Jaya","Taman Heng Guan","Taman Seri Makmur","Taman Peony","Taman Matang Jaya",
  "Taman Sri Wangi","Taman Sejoli","Kampung Pinang Jawa","Taman Sri Sarapi","Kampung Gita Laut","Taman Mawar","Taman Rahmat",
  "Taman Hussein","Kampung Laruk Skim","Taman Fah Tah","Taman Lee Ling","Taman Yen Yen","Taman Syn Syn","Taman Sri Wangi",
  "Kampung Tupong Hulu","Taman Suriza","Kampung Tupong Tengah","Kampung Tupong Batu","Kampung Bedil Besar","Kampung Tanjung",
  "Kampung Lintang","Kampung Istana","Kampung Boyan","Kampung Gersik","Kampung Surabaya","Kampung Panglima Seman","Kampung Semarang",
  "Kampung Bintawa Tengah","Kampung Bintawa Hilir","Kampung Siol Kandis","Taman Sourabaya Indah","Taman Lebunda","Demak Jaya",
  "Kampung Demak Baru Fasa 1","Kampung Demak Baru Fasa 2","Demak Baru","Stadium Sarawak","Taman Siol Ria","Kampung Malaysia Jaya",
  "Taman Sepawie","Taman Anib","Kampung Semerah Padi","Kampung Sungai Midin","Taman Melati 2","Taman Abrar","Kampung Semariang",
  "Kampung Semariang Batu","Kampung Semariang Pinggir","Taman Sukma","Taman Pelita Jaya","Desa Guru","Institut Kemahiran Mara Kuching",
  "Samariang","Bandar Samariang Phase 1","Semariang Commercial Centre","Kampung Rampangi Fasa 2","Kampung Rampangi",
  // point
  "Taman Kandis","Riveredge Commercial",
];
export const slc_swStk = [
  "Swee Joo Park","Hua Sin Garden","Poh Kong Park","Hongnion Garden","Taman Lian Kwong","Taman Wee & Wee","Kampung Sungai Maong",
  "Star Garden","Sin Sin Park","Happy Garden","How Hua Park","Kampung Kudei","Sin Yen Garden","Kampung Bandarshah",
  "Kampong Muda Hashim","Kampung Masjid","Kampung No6","Kampung Patingan",
];
export const slc_swTbnJ = [
  "King Centre","Taman Wan Alwi","Tun Jugah","Kampung Tabuan Dayak","Tabuan Heights","Taman Everbright Jaya","Taman Phoning",
  "Kampung Tabuan Jaya Tengah","Tabuan Jaya","Tabuan Laru","Taman Casa Marbella","Tabuan Jaya Baru 1","Tabuan Jaya Baru 2","Kampung Tabuan Melayu",
  "Tabuan Desa","Taman Rimba Sama Jaya","Tabuan Park","Taman Arbi","Muara Tabuan Light Industrial Park","Kampung Sungai Nada","Taman Muara Tabuan",
  "Sama Jaya Free Industrial Zone","Taman Stutong Indah",
  // point
  "Kampung Tabuan Tengah",
];
export const citySarawakObj = [
  {id:"swAJ",url:["asajaya"],name:["Asajaya"],slc:"",lc:"Asajaya",pr:"4",st:"sw",co:"MY",oid:"swAJ"},
  {id:"swBlngian",url:["balingian"],name:["Balingian"],slc:"",lc:"Balingian",pr:"4",st:"sw",co:"MY",oid:"swBlngian"},
  // {id:"swBrm",url:["baram"],name:["Baram"],slc:"",lc:"Baram",pr:"4",st:"sw",co:"MY",oid:"swBrm"},
  {id:"swBau",url:["bau"],name:["Bau"],slc:"",lc:"Bau",pr:"4",st:"sw",co:"MY",oid:"swBau"},
  // {id:"swBkn",url:["bekenu"],name:["Bekenu"],slc:"",lc:"Bekenu",pr:"4",st:"sw",co:"MY",oid:"swBkn"},
  {id:"swBlaga",url:["belaga"],name:["Belaga"],slc:"",lc:"Belaga",pr:"4",st:"sw",co:"MY",oid:"swBlaga"},
  // {id:"swBlwai",url:["belawai"],name:["Belawai"],slc:"",lc:"Belawai",pr:"4",st:"sw",co:"MY",oid:"swBlwai"},
  {id:"swBtg",url:["betong"],name:["Betong"],slc:"",lc:"Betong",pr:"4",st:"sw",co:"MY",oid:"swBtg"},
  {id:"swBntngr",url:["bintangor"],name:["Bintangor"],slc:"",lc:"Bintangor",pr:"4",st:"sw",co:"MY",oid:"swBntngr"},
  {id:"swBin",url:["bintulu"],name:["Bintulu"],slc:"",lc:"Bintulu",pr:"4",st:"sw",co:"MY",oid:"swBin"},
  {id:"swDlt",url:["dalat"],name:["Dalat"],slc:"",lc:"Dalat",pr:"4",st:"sw",co:"MY",oid:"swDlt"},
  // {id:"swDro",url:["daro"],name:["Daro"],slc:"",lc:"Daro",pr:"4",st:"sw",co:"MY",oid:"swDro"},
  // {id:"swDbk",url:["debak"],name:["Debak"],slc:"",lc:"Debak",pr:"4",st:"sw",co:"MY",oid:"swDbk"},
  // {id:"swEngkll",url:["engkilili"],name:["Engkilili"],slc:"",lc:"Engkilili",pr:"4",st:"sw",co:"MY",oid:"swEngkll"},
  // {id:"swJlau",url:["julau"],name:["Julau"],slc:"",lc:"Julau",pr:"4",st:"sw",co:"MY",oid:"swJlau"},
  // {id:"swKbng",url:["kabong"],name:["Kabong"],slc:"",lc:"Kabong",pr:"4",st:"sw",co:"MY",oid:"swKbng"},
  {id:"swKnwit",url:["kanowit"],name:["Kanowit"],slc:"",lc:"Kanowit",pr:"4",st:"sw",co:"MY",oid:"swKnwit"},
  {id:"swKpit",url:["kapit"],name:["Kapit"],slc:"",lc:"Kapit",pr:"4",st:"sw",co:"MY",oid:"swKpit"},
  {id:"swSmrhn",url:["kota-samarahan"],name:["Kota Samarahan"],slc:"",lc:"Kota Samarahan",pr:"4",st:"sw",co:"MY",oid:"swSmrhn"},

  {id:"swBKw",url:["batu-kawa"],name:["Batu Kawa"],slc:slc_swBKw,lc:["Kuching"],pr:"2",st:"sw",co:"MY",oid:"swBKw"},
  {id:"swBDC",url:["bdc"],name:["BDC, Stampin, Stutong"],slc:slc_swBDC,lc:["Kuching"],pr:"2",st:"sw",co:"MY",oid:"swBDC"},
  {id:"swBLntng",url:["batu-lintang"],name:["Batu Lintang, Padungan"],slc:slc_swBLntng,lc:["Kuching"],pr:"2",st:"sw",co:"MY",oid:""},
  {id:"swKStosa",url:["kota-sentosa"],name:["Kota Sentosa, Batu Kitang"],slc:slc_swKStosa,lc:["Kuching", "Bau"],pr:"2",st:"sw",co:"MY",oid:""},
  {id:"swPdwn",url:["padawan"],name:["Padawan"],slc:slc_swPdwn,lc:["Kuching", "Kota Samarahan", "Siburan"],pr:"2",st:"sw",co:"MY",oid:""},
  {id:"swPndng",url:["pending"],name:["Pending, Kenyalang"],slc:slc_swPndng,lc:["Kuching"],pr:"2",st:"sw",co:"MY",oid:""},
  {id:"swPtrJ",url:["petra-jaya"],name:["Petra Jaya"],slc:slc_swPtrJ,lc:["Kuching"],pr:"2",st:"sw",co:"MY",oid:"swPtrJ"},
  {id:"swStk",url:["satok"],name:["Satok"],slc:slc_swStk,lc:["Kuching"],pr:"2",st:"sw",co:"MY",oid:""},
  {id:"swTbnJ",url:["tabuan-jaya"],name:["Tabuan Jaya"],slc:slc_swTbnJ,lc:["Kuching"],pr:"2",st:"sw",co:"MY",oid:"swTbnJ"},
  {id:"swKch",url:["kuching"],name:["Kuching"],slc:"",lc:"Kuching",pr:"4",st:"sw",co:"MY",oid:"swKch"},

  {id:"swLwas",url:["lawas"],name:["Lawas"],slc:"",lc:"Lawas",pr:"4",st:"sw",co:"MY",oid:"swLwas"},
  {id:"swLmbg",url:["limbang"],name:["Limbang"],slc:"",lc:"Limbang",pr:"4",st:"sw",co:"MY",oid:"swLmbg"},
  // {id:"swLngg",url:["lingga"],name:["Lingga"],slc:"",lc:"Lingga",pr:"4",st:"sw",co:"MY",oid:"swLngg"},
  // {id:"swLgLma",url:["long-lama"],name:["Long Lama"],slc:"",lc:"Long Lama",pr:"4",st:"sw",co:"MY",oid:"swLgLma"},
  // {id:"swLA",url:["lubok-antu"],name:["Lubok Antu"],slc:"",lc:"Lubok Antu",pr:"4",st:"sw",co:"MY",oid:"swLA"},
  {id:"swLndu",url:["lundu"],name:["Lundu"],slc:"",lc:"Lundu",pr:"4",st:"sw",co:"MY",oid:"swLndu"},
  // {id:"swLtng",url:["lutong"],name:["Lutong"],slc:"",lc:"Lutong",pr:"4",st:"sw",co:"MY",oid:"swLtng"},
  // {id:"swMrdi",url:["marudi"],name:["Marudi"],slc:"",lc:"Marudi",pr:"4",st:"sw",co:"MY",oid:"swMrdi"},
  // {id:"swMtngJ",url:["matang Jaya"],name:["Matang Jaya"],slc:"",lc:"Matang Jaya",pr:"4",st:"sw",co:"MY",oid:"swMtngJ"},
  {id:"swMtu",url:["matu"],name:["Matu"],slc:"",lc:"Matu",pr:"4",st:"sw",co:"MY",oid:"swMtu"},
  {id:"swMri",url:["miri"],name:["Miri"],slc:"",lc:["Miri", "Lutong", "Bekenu", "Marudi"],pr:"4",st:"sw",co:"MY",oid:"swMri"},
  {id:"swMkh",url:["mukah"],name:["Mukah"],slc:"",lc:"Mukah",pr:"4",st:"sw",co:"MY",oid:"swMkh"},
  // {id:"swNngaMdmt",url:["nanga Medamit"],name:["Nanga Medamit"],slc:"",lc:"Nanga Medamit",pr:"4",st:"sw",co:"MY",oid:"swNngaMdmt"},
  // {id:"swNiah",url:["niah"],name:["Niah"],slc:"",lc:"Niah",pr:"4",st:"sw",co:"MY",oid:"swNiah"},
  // {id:"swPkn",url:["pakan"],name:["Pakan"],slc:"",lc:"Pakan",pr:"4",st:"sw",co:"MY",oid:"swPkn"},
  {id:"swPsa",url:["pusa"],name:["Pusa"],slc:"",lc:"Pusa",pr:"4",st:"sw",co:"MY",oid:"swPsa"},
  // {id:"swRbn",url:["roban"],name:["Roban"],slc:"",lc:"Roban",pr:"4",st:"sw",co:"MY",oid:"swRbn"},
  {id:"swSrtok",url:["saratok"],name:["Saratok"],slc:"",lc:"Saratok",pr:"4",st:"sw",co:"MY",oid:"swSrtok"},
  {id:"swSrkei",url:["sarikei"],name:["Sarikei"],slc:"",lc:"Sarikei",pr:"4",st:"sw",co:"MY",oid:"swSrkei"},
  {id:"swSbauh",url:["sebauh"],name:["Sebauh"],slc:"",lc:"Sebauh",pr:"4",st:"sw",co:"MY",oid:"swSbauh"},
  // {id:"swSbyau",url:["sebuyau"],name:["Sebuyau"],slc:"",lc:"Sebuyau",pr:"4",st:"sw",co:"MY",oid:"swSbyau"},
  {id:"swSlngau",url:["selangau"],name:["Selangau"],slc:"",lc:"Selangau",pr:"4",st:"sw",co:"MY",oid:"swSlngau"},
  {id:"swSrian",url:["serian"],name:["Serian"],slc:"",lc:"Serian",pr:"4",st:"sw",co:"MY",oid:"swSrian"},
  {id:"swSbu",url:["sibu"],name:["Sibu"],slc:"",lc:"Sibu",pr:"4",st:"sw",co:"MY",oid:"swSbu"},
  {id:"swSburn",url:["siburan"],name:["Siburan"],slc:"",lc:"Siburan",pr:"4",st:"sw",co:"MY",oid:"swSburn"},
  {id:"swSmnjn",url:["simunjan"],name:["Simunjan"],slc:"",lc:"Simunjan",pr:"4",st:"sw",co:"MY",oid:"swSmnjn"},
  {id:"swSg",url:["song"],name:["Song"],slc:"",lc:"Song",pr:"4",st:"sw",co:"MY",oid:"swSg"},
  {id:"swSpaoh",url:["spaoh"],name:["Spaoh"],slc:"",lc:"Spaoh",pr:"4",st:"sw",co:"MY",oid:"swSpaoh"},
  {id:"swSAman",url:["sri-aman"],name:["Sri Aman"],slc:"",lc:"Sri Aman",pr:"4",st:"sw",co:"MY",oid:"swSAman"},
  // {id:"swStpk",url:["stapok"],name:["Stapok"],slc:"",lc:"Stapok",pr:"4",st:"sw",co:"MY",oid:"swStpk"},
  // {id:"swSttg",url:["stutong"],name:["Stutong"],slc:"",lc:"Stutong",pr:"4",st:"sw",co:"MY",oid:"swSttg"},
  // {id:"swSndr",url:["sundar"],name:["Sundar"],slc:"",lc:"Sundar",pr:"4",st:"sw",co:"MY",oid:"swSndr"},
  {id:"swTtau",url:["tatau"],name:["Tatau"],slc:"",lc:"Tatau",pr:"4",st:"sw",co:"MY",oid:"swTtau"},
  // {id:"swTbdu",url:["tebedu"],name:["Tebedu"],slc:"",lc:"Tebedu",pr:"4",st:"sw",co:"MY",oid:"swTbdu"}
];
export const cityPutraJayaObj = [
  {id:"pj",url:["putrajaya"],name:["Putrajaya"],slc:"",lc:"Putrajaya",pr:"4",st:"pj",co:"MY",oid:"pj"},
];
export const cityPutraJaya = ["Putrajaya"]; //1
export const cityPutraJayaId = ["pj"]; //1

export const cityLabuanObj = [
  {id:"lb",url:["labuan"],name:["Labuan"],slc:"",lc:"Labuan",pr:"4",st:"lb",co:"MY",oid:"lb"},
];
export const cityLabuan = ["Labuan"]; //1
export const cityLabuanId = ["lb"]; //1

export const cityAll = cityMalaysia.concat(cityOnline, cityKLObj, citySelangorObj, cityPenangObj, cityJohorObj, cityNegeriSembilanObj, cityPerakObj, cityMelakaObj,
  cityKedahObj, cityPerlisObj, cityKelantanObj, cityTerengganuObj, cityPahangObj, citySarawakObj, citySabahObj, cityPutraJayaObj, cityLabuanObj);

  export const cityAllNoState = cityKLObj.concat(citySelangorObj, cityPenangObj, cityJohorObj, cityNegeriSembilanObj, cityPerakObj, cityMelakaObj,
    cityKedahObj, cityPerlisObj, cityKelantanObj, cityTerengganuObj, cityPahangObj, citySarawakObj, citySabahObj, cityPutraJayaObj, cityLabuanObj);

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

  for (let i = 0; i < cityMalaysia.length; i++){

    let area = cityMalaysia[i]

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

