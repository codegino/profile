import React from 'react';
import {WorkExperience} from '../models/resume';
import styled from '@emotion/styled';

const WorkExperienceContainer = styled.div`
  padding: 1rem;
  border: 1px solid black;
`;

export default function Resume({
  workExperiences,
}: {
  workExperiences: WorkExperience[];
}) {
  return (
    <main>
      <h2>Work Experience</h2>
      {workExperiences.map(exp => {
        return (
          <WorkExperienceContainer key={exp.id}>
            <p>{exp.company_name}</p>
            <p>{exp.title}</p>
            <p>{exp.role}</p>
          </WorkExperienceContainer>
        );
      })}
    </main>
  );
}
