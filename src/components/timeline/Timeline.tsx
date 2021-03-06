import type {FunctionComponent} from 'react';
import {FaBriefcase} from '@react-icons/all-files/fa/FaBriefcase';
import {FaBuilding} from '@react-icons/all-files/fa/FaBuilding';
import {FaGraduationCap} from '@react-icons/all-files/fa/FaGraduationCap';
import {FaScroll} from '@react-icons/all-files/fa/FaScroll';
import dompurify from 'isomorphic-dompurify';
import {useTranslation} from 'next-i18next';
import Slide from 'react-reveal/Slide';
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
    <article className="flex items-center flex-col overflow-hidden min-h-min pt-12">
      <div>
        <Slide top>
          <Experience>
            <h2 className="m-0 text-dark">
              <FaBriefcase />
              &nbsp; Work Experiences
            </h2>
          </Experience>
        </Slide>
        {workExperiences.map((exp, i) => {
          return (
            <Slide key={exp.id} bottom>
              <Experience key={exp.id} hasConnector>
                <Content exp={exp}>
                  <div
                    className="mt-4 text-left text-dark"
                    dangerouslySetInnerHTML={{
                      __html: dompurify.sanitize(exp.content),
                    }}
                  />
                </Content>
              </Experience>
            </Slide>
          );
        })}
        <Slide bottom>
          <Experience hasConnector>
            <h2 className="m-0 text-dark">
              <FaScroll />
              &nbsp;Education
            </h2>
          </Experience>
        </Slide>
        {educationExperiences.map((exp, i) => {
          return (
            <Slide key={exp.id} right={i % 2 === 0} left={i % 2 !== 0}>
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
  const {t} = useTranslation('common');

  return (
    <Slide cascade={true} duration={800}>
      <div>
        <p className="bg-light text-dark justify-self-center py-1">
          {exp.endDate === exp.startDate
            ? 'Present'
            : t('date', {
                val: new Date(exp.endDate),
                formatParams: {
                  val: {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  },
                },
              })}
        </p>
        <div>
          {exp.category === 'work' ? <FaBuilding /> : <FaGraduationCap />}
          &nbsp;
          <NextLink
            href={exp.url}
            target="_blank"
            aria-label={exp.organization}
            rel="noreferrer"
            className="text-primary-dark font-bold underline-on-hover underline--dark"
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
      <p className="bg-light text-dark justify-self-center py-1">
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
    </Slide>
  );
};
