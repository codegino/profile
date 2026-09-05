import {FaEnvelopeSquare} from '@react-icons/all-files/fa/FaEnvelopeSquare';
import {FaMapMarkerAlt} from '@react-icons/all-files/fa/FaMapMarkerAlt';
import {BlurringImage} from '../../components/BlurringImage';
import NextLink from '../../components/basic/NextLink';
import {createTranslation} from '../i18n/server';
import type {BlurImageType} from '../../utils/image-blur.utils';
import DownloadButtons from './DownloadButtons';

const summary = {
  company: 'Tre',
  email: 'carloginocatapang@gmail.com',
  address: 'Stockholm, Sweden',
  name: 'Carlo Gino Catapang',
  companyWebsite: 'https://www.tre.se',
};

export default async function ResumeHero({
  img,
  svg,
  resumePdfUrl,
  resumeWordUrl,
}: Pick<BlurImageType, 'svg' | 'img'> & {
  resumePdfUrl: string;
  resumeWordUrl: string;
}) {
  const {t} = await createTranslation('resume');

  return (
    <section className="relative overflow-hidden px-4 py-14 sm:py-20">
      {/* Decorative background accents */}
      <div
        aria-hidden
        className="bg-primary-300/20 dark:bg-primary-700/20 pointer-events-none absolute -top-24 right-[10%] size-72 rounded-full blur-3xl"
      />
      <div
        aria-hidden
        className="bg-primary-200/20 dark:bg-primary-800/20 pointer-events-none absolute -bottom-32 left-[5%] size-96 rounded-full blur-3xl"
      />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 md:flex-row md:items-center md:gap-12">
        <div className="relative shrink-0">
          <div
            aria-hidden
            className="absolute -inset-2 rounded-full bg-linear-to-br from-primary-400 to-primary-800 opacity-70 blur-xs dark:from-primary-300 dark:to-primary-600"
          />
          <div className="relative size-40 overflow-hidden rounded-full ring-4 ring-white dark:ring-neutral-900 md:size-48">
            <BlurringImage
              img={img}
              svg={svg}
              alt="Carlo Gino"
              title="Carlo Gino"
              height={200}
              width={200}
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
          <div>
            <h1 className="m-0 text-4xl font-extrabold tracking-tight sm:text-5xl">
              {summary.name}
            </h1>
            <h2 className="m-0 mt-1 text-xl font-semibold text-primary-900 dark:text-primary-300 sm:text-2xl">
              {t('jobTitle')}{' '}
              <span className="font-normal text-neutral-600 dark:text-neutral-400">
                {t('at')}
              </span>{' '}
              <NextLink
                href={summary.companyWebsite}
                target="_blank"
                aria-label="Company Website"
                rel="noreferrer"
                className="underline-on-hover"
              >
                {summary.company}
              </NextLink>
            </h2>
          </div>

          <p className="m-0 max-w-xl text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            {t('tagline')}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-neutral-700 dark:text-neutral-400 md:justify-start">
            <span className="flex items-center gap-2 font-semibold">
              <span className="text-2xl font-extrabold text-primary-900 dark:text-primary-300">
                10+
              </span>
              {t('yearsOfExperience')}
            </span>
            <span
              aria-hidden
              className="hidden h-6 w-px bg-neutral-300 dark:bg-neutral-700 sm:block"
            />
            <span className="flex items-center gap-2 font-semibold">
              <span className="text-2xl font-extrabold text-primary-900 dark:text-primary-300">
                5
              </span>
              {t('companies')}
            </span>
            <span
              aria-hidden
              className="hidden h-6 w-px bg-neutral-300 dark:bg-neutral-700 sm:block"
            />
            <span className="flex items-center gap-1.5">
              <FaMapMarkerAlt className="fill-primary-900 dark:fill-primary-400" />
              {summary.address}
            </span>
          </div>

          <NextLink
            href={`mailto:${summary.email}`}
            target="_blank"
            aria-label="Email me"
            title="Send me an email"
            rel="noreferrer"
            className="flex items-center gap-2 text-neutral-700 dark:text-neutral-400"
          >
            <FaEnvelopeSquare
              size={22}
              className="fill-primary-900 dark:fill-primary-400"
            />
            <span className="underline-on-hover text-lg">{summary.email}</span>
          </NextLink>

          <div className="mt-2">
            <DownloadButtons
              resumePdfUrl={resumePdfUrl}
              resumeWordUrl={resumeWordUrl}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
