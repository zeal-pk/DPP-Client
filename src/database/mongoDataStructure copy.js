let customerMaster = {
  id: "12345",
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
      productId: "P001",
      templateId: "T001",
    },
  ],
};

let productMaster = [
  {
    id: "P001",
    name: "Electric Kettle",
    category: "Electronics",
    imageUrl:
      "https://myborosil.com/cdn/shop/products/my-borosil-electric-kettles-electric-glass-kettle-1-8l-30552715296906.jpg?v=1677191196",
    description:
      "Uses electricity to power an integrated heating element, rather than using a stovetop burner to heat water",
    properties: {
      length: "20 cm",
      width: "20 cm",
      height: "60 cm",
      weight: "100 kg",
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
  },
  {
    id: "P002",
    name: "Induction Stove",
    category: "Kitchen Items",
    imageUrl:
      "https://www.jiomart.com/images/product/original/rvkasvxcyi/glen-2000w-plastic-open-induction-cooker-with-touch-sensor-control-black-3081-product-images-orvkasvxcyi-p592607921-0-202207150729.jpg?im=Resize=(420,420)",
    description:
      "Allows high power and very rapid increases in temperature to be achieved: changes in heat settings are instantaneous.",
    properties: {
      length: "10 cm",
      width: "40 cm",
      height: "20 cm",
      weight: "2 kg",
    },
    rawMaterial: [
      {
        material: "Iron",
        composition: 90,
        origin: "Bihar, India",
        manufacturerStatement:
          "100% pure certified iron ore extracted from the iron ore mines of Chattisgarh.",
        recyclable: true,
      },
      {
        material: "Chromium",
        composition: 5,
        origin: "Mumbai, India",
        manufacturerStatement:
          "100% pure certified chromium ore extracted from the iron ore mines of Coimbatore.",
        recyclable: true,
      },
      {
        material: "Nickel",
        composition: 3,
        origin: "Jaipur, India",
        manufacturerStatement:
          "100% pure certified nickel ore extracted from the iron ore mines of Pune.",
        recyclable: false,
      },
    ],
  },
  {
    id: "P003",
    name: "Water Heater",
    category: "Electronics",
    imageUrl:
      "https://img.etimg.com/thumb/msid-100757490,height-480,imgsize-14944,resizemode-4/industry/renewables/using-electric-water-heaters-to-store-renewable-energy-could-do-the-work-of-2-million-home-batteries-and-save-us-billions.jpg",
    description:
      "A domestic water heating appliance that uses a hot water storage tank to maximize water heating capacity and provide instantaneous delivery of hot water.",
    properties: {
      length: "500 cm",
      width: "400 cm",
      height: "7000 cm",
      weight: "10 kg",
    },
    rawMaterial: [
      {
        material: "Iron",
        composition: 50,
        origin: "Bihar, India",
        manufacturerStatement:
          "100% pure certified iron ore extracted from the iron ore mines of Bihar.",
        recyclable: true,
      },
      {
        material: "Copper",
        composition: 40,
        origin: "Mumbai, India",
        manufacturerStatement:
          "100% pure certified copper ore extracted from the iron ore mines of Mumbai.",
        recyclable: true,
      },
      {
        material: "Molybdenum",
        composition: 10,
        origin: "Jaipur, India",
        manufacturerStatement:
          "100% pure certified molybdenum ore extracted from the iron ore mines of Jaipur.",
        recyclable: false,
      },
    ],
  },
  {
    id: "P004",
    name: "Ceiling Fan",
    category: "Electronics",
    imageUrl:
      "https://images-cdn.ubuy.co.in/63ec43edec5ffb29273556a3-xbibi-52-ceiling-fans-with-light.jpg",
    description:
      "mounted on the ceiling of a room or space, usually electrically powered, that uses hub-mounted rotating blades to circulate air. They cool people effectively by increasing air speed.",
    properties: {
      length: "50 cm",
      width: "100 cm",
      height: "10 cm",
      weight: "1 kg",
    },
    rawMaterial: [
      {
        material: "Carbon Fiber",
        composition: 80,
        origin: "Gujarath, India",
        manufacturerStatement:
          "100% pure certified carbon extracted from char coal.",
        recyclable: true,
      },
      {
        material: "Chromium",
        composition: 10,
        origin: "Mumbai, India",
        manufacturerStatement:
          "100% pure certified chromium ore extracted from the iron ore mines of Coimbatore.",
        recyclable: true,
      },
      {
        material: "Iron",
        composition: 10,
        origin: "Jaipur, India",
        manufacturerStatement:
          "100% pure certified nickel ore extracted from the iron ore mines of Pune.",
        recyclable: false,
      },
    ],
  },
  {
    id: "P005",
    name: "Mixie",
    category: "Kitchen Items",
    imageUrl:
      "https://m.media-amazon.com/images/I/71lMQTi5Z-L._AC_UF894,1000_QL80_.jpg",
    description:
      "A kitchen device that uses a gear-driven mechanism to rotate a set of 'beaters' in a bowl containing the food or liquids to be prepared by mixing them.",
    properties: {
      length: "10 cm",
      width: "40 cm",
      height: "20 cm",
      weight: "2 kg",
    },
    rawMaterial: [
      {
        material: "Iron",
        composition: 90,
        origin: "Bihar, India",
        manufacturerStatement:
          "100% pure certified iron ore extracted from the iron ore mines of Chattisgarh.",
        recyclable: true,
      },
      {
        material: "Chromium",
        composition: 5,
        origin: "Mumbai, India",
        manufacturerStatement:
          "100% pure certified chromium ore extracted from the iron ore mines of Coimbatore.",
        recyclable: true,
      },
      {
        material: "Nickel",
        composition: 3,
        origin: "Jaipur, India",
        manufacturerStatement:
          "100% pure certified nickel ore extracted from the iron ore mines of Pune.",
        recyclable: false,
      },
    ],
  },
  {
    id: "P006",
    name: "Royal Enfield Thunderbird 350",
    category: "Motor Bike",
    imageUrl:
      "https://assets.otocapital.in/prod/roving-red-royal-enfield-thunderbird-350x-image.jpeg",
    description:
      "The Royal Enfield Thunderbird is a cruiser style motorcycle produced by Royal Enfield Motors in India.",
    properties: {
      length: "4000 cm",
      width: "1000 cm",
      height: "2000 cm",
      weight: "200 kg",
    },
    rawMaterial: [
      {
        material: "Iron",
        composition: 10,
        origin: "Maharashtra, India",
        manufacturerStatement:
          "100% pure certified iron ore extracted from the iron ore mines of Chattisgarh.",
        recyclable: true,
      },
      {
        material: "Chromium",
        composition: 70,
        origin: "Cochin, India",
        manufacturerStatement:
          "100% pure certified chromium ore extracted from the iron ore mines of Coimbatore.",
        recyclable: true,
      },
      {
        material: "Nickel",
        composition: 20,
        origin: "Manipur, India",
        manufacturerStatement:
          "100% pure certified nickel ore extracted from the iron ore mines of Pune.",
        recyclable: false,
      },
      {
        material: "Molybdenum",
        composition: 2,
        origin: "Tirupathi, India",
        manufacturerStatement:
          "100% pure certified nickel ore extracted from the iron ore mines of Pune.",
        recyclable: false,
      },
    ],
  },
  {
    id: "P007",
    name: "Royal Enfield Himalayan 450",
    category: "Motor Bike",
    imageUrl:
      "https://www.rushlane.com/wp-content/uploads/2022/07/royal-enfield-himalayan-new-colours-launch-1-1200x675.jpg",
    description:
      "An adventure touring motorcycle manufactured by Royal Enfield. It was revealed in February 2015 and launched in early 2016.",
    properties: {
      length: "5000 cm",
      width: "2000 cm",
      height: "3000 cm",
      weight: "190 kg",
    },
    rawMaterial: [
      {
        material: "Iron",
        composition: 70,
        origin: "Maharashtra, India",
        manufacturerStatement:
          "100% pure certified iron ore extracted from the iron ore mines of Chattisgarh.",
        recyclable: true,
      },
      {
        material: "Chromium",
        composition: 20,
        origin: "Cochin, India",
        manufacturerStatement:
          "100% pure certified chromium ore extracted from the iron ore mines of Coimbatore.",
        recyclable: true,
      },
      {
        material: "Nickel",
        composition: 5,
        origin: "Manipur, India",
        manufacturerStatement:
          "100% pure certified nickel ore extracted from the iron ore mines of Pune.",
        recyclable: false,
      },
      {
        material: "Molybdenum",
        composition: 5,
        origin: "Tirupathi, India",
        manufacturerStatement:
          "100% pure certified nickel ore extracted from the iron ore mines of Pune.",
        recyclable: false,
      },
    ],
  },
  {
    id: "P008",
    name: "Royal Enfield Classic 350",
    category: "Motor Bike",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Royal_Enfield_Classic_350_%282017_Model_Year%29.jpg/800px-Royal_Enfield_Classic_350_%282017_Model_Year%29.jpg",
    description:
      "The first generation Classic 350 and the Classic 500 feature the new unit construction engine in their 350cc and 500cc variants respectively.",
    properties: {
      length: "4000 cm",
      width: "1000 cm",
      height: "1000 cm",
      weight: "250 kg",
    },
    rawMaterial: [
      {
        material: "Iron",
        composition: 90,
        origin: "Maharashtra, India",
        manufacturerStatement:
          "100% pure certified iron ore extracted from the iron ore mines of Chattisgarh.",
        recyclable: true,
      },
      {
        material: "Chromium",
        composition: 2,
        origin: "Cochin, India",
        manufacturerStatement:
          "100% pure certified chromium ore extracted from the iron ore mines of Coimbatore.",
        recyclable: true,
      },
      {
        material: "Nickel",
        composition: 5,
        origin: "Manipur, India",
        manufacturerStatement:
          "100% pure certified nickel ore extracted from the iron ore mines of Pune.",
        recyclable: false,
      },
      {
        material: "Molybdenum",
        composition: 3,
        origin: "Tirupathi, India",
        manufacturerStatement:
          "100% pure certified nickel ore extracted from the iron ore mines of Pune.",
        recyclable: false,
      },
    ],
  },
  {
    id: "P009",
    name: "Royal Enfield Himalayan 450",
    category: "Motor Bike",
    imageUrl:
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/51245/meteor-350-right-front-three-quarter.jpeg",
    description:
      "The 349cc long-stroke single-cylinder engine is now air and oil-cooled and the traditional pushrods were replaced by an overhead cam.",
    properties: {
      length: "4000 cm",
      width: "3000 cm",
      height: "2000 cm",
      weight: "200 kg",
    },
    rawMaterial: [
      {
        material: "Iron",
        composition: 60,
        origin: "Maharashtra, India",
        manufacturerStatement:
          "100% pure certified iron ore extracted from the iron ore mines of Chattisgarh.",
        recyclable: true,
      },
      {
        material: "Chromium",
        composition: 20,
        origin: "Cochin, India",
        manufacturerStatement:
          "100% pure certified chromium ore extracted from the iron ore mines of Coimbatore.",
        recyclable: true,
      },
      {
        material: "Nickel",
        composition: 10,
        origin: "Manipur, India",
        manufacturerStatement:
          "100% pure certified nickel ore extracted from the iron ore mines of Pune.",
        recyclable: false,
      },
      {
        material: "Molybdenum",
        composition: 10,
        origin: "Tirupathi, India",
        manufacturerStatement:
          "100% pure certified nickel ore extracted from the iron ore mines of Pune.",
        recyclable: false,
      },
    ],
  },
  {
    id: "P0010",
    name: "iPhone 15 Pro",
    category: "Electronics",
    imageUrl:
      "https://cdn.easycep.com/assets/_blog/img/post/2023/09/iphone-15-ozellikleri-ne-zaman-turkiye-ye-gelecek-360.webp?v=1.2.41",
    description:
      "One of the two largest smartphone platforms in the world alongside Android, and is a large part of the luxury market.",
    properties: {
      length: "10 cm",
      width: "6 cm",
      height: "15 cm",
      weight: "0.5 kg",
    },
    rawMaterial: [
      {
        material: "Ceramic",
        composition: 70,
        origin: "Bihar, India",
        manufacturerStatement:
          "100% pure certified iron ore extracted from the iron ore mines of Chattisgarh.",
        recyclable: true,
      },
      {
        material: "Glass",
        composition: 10,
        origin: "Mumbai, India",
        manufacturerStatement:
          "100% pure certified chromium ore extracted from the iron ore mines of Coimbatore.",
        recyclable: true,
      },
      {
        material: "Stainless Steel",
        composition: 20,
        origin: "Jaipur, India",
        manufacturerStatement:
          "100% pure certified nickel ore extracted from the iron ore mines of Pune.",
        recyclable: false,
      },
    ],
  },
  {
    id: "P011",
    name: "iPhone 14 Pro Max",
    category: "Electronics",
    imageUrl:
      "https://cdn.easycep.com/assets/_blog/img/post/2023/09/iphone-15-ozellikleri-ne-zaman-turkiye-ye-gelecek-360.webp?v=1.2.41",
    description:
      "One of the two largest smartphone platforms in the world alongside Android, and is a large part of the luxury market.",
    properties: {
      length: "10 cm",
      width: "8 cm",
      height: "17 cm",
      weight: "0.7 kg",
    },
    rawMaterial: [
      {
        material: "Ceramic",
        composition: 50,
        origin: "Bihar, India",
        manufacturerStatement:
          "100% pure certified iron ore extracted from the iron ore mines of Chattisgarh.",
        recyclable: true,
      },
      {
        material: "Glass",
        composition: 20,
        origin: "Mumbai, India",
        manufacturerStatement:
          "100% pure certified chromium ore extracted from the iron ore mines of Coimbatore.",
        recyclable: true,
      },
      {
        material: "Stainless Steel",
        composition: 30,
        origin: "Jaipur, India",
        manufacturerStatement:
          "100% pure certified nickel ore extracted from the iron ore mines of Pune.",
        recyclable: false,
      },
    ],
  },
  {
    id: "P012",
    name: "MacBook Pro",
    category: "Electronics",
    imageUrl:
      "https://www.livemint.com/lm-img/img/2023/10/13/600x338/APPLE-CONFERENCE--13_1685986011096_1697198198282.JPG",
    description:
      "The original MacBook Pro used a similar design to the PowerBook G4, but replaced the PowerPC G4 chips with Intel Core processors, added a webcam, and introduced the MagSafe power connector. ",
    properties: {
      length: "30 cm",
      width: "15 cm",
      height: "2 cm",
      weight: "1.5 kg",
    },
    rawMaterial: [
      {
        material: "Aluminium",
        composition: 50,
        origin: "Bihar, India",
        manufacturerStatement:
          "100% pure certified iron ore extracted from the iron ore mines of Chattisgarh.",
        recyclable: true,
      },
      {
        material: "Glass",
        composition: 10,
        origin: "Mumbai, India",
        manufacturerStatement:
          "100% pure certified chromium ore extracted from the iron ore mines of Coimbatore.",
        recyclable: true,
      },
      {
        material: "Stainless Steel",
        composition: 40,
        origin: "Jaipur, India",
        manufacturerStatement:
          "100% pure certified nickel ore extracted from the iron ore mines of Pune.",
        recyclable: false,
      },
    ],
  },
  {
    id: "P013",
    name: "Samsung Watch 3",
    category: "Electronics",
    imageUrl:
      "https://www.zdnet.com/a/img/resize/bac48d3fbf515fadef922562b8a525b51ad2904f/2023/07/25/f8cd1253-86ee-4811-b93a-29e74b8f66a2/galaxy-watch-6.jpg?auto=webp&fit=crop&height=675&width=1200",
    description:
      "The original MacBook Pro used a similar design to the PowerBook G4, but replaced the PowerPC G4 chips with Intel Core processors, added a webcam, and introduced the MagSafe power connector. ",
    properties: {
      length: "30 cm",
      width: "15 cm",
      height: "2 cm",
      weight: "1.5 kg",
    },
    rawMaterial: [
      {
        material: "Aluminium",
        composition: 50,
        origin: "Bihar, India",
        manufacturerStatement:
          "100% pure certified iron ore extracted from the iron ore mines of Chattisgarh.",
        recyclable: true,
      },
      {
        material: "Glass",
        composition: 10,
        origin: "Mumbai, India",
        manufacturerStatement:
          "100% pure certified chromium ore extracted from the iron ore mines of Coimbatore.",
        recyclable: true,
      },
      {
        material: "Stainless Steel",
        composition: 40,
        origin: "Jaipur, India",
        manufacturerStatement:
          "100% pure certified nickel ore extracted from the iron ore mines of Pune.",
        recyclable: false,
      },
    ],
  },
  {
    id: "P014",
    name: "Raspberry Pi 4",
    category: "Electronics",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/7d/23551-raspberry-pi-5.jpg",
    description:
      "A small single-board computers (SBCs) developed in the United Kingdom by the Raspberry Pi Foundation in association with Broadcom.",
    properties: {
      length: "15 cm",
      width: "10 cm",
      height: "0.5 cm",
      weight: "0.2 kg",
    },
    rawMaterial: [
      {
        material: "Fibreglass",
        composition: 90,
        origin: "Bihar, India",
        manufacturerStatement:
          "100% pure certified iron ore extracted from the iron ore mines of Chattisgarh.",
        recyclable: true,
      },
      {
        material: "Copper",
        composition: 10,
        origin: "Mumbai, India",
        manufacturerStatement:
          "100% pure certified chromium ore extracted from the iron ore mines of Coimbatore.",
        recyclable: true,
      },
    ],
  },
  {
    id: "P015",
    name: "Wireless Keyboard",
    category: "Electronics",
    imageUrl:
      "https://zebronics.com/cdn/shop/products/ZEB-K5000MW-pic1.jpg?v=1648026336&width=2048",
    description:
      "allows the user to communicate with computers, tablets, or laptops with the help of radio frequency (RF), such as WiFi and Bluetooth or with infrared (IR) technology.",
    properties: {
      length: "12 cm",
      width: "11 cm",
      height: "1.5 cm",
      weight: "0.1 kg",
    },
    rawMaterial: [
      {
        material: "Fibre",
        composition: 60,
        origin: "Bihar, India",
        manufacturerStatement:
          "100% pure certified iron ore extracted from the iron ore mines of Chattisgarh.",
        recyclable: true,
      },
      {
        material: "Copper",
        composition: 30,
        origin: "Mumbai, India",
        manufacturerStatement:
          "100% pure certified chromium ore extracted from the iron ore mines of Coimbatore.",
        recyclable: true,
      },
      {
        material: "Stainless Steel",
        composition: 10,
        origin: "Mumbai, India",
        manufacturerStatement:
          "100% pure certified chromium ore extracted from the iron ore mines of Coimbatore.",
        recyclable: true,
      },
    ],
  },
];

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
