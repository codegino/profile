import React from 'react';
import styled from '@emotion/styled';
import {FaDumbbell} from '@react-icons/all-files/fa/FaDumbbell';
import Link from 'next/link';
import {CategorizedSkill} from '../../models/skill';

export default function Skills({skills}: {skills: CategorizedSkill[]}) {
  return (
    <SkillsContainer>
      <h2>
        <FaDumbbell />
        &nbsp; Skills
      </h2>
      {skills.map(category => {
        return (
          <div key={category.category}>
            <h3 className="label">{category.category.toUpperCase()}</h3>
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

const SkillContainer = styled.div`
  border: 1px solid black;
  padding: var(--padding-very-small) var(--padding-small);
  border-radius: 0.5rem;
  width: fit-content;
  background-color: var(--color-dark);
  color: var(--color-light);
  transition: all 0.5s;

  :not(:last-child) {
    margin-right: var(--margin-very-small);
  }

  :hover {
    color: var(--color-dark);
    background-color: var(--color-light);
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--color-light);
  padding-bottom: var(--padding-small);

  .skills {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 0.5rem;
  }

  .label {
    text-align: center;
  }
`;
