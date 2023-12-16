import React from "react";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Portfolio" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="sobre" heading="About Portfolio Minimal" />
        <ProjectsSection sectionId="projetos" heading="Built-in Features" />
        <ContactSection sectionId="contato" heading="Issues?" />
      </Page>
    </>
  );
}
