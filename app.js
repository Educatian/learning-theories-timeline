const theories = [
  {
    id: "behaviorism",
    name: "Behaviorism",
    period: "1890s-1950s",
    color: "#c94c3b",
    lens: "Learning as observable behavior shaped by stimuli, consequences, and reinforcement."
  },
  {
    id: "cognitivism",
    name: "Cognitivism",
    period: "1950s-1970s",
    color: "#316f9f",
    lens: "Learning as information processing, memory organization, and mental representation."
  },
  {
    id: "constructivism",
    name: "Constructivism",
    period: "1930s-1980s",
    color: "#4d885d",
    lens: "Learning as active meaning making through experience, culture, and social mediation."
  },
  {
    id: "embodied-situated",
    name: "Embodied / Situated Cognition",
    period: "1980s-2010s",
    color: "#5f7658",
    lens: "Learning as activity distributed across body, tools, places, culture, practice, and material environments."
  },
  {
    id: "learning-sciences",
    name: "Learning Sciences",
    period: "1990s-2020s",
    color: "#526f8f",
    lens: "Learning as interdisciplinary study of cognition, culture, tools, design, technology, and real learning environments."
  },
  {
    id: "constructionism",
    name: "Constructionism",
    period: "1960s-1990s",
    color: "#c99c2f",
    lens: "Learning as building public artifacts that make thinking visible and revisable."
  },
  {
    id: "games-immersive",
    name: "Games / VR / Immersive Learning",
    period: "1970s-2020s",
    color: "#8f5f8c",
    lens: "Learning as motivated, rule-based, embodied, simulated, and immersive participation in designed worlds."
  },
  {
    id: "instructional-design",
    name: "Instructional Design Models",
    period: "2000s-2010s",
    color: "#b34d6a",
    lens: "Learning environments as deliberately designed systems of tasks, supports, technologies, access, feedback, and transfer."
  },
  {
    id: "edtech-islt",
    name: "AECT / ISLT Field",
    period: "1923-2026",
    color: "#6f6257",
    lens: "The professional field of visual instruction, audiovisual communication, educational technology, instructional systems, and learning technologies."
  },
  {
    id: "social-cognitive-agency",
    name: "Social Cognitive & Agency",
    period: "1970s-2026",
    color: "#7853a6",
    lens: "Learning as agency, self-efficacy, self-regulation, reciprocal person-environment action, and durable capability under support."
  },
  {
    id: "egri",
    name: "EGRI / EGRA Cycle",
    period: "1980s-2020s",
    color: "#218a8b",
    lens: "A teaching cycle for experience or encounter, generalization, reinforcement, and integration or application."
  }
];

const researchers = {
  thorndike: {
    name: "Edward L. Thorndike",
    initials: "ET",
    color: "#c94c3b",
    photo: "https://commons.wikimedia.org/wiki/Special:FilePath/PSM%20V80%20D211%20Edward%20Lee%20Thorndike.png",
    position: "50% 24%",
    scale: 1.18
  },
  pavlov: {
    name: "Ivan Pavlov",
    initials: "IP",
    color: "#c94c3b",
    photo: "https://commons.wikimedia.org/wiki/Special:FilePath/Ivan%20Pavlov%20NLM.jpg",
    position: "50% 26%",
    scale: 1.38
  },
  watson: {
    name: "John B. Watson",
    initials: "JW",
    color: "#c94c3b",
    photo: "https://commons.wikimedia.org/wiki/Special:FilePath/John%20Broadus%20Watson.JPG",
    position: "50% 24%",
    scale: 1.2
  },
  skinner: {
    name: "B. F. Skinner",
    initials: "BS",
    color: "#c94c3b",
    photo: "https://commons.wikimedia.org/wiki/Special:FilePath/B.F._Skinner_at_Harvard_circa_1950_(cropped).jpg",
    position: "50% 24%",
    scale: 1.23
  },
  miller: {
    name: "George A. Miller",
    initials: "GM",
    color: "#316f9f",
    photo: "https://digitalcommons.rockefeller.edu/faculty-members/1118/preview.jpg",
    position: "64% 0%",
    scale: 1.05
  },
  bruner: {
    name: "Jerome Bruner",
    initials: "JB",
    color: "#316f9f",
    photo: "https://commons.wikimedia.org/wiki/Special:FilePath/Jerome_Bruner_1936.png",
    position: "50% 22%",
    scale: 1.24
  },
  ausubel: {
    name: "David Ausubel",
    initials: "DA",
    color: "#316f9f",
    photo: "https://www.biografiasyvidas.com/biografia/a/fotos/ausubel.jpg",
    position: "50% 28%",
    scale: 1.16
  },
  tolman: {
    name: "Edward C. Tolman",
    initials: "ET",
    color: "#316f9f",
    photo: "https://commons.wikimedia.org/wiki/Special:FilePath/Tolman%2C%20E.C.%20portrait.jpg",
    position: "50% 24%",
    scale: 1.12
  },
  sweller: {
    name: "John Sweller",
    initials: "JS",
    color: "#316f9f",
    photo: "https://www.unsw.edu.au/content/dam/profile-photo/John-Sweller.jpg",
    position: "50% 24%",
    scale: 1.1
  },
  piaget: {
    name: "Jean Piaget",
    initials: "JP",
    color: "#4d885d",
    photo: "https://commons.wikimedia.org/wiki/Special:FilePath/Jean%20Piaget.jpg",
    position: "44% 38%",
    scale: 1.85
  },
  vygotsky: {
    name: "Lev Vygotsky",
    initials: "LV",
    color: "#4d885d",
    photo: "https://commons.wikimedia.org/wiki/Special:FilePath/Lev%20Vygotsky.1923.png",
    position: "50% 20%",
    scale: 1.26
  },
  dewey: {
    name: "John Dewey",
    initials: "JD",
    color: "#4d885d",
    photo: "https://commons.wikimedia.org/wiki/Special:FilePath/John%20Dewey%20cph.3a51565.jpg",
    position: "50% 27%",
    scale: 1.14
  },
  wenger: {
    name: "Etienne Wenger",
    initials: "EW",
    color: "#4d885d",
    photo: "https://www.wenger-trayner.com/wp-content/uploads/2021/06/22-10-08-Etienne-round-picture-small.jpg",
    position: "50% 30%",
    scale: 1.12
  },
  suchman: {
    name: "Lucy Suchman",
    initials: "LS",
    color: "#5f7658",
    photo: "https://commons.wikimedia.org/wiki/Special:FilePath/Lucy%20Suchman%20%283349410560%29.jpg",
    position: "50% 28%",
    scale: 1.18
  },
  browncollins: {
    name: "Brown, Collins, Duguid",
    initials: "BC",
    color: "#5f7658",
    photo: "",
    position: "50% 30%",
    scale: 1.12
  },
  varela: {
    name: "Francisco Varela",
    initials: "FV",
    color: "#5f7658",
    photo: "https://commons.wikimedia.org/wiki/Special:FilePath/Francisco%20Varela%20%28cropped%29.jpg",
    position: "50% 28%",
    scale: 1.12
  },
  hutchins: {
    name: "Edwin Hutchins",
    initials: "EH",
    color: "#5f7658",
    photo: "https://profiles.ucsd.edu/edwin.hutchins/photo",
    position: "50% 24%",
    scale: 1.12
  },
  clark: {
    name: "Andy Clark",
    initials: "AC",
    color: "#5f7658",
    photo: "https://profiles.sussex.ac.uk/p493-andy-clark/thumbnail",
    position: "50% 24%",
    scale: 1.1
  },
  glenberg: {
    name: "Arthur Glenberg",
    initials: "AG",
    color: "#5f7658",
    photo: "",
    position: "50% 30%",
    scale: 1.12
  },
  brownann: {
    name: "Ann L. Brown",
    initials: "AB",
    color: "#526f8f",
    photo: "",
    position: "50% 30%",
    scale: 1.12
  },
  bransford: {
    name: "John D. Bransford",
    initials: "JB",
    color: "#526f8f",
    photo: "https://wpvip.edutopia.org/wp-content/uploads/2022/10/fea_assesssb_forgetthefactsbransford.jpg?quality=85&w=300",
    position: "50% 24%",
    scale: 1.1
  },
  nsf: {
    name: "NSF Science of Learning",
    initials: "NS",
    color: "#526f8f",
    photo: "https://commons.wikimedia.org/wiki/Special:FilePath/NSF_logo.svg",
    position: "50% 50%",
    scale: 0.86,
    fit: "contain",
    filter: "none"
  },
  sawyer: {
    name: "R. Keith Sawyer",
    initials: "KS",
    color: "#526f8f",
    photo: "https://www.gse.upenn.edu/sites/default/files/styles/square_xxsml/public/image/2024/09/sawyer_keith_affiliated.jpg.webp?itok=G2eHWZff",
    position: "50% 23%",
    scale: 1.08
  },
  papert: {
    name: "Seymour Papert",
    initials: "SP",
    color: "#c99c2f",
    photo: "https://commons.wikimedia.org/wiki/Special:FilePath/Seymour_Papert.jpg",
    position: "50% 18%",
    scale: 1.18
  },
  harel: {
    name: "Idit Harel",
    initials: "IH",
    color: "#c99c2f",
    photo: "https://commons.wikimedia.org/wiki/Special:FilePath/Idit_Harel_2015.JPG",
    position: "50% 38%",
    scale: 1.1
  },
  resnick: {
    name: "Mitchel Resnick",
    initials: "MR",
    color: "#c99c2f",
    photo: "https://commons.wikimedia.org/wiki/Special:FilePath/Mitchel%20Resnick.jpg",
    position: "50% 36%",
    scale: 1.42
  },
  deciRyan: {
    name: "Deci & Ryan",
    initials: "DR",
    color: "#8f5f8c",
    photo: "https://www.rochester.edu/newscenter/wp-content/uploads/2026/02/inline-2010-05-25_RichardRyan_and_EdwardDeci_201.jpg",
    position: "50% 28%",
    scale: 1.22
  },
  csikszentmihalyi: {
    name: "Mihaly Csikszentmihalyi",
    initials: "MC",
    color: "#8f5f8c",
    photo: "https://commons.wikimedia.org/wiki/Special:FilePath/Mihaly%20Csikszentmihalyi%20%28headshot%29.jpg",
    position: "50% 32%",
    scale: 1.14
  },
  malone: {
    name: "Thomas W. Malone",
    initials: "TM",
    color: "#8f5f8c",
    photo: "https://commons.wikimedia.org/wiki/Special:FilePath/Thomas%20W%20Malone%202008.jpg",
    position: "50% 28%",
    scale: 1.22
  },
  prensky: {
    name: "Marc Prensky",
    initials: "MP",
    color: "#8f5f8c",
    photo: "https://commons.wikimedia.org/wiki/Special:FilePath/Marc%20Prensky%20%288428478678%29.jpg",
    position: "50% 24%",
    scale: 1.24
  },
  gee: {
    name: "James Paul Gee",
    initials: "JG",
    color: "#8f5f8c",
    photo: "https://commons.wikimedia.org/wiki/Special:FilePath/James%20Paul%20Gee.jpg",
    position: "50% 26%",
    scale: 1.22
  },
  squire: {
    name: "Kurt Squire",
    initials: "KS",
    color: "#8f5f8c",
    photo: "https://ics.uci.edu/wp-content/uploads/2021/11/kurt-squire-250x300.jpg",
    position: "50% 23%",
    scale: 1.08
  },
  dede: {
    name: "Chris Dede",
    initials: "CD",
    color: "#8f5f8c",
    photo: "https://www.gse.harvard.edu/sites/default/files/styles/1x1__focal_point_scale_and_crop__lg/public/faculty/images/christopher-dede-311.jpg?h=462ffc91&itok=sR6zxVAK",
    position: "50% 26%",
    scale: 1.18
  },
  cummingsBailenson: {
    name: "Cummings & Bailenson",
    initials: "CB",
    color: "#8f5f8c",
    photo: "https://comm.stanford.edu/sites/g/files/sbiybj22231/files/styles/medium_square/public/media/image/bailenson_0.png?h=90cbfd2a&itok=fKrxHykF",
    position: "50% 24%",
    scale: 1.08
  },
  merchant: {
    name: "Zahira Merchant",
    initials: "ZM",
    color: "#8f5f8c",
    photo: "https://gcoe.sfsu.edu/sites/default/files/styles/sf_state_250x250/public/images/zahira_merchant_bio_250.jpg?h=038a9462&itok=36T-JPy5",
    position: "50% 24%",
    scale: 1.08
  },
  radianti: {
    name: "Jaziar Radianti",
    initials: "JR",
    color: "#8f5f8c",
    photo: "https://image.sciencenorway.no/2460685.webp?croph=84.95&cropw=99.78&format=jpg&height=1124&imageId=2460685&width=960&x=0.00&y=9.46",
    position: "50% 27%",
    scale: 1.14
  },
  makransky: {
    name: "Guido Makransky",
    initials: "GM",
    color: "#8f5f8c",
    photo: "https://psychology.ku.dk/staff/academic_staff/guido_makransky_1100x600.jpg",
    position: "50% 24%",
    scale: 1.14
  },
  bandura: {
    name: "Albert Bandura",
    initials: "AB",
    color: "#7853a6",
    photo: "https://commons.wikimedia.org/wiki/Special:FilePath/Albert_Bandura_Psychologist_(headshot).jpg",
    position: "50% 28%",
    scale: 1.18
  },
  code: {
    name: "Jillianne Code",
    initials: "JC",
    color: "#7853a6",
    photo: "https://news.ubc.ca/wp-content/uploads/2024/06/jillianne-code-head-shot.jpeg",
    position: "50% 32%",
    scale: 1.08
  },
  yan: {
    name: "Lixiang Yan",
    initials: "LY",
    color: "#7853a6",
    photo: "https://se.tsinghua.edu.cn/__local/9/B2/5C/CA92397E9F0BA4249028F81CBC4_DA4A3616_FD99.jpg",
    position: "50% 32%",
    scale: 1.08
  },
  gasevic: {
    name: "Dragan Gasevic",
    initials: "DG",
    color: "#7853a6",
    photo: "https://commons.wikimedia.org/wiki/Special:FilePath/Dragan_Gasevic_asks_questions_about_learning_analytics_(31193792351).jpg",
    position: "52% 32%",
    scale: 1.55
  },
  aiedCommunity: {
    name: "AIED Community",
    initials: "AI",
    color: "#316f9f",
    photo: "",
    position: "50% 30%",
    scale: 1.12
  },
  edmCommunity: {
    name: "EDM Community",
    initials: "ED",
    color: "#526f8f",
    photo: "https://educationaldatamining.org/EDM_ORG/wp-content/uploads/2017/09/edm.png",
    position: "50% 50%",
    scale: 0.82,
    fit: "contain",
    filter: "none"
  },
  baker: {
    name: "Ryan S. Baker",
    initials: "RB",
    color: "#526f8f",
    photo: "https://www.seas.upenn.edu/wp-content/uploads/2025/09/Ryan-Baker.jpg",
    position: "50% 24%",
    scale: 1.1
  },
  solar: {
    name: "SoLAR",
    initials: "LA",
    color: "#526f8f",
    photo: "https://www.solaresearch.org/wp-content/uploads/2019/04/logo-soLAR.png",
    position: "50% 50%",
    scale: 0.84,
    fit: "contain",
    filter: "none"
  },
  shaffer: {
    name: "David W. Shaffer",
    initials: "DS",
    color: "#526f8f",
    photo: "https://wcer.wisc.edu/images/staff/_galleryPhoto/Shaffer-DW.jpg",
    position: "50% 24%",
    scale: 1.1
  },
  isqe: {
    name: "ISQE",
    initials: "QE",
    color: "#526f8f",
    photo: "https://www.qesoc.org/images/qesoc/ISQE-logo-icon.png",
    position: "50% 50%",
    scale: 0.86,
    fit: "contain",
    filter: "none"
  },
  zimmerman: {
    name: "Barry J. Zimmerman",
    initials: "BZ",
    color: "#7853a6",
    photo: "https://www.gc.cuny.edu/sites/default/files/styles/395x225/public/2025-03/Barry_Zimmerman_2560px_1440px.jpg?h=a92f03cd&itok=Oj5_Nbat",
    position: "50% 25%",
    scale: 1.14
  },
  bitzer: {
    name: "Donald L. Bitzer",
    initials: "DB",
    color: "#8a6750",
    photo: "https://engr.ncsu.edu/wp-content/uploads/sites/412/2018/04/bitzer-2013.jpg",
    position: "50% 28%",
    scale: 1.25
  },
  carbonell: {
    name: "Jaime Carbonell",
    initials: "JC",
    color: "#8a6750",
    photo: "https://www.cs.cmu.edu/~jgc/Image/jaimepic.jpg",
    position: "50% 28%",
    scale: 1.12
  },
  jsbrown: {
    name: "John Seely Brown",
    initials: "JB",
    color: "#8a6750",
    photo: "https://commons.wikimedia.org/wiki/Special:FilePath/John%20Seely%20Brown%202019.jpg",
    position: "50% 25%",
    scale: 1.1
  },
  schank: {
    name: "Roger Schank",
    initials: "RS",
    color: "#8a6750",
    photo: "https://www.rogerschank.com/lib/images/roger-schank-suit.jpg",
    position: "50% 24%",
    scale: 1.12
  },
  anderson: {
    name: "John R. Anderson",
    initials: "JA",
    color: "#8a6750",
    photo: "https://www.cmu.edu/dietrich/psychology/images/directory/john-anderson-800x800-min.jpg",
    position: "50% 26%",
    scale: 1.12
  },
  graesser: {
    name: "Arthur Graesser",
    initials: "AG",
    color: "#8a6750",
    photo: "https://www.memphis.edu/psychology/people/faculty/images/art_graesser.jpg",
    position: "50% 27%",
    scale: 1.12
  },
  clancey: {
    name: "William J. Clancey",
    initials: "WC",
    color: "#8a6750",
    photo: "https://billclancey.name/uploads/1/0/8/7/108751403/editor/bill-clancey-ihmc-january-2014.jpg?1499613265",
    position: "50% 28%",
    scale: 1.12
  },
  corbett: {
    name: "Albert T. Corbett",
    initials: "AC",
    color: "#8a6750",
    photo: "https://www.hcii.cmu.edu/sites/default/files/styles/person_portrait_image/public/migrated_files/Albert_Corbett2.jpg.webp?h=ab703daf&itok=UgOCm4F7",
    position: "50% 28%",
    scale: 1.1
  },
  vanlehn: {
    name: "Kurt VanLehn",
    initials: "KV",
    color: "#8a6750",
    photo: "https://webapp4.asu.edu/photo-ws/directory_photo/kvanlehn?size=medium&blankImage2=1",
    position: "50% 30%",
    scale: 1.1
  },
  aect: {
    name: "AECT",
    initials: "AE",
    color: "#6f6257",
    photo: "https://higherlogicdownload.s3.amazonaws.com/AECT/48d18aca-4de7-437f-9023-69f2faa948d8/UploadedImages/AECT.png",
    position: "50% 50%",
    scale: 0.86,
    fit: "contain",
    filter: "none"
  },
  finn: {
    name: "James D. Finn",
    initials: "JF",
    color: "#6f6257",
    photo: "",
    position: "50% 30%",
    scale: 1.12
  },
  seels: {
    name: "Barbara Seels",
    initials: "BS",
    color: "#6f6257",
    photo: "",
    position: "50% 30%",
    scale: 1.12
  },
  garrison: {
    name: "D. Randy Garrison",
    initials: "RG",
    color: "#b34d6a",
    photo: "https://coi.athabascau.ca/wp-content/uploads/2014/07/rgarrison.jpg",
    position: "50% 26%",
    scale: 1.12
  },
  merrill: {
    name: "M. David Merrill",
    initials: "MM",
    color: "#b34d6a",
    photo: "https://jadl.act.nato.int/NTTC/assets/img/merrillsq.jpg",
    position: "50% 25%",
    scale: 1.12
  },
  siemens: {
    name: "George Siemens",
    initials: "GS",
    color: "#b34d6a",
    photo: "https://cdn.prod.web.uta.edu/-/media/project/website/news/imported/george-siemens1.jpeg?revision=2158213d-aa49-4d00-b4c6-978a132b485b",
    position: "50% 30%",
    scale: 1.18
  },
  mishra: {
    name: "Punya Mishra",
    initials: "PM",
    color: "#b34d6a",
    photo: "https://punyamishra.com/wp-content/uploads/2026/01/PunyaMishra-profilepic1.jpg",
    position: "50% 28%",
    scale: 1.1
  },
  merrienboer: {
    name: "Jeroen van Merrienboer",
    initials: "JM",
    color: "#b34d6a",
    photo: "https://www.kirschnered.nl/wp-content/uploads/2023/11/Jeroen.jpeg",
    position: "50% 26%",
    scale: 1.12
  },
  rose: {
    name: "David H. Rose",
    initials: "DR",
    color: "#b34d6a",
    photo: "https://www.cast.org/wp-content/uploads/2024/12/david-rose.png",
    position: "50% 28%",
    scale: 1.12
  },
  reigeluth: {
    name: "Charles M. Reigeluth",
    initials: "CR",
    color: "#b34d6a",
    photo: "https://static.wixstatic.com/media/4d4aa4_ed539d64654f72fe48ae20505dad942f.png/v1/fill/w_160%2Ch_189%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/4d4aa4_ed539d64654f72fe48ae20505dad942f.png",
    position: "50% 28%",
    scale: 1.12
  },
  gagne: {
    name: "Robert M. Gagne",
    initials: "RG",
    color: "#b34d6a",
    photo: "",
    position: "50% 30%",
    scale: 1.12
  },
  mayer: {
    name: "Richard E. Mayer",
    initials: "RM",
    color: "#b34d6a",
    photo: "https://psych.ucsb.edu/sites/default/files/styles/max_325x325/public/images/people/Faculty%20-%20Rich%20Mayer.jpg?itok=fEFSQqtb",
    position: "50% 26%",
    scale: 1.08
  },
  richards: {
    name: "Jack C. Richards",
    initials: "JR",
    color: "#218a8b",
    photo: "https://commons.wikimedia.org/wiki/Special:FilePath/Jack_Richards.jpg",
    position: "50% 34%",
    scale: 1.08
  }
};

