export interface ProductGrade {
  name: string;
  solidContent?: string;
  waterReduction?: string;
  feature: string;
  useCase: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  categorySlug: string;
  slug: string;
  tradeNames: string[];
  description: string;
  forms: string[];
  applications: string[];
  packaging: string[];
  moq: string;
  hsCode?: string;
  grades?: ProductGrade[];
  keySpecs?: string[];
}

export const productCategories = [
  {
    id: "concrete-admixtures",
    name: "Concrete Admixtures",
    description: "Chemical products that modify concrete properties, enhancing workability, strength, and durability for construction projects.",
    productCount: 8,
  },
  {
    id: "dry-mix-mortar-additives",
    name: "Dry-Mix Mortar Additives",
    description: "Functional additives for dry-mix mortars, improving adhesion, flexibility, water retention, and overall performance.",
    productCount: 5,
  },
  {
    id: "construction-fibers-fillers",
    name: "Construction Fibers & Fillers",
    description: "Reinforcement fibers and mineral fillers that enhance mechanical properties and reduce costs in construction materials.",
    productCount: 4,
  },
  {
    id: "pigments-coating-materials",
    name: "Pigments & Coating Raw Materials",
    description: "White pigments and functional materials for coatings, paints, rubber, and plastic applications.",
    productCount: 2,
  },
  {
    id: "water-treatment-industrial-chemicals",
    name: "Water Treatment & Industrial Chemicals",
    description: "Industrial chemicals for water treatment, detergents, food processing, and various industrial applications.",
    productCount: 5,
  },
];

