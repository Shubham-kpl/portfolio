export class HeroSection {
  constructor(page) {
    this.heroSection = page.getByTestId("hero-section");
    this.heroContainer = this.heroSection.getByTestId("hero-container");
    this.heroHeading = this.heroContainer.getByTestId("heading");
    this.heroSubheading = this.heroContainer.getByTestId("subheading");
    this.heroProjectsButton =
      this.heroContainer.getByTestId("projects-button");
    this.heroContactMe = this.heroContainer.getByTestId("contact-me");
  }
}