const milestones = [
  {
    id: "thorndike-1898",
    theory: "behaviorism",
    year: 1898,
    title: "Law of effect",
    researcher: "thorndike",
    study: "Animal Intelligence and puzzle-box learning.",
    summary: "Thorndike's puzzle-box experiments made consequences central to learning, creating a direct root for later reinforcement theory and behaviorist instruction.",
    source: "https://www.britannica.com/science/Thorndikes-law-of-effect"
  },
  {
    id: "pavlov-1897",
    theory: "behaviorism",
    year: 1897,
    title: "Conditioned reflexes",
    researcher: "pavlov",
    study: "Work on digestive reflexes later framed classical conditioning.",
    summary: "Pavlov's laboratory work established a model for learning as association between stimulus and response, shaping later behaviorist education and training models.",
    source: "https://www.nobelprize.org/prizes/medicine/1904/pavlov/biographical/"
  },
  {
    id: "watson-1913",
    theory: "behaviorism",
    year: 1913,
    title: "Behaviorist manifesto",
    researcher: "watson",
    study: "Psychology as the Behaviorist Views It.",
    summary: "Watson argued that psychology should focus on observable behavior. The move made learning measurable and placed environment at the center of explanation.",
    source: "https://psychclassics.yorku.ca/Watson/views.htm"
  },
  {
    id: "skinner-1938",
    theory: "behaviorism",
    year: 1938,
    title: "Operant behavior",
    researcher: "skinner",
    study: "The Behavior of Organisms.",
    summary: "Skinner separated respondent and operant behavior, giving education a language for reinforcement schedules, shaping, feedback, and programmed instruction.",
    source: "https://www.bfskinner.org/product/the-behavior-of-organisms/"
  },
  {
    id: "skinner-1954",
    theory: "behaviorism",
    year: 1954,
    title: "Teaching machines",
    researcher: "skinner",
    study: "The Science of Learning and the Art of Teaching.",
    summary: "Skinner translated reinforcement principles into a design problem: short steps, immediate feedback, and adaptive practice before computers made it easy.",
    source: "https://psycnet.apa.org/record/1955-02959-001"
  },
  {
    id: "miller-1956",
    theory: "cognitivism",
    year: 1956,
    title: "Memory capacity",
    researcher: "miller",
    study: "The Magical Number Seven, Plus or Minus Two.",
    summary: "Miller made mental processing experimentally visible, turning attention toward memory limits, chunking, and how learners organize information.",
    source: "https://pubmed.ncbi.nlm.nih.gov/13310704/"
  },
  {
    id: "tolman-1948",
    theory: "cognitivism",
    year: 1948,
    title: "Cognitive maps",
    researcher: "tolman",
    study: "Cognitive Maps in Rats and Men.",
    summary: "Tolman's cognitive maps showed that behavior could imply internal spatial representations, helping pry open the black box before the cognitive revolution.",
    source: "https://psycnet.apa.org/record/1949-02463-001"
  },
  {
    id: "bruner-1960",
    theory: "cognitivism",
    year: 1960,
    title: "Spiral curriculum",
    researcher: "bruner",
    study: "The Process of Education.",
    summary: "Bruner reframed curriculum around structure, discovery, and revisiting core ideas at increasing levels of sophistication.",
    source: "https://www.britannica.com/topic/The-Process-of-Education"
  },
  {
    id: "atkinson-1968",
    theory: "cognitivism",
    year: 1968,
    title: "Memory system model",
    researcher: "miller",
    study: "Human memory: A proposed system and its control processes.",
    summary: "The multi-store memory model helped make cognition diagrammable: sensory input, short-term storage, long-term storage, and control processes.",
    source: "https://psycnet.apa.org/record/1968-35049-001"
  },
  {
    id: "ausubel-1968",
    theory: "cognitivism",
    year: 1968,
    title: "Meaningful learning",
    researcher: "ausubel",
    study: "Educational Psychology: A Cognitive View.",
    summary: "Ausubel emphasized prior knowledge and advance organizers, a practical bridge from cognitive theory to lesson design.",
    source: "https://www.britannica.com/topic/Educational-Psychology-a-Cognitive-View"
  },
  {
    id: "sweller-1988",
    theory: "cognitivism",
    year: 1988,
    title: "Cognitive load theory",
    researcher: "sweller",
    study: "Cognitive Load During Problem Solving: Effects on Learning.",
    summary: "Sweller's work turned working-memory limits into a design principle: problem solving can overload novices when it does not support schema acquisition.",
    source: "https://www.sciencedirect.com/science/article/pii/0364021388900237"
  },
  {
    id: "piaget-1952",
    theory: "constructivism",
    year: 1952,
    title: "Developmental construction",
    researcher: "piaget",
    study: "The Origins of Intelligence in Children.",
    summary: "Piaget described learning as active construction through assimilation, accommodation, and developmental reorganization.",
    source: "https://openlibrary.org/books/OL6116241M/The_origins_of_intelligence_in_children"
  },
  {
    id: "dewey-1938",
    theory: "constructivism",
    year: 1938,
    title: "Experience and education",
    researcher: "dewey",
    study: "Experience and Education.",
    summary: "Dewey made experience, inquiry, continuity, and interaction foundational for learning design, becoming an important philosophical root for constructivist pedagogy.",
    source: "https://archive.org/details/experienceeducat00dewe"
  },
  {
    id: "vygotsky-1978",
    theory: "constructivism",
    year: 1978,
    title: "Social mediation",
    researcher: "vygotsky",
    study: "Mind in Society.",
    summary: "Vygotsky put culture, language, and the zone of proximal development at the center of learning with others.",
    source: "https://openlibrary.org/books/OL7693072M/Mind_in_Society"
  },
  {
    id: "von-glasersfeld-1984",
    theory: "constructivism",
    year: 1984,
    title: "Radical constructivism",
    researcher: "piaget",
    study: "An Introduction to Radical Constructivism.",
    summary: "Radical constructivism sharpened the epistemological claim: learners organize viable knowledge rather than copy the world directly.",
    source: "https://www.univie.ac.at/constructivism/EvG/papers/070.pdf"
  },
  {
    id: "lave-wenger-1991",
    theory: "constructivism",
    year: 1991,
    title: "Situated learning",
    researcher: "wenger",
    study: "Situated Learning: Legitimate Peripheral Participation.",
    summary: "Lave and Wenger reframed learning as participation in communities of practice, shifting attention from individual acquisition to social becoming.",
    source: "https://www.ischool.berkeley.edu/research/publications/1991/situated-learning-legitimate-peripheral-participation"
  },
  {
    id: "suchman-1987",
    theory: "embodied-situated",
    year: 1987,
    title: "Situated action",
    researcher: "suchman",
    study: "Plans and Situated Actions.",
    summary: "Suchman challenged plan-first models by showing that action is improvised within material and social situations rather than simply executed from internal plans.",
    source: "https://www.cambridge.org/core/books/plans-and-situated-actions/006728559D56EB8900A9B1C4C00C5380"
  },
  {
    id: "brown-collins-duguid-1989",
    theory: "embodied-situated",
    year: 1989,
    title: "Situated cognition",
    researcher: "browncollins",
    study: "Situated Cognition and the Culture of Learning.",
    summary: "Brown, Collins, and Duguid argued that knowledge is inseparable from activity, culture, and the situations in which it is learned and used.",
    source: "https://doi.org/10.3102/0013189X018001032"
  },
  {
    id: "embodied-mind-1991",
    theory: "embodied-situated",
    year: 1991,
    title: "The Embodied Mind",
    researcher: "varela",
    study: "The Embodied Mind: Cognitive Science and Human Experience.",
    summary: "Varela, Thompson, and Rosch framed cognition as embodied action, linking cognitive science, phenomenology, and enactive views of mind.",
    source: "https://mitpress.mit.edu/9780262720212/the-embodied-mind/"
  },
  {
    id: "hutchins-1995",
    theory: "embodied-situated",
    year: 1995,
    title: "Distributed cognition",
    researcher: "hutchins",
    study: "Cognition in the Wild.",
    summary: "Hutchins showed cognition distributed across people, tools, representations, and environments, making learning a system-level phenomenon.",
    source: "https://mitpress.mit.edu/9780262581462/cognition-in-the-wild/"
  },
  {
    id: "clark-1997",
    theory: "embodied-situated",
    year: 1997,
    title: "Embedded cognition",
    researcher: "clark",
    study: "Being There: Putting Brain, Body, and World Together Again.",
    summary: "Clark framed cognition as coupled with bodies, artifacts, and world-involving action loops, sharpening embedded and extended approaches to mind.",
    source: "https://mitpress.mit.edu/9780262531566/being-there/"
  },
  {
    id: "glenberg-2008",
    theory: "embodied-situated",
    year: 2008,
    title: "Embodiment for education",
    researcher: "glenberg",
    study: "Embodiment for Education.",
    summary: "Glenberg translated embodied cognition into educational design, emphasizing action, perception, simulation, and physical interaction as supports for understanding.",
    source: "https://doi.org/10.1002/acp.1408"
  },
  {
    id: "learning-sciences-1991",
    theory: "learning-sciences",
    year: 1991,
    title: "Learning sciences emerges",
    researcher: "brownann",
    study: "Journal of the Learning Sciences and early ICLS community formation.",
    summary: "The learning sciences formed as an interdisciplinary community studying cognition, culture, technology, design, and real learning environments rather than a single ID curriculum.",
    source: "https://www.tandfonline.com/toc/hlns20/1/1"
  },
  {
    id: "design-experiments-1992",
    theory: "learning-sciences",
    year: 1992,
    title: "Design experiments",
    researcher: "brownann",
    study: "Design Experiments: Theoretical and Methodological Challenges.",
    summary: "Ann Brown helped define classroom design experiments as a way to build theory while studying learning in complex real environments.",
    source: "https://www.jstor.org/stable/1167102"
  },
  {
    id: "how-people-learn-1999",
    theory: "learning-sciences",
    year: 1999,
    title: "How People Learn",
    researcher: "bransford",
    study: "How People Learn: Brain, Mind, Experience, and School, edited by Bransford, Brown, and Cocking.",
    summary: "The National Research Council synthesis made the science of learning broadly visible through prior knowledge, deep understanding, metacognition, and learning environments.",
    source: "https://nap.nationalacademies.org/catalog/6160/how-people-learn-brain-mind-experience-and-school"
  },
  {
    id: "science-learning-centers-2004",
    theory: "learning-sciences",
    year: 2004,
    title: "Science of Learning Centers",
    researcher: "nsf",
    study: "NSF Science of Learning Centers program.",
    summary: "The NSF centers gave the science of learning a visible interdisciplinary infrastructure across cognitive science, neuroscience, education, technology, and social context.",
    source: "https://new.nsf.gov/funding/opportunities/science-learning-centers-slc"
  },
  {
    id: "handbook-learning-sciences-2006",
    theory: "learning-sciences",
    year: 2006,
    title: "Learning sciences handbook",
    researcher: "sawyer",
    study: "The Cambridge Handbook of the Learning Sciences.",
    summary: "Sawyer's handbook consolidated learning sciences as an interdisciplinary field spanning cognition, sociocultural theory, design, technology, and classroom research.",
    source: "https://www.cambridge.org/core/books/cambridge-handbook-of-the-learning-sciences/4D5C3A3443A08E1F0D057E646F24B188"
  },
  {
    id: "logo-1967",
    theory: "constructionism",
    year: 1967,
    title: "Logo as microworld",
    researcher: "papert",
    study: "Logo programming language and turtle geometry.",
    summary: "Logo gave learners a computational material for mathematical thinking, making debugging and building part of learning.",
    source: "https://el.media.mit.edu/logo-foundation/what_is_logo/logo_programming.html"
  },
  {
    id: "papert-1980",
    theory: "constructionism",
    year: 1980,
    title: "Mindstorms",
    researcher: "papert",
    study: "Mindstorms: Children, Computers, and Powerful Ideas.",
    summary: "Papert extended constructivism into a maker-centered theory: learners build knowledge especially well when they build sharable artifacts.",
    source: "https://openlibrary.org/books/OL21521001M/Mindstorms"
  },
  {
    id: "papert-harel-1991",
    theory: "constructionism",
    year: 1991,
    title: "Constructionism named",
    researcher: "harel",
    study: "Constructionism, edited by Papert and Harel.",
    summary: "The 1991 volume consolidated constructionism as learning-by-making, while keeping the idea deeper than a slogan.",
    source: "https://www.papert.org/articles/SituatingConstructionism.html"
  },
  {
    id: "scratch-2007",
    theory: "constructionism",
    year: 2007,
    title: "Scratch community",
    researcher: "resnick",
    study: "Scratch launch and online creative programming community.",
    summary: "Scratch made constructionist computing more social, remixable, and accessible, moving from microworld programming toward networked creative learning.",
    source: "https://news.mit.edu/2007/resnick-scratch"
  },
  {
    id: "deci-1971",
    theory: "games-immersive",
    year: 1971,
    title: "Intrinsic motivation",
    researcher: "deciRyan",
    study: "Effects of Externally Mediated Rewards on Intrinsic Motivation.",
    summary: "Deci showed that some external rewards can reduce intrinsic motivation, giving game-based learning an early warning about points, badges, prizes, and controlling feedback.",
    source: "https://doi.org/10.1037/h0030644"
  },
  {
    id: "flow-1975",
    theory: "games-immersive",
    year: 1975,
    title: "Flow experience",
    researcher: "csikszentmihalyi",
    study: "Beyond Boredom and Anxiety.",
    summary: "Csikszentmihalyi's flow account made challenge-skill balance, clear goals, feedback, and deep absorption central to thinking about engaging learning environments.",
    source: "https://www.worldcat.org/title/1541844"
  },
  {
    id: "malone-1981",
    theory: "games-immersive",
    year: 1981,
    title: "Intrinsic game motivation",
    researcher: "malone",
    study: "Toward a Theory of Intrinsically Motivating Instruction.",
    summary: "Malone analyzed computer games to explain why challenge, fantasy, curiosity, and control can make instruction engaging without relying only on external rewards.",
    source: "https://doi.org/10.1016/S0364-0213(81)80017-1"
  },
  {
    id: "deci-ryan-1985",
    theory: "games-immersive",
    year: 1985,
    title: "Self-determination theory",
    researcher: "deciRyan",
    study: "Intrinsic Motivation and Self-Determination in Human Behavior.",
    summary: "Deci and Ryan framed motivation around autonomy, competence, and relatedness, a core lens for serious games, gamification, and learner agency.",
    source: "https://link.springer.com/book/10.1007/978-1-4899-2271-7"
  },
  {
    id: "malone-lepper-1987",
    theory: "games-immersive",
    year: 1987,
    title: "Making learning fun",
    researcher: "malone",
    study: "Making Learning Fun: A Taxonomy of Intrinsic Motivations for Learning.",
    summary: "Malone and Lepper organized intrinsic motivation into individual and interpersonal factors, giving educational game design a vocabulary beyond entertainment.",
    source: "https://www.routledge.com/Aptitude-Learning-and-Instruction-Volume-3-Conative-and-Affective-P/Farr-Snow/p/book/9781003163244"
  },
  {
    id: "prensky-2001",
    theory: "games-immersive",
    year: 2001,
    title: "Digital game-based learning",
    researcher: "prensky",
    study: "Digital Game-Based Learning.",
    summary: "Prensky popularized digital game-based learning as a design and training agenda, pushing games into mainstream educational technology conversations.",
    source: "https://www.mheducation.com/highered/product/digital-game-based-learning-prensky/M9780071363442.html"
  },
  {
    id: "gee-2003",
    theory: "games-immersive",
    year: 2003,
    title: "Games and literacy",
    researcher: "gee",
    study: "What Video Games Have to Teach Us About Learning and Literacy.",
    summary: "Gee argued that good games model learning principles such as identity, situated meaning, feedback, practice, systems thinking, and problem solving.",
    source: "https://openlibrary.org/isbn/1403961697"
  },
  {
    id: "squire-2006",
    theory: "games-immersive",
    year: 2006,
    title: "Designed experience",
    researcher: "squire",
    study: "From Content to Context: Videogames as Designed Experience.",
    summary: "Squire reframed game-based learning as participation in designed worlds where identity, practice, community, and context shape understanding.",
    source: "https://doi.org/10.3102/0013189X035008019"
  },
  {
    id: "dede-2009",
    theory: "games-immersive",
    year: 2009,
    title: "Immersive interfaces",
    researcher: "dede",
    study: "Immersive Interfaces for Engagement and Learning.",
    summary: "Dede linked immersion, simulation, identity, and situated experience to learning designs that can make inaccessible systems explorable.",
    source: "https://doi.org/10.1126/science.1167311"
  },
  {
    id: "merchant-2014",
    theory: "games-immersive",
    year: 2014,
    title: "VR instruction meta-analysis",
    researcher: "merchant",
    study: "Effectiveness of virtual reality-based instruction on students' learning outcomes in K-12 and higher education: A meta-analysis.",
    summary: "Merchant and colleagues synthesized VR instruction studies, making learning outcomes, learner characteristics, and design features part of the VR evidence conversation.",
    source: "https://doi.org/10.1016/j.compedu.2013.07.033"
  },
  {
    id: "cummings-bailenson-2016",
    theory: "games-immersive",
    year: 2016,
    title: "Presence and immersion",
    researcher: "cummingsBailenson",
    study: "How Immersive Is Enough? A Meta-Analysis of the Effect of Immersive Technology on User Presence.",
    summary: "Cummings and Bailenson synthesized how technical immersion influences presence, clarifying why VR learning design cannot rely on novelty alone.",
    source: "https://doi.org/10.1080/15213269.2015.1015740"
  },
  {
    id: "radianti-2020",
    theory: "games-immersive",
    year: 2020,
    title: "Immersive VR review",
    researcher: "radianti",
    study: "A systematic review of immersive virtual reality applications for higher education: Design elements, lessons learned, and research agenda.",
    summary: "Radianti and colleagues mapped higher education VR designs, surfacing gaps around pedagogy, assessment, collaboration, accessibility, and research agenda.",
    source: "https://doi.org/10.1016/j.compedu.2019.103778"
  },
  {
    id: "camil-2021",
    theory: "games-immersive",
    year: 2021,
    title: "CAMIL",
    researcher: "makransky",
    study: "The Cognitive Affective Model of Immersive Learning.",
    summary: "Makransky and Petersen proposed CAMIL, connecting immersion, presence, agency, motivation, embodiment, cognitive load, self-efficacy, and learning outcomes in IVR.",
    source: "https://doi.org/10.1007/s10648-020-09586-2"
  },
  {
    id: "aect-1923",
    theory: "edtech-islt",
    year: 1923,
    title: "Visual instruction field",
    researcher: "aect",
    study: "National Education Association Department of Visual Instruction root.",
    summary: "The AECT lineage begins in visual instruction, where media, images, and instructional materials became a professional field before audiovisual and educational technology language emerged.",
    source: "https://www.aect.org/aect/about/history"
  },
  {
    id: "finn-1960",
    theory: "edtech-islt",
    year: 1960,
    title: "Instructional technology as process",
    researcher: "finn",
    study: "Early-1960s field shift from audiovisual aids toward instructional technology as a systematic process.",
    summary: "Finn and peers helped shift the field from audiovisual aids toward instructional technology as a systematic design and communication process.",
    source: "https://www.aect.org/aect/about/history"
  },
  {
    id: "aect-1970",
    theory: "edtech-islt",
    year: 1970,
    title: "AECT identity",
    researcher: "aect",
    study: "Renaming to Association for Educational Communications and Technology.",
    summary: "The 1970 AECT name marks a broader professional identity around educational communications, technology, systems, and design rather than visual media alone.",
    source: "https://www.aect.org/aect/about/history"
  },
  {
    id: "aect-1977",
    theory: "edtech-islt",
    year: 1977,
    title: "Educational technology defined",
    researcher: "aect",
    study: "The Definition of Educational Technology.",
    summary: "AECT's 1977 definition positioned educational technology as a complex, integrated process involving people, procedures, ideas, devices, and organization.",
    source: "https://aect.org/docs/AECT_Definition_1977.pdf"
  },
  {
    id: "seels-1994",
    theory: "edtech-islt",
    year: 1994,
    title: "IDT domains",
    researcher: "seels",
    study: "Instructional Technology: The Definition and Domains of the Field.",
    summary: "Seels and Richey organized instructional technology around design, development, utilization, management, and evaluation, giving the field a domain map.",
    source: "https://eric.ed.gov/?id=ED387116"
  },
  {
    id: "aect-2008",
    theory: "edtech-islt",
    year: 2008,
    title: "Study and ethical practice",
    researcher: "aect",
    study: "AECT 2008 definition of educational technology.",
    summary: "AECT's 2008 definition emphasized study, ethical practice, facilitating learning, improving performance, and creating, using, and managing technological processes and resources.",
    source: "https://www.routledge.com/Educational-Technology-A-Definition-with-Commentary/Januszewski-Molenda/p/book/9780805858600"
  },
  {
    id: "coi-2000",
    theory: "instructional-design",
    year: 2000,
    title: "Community of Inquiry",
    researcher: "garrison",
    study: "Critical Inquiry in a Text-Based Environment: Computer Conferencing in Higher Education.",
    summary: "Garrison, Anderson, and Archer gave online learning design a durable model: cognitive presence, social presence, and teaching presence working together.",
    source: "https://auspace.athabascau.ca/handle/2149/739"
  },
  {
    id: "gagne-1965",
    theory: "instructional-design",
    year: 1965,
    title: "Conditions of learning",
    researcher: "gagne",
    study: "The Conditions of Learning.",
    summary: "Gagne organized learning outcomes and instructional events into a practical design grammar that still shapes lesson planning and training design.",
    source: "https://openlibrary.org/books/OL18600021M/The_conditions_of_learning."
  },
  {
    id: "mayer-2001",
    theory: "instructional-design",
    year: 2001,
    title: "Multimedia learning",
    researcher: "mayer",
    study: "Multimedia Learning.",
    summary: "Mayer linked cognitive theory to concrete multimedia design principles for coordinating words, pictures, attention, and transfer.",
    source: "https://openlibrary.org/books/OL7753908M/Multimedia_Learning"
  },
  {
    id: "merrill-2002",
    theory: "instructional-design",
    year: 2002,
    title: "First principles",
    researcher: "merrill",
    study: "First Principles of Instruction.",
    summary: "Merrill synthesized common ground across instructional models into a practical design sequence: problem, activation, demonstration, application, and integration.",
    source: "https://doi.org/10.1007/BF02505024"
  },
  {
    id: "siemens-2005",
    theory: "instructional-design",
    year: 2005,
    title: "Connectivism",
    researcher: "siemens",
    study: "Connectivism: A Learning Theory for the Digital Age.",
    summary: "Siemens argued that networked digital environments require attention to connections, currency, distributed knowledge, and learning that can reside beyond the individual.",
    source: "https://www.itdl.org/Journal/Jan_05/article01.htm"
  },
  {
    id: "tpack-2006",
    theory: "instructional-design",
    year: 2006,
    title: "TPACK framework",
    researcher: "mishra",
    study: "Technological Pedagogical Content Knowledge: A Framework for Teacher Knowledge.",
    summary: "Mishra and Koehler reframed technology integration as the intersection of content, pedagogy, technology, and context rather than a tool adoption problem.",
    source: "https://journals.sagepub.com/doi/10.1111/j.1467-9620.2006.00684.x"
  },
  {
    id: "fourcid-2007",
    theory: "instructional-design",
    year: 2007,
    title: "Ten steps / 4C-ID",
    researcher: "merrienboer",
    study: "Ten Steps to Complex Learning: A Systematic Approach to Four-Component Instructional Design.",
    summary: "Van Merrienboer and Kirschner made 4C-ID more usable for complex skills through whole tasks, supportive information, procedural information, and part-task practice.",
    source: "https://research-portal.uu.nl/en/publications/ten-steps-to-complex-learning-a-systematic-approach-to-four-compo/"
  },
  {
    id: "udl-2008",
    theory: "instructional-design",
    year: 2008,
    title: "UDL Guidelines 1.0",
    researcher: "rose",
    study: "CAST Universal Design for Learning Guidelines version 1.0.",
    summary: "CAST turned Universal Design for Learning into a more concrete design tool for planning options in representation, action and expression, and engagement.",
    source: "https://udlguidelines.cast.org/more/downloads/#v1-0"
  },
  {
    id: "reigeluth-2009",
    theory: "instructional-design",
    year: 2009,
    title: "ID theory common base",
    researcher: "reigeluth",
    study: "Instructional-Design Theories and Models, Volume III: Building a Common Knowledge Base.",
    summary: "Reigeluth and Carr-Chellman consolidated instructional design theory around shared terms, common principles, and guidance for varied instructional approaches.",
    source: "https://www.routledge.com/Instructional-Design-Theories-and-Models-Volume-III-Building-a-Common/Carr-Chellman-Reigeluth/p/book/9780805864564"
  },
  {
    id: "bandura-1977",
    theory: "social-cognitive-agency",
    year: 1977,
    title: "Social learning",
    researcher: "bandura",
    study: "Social Learning Theory.",
    summary: "Bandura connected observation, modeling, self-efficacy, and agency. This becomes a precursor for later agentic accounts of learning.",
    source: "https://journals.sagepub.com/doi/10.1177/105960117700200317"
  },
  {
    id: "bandura-1986",
    theory: "social-cognitive-agency",
    year: 1986,
    title: "Social cognitive theory",
    researcher: "bandura",
    study: "Social Foundations of Thought and Action.",
    summary: "The theory foregrounded reciprocal interaction among person, behavior, and environment, making agency a core explanatory construct.",
    source: "https://openlibrary.org/books/OL2537373M/Social_foundations_of_thought_and_action"
  },
  {
    id: "zimmerman-2000",
    theory: "social-cognitive-agency",
    year: 2000,
    title: "Self-regulated learning",
    researcher: "zimmerman",
    study: "Attaining Self-Regulation: A Social Cognitive Perspective.",
    summary: "Zimmerman made self-regulation a cyclical learner capability involving forethought, performance control, self-reflection, motivation, and strategy use.",
    source: "https://www.sciencedirect.com/science/article/pii/B9780121098902500317"
  },
  {
    id: "bandura-2001",
    theory: "social-cognitive-agency",
    year: 2001,
    title: "Agentic perspective",
    researcher: "bandura",
    study: "Social Cognitive Theory: An Agentic Perspective.",
    summary: "Bandura explicitly centered human agency through intentionality, forethought, self-reactiveness, and self-reflectiveness.",
    source: "https://www.annualreviews.org/content/journals/10.1146/annurev.psych.52.1.1"
  },
  {
    id: "code-2020",
    theory: "social-cognitive-agency",
    year: 2020,
    title: "Agency for learning",
    researcher: "code",
    study: "Agency for Learning: Intention, Motivation, Self-Efficacy and Self-Regulation.",
    summary: "Agency for learning links intention, motivation, self-efficacy, and self-regulation as context-sensitive learner capabilities.",
    source: "https://www.frontiersin.org/articles/10.3389/feduc.2020.00019/full"
  },
  {
    id: "yan-gasevic-2026",
    theory: "social-cognitive-agency",
    year: 2026,
    title: "Agentivism preprint",
    researcher: "yan",
    study: "Agentivism: a learning theory for the age of artificial intelligence.",
    summary: "Yan and Gasevic propose Agentivism as a recent AI-era learning theory preprint: selective delegation, epistemic monitoring, reconstructive internalization, and transfer under reduced support.",
    source: "https://arxiv.org/abs/2604.07813"
  },
  {
    id: "clt-1986",
    theory: "egri",
    year: 1986,
    title: "Communicative design turn",
    researcher: "richards",
    study: "Approaches and Methods in Language Teaching.",
    summary: "Communicative language teaching created a broader home for cycles that move from meaningful encounter to rule noticing and applied use.",
    source: "https://www.cambridge.org/core/books/approaches-and-methods-in-language-teaching/0A8B4286B0A67B4B793D894D9F810D55"
  },
  {
    id: "egri-1990",
    theory: "egri",
    year: 1990,
    title: "Encounter to rule",
    researcher: "richards",
    study: "EGRI / EGRA style lesson sequencing.",
    summary: "This lane treats EGRI as an instructional cycle: learners encounter examples, infer generalizations, reinforce patterns, then integrate or apply them.",
    source: "https://www.teachingenglish.org.uk/professional-development/teachers/knowing-subject/articles/inductive-approach"
  },
  {
    id: "egra-2022",
    theory: "egri",
    year: 2022,
    title: "Classroom applications",
    researcher: "richards",
    study: "EGRA technique studies in writing and grammar classrooms.",
    summary: "Recent classroom reports use experience, generalization, reinforcement, and application as a practical lesson arc rather than a full theory of learning.",
    source: "https://www.researchgate.net/publication/360529186_Proceedings_of_Internasional_Scientific-Practical_Conference_Samarqand_Uzbekiztan_2022"
  }
];

