export class SkillsSection {
  constructor(page) {
    this.skillsSection = page.getByTestId("skills-section");

    const skills = ["html", "css", "js", "react", "node", "bootstrap"];

    this.skills = {};
    for (const skill of skills) {
      const card = this.skillsSection.getByTestId(skill);
      this.skills[skill] = {
        card,
        icon: card.getByTestId("icon"),
        name: card.getByTestId("name"),
        description: card.getByTestId("description"),
        readMore: card.getByTestId("read-more"),
      };
    }
  }
}
