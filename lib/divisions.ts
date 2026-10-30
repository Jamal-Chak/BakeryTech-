export const divisions = [
 {slug: "bakery", number: "01", name: "Bakery", title: "Bakery Solutions", subtitle: "From the first mix to the final bake.", description: "Production-ready equipment for artisan bakeries, retail bakehouses and industrial baking operations.", intro: "Build a dependable production line with industrial ovens, dough preparation and finishing equipment, backed by installation and ongoing technical support.", range: [
   {name: "Industrial ovens", description: "Deck and rotary rack ovens for consistent commercial baking."},
   {name: "Spiral mixers", description: "Dough mixing solutions for everyday batches and larger production demands."},
   {name: "Dough dividers", description: "Portioning equipment to support a consistent, efficient dough workflow."},
   {name: "Bread slicers", description: "Commercial slicing equipment for uniform loaves and daily throughput."},
   {name: "Dough sheeters", description: "Rolling and sheeting equipment for pastry and laminated dough."},
   {name: "Proving equipment", description: "Controlled proving solutions for your baking process."},
  ]},
 {slug: "butchery", number: "02", name: "Butchery", title: "Butchery Solutions", subtitle: "Precision equipment. Serious preparation.", description: "Robust machinery for meat preparation, processing and temperature-controlled storage.", intro: "Equip your butcher shop or meat processing operation with dependable preparation machinery and cold storage. Discuss equipment selection, installation and service requirements with BESS.", range: [
   {name: "Meat bandsaws", description: "Commercial cutting equipment for meat and bone preparation."},
   {name: "Meat mincers", description: "Mincing equipment matched to your production and processing needs."},
   {name: "Sausage fillers", description: "Filling solutions for consistent sausage preparation."},
   {name: "Meat tenderizers", description: "Preparation equipment for an efficient meat processing workflow."},
   {name: "Cold rooms", description: "Discuss refrigerated storage requirements, layout and installation."},
  ]},
 {slug: "services", number: "03", name: "Workshop Services", title: "Maintenance, Repairs & Pan-African Supply Support", subtitle: "Benoni workshop. Africa-wide support.", description: "Installation, servicing, spare parts and technical field support for commercial food equipment across South Africa and the wider African market.", intro: "From our Benoni workshop, BESS supplies, installs, services and supports commercial bakery and butchery machinery for clients across South Africa and pan-African markets.", range: [
   {name: "Preventative maintenance", description: "Scheduled servicing to reduce downtime and extend machine life."},
   {name: "Emergency repairs", description: "Rapid-response breakdown support and troubleshooting."},
   {name: "Installation & commissioning", description: "Electrical, plumbing, setup and operator training."},
   {name: "Spare parts supply", description: "Genuine and aftermarket parts with quotation-based availability."},
   {name: "Pan-African supply support", description: "Export-ready machinery, logistics coordination and field service support across Africa."},
  ]},
] as const;
export type DivisionSlug = typeof divisions[number]["slug"];