const aiedBranches = [
  {
    id: "cai-root",
    name: "CAI / Teaching Machines",
    shortName: "CAI",
    color: "#c94c3b",
    thesis: "Early computer-assisted instruction automated sequencing, feedback, drill, and access before AI modeling became central."
  },
  {
    id: "its-cognitive-modeling",
    name: "ITS / Cognitive Modeling",
    shortName: "ITS",
    color: "#316f9f",
    thesis: "Intelligent tutors model domain knowledge, learner state, misconceptions, feedback, hints, and dialogue."
  },
  {
    id: "schank-learning-by-doing",
    name: "Schank / Case-Based Learning",
    shortName: "Schank",
    color: "#4d885d",
    thesis: "Schank's branch treats stories, cases, scripts, goals, and learning-by-doing scenarios as the core of intelligent learning environments."
  },
  {
    id: "agents-analytics",
    name: "Agents, Analytics, Adaptivity",
    shortName: "Agents",
    color: "#c99c2f",
    thesis: "AIED broadened from expert tutors into conversational agents, adaptive systems, and natural-language tutoring."
  },
  {
    id: "edm-la-qe",
    name: "EDM / LA / QE",
    shortName: "Data",
    color: "#526f8f",
    thesis: "Learning traces become evidence for learner modeling, prediction, dashboards, discourse, epistemic networks, and quantitative ethnography."
  },
  {
    id: "genai-agentic-ai",
    name: "GenAI / Agentic AI",
    shortName: "GenAI",
    color: "#7853a6",
    thesis: "Generative and agentic AI shift the issue from adaptive help to delegation, verification, internalization, and transfer."
  }
];

