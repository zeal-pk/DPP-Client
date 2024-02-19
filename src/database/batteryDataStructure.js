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
        manufacturingDate: "",
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
        fossilePlastic: "", // In %
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
        //! What is this?  "Capacity fade, intern. resistance increase, energy efficiency and its fade"
        //! And this? "Charge throughput, temperature history, error memory, internal resistance"
      },
      performanceSpecifications: {
        power: "",
        internalResistance: "",
        energyRoundtripEfficiency: "",
        dischargeAndChargeRates: "", //! Should this be in the same field?
        ratioBetweenPowerAndEnergy: "",
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
