export interface SteeringMember {
  name: string
  nameJa: string
  committees: string[]
  affiliation: string
  jobTitle: string
  profile: string
  photo: string
}

export const steeringCommitteeMembers: SteeringMember[] = [
  {
    name: 'Toshikazu SETO',
    nameJa: '瀬戸 寿一',
    committees: ['Scientific Committee'],
    affiliation: 'Komazawa University / TUDelft',
    jobTitle: 'Associate Professor',
    profile:
      'Toshi is a social geographer and geospatial information scientist at Komazawa University, Japan and visiting researcher at the 3D geoinformation research group at TU Delft. He is a member of OSGeo.JP, OpenStreetMap Foundation Japan, and an OSGeo foundation charter member. In recent years, he has been engaged in research on participatory GIS and civic-tech open data.',
    photo: 'LOC_ToshikazuSeto.webp',
  },
  {
    name: 'Yuichiro Nishimura',
    nameJa: '西村 雄一郎',
    committees: ['Scientific Committee'],
    affiliation: "Nara Women's University / OSGeo.JP",
    jobTitle: 'Professor',
    profile:
      "Yuichiro Nishimura is a professor at Nara Women's University. His original research focuses on time-geographical studies; recently he has been deeply involved in studies about GIS and society in Japan. He has been active in FOSS4G activities in Japan and has participated in several global conferences since 2011. He was elected as an OSGeo Charter Member in 2015, and has organised several global SotM events in Japan, IGU Kyoto Regional Conference 2013, and ICC Tokyo 2019.",
    photo: 'LOC_YuichiroNishimura.webp',
  },
  {
    name: 'Keiichi Katsube',
    nameJa: '勝部 圭一',
    committees: ['Sponsorship / Partnership'],
    affiliation: 'OSGeo Japan Chapter / AERO TOYOTA CORPORATION',
    jobTitle: 'Chief Secretary of OSGeo.JP',
    profile:
      'Chief Secretary of OSGeo.JP. Administrator of the QGIS User Group Japan (Facebook Group).',
    photo: 'LOC_KeiichiKatsube.webp',
  },
  {
    name: 'Taro Matsuzawa',
    nameJa: '松澤 太郎',
    committees: ['PR / Communication'],
    affiliation: 'Geolonia / OSGeo.JP / OpenStreetMap Foundation Japan',
    jobTitle: 'GIS Engineer',
    profile: 'GIS engineer from Geolonia, contributor of UNOpenGIS/7.',
    photo: 'LOC_TaroMatsuzawa.webp',
  },
  {
    name: 'Jin Igarashi',
    nameJa: '五十嵐 仁',
    committees: ['PR / Communication', 'Participant / Delegate'],
    affiliation: 'FRACTA Inc.',
    jobTitle: 'Software Engineer',
    profile:
      'Jin Igarashi is a senior software developer working on geospatial for many years. Since he was involved in water projects as a GIS developer in Eastern Africa in 2014, he has developed and maintained several open source software tools (called GIS for water) supporting water utilities in Africa. He is passionate about driving innovation in the WASH field due to his background in information technologies and WASH experience.',
    photo: 'LOC_JinIgarashi.webp',
  },
  {
    name: 'Hinako Iseki',
    nameJa: '井関 日向子',
    committees: ['Program / Contents'],
    affiliation: 'Eukarya / OSGeo.JP',
    jobTitle: 'Engineer / Board Member',
    profile: 'Software engineer at Eukarya Inc. Board member of OSGeo Japan.',
    photo: 'LOC_HinakoIseki.webp',
  },
  {
    name: 'Haruki Inoue',
    nameJa: '井上 晴稀',
    committees: ['Operations / Venue'],
    affiliation: 'Bitkey Inc. / OSGeo.JP',
    jobTitle: 'iOS App Engineer / Board Member',
    profile:
      "I'm involved in developing iOS apps for B2B office solutions. In my spare time and as a side business, I work on development projects using GIS. I'm also active as a board member of OSGeo Japan.",
    photo: 'LOC_HarukiInoue.webp',
  },
  {
    name: 'Eita Horishita',
    nameJa: '堀下 栄太',
    committees: ['PR / Communication'],
    affiliation: 'VALUENEX Japan / Code for Kashiwa',
    jobTitle: 'Specialist in technical research for STI strategy',
    profile:
      'Specialist in technical research for Science, Technology and Innovation (STI) strategy, with applied expertise in GIS and urban environmental management.',
    photo: 'LOC_EitaHorishita.webp',
  },
  {
    name: "Zenichi TAKEUCHI",
    nameJa: "竹内善一",
    committees: ["Finance / Legal"],
    affiliation: "Laboratory of Geographic Information Science, Department of Agricultural Science, Graduate School of Sustainability Science, Tottori University",
    jobTitle: "Master's student",
    profile: "Zenichi Takeuchi is a Master’s student at Tottori University, specializing in Geographic Information Science (GIS). His research involves the classification of abandoned farmland and evaluating its potential for forest conversion. His work utilizes spatial analysis to support sustainable land management in rural areas.",
    photo: "LOC_Zenichi_Takeuchi.webp",
  },
]
