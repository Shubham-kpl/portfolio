import { test, expect } from "@playwright/test";
import { HeroSection } from "../pages/homepage";
import { ProjectsSection } from "../pages/projectspage";

test.describe("Testing data in hero section", async () => {
  let heroSection, projectsSection;

  // Before any test, goto base url
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    heroSection = new HeroSection(page);
    projectsSection = new ProjectsSection(page);
  });

  test("Verify heropage, intro description and statement and click on Projects", async ({
    page,
  }) => {
    await test.step("Verify heropage, intro description and statement", async () => {
      await expect(heroSection.heroContainer).toBeVisible();
      await expect(heroSection.heroHeading).toContainText(
        "I'M A WEB DEVELOPER FROM HALDWANI, INDIA",
      );
      await expect(heroSection.heroSubheading).toContainText(
        "Web Developer and competitive programmer",
      );
      await expect(heroSection.heroProjectsButton).toBeVisible();
      await page.waitForTimeout(3000);
    });

    await test.step("Verify project button and correct navigation", async () => {
      await heroSection.heroProjectsButton.click();
      await expect(projectsSection.projectsSection).toBeInViewport();
      await page.waitForTimeout(3000);
    });
  });
});
