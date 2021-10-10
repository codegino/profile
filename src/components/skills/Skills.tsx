import React from 'react';
import styled from '@emotion/styled';
import {FaCheckDouble} from '@react-icons/all-files/fa/FaCheckDouble';
import {FaDatabase} from '@react-icons/all-files/fa/FaDatabase';
import {FaDumbbell} from '@react-icons/all-files/fa/FaDumbbell';
import {FaNodeJs} from '@react-icons/all-files/fa/FaNodeJs';
import {FaPalette} from '@react-icons/all-files/fa/FaPalette';
import {FaRandom} from '@react-icons/all-files/fa/FaRandom';
import {FaReact} from '@react-icons/all-files/fa/FaReact';
import {FaServer} from '@react-icons/all-files/fa/FaServer';
import {FaStar} from '@react-icons/all-files/fa/FaStar';
import {FaThumbsUp} from '@react-icons/all-files/fa/FaThumbsUp';
import {FaTools} from '@react-icons/all-files/fa/FaTools';
import Link from 'next/link';
import {Zoom, Slide} from 'react-awesome-reveal';
import {CategorizedSkill, SkillCategory} from '../../models/skill';

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
            <Slide direction="down" triggerOnce={true}>
              <h3 className="label">
                {getSkillCategoryIcon(category.category)}&nbsp;
                {category.category.toUpperCase()}
              </h3>
            </Slide>
            <div className="skills">
              {category.skills.map((skill, i) => {
                return (
                  <SkillContainer
                    key={skill.id}
                    triggerOnce={true}
                    delay={i * 100}
                    direction={i % 2 === 0 ? 'left' : 'right'}
                  >
                    <Link href={skill.url}>
                      <a
                        data-tip={`Click to visit ${skill.name}`}
                        target="_blank"
                        aria-label={skill.name}
                        rel="noopener nofollow"
                      >
                        {skill.name}
                      </a>
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

const SkillContainer = styled(Zoom)`
  border: 1px solid black;
  padding: var(--padding-very-small) var(--padding-small);
  border-radius: 0.5rem;
  width: fit-content;
  background-color: var(--color-dark);
  color: var(--color-light);
  transition: all 0.5s;
  cursor: pointer;

  :not(:last-child) {
    margin-right: var(--margin-very-small);
  }

  :hover {
    color: var(--color-dark);
    background-color: var(--color-light);
  }
`;

function getSkillCategoryIcon(category: SkillCategory) {
  switch (category) {
    case 'backend':
      return <FaNodeJs />;
    case 'hosting':
      return <FaServer />;
    case 'styling':
      return <FaPalette />;
    case 'testing':
      return <FaCheckDouble />;
    case 'others':
      return <FaRandom />;
    case 'tools':
      return <FaTools />;
    case 'frontend':
      return <FaReact />;
    case 'database':
      return <FaDatabase />;
    case 'highlights':
      return <FaStar />;
    case 'discipline':
      return <FaThumbsUp />;
    default:
      return null;
  }
}

const SkillsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--color-light);
  padding-bottom: var(--padding-small);
  overflow: hidden;

  .skills {
    max-width: 40rem;
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
