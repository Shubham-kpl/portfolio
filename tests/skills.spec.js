import { test, expect } from "@playwright/test";
import { SkillsSection } from "../pages/skillspage";

const SKILL_LABELS = {
  html: "HTML",
  css: "CSS",
  js: "Javascript",
  react: "React JS",
  node: "Node JS",
  bootstrap: "Bootstrap",
};

test.describe("Testing data in skills section", async () => {
  let skillsSection;

  test.beforeEach(async ({ page }) => {
    await page.goto("/#skills");
    skillsSection = new SkillsSection(page);
  });

  test("Verify every skill card renders its name, icon and read more link", async ({
    page,
  }) => {
    await expect(skillsSection.skillsSection).toBeVisible();

    for (const [skill, label] of Object.entries(SKILL_LABELS)) {
      await test.step(`Verify ${label} card`, async () => {
        const card = skillsSection.skills[skill];
        await card.card.evaluate((el) =>
          el.scrollIntoView({ block: "center", behavior: "smooth" }),
        );
        await expect(card.card).toBeVisible();
        await expect(card.icon).toBeVisible();
        await expect(card.name).toHaveText(label);
        await expect(card.readMore).toBeVisible();
        await page.waitForTimeout(800);
      });
    }
  });
});
