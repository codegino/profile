'use client';
import {FaCheckDouble} from '@react-icons/all-files/fa/FaCheckDouble';
import {FaDatabase} from '@react-icons/all-files/fa/FaDatabase';
import {FaNodeJs} from '@react-icons/all-files/fa/FaNodeJs';
import {FaPalette} from '@react-icons/all-files/fa/FaPalette';
import {FaRandom} from '@react-icons/all-files/fa/FaRandom';
import {FaReact} from '@react-icons/all-files/fa/FaReact';
import {FaServer} from '@react-icons/all-files/fa/FaServer';
import {FaStar} from '@react-icons/all-files/fa/FaStar';
import {FaThumbsUp} from '@react-icons/all-files/fa/FaThumbsUp';
import {FaTools} from '@react-icons/all-files/fa/FaTools';
import {Fade} from 'react-awesome-reveal';
import type {
  CategorizedSkill,
  Skill,
  SkillCategory,
} from '../../models/skill';
import NextLink from '../../components/basic/NextLink';
import {useTranslation} from '../i18n/client';

const byLevelDesc = (a: Skill, b: Skill) => b.level - a.level;

export default function ResumeSkills({skills}: {skills: CategorizedSkill[]}) {
  const {t} = useTranslation('resume');

  const highlights =
    skills.find(c => c.category === 'highlights')?.skills ?? [];
  const otherCategories = skills.filter(
    c => c.category !== 'highlights' && c.skills.length > 0,
  );

  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <h2 className="mb-10 text-center text-3xl font-bold">{t('skills')}</h2>

      {/* Core stack highlights */}
      {highlights.length > 0 && (
        <Fade direction="up" triggerOnce>
          <div className="mb-10">
            <h3 className="mb-4 flex items-center justify-center gap-2 text-lg font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
              <FaStar className="fill-primary-900 dark:fill-primary-300" />
              {t('coreStack')}
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[...highlights].sort(byLevelDesc).map(skill => (
                <NextLink
                  key={skill.id}
                  href={skill.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={skill.name}
                  title={`Click to visit ${skill.name}`}
                  className="rounded-xl border border-primary-300 bg-primary-50 px-5 py-3 text-lg font-bold text-primary-900 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md dark:border-primary-600 dark:bg-neutral-800 dark:text-primary-300"
                >
                  {skill.name}
                </NextLink>
              ))}
            </div>
          </div>
        </Fade>
      )}

      {/* Categorized clusters */}
      <div className="grid gap-6 sm:grid-cols-2">
        {otherCategories.map(category => (
          <Fade key={category.category} direction="up" triggerOnce>
            <div className="h-full rounded-xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
              <h3 className="mb-3 flex items-center gap-2 text-base font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                {getSkillCategoryIcon(category.category)}
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {[...category.skills].sort(byLevelDesc).map(skill => (
                  <NextLink
                    key={skill.id}
                    href={skill.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={skill.name}
                    title={`Click to visit ${skill.name}`}
                    className="rounded-full bg-neutral-100 px-3 py-1 text-sm font-medium text-neutral-700 ring-1 ring-neutral-200 transition-colors hover:bg-primary-900 hover:text-white dark:bg-neutral-700 dark:text-neutral-200 dark:ring-neutral-600 dark:hover:bg-primary-300 dark:hover:text-neutral-900"
                  >
                    {skill.name}
                  </NextLink>
                ))}
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </section>
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
    case 'discipline':
      return <FaThumbsUp />;
    default:
      return null;
  }
}
