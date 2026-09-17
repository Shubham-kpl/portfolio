export class ProjectsSection {
  constructor(page) {
    this.projectsSection = page.getByTestId("projects-section");
    this.projectsContainer =
      this.projectsSection.getByTestId("projects-container");
    this.projectsSubheading = this.projectsContainer.getByTestId(
      "projects-subheading",
    );
    this.projectsHeading =
      this.projectsContainer.getByTestId("projects-heading");

    const projects = ["todo", "ecom"];

    this.projects = {};
    for (const project of projects) {
      const card = this.projectsSection.getByTestId(project);
      this.projects[project] = {
        card,
        link: card.getByTestId("link"),
        name: card.getByTestId("name"),
        description: card.getByTestId("description"),
        readMore: card.getByTestId("read-more"),
      };
    }
  }
}
