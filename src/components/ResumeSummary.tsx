import React from 'react';
import styled from '@emotion/styled';
import {FaEnvelopeSquare} from '@react-icons/all-files/fa/FaEnvelopeSquare';
import {FaMapMarkerAlt} from '@react-icons/all-files/fa/FaMapMarkerAlt';
import Link from 'next/link';
import {IGetPlaiceholderReturn} from 'plaiceholder';
import {underlineOnHover} from '../frontend-utils/animation-effects';
import {mediaQuery} from '../utils/media-query';
import {BlurredImage} from './BlurringImage';

export default function ResumeSummary({
  img,
  svg,
}: Pick<IGetPlaiceholderReturn, 'svg' | 'img'>) {
  return (
    <Container id="resume-summary">
      <ImageContainer>
        <BlurredImage
          img={img}
          svg={svg}
          alt="My profile"
          layout="responsive"
          height={200}
          width={200}
        />
      </ImageContainer>
      <section className="summary">
        <h1>{summary.name}</h1>
        <div className="designation">
          <h2>{summary.jobTitle}</h2>
          <Link href={summary.companyWebsite}>
            <a
              target="_blank"
              style={{cursor: 'pointer'}}
              aria-label="Company Website"
              rel="noopener"
              className="underline-on-hover"
            >
              <h2>&nbsp;at {summary.company}</h2>
            </a>
          </Link>
        </div>
        <h3>
          <Link href={`mailto:${summary.email}`}>
            <a
              target="_blank"
              style={{cursor: 'pointer'}}
              aria-label="Email me"
              data-tip="Send me an email"
              rel="noopener"
              className="underline-on-hover"
            >
              <FaEnvelopeSquare />
              &nbsp;{summary.email}
            </a>
          </Link>
        </h3>
        <h3>
          <FaMapMarkerAlt />
          &nbsp;{summary.address}
        </h3>
      </section>
    </Container>
  );
}

const Container = styled.article`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--color-light-light);
  padding: var(--padding-big) 0;

  ${mediaQuery(900, `flex-direction: row;`)}

  .summary {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    margin-left: 0;
    ${mediaQuery(900, `margin-left: 2rem;`)}

    .underline-on-hover {
      ${underlineOnHover('var(--color-primary-dark)')}
    }
  }

  .designation {
    display: flex;
    flex-direction: column;
    align-items: center;

    ${mediaQuery(
      900,
      `
      flex-direction: row;
    `,
    )}
  }

  h2 {
    ${mediaQuery(
      900,
      `
      margin-top: 0;
    `,
    )}
  }

  h3 {
    margin: var(--margin-very-small);

    ${mediaQuery(
      900,
      `
        margin-top: var(--margin-small);
      `,
    )}
  }
`;

const ImageContainer = styled.div`
  border-radius: 50%;
  height: 150px;
  width: 150px;
  display: block;
  overflow: hidden;

  ${mediaQuery(
    600,
    `
    height: 175px;
    width: 175px;
  `,
  )}

  ${mediaQuery(
    900,
    `
    border-radius: 0;
    height: 200px;
    width: 200px;
  `,
  )}
`;

const summary = {
  jobTitle: 'Senior Software Engineer',
  company: 'NE Digital',
  email: 'carloginocatapang@gmail.com',
  address: 'Tampines, Singapore',
  name: 'Carlo Gino Catapang',
  companyWebsite: 'https://www.nedigital.sg',
};