const aiedMilestones = [
  {
    id: "aied-skinner-1954",
    branch: "cai-root",
    year: 1954,
    title: "Teaching machine logic",
    researcher: "skinner",
    study: "The Science of Learning and the Art of Teaching.",
    summary: "Programmed instruction made feedback, small steps, learner response, and progression into a machine-mediated instructional design problem.",
    source: "https://psycnet.apa.org/record/1955-02959-001"
  },
  {
    id: "aied-plato-1960",
    branch: "cai-root",
    year: 1960,
    title: "PLATO",
    researcher: "bitzer",
    study: "Programmed Logic for Automatic Teaching Operations at the University of Illinois.",
    summary: "PLATO made computer-based learning social, networked, graphical, and interactive decades before web-based learning environments.",
    source: "https://www.britannica.com/topic/PLATO-education-system"
  },
  {
    id: "aied-scholar-1970",
    branch: "its-cognitive-modeling",
    year: 1970,
    title: "SCHOLAR",
    researcher: "carbonell",
    study: "AI in CAI: An Artificial-Intelligence Approach to Computer-Assisted Instruction.",
    summary: "Carbonell's SCHOLAR moved beyond fixed frames toward semantic networks, generated questions, and mixed-initiative instructional dialogue.",
    source: "https://doi.org/10.1109/TMMS.1970.299942"
  },
  {
    id: "aied-sophie-1982",
    branch: "its-cognitive-modeling",
    year: 1982,
    title: "SOPHIE I-III",
    researcher: "jsbrown",
    study: "Pedagogical, Natural Language and Knowledge Engineering Techniques in SOPHIE I, II, and III, by Brown, Burton, and de Kleer.",
    summary: "SOPHIE showed how troubleshooting tutors could combine domain simulation, natural language, diagnosis, and pedagogical strategy.",
    source: "https://openlibrary.org/books/OL3084146M/Intelligent_tutoring_systems"
  },
  {
    id: "aied-its-book-1982",
    branch: "its-cognitive-modeling",
    year: 1982,
    title: "ITS field consolidated",
    researcher: "jsbrown",
    study: "Intelligent Tutoring Systems, edited by Derek Sleeman and John Seely Brown.",
    summary: "The 1982 volume gathered early AI, cognitive science, and education work into a recognizable intelligent tutoring systems field.",
    source: "https://openlibrary.org/books/OL3084146M/Intelligent_tutoring_systems"
  },
  {
    id: "aied-guidon-1987",
    branch: "its-cognitive-modeling",
    year: 1987,
    title: "GUIDON",
    researcher: "clancey",
    study: "Knowledge-Based Tutoring: The GUIDON Program.",
    summary: "GUIDON explored how expert-system knowledge could be transformed into explanations and tutoring dialogue, making pedagogy a knowledge-engineering problem.",
    source: "https://mitpress.mit.edu/9780262031233/knowledge-based-tutoring/"
  },
  {
    id: "aied-cognitive-tutors-1985",
    branch: "its-cognitive-modeling",
    year: 1985,
    title: "Cognitive tutors",
    researcher: "anderson",
    study: "Intelligent tutoring systems, by Anderson, Boyle, and Reiser.",
    summary: "Anderson's line connected cognitive theory to model-tracing tutors that could diagnose steps, give hints, and scale in mathematics classrooms.",
    source: "https://pubmed.ncbi.nlm.nih.gov/17746875/"
  },
  {
    id: "aied-conference-1987",
    branch: "its-cognitive-modeling",
    year: 1987,
    title: "AIED conference community",
    researcher: "aiedCommunity",
    study: "Third International Conference on Artificial Intelligence and Education.",
    summary: "By the late 1980s, AI and education had enough shared problems, systems, and methods to appear as a recurring international research community.",
    source: "https://journals.sagepub.com/doi/10.3233/AIC-1987-0110"
  },
  {
    id: "aied-bkt-1995",
    branch: "its-cognitive-modeling",
    year: 1995,
    title: "Bayesian knowledge tracing",
    researcher: "corbett",
    study: "Knowledge Tracing: Modeling the Acquisition of Procedural Knowledge, by Corbett and Anderson.",
    summary: "Bayesian Knowledge Tracing gave adaptive tutors a compact probabilistic learner model for estimating skill mastery over time.",
    source: "https://doi.org/10.1007/BF01099821"
  },
  {
    id: "aied-scripts-1977",
    branch: "schank-learning-by-doing",
    year: 1977,
    title: "Scripts and stories",
    researcher: "schank",
    study: "Scripts, Plans, Goals, and Understanding.",
    summary: "Schank's script theory treated understanding as organized story-like expectations, creating an AI root for case-based learning environments.",
    source: "https://books.google.com/books/about/Scripts_Plans_Goals_and_Understanding.html?id=R3DgQgAACAAJ"
  },
  {
    id: "aied-gbs-1994",
    branch: "schank-learning-by-doing",
    year: 1994,
    title: "Goal-Based Scenarios",
    researcher: "schank",
    study: "The Design of Goal-Based Scenarios.",
    summary: "Goal-Based Scenarios framed computer-based learning as role, mission, story, case access, and feedback around purposeful activity.",
    source: "https://www.tandfonline.com/doi/abs/10.1207/s15327809jls0304_2"
  },
  {
    id: "aied-autotutor-1999",
    branch: "agents-analytics",
    year: 1999,
    title: "AutoTutor",
    researcher: "graesser",
    study: "AutoTutor: A simulation of a human tutor.",
    summary: "AutoTutor pushed AIED toward conversational agents that interpret learner responses and manage dialogue, prompts, feedback, and hints.",
    source: "https://digitalcommons.memphis.edu/facpubs/7457/"
  },
  {
    id: "aied-autotutor-2004",
    branch: "agents-analytics",
    year: 2004,
    title: "Natural-language tutoring",
    researcher: "graesser",
    study: "AutoTutor: A tutor with dialogue in natural language.",
    summary: "The AutoTutor program made natural language dialogue a visible AIED path for explanation, reasoning, and deep comprehension.",
    source: "https://digitalcommons.memphis.edu/facpubs/7458"
  },
  {
    id: "aied-andes-2005",
    branch: "agents-analytics",
    year: 2005,
    title: "Andes evaluations",
    researcher: "vanlehn",
    study: "The Andes Physics Tutoring System: Five Years of Evaluations.",
    summary: "Andes showed how step-level feedback, hints, and coached problem solving could improve physics homework without replacing the whole course.",
    source: "https://asu.elsevierpure.com/en/publications/the-andes-physics-tutoring-system-five-years-of-evaluations/"
  },
  {
    id: "aied-edm-workshops-2000",
    branch: "edm-la-qe",
    year: 2000,
    title: "EDM workshop roots",
    researcher: "edmCommunity",
    study: "Workshop roots at ITS and related AIED, user-modeling, and technology-enhanced learning venues.",
    summary: "Educational data mining grew out of workshops attached to ITS and adjacent AIED, AAAI, user modeling, and technology-enhanced learning conferences before becoming its own venue.",
    source: "https://educationaldatamining.org/edm2008_1/"
  },
  {
    id: "aied-edm-2008",
    branch: "edm-la-qe",
    year: 2008,
    title: "First EDM conference",
    researcher: "edmCommunity",
    study: "First International Conference on Educational Data Mining, Montreal.",
    summary: "EDM became an international conference for computational approaches to educational data across computer science, education, psychology, psychometrics, and statistics.",
    source: "https://educationaldatamining.org/edm2008_1/"
  },
  {
    id: "aied-edm-state-2009",
    branch: "edm-la-qe",
    year: 2009,
    title: "EDM field review",
    researcher: "baker",
    study: "The State of Educational Data Mining in 2009.",
    summary: "Baker and Yacef reviewed EDM's early trajectory, including prediction, discovery with models, relationship mining, and method categories.",
    source: "https://jedm.educationaldatamining.org/index.php/JEDM/article/view/8"
  },
  {
    id: "aied-learning-analytics-2011",
    branch: "edm-la-qe",
    year: 2011,
    title: "LAK / SoLAR",
    researcher: "solar",
    study: "First International Conference on Learning Analytics and Knowledge.",
    summary: "LAK and SoLAR gave learning analytics a dedicated venue around learner trace data, dashboards, prediction, knowledge work, and sociotechnical intervention.",
    source: "https://www.solaresearch.org/events/lak/"
  },
  {
    id: "aied-ena-2016",
    branch: "edm-la-qe",
    year: 2016,
    title: "Epistemic Network Analysis",
    researcher: "shaffer",
    study: "A Tutorial on Epistemic Network Analysis.",
    summary: "ENA made coded discourse and interaction analyzable as networks of connections, giving learning analytics a theory-based route into collaborative thinking.",
    source: "https://doi.org/10.18608/jla.2016.33.3"
  },
  {
    id: "aied-hla-2017",
    branch: "edm-la-qe",
    year: 2017,
    title: "Handbook of Learning Analytics",
    researcher: "gasevic",
    study: "Handbook of Learning Analytics, edited by Lang, Siemens, Wise, and Gasevic.",
    summary: "The handbook consolidated LA as a research field and explicitly bridged learning analytics, EDM, theory, methods, ethics, and educational practice.",
    source: "https://www.solaresearch.org/publications/hla-17/"
  },
  {
    id: "aied-qe-book-2017",
    branch: "edm-la-qe",
    year: 2017,
    title: "Quantitative Ethnography",
    researcher: "shaffer",
    study: "Quantitative Ethnography.",
    summary: "Shaffer framed QE as a way to combine ethnographic interpretation with statistical modeling to understand the human side of big data.",
    source: "https://www.lulu.com/shop/david-williamson-shaffer/quantitative-ethnography/paperback/product-1z98mzzd.html"
  },
  {
    id: "aied-icqe-2019",
    branch: "edm-la-qe",
    year: 2019,
    title: "First ICQE",
    researcher: "isqe",
    study: "First International Conference on Quantitative Ethnography.",
    summary: "ICQE 2019 gave QE a dedicated conference community, with proceedings spanning learning analytics, history, systems engineering, and human behavior.",
    source: "https://link.springer.com/book/10.1007/978-3-030-33232-7"
  },
  {
    id: "aied-isqe-2024",
    branch: "edm-la-qe",
    year: 2024,
    title: "QE community matures",
    researcher: "isqe",
    study: "International Society for Quantitative Ethnography and ICQE.",
    summary: "By the mid-2020s, ISQE and recurring ICQE events had turned QE from a method cluster into a professional community with webinars, conferences, tools, and shared training pathways.",
    source: "https://www.qesoc.org/"
  },
  {
    id: "aied-genai-2023",
    branch: "genai-agentic-ai",
    year: 2023,
    title: "LLM tutoring turn",
    researcher: "yan",
    study: "Generative AI enters mainstream educational dialogue and tutoring design.",
    summary: "Large language models made conversational help cheap and general, raising new questions about correctness, dependence, assessment, and transfer.",
    source: "https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research"
  },
  {
    id: "aied-agentivism-2026",
    branch: "genai-agentic-ai",
    year: 2026,
    title: "Agentivism preprint",
    researcher: "yan",
    study: "Agentivism: a learning theory for the age of artificial intelligence.",
    summary: "Agentivism is included here as a recent preprint and AI-era claim: the GenAI branch meets agency theory when learning must survive delegation, monitoring, internalization, and reduced support.",
    source: "https://arxiv.org/abs/2604.07813"
  }
];

