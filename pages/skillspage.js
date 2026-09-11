export class SkillsSection {
  constructor(page) {
    this.skillsSection = page.getByTestId("skills-section");

    const skills = ["html", "css", "js", "react", "node", "bootstrap"];

    this.skills = {};
    for (const skill of skills) {
      this.skills[skill] = {
        card: page.getByTestId(`skills-item-${skill}`),
        icon: page.getByTestId(`skills-item-${skill}-icon`),
        name: page.getByTestId(`skills-item-${skill}-name`),
        description: page.getByTestId(`skills-item-${skill}-description`),
        readMore: page.getByTestId(`skills-item-${skill}-read-more`),
      };
    }
  }
}
