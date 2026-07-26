'use client';
import {Fade} from 'react-awesome-reveal';
import type {CategorizedSkill} from '../../models/skill';
import NextLink from '../basic/NextLink';
import SectionHeader from './SectionHeader';
import {useTranslation} from '../../app/i18n/client';

export default function SkillsHighlights({
  skills,
}: {
  skills: CategorizedSkill[];
}) {
  const {t} = useTranslation('home');

  const highlights =
    skills.find(c => c.category === 'highlights')?.skills ?? [];

  if (highlights.length === 0) return null;

  return (
    <section className="overflow-hidden px-4 py-16 sm:py-20">
      <Fade direction="up" triggerOnce>
        <SectionHeader
          kicker={t('skillsMarquee.kicker')}
          title={t('skillsMarquee.title')}
        />

        <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3">
          {highlights.map(skill => (
            <NextLink
              key={skill.id}
              href={skill.url}
              target="_blank"
              rel="noreferrer"
              aria-label={skill.name}
              title={`Click to visit ${skill.name}`}
              className="whitespace-nowrap rounded-xl border border-primary-300 bg-primary-50 px-5 py-3 text-lg font-bold text-primary-900 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md dark:border-primary-600 dark:bg-neutral-800 dark:text-primary-300"
            >
              {skill.name}
            </NextLink>
          ))}
        </div>

        <div className="mt-8 text-center">
          <NextLink
            href="/resume#skills"
            aria-label="full skills list"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-neutral-300 px-5 py-2.5 font-semibold text-neutral-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary-900 hover:text-primary-900 dark:border-neutral-600 dark:text-neutral-200 dark:hover:border-primary-300 dark:hover:text-primary-300"
          >
            {t('skillsMarquee.cta')}
          </NextLink>
        </div>
      </Fade>
    </section>
  );
}
