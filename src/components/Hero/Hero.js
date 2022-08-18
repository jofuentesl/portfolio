import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Bienvenidos a <br />
        mi página personal
      </SectionTitle>
      <SectionText>
        Desarrollador front-end con más de 10 años de experiencia ubicado en la ciudad de Barcelona
      </SectionText>
      <Button onClick={()=> window.location = 'https://google.com'}>Saber más</Button>
    </LeftSection>
  </Section>
);

export default Hero;