import { test, expect } from "@playwright/test";
import { ContactSection } from "../pages/contactpage";

test.describe("Testing contact form", async () => {
  let contactSection;

  test.beforeEach(async ({ page }) => {
    await page.goto("/#contact");
    contactSection = new ContactSection(page);
  });

  test("Verify Visibility & Fill Contact Form", async ({ page }) => {
    await test.step("Verify contact section heading and form are visible", async () => {
      await contactSection.contactForm.evaluate((el) =>
        el.scrollIntoView({ block: "center", behavior: "smooth" }),
      );
      await expect(contactSection.contactSection).toBeVisible();
      await expect(contactSection.contactHeading).toContainText(
        "Have an idea in mind?",
      );
      await expect(contactSection.contactForm).toBeVisible();
      await page.waitForTimeout(2000);
    });

    await test.step("Verify all fields accept input, in order", async () => {
      await test.step("fill name", async () => {
        await contactSection.nameInput.fill("Shubham Kandpal");
        await page.waitForTimeout(800);
      });
      await test.step("fill email", async () => {
        await contactSection.emailInput.fill("codewithsk27@gmail.com");
        await page.waitForTimeout(800);
      });
      await test.step("fill subject", async () => {
        await contactSection.subjectInput.fill("Playwright Discussion");
        await page.waitForTimeout(800);
      });
      await test.step("fill message", async () => {
        await contactSection.messageInput.fill("Lets connect in afternoon!");
        await page.waitForTimeout(800);
      });

      await expect(contactSection.nameInput).toHaveValue("Shubham Kandpal");
      await expect(contactSection.emailInput).toHaveValue(
        "codewithsk27@gmail.com",
      );
      await expect(contactSection.subjectInput).toHaveValue(
        "Playwright Discussion",
      );
      await expect(contactSection.messageInput).toHaveValue(
        "Lets connect in afternoon!",
      );
      await expect(contactSection.submitButton).toBeEnabled();
      await contactSection.submitButton.click();
      await page.waitForTimeout(2000);
    });
  });
});
