import { test, expect } from "@playwright/test";

// TODO: assert statments + conditionals

// Log in to Facebook if not already logged in
test("login", async ({ page }) => {
    // Page
    await page.goto("https://www.facebook.com/marketplace/");

    // User + pass
    await page.getByLabel("Email address or phone number").fill("");
    await page
        .getByLabel("Email address or phone number")
        .locator('xpath=following::input[@type="password"][1]')
        .fill("");

    // Log in
    await page.getByLabel("Log in to Facebook").click();
});
