export class NavSection {
  constructor(page) {
    this.navbarSection = page.getByTestId("navbar-section");
    this.navbarContainer = this.navbarSection.getByTestId("navbar-container");
    this.navbarBrandLink = this.navbarContainer.getByTestId("brand-link");
    this.navbarBrandName = this.navbarBrandLink.getByTestId("brand-name");
    this.navbarToggleButton =
      this.navbarContainer.getByTestId("toggle-button");
    this.navItemsSection = this.navbarContainer.getByTestId("items-section");
    this.navItemsList = this.navItemsSection.getByTestId("items-list");
    this.navItemHero = this.navItemsList.getByTestId("item-hero");
    this.navItemAbout = this.navItemsList.getByTestId("item-about");
    this.navItemSkills = this.navItemsList.getByTestId("item-skills");
    this.navItemProjects = this.navItemsList.getByTestId("item-projects");
    this.navItemContact = this.navItemsList.getByTestId("item-contact");
  }
}
