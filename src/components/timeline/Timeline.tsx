import React from 'react';
import styled from '@emotion/styled';
import dompurify from 'isomorphic-dompurify';
import {Zoom, Slide} from 'react-awesome-reveal';
import {WorkExperience} from '../../models/resume';
import {Experience} from './Experience';

export default function Timeline({
  workExperiences,
}: {
  workExperiences: WorkExperience[];
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
              <Experience key={exp.id}>
                <Content exp={exp}></Content>
              </Experience>
            </Slide>
          );
        })}
      </div>
    </Container>
  );
}

const Content: React.FC<{exp: WorkExperience}> = ({exp}) => {
  return (
    <Zoom triggerOnce={true} cascade={true} duration={800}>
      <p className="name">{exp.company_name}</p>
      <p>
        <span className="title">{exp.title}</span> ({exp.role})
      </p>
      <p className="date">
        {exp.start_date} - {exp.end_date}
      </p>
      <ContentDescription
        dangerouslySetInnerHTML={{
          __html: dompurify.sanitize(exp.content),
        }}
      />
    </Zoom>
  );
};

const ContentDescription = styled.div`
  margin-top: 1rem;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;

  padding: var(--padding-medium) 0;
`;