const milestoneExplanations = {
  "thorndike-1898": {
    why: "Thorndike gives behaviorism one of its deepest roots: learning is strengthened by consequences, not only by repeated association.",
    takeaway: "Design practice so learners can act, experience consequences, and refine behavior through meaningful feedback.",
    connection: "This is the bridge from experimental learning research to Skinner's later operant conditioning."
  },
  "pavlov-1897": {
    why: "It gave learning theory a simple causal grammar: a neutral cue can become meaningful when it is repeatedly paired with an important event.",
    takeaway: "Use consistent cues, feedback, and practice conditions carefully, but remember that association alone does not explain understanding.",
    connection: "This opens the behaviorist lane and sets up Watson's later push to make psychology observable and experimental."
  },
  "watson-1913": {
    why: "Watson made behaviorism a program for research. Learning became something that could be predicted, measured, and shaped without relying on introspection.",
    takeaway: "Design instruction around visible performance, clear conditions, and measurable change when the goal is skill fluency or habit formation.",
    connection: "The manifesto creates the bridge from Pavlov's conditioning work to Skinner's operant account of consequences."
  },
  "skinner-1938": {
    why: "Skinner shifted attention from reflexive association to voluntary action shaped by consequences, making reinforcement central to learning design.",
    takeaway: "Break complex performance into teachable steps, reinforce approximations, and tune feedback timing to shape behavior.",
    connection: "This becomes the practical backbone for programmed instruction, mastery learning, and many adaptive practice systems."
  },
  "skinner-1954": {
    why: "The teaching machine idea turned behaviorist principles into an interface problem: sequence, response, feedback, and progression.",
    takeaway: "Immediate feedback and small steps can be powerful, especially for procedural practice, but they need meaningful goals around them.",
    connection: "It anticipates computer-assisted instruction and later adaptive learning systems."
  },
  "miller-1956": {
    why: "Miller helped make the mind scientifically discussable again by showing that memory has limits and that learners actively recode information into chunks.",
    takeaway: "Reduce unnecessary load, group ideas into meaningful units, and teach learners how to chunk rather than only asking them to remember more.",
    connection: "This is a signature marker of the cognitive turn away from purely observable behavior."
  },
  "tolman-1948": {
    why: "Tolman complicates strict behaviorism by showing that organisms can learn relations and maps that are not immediately visible as simple responses.",
    takeaway: "Design learning environments that let learners build internal models, not only repeat visible performances.",
    connection: "It is a pre-cognitive-revolution marker that helps explain why cognitivism emerges."
  },
  "bruner-1960": {
    why: "Bruner argued that curriculum should be organized around deep structures, not isolated facts, and revisited through developmentally appropriate forms.",
    takeaway: "Return to core ideas repeatedly with richer representations, examples, and problems instead of treating topics as one-time coverage.",
    connection: "It links cognitivist structure with constructivist discovery and later project-based approaches."
  },
  "atkinson-1968": {
    why: "The memory system model gave educators and researchers a diagram for how information moves through attention, working memory, and long-term memory.",
    takeaway: "Plan for attention, encoding, rehearsal, retrieval, and transfer as distinct design problems.",
    connection: "It complements Miller's chunking insight by showing where cognitive bottlenecks can occur."
  },
  "ausubel-1968": {
    why: "Ausubel pushed back against pure discovery by emphasizing that meaningful reception learning depends heavily on what the learner already knows.",
    takeaway: "Start with advance organizers, activate prior knowledge, and explicitly connect new ideas to existing cognitive structures.",
    connection: "This sits between cognitivism and constructivism: knowledge is structured, but the learner must integrate it meaningfully."
  },
  "sweller-1988": {
    why: "Cognitive load theory made instructional design accountable to working-memory limits and novice-expert differences.",
    takeaway: "Reduce extraneous load, sequence examples and problems carefully, and support schema construction before open-ended problem solving.",
    connection: "It connects cognitivism directly to evidence-based instructional design."
  },
  "dewey-1938": {
    why: "Dewey made experience a design problem: not every activity educates unless it supports continuity, inquiry, and growth.",
    takeaway: "Use experiences that connect to prior activity, invite inquiry, and open richer future participation.",
    connection: "This is a philosophical root for constructivist and project-based learning."
  },
  "piaget-1952": {
    why: "Piaget framed children as active builders of cognitive structures rather than passive receivers of adult knowledge.",
    takeaway: "Match tasks to learners' developmental resources, then create experiences that require them to revise their current explanations.",
    connection: "Piaget becomes a major foundation for constructivism and later constructionism."
  },
  "vygotsky-1978": {
    why: "Vygotsky made social interaction, language, and cultural tools central to development, especially through the zone of proximal development.",
    takeaway: "Design scaffolds, peer interaction, and guided participation so learners can do more with support than alone.",
    connection: "This adds a social and cultural lane to constructivism, balancing Piaget's individual developmental emphasis."
  },
  "von-glasersfeld-1984": {
    why: "Radical constructivism sharpened the claim that learners construct viable interpretations rather than simply copying external reality.",
    takeaway: "Ask learners to test, compare, and revise their models instead of treating misconceptions as simple missing information.",
    connection: "It prepares the ground for learning designs centered on modeling, reflection, and epistemic agency."
  },
  "lave-wenger-1991": {
    why: "Situated learning shifts the unit of analysis from the isolated mind to participation in a practice, community, and identity trajectory.",
    takeaway: "Design access to authentic practices, peripheral participation, mentors, tools, and gradual responsibility.",
    connection: "It links constructivism with sociocultural learning, apprenticeship, and communities of practice."
  },
  "suchman-1987": {
    why: "Suchman challenged the idea that intelligent action is simply plan execution, making situated interaction central to human-machine and learning design.",
    takeaway: "Study what people actually do with tools, interruptions, repairs, and local constraints before designing instruction or support.",
    connection: "It connects situated cognition, workplace studies, HCI, and later embodied views of learning."
  },
  "brown-collins-duguid-1989": {
    why: "The article made a strong educational claim: knowledge learned out of context can become inert because activity and culture are part of what is learned.",
    takeaway: "Use authentic activity, apprenticeships, modeling, coaching, and legitimate practice instead of only abstract decontextualized exercises.",
    connection: "It bridges constructivism, apprenticeship, communities of practice, and the embodied/situated cognition lane."
  },
  "embodied-mind-1991": {
    why: "Varela, Thompson, and Rosch made cognition less brain-bound by treating mind as enacted through embodied interaction with the world.",
    takeaway: "Design learning so perception, movement, attention, and action are part of understanding, not decorative additions.",
    connection: "It links cognitive science with enactivism and provides a theoretical root for embodied learning."
  },
  "hutchins-1995": {
    why: "Hutchins showed that cognition can be distributed across people, instruments, representations, and routines rather than located only inside one head.",
    takeaway: "Analyze the whole learning system: learners, tools, displays, language, artifacts, and coordination practices.",
    connection: "It extends situated cognition into distributed cognition and helps explain collaborative and tool-rich learning environments."
  },
  "clark-1997": {
    why: "Clark sharpened the embedded cognition argument by showing how intelligent action depends on tight coupling between brain, body, tools, and world.",
    takeaway: "Build environments where external representations, manipulatives, and feedback loops carry real cognitive work.",
    connection: "It connects embodied cognition with extended mind debates and modern tool-mediated learning."
  },
  "glenberg-2008": {
    why: "Glenberg moved embodied cognition into educational practice by arguing that action and perceptual simulation can support comprehension.",
    takeaway: "Use gesture, manipulation, enactment, simulation, and physical interaction when they clarify the target concept.",
    connection: "It makes embodied learning visible as an instructional design option without collapsing it into classic ID theory."
  },
  "learning-sciences-1991": {
    why: "The early Journal of the Learning Sciences and ICLS era marks learning sciences as a distinct interdisciplinary research community.",
    takeaway: "Treat learning as a phenomenon studied across cognition, culture, design, technology, discourse, and classroom ecologies.",
    connection: "This belongs beside constructivist, sociocultural, and situated traditions, not inside the AECT/ID field line."
  },
  "design-experiments-1992": {
    why: "Ann Brown gave the field a method for studying theory and intervention together in messy classroom systems.",
    takeaway: "Iterate designs in real contexts, collect evidence across levels, and use breakdowns to refine both theory and practice.",
    connection: "Design experiments become a methodological root for design-based research in the learning sciences."
  },
  "how-people-learn-1999": {
    why: "How People Learn made the science of learning legible beyond specialist communities through a synthesis of cognition, development, expertise, and schooling.",
    takeaway: "Design around prior knowledge, deep conceptual organization, metacognition, assessment, and learner-centered environments.",
    connection: "It is a public-facing science-of-learning anchor that overlaps with but does not reduce to instructional design."
  },
  "science-learning-centers-2004": {
    why: "The NSF centers gave science of learning a major institutional form across labs, disciplines, and applied learning problems.",
    takeaway: "Read the science of learning as a research infrastructure joining cognitive science, neuroscience, education, social context, and technology.",
    connection: "It broadens the learning sciences lane into a larger science-of-learning movement."
  },
  "handbook-learning-sciences-2006": {
    why: "The handbook consolidated the field's vocabulary, methods, and theoretical families for a wider scholarly audience.",
    takeaway: "Use the field as a plural research tradition: cognition, sociocultural theory, design, technology, collaboration, and classroom study.",
    connection: "It stabilizes learning sciences as its own lane rather than a subtopic of AECT or ID."
  },
  "logo-1967": {
    why: "Logo turned programming into a learning material. Learners could externalize mathematical ideas and debug them in visible form.",
    takeaway: "Give learners expressive tools that let them build, inspect, and revise their thinking.",
    connection: "This is the technical and pedagogical seed of constructionism."
  },
  "papert-1980": {
    why: "Papert argued that powerful ideas become learnable when learners can build personally meaningful public artifacts.",
    takeaway: "Use projects, simulations, code, models, and media artifacts as thinking objects, not just final products.",
    connection: "Constructionism extends Piaget by adding computers, making, and shareable artifacts."
  },
  "papert-harel-1991": {
    why: "The 1991 volume gave constructionism a broader research identity and clarified that learning-by-making is only the surface of the theory.",
    takeaway: "Design environments where artifacts invite conversation, debugging, identity, and community review.",
    connection: "It connects maker learning, computational media, and social construction of knowledge."
  },
  "scratch-2007": {
    why: "Scratch operationalizes constructionism for the web: learners build projects, remix others' work, and receive social feedback.",
    takeaway: "Use low-floor, high-ceiling tools that support projects, peers, passion, play, remixing, and sharing.",
    connection: "It extends Logo and Mindstorms into a networked creative-learning community."
  },
  "deci-1971": {
    why: "Deci made a direct empirical challenge to simple reward logic by showing that rewards can undermine intrinsic motivation when they feel controlling.",
    takeaway: "Use scores, badges, prizes, and gamified incentives carefully; they should support competence and autonomy, not replace meaningful engagement.",
    connection: "This gives the games lane a motivational root before educational games become a technology movement."
  },
  "flow-1975": {
    why: "Flow explains why difficult activity can become deeply engaging when challenge, skill, goals, and feedback line up.",
    takeaway: "Tune task difficulty, feedback timing, and learner control so engagement comes from productive absorption rather than decorative stimulation.",
    connection: "Flow becomes a major bridge between motivation psychology, game design, simulation, and immersive learning."
  },
  "malone-1981": {
    why: "Malone studied what makes computer games fun and converted that insight into an instructional theory around challenge, fantasy, curiosity, and control.",
    takeaway: "Design learning activities with meaningful goals, uncertain outcomes, curiosity gaps, responsive feedback, and learner control.",
    connection: "This is one of the clearest early links between computer games and instructional motivation."
  },
  "deci-ryan-1985": {
    why: "Self-determination theory gives game-based learning a durable way to distinguish deep motivation from shallow compliance.",
    takeaway: "Support autonomy, competence, and relatedness through choices, optimal challenge, feedback, collaboration, and identity-relevant goals.",
    connection: "It links motivation, games, agency, social learning, and later critiques of gamification."
  },
  "malone-lepper-1987": {
    why: "The taxonomy broadened game motivation beyond solo fun by including curiosity, challenge, fantasy, control, cooperation, competition, and recognition.",
    takeaway: "Treat fun as a design problem with analyzable motivational components, not as a surface aesthetic.",
    connection: "It prepares the field for serious games, educational software, and motivational design models."
  },
  "prensky-2001": {
    why: "Prensky made digital game-based learning visible to instructional technology, corporate training, and popular education audiences.",
    takeaway: "Consider games when practice, decision making, feedback, simulation, and persistence are central learning requirements.",
    connection: "It marks the moment game-based learning becomes a mainstream edtech argument rather than a niche design experiment."
  },
  "gee-2003": {
    why: "Gee shifted attention from games as rewards to games as learning systems with identities, semiotic domains, situated meanings, and feedback-rich practice.",
    takeaway: "Analyze what the game asks learners to become, notice, do, discuss, and improve over time.",
    connection: "This links game-based learning to literacy, identity, situated cognition, and the learning sciences."
  },
  "squire-2006": {
    why: "Squire argued that games teach through designed experience, not just content delivery, so research must study the game world and its surrounding communities.",
    takeaway: "Design and evaluate games as activity systems: rules, identities, tools, communities, histories, and social contexts all matter.",
    connection: "It connects game-based learning to situated cognition, constructionist design, and learning sciences methodology."
  },
  "dede-2009": {
    why: "Dede made immersive interfaces a serious learning-design topic by tying simulations, identity, presence, and situated action to engagement and understanding.",
    takeaway: "Use immersion when learners need to experience scale, danger, complexity, social roles, or invisible systems that ordinary classrooms cannot provide.",
    connection: "This is a major bridge from games and simulations into VR and immersive learning."
  },
  "merchant-2014": {
    why: "The meta-analysis helped move VR learning from promise claims toward evidence about when VR instruction produces learning gains.",
    takeaway: "Ask what the VR design adds instructionally: practice, visualization, feedback, embodiment, transfer, or collaboration.",
    connection: "It connects immersive learning to evidence standards in educational technology and instructional design."
  },
  "cummings-bailenson-2016": {
    why: "Presence is often assumed to be the key value of VR, and this meta-analysis clarified which technical features tend to increase it.",
    takeaway: "Do not equate higher fidelity with better learning; align tracking, stereoscopy, field of view, interaction, and reflection with the learning goal.",
    connection: "It gives immersive learning a media psychology anchor that complements instructional design evidence."
  },
  "radianti-2020": {
    why: "The systematic review showed that immersive VR in higher education was growing quickly but still uneven in pedagogy, collaboration, and assessment.",
    takeaway: "Build VR studies with clearer learning objectives, instructional scaffolds, accessibility plans, and outcome measures.",
    connection: "It connects immersive learning to higher education practice and research agenda setting."
  },
  "camil-2021": {
    why: "CAMIL gives IVR learning a theoretical model that links media affordances with cognitive and affective learning mechanisms.",
    takeaway: "Design around presence and agency while managing embodiment, intrinsic motivation, self-efficacy, self-regulation, and cognitive load.",
    connection: "It becomes a contemporary anchor for immersive learning alongside cognitive load, multimedia learning, and motivation theory."
  },
  "aect-1923": {
    why: "The visual instruction root shows that the field began with media, representation, and instructional materials before it became educational technology.",
    takeaway: "Read AECT/ISLT historically as a professional field concerned with instructional media, systems, communication, and learning technologies.",
    connection: "This gives the AECT lane a field-formation starting point separate from learning sciences."
  },
  "finn-1960": {
    why: "Finn's era helped move the field beyond audiovisual aids toward instructional technology as a systematic process shaped by communication theory and automation.",
    takeaway: "Track the shift from tools as aids to technology as designed instructional systems.",
    connection: "It bridges audiovisual education, systems thinking, and later instructional design practice."
  },
  "aect-1970": {
    why: "The AECT name marks an expanded professional identity around educational communications and technology, not just visual instruction.",
    takeaway: "Use this milestone to show field identity: associations, terminology, standards, divisions, and professional preparation matter.",
    connection: "It sits between audiovisual traditions and later instructional systems and learning technologies programs."
  },
  "aect-1977": {
    why: "The 1977 definition framed educational technology as an integrated process involving people, procedures, ideas, devices, and organization.",
    takeaway: "Do not reduce educational technology to devices; the field also includes processes, systems, management, and evaluation.",
    connection: "It provides a formal AECT bridge into instructional systems thinking."
  },
  "seels-1994": {
    why: "Seels and Richey's domain map gave instructional technology a durable professional structure: design, development, utilization, management, and evaluation.",
    takeaway: "Use the domains to distinguish the field from any single learning theory or design model.",
    connection: "It links AECT definitions to graduate ISLT and instructional technology curricula."
  },
  "aect-2008": {
    why: "The 2008 definition updated the field around study, ethical practice, facilitating learning, improving performance, and technological processes and resources.",
    takeaway: "Show the modern AECT/ISLT field as both research and professional practice, with ethics and performance explicitly named.",
    connection: "This develops the AECT lane while keeping it analytically separate from Learning Sciences."
  },
  "gagne-1965": {
    why: "Gagne gave instructional design a durable sequence for turning learning goals into observable instructional events.",
    takeaway: "Clarify the outcome type, gain attention, activate prerequisites, guide performance, elicit practice, give feedback, and support retention and transfer.",
    connection: "It bridges cognitive processing assumptions with systematic lesson and training design."
  },
  "coi-2000": {
    why: "It gave online and blended learning a design language for quality interaction instead of treating discussion forums as neutral containers.",
    takeaway: "Plan for cognitive presence, social presence, and teaching presence together: tasks, community, facilitation, and direct instruction all matter.",
    connection: "CoI extends social constructivist ideas into online instructional design and anticipates later blended learning frameworks."
  },
  "merrill-2002": {
    why: "Merrill identified design principles that recur across many instructional theories, making the field less fragmented and more actionable.",
    takeaway: "Anchor instruction in real problems, activate prior knowledge, demonstrate, let learners apply with feedback, then integrate into authentic use.",
    connection: "This sits between cognitivist sequencing, constructivist authenticity, and performance-centered instructional design."
  },
  "mayer-2001": {
    why: "Multimedia learning made design choices around words and pictures empirically testable rather than merely aesthetic.",
    takeaway: "Coordinate narration, text, visuals, signaling, segmenting, and modality so learners process essential information without overload.",
    connection: "It links cognitive load, dual-channel processing, and practical digital instructional design."
  },
  "siemens-2005": {
    why: "Connectivism responded to networked knowledge conditions where knowing where, who, and how to connect can matter as much as stored individual knowledge.",
    takeaway: "Design for curation, connection making, updating, network participation, and judgment under fast-changing information conditions.",
    connection: "It forms an important bridge from digital learning theory toward later agentic and AI-mediated learning accounts."
  },
  "tpack-2006": {
    why: "TPACK challenged tool-first edtech design by showing that effective technology integration depends on content, pedagogy, technology, and context together.",
    takeaway: "Start from the learning goal and subject matter, then choose technologies that transform representation, practice, feedback, or collaboration.",
    connection: "It connects teacher knowledge, instructional design, and constructionist learning-by-design work in technology-rich classrooms."
  },
  "fourcid-2007": {
    why: "4C-ID addresses complex skills that cannot be taught well through isolated objectives alone because transfer requires coordinated whole-task performance.",
    takeaway: "Use whole learning tasks, sequence complexity, provide supportive information, give procedural support, and add part-task practice only where needed.",
    connection: "It links cognitive load theory, authentic task design, and competency-oriented curriculum planning."
  },
  "udl-2008": {
    why: "The UDL Guidelines made accessibility and learner variability a front-end design concern rather than a late accommodation step.",
    takeaway: "Build options into goals, materials, methods, and assessments so learners can access, express, and engage with challenging work in different ways.",
    connection: "UDL connects instructional design with equity, accessibility, cognitive neuroscience, and later agency-centered design."
  },
  "reigeluth-2009": {
    why: "Volume III marked an effort to organize the diverse instructional design field around shared concepts, universal principles, and more precise guidance.",
    takeaway: "Treat instructional models as a design knowledge base: choose methods based on goals, learners, conditions, and desired learning outcomes.",
    connection: "It closes the 2000s lane by synthesizing older ID theory while preparing the field for learner-centered and technology-rich paradigms."
  },
  "bandura-1977": {
    why: "Bandura showed that people learn by observing models, interpreting consequences, and developing beliefs about their own capability.",
    takeaway: "Include modeling, worked examples, peer demonstration, and opportunities to build self-efficacy.",
    connection: "This becomes an important precursor to modern agency-centered learning theories."
  },
  "bandura-1986": {
    why: "Social cognitive theory made agency reciprocal: people shape environments, environments shape people, and behavior changes both.",
    takeaway: "Design for self-regulation, goal setting, reflection, and learner control, not only exposure to content.",
    connection: "It bridges behavior, cognition, environment, and agency in one model."
  },
  "zimmerman-2000": {
    why: "Zimmerman makes agency operational at the learner level through planning, monitoring, strategy use, motivation, and reflection.",
    takeaway: "Give learners structures for goals, strategy selection, progress monitoring, self-evaluation, and adaptive revision.",
    connection: "It is the practical self-regulation bridge between Bandura's agency and modern learner agency frameworks."
  },
  "bandura-2001": {
    why: "Bandura's agentic perspective explicitly names the capabilities that make agency durable: intention, forethought, self-reactiveness, and self-reflection.",
    takeaway: "Design learning so students make choices, anticipate consequences, monitor action, and evaluate their own capability.",
    connection: "This gives the Social Cognitive & Agency lane its clearest theoretical anchor before AI-era delegation."
  },
  "code-2020": {
    why: "Agency for learning treats intention, motivation, self-efficacy, and self-regulation as situated capabilities that emerge in context.",
    takeaway: "Give learners meaningful choices, feedback, and tools to monitor their own learning strategies.",
    connection: "This lane sets up Agentivism by foregrounding agency before AI delegation becomes the core problem."
  },
  "yan-gasevic-2026": {
    why: "Agentivism addresses a new condition: AI can help complete tasks, so successful performance no longer proves that the human learner has learned.",
    takeaway: "Design AI-supported learning around selective delegation, verification, internalization, and transfer with reduced support.",
    connection: "It reorganizes earlier theories around human-AI interaction and the difference between task success and durable capability."
  },
  "clt-1986": {
    why: "Communicative language teaching shifted attention from form alone to meaningful use, interaction, and communicative purpose.",
    takeaway: "Let learners encounter language in use before isolating patterns, practicing them, and applying them in context.",
    connection: "This provides a practical home for EGRI or EGRA-style lesson cycles."
  },
  "egri-1990": {
    why: "The cycle makes lesson flow explicit: encounter examples, generalize a pattern, reinforce the pattern, then integrate it into use.",
    takeaway: "Use it as a planning scaffold for grammar, vocabulary, writing, or concept lessons where learners move from examples to transfer.",
    connection: "It is a teaching design cycle rather than a full theory, so it is best shown as applied pedagogy."
  },
  "egra-2022": {
    why: "Recent classroom studies show how EGRA-like sequences can support writing and grammar practice in concrete settings.",
    takeaway: "Pair inductive noticing with guided reinforcement and real application tasks so the cycle does not stop at rule naming.",
    connection: "This keeps the EGRI / EGRA lane grounded in classroom implementation."
  }
};

