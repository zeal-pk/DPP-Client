//TODO: make the keys easier to read and write

let batteryDataStructrue = [
  {
    information: {
      productData: {
        name: "",
        serialNumber: "",
        batteryType: "",
        batteryModel: "",
      },
      manufacturerData: {
        manufacturer: "",
        manufacturingSite: "",
        manufacturedDate: "",
        importer: "",
        entryDate: "",
      },
      productConformity: {
        euDeclarationOfConformity: "Compliance",
        standatd1: "", // List of Standards Compliance
        standatd2: "",
      },
      productCharacteristics: {
        rawMaterialCategory: "",
        feedstockType: "",
        fossilPlastic: "", // In %
        bioPlastic: "", // In %
        reusedPlastic: "", // In %
      },
      productPerformanceScores: {
        ecoLabel: "",
        repairabilityScore: "",
        energyPerformance: "",
        sustainabilityScore: "",
        plantScore: "",
      },
    },
    tracability: {
      chainOfCustody: {
        //! How to structure this?
      },
    },
    specifications: {
      productSpecification: {
        weight: "",
        ratedCapacity: "",
        minimunAvergaeDuration: "",
        expectedLifetime: "",
        capacityFade: "",
        internalResistanceIncrease: "",
        energyEfficiency: "",
        energyFade: "",
        chargeThroughput: "",
        internalResistance: "",
      },
      performanceSpecifications: {
        power: "",
        internalResistance: "",
        energyRoundtripEfficiency: "",
        chargeRate: "",
        dischargeRate: "",
        powerEnergyRatio: "",
        depthOfDischarge: "",
        powerCapability: "",
      },
    },
    composition: {
      recyclability: {
        recycledContent: "",
        renewableContent: "",
      },
      chemistry: {
        outerCase: {
          composition1: "",
          composition2: "",
        },
        cathode: {
          composition1: "",
          composition2: "",
        },
        anode: {
          composition1: "",
          composition2: "",
        },
        electrolyte: {
          composition1: "",
          composition2: "",
        },
      },
      hazardousSubstance: {
        substance_1: {
          substance: "",
          percentage: "",
        },
        substance_2: {
          substance: "",
          percentage: "",
        },
      },
      criticalRawMaterials: {
        material_1: {
          material: "",
          percentage: "",
        },
        material_2: {
          material: "",
          percentage: "",
        },
      },
    },
    designAndService: {
      //! Need further details
      disposalScheme: {},
      returnScheme: {},
      collectionScheme: {},
      partDetails: {},
    },
    usageHistory: {
      //! Need Clarification
    },
    repairReuse: {
      // Move into usage History
    },
    endOfLife: {
      // Needs Image Handling
    },
    sustainability: {
      carbonFootprint: "",
      circularityIndicator: {
        repairabilityIndex: "",
        reuseIndex: "",
        recycleIndex: "",
        environmentAndSocialmpactIndex: "",
      },
      PefLcaDetails: {
        documentLink: "",
      },
    },
    certification: {
      euDeclarationOfConformityID: "",
      testResults: "",
    },
    labels: {
      separateCollectionSymbol: "",
      cadmiumAndLeadSymbols: "",
    },
  },
];

let cleanData = [
  {
    template_ID: "",
    Information: {
      "Product Data": {
        Name: "",
        "Serial Number": "",
        "Battery Type": "",
        "Battery Model": "",
      },
      "Manufacturer Data": {
        Manufacturer: "",
        "Manufacturing Site": "",
        "Manufactured Date": "",
        Importer: "",
        "Entry Date": "",
      },
      "Product Conformity": {
        "EU Declaration Of Conformity": "Compliance",
        "Standard 1": "",
        "Standard 2": "",
      },
      "Product Characteristics": {
        "Raw Material Category": "",
        "Feedstock Type": "",
        "Fossil Plastic": "",
        "Bio Plastic": "",
        "Reused Plastic": "",
      },
      "Product Performance Scores": {
        "Eco Label": "",
        "Repairability Score": "",
        "Energy Performance": "",
        "Sustainability Score": "",
        "Plant Score": "",
      },
    },
    Tracability: {
      "Chain Of Custody": {},
    },
    Specifications: {
      "Product Specification": {
        wWeight: "",
        "Rated Capacity": "",
        "Minimum Average Duration": "",
        "Expected Lifetime": "",
        "Capacity Fade": "",
        "Internal Resistance Increase": "",
        "Energy Efficiency": "",
        "Energy Fade": "",
        "Charge Throughput": "",
        "Internal Resistance": "",
      },
      "Performance Specifications": {
        Power: "",
        "Internal Resistance": "",
        "Energy Roundtrip Efficiency": "",
        "Charge Rate": "",
        "Discharge Rate": "",
        "Power Energy Ratio": "",
        "Depth Of Discharge": "",
        "Power Capability": "",
      },
    },
    composition: {
      Recyclability: {
        "Recycled Content": "",
        "Renewable Content": "",
      },
      Chemistry: {
        "Outer Case": {
          "Composition 1": "",
          "composition 2": "",
        },
        Cathode: {
          "Composition 1": "",
          "composition 2": "",
        },
        Anode: {
          "Composition 1": "",
          "Composition 2": "",
        },
        Electrolyte: {
          "Composition 1": "",
          "Composition 2": "",
        },
      },
      "Hazardous Substance": {
        "Substance 1": {
          Substance: "",
          Percentage: "",
        },
        substance_2: {
          Substance: "",
          Percentage: "",
        },
      },
      "Critical Raw Materials": {
        "Material 1": {
          Material: "",
          Percentage: "",
        },
        "Material 2": {
          Material: "",
          Percentage: "",
        },
      },
    },
    "Design And Service": {
      "Disposal Scheme": {},
      "Return Scheme": {},
      "Collection Scheme": {},
      "Part Details": {},
    },
    "Usage History": {},
    "Repair Reuse": {},
    "End Of Life": {},
    Sustainability: {
      "Carbon Footprint": "",
      "Circularity Indicator": {
        "Repairability Index": "",
        "Reuse Index": "",
        "Recycle Index": "",
        "Environment And Socia Impact Index": "",
      },
      "PEF / LCA Details": {
        "Document Link": "",
      },
    },
    Certification: {
      "EU Declaration Of Conformity ID": "",
      "Test Results": "",
    },
    Labels: {
      "Separate Collection Symbol": "",
      "Cadmium And Lead Symbols": "",
    },
  },
];

export { batteryDataStructrue };
