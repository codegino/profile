import React from 'react';
import {FaBriefcase} from '@react-icons/all-files/fa/FaBriefcase';
import {FaBuilding} from '@react-icons/all-files/fa/FaBuilding';
import {FaGraduationCap} from '@react-icons/all-files/fa/FaGraduationCap';
import {FaScroll} from '@react-icons/all-files/fa/FaScroll';
import dompurify from 'isomorphic-dompurify';
import Link from 'next/link';
import {Zoom, Slide} from 'react-awesome-reveal';
import type {WorkExperience} from '../../models/resume';
import {Experience} from './Experience';

export default function Timeline({
  workExperiences,
  educationExperiences,
}: {
  workExperiences: WorkExperience[];
  educationExperiences: WorkExperience[];
}) {
  return (
    <article className="flex items-center flex-col overflow-hidden min-h-min pt-12">
      <div>
        <Slide triggerOnce={true} direction="down">
          <Experience>
            <h2 className="m-0 text-dark">
              <FaBriefcase />
              &nbsp; Work Experiences
            </h2>
          </Experience>
        </Slide>
        {workExperiences.map((exp, i) => {
          return (
            <Slide
              key={exp.id}
              direction={i % 2 ? 'left' : 'right'}
              triggerOnce={true}
            >
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
        <Slide triggerOnce={true} direction="down">
          <Experience hasConnector>
            <h2 className="m-0 text-dark">
              <FaScroll />
              &nbsp;Education
            </h2>
          </Experience>
        </Slide>
        {educationExperiences.map((exp, i) => {
          return (
            <Slide
              key={exp.id}
              direction={i % 2 ? 'left' : 'right'}
              triggerOnce={true}
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

const Content: React.FC<{exp: WorkExperience}> = ({exp, children = null}) => {
  return (
    <Zoom triggerOnce={true} cascade={true} duration={800}>
      <div>
        <p className="bg-light text-dark justify-self-center py-1">
          {exp.end_date === exp.start_date ? 'Present' : exp.end_date}
        </p>
        <div>
          {exp.category === 'work' ? <FaBuilding /> : <FaGraduationCap />}
          &nbsp;
          <Link href={exp.url}>
            <a
              target="_blank"
              aria-label={exp.organization}
              rel="noopener nofollow"
              className="text-primary-dark font-bold underline-on-hover underline--dark"
              title={`Click to visit ${exp.organization}`}
            >
              {exp.organization}
            </a>
          </Link>
        </div>
        <div className="flex justify-center flex-col text-dark md:flex-row">
          <p className="font-bold">{exp.title}</p> <p>&nbsp;({exp.role})</p>
        </div>
      </div>
      <div>{children}</div>
      <p className="bg-light text-dark justify-self-center py-1">
        {exp.start_date}
      </p>
    </Zoom>
  );
};
