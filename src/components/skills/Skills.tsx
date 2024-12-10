'use client';
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
import type {CategorizedSkill, SkillCategory} from '../../models/skill';
import NextLink from '../basic/NextLink';
import {Zoom} from 'react-awesome-reveal';
import {useTranslation} from '../../app/i18n/client';

export default function Skills({skills}: {skills: CategorizedSkill[]}) {
  const {t} = useTranslation('resume');

  return (
    <div className="flex justify-center">
      <article className="flex max-w-3xl flex-col items-center justify-center overflow-hidden pb-2">
        <h2>
          <FaDumbbell />
          &nbsp; {t('skills')}
        </h2>
        {skills.map(category => {
          return (
            <section className="mb-4" key={category.category}>
              <Zoom direction="down" triggerOnce>
                <h3 className="my-2 text-center text-lg">
                  {getSkillCategoryIcon(category.category)}&nbsp;
                  {category.category.toUpperCase()}
                </h3>
              </Zoom>
              <div className="flex max-w-5xl flex-wrap justify-center gap-y-3">
                {category.skills.map((skill, i) => {
                  return (
                    <Zoom
                      triggerOnce
                      key={skill.id}
                      delay={i * 110}
                      direction={i % 2 === 0 ? 'left' : 'right'}
                    >
                      <NextLink
                        key={i}
                        href={skill.url}
                        className="mr-2 rounded-lg  bg-neutral-700 px-3 py-1 text-neutral-100
                    ring-1 ring-neutral-800 hover:bg-neutral-100 hover:text-neutral-800"
                        title={`Click to visit ${skill.name}`}
                        target="_blank"
                        aria-label={skill.name}
                        rel="noreferrer"
                      >
                        {skill.name}
                      </NextLink>
                    </Zoom>
                  );
                })}
              </div>
            </section>
          );
        })}
      </article>
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
