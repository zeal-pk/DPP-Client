let customerMaster = [
  {
    id: "CUS-001",
    name: "D-Mart",
    logoUrl:
      "https://companieslogo.com/img/orig/DMART.NS-6f885d00.png?t=1599629043",
    descreption:
      "DMart is a one-stop supermarket chain that aims to offer customers a wide range of basic home and personal products under one roof.",
    addressL1: "Grand Square Mall",
    addressL2: "46, 1st Main Rd",
    city: "Chennai",
    state: "TamilNadu",
    country: "India",
    products: [
      {
        productId: "P001",
        templateId: "T001",
      },
      {
        productId: "P002",
        templateId: "T002",
      },
      {
        productId: "P003",
        templateId: "T003",
      },
    ],
  },
  {
    id: "CUS-002",
    name: "Apple",
    logoUrl:
      "https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png",
    descreption:
      "An American multinational technology company headquartered in Cupertino, California, in Silicon Valley.",
    addressL1: "Apple Park",
    addressL2: "Cupertino",
    city: "California",
    state: "",
    country: "USA",
    products: [
      {
        productId: "P004",
        templateId: "T004",
      },
      {
        productId: "P005",
        templateId: "T005",
      },
      {
        productId: "P006",
        templateId: "T006",
      },
    ],
  },
  {
    id: "CUS-003",
    name: "Tereos",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/98/Logo_Tereos_2016.png",
    descreption:
      "A cooperative conglomerate, primarily active in the processed agricultural raw materials, in particular sugar, alcohol and starch markets.",
    addressL1: "Rue De Senlis",
    addressL2: "Moussy Le Vieux",
    city: "Paris",
    state: "Ile De France",
    country: "France",
    products: [
      {
        productId: "P007",
        templateId: "T007",
      },
      {
        productId: "P008",
        templateId: "T008",
      },
      {
        productId: "P009",
        templateId: "T009",
      },
    ],
  },
  {
    id: "CUS-004",
    name: "Royal Enfield",
    logoUrl:
      "https://e7.pngegg.com/pngimages/874/996/png-clipart-royal-enfield-logo-enfield-cycle-co-ltd-motorcycle-logo-royal-enfield-bicycle-royal-emblem-text.png",
    descreption:
      "The Royal Enfield brand, including its original English heritage, is the oldest global motorcycle brand in continuous production. ",
    addressL1: "No 624, Tiruvottiyur High Road",
    addressL2: "Tiruvottiyur",
    city: "Chennai",
    state: "TamilNadu",
    country: "India",
    products: [
      {
        productId: "P010",
        templateId: "T010",
      },
      {
        productId: "P011",
        templateId: "T011",
      },
      {
        productId: "P012",
        templateId: "T012",
      },
    ],
  },
  {
    id: "CUS-005",
    name: "Louis Vuitton",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/cb/Louis_Vuitton_LV_logo.png",
    descreption:
      "Louis Vuitton Malletier, commonly known as Louis Vuitton, is a French luxury fashion house and company founded in 1854 by Louis Vuitton.",
    addressL1: "101 Av",
    addressL2: "Champ-Élysées",
    city: "Paris",
    state: "TamilNadu",
    country: "France",
    products: [
      {
        productId: "P013",
        templateId: "T013",
      },
      {
        productId: "P014",
        templateId: "T014",
      },
      {
        productId: "P015",
        templateId: "T015",
      },
    ],
  },
];

let productMaster = {
  id: "P001",
  name: "Electric Kettle",
  category: "Electronics",
  description:
    "Uses electricity to power an integrated heating element, rather than using a stovetop burner to heat water",
  properties: {
    length: "20 cm",
    width: "20 cm",
    height: "60 cm",
    weight: "100 kg",
    volume: "24,000 cm^3",
  },
  rawMaterial: [
    {
      material: "Iron",
      composition: 72,
      origin: "Chattisgarh, India",
      manufacturerStatement:
        "100% pure certified iron ore extracted from the iron ore mines of Chattisgarh.",
      recyclable: true,
    },
    {
      material: "Chromium",
      composition: 18,
      origin: "Coimbatore, India",
      manufacturerStatement:
        "100% pure certified chromium ore extracted from the iron ore mines of Coimbatore.",
      recyclable: true,
    },
    {
      material: "Nickel",
      composition: 10,
      origin: "Pune, India",
      manufacturerStatement:
        "100% pure certified nickel ore extracted from the iron ore mines of Pune.",
      recyclable: false,
    },
  ],
};

let templateMaster = {
  id: "T001",
  productTab1: [
    {
      fieldNo: "001",
      fieldName: "Length",
    },
    {
      fieldNo: "002",
      fieldName: "Width",
    },
    {
      fieldNo: "003",
      fieldName: "Height",
    },
  ],
  productTab2: [
    {
      fieldNo: "001",
      fieldName: "Length",
    },
    {
      fieldNo: "002",
      fieldName: "Width",
    },
    {
      fieldNo: "003",
      fieldName: "Height",
    },
  ],
};
