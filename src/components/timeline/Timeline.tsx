import React from 'react';
import styled from '@emotion/styled';
import {FaBriefcase} from '@react-icons/all-files/fa/FaBriefcase';
import {FaBuilding} from '@react-icons/all-files/fa/FaBuilding';
import {FaGraduationCap} from '@react-icons/all-files/fa/FaGraduationCap';
import {FaScroll} from '@react-icons/all-files/fa/FaScroll';
import dompurify from 'isomorphic-dompurify';
import Link from 'next/link';
import {Zoom, Slide} from 'react-awesome-reveal';
import {WorkExperience} from '../../models/resume';
import {mediaQuery} from '../../utils/media-query';
import {Experience} from './Experience';

export default function Timeline({
  workExperiences,
  educationExperiences,
}: {
  workExperiences: WorkExperience[];
  educationExperiences: WorkExperience[];
}) {
  return (
    <Container>
      <div>
        <Slide triggerOnce={true} direction="down">
          <Experience>
            <CategoryTitle>
              <FaBriefcase />
              &nbsp; Work Experiences
            </CategoryTitle>
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
                  <ContentDescription
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
            <CategoryTitle>
              <FaScroll />
              &nbsp;Education
            </CategoryTitle>
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
    </Container>
  );
}

const Content: React.FC<{exp: WorkExperience}> = ({exp, children = null}) => {
  return (
    <Zoom
      triggerOnce={true}
      cascade={true}
      duration={800}
      style={{maxWidth: '45rem'}}
    >
      <div>
        <DateWrapper>{exp.end_date}</DateWrapper>
        <Summary>
          {exp.category === 'work' ? <FaBuilding /> : <FaGraduationCap />}
          &nbsp;
          <Link href={exp.url}>
            <a
              target="_blank"
              aria-label={exp.organization}
              rel="noopener"
              data-tip={`Click to visit ${exp.organization}`}
            >
              {exp.organization}
            </a>
          </Link>
        </Summary>
        <ContentTitle>
          <div className="title">{exp.title}</div> <div>({exp.role})</div>
        </ContentTitle>
      </div>
      <div>{children}</div>
      <DateWrapper>{exp.start_date}</DateWrapper>
    </Zoom>
  );
};

const CategoryTitle = styled.h2`
  margin: 0;
  color: var(--color-dark-dark);
`;

const DateWrapper = styled.p`
  background-color: var(--color-light);
  color: var(--color-dark-dark);
  justify-self: center;
  padding: var(--padding-very-small) 0;
`;

const ContentTitle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: var(--color-dark-dark);
  ${mediaQuery(900, `flex-direction: row;`)}
`;

const ContentDescription = styled.div`
  margin-top: 1rem;
  text-align: left;
  color: var(--color-dark-dark);
`;

const Summary = styled.div`
  color: var(--color-dark-dark);
`;

const Container = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  background-color: var(--color-light-light);

  padding-top: var(--padding-medium);
`;
