export class NavSection {
  constructor(page) {
    this.navbarSection = page.getByTestId("navbar-section");
    this.navbarBrandLink = page.getByTestId("navbar-brand-link");
    this.navbarBrandName = page.getByTestId("navbar-brand-name");
    this.navbarToggleButton = page.getByTestId("navbar-toggle-button");
    this.navItemsSection = page.getByTestId("navbar-items-section");
    this.navItemsList = page.getByTestId("navbar-items-list");
    this.navItemHero = page.getByTestId("navbar-item-hero");
    this.navItemAbout = page.getByTestId("navbar-item-about");
    this.navItemSkills = page.getByTestId("navbar-item-skills");
    this.navItemProjects = page.getByTestId("navbar-item-projects");
    this.navItemContact = page.getByTestId("navbar-item-contact");
  }
}
