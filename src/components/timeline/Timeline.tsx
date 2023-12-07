'use client';
import type {FunctionComponent} from 'react';
import {FaBriefcase} from '@react-icons/all-files/fa/FaBriefcase';
import {FaBuilding} from '@react-icons/all-files/fa/FaBuilding';
import {FaGraduationCap} from '@react-icons/all-files/fa/FaGraduationCap';
import {FaScroll} from '@react-icons/all-files/fa/FaScroll';
import dompurify from 'isomorphic-dompurify';
import type {EducationExperience, WorkExperience} from '../../models/resume';
import NextLink from '../basic/NextLink';
import {Experience} from './Experience';
import {useTranslation} from '../../app/i18n/client';
import {useParams} from 'next/navigation';
import {Slide} from 'react-awesome-reveal';
import {locales} from '../../app/i18n/locales.enum';

export default function Timeline({
  workExperiences,
  educationExperiences,
}: {
  workExperiences: WorkExperience[];
  educationExperiences: EducationExperience[];
}) {
  return (
    <article className="flex items-center flex-col overflow-hidden min-h-min pt-12">
      <div>
        <Slide direction="up" triggerOnce>
          <Experience>
            <h2 className="m-0 text-xl text-neutral-800 dark:text-neutral-100">
              <FaBriefcase />
              &nbsp; Work Experiences
            </h2>
          </Experience>
        </Slide>
        {workExperiences.map((exp, i) => {
          return (
            <Slide key={exp.id} direction="up" triggerOnce>
              <Experience hasConnector>
                <Content exp={exp}>
                  <div
                    className="mt-4 text-left"
                    dangerouslySetInnerHTML={{
                      __html: dompurify.sanitize(exp.content),
                    }}
                  />
                </Content>
              </Experience>
            </Slide>
          );
        })}
        <Slide direction="down" triggerOnce>
          <Experience hasConnector>
            <h2 className="m-0">
              <FaScroll />
              &nbsp;Education
            </h2>
          </Experience>
        </Slide>
        {educationExperiences.map((exp, i) => {
          return (
            <Slide
              key={exp.id}
              triggerOnce
              direction={i % 2 === 0 ? 'left' : 'right'}
            >
              <Experience key={exp.id} hasConnector={true}>
                <Content exp={exp}>
                  <span />
                </Content>
              </Experience>
            </Slide>
          );
        })}
      </div>
    </article>
  );
}

const Content: FunctionComponent<{
  exp: WorkExperience | EducationExperience;
  children: React.ReactNode;
}> = ({exp, children = null}) => {
  const lang = useParams()?.lang as locales;
  const {t} = useTranslation(lang, 'common');

  return (
    <>
      <div>
        <p className="justify-self-center py-1 text-neutral-600 dark:text-neutral-500">
          {exp.endDate === exp.startDate ? (
            <span className="text-neutral-900 dark:text-neutral-100">
              Present
            </span>
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
        <div>
          {exp.category === 'work' ? <FaBuilding /> : <FaGraduationCap />}
          &nbsp;
          <NextLink
            href={exp.url}
            target="_blank"
            aria-label={exp.organization}
            rel="noreferrer"
            className="text-primary-900 dark:text-primary-300 font-bold underline-on-hover underline--dark"
            title={`Click to visit ${exp.organization}`}
          >
            {exp.organization}
          </NextLink>
        </div>
        <div className="flex justify-center flex-col text-dark md:flex-row">
          <p className="font-bold">{exp.title}</p> <p>&nbsp;({exp.role})</p>
        </div>
      </div>
      <div className="max-w-[45rem]">{children}</div>
      <p className="text-neutral-600 dark:text-neutral-500 justify-self-center py-1">
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
