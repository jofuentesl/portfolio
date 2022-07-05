import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Wellcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Lasdfadsfaasdfasñldfjasñlfdñasl asñfjasñlfjlasfj asfjñlasdfkjañl asdflkas´dfljasl´dfja sasdfajs´ldfjas´ldfjasldfjaslfjasfdasdflasjd´l
      </SectionText>
      <Button onClick={()=> window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;