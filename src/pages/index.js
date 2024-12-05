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
        <iframe src='https://my.spline.design/particlenebula-86230cc87752e77a51907b3f39fd4a15/' frameborder='0' width='100%' height='30%'/>
        <AboutSection sectionId="sobre" heading="Sobre mim" />
        <ProjectsSection sectionId="projetos" heading="Projetos" />
        <ContactSection sectionId="contato" heading="Contato" />
      </Page>
    </>
  );
}
