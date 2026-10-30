import assert from "node:assert/strict";
import { chromium } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { mkdir, writeFile } from "node:fs/promises";
const base = process.env.QA_BASE_URL || "http://127.0.0.1:3100";
const browser = await chromium.launch({channel: "chrome", headless: true});
await mkdir("test-results", {recursive: true});
const context = await browser.newContext({ viewport: {width: 1440, height: 1000}, reducedMotion: "reduce" });
const page = await context.newPage();
const errors = [];
page.on("pageerror", error => errors.push(error.message));
const failures = [];
try {
 const sitemap = await (await fetch(base + "/sitemap.xml")).text();
 assert.equal((sitemap.match(/<loc>/g) || []).length, 23, "sitemap includes main and detail routes");
 assert.ok(sitemap.includes("/gallery"));
 assert.ok((await (await fetch(base + "/robots.txt")).text()).includes("sitemap.xml"));
 for (const missing of ["/equipment/unknown", "/services/unknown"]) assert.equal((await fetch(base + missing)).status, 404, missing);
 for (const path of ["/", "/bakery", "/butchery", "/services", "/equipment", "/gallery", "/about", "/contact", "/privacy", "/equipment/deck-oven-3-deck", "/services/emergency-repairs"]) {
  const response = await page.goto(base + path);
  assert.equal(response.status(), 200, path);
  await page.locator("h1").waitFor();
  if (path === "/") assert.equal(await page.locator("h1").textContent(), "BESS \u2014 Commercial Bakery & Butchery Equipment");
  assert.equal(await page.getByText("\u00a9 2026 BESS Commercial Equipment. All rights reserved.", {exact:true}).count(), 1);
  assert.ok((await page.title()).includes("BESS Commercial Equipment"));
  for (const selector of ['meta[name="description"]','meta[property="og:title"]','meta[property="og:description"]','meta[name="twitter:card"]','link[rel="canonical"]']) assert.equal(await page.locator(selector).count(), 1, path + selector);
  await page.waitForFunction(() => {
   let element = document.querySelector("h1");
   while (element) { if (Number(getComputedStyle(element).opacity) < 1) return false; element = element.parentElement; }
   return true;
  });
  const broken = await page.locator("img").evaluateAll(async images => {
   await Promise.all(images.map(image => {image.loading = "eager"; return image.decode().catch(() => undefined);}));
   return images.filter(image => !image.naturalWidth).map(image => image.getAttribute("src"));
  });
  assert.deepEqual(broken, [], `broken images: ${path}`);
  for (const section of ["header", "footer"]) {
   for (const href of ["https://www.linkedin.com/company/bess-commercial-equipment/", "https://www.facebook.com/profile.php?id=61595968351306", "https://wa.me/27768052041"]) {
    const links = page.locator(`${section} a[href="${href}"]`);
    assert.ok(await links.count(), `${section} missing ${href}`);
    for (const link of await links.all()) {
     assert.equal(await link.getAttribute("target"), "_blank");
     assert.equal(await link.getAttribute("rel"), "noopener noreferrer");
    }
   }
  }
  await page.getByText("BESS Commercial Equipment is a trading brand of BESS (Pty) Ltd.", {exact:true}).waitFor();
  assert.equal(await page.locator('footer a[href="mailto:Edwardndimbaeddie6@gmail.com"]').count(), 1);
  const results = await new AxeBuilder({page}).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"]).analyze();
  const violations = results.violations;
  if (violations.length) failures.push({path, violations: violations.map(v => ({id: v.id, impact: v.impact, nodes: v.nodes.map(n => ({html: n.html, summary: n.failureSummary}))}))});
  assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `desktop overflow: ${path}`);
 }
 // Category controls must filter the real range and restore the complete catalogue.
 for (const [path, total, categories] of [
  ["/bakery", 6, [["Ovens", 1], ["Mixers", 1], ["Dough preparation", 2], ["Slicers", 1], ["Proving", 1]]],
  ["/butchery", 5, [["Cutting", 1], ["Meat processing", 3], ["Cold storage", 1]]],
   ]) {
  await page.goto(base + path);
  const filters = page.getByRole("group", {name: /equipment categories/});
  for (const [label, count] of categories) {
   const control = filters.getByRole("button", {name: label, exact: true});
   await control.focus(); await page.keyboard.press("Enter");
   await page.waitForFunction(expected => document.querySelectorAll(".range-product-card").length === expected, count);
   assert.equal(await control.getAttribute("aria-pressed"), "true");
   assert.ok((await page.getByRole("status").textContent()).includes(String(count)));
   if (path === "/bakery" && label === "Ovens") assert.equal(await page.locator(".equipment-product-card").count(), 3);
   if (path === "/bakery" && label === "Dough preparation") assert.equal(await page.locator(".equipment-product-card").count(), 1);
  }
  await filters.getByRole("button", {name: "All equipment", exact: true}).click();
  await page.waitForFunction(expected => document.querySelectorAll(".range-product-card").length === expected, total);
  if (path === "/bakery") assert.equal(await page.locator(".equipment-product-card").count(), 10);
 }
 await page.goto(base + "/equipment/deck-oven-3-deck");
 await page.getByRole("link", {name: "Enquire for Pricing"}).click();
 await page.waitForURL("**/contact?product=deck-oven-3-deck");
 await page.getByText("Enquiry about:").waitFor();
 assert.equal(await page.locator('input[name="product"]').inputValue(), "deck-oven-3-deck");
 await page.getByLabel("Full Name").fill("Test Baker");
 await page.getByLabel("Email Address").fill("baker@example.test");
 await page.getByLabel("Phone Number").fill("+27768052041");
 await page.getByLabel("Your Message").fill("Please quote for this equipment.");
 let submitted;
 await page.route("**/api/contact", async route => { submitted = route.request().postDataJSON(); await route.fulfill({status: 200, contentType: "application/json", body: '{"message":"Accepted"}'}); });
 await page.getByRole("button", {name: "Send Message"}).click();
 await page.getByRole("heading", {name: "Message Sent!"}).waitFor();
 assert.equal(submitted.product, "deck-oven-3-deck");
 await page.goto(base + "/contact?division=butchery&request=catalog");
 assert.equal(await page.getByLabel("Equipment Division").inputValue(), "butchery");
 assert.equal(await page.getByLabel("Service Required").inputValue(), "catalog");
 assert.match(await page.getByLabel("Your Message").inputValue(), /butchery equipment catalog/);
 await page.getByLabel("Full Name").fill("Test Butcher");
 await page.getByLabel("Email Address").fill("butcher@example.test");
 await page.getByLabel("Phone Number").fill("+27768052041");
 await page.getByRole("button", {name: "Send Message"}).click();
 await page.getByRole("heading", {name: "Message Sent!"}).waitFor();
 assert.equal(submitted.division, "butchery"); assert.equal(submitted.service, "catalog");
 await page.goto(base + "/gallery");
 const firstImage = page.getByRole("button", {name: "View Industrial Production Line", exact: true});
 await firstImage.focus(); await page.keyboard.press("Enter");
 await page.getByRole("dialog").waitFor();
 await page.keyboard.press("ArrowRight");
 assert.equal(await page.locator("#lightbox-caption").textContent(), "Industrial Spiral Mixer");
 await page.keyboard.press("ArrowLeft");
 assert.equal(await page.locator("#lightbox-caption").textContent(), "Industrial Production Line");
 await page.keyboard.press("Escape");
 assert.equal(await page.getByRole("dialog").count(), 0);
 assert.ok(await firstImage.evaluate(el => el === document.activeElement), "focus restored to gallery image");
 await page.setViewportSize({width: 390, height: 844});
 for (const path of ["/", "/bakery", "/butchery", "/equipment", "/gallery", "/about", "/contact", "/privacy"]) {
  await page.goto(base + path); await page.locator("h1").waitFor();
  assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `mobile overflow: ${path}`);
 }
 await page.getByRole("button", {name: "Open menu"}).click();
 await page.locator("#mobile-navigation").getByRole("link", {name: "Bakery", exact: true}).click();
 await page.waitForURL("**/bakery");
 assert.equal(await page.getByRole("button", {name: "Open menu"}).getAttribute("aria-expanded"), "false");
 await page.locator("img").evaluateAll(async images => { await Promise.all(images.map(image => {image.loading = "eager"; return image.decode().catch(() => undefined);})); });
 await page.screenshot({path: "test-results/mobile-bakery.png", fullPage: true});
 await page.setViewportSize({width: 1440, height: 1000});
 await page.goto(base + "/");
 await page.waitForFunction(() => {let el = document.querySelector("h1"); while (el) {if (Number(getComputedStyle(el).opacity) < 1) return false; el = el.parentElement;} return true;});
 await page.screenshot({path: "test-results/home.png", fullPage: true});
 assert.deepEqual(errors, [], "browser errors");
 await writeFile("test-results/accessibility.json", JSON.stringify(failures, null, 2));
 assert.equal(failures.length, 0, "serious/critical accessibility findings; see test-results/accessibility.json");
 console.log("Browser QA passed: metadata, product enquiry, mocked form submit, gallery keys/focus, mobile navigation and overflow.");
} finally { await browser.close(); }



