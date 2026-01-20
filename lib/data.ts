export const services = [
  {
    title: "Preventative Maintenance",
    slug: "preventative-maintenance",
    description: "Our comprehensive scheduled maintenance programs are designed to identify potential issues before they become costly failures. We check heating elements, belt tensions, motor health, and control systems to ensure your bakery operates at peak efficiency year-round.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Emergency Repairs",
    slug: "emergency-repairs",
    description: "When production stops, every minute counts. Our rapid-response emergency repair team is available 24/7 to troubleshoot and fix critical equipment failures. We carry essential spares for major brands like Macadams, Tombake, and Polin to get you back up and running fast.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Equipment Installation",
    slug: "equipment-installation",
    description: "Proper installation is the foundation of equipment longevity. Our certified technicians handle the entire installation process, from electrical connections and plumbing integration to final calibration and staff training, ensuring your warranty remains valid and your machine performs perfectly.",
    image: "https://images.unsplash.com/photo-1504328156602-ff144ced4d9b?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Spare Parts Supply",
    slug: "spare-parts-supply",
    description: "We stock a vast inventory of genuine and high-quality aftermarket spare parts for all major industrial bakery equipment. From thermocouples and contractors to conveyor belts and mixer attachments, we can ship parts nationwide to keep your maintenance downtime to a minimum.",
    image: "https://images.unsplash.com/photo-1530124560676-587cad321376?auto=format&fit=crop&q=80&w=800",
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
    image: "/images/equipment/ovens/rack-oven-single.jpg",
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
    image: "/images/equipment/dough-handling/dough-sheeter-conveyor.jpg",
    specs: ["width: 500/600mm", "Conveyor Belt", "Foldable Arms"],
  },

  // Slicers
  {
    id: "bread-slicer-auto",
    name: "Automatic Bread Slicer",
    category: "slicers",
    description: "High-speed slicer for uniform sandwich loaves.",
    image: "/images/equipment/slicers/white-bread-slicer.jpg",
    specs: ["Slice thickness: 10-14mm", "Speed: 200 loaves/hr", "Safety Sensors"],
  },
  {
    id: "bread-slicer-gravity",
    name: "Gravity Feed Slicer",
    category: "slicers",
    description: "Efficient gravity feed slicer for consistent daily use.",
    image: "/images/equipment/slicers/bread-slicer-silver.jpg",
    specs: ["Manual/Gravity Feed", "Stainless Blades", "Compact Design"],
  },
];
