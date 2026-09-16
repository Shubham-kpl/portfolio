export class AboutSection {
  constructor(page) {
    this.aboutSection = page.getByTestId("about-section");
    this.aboutContainer = this.aboutSection.getByTestId("about-container");
    this.aboutHeading = this.aboutContainer.getByTestId("about-heading");

    this.aboutJobExperience =
      this.aboutContainer.getByTestId("job-experience");
    this.aboutJobExperienceHeading =
      this.aboutJobExperience.getByTestId("title");
    this.aboutJobExperienceF2p = this.aboutJobExperience.getByTestId("f2p");
    this.aboutJobExperienceF2pHeading =
      this.aboutJobExperienceF2p.getByTestId("heading");
    this.aboutJobExperienceF2pSubheading =
      this.aboutJobExperienceF2p.getByTestId("subheading");

    this.aboutEducation = this.aboutContainer.getByTestId("education");
    this.aboutEducationHeading = this.aboutEducation.getByTestId("title");

    this.aboutEducationBtech = this.aboutEducation.getByTestId("btech");
    this.aboutEducationBtechHeading =
      this.aboutEducationBtech.getByTestId("heading");
    this.aboutEducationBtechSubheading =
      this.aboutEducationBtech.getByTestId("subheading");
    this.aboutEducationBtechGrade =
      this.aboutEducationBtech.getByTestId("grade");
    this.aboutEducationBtechDescription =
      this.aboutEducationBtech.getByTestId("description");

    this.aboutEducationInter = this.aboutEducation.getByTestId("inter");
    this.aboutEducationInterHeading =
      this.aboutEducationInter.getByTestId("heading");
    this.aboutEducationInterSubheading =
      this.aboutEducationInter.getByTestId("subheading");
    this.aboutEducationInterGrade =
      this.aboutEducationInter.getByTestId("grade");

    this.aboutEducationMatric = this.aboutEducation.getByTestId("matric");
    this.aboutEducationMatricHeading =
      this.aboutEducationMatric.getByTestId("heading");
    this.aboutEducationMatricSubheading =
      this.aboutEducationMatric.getByTestId("subheading");
    this.aboutEducationMatricGrade =
      this.aboutEducationMatric.getByTestId("grade");
  }
}
