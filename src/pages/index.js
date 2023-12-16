import React from "react";
import {
  AboutSection,
  ContactSection,
  HeroSection,
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
        <AboutSection sectionId="sobre" heading="Sobre mim" />
        <ProjectsSection sectionId="projetos" heading="Projetos" />
        <ContactSection sectionId="contato" heading="Contato" />
      </Page>
    </>
  );
}
