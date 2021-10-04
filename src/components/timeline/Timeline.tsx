import React from 'react';
import styled from '@emotion/styled';
import dompurify from 'isomorphic-dompurify';
import {Zoom, Slide} from 'react-awesome-reveal';
import {WorkExperience} from '../../models/resume';
import {Experience} from './Experience';

export default function Timeline({
  workExperiences,
  educationExperiences,
}: {
  workExperiences: WorkExperience[];
  educationExperiences: WorkExperience[];
}) {
  return (
    <Container>
      <div>
        <Slide triggerOnce={true} direction="down">
          <Experience>
            <h3>Work Experiences</h3>
          </Experience>
        </Slide>
        {workExperiences.map((exp, i) => {
          return (
            <Slide
              key={exp.id}
              direction={i % 2 ? 'left' : 'right'}
              triggerOnce={true}
            >
              <Experience key={exp.id} hasConnector>
                <Content exp={exp}>
                  <ContentDescription
                    dangerouslySetInnerHTML={{
                      __html: dompurify.sanitize(exp.content),
                    }}
                  />
                </Content>
              </Experience>
            </Slide>
          );
        })}

        <Slide triggerOnce={true} direction="down">
          <Experience hasConnector>
            <h3>Education</h3>
          </Experience>
        </Slide>
        {educationExperiences.map((exp, i) => {
          return (
            <Slide
              key={exp.id}
              direction={i % 2 ? 'left' : 'right'}
              triggerOnce={true}
            >
              <Experience key={exp.id} hasConnector={true}>
                <Content exp={exp}>
                  <span />
                </Content>
              </Experience>
            </Slide>
          );
        })}
      </div>
    </Container>
  );
}

const Content: React.FC<{exp: WorkExperience}> = ({exp, children = null}) => {
  return (
    <Zoom
      triggerOnce={true}
      cascade={true}
      duration={800}
      style={{maxWidth: '45rem'}}
    >
      <p className="name">{exp.organization}</p>
      <p>
        <span className="title">{exp.title}</span> ({exp.role})
      </p>
      <p className="date">
        {exp.start_date} - {exp.end_date}
      </p>
      {children}
    </Zoom>
  );
};

const ContentDescription = styled.div`
  margin-top: 1rem;
  text-align: left;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: var(--padding-medium) 0;
`;
