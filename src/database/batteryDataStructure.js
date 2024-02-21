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

export { batteryDataStructrue };
