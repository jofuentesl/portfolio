import React from 'react';
import { DiFirebase, DiCss3, DiAngularSimple } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        asdfasdfafas,pñas,kfàsfkàsfkàspfkàsfkàsfas-.,.,.a
      </SectionText>
      <List>
        <ListItem>
          <DiAngularSimple size="3rem" />
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experiencs with <br />
              WordPress, Drupal and Angular
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiFirebase size="3rem" />
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Experiencs with <br />
              Node and MySql
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiCss3 size="3rem" />
          <ListContainer>
            <ListTitle>Design</ListTitle>
            <ListParagraph>
              Experiencs with <br />
              SCCS
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
  </Section>
);

export default Technologies;
