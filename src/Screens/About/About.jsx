import React from "react";
import Header from "./Header";
import Section from "./Section";
import Projects from "./Projects";
import Team from "./Team";
import ContactUs from "./Contact";
import CoreValues from "./CoreValues";
import KeyFeaturesAndOutcomes from "./KeyFeaturesAndOutcomes";


const About = () => {
  return (
    <div className=" font-sans">
      <Header />
      {/* <Section /> */}
      <CoreValues></CoreValues>
      <KeyFeaturesAndOutcomes></KeyFeaturesAndOutcomes>
      <Projects />
      <Team />
     
    </div>
  );
};

export default About;
