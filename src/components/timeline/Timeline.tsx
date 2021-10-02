import React, {useCallback} from 'react';
import styled from '@emotion/styled';
import {WorkExperience} from '../../models/resume';
import dompurify from 'isomorphic-dompurify';

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

  text-align: center;

  .date {
    font-weight: 0.8em;
    font-style: italic;
  }

  .name {
    font-size: 1.5em;
    font-weight: bold;
  }

  .title {
    font-weight: bold;
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
  padding: var(--padding-medium) 0;
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
                <p className="name">{exp.company_name}</p>
                <p>
                  <span className="title">{exp.title}</span> ({exp.role})
                </p>
                <p className="date">
                  {exp.start_date} - {exp.end_date}
                </p>
                <div
                  dangerouslySetInnerHTML={{
                    __html: dompurify.sanitize(exp.content),
                  }}
                />
              </div>
            </Experience>
          );
        })}
      </div>
    </TimelineContainer>
  );
}
