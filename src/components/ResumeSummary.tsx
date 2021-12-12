import React from 'react';
import {FaEnvelopeSquare} from '@react-icons/all-files/fa/FaEnvelopeSquare';
import {FaMapMarkerAlt} from '@react-icons/all-files/fa/FaMapMarkerAlt';
import {IGetPlaiceholderReturn} from 'plaiceholder';
import {BlurringImage} from './BlurringImage';
import NextLink from './basic/NextLink';

export default function ResumeSummary({
  img,
  svg,
}: Pick<IGetPlaiceholderReturn, 'svg' | 'img'>) {
  return (
    <div
      className="w-full flex justify-center items-center flex-col py-20 md:flex-row  min-w-max"
      id="resume-summary"
    >
      <div className="overflow-hidden rounded-full h-60 w-60  md:rounded-none md:h-80 md:w-80 xl:h-96 xl:w-96">
        <BlurringImage
          img={img}
          svg={svg}
          alt="Carlo Gino"
          title="Carlo Gino"
          layout="responsive"
          height={200}
          width={200}
        />
      </div>
      <section className="flex flex-col items-center justify-start ml-0 md:ml-8">
        <h1 className="m-0">{summary.name}</h1>
        <div className="flex flex-col items-center md:flex-row">
          <h2 className="lg:mt-0">{summary.jobTitle}</h2>
          <NextLink
            href={summary.companyWebsite}
            target="_blank"
            aria-label="Company Website"
            rel="noopener nofollow"
            className="underline-on-hover"
          >
            <h2>&nbsp;at {summary.company}</h2>
          </NextLink>
        </div>
        <h3>
          <NextLink
            href={`mailto:${summary.email}`}
            target="_blank"
            aria-label="Email me"
            title="Send me an email"
            rel="noopener nofollow"
            className="underline-on-hover underline-on-hover--dark"
          >
            <FaEnvelopeSquare />
            &nbsp;{summary.email}
          </NextLink>
        </h3>
        <h3 className="m-2 lg:mt-4">
          <FaMapMarkerAlt />
          &nbsp;{summary.address}
        </h3>
      </section>
    </div>
  );
}

const summary = {
  jobTitle: 'Senior Software Engineer',
  company: 'NE Digital',
  email: 'carloginocatapang@gmail.com',
  address: 'Tampines, Singapore',
  name: 'Carlo Gino Catapang',
  companyWebsite: 'https://www.nedigital.sg',
};
