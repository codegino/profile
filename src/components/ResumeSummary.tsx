import {FaEnvelopeSquare} from '@react-icons/all-files/fa/FaEnvelopeSquare';
import {FaMapMarkerAlt} from '@react-icons/all-files/fa/FaMapMarkerAlt';
import {BlurringImage} from './BlurringImage';
import NextLink from './basic/NextLink';
import {createTranslation} from '../app/i18n/server';
import type {BlurImageType} from '../utils/image-blur.utils';

export default async function ResumeSummary({
  img,
  svg,
}: Pick<BlurImageType, 'svg' | 'img'>) {
  const {t} = await createTranslation('resume');

  return (
    <div className="flex w-full min-w-max flex-col items-center justify-center gap-2 py-10 sm:gap-0 sm:py-20  md:flex-row">
      <div className="size-36 overflow-hidden rounded-full md:size-44 md:rounded-md xl:size-48">
        <BlurringImage
          img={img}
          svg={svg}
          alt="Carlo Gino"
          title="Carlo Gino"
          height={200}
          width={200}
        />
      </div>
      <section className="ml-0 flex flex-col items-center justify-start md:ml-8">
        <h1 className="m-0">{summary.name}</h1>
        <div className="flex flex-col items-center md:flex-row">
          <h2 className="m-0 text-2xl lg:my-2">
            {t(summary.jobTitle)}
            <NextLink
              href={summary.companyWebsite}
              target="_blank"
              aria-label="Company Website"
              rel="noreferrer"
            >
              <span className="text-2xl">&nbsp;at&nbsp;</span>
              <span className="underline-on-hover text-2xl">
                {summary.company}
              </span>
            </NextLink>
          </h2>
        </div>
        <h3>
          <NextLink
            href={`mailto:${summary.email}`}
            target="_blank"
            aria-label="Email me"
            title="Send me an email"
            rel="noreferrer"
            className="underline-on-hover--dark text-neutral-700 dark:text-neutral-400"
          >
            <span className="font-roboto">
              <FaEnvelopeSquare
                size={24}
                className="fill-primary-900 dark:fill-primary-400"
              />
              <span className="underline-on-hover text-lg">
                &nbsp;{summary.email}
              </span>
            </span>
          </NextLink>
        </h3>
        <h3 className="m-2a text-lg text-neutral-700 dark:text-neutral-400">
          <FaMapMarkerAlt />
          &nbsp;{summary.address}
        </h3>
      </section>
    </div>
  );
}

const summary = {
  jobTitle: 'jobTitle',
  company: 'Tre',
  email: 'carloginocatapang@gmail.com',
  address: 'Stockholm, Sweden',
  name: 'Carlo Gino Catapang',
  companyWebsite: 'https://www.tre.se',
};
