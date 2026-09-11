import { test, expect } from "@playwright/test";
import { FooterSection } from "../pages/footerpage";

test.describe("Testing footer section", async () => {
  let footerSection;

  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    footerSection = new FooterSection(page);
    await footerSection.footerSection.evaluate((el) =>
      el.scrollIntoView({ block: "center", behavior: "smooth" }),
    );
  });

  test("Verify that the copywright and social links are correctly displayed", async ({
    page,
  }) => {
    await test.step("Verify copyright text is visible", async () => {
      await expect(footerSection.footerCopyright).toContainText(
        "All Rights Reserved",
      );
      await page.waitForTimeout(2000);
    });

    await test.step("Verify all social links point to the right profiles", async () => {
      await expect(footerSection.footerSocialTwitter).toHaveAttribute(
        "href",
        "https://x.com/explorewithsk27",
      );
      await expect(footerSection.footerSocialLinkedin).toHaveAttribute(
        "href",
        "https://www.linkedin.com/in/shubhamkandpal27/",
      );
      await expect(footerSection.footerSocialGithub).toHaveAttribute(
        "href",
        "https://github.com/Shubham-kpl/",
      );
      await page.waitForTimeout(3000);
    });
  });
});
