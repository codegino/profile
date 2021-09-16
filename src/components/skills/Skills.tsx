import styled from '@emotion/styled';
import Link from 'next/link';
import React from 'react';

import {CategorizedSkill} from '../../models/skill';

const SkillContainer = styled.div`
  border: 1px solid black;
  padding: 0.25rem 1rem;
  border-radius: 0.5rem;
  width: fit-content;

  :not(:last-child) {
    margin-right: 0.25rem;
  }
`;

const SkillsContainer = styled.div`
  .skills {
    display: flex;
    flex-direction: row;
  }
`;

export default function Skills({skills}: {skills: CategorizedSkill[]}) {
  return (
    <SkillsContainer>
      {skills.map(category => {
        return (
          <div key={category.category}>
            <h3>{category.category.toUpperCase()}</h3>
            <div className="skills">
              {category.skills.map(skill => {
                return (
                  <SkillContainer key={skill.id} title={skill.description}>
                    <Link href={skill.url}>
                      <a target="_blank">{skill.name}</a>
                    </Link>
                  </SkillContainer>
                );
              })}
            </div>
          </div>
        );
      })}
    </SkillsContainer>
  );
}
