import {FaMapMarkerAlt} from '@react-icons/all-files/fa/FaMapMarkerAlt';
import {Fade} from 'react-awesome-reveal';
import {BlurringImage} from '../BlurringImage';
import NextLink from '../basic/NextLink';
import {createTranslation} from '../../app/i18n/server';
import type {BlurImageType} from '../../utils/image-blur.utils';

const summary = {
  company: 'Tre',
  address: 'Stockholm, Sweden',
  name: 'Carlo Gino Catapang',
  companyWebsite: 'https://www.tre.se',
};

export default async function AboutTeaser({
  img,
  svg,
}: Pick<BlurImageType, 'svg' | 'img'>) {
  const {t} = await createTranslation('resume');
  const {t: tHome} = await createTranslation('home');

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:py-20">
      {/* Decorative background accents */}
      <div
        aria-hidden
        className="bg-primary-300/20 dark:bg-primary-700/20 pointer-events-none absolute -top-24 left-[10%] size-72 rounded-full blur-3xl"
      />
      <div
        aria-hidden
        className="bg-primary-200/20 dark:bg-primary-800/20 pointer-events-none absolute -bottom-32 right-[5%] size-96 rounded-full blur-3xl"
      />

      <Fade direction="up" triggerOnce>
        <div className="relative mx-auto max-w-4xl rounded-2xl border border-neutral-200 bg-white/70 p-8 shadow-xs backdrop-blur-xs dark:border-neutral-700 dark:bg-neutral-800/70 sm:p-12">
          <p className="m-0 mb-6 text-center text-sm font-semibold uppercase tracking-widest text-primary-900 dark:text-primary-300">
            {tHome('about.kicker')}
          </p>

          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-10">
            <div className="relative shrink-0">
              <div
                aria-hidden
                className="absolute -inset-2 rounded-full bg-linear-to-br from-primary-400 to-primary-800 opacity-70 blur-xs dark:from-primary-300 dark:to-primary-600"
              />
              <div className="relative size-36 overflow-hidden rounded-full ring-4 ring-white dark:ring-neutral-900 md:size-40">
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

            <div className="flex flex-col items-center gap-3 text-center md:items-start md:text-left">
              <div>
                <h2 className="m-0 text-3xl font-extrabold tracking-tight sm:text-4xl">
                  {summary.name}
                </h2>
                <h3 className="m-0 mt-1 text-lg font-semibold text-primary-900 dark:text-primary-300 sm:text-xl">
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
                </h3>
              </div>

              <p className="m-0 max-w-xl leading-relaxed text-neutral-700 dark:text-neutral-300">
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
                href="/resume"
                aria-label="View full resume"
                title="View full resume"
                className="mt-3 inline-flex items-center gap-2 rounded-lg bg-primary-900 px-5 py-2.5 font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg dark:bg-primary-300 dark:text-neutral-900"
              >
                {tHome('about.viewResume')}
              </NextLink>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}
