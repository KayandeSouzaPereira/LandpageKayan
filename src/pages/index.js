import React from "react";
import {
  AboutSection,
  ContactSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Kayan Pereira" />
      <Page useSplashScreenAnimation>
      <iframe src='https://my.spline.design/particles-817324725c7fde81d95a44a5bd6fb640/' frameborder='0' width='100%' height='30%'/>
        <AboutSection sectionId="sobre" heading="Sobre mim" />
        <ProjectsSection sectionId="projetos" heading="Projetos" />
        <ContactSection sectionId="contato" heading="Contato" />
      </Page>
    </>
  );
}
