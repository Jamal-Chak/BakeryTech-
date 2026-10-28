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
 {slug: "catering", number: "03", name: "Catering", title: "Catering & Food Service Solutions", subtitle: "Built for the demands of a busy kitchen.", description: "Cooking, food display and refrigeration solutions for professional food service environments.", intro: "From restaurant kitchens to hotels and corporate catering operations, BESS supplies commercial equipment for preparation, cooking, display and cold storage.", range: [
  {name: "Commercial stoves", description: "Cooking equipment for demanding professional kitchens."},
  {name: "Deep fryers", description: "Commercial frying solutions for food service operations."},
  {name: "Food display units", description: "Presentation and holding solutions for your service counter."},
  {name: "Stainless steel workstations", description: "Durable preparation surfaces for organised kitchen workflows."},
  {name: "Refrigeration", description: "Commercial cold storage matched to your kitchen and service needs."},
 ]},
] as const;
export type DivisionSlug = typeof divisions[number]["slug"];
