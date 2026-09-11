export class HeroSection {
  constructor(page) {
    this.heroSection = page.getByTestId("hero-section");
    this.heroContainer = page.getByTestId("hero-container");
    this.heroHeading = page.getByTestId("hero-heading");
    this.heroSubheading = page.getByTestId("hero-subheading");
    this.heroProjectsButton = page.getByTestId("hero-projects-button");
    this.heroContactMe = page.getByTestId("hero-contact-me");
  }
}
