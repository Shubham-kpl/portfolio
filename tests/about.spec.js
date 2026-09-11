import { test, expect } from "@playwright/test";
import { AboutSection } from "../pages/aboutpage";

test.describe("Testing data in about section", async () => {
  let aboutSection;

  test.beforeEach(async ({ page }) => {
    await page.goto("/#about");
    aboutSection = new AboutSection(page);
  });

  test("Verify that components are visible and data is rendered correctly", async ({
    page,
  }) => {
    await test.step("Verify about section heading is visible", async () => {
      await expect(aboutSection.aboutSection).toBeVisible();
      await expect(aboutSection.aboutHeading).toContainText("ABOUT ME");
    });

    await test.step("Verify job experience details", async () => {
      await aboutSection.aboutJobExperience.evaluate((el) =>
        el.scrollIntoView({ block: "center", behavior: "smooth" }),
      );
      await expect(aboutSection.aboutJobExperienceHeading).toContainText(
        "Job Experience",
      );
      await expect(aboutSection.aboutJobExperienceF2pHeading).toContainText(
        "Quality Analyst",
      );
      await expect(aboutSection.aboutJobExperienceF2pSubheading).toContainText(
        "FanToPark Sports Pvt. Ltd.",
      );
      await page.waitForTimeout(2000);
    });

    await test.step("Verify all education entries and grades", async () => {
      await aboutSection.aboutEducation.evaluate((el) =>
        el.scrollIntoView({ block: "center", behavior: "smooth" }),
      );
      await expect(aboutSection.aboutEducationHeading).toContainText(
        "Education",
      );

      await test.step("Bachelor of Technology", async () => {
        await expect(aboutSection.aboutEducationBtechHeading).toContainText(
          "Bachelor of Technology",
        );
        await expect(aboutSection.aboutEducationBtechSubheading).toContainText(
          "College of Technology, Pantnagar",
        );
        await expect(aboutSection.aboutEducationBtechGrade).toHaveText("8.165");
      });

      await test.step("Intermediate", async () => {
        await expect(aboutSection.aboutEducationInterHeading).toContainText(
          "Intermediate",
        );
        await expect(aboutSection.aboutEducationInterGrade).toHaveText("96%");
      });

      await test.step("Highschool", async () => {
        await expect(aboutSection.aboutEducationMatricHeading).toContainText(
          "Highschool",
        );
        await expect(aboutSection.aboutEducationMatricGrade).toHaveText(
          "90.8%",
        );
      });
      await page.waitForTimeout(5000);
    });
  });
});
