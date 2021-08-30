import React from 'react';
import {WorkExperience} from '../../models/resume';
import styled from '@emotion/styled';

const ExperienceContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 1;
  margin-bottom: 2rem;
  border: 1px solid black;

  .content {
    padding: 1rem;
    height: 100%;
    width: 100%;
  }

  :not(:first-of-type) {
    .connector {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: black;
      width: 0.25rem;
      height: 2.5rem;
      position: absolute;
      top: -2.25rem;

      ::before {
        content: '';
        width: 0.75rem;
        height: 0.75rem;
        position: absolute;
        background-color: red;
        border-radius: 50%;
      }
    }
  }

  :first-of-type {
    .connector {
      display: none;
    }
  }
`;

const Experience = ({children}: {children: any}) => {
  return (
    <ExperienceContainer>
      <div className="connector">&nbsp;</div>
      <div className="content">{children}</div>
    </ExperienceContainer>
  );
};

const TimelineContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default function Timeline({
  workExperiences,
}: {
  workExperiences: WorkExperience[];
}) {
  return (
    <TimelineContainer>
      <div>
        <Experience>
          <h3>Work Experiences</h3>
        </Experience>
        {workExperiences.map(exp => {
          return (
            <Experience key={exp.id}>
              <div>
                <p>{exp.company_name}</p>
                <p>{exp.title}</p>
                <p>{exp.role}</p>
              </div>
            </Experience>
          );
        })}
        <Experience>
          <h3>Education</h3>
        </Experience>
        {workExperiences.map(exp => {
          return (
            <Experience key={exp.id}>
              <div>
                <p>{exp.company_name}</p>
                <p>{exp.title}</p>
                <p>{exp.role}</p>
              </div>
            </Experience>
          );
        })}
      </div>
    </TimelineContainer>
  );
}
