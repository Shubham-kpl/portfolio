export class FooterSection {
  constructor(page) {
    this.footerSection = page.getByTestId("footer-section");
    this.footerContainer = page.getByTestId("footer-container");
    this.footerCopyright = page.getByTestId("footer-copyright");
    this.footerSocial = page.getByTestId("footer-social");
    this.footerSocialTwitter = page.getByTestId("footer-social-twitter");
    this.footerSocialLinkedin = page.getByTestId("footer-social-linkedin");
    this.footerSocialGithub = page.getByTestId("footer-social-github");
  }
}
