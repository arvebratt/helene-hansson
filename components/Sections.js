import React, { Fragment } from 'react';
import { Section } from 'react-scroll-section';
import { SectionContainer } from './Builders';
import Home from './sections/Home';
import Faq from './sections/Faq';
import Contact from './sections/Contact';

const Sections = () => (
  <Fragment>
    <Section id='home'>
      <SectionContainer background="accent3">
        <Home />
      </SectionContainer>
    </Section>
    <Section id='faq'>
      <SectionContainer background="accent2">
        <Faq />
      </SectionContainer>
    </Section>
    <Section id='contact'>
      <SectionContainer background="accent3">
        <Contact />
      </SectionContainer>
    </Section>
  </Fragment>
);

export default Sections;