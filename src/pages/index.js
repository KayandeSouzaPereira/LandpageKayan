import React from "react";
import {
  HeroSection,
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
        <div style={{display:"flex",position:"absolute",top:200,left: 50}}><HeroSection sectionId="hero"/></div>
       {/*  <div style={{display:"flex",position:"absolute",top:200,right: 50,backgroundColor:"#000000",width:450,height:500}}></div> */}
        <div style={{height:50}}></div>
        <AboutSection sectionId="sobre" heading="Sobre mim" />
        <ProjectsSection sectionId="projetos" heading="Projetos" />
        <ContactSection sectionId="contato" heading="Contato" />
      </Page>
    </>
  );
}
