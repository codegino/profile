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
import {createTranslation} from '../../app/i18n';

export default async function Skills({skills}: {skills: CategorizedSkill[]}) {
  const {t} = await createTranslation('en', 'resume');

  return (
    <div className="flex justify-center">
      <article className="flex justify-center items-center flex-col pb-2 overflow-hidden max-w-3xl">
        <h2>
          <FaDumbbell />
          &nbsp; {t('skills')}
        </h2>
        {skills.map(category => {
          return (
            <section className="mb-4" key={category.category}>
              <h3 className="text-center my-2">
                {getSkillCategoryIcon(category.category)}&nbsp;
                {category.category.toUpperCase()}
              </h3>
              <div className="max-w-5xl flex flex-wrap justify-center gap-y-3">
                {category.skills.map((skill, i) => {
                  return (
                    <NextLink
                      key={i}
                      href={skill.url}
                      className="py-1 px-3 bg-dark text-light border-dark rounded-lg border mr-2
                    hover:bg-light hover:text-dark shadow-sm shadow-dark"
                      title={`Click to visit ${skill.name}`}
                      target="_blank"
                      aria-label={skill.name}
                      rel="noreferrer"
                    >
                      {skill.name}
                    </NextLink>
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
