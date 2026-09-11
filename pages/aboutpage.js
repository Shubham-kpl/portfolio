export class AboutSection {
  constructor(page) {
    this.aboutSection = page.getByTestId("about-section");
    this.aboutContainer = page.getByTestId("about-container");
    this.aboutHeading = page.getByTestId("about-heading");

    this.aboutJobExperience = page.getByTestId("about-job-experience");
    this.aboutJobExperienceHeading = page.getByTestId(
      "about-job-experience-heading",
    );
    this.aboutJobExperienceF2p = page.getByTestId("about-job-experience-f2p");
    this.aboutJobExperienceF2pHeading = page.getByTestId(
      "about-job-experience-f2p-heading",
    );
    this.aboutJobExperienceF2pSubheading = page.getByTestId(
      "about-job-experience-f2p-subheading",
    );

    this.aboutEducation = page.getByTestId("about-education");
    this.aboutEducationHeading = page.getByTestId("about-education-heading");

    this.aboutEducationBtech = page.getByTestId("about-education-btech");
    this.aboutEducationBtechHeading = page.getByTestId(
      "about-education-btech-heading",
    );
    this.aboutEducationBtechSubheading = page.getByTestId(
      "about-education-btech-subheading",
    );
    this.aboutEducationBtechGrade = page.getByTestId(
      "about-education-btech-grade",
    );
    this.aboutEducationBtechDescription = page.getByTestId(
      "about-education-btech-description",
    );

    this.aboutEducationInter = page.getByTestId("about-education-inter");
    this.aboutEducationInterHeading = page.getByTestId(
      "about-education-inter-heading",
    );
    this.aboutEducationInterSubheading = page.getByTestId(
      "about-education-inter-subheading",
    );
    this.aboutEducationInterGrade = page.getByTestId(
      "about-education-inter-grade",
    );

    this.aboutEducationMatric = page.getByTestId("about-education-matric");
    this.aboutEducationMatricHeading = page.getByTestId(
      "about-education-matric-heading",
    );
    this.aboutEducationMatricSubheading = page.getByTestId(
      "about-education-matric-subheading",
    );
    this.aboutEducationMatricGrade = page.getByTestId(
      "about-education-matric-grade",
    );
  }
}
