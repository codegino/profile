'use client';
import {useState, type FunctionComponent} from 'react';
import {FaBriefcase} from '@react-icons/all-files/fa/FaBriefcase';
import {FaChevronDown} from '@react-icons/all-files/fa/FaChevronDown';
import {FaGraduationCap} from '@react-icons/all-files/fa/FaGraduationCap';
import dompurify from 'isomorphic-dompurify';
import {Fade} from 'react-awesome-reveal';
import {useTranslation} from '../i18n/client';
import type {EducationExperience, WorkExperience} from '../../models/resume';
import NextLink from '../../components/basic/NextLink';

const EXPANDED_BY_DEFAULT = 2;

export default function ResumeTimeline({
  workExperiences,
  educationExperiences,
}: {
  workExperiences: WorkExperience[];
  educationExperiences: EducationExperience[];
}) {
  const {t} = useTranslation('resume');

  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <h2 className="mb-10 flex items-center justify-center gap-3 text-3xl font-bold">
        <FaBriefcase className="fill-primary-900 dark:fill-primary-300" />
        {t('workExperiences')}
      </h2>
      <div className="relative">
        <TimelineLine />
        {workExperiences.map((exp, i) => (
          <Fade key={exp.id} direction="up" triggerOnce fraction={0.15}>
            <WorkItem exp={exp} defaultExpanded={i < EXPANDED_BY_DEFAULT} />
          </Fade>
        ))}
      </div>

      <h2 className="mb-10 mt-16 flex items-center justify-center gap-3 text-3xl font-bold">
        <FaGraduationCap className="fill-primary-900 dark:fill-primary-300" />
        {t('education')}
      </h2>
      <div className="relative">
        <TimelineLine />
        {educationExperiences.map(exp => (
          <Fade key={exp.id} direction="up" triggerOnce fraction={0.15}>
            <EducationItem exp={exp} />
          </Fade>
        ))}
      </div>
    </section>
  );
}

const TimelineLine = () => (
  <div
    aria-hidden
    className="to-primary-400/30 dark:to-primary-300/30 absolute inset-y-2 left-[7px] w-0.5 rounded bg-gradient-to-b from-primary-400 via-primary-600 dark:from-primary-300 dark:via-primary-500 sm:left-[11px]"
  />
);

const TimelineDot = () => (
  <div className="absolute left-0 top-7 size-4 rounded-full border-2 border-primary-600 bg-white shadow dark:border-primary-300 dark:bg-neutral-900 sm:size-6 sm:border-4" />
);

const DateRange: FunctionComponent<{
  startDate: string;
  endDate: string;
}> = ({startDate, endDate}) => {
  const {t} = useTranslation('common');
  const {t: tResume} = useTranslation('resume');

  const format = (date: string) =>
    t('date', {
      val: new Date(date),
      formatParams: {val: {year: 'numeric', month: 'short'}},
    });

  return (
    <p className="m-0 text-sm font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
      {format(startDate)}
      {' — '}
      {endDate === startDate ? (
        <span className="font-bold text-primary-900 dark:text-primary-300">
          {tResume('present')}
        </span>
      ) : (
        format(endDate)
      )}
    </p>
  );
};

const WorkItem: FunctionComponent<{
  exp: WorkExperience;
  defaultExpanded: boolean;
}> = ({exp, defaultExpanded}) => {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const {t} = useTranslation('resume');
  const contentId = `exp-details-${exp.id}`;

  return (
    <div className="relative mb-8 pl-8 sm:pl-12">
      <TimelineDot />
      <div className="rounded-xl border border-neutral-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-800">
        <button
          type="button"
          onClick={() => setExpanded(v => !v)}
          aria-expanded={expanded}
          aria-controls={contentId}
          className="flex w-full items-start justify-between gap-4 p-5 text-left"
        >
          <div className="space-y-1">
            <DateRange startDate={exp.startDate} endDate={exp.endDate} />
            <h3 className="m-0 text-xl font-bold">{exp.title}</h3>
            <p className="m-0 text-neutral-600 dark:text-neutral-300">
              <span className="font-semibold text-primary-900 dark:text-primary-300">
                {exp.organization}
              </span>
              <span className="text-sm">&nbsp;· {exp.role}</span>
            </p>
          </div>
          <span
            className={`mt-2 shrink-0 rounded-full bg-neutral-100 p-2 text-neutral-500 transition-transform duration-300 dark:bg-neutral-700 dark:text-neutral-300 ${
              expanded ? 'rotate-180' : ''
            }`}
            title={expanded ? t('showLess') : t('showMore')}
          >
            <FaChevronDown />
          </span>
        </button>
        <div
          id={contentId}
          className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
            expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
        >
          <div className="overflow-hidden">
            <div className="border-t border-neutral-200 px-5 pb-5 pt-4 dark:border-neutral-700">
              <div
                className="text-left text-neutral-700 dark:text-neutral-300 [&_a]:font-semibold [&_a]:underline [&_li]:mb-1 [&_p]:mb-2 [&_ul]:mb-2 [&_ul]:list-disc [&_ul]:pl-5"
                dangerouslySetInnerHTML={{
                  __html: dompurify.sanitize(exp.markdown),
                }}
              />
              <NextLink
                href={exp.url}
                target="_blank"
                rel="noreferrer"
                aria-label={exp.organization}
                title={`Click to visit ${exp.organization}`}
                className="underline-on-hover mt-3 inline-block text-sm font-semibold text-primary-900 dark:text-primary-300"
              >
                {t('visitCompany', {company: exp.organization})} →
              </NextLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EducationItem: FunctionComponent<{exp: EducationExperience}> = ({
  exp,
}) => {
  return (
    <div className="relative mb-8 pl-8 sm:pl-12">
      <TimelineDot />
      <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition-shadow duration-200 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-800">
        <div className="space-y-1">
          <DateRange startDate={exp.startDate} endDate={exp.endDate} />
          <h3 className="m-0 text-xl font-bold">{exp.title}</h3>
          <p className="m-0 text-neutral-600 dark:text-neutral-300">
            <NextLink
              href={exp.url}
              target="_blank"
              rel="noreferrer"
              aria-label={exp.organization}
              title={`Click to visit ${exp.organization}`}
              className="underline-on-hover font-semibold text-primary-900 dark:text-primary-300"
            >
              {exp.organization}
            </NextLink>
            <span className="text-sm">&nbsp;· {exp.role}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