const aiedExplanations = {
  "aied-skinner-1954": {
    why: "It is not AIED yet, but it supplies the machine-mediated instructional logic that later CAI and tutoring systems inherit.",
    takeaway: "Treat it as the behavioral automation root: sequencing and feedback are powerful but limited without learner modeling.",
    connection: "This branch connects behaviorist programmed instruction to the first computer-assisted instruction systems."
  },
  "aied-plato-1960": {
    why: "PLATO shows that educational computing was never only about content delivery; it also created networked communities, interaction, graphics, and communication tools.",
    takeaway: "AIED should be read as part tutor, part interface, part social system, and part infrastructure.",
    connection: "PLATO is the CAI and networked-learning root beneath later adaptive, online, and AI-mediated education."
  },
  "aied-scholar-1970": {
    why: "SCHOLAR is a canonical ITS root because the system could use a knowledge network to generate dialogue instead of replaying fixed frames.",
    takeaway: "The tutor becomes intelligent when it has inspectable domain knowledge, can ask and answer questions, and adapts the interaction.",
    connection: "This is the bridge from CAI to knowledge-based intelligent tutoring systems."
  },
  "aied-sophie-1982": {
    why: "SOPHIE made diagnosis and simulation central, showing that tutoring could support reasoning through faults rather than only checking answers.",
    takeaway: "For complex domains, model the system, the learner's hypotheses, and the pedagogical moves around troubleshooting.",
    connection: "It deepens the ITS branch by linking expert systems, natural language, and diagnostic pedagogy."
  },
  "aied-its-book-1982": {
    why: "The Sleeman and Brown volume marks the moment when scattered AI tutoring projects became visible as a field with shared problems.",
    takeaway: "Read ITS as a design space: domain models, student models, tutoring strategies, interfaces, and explanations.",
    connection: "It consolidates early CAI, SOPHIE-like systems, GUIDON-like systems, and cognitive modeling into the AIED lineage."
  },
  "aied-guidon-1987": {
    why: "GUIDON showed that expert-system knowledge does not automatically become teachable; tutoring requires explanation, sequencing, and dialogue design.",
    takeaway: "Separate expert performance from teachable knowledge and design the pedagogical layer deliberately.",
    connection: "It connects medical expert systems, knowledge engineering, and ITS pedagogy."
  },
  "aied-cognitive-tutors-1985": {
    why: "Cognitive Tutors turned cognitive theory into operational student models, step-level feedback, hints, and large-scale classroom products.",
    takeaway: "Represent the target cognitive skill clearly enough that the tutor can compare learner steps to a model of expert performance.",
    connection: "This branch ties AIED directly back to cognitivism and cognitive architecture."
  },
  "aied-conference-1987": {
    why: "The recurring AIED conference community marks the field becoming more than scattered systems: it had shared venues, debates, and technical-pedagogical problems.",
    takeaway: "Read AIED as a research community with its own infrastructure, not just as a collection of tutoring systems.",
    connection: "It stabilizes the ITS branch before EDM, LA, and QE later expand what counts as educational AI evidence."
  },
  "aied-bkt-1995": {
    why: "Bayesian Knowledge Tracing made learner modeling lightweight enough to power adaptive decisions across many skills and practice sequences.",
    takeaway: "Track mastery probabilistically, update estimates from performance, and adapt practice or feedback when evidence changes.",
    connection: "It becomes a foundation for adaptive learning systems and educational data mining."
  },
  "aied-scripts-1977": {
    why: "Schank's scripts explain why learning environments need cases, situations, expectations, and story memory rather than only rules.",
    takeaway: "Use stories and cases as reusable knowledge structures that learners can retrieve when facing new situations.",
    connection: "This is the narrative and case-based root that runs beside, not under, classic ITS."
  },
  "aied-gbs-1994": {
    why: "Goal-Based Scenarios turn case-based reasoning into educational software design: learners pursue a mission, fail safely, and consult stories when needed.",
    takeaway: "Build scenarios around roles, goals, decisions, consequences, and just-in-time case access.",
    connection: "It links Schank's AI work to constructionist and situated learning designs."
  },
  "aied-autotutor-1999": {
    why: "AutoTutor made conversational tutoring a serious AIED path, not just a user-interface novelty.",
    takeaway: "Design tutoring dialogue around pumps, prompts, hints, feedback, elaboration, correction, and summary.",
    connection: "This branch leads toward pedagogical agents and later LLM-based tutoring."
  },
  "aied-autotutor-2004": {
    why: "Natural-language tutoring foregrounds explanation quality and discourse, areas where rigid answer checking is too narrow.",
    takeaway: "Use dialogue to build reasoning and explanation, not only to mark correctness.",
    connection: "This becomes an important precursor for current conversational AI tutors."
  },
  "aied-andes-2005": {
    why: "Andes is important because it shows mature ITS impact in realistic homework conditions rather than only in lab demonstrations.",
    takeaway: "Use immediate feedback and hints to coach problem solving while preserving authentic task structure and learner agency.",
    connection: "It bridges classic ITS, classroom deployment, and later analytics-driven adaptive systems."
  },
  "aied-edm-workshops-2000": {
    why: "EDM did not appear from nowhere; it grew from workshops embedded in ITS, AIED, AAAI, and user modeling communities.",
    takeaway: "Treat educational data mining as an AIED-adjacent field formation around traces, models, and computational methods.",
    connection: "This links learner modeling and ITS data to an independent EDM research community."
  },
  "aied-edm-2008": {
    why: "The first EDM conference marks a formal venue for computational analysis of educational data and large learning repositories.",
    takeaway: "Use EDM when the core question is model discovery, prediction, pattern mining, or computational evidence from learner traces.",
    connection: "It creates the data-mining branch that later overlaps with learning analytics and adaptive learning."
  },
  "aied-edm-state-2009": {
    why: "Baker and Yacef's review gave the emerging EDM community a self-description, method map, and research agenda.",
    takeaway: "Distinguish prediction, discovery with models, relationship mining, clustering, and model-based scientific explanation.",
    connection: "This is a conceptual bridge from EDM conference formation to later learning analytics synthesis."
  },
  "aied-learning-analytics-2011": {
    why: "LAK and SoLAR gave learning analytics a visible home focused on measurement, collection, analysis, reporting, and optimization of learning contexts.",
    takeaway: "Design analytics as sociotechnical intervention: dashboards and predictions need pedagogy, interpretation, ethics, and action.",
    connection: "This branch connects AIED and EDM to broader institutional, social, and knowledge-work analytics."
  },
  "aied-ena-2016": {
    why: "ENA matters because it treats coded discourse and interaction as structured connections, not only as counts or isolated variables.",
    takeaway: "Use networked representations when the learning evidence is relational, collaborative, epistemic, or discourse-based.",
    connection: "ENA becomes a methodological bridge from learning analytics to Quantitative Ethnography."
  },
  "aied-hla-2017": {
    why: "The Handbook of Learning Analytics consolidated LA as a field and explicitly brought LA and EDM communities into a shared knowledge base.",
    takeaway: "Use the handbook as a map of methods, theory, ethics, dashboards, data infrastructures, and intervention design.",
    connection: "It stabilizes LA as a sibling field to EDM inside the broader AIED/data ecosystem."
  },
  "aied-qe-book-2017": {
    why: "Shaffer's QE book gave a name and theory to a mixed interpretive-computational approach for making sense of rich human activity data.",
    takeaway: "Do not collapse QE into generic quantification; the ethnographic interpretation and validation loop is the point.",
    connection: "QE extends learning analytics toward thick data, discourse, culture, and human-centered interpretation."
  },
  "aied-icqe-2019": {
    why: "The first ICQE marks QE becoming a conference community rather than only a method associated with one lab or tool.",
    takeaway: "Show QE as a field-building moment: proceedings, reviewers, shared methods, and interdisciplinary cases.",
    connection: "It creates a community-level continuation of ENA and QE work inside the learning analytics orbit."
  },
  "aied-isqe-2024": {
    why: "ISQE and recurring ICQE events show QE maturing into a professional community with training, tools, webinars, and annual exchange.",
    takeaway: "Use QE when the goal is to model complex human activity while preserving interpretive accountability.",
    connection: "This links the AIED data branch to learning sciences, discourse analysis, ethnography, and human-centered AI."
  },
  "aied-genai-2023": {
    why: "LLMs make tutoring-like dialogue broadly available, but they also weaken the assumption that successful output means learner understanding.",
    takeaway: "Design for verification, source checking, task decomposition, reflection, and transfer rather than only fluent answers.",
    connection: "This is the immediate technical condition that makes Agentivism worth positioning in the tree."
  },
  "aied-agentivism-2026": {
    why: "Agentivism is strongest when shown as an AI-era synthesis: AIED supplies delegation, while agency theory asks whether capability remains with the learner.",
    takeaway: "Use AI support in ways that require learners to decide what to delegate, inspect the result, reconstruct the reasoning, and transfer with less help.",
    connection: "This node cross-links the AIED tree with the Social Cognitive & Agency lane rather than replacing either tradition."
  }
};