export const products: Product[] = [
  // Concrete Admixtures
  {
    id: "pce",
    name: "Polycarboxylate Superplasticizer (PCE)",
    category: "Concrete Admixtures",
    categorySlug: "concrete-admixtures",
    slug: "polycarboxylate-superplasticizer-pce",
    tradeNames: ["PCE", "Polycarboxylate Ether", "High-Range Water Reducer", "Polycarboxylic Acid Superplasticizer"],
    description: "Polycarboxylate Superplasticizer (PCE) is a high-range water-reducing admixture used to produce high-performance concrete. It reduces the water-cement ratio by 20-40% while maintaining excellent flow and workability, resulting in concrete with significantly higher compressive strength, improved durability, and enhanced rheology.",
    forms: ["Liquid (40-50% solid content)", "Powder (98%+ solid content)"],
    applications: [
      "High-performance and high-strength concrete",
      "Self-compacting concrete (SCC)",
      "Ready-mix concrete plants",
      "Precast concrete elements",
      "Dry-mix mortars and tile adhesives",
      "Infrastructure projects (bridges, high-rise buildings, tunnels)"
    ],
    packaging: ["200kg drums", "1100kg IBC tanks", "23-ton Flexitanks", "25kg bags (powder)"],
    moq: "1 MT (powder) / 5 MT (liquid)",
    hsCode: "3824.40.10",
    grades: [
      { name: "PCE Liquid (WR)", solidContent: "40-50%", waterReduction: "20-30%", feature: "Water Reducing", useCase: "Ready-mix concrete, General use" },
      { name: "PCE Liquid (SR)", solidContent: "40-50%", waterReduction: "15-25%", feature: "Slump Retention", useCase: "Long-distance transport, Hot climates" },
      { name: "PCE Powder", solidContent: "≥ 98%", waterReduction: "25-40%", feature: "High Water Reduction", useCase: "Dry-mix mortars, Self-leveling compounds" }
    ],
    keySpecs: [
      "Solid Content (%): Determines concentration of active ingredient",
      "Water Reduction Rate (%): Primary performance metric",
      "Slump Retention: Critical for extended workability",
      "Compatibility: Must be tested with local cement and aggregates",
      "Chloride Content: Must be <0.1% for reinforced concrete"
    ]
  },
  {
    id: "sodium-lignosulfonate",
    name: "Sodium Lignosulfonate",
    category: "Concrete Admixtures",
    categorySlug: "concrete-admixtures",
    slug: "sodium-lignosulfonate",
    tradeNames: ["SLS", "Lignosulfonate Sodium", "Lignin Sulfonate"],
    description: "Sodium Lignosulfonate is a high-performance water-reducing agent and dispersant used primarily in construction as a concrete admixture. It also functions as a binder for ceramics, coal briquettes, and foundry sand, and as a dispersant in textile dyeing, leather tanning, and water treatment.",
    forms: ["Powder", "Liquid"],
    applications: [
      "Concrete admixture (water reducer)",
      "Ceramic binder",
      "Coal briquette binder",
      "Foundry sand binder",
      "Textile dyeing dispersant",
      "Leather tanning agent",
      "Water treatment dispersant"
    ],
    packaging: ["25kg bags", "550kg/1000kg jumbo bags", "200L drums (liquid)"],
    moq: "1 MT",
    keySpecs: [
      "Lignosulfonate Content: 55-60% (primary quality measure)",
      "Moisture Content: Max 0.5%",
      "pH Value: 9-12",
      "Water Insoluble Matter: Varies by grade",
      "Reducing Sugar Content: Lower is better for concrete"
    ]
  },
  {
    id: "snf",
    name: "Sodium Naphthalene Sulfonate (SNF)",
    category: "Concrete Admixtures",
    categorySlug: "concrete-admixtures",
    slug: "sodium-naphthalene-sulfonate-snf",
    tradeNames: ["SNF", "PNS", "FDN", "Naphthalene Sulfonate Formaldehyde Condensate", "Poly Naphthalene Sulfonate"],
    description: "Sodium Naphthalene Sulfonate Formaldehyde Condensate (SNF) is a high-range water-reducing admixture (superplasticizer) used in the construction industry to produce high-strength, high-fluidity concrete. It is also used as a dispersant in textile dyeing and agricultural pesticide formulations.",
    forms: ["Powder (Yellow Brown to Brown)"],
    applications: [
      "High-strength concrete production",
      "High-fluidity concrete",
      "Ready-mix concrete",
      "Precast concrete",
      "Textile dyeing dispersant",
      "Agricultural pesticide formulations"
    ],
    packaging: ["25kg bags", "50kg bags", "650kg jumbo bags", "1000kg jumbo bags"],
    moq: "1-5 MT",
    keySpecs: [
      "Solid Content: ≥ 92%",
      "Sodium Sulfate (Na2SO4): ≤ 5% (Grade A), ≤ 10% (Grade B), ≤ 18% (Grade C)",
      "Water Reduction Rate: ≥ 17-18%",
      "pH Value: 7-9",
      "Chloride Content: ≤ 0.3%"
    ]
  },
  {
    id: "sodium-gluconate",
    name: "Sodium Gluconate",
    category: "Concrete Admixtures",
    categorySlug: "concrete-admixtures",
    slug: "sodium-gluconate",
    tradeNames: ["Sodium D-Gluconate", "Gluconic Acid Sodium Salt", "Monosodium D-gluconate", "E576"],
    description: "Sodium Gluconate is a versatile chelating agent used extensively in the construction industry as a concrete retarder and water-reducing agent. It is also widely used in water treatment, metal surface cleaning, food additives, and pharmaceutical applications.",
    forms: ["Powder (White crystalline)"],
    applications: [
      "Concrete retarder",
      "Water-reducing agent",
      "Water treatment",
      "Metal surface cleaning",
      "Food additives (sequestrant)",
      "Pharmaceutical applications",
      "Textile processing"
    ],
    packaging: ["25kg bags", "1000kg jumbo bags"],
    moq: "1 MT",
    keySpecs: [
      "Purity: 98-99% min",
      "pH (5% solution): 6.5-7.5",
      "Loss on Drying: ≤ 5%",
      "Chloride Content: Low",
      "Heavy Metals: Controlled for food/pharma grades"
    ]
  },
  {
    id: "calcium-formate",
    name: "Calcium Formate",
    category: "Concrete Admixtures",
    categorySlug: "concrete-admixtures",
    slug: "calcium-formate",
    tradeNames: ["Calcium Diformate", "Formic acid calcium salt", "CaFo"],
    description: "Calcium Formate is used as an early-strength accelerator in cement and concrete, which shortens setting time and improves initial strength. It is also widely used as a feed additive for livestock, particularly in piglet feed, to improve weight gain and reduce diarrhea.",
    forms: ["White crystalline powder"],
    applications: [
      "Concrete early-strength accelerator",
      "Cement setting time reducer",
      "Feed additive for livestock",
      "Piglet feed supplement",
      "Construction in cold climates"
    ],
    packaging: ["25kg bags", "1200kg jumbo bags"],
    moq: "1 MT",
    keySpecs: [
      "Purity: 98% min",
      "Moisture: <0.5%",
      "Calcium Content: >30%",
      "pH Value: 6.5-8 (10% solution)",
      "Grade: Industrial or Feed Grade"
    ]
  },
  {
    id: "air-entraining-agent",
    name: "Air Entraining Agent",
    category: "Concrete Admixtures",
    categorySlug: "concrete-admixtures",
    slug: "air-entraining-agent",
    tradeNames: ["AEA", "Air Entraining Admixture", "Concrete Admixture"],
    description: "Air Entraining Agents are used primarily in concrete and mortar to intentionally create microscopic air bubbles, which significantly improves the material's freeze-thaw durability, workability, and resistance to scaling and sulfate attack. This is critical for concrete exposed to freezing temperatures and de-icing salts.",
    forms: ["Liquid", "Powder"],
    applications: [
      "Freeze-thaw resistant concrete",
      "Concrete exposed to de-icing salts",
      "Cold climate construction",
      "Pavement and bridge decks",
      "Exterior concrete structures"
    ],
    packaging: ["25kg bags", "200L drums", "1000kg IBC tanks"],
    moq: "1 MT",
    keySpecs: [
      "Solid Content (%): Varies by type",
      "pH Value: 6-9 typical",
      "Chloride Ion Content: <0.1% (critical)",
      "Air Content Target: 3-6% for freeze-thaw resistance",
      "Dosage: 0.02-0.2% by cement weight"
    ]
  },
  {
    id: "gypsum-retarder",
    name: "Gypsum Retarder",
    category: "Concrete Admixtures",
    categorySlug: "concrete-admixtures",
    slug: "gypsum-retarder",
    tradeNames: ["Gypsum Plaster Retarder", "Gypsum Setting Retarder", "Plaster Retarder"],
    description: "Gypsum Retarders are used in gypsum building materials such as plastering gypsum, bonding gypsum, gypsum putty, and gypsum products to slow down the setting time and improve workability.",
    forms: ["Powder"],
    applications: [
      "Plastering gypsum",
      "Bonding gypsum",
      "Gypsum putty",
      "Gypsum board production",
      "Gypsum-based construction materials"
    ],
    packaging: ["25kg bags", "1000kg IBC", "1 Ton bags"],
    moq: "1 MT",
    keySpecs: [
      "Type: Protein-based or Organic acid-based",
      "Purity: 99% typical",
      "Water Content: <3%",
      "pH Value: 10-11",
      "Dosage: 0.05-0.1% for 1h set time"
    ]
  },
  {
    id: "concrete-foaming-agent",
    name: "Concrete Foaming Agent",
    category: "Concrete Admixtures",
    categorySlug: "concrete-admixtures",
    slug: "concrete-foaming-agent",
    tradeNames: ["Cellular Lightweight Concrete Fluid", "Protein Foaming Agent", "Synthetic Surfactant"],
    description: "Concrete Foaming Agents are used to create lightweight concrete by introducing a controlled system of air or gas bubbles into a cement paste or mortar. Applications include lightweight blocks, void filling, and thermal insulation.",
    forms: ["Liquid", "Powder"],
    applications: [
      "Lightweight concrete blocks",
      "Void filling",
      "Thermal insulation",
      "Roof insulation",
      "Floor leveling",
      "Autoclaved Aerated Concrete (AAC)"
    ],
    packaging: ["25kg bags", "200kg drums", "1000kg IBC tanks"],
    moq: "1 MT",
    keySpecs: [
      "Type: Protein/Synthetic/Aluminum",
      "Active Matter: Varies by type",
      "pH: 6.8-7.2",
      "Foam Stability: Critical parameter",
      "Density Achieved: 300-1800 kg/m³"
    ]
  },

  // Dry-Mix Mortar Additives
  {
    id: "hpmc",
    name: "HPMC (Hydroxypropyl Methyl Cellulose)",
    category: "Dry-Mix Mortar Additives",
    categorySlug: "dry-mix-mortar-additives",
    slug: "hpmc-hydroxypropyl-methyl-cellulose",
    tradeNames: ["Hypromellose", "MHPC", "Cellulose Ether"],
    description: "HPMC is a versatile polymer used primarily as a thickener, binder, and water-retention agent in the construction industry for mortars, tile adhesives, and wall putty. It is also widely used in the pharmaceutical industry as an excipient for tablet coatings and capsules, and in cosmetics and food as a stabilizer and thickener.",
    forms: ["Powder"],
    applications: [
      "Tile adhesives",
      "Wall putty",
      "Cement-based plasters",
      "Self-leveling compounds",
      "Gypsum products",
      "Pharmaceutical excipient",
      "Food additive (E464)"
    ],
    packaging: ["25kg woven bags", "25kg fiber drums", "500kg/1000kg FIBC bags"],
    moq: "100 kg",
    keySpecs: [
      "Viscosity: 3-200,000 mPa.s (key parameter)",
      "Methoxy Content: 19-30%",
      "Hydroxypropyl Content: 4-12%",
      "Gelation Temperature: 65-75°C",
      "Grade: Industrial, Food (E464), or Pharmaceutical (USP/EP)"
    ]
  },
  {
    id: "rdp",
    name: "Redispersible Polymer Powder (RDP)",
    category: "Dry-Mix Mortar Additives",
    categorySlug: "dry-mix-mortar-additives",
    slug: "redispersible-polymer-powder-rdp",
    tradeNames: ["RDP", "VAE Powder", "Redispersible Latex Powder", "VAE RDP"],
    description: "Redispersible Polymer Powder (RDP) is a functional additive in dry-mix mortars for the construction industry. It significantly improves the performance of materials like tile adhesives, wall putty, and self-leveling compounds by enhancing adhesion, flexibility, water resistance, and workability.",
    forms: ["Powder"],
    applications: [
      "Tile adhesives",
      "Wall putty",
      "Self-leveling compounds",
      "External thermal insulation systems (ETICS)",
      "Repair mortars",
      "Waterproofing mortars"
    ],
    packaging: ["25kg paper-plastic bags"],
    moq: "1 MT",
    keySpecs: [
      "Polymer Type: VAE, Styrene-Acrylic, or VeoVa",
      "Solid Content: ≥99%",
      "Ash Content: 8-15% (lower is better)",
      "Bulk Density: 480-600 g/l",
      "MFFT: -5°C to 22°C (varies by grade)"
    ]
  },
  {
    id: "vae-emulsion-powder",
    name: "VAE Emulsion Powder",
    category: "Dry-Mix Mortar Additives",
    categorySlug: "dry-mix-mortar-additives",
    slug: "vae-emulsion-powder",
    tradeNames: ["Redispersible Polymer Powder (RDP)", "VAE Powder", "EVA Powder"],
    description: "VAE Emulsion Powder, primarily sold as Redispersible Polymer Powder (RDP), is a key additive in dry-mix mortars. Its main applications include enhancing adhesion, improving flexibility, increasing water retention, and boosting the overall durability of cementitious products.",
    forms: ["Powder (Redispersible)"],
    applications: [
      "Tile adhesives",
      "Wall putty",
      "Self-leveling compounds",
      "Repair mortars",
      "Waterproofing systems",
      "Exterior insulation systems"
    ],
    packaging: ["25kg paper-plastic bags", "20kg bags"],
    moq: "1 MT",
    keySpecs: [
      "Solid Content: ≥99%",
      "Purity: 99-99.9%",
      "Glass Transition Temperature (Tg): Varies",
      "MFFT: Application-dependent",
      "Flexibility Type: Semi-flexible or Flexible"
    ]
  },
  {
    id: "pva",
    name: "PVA (Polyvinyl Alcohol)",
    category: "Dry-Mix Mortar Additives",
    categorySlug: "dry-mix-mortar-additives",
    slug: "pva-polyvinyl-alcohol",
    tradeNames: ["Polyvinyl Alcohol", "PVOH", "PVA Fiber"],
    description: "Polyvinyl Alcohol (PVA) is a water-soluble synthetic polymer used as a binder, film-former, and adhesive in construction materials. It is also used as a fiber reinforcement in concrete and as a raw material in various industrial applications.",
    forms: ["Powder", "Fiber"],
    applications: [
      "Mortar binder",
      "Adhesive formulations",
      "Concrete fiber reinforcement",
      "Paper coating",
      "Textile sizing",
      "Film-forming agent"
    ],
    packaging: ["25kg bags", "500kg bags"],
    moq: "1 MT",
    keySpecs: [
      "Hydrolysis Degree: 87-89% or 98-99%",
      "Viscosity: Varies by grade",
      "Solubility: Water-soluble",
      "Ash Content: Low",
      "Form: Powder or Fiber"
    ]
  },
  {
    id: "wood-fiber",
    name: "Wood Fiber",
    category: "Dry-Mix Mortar Additives",
    categorySlug: "dry-mix-mortar-additives",
    slug: "wood-fiber",
    tradeNames: ["Cellulose Fiber", "Wood Cellulose Fiber"],
    description: "Wood Fiber is a natural cellulose fiber used in construction materials to improve crack resistance, workability, and cohesion. It is commonly used in dry-mix mortars, plasters, and joint compounds.",
    forms: ["Fiber"],
    applications: [
      "Dry-mix mortars",
      "Plasters",
      "Joint compounds",
      "Crack-resistant coatings",
      "Thermal insulation materials"
    ],
    packaging: ["20kg bags", "25kg bags"],
    moq: "1 MT",
    keySpecs: [
      "Fiber Length: Varies by application",
      "Moisture Content: <10%",
      "Purity: High cellulose content",
      "Dosage: 0.1-0.5% by weight"
    ]
  },

  // Construction Fibers & Fillers
  {
    id: "pp-fiber",
    name: "PP Fiber (Polypropylene Fiber)",
    category: "Construction Fibers & Fillers",
    categorySlug: "construction-fibers-fillers",
    slug: "pp-fiber-polypropylene",
    tradeNames: ["Polypropylene Fiber", "PP Fiber", "Synthetic Fiber"],
    description: "Polypropylene (PP) Fiber is a synthetic fiber used in concrete and mortar to control plastic shrinkage cracking, improve impact resistance, and enhance durability. It is widely used in industrial floors, pavements, and precast elements.",
    forms: ["Fiber (monofilament or fibrillated)"],
    applications: [
      "Concrete crack control",
      "Industrial flooring",
      "Pavements",
      "Precast concrete",
      "Shotcrete",
      "Mortar reinforcement"
    ],
    packaging: ["900g bags", "18kg bags"],
    moq: "1 MT",
    keySpecs: [
      "Fiber Length: 6-54mm",
      "Fiber Diameter: 20-100 microns",
      "Tensile Strength: ≥300 MPa",
      "Dosage: 0.6-2.0 kg/m³",
      "Type: Monofilament or Fibrillated"
    ]
  },
  {
    id: "calcium-carbonate",
    name: "Calcium Carbonate",
    category: "Construction Fibers & Fillers",
    categorySlug: "construction-fibers-fillers",
    slug: "calcium-carbonate",
    tradeNames: ["CaCO3", "Ground Calcium Carbonate (GCC)", "Precipitated Calcium Carbonate (PCC)"],
    description: "Calcium Carbonate is a versatile mineral filler used in construction materials, coatings, plastics, rubber, and paper. It improves mechanical properties, reduces costs, and enhances surface finish. Available in coated and uncoated forms.",
    forms: ["Powder (coated or uncoated)"],
    applications: [
      "Paints and coatings",
      "Plastics and rubber",
      "Paper manufacturing",
      "Construction materials",
      "Sealants and adhesives",
      "PVC products"
    ],
    packaging: ["25kg bags", "1000kg jumbo bags"],
    moq: "1 MT",
    keySpecs: [
      "Purity (CaCO3): 95-98%",
      "Particle Size: 2-10 microns typical",
      "Whiteness: 90-95%",
      "Coating: Stearic acid or other (for coated grades)",
      "Type: GCC or PCC"
    ]
  },
  {
    id: "talc-powder",
    name: "Talc Powder",
    category: "Construction Fibers & Fillers",
    categorySlug: "construction-fibers-fillers",
    slug: "talc-powder",
    tradeNames: ["Talcum Powder", "Magnesium Silicate"],
    description: "Talc Powder is a naturally occurring mineral used as a filler and functional additive in plastics, coatings, ceramics, paper, and cosmetics. It improves smoothness, reduces friction, and enhances mechanical properties.",
    forms: ["Powder"],
    applications: [
      "Plastics (PP, PE, PVC)",
      "Paints and coatings",
      "Ceramics",
      "Paper coating",
      "Cosmetics and personal care",
      "Rubber products"
    ],
    packaging: ["25kg bags", "1000kg jumbo bags"],
    moq: "1 MT",
    keySpecs: [
      "Purity: 90-98%",
      "Particle Size: 325-6000 mesh",
      "Whiteness: 85-95%",
      "Moisture: <0.5%",
      "Grade: Industrial, Cosmetic, or Pharmaceutical"
    ]
  },
  {
    id: "kaolin-clay",
    name: "Kaolin Clay",
    category: "Construction Fibers & Fillers",
    categorySlug: "construction-fibers-fillers",
    slug: "kaolin-clay",
    tradeNames: ["China Clay", "Kaolin", "White Clay"],
    description: "Kaolin Clay is a fine, white clay mineral used in ceramics, paper coating, paints, rubber, and cosmetics. It provides whiteness, opacity, and smooth texture. Also used in construction materials and as a functional filler.",
    forms: ["Powder"],
    applications: [
      "Ceramics and porcelain",
      "Paper coating",
      "Paints and coatings",
      "Rubber and plastics",
      "Cosmetics",
      "Construction materials"
    ],
    packaging: ["25kg bags", "1000kg jumbo bags"],
    moq: "1 MT",
    keySpecs: [
      "Purity (Al2O3·2SiO2·2H2O): High",
      "Whiteness: 85-95%",
      "Particle Size: 325-6000 mesh",
      "Moisture: <1%",
      "Grade: Calcined or Non-calcined"
    ]
  },

  // Pigments & Coating Raw Materials
  {
    id: "zinc-oxide",
    name: "Zinc Oxide",
    category: "Pigments & Coating Raw Materials",
    categorySlug: "pigments-coating-materials",
    slug: "zinc-oxide",
    tradeNames: ["ZnO", "Zinc White"],
    description: "Zinc Oxide is a white pigment and functional additive used in rubber, coatings, ceramics, pharmaceuticals, and cosmetics. It provides UV protection, antimicrobial properties, and acts as a vulcanization activator in rubber.",
    forms: ["Powder"],
    applications: [
      "Rubber vulcanization",
      "Paints and coatings",
      "Ceramics",
      "Pharmaceuticals",
      "Cosmetics and sunscreens",
      "Animal feed supplement"
    ],
    packaging: ["25kg bags", "1000kg jumbo bags"],
    moq: "1 MT",
    keySpecs: [
      "Purity (ZnO): 95-99.7%",
      "Particle Size: 0.1-10 microns",
      "Grade: Industrial, Pharmaceutical, or Feed Grade",
      "Surface Area: Varies by application",
      "Lead Content: Controlled for pharma/food grades"
    ]
  },
  {
    id: "lithopone",
    name: "Lithopone",
    category: "Pigments & Coating Raw Materials",
    categorySlug: "pigments-coating-materials",
    slug: "lithopone",
    tradeNames: ["Zinc Sulfide Barium Sulfate", "Lithopone White"],
    description: "Lithopone is a white pigment consisting of a mixture of zinc sulfide (ZnS) and barium sulfate (BaSO4). It is used in paints, coatings, inks, plastics, and rubber as a cost-effective white pigment with good hiding power.",
    forms: ["Powder"],
    applications: [
      "Paints and coatings",
      "Printing inks",
      "Plastics",
      "Rubber products",
      "Paper coating",
      "Leather finishing"
    ],
    packaging: ["25kg bags", "1000kg jumbo bags"],
    moq: "1 MT",
    keySpecs: [
      "ZnS Content: 28-30%",
      "Total Zinc (as ZnS): 28-30%",
      "Whiteness: ≥90%",
      "Tinting Strength: ≥105%",
      "Particle Size: Fine"
    ]
  },

  // Water Treatment & Industrial Chemicals
  {
    id: "pac",
    name: "PAC (Polyaluminium Chloride)",
    category: "Water Treatment & Industrial Chemicals",
    categorySlug: "water-treatment-industrial-chemicals",
    slug: "pac-polyaluminium-chloride",
    tradeNames: ["Polyaluminium Chloride", "PAC", "Aluminum Chlorohydrate"],
    description: "Polyaluminium Chloride (PAC) is a highly efficient coagulant used in water treatment for drinking water purification, wastewater treatment, and industrial water treatment. It effectively removes suspended solids, organic matter, and heavy metals.",
    forms: ["Liquid", "Powder"],
    applications: [
      "Drinking water treatment",
      "Wastewater treatment",
      "Industrial water treatment",
      "Paper manufacturing",
      "Textile wastewater",
      "Oil field wastewater"
    ],
    packaging: ["25kg bags (powder)", "200kg drums (liquid)", "1000kg IBC (liquid)"],
    moq: "1 MT",
    keySpecs: [
      "Al2O3 Content: 28-30% (powder), 10-11% (liquid)",
      "Basicity: 40-90%",
      "pH (1% solution): 3.5-5.0",
      "Water Insoluble: <0.3%",
      "Form: Powder or Liquid"
    ]
  },
  {
    id: "stpp",
    name: "STPP (Sodium Tripolyphosphate)",
    category: "Water Treatment & Industrial Chemicals",
    categorySlug: "water-treatment-industrial-chemicals",
    slug: "stpp-sodium-tripolyphosphate",
    tradeNames: ["Sodium Tripolyphosphate", "STPP", "Pentasodium Triphosphate"],
    description: "Sodium Tripolyphosphate (STPP) is a white powder used primarily in detergents as a builder and water softener. It is also used in food processing, water treatment, and ceramic production.",
    forms: ["Powder"],
    applications: [
      "Detergent builder",
      "Water softener",
      "Food preservative (E451)",
      "Ceramic deflocculant",
      "Water treatment",
      "Metal cleaning"
    ],
    packaging: ["25kg bags", "1000kg jumbo bags"],
    moq: "1 MT",
    keySpecs: [
      "Purity (Na5P3O10): 94-97%",
      "P2O5 Content: 57% min",
      "pH (1% solution): 9.2-10.0",
      "Whiteness: ≥90%",
      "Grade: Industrial or Food Grade"
    ]
  },
  {
    id: "shmp",
    name: "SHMP (Sodium Hexametaphosphate)",
    category: "Water Treatment & Industrial Chemicals",
    categorySlug: "water-treatment-industrial-chemicals",
    slug: "shmp-sodium-hexametaphosphate",
    tradeNames: ["Sodium Hexametaphosphate", "SHMP", "Sodium Polyphosphate"],
    description: "Sodium Hexametaphosphate (SHMP) is a white powder used as a sequestrant, dispersant, and water softener in water treatment, food processing, detergents, and industrial applications.",
    forms: ["Powder"],
    applications: [
      "Water treatment (scale inhibitor)",
      "Food additive (E452i)",
      "Detergent builder",
      "Ceramic deflocculant",
      "Textile processing",
      "Oil drilling"
    ],
    packaging: ["25kg bags", "1000kg jumbo bags"],
    moq: "1 MT",
    keySpecs: [
      "Total Phosphate (as P2O5): 68% min",
      "Inactive Phosphate (as P2O5): 7.5% max",
      "pH (1% solution): 5.8-7.3",
      "Solubility: Soluble in water",
      "Grade: Industrial or Food Grade"
    ]
  },
  {
    id: "citric-acid",
    name: "Citric Acid",
    category: "Water Treatment & Industrial Chemicals",
    categorySlug: "water-treatment-industrial-chemicals",
    slug: "citric-acid",
    tradeNames: ["Citric Acid Monohydrate", "Citric Acid Anhydrous"],
    description: "Citric Acid is a weak organic acid used extensively in food and beverage as an acidulant and preservative. It is also used in cleaning products, pharmaceuticals, cosmetics, and industrial applications.",
    forms: ["Powder (Monohydrate or Anhydrous)", "Granular"],
    applications: [
      "Food and beverage acidulant",
      "Cleaning products",
      "Pharmaceuticals",
      "Cosmetics",
      "Water treatment (descaling)",
      "Industrial chelating agent"
    ],
    packaging: ["25kg bags", "1000kg jumbo bags"],
    moq: "1 MT",
    keySpecs: [
      "Purity: 99.5-100.5%",
      "Form: Monohydrate or Anhydrous",
      "Moisture: <0.5% (anhydrous), 7.5-9.0% (monohydrate)",
      "pH (1% solution): 2.1-2.6",
      "Grade: Food Grade (E330) or Industrial Grade"
    ]
  },
  {
    id: "calcium-chloride",
    name: "Calcium Chloride",
    category: "Water Treatment & Industrial Chemicals",
    categorySlug: "water-treatment-industrial-chemicals",
    slug: "calcium-chloride",
    tradeNames: ["CaCl2", "Calcium Chloride Dihydrate", "Calcium Chloride Anhydrous"],
    description: "Calcium Chloride is a highly hygroscopic salt used for de-icing, dust control, desiccation, concrete acceleration, and various industrial applications. Available in anhydrous, dihydrate, and solution forms.",
    forms: ["Powder", "Flakes", "Pellets", "Liquid"],
    applications: [
      "De-icing and snow melting",
      "Dust control",
      "Concrete accelerator",
      "Desiccant",
      "Oil and gas drilling",
      "Food additive (E509)"
    ],
    packaging: ["25kg bags", "1000kg jumbo bags", "200kg drums (liquid)"],
    moq: "1 MT",
    keySpecs: [
      "Purity (CaCl2): 74-98% (varies by form)",
      "Form: Anhydrous, Dihydrate, or Liquid",
      "Moisture: Varies by form",
      "Alkalinity (as Ca(OH)2): <0.2%",
      "Grade: Industrial or Food Grade"
    ]
  },
];
