import {FaEnvelopeSquare} from '@react-icons/all-files/fa/FaEnvelopeSquare';
import {FaMapMarkerAlt} from '@react-icons/all-files/fa/FaMapMarkerAlt';
import {BlurringImage} from './BlurringImage';
import NextLink from './basic/NextLink';
import {createTranslation} from '../app/i18n';
import type {BlurImageType} from '../utils/image-blur.utils';
import {locales} from '../app/i18n/locales.enum';

export default async function ResumeSummary({
  img,
  svg,
  lang,
}: Pick<BlurImageType, 'svg' | 'img'> & {lang: locales}) {
  const {t} = await createTranslation(lang, 'resume');

  return (
    <div className="w-full flex justify-center items-center flex-col py-20 md:flex-row  min-w-max">
      <div className="overflow-hidden rounded-full h-36 w-36 md:rounded-md md:h-44 md:w-44 xl:h-48 xl:w-48">
        <BlurringImage
          img={img}
          svg={svg}
          alt="Carlo Gino"
          title="Carlo Gino"
          height={200}
          width={200}
        />
      </div>
      <section className="flex flex-col items-center justify-start ml-0 md:ml-8">
        <h1 className="m-0">{summary.name}</h1>
        <div className="flex flex-col items-center md:flex-row">
          <h2 className="m-0 lg:my-2 text-2xl">
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
