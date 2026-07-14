import { test, expect } from "@playwright/test";

test("Beeceptor HTTP Callout Assignment", async ({ page }) => {
  await page.goto("https://app.beeceptor.com/login");

  await page.getByRole("button", { name: "Sign in with OTP" }).click();
  await page.waitForTimeout(1500);

  await page.getByRole("textbox", { name: "Email address" }).click();
  await page
    .getByRole("textbox", { name: "Email address" })
    .fill("syedkhizer1308@gmail.com");

  await page.waitForTimeout(2000);

  await page.getByRole("button", { name: "Send OTP" }).click();

  await page.pause();

  await page.getByRole("button", { name: "Sign in", exact: true }).click();
  await page.waitForTimeout(5000);

  await page.getByRole("button", { name: "user-avatar Syed Kh..." }).click();
  await page.waitForTimeout(5000);

  await page.getByRole("link", { name: "Your Endpoints" }).click();
  await page.waitForTimeout(8000);

  await page
    .getByRole("link", { name: "#khizer-playwright-beeceptor" })
    .click();
  await page.waitForTimeout(5000);

  await page.locator("a").filter({ hasText: "Mock Rules (1)" }).click();
  await page.waitForTimeout(5000);

  await page.getByRole("button", { name: "Toggle Dropdown" }).click();
  await page.waitForTimeout(2000);

  await page.getByRole("link", { name: " New Callout Rule" }).click();
  await page.waitForTimeout(2000);
  
  await page.getByRole("combobox").first().selectOption("POST");
  await page.waitForTimeout(2000);
  
  await page.getByRole("textbox", { name: "e.g. /api/path" }).click();
  await page.getByRole("textbox", { name: "e.g. /api/path" }).fill("/test");
  await page.waitForTimeout(3000);
  
  await page
  .locator("#v2CollapseOne")
  .getByRole("combobox")
  .selectOption("async");
  await page.waitForTimeout(3000);
  
  await page.getByRole("combobox").nth(3).selectOption("POST");
  
  await page
  .getByRole("textbox", { name: "https://your-webhook-endpoint" })
  .click();
  await page.waitForTimeout(3000);
  
  await page
  .getByRole("textbox", { name: "https://your-webhook-endpoint" })
  .fill("https://webhook.site/ad167e41-c142-497c-ab5e-4c1e3b19443a");
  await page.waitForTimeout(3000);


  await page.getByRole("button", { name: " Save" }).click();
  await page.waitForTimeout(3000);

  await page.getByRole("button", { name: "Close" }).click();
  await page.waitForTimeout(10000);
  
  const response = await page.request.post(
    "https://khizer-playwright-beeceptor.free.beeceptor.com/test",
    {
      data: {
        name: "Syed Khizer",
        role: "Software Developer Intern",
        source: "Playwright Assignment",
      },
    },
  );
  
  expect(response.status()).toBe(200);
  await page.waitForTimeout(12000);

  const responseBody = await response.json();

  expect(responseBody.message).toBe("This is an instant response!");

  await page.waitForTimeout(3000);

  await page.locator("a").filter({ hasText: "Mock Rules (2)" }).click();
  await page.waitForTimeout(500);

  page.once("dialog", async (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    await dialog.accept();
  });

  await page.getByRole("button", { name: "Delete rule" }).click();
  await page.getByRole("button", { name: "Close" }).click();
});
