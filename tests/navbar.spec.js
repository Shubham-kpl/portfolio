import { test, expect } from "@playwright/test";
import { NavSection } from "../pages/navpage";
import { HeroSection } from "../pages/homepage";
import { AboutSection } from "../pages/aboutpage";
import { SkillsSection } from "../pages/skillspage";
import { ProjectsSection } from "../pages/projectspage";
import { ContactSection } from "../pages/contactpage";

test.describe("Verify contents and navigation in nav bar", async () => {
  let navSection,
    heroSection,
    aboutSection,
    skillsSection,
    projectsSection,
    contactSection;

  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle("Shubham Kandpal Portfolio");
    navSection = new NavSection(page);
    heroSection = new HeroSection(page);
    aboutSection = new AboutSection(page);
    skillsSection = new SkillsSection(page);
    projectsSection = new ProjectsSection(page);
    contactSection = new ContactSection(page);
  });

  test("Verify that all nav items are visible", async () => {
    for (const item of [
      navSection.navItemHero,
      navSection.navItemAbout,
      navSection.navItemSkills,
      navSection.navItemProjects,
      navSection.navItemContact,
    ]) {
      await expect(item).toBeVisible();
    }
  });

  test("Verify that the nav links route properly", async ({ page }) => {
    await test.step("Verify that About nav item navigates to about section", async () => {
      await navSection.navItemAbout.click();
      await expect(aboutSection.aboutSection).toBeInViewport();
      await page.waitForTimeout(2000);
    });

    await test.step("Verify that Skills nav item navigates to skills section", async () => {
      await navSection.navItemSkills.click();
      await expect(skillsSection.skillsSection).toBeInViewport();
      await page.waitForTimeout(2000);
    });

    await test.step("Verify that Projects nav item navigates to projects section", async () => {
      await navSection.navItemProjects.click();
      await expect(projectsSection.projectsSection).toBeInViewport();
      await page.waitForTimeout(2000);
    });

    await test.step("Verify that Contact nav item navigates to contact section", async () => {
      await navSection.navItemContact.click();
      await expect(contactSection.contactSection).toBeInViewport();
      await page.waitForTimeout(2000);
    });

    await test.step("Verify that Home nav item navigates back to hero section", async () => {
      await navSection.navItemHero.click();
      await expect(heroSection.heroContainer).toBeInViewport();
      await page.waitForTimeout(2000);
    });
  });
});
