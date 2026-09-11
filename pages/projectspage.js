export class ProjectsSection {
  constructor(page) {
    this.projectsSection = page.getByTestId("projects-section");
    this.projectsContainer = page.getByTestId("projects-container");
    this.projectsSubheading = page.getByTestId("projects-subheading");
    this.projectsHeading = page.getByTestId("projects-heading");

    const projects = ["todo", "ecom"];

    this.projects = {};
    for (const project of projects) {
      this.projects[project] = {
        card: page.getByTestId(`projects-item-${project}`),
        link: page.getByTestId(`projects-item-${project}-link`),
        name: page.getByTestId(`projects-item-${project}-name`),
        description: page.getByTestId(`projects-item-${project}-description`),
        readMore: page.getByTestId(`projects-item-${project}-read-more`),
      };
    }
  }
}
