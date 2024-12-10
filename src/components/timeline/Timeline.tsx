'use client';
import {FaBriefcase} from '@react-icons/all-files/fa/FaBriefcase';
import {FaBuilding} from '@react-icons/all-files/fa/FaBuilding';
import {FaGraduationCap} from '@react-icons/all-files/fa/FaGraduationCap';
import {FaScroll} from '@react-icons/all-files/fa/FaScroll';
import dompurify from 'isomorphic-dompurify';
import type {FunctionComponent} from 'react';
import {Slide} from 'react-awesome-reveal';
import {useTranslation} from '../../app/i18n/client';
import type {EducationExperience, WorkExperience} from '../../models/resume';
import NextLink from '../basic/NextLink';
import {Experience} from './Experience';

export default function Timeline({
  workExperiences,
  educationExperiences,
}: {
  workExperiences: WorkExperience[];
  educationExperiences: EducationExperience[];
}) {
  return (
    <article className="flex min-h-min flex-col items-center overflow-hidden px-4 pt-12">
      <div className="w-full max-w-6xl rounded-lg bg-neutral-100 p-8 dark:bg-neutral-800">
        <Slide direction="up" triggerOnce>
          <Experience>
            <h2 className="m-0 flex items-center justify-center text-2xl font-bold text-neutral-800 dark:text-neutral-800">
              <FaBriefcase className="mr-2" />
              Work Experiences
            </h2>
          </Experience>
        </Slide>
        {workExperiences.map(exp => (
          <Slide key={exp.id} direction="up" triggerOnce>
            <Experience>
              <Content exp={exp}>
                <div
                  className="prose prose-sm mt-4 max-w-none text-left text-neutral-700 dark:text-neutral-700"
                  dangerouslySetInnerHTML={{
                    __html: dompurify.sanitize(exp.markdown),
                  }}
                />
              </Content>
            </Experience>
          </Slide>
        ))}
        <Slide direction="up" triggerOnce>
          <Experience>
            <h2 className="m-0 flex items-center justify-center text-2xl font-bold text-neutral-800 dark:text-neutral-800">
              <FaScroll className="mr-2" />
              Education
            </h2>
          </Experience>
        </Slide>
        {educationExperiences.map(exp => (
          <Slide key={exp.id} direction="up" triggerOnce>
            <Experience>
              <Content exp={exp}>
                <span />
              </Content>
            </Experience>
          </Slide>
        ))}
      </div>
    </article>
  );
}

const Content: FunctionComponent<{
  exp: WorkExperience | EducationExperience;
  children: React.ReactNode;
}> = ({exp, children = null}) => {
  const {t} = useTranslation('common');

  return (
    <>
      <div className="space-y-2">
        <p className="text-sm text-neutral-700 dark:text-neutral-700">
          {exp.endDate === exp.startDate ? (
            <span className="font-semibold">Present</span>
          ) : (
            t('date', {
              val: new Date(exp.endDate),
              formatParams: {
                val: {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                },
              },
            })
          )}
        </p>
        <div className="flex items-center justify-center text-neutral-700 dark:text-neutral-700">
          {exp.category === 'work' ? (
            <FaBuilding className="mr-2" />
          ) : (
            <FaGraduationCap className="mr-2" />
          )}
          <NextLink
            href={exp.url}
            target="_blank"
            aria-label={exp.organization}
            rel="noreferrer"
            className="font-bold transition-colors hover:text-primary-700 dark:hover:text-primary-700"
            title={`Click to visit ${exp.organization}`}
          >
            {exp.organization}
          </NextLink>
        </div>
        <div className="flex flex-col justify-center text-neutral-700 dark:text-neutral-700 md:flex-row">
          <p className="font-bold">{exp.title}</p>
          <p className="md:ml-2">({exp.role})</p>
        </div>
      </div>
      <div className="max-w-[50rem]">{children}</div>
      <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-700">
        {t('date', {
          val: new Date(exp.startDate),
          formatParams: {
            val: {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            },
          },
        })}
      </p>
    </>
  );
};