const state = {
  activeTheories: new Set(theories.map((theory) => theory.id)),
  selectedId: "miller-1956",
  selectedAiedId: "aied-scholar-1970",
  modalContext: "timeline",
  mapFocus: false,
  leftPanelCollapsed: false,
  rightPanelCollapsed: false,
  scale: 1
};

const minYear = 1890;
const maxYear = 2026;
const leftPad = 42;
const rightPad = 42;
const baseWidth = 2860;
const minScale = 0.78;
const maxScale = 1.45;
const zoomStep = 0.12;

const elements = {
  workbench: document.getElementById("workbench"),
  legendPanel: document.getElementById("legendPanel"),
  detailPanel: document.getElementById("detailPanel"),
  filterList: document.getElementById("filterList"),
  resetFilters: document.getElementById("resetFilters"),
  toggleLeftPanel: document.getElementById("toggleLeftPanel"),
  togglePanels: document.getElementById("togglePanels"),
  toggleRightPanel: document.getElementById("toggleRightPanel"),
  jumpAiedTree: document.getElementById("jumpAiedTree"),
  aiedTreePanel: document.getElementById("aiedTreePanel"),
  toggleAiedTree: document.getElementById("toggleAiedTree"),
  researcherStrip: document.getElementById("researcherStrip"),
  activeTheoryName: document.getElementById("activeTheoryName"),
  timelineViewport: document.getElementById("timelineViewport"),
  timelineCanvas: document.getElementById("timelineCanvas"),
  yearAxis: document.getElementById("yearAxis"),
  lanes: document.getElementById("lanes"),
  prevMilestone: document.getElementById("prevMilestone"),
  nextMilestone: document.getElementById("nextMilestone"),
  zoomIn: document.getElementById("zoomIn"),
  zoomOut: document.getElementById("zoomOut"),
  minimapTrack: document.getElementById("minimapTrack"),
  minimapWindow: document.getElementById("minimapWindow"),
  detailYear: document.getElementById("detailYear"),
  detailTheory: document.getElementById("detailTheory"),
  detailPortrait: document.getElementById("detailPortrait"),
  detailTitle: document.getElementById("detailTitle"),
  detailSummary: document.getElementById("detailSummary"),
  detailResearcher: document.getElementById("detailResearcher"),
  detailStudy: document.getElementById("detailStudy"),
  detailLens: document.getElementById("detailLens"),
  detailSource: document.getElementById("detailSource")
  ,
  aiedTree: document.getElementById("aiedTree"),
  milestoneDialog: document.getElementById("milestoneDialog"),
  modalClose: document.getElementById("modalClose"),
  modalYear: document.getElementById("modalYear"),
  modalTheory: document.getElementById("modalTheory"),
  modalPortrait: document.getElementById("modalPortrait"),
  modalTitle: document.getElementById("modalTitle"),
  modalSummary: document.getElementById("modalSummary"),
  modalStudy: document.getElementById("modalStudy"),
  modalWhy: document.getElementById("modalWhy"),
  modalTakeaway: document.getElementById("modalTakeaway"),
  modalConnection: document.getElementById("modalConnection"),
  modalSource: document.getElementById("modalSource"),
  modalPrev: document.getElementById("modalPrev"),
  modalNext: document.getElementById("modalNext")
};

function getTheory(id) {
  return theories.find((theory) => theory.id === id);
}

function getSelectedMilestone() {
  return milestones.find((milestone) => milestone.id === state.selectedId);
}

function getAiedBranch(id) {
  return aiedBranches.find((branch) => branch.id === id);
}

function getSelectedAiedMilestone() {
  return aiedMilestones.find((milestone) => milestone.id === state.selectedAiedId);
}

function yearToX(year) {
  const width = baseWidth * state.scale - leftPad - rightPad;
  return leftPad + ((year - minYear) / (maxYear - minYear)) * width;
}

function clampScale(scale) {
  return Math.min(maxScale, Math.max(minScale, Number(scale.toFixed(2))));
}

function setTimelineScale(nextScale, anchorClientX) {
  const previousScale = state.scale;
  const scale = clampScale(nextScale);
  if (scale === previousScale) return;

  const viewport = elements.timelineViewport;
  const rect = viewport.getBoundingClientRect();
  const anchorX =
    typeof anchorClientX === "number"
      ? Math.min(rect.width, Math.max(0, anchorClientX - rect.left))
      : viewport.clientWidth / 2;
  const previousCanvasWidth = baseWidth * previousScale;
  const anchorRatio = (viewport.scrollLeft + anchorX) / previousCanvasWidth;
  const previousTop = viewport.scrollTop;

  state.scale = scale;
  renderAll();

  requestAnimationFrame(() => {
    const nextCanvasWidth = baseWidth * state.scale;
    const maxScrollLeft = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
    viewport.scrollLeft = Math.min(maxScrollLeft, Math.max(0, anchorRatio * nextCanvasWidth - anchorX));
    viewport.scrollTop = previousTop;
    renderMinimap();
  });
}

function createPortrait(researcherId) {
  const person = researchers[researcherId] || researchers.richards;
  const portrait = document.createElement("div");
  portrait.className = `portrait ${person.photo ? "" : "no-photo"}`.trim();
  portrait.dataset.initials = person.initials;
  portrait.style.setProperty("--accent", person.color);
  portrait.style.setProperty("--photo-position", person.position || "50% 35%");
  portrait.style.setProperty("--photo-scale", person.scale || 1.16);
  portrait.style.setProperty("--photo-fit", person.fit || "cover");
  portrait.style.setProperty("--photo-filter", person.filter || "saturate(1.55) contrast(1.24) brightness(1.04) sepia(0.08)");

  if (person.photo) {
    const img = document.createElement("img");
    img.alt = `${person.name} portrait`;
    img.loading = "lazy";
    img.referrerPolicy = "no-referrer";
    img.src = person.photo;
    img.addEventListener("error", () => {
      portrait.classList.add("has-error");
    });
    portrait.appendChild(img);
  }

  const fallback = document.createElement("span");
  fallback.className = "portrait-fallback";
  fallback.textContent = person.initials;
  portrait.appendChild(fallback);

  return portrait;
}

function renderFilters() {
  elements.filterList.innerHTML = "";

  theories.forEach((theory) => {
    const button = document.createElement("button");
    button.className = `filter-chip ${state.activeTheories.has(theory.id) ? "" : "is-off"}`;
    button.type = "button";
    button.style.setProperty("--accent", theory.color);
    button.innerHTML = `
      <span class="filter-dot" style="background:${theory.color}"></span>
      <strong>${theory.name}</strong>
      <span>${theory.period}</span>
    `;
    button.addEventListener("click", () => {
      if (state.activeTheories.has(theory.id) && state.activeTheories.size > 1) {
        state.activeTheories.delete(theory.id);
      } else {
        state.activeTheories.add(theory.id);
      }
      renderAll();
    });
    elements.filterList.appendChild(button);
  });
}

function renderResearchers() {
  elements.researcherStrip.innerHTML = "";
  const selected = getSelectedMilestone();

  Object.entries(researchers).forEach(([id, person]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `researcher-button ${selected.researcher === id ? "is-active" : ""}`;
    button.style.setProperty("--accent", person.color);
    button.appendChild(createPortrait(id));

    const label = document.createElement("span");
    label.textContent = person.name;
    button.appendChild(label);

    button.addEventListener("click", () => {
      const match = milestones.find((milestone) => milestone.researcher === id);
      const aiedMatch = aiedMilestones.find((milestone) => milestone.researcher === id);
      if (match) {
        selectMilestone(match.id, true);
      } else if (aiedMatch) {
        openAiedPopup(aiedMatch.id);
      }
    });

    elements.researcherStrip.appendChild(button);
  });
}

function renderAxis() {
  elements.yearAxis.innerHTML = "";
  for (let year = 1890; year <= 2030; year += 10) {
    const tick = document.createElement("div");
    tick.className = "year-tick";
    tick.style.left = `${yearToX(Math.min(year, maxYear)) - leftPad}px`;
    tick.innerHTML = `<span>${year}</span>`;
    elements.yearAxis.appendChild(tick);
  }
}

function stopTimelineDrag(event) {
  event.stopPropagation();
}

function renderLanes() {
  elements.timelineCanvas.style.setProperty("--timeline-width", `${baseWidth * state.scale}px`);
  elements.timelineCanvas.style.setProperty("--lane-count", theories.length);
  elements.lanes.innerHTML = "";
  const slotGap = 96;
  const firstSlotTop = 74;

  theories.forEach((theory) => {
    const lane = document.createElement("div");
    lane.className = "lane";
    lane.style.setProperty("--accent", theory.color);

    const label = document.createElement("div");
    label.className = "lane-label";
    label.innerHTML = `<i></i><span>${theory.name}</span>`;
    lane.appendChild(label);

    const line = document.createElement("div");
    line.className = "lane-line";
    lane.appendChild(line);

    const laneMilestones = milestones
      .filter((milestone) => milestone.theory === theory.id)
      .sort((a, b) => a.year - b.year || a.title.localeCompare(b.title));

    const lastBySlot = [];
    const sameYearCounts = new Map();
    laneMilestones
      .forEach((milestone) => {
        const person = researchers[milestone.researcher];
        const sameYearIndex = sameYearCounts.get(milestone.year) || 0;
        sameYearCounts.set(milestone.year, sameYearIndex + 1);
        const x = yearToX(milestone.year) + sameYearIndex * 166;
        let slot = lastBySlot.findIndex((lastX) => x - lastX > 176);
        if (slot === -1) slot = lastBySlot.length;
        lastBySlot[slot] = x;
        const node = document.createElement("button");
        node.type = "button";
        node.className = `milestone ${state.selectedId === milestone.id ? "is-selected" : ""} ${
          state.activeTheories.has(theory.id) ? "" : "is-dimmed"
        }`;
        node.dataset.milestoneId = milestone.id;
        node.style.left = `${x}px`;
        node.style.top = `${firstSlotTop + slot * slotGap}px`;
        node.style.setProperty("--accent", theory.color);
        node.innerHTML = `
          <span class="year">${milestone.year}</span>
          <strong>${milestone.title}</strong>
          <small>${person.name}</small>
        `;
        node.addEventListener("pointerdown", stopTimelineDrag);
        node.addEventListener("pointerup", stopTimelineDrag);
        node.addEventListener("click", (event) => {
          event.stopPropagation();
          openMilestonePopup(milestone.id);
        });
        lane.appendChild(node);
      });

    const slotCount = Math.max(2, lastBySlot.length);
    lane.style.height = `${148 + (slotCount - 1) * slotGap}px`;
    elements.lanes.appendChild(lane);
  });
}

