export const services = [
  {
    title: "Preventative Maintenance",
    slug: "preventative-maintenance",
    description: "Our comprehensive scheduled maintenance programs are designed to identify potential issues before they become costly failures. We check heating elements, belt tensions, motor health, and control systems to support reliable operation across bakery and butchery equipment.",
    image: "/images/equipment/ovens/industrial-rack-oven.jpg",
  },
  {
    title: "Emergency Repairs",
    slug: "emergency-repairs",
    description: "When production stops, every minute counts. Our rapid-response emergency repair team is available to discuss critical equipment failures and arrange troubleshooting. Contact us to confirm response times and spare parts availability.",
    image: "/images/equipment/slicers/bread-slicer-silver.jpg",
  },
  {
    title: "Equipment Installation",
    slug: "equipment-installation",
    description: "Proper installation is the foundation of equipment longevity. Our technicians handle the entire installation process, from electrical connections and plumbing integration to final calibration and staff training, with commissioning requirements agreed for your installation.",
    image: "/images/equipment/mixers/spiral-mixer-industrial.jpg",
  },
  {
    title: "Spare Parts Supply",
    slug: "spare-parts-supply",
    description: "Enquire about genuine and aftermarket spare parts for commercial food service equipment, including thermocouples, contactors, conveyor belts and mixer attachments. Availability and delivery options are confirmed with your quotation.",
    image: "/images/equipment/slicers/white-bread-slicer.jpg",
  },
];

export const equipmentCategories = [
  { id: "ovens", title: "Ovens", description: "Deck ovens, rotary rack ovens, and convection ovens." },
  { id: "mixers", title: "Mixers", description: "Spiral mixers, planetary mixers, and dough sheeters." },
  { id: "provers", title: "Provers", description: "Climate-controlled proving chambers and retarder provers." },
  { id: "slicers", title: "Slicers", description: "Bread slicers and bun cutters for uniform results." },
];

export const equipment = [
  // Ovens
  {
    id: "deck-oven-3-deck",
    name: "Artisan 3-Deck Oven",
    category: "ovens",
    description: "Premium stone hearth deck oven for crusty artisan breads. Features individual steam generators per deck.",
    image: "/images/equipment/ovens/deck-oven-3-tier.jpg",
    specs: ["Decks: 3", "Steam Injection", "Digital Controls"],
  },
  {
    id: "rotary-rack-oven-1",
    name: "Industrial Rotary Rack Oven",
    category: "ovens",
    description: "High-capacity rack oven for consistent baking. Stainless steel construction with advanced airflow system.",
    image: "/images/equipment/ovens/industrial-rack-oven.jpg",
    specs: ["Capacity: 18-30 trays", "Temperature: up to 300°C", "Fuel: Gas or Electric"],
  },
  {
    id: "polin-rack-oven",
    name: "Polin Rack Oven",
    category: "ovens",
    description: "Italian-engineered rack oven known for reliability and energy efficiency.",
    image: "/images/equipment/ovens/rack-oven-polin.jpg",
    specs: ["Brand: Polin", "Type: Rotary", "Touch Control Panel"],
  },

  // Mixers
  {
    id: "spiral-mixer-50kg",
    name: "50kg Spiral Mixer",
    category: "mixers",
    description: "Heavy-duty mixer designed for efficient dough kneading. Perfect for artisan breads.",
    image: "/images/equipment/mixers/spiral-mixer-industrial.jpg",
    specs: ["Capacity: 50kg dough", "Two speeds", "Stainless steel bowl"],
  },
  {
    id: "planetary-mixer-40l",
    name: "Legacy Planetary Mixer",
    category: "mixers",
    description: "Versatile Hobart Legacy mixer for batters, creams, and light doughs.",
    image: "/images/equipment/mixers/hobart-legacy-mixer.jpg",
    specs: ["Bowl: 40 Liter", "Brand: Hobart", "Safety Guard"],
  },
  {
    id: "vema-mixer",
    name: "Vema Planetary Mixer",
    category: "mixers",
    description: "Classic design planetary mixer for general bakery use.",
    image: "/images/equipment/mixers/vema-mixer-silver.jpg",
    specs: ["Type: Planetary", "Stainless Tools", "Durable Build"],
  },

  // Provers
  {
    id: "prover-retarder-rack",
    name: "Industrial Retarder Prover",
    category: "provers",
    description: "High-capacity prover with precise humidity control for consistent fermentation results.",
    image: "/images/equipment/provers/loaded-prover-rack.jpg",
    specs: ["Capacity: 4 Racks", "Humidity: 60-95%", "Temp: -5°C to 40°C"],
  },

  // Dough Handling
  {
    id: "dough-sheeter-floor",
    name: "Conveyor Dough Sheeter",
    category: "mixers", // Using mixers category for now or should create new? data.ts has mixers including sheeters in description
    description: "Precision dough sheeter with conveyor belts for puff pastry and danish doughs.",
    image: "/images/equipment/dough-handling/dough-sheeter-floor.jpg",
    specs: ["width: 500/600mm", "Conveyor Belt", "Foldable Arms"],
  },

  // Slicers
  {
    id: "bread-slicer-auto",
    name: "Automatic Bread Slicer",
    category: "slicers",
    description: "High-speed slicer for uniform sandwich loaves.",
    image: "/images/equipment/slicers/bread-slicer-silver.jpg",
    specs: ["Slice thickness: 10-14mm", "Speed: 200 loaves/hr", "Safety Sensors"],
  },
  {
    id: "bread-slicer-gravity",
    name: "Gravity Feed Slicer",
    category: "slicers",
    description: "Efficient gravity feed slicer for consistent daily use.",
    image: "/images/equipment/slicers/white-bread-slicer.jpg",
    specs: ["Manual/Gravity Feed", "Stainless Blades", "Compact Design"],
  },
];

