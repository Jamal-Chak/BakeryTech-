import assert from "node:assert/strict";
import { chromium } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { mkdir, writeFile } from "node:fs/promises";
const browser = await chromium.launch({channel:"chrome", headless:true});
const context = await browser.newContext({viewport:{width:1440,height:1000},reducedMotion:"reduce"});
const page = await context.newPage();
const base = process.env.QA_BASE_URL || "http://127.0.0.1:3100";
const errors = [];
page.on("pageerror", error => errors.push(error.message));
await mkdir("test-results", {recursive:true});
try {
 for (const width of [1440,1280,390]) {
  await page.setViewportSize({width,height:1000}); await page.goto(base);
  if (width >= 1280) {
   const nav = page.getByRole("navigation",{name:"Main navigation",exact:true});
   for (const name of ["Home","About Us","Bakery","Butchery","Catering","Gallery","Contact","Maintenance & Repair"]) await nav.getByRole("link",{name,exact:true}).waitFor();
  } else {
   await page.getByRole("button",{name:"Open menu"}).click();
   for (const name of ["Home","About Us","Bakery","Butchery","Catering","Gallery","Contact"]) await page.locator("#mobile-navigation").getByRole("link",{name,exact:true}).waitFor();
   await page.getByRole("button",{name:"Close menu"}).click();
  }
  assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `header overflow at ${width}`);
 }
 await page.setViewportSize({width:1440,height:1000});
 await page.goto(base + "/about");
 await page.getByRole("heading",{name:"Reliable machinery for the people feeding South Africa."}).waitFor();
 assert.match(await page.locator("main").textContent(), /supermarkets, butcheries and corporate caterers across South Africa/);
 assert.match(await page.locator("main").textContent(), /minimise client downtime/);
 await page.goto(base + "/gallery");
 assert.equal(await page.locator('main button[aria-label^="View "]').count(),46);
 const broken = await page.locator("main img").evaluateAll(async images => {await Promise.all(images.map(image => {image.loading="eager";return image.decode().catch(()=>undefined);}));return images.filter(image=>!image.naturalWidth).map(image=>image.src);});
 assert.deepEqual(broken,[]);
 const accessibility = await new AxeBuilder({page}).withTags(["wcag2a","wcag2aa","wcag21a","wcag21aa","wcag22aa"]).analyze();
 await writeFile("test-results/additive-accessibility.json",JSON.stringify(accessibility.violations,null,2));
 assert.equal(accessibility.violations.length,0,"gallery accessibility; see additive-accessibility.json");
 for (const category of ["Installations","Warehouse Inventory","Butchery","Delivery Highlights"]) {
  await page.evaluate(()=>scrollTo(0,0));
  await page.getByRole("button",{name:category,exact:true}).click();
  assert.ok(await page.locator('main button[aria-label^="View "]').count(),category);
 }
 await page.getByRole("button",{name:/Equipment delivery - AI-generated illustration/}).click();
 await page.getByRole("dialog").waitFor();
 await page.getByText("AI-generated illustration - not an actual BESS installation or delivery.",{exact:true}).waitFor();
 await page.keyboard.press("Escape");
 assert.equal(await page.getByRole("dialog").count(),0);
 await page.goto(base + "/contact");
 assert.ok((await page.locator('iframe[title^="Map of"]').getAttribute("src")).includes(encodeURIComponent("57 Railway, Benoni, South Africa")));
 await page.goto(base);
 const illustrations = await page.locator('img[src*="butchery-equipment-illustrative"]').count();
 assert.equal(illustrations,1);
 await page.locator('img[src*="butchery-equipment-illustrative"]').evaluate(image=>image.decode());
 await page.screenshot({path:"test-results/additive-home.png",fullPage:true});
 assert.deepEqual(errors,[]);
 console.log("Additive browser QA passed: navigation, 46 gallery entries, image decoding, filters, lightbox, mission copy, Benoni map and accessibility.");
} finally {await browser.close();}