function renderAiedTree() {
  if (!elements.aiedTree) return;
  elements.aiedTree.innerHTML = "";

  aiedBranches.forEach((branch) => {
    const branchEl = document.createElement("section");
    branchEl.className = "aied-branch";
    branchEl.style.setProperty("--accent", branch.color);

    const heading = document.createElement("div");
    heading.className = "aied-branch-heading";
    heading.innerHTML = `
      <span>${branch.shortName}</span>
      <h3>${branch.name}</h3>
      <p>${branch.thesis}</p>
    `;
    branchEl.appendChild(heading);

    const nodeList = document.createElement("div");
    nodeList.className = "aied-node-list";

    aiedMilestones
      .filter((milestone) => milestone.branch === branch.id)
      .sort((a, b) => a.year - b.year || a.title.localeCompare(b.title))
      .forEach((milestone) => {
        const person = researchers[milestone.researcher];
        const node = document.createElement("button");
        node.type = "button";
        node.className = `aied-node ${state.selectedAiedId === milestone.id ? "is-selected" : ""}`;
        node.style.setProperty("--accent", branch.color);
        node.appendChild(createPortrait(milestone.researcher));

        const copy = document.createElement("span");
        copy.className = "aied-node-copy";
        copy.innerHTML = `
          <small>${milestone.year}</small>
          <strong>${milestone.title}</strong>
          <em>${person.name}</em>
        `;
        node.appendChild(copy);
        node.addEventListener("click", () => openAiedPopup(milestone.id));
        nodeList.appendChild(node);
      });

    branchEl.appendChild(nodeList);
    elements.aiedTree.appendChild(branchEl);
  });
}

function renderDetail() {
  const milestone = getSelectedMilestone();
  const theory = getTheory(milestone.theory);
  const person = researchers[milestone.researcher];

  elements.detailYear.textContent = milestone.year;
  elements.detailTheory.textContent = theory.name;
  elements.detailTitle.textContent = milestone.title;
  elements.detailSummary.textContent = milestone.summary;
  elements.detailResearcher.textContent = person.name;
  elements.detailStudy.textContent = milestone.study;
  elements.detailLens.textContent = theory.lens;
  elements.detailSource.href = milestone.source;
  elements.detailPortrait.innerHTML = "";
  elements.detailPortrait.appendChild(createPortrait(milestone.researcher));

  const activeNames = theories
    .filter((theoryItem) => state.activeTheories.has(theoryItem.id))
    .map((theoryItem) => theoryItem.name);

  elements.activeTheoryName.textContent =
    activeNames.length === theories.length ? "All theories" : activeNames.join(", ");
}

function renderModal() {
  const milestone = getSelectedMilestone();
  const theory = getTheory(milestone.theory);
  const explanation = milestoneExplanations[milestone.id] || {};

  renderModalContent(milestone, theory.name, theory.lens, explanation);
}

function setTypingModalTitle(title) {
  elements.modalTitle.classList.remove("is-typing");
  elements.modalTitle.removeAttribute("aria-label");
  elements.modalTitle.innerHTML = "";

  elements.modalTitle.setAttribute("aria-label", title);
  [...title].forEach((char, index) => {
    const span = document.createElement("span");
    span.className = char === " " ? "typing-letter typing-space" : "typing-letter";
    span.style.setProperty("--letter-index", index);
    span.textContent = char;
    elements.modalTitle.appendChild(span);
  });
  elements.modalTitle.style.setProperty("--modal-title-steps", Math.max(12, title.length));

  requestAnimationFrame(() => {
    elements.modalTitle.classList.add("is-typing");
  });
}

function renderModalContent(item, groupName, fallbackLens, explanation) {
  const person = researchers[item.researcher];

  elements.modalYear.textContent = item.year;
  elements.modalTheory.textContent = groupName;
  setTypingModalTitle(item.title);
  elements.modalSummary.textContent = item.summary;
  elements.modalStudy.textContent = `${item.study} Researcher: ${person.name}.`;
  elements.modalWhy.textContent = explanation.why || fallbackLens;
  elements.modalTakeaway.textContent =
    explanation.takeaway ||
    "Use this milestone as a lens for matching learning activities to the kind of capability you want learners to build.";
  elements.modalConnection.textContent =
    explanation.connection ||
    "This event connects the timeline lane to adjacent learning theories and later instructional designs.";
  elements.modalSource.href = item.source;
  elements.modalPortrait.innerHTML = "";
  elements.modalPortrait.appendChild(createPortrait(item.researcher));
}

function renderAiedModal() {
  const milestone = getSelectedAiedMilestone();
  const branch = getAiedBranch(milestone.branch);
  const explanation = aiedExplanations[milestone.id] || {};

  renderModalContent(milestone, branch.name, branch.thesis, explanation);
}

function openMilestonePopup(id) {
  state.modalContext = "timeline";
  selectMilestone(id, false);
  renderModal();
  if (typeof elements.milestoneDialog.showModal === "function") {
    elements.milestoneDialog.showModal();
  } else {
    elements.milestoneDialog.setAttribute("open", "");
  }
}

function openAiedPopup(id) {
  state.modalContext = "aied";
  state.selectedAiedId = id;
  setAiedTreeExpanded(true, false);
  renderAiedTree();
  renderAiedModal();
  if (typeof elements.milestoneDialog.showModal === "function") {
    elements.milestoneDialog.showModal();
  } else {
    elements.milestoneDialog.setAttribute("open", "");
  }
}

function setAiedTreeExpanded(expanded, shouldScroll) {
  elements.aiedTree.hidden = !expanded;
  elements.aiedTreePanel.classList.toggle("is-collapsed", !expanded);
  elements.toggleAiedTree.setAttribute("aria-expanded", String(expanded));
  elements.toggleAiedTree.textContent = expanded ? "Collapse tree" : "Expand tree";

  if (expanded) {
    renderAiedTree();
  }

  if (shouldScroll) {
    const target = expanded ? elements.aiedTreePanel : elements.aiedTreePanel;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function closeMilestonePopup() {
  elements.milestoneDialog.close();
}

function visibleMilestones() {
  return milestones
    .filter((milestone) => state.activeTheories.has(milestone.theory))
    .sort((a, b) => a.year - b.year || a.title.localeCompare(b.title));
}

function selectMilestone(id, scrollToNode) {
  state.selectedId = id;
  const milestone = getSelectedMilestone();
  if (!state.activeTheories.has(milestone.theory)) {
    state.activeTheories.add(milestone.theory);
  }
  renderAll();

  if (scrollToNode) {
    const selectedNode = elements.lanes.querySelector(`[data-milestone-id="${milestone.id}"]`);
    const selectedTop =
      selectedNode && selectedNode.offsetParent
        ? elements.lanes.offsetTop + selectedNode.offsetParent.offsetTop + selectedNode.offsetTop
        : elements.timelineViewport.scrollTop;

    elements.timelineViewport.scrollTo({
      left: Math.max(0, yearToX(milestone.year) - elements.timelineViewport.clientWidth * 0.48),
      top: Math.max(0, selectedTop - 92),
      behavior: "smooth"
    });
  }
}

function stepMilestone(direction) {
  const list = visibleMilestones();
  const currentIndex = list.findIndex((milestone) => milestone.id === state.selectedId);
  const nextIndex = currentIndex === -1 ? 0 : (currentIndex + direction + list.length) % list.length;
  selectMilestone(list[nextIndex].id, true);
  if (elements.milestoneDialog.open && state.modalContext === "timeline") {
    renderModal();
  }
}

function stepAiedMilestone(direction) {
  const list = aiedMilestones.slice().sort((a, b) => a.year - b.year || a.title.localeCompare(b.title));
  const currentIndex = list.findIndex((milestone) => milestone.id === state.selectedAiedId);
  const nextIndex = currentIndex === -1 ? 0 : (currentIndex + direction + list.length) % list.length;
  state.selectedAiedId = list[nextIndex].id;
  renderAiedTree();
  renderAiedModal();
}

function stepModal(direction) {
  if (state.modalContext === "aied") {
    stepAiedMilestone(direction);
  } else {
    stepMilestone(direction);
  }
}

function renderMinimap() {
  const viewport = elements.timelineViewport;
  const canvasWidth = baseWidth * state.scale;
  const trackWidth = elements.minimapTrack.clientWidth || 1;
  const ratio = viewport.clientWidth / canvasWidth;
  const leftRatio = viewport.scrollLeft / canvasWidth;
  elements.minimapWindow.style.width = `${Math.max(42, trackWidth * ratio)}px`;
  elements.minimapWindow.style.left = `${trackWidth * leftRatio}px`;
}

function renderPanelLayout() {
  const leftHidden = state.mapFocus || state.leftPanelCollapsed;
  const rightHidden = state.mapFocus || state.rightPanelCollapsed;

  document.body.classList.toggle("is-map-focus", state.mapFocus);
  elements.workbench.classList.toggle("is-map-focus", state.mapFocus);
  elements.workbench.classList.toggle("is-left-collapsed", leftHidden);
  elements.workbench.classList.toggle("is-right-collapsed", rightHidden);
  elements.legendPanel.hidden = leftHidden;
  elements.detailPanel.hidden = rightHidden;
  elements.toggleLeftPanel.setAttribute("aria-pressed", String(leftHidden));
  elements.toggleLeftPanel.textContent = leftHidden ? ">|" : "|<";
  elements.toggleLeftPanel.title = leftHidden ? "Show left panel" : "Collapse left panel";
  elements.toggleLeftPanel.setAttribute("aria-label", leftHidden ? "Show left panel" : "Collapse left panel");
  elements.toggleRightPanel.setAttribute("aria-pressed", String(rightHidden));
  elements.toggleRightPanel.textContent = rightHidden ? "|<" : ">|";
  elements.toggleRightPanel.title = rightHidden ? "Show right panel" : "Collapse right panel";
  elements.toggleRightPanel.setAttribute("aria-label", rightHidden ? "Show right panel" : "Collapse right panel");
  elements.togglePanels.setAttribute("aria-pressed", String(state.mapFocus));
  elements.togglePanels.textContent = state.mapFocus ? "Show panels" : "Map view";
}

function renderAll() {
  renderPanelLayout();
  renderFilters();
  renderResearchers();
  renderAxis();
  renderLanes();
  renderAiedTree();
  renderDetail();
  requestAnimationFrame(renderMinimap);
}

function setupDragging() {
  let isDown = false;
  let startX = 0;
  let startScroll = 0;

  elements.timelineViewport.addEventListener("pointerdown", (event) => {
    isDown = true;
    startX = event.clientX;
    startScroll = elements.timelineViewport.scrollLeft;
    elements.timelineViewport.setPointerCapture(event.pointerId);
  });

  elements.timelineViewport.addEventListener("pointermove", (event) => {
    if (!isDown) return;
    const dx = event.clientX - startX;
    elements.timelineViewport.scrollLeft = startScroll - dx;
  });

  elements.timelineViewport.addEventListener("pointerup", () => {
    isDown = false;
  });

  elements.timelineViewport.addEventListener("pointercancel", () => {
    isDown = false;
  });

  elements.timelineViewport.addEventListener("scroll", renderMinimap, { passive: true });
}

function setupMinimap() {
  function moveToClientX(clientX) {
    const rect = elements.minimapTrack.getBoundingClientRect();
    const pct = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    const maxScroll = elements.timelineViewport.scrollWidth - elements.timelineViewport.clientWidth;
    elements.timelineViewport.scrollLeft = maxScroll * pct;
  }

  let dragging = false;

  elements.minimapTrack.addEventListener("pointerdown", (event) => {
    dragging = true;
    elements.minimapTrack.setPointerCapture(event.pointerId);
    moveToClientX(event.clientX);
  });

  elements.minimapTrack.addEventListener("pointermove", (event) => {
    if (dragging) moveToClientX(event.clientX);
  });

  elements.minimapTrack.addEventListener("pointerup", () => {
    dragging = false;
  });
}

function setupKeyboard() {
  elements.timelineViewport.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      stepMilestone(1);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      stepMilestone(-1);
    }
  });
}

function setupWheelZoom() {
  elements.timelineViewport.addEventListener(
    "wheel",
    (event) => {
      if (!event.ctrlKey) return;
      event.preventDefault();
      const direction = event.deltaY < 0 ? 1 : -1;
      setTimelineScale(state.scale + direction * zoomStep, event.clientX);
    },
    { passive: false }
  );
}

function setupControls() {
  elements.prevMilestone.addEventListener("click", () => stepMilestone(-1));
  elements.nextMilestone.addEventListener("click", () => stepMilestone(1));
  elements.toggleLeftPanel.addEventListener("click", () => {
    state.leftPanelCollapsed = !state.leftPanelCollapsed;
    renderPanelLayout();
    requestAnimationFrame(renderMinimap);
  });
  elements.togglePanels.addEventListener("click", () => {
    if (state.mapFocus) {
      state.mapFocus = false;
      state.leftPanelCollapsed = false;
      state.rightPanelCollapsed = false;
    } else {
      state.mapFocus = true;
    }
    renderPanelLayout();
    requestAnimationFrame(renderMinimap);
  });
  elements.toggleRightPanel.addEventListener("click", () => {
    state.rightPanelCollapsed = !state.rightPanelCollapsed;
    renderPanelLayout();
    requestAnimationFrame(renderMinimap);
  });
  elements.modalPrev.addEventListener("click", () => stepModal(-1));
  elements.modalNext.addEventListener("click", () => stepModal(1));
  elements.modalClose.addEventListener("click", closeMilestonePopup);
  elements.milestoneDialog.addEventListener("click", (event) => {
    if (event.target === elements.milestoneDialog) closeMilestonePopup();
  });
  elements.jumpAiedTree.addEventListener("click", () => {
    setAiedTreeExpanded(true, true);
  });
  elements.toggleAiedTree.addEventListener("click", () => {
    setAiedTreeExpanded(elements.aiedTree.hidden, true);
  });
  elements.resetFilters.addEventListener("click", () => {
    state.activeTheories = new Set(theories.map((theory) => theory.id));
    renderAll();
  });
  elements.zoomIn.addEventListener("click", () => {
    setTimelineScale(state.scale + zoomStep);
  });
  elements.zoomOut.addEventListener("click", () => {
    setTimelineScale(state.scale - zoomStep);
  });
  window.addEventListener("resize", renderMinimap);
}

setupDragging();
setupMinimap();
setupKeyboard();
setupWheelZoom();
setupControls();
renderAll();
selectMilestone(state.selectedId, true);
