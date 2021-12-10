import React from 'react';
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
import type {CategorizedSkill, SkillCategory} from '../../models/skill';

export default function Skills({skills}: {skills: CategorizedSkill[]}) {
  return (
    <div className="flex justify-center items-center flex-col pb-2 overflow-hidden">
      <h2>
        <FaDumbbell />
        &nbsp; Skills
      </h2>
      {skills.map(category => {
        return (
          <section className="mb-4" key={category.category}>
            <Slide direction="down" triggerOnce={true}>
              <h3 className="text-center my-2">
                {getSkillCategoryIcon(category.category)}&nbsp;
                {category.category.toUpperCase()}
              </h3>
            </Slide>
            <div className="max-w-5xl flex flex-wrap justify-center gap-y-2">
              {category.skills.map((skill, i) => {
                return (
                  <Zoom
                    className="py-1 px-3 bg-dark text-light border-dark rounded-lg border mr-2
                    hover:bg-light hover:text-dark shadow-sm"
                    key={skill.id}
                    triggerOnce={true}
                    delay={i * 100}
                    direction={i % 2 === 0 ? 'left' : 'right'}
                  >
                    <Link href={skill.url}>
                      <a
                        title={`Click to visit ${skill.name}`}
                        target="_blank"
                        aria-label={skill.name}
                        rel="noopener nofollow"
                      >
                        {skill.name}
                      </a>
                    </Link>
                  </Zoom>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}

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
