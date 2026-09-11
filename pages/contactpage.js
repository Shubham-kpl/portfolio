export class ContactSection {
  constructor(page) {
    this.contactSection = page.getByTestId("contact-section");
    this.contactContainer = page.getByTestId("contact-container");
    this.contactSubheading = page.getByTestId("contact-subheading");
    this.contactHeading = page.getByTestId("contact-heading");
    this.contactForm = page.getByTestId("contact-form");
    this.nameInput = page.getByTestId("contact-name-input");
    this.emailInput = page.getByTestId("contact-email-input");
    this.subjectInput = page.getByTestId("contact-subject-input");
    this.messageInput = page.getByTestId("contact-message-input");
    this.submitButton = page.getByTestId("contact-submit-button");
  }
}
