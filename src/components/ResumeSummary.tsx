import React from 'react';
import styled from '@emotion/styled';
import {FaEnvelopeSquare} from '@react-icons/all-files/fa/FaEnvelopeSquare';
import {FaMapMarkerAlt} from '@react-icons/all-files/fa/FaMapMarkerAlt';
import Link from 'next/link';
import {IGetPlaiceholderReturn} from 'plaiceholder';
import {underlineOnHover} from '../frontend-utils/animation-effects';
import {BlurringImage} from './BlurringImage';

export default function ResumeSummary({
  img,
  svg,
}: Pick<IGetPlaiceholderReturn, 'svg' | 'img'>) {
  return (
    <article
      className="w-full flex justify-center items-center flex-col py-20 md:flex-row  min-w-max"
      id="resume-summary"
    >
      <div className="overflow-hidden rounded-full h-60 w-60  md:rounded-none md:h-80 md:w-80 xl:h-96 xl:w-96">
        <BlurringImage
          img={img}
          svg={svg}
          alt="My profile"
          layout="responsive"
          height={200}
          width={200}
        />
      </div>
      <section className="flex flex-col items-center justify-start ml-0 md:ml-8">
        <h1 className="m-0">{summary.name}</h1>
        <div className="flex flex-col items-center md:flex-row">
          <h2 className="lg:mt-0">{summary.jobTitle}</h2>
          <Link href={summary.companyWebsite}>
            <a
              target="_blank"
              aria-label="Company Website"
              rel="noopener"
              className="underline-on-hover"
            >
              <h2>&nbsp;at {summary.company}</h2>
            </a>
          </Link>
        </div>
        <H3WithUnderline>
          <Link href={`mailto:${summary.email}`}>
            <a
              target="_blank"
              aria-label="Email me"
              data-tip="Send me an email"
              rel="noopener"
              className="underline-on-hover"
            >
              <FaEnvelopeSquare />
              &nbsp;{summary.email}
            </a>
          </Link>
        </H3WithUnderline>
        <h3 className="m-2 lg:mt-4">
          <FaMapMarkerAlt />
          &nbsp;{summary.address}
        </h3>
      </section>
    </article>
  );
}

const H3WithUnderline = styled.h3`
  .underline-on-hover {
    ${underlineOnHover('var(--color-primary-dark)')}
  }
`;

const summary = {
  jobTitle: 'Senior Software Engineer',
  company: 'NE Digital',
  email: 'carloginocatapang@gmail.com',
  address: 'Tampines, Singapore',
  name: 'Carlo Gino Catapang',
  companyWebsite: 'https://www.nedigital.sg',
};
