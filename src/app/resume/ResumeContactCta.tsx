'use client';
import {FaEnvelopeSquare} from '@react-icons/all-files/fa/FaEnvelopeSquare';
import {FaGithub} from '@react-icons/all-files/fa/FaGithub';
import {FaLinkedin} from '@react-icons/all-files/fa/FaLinkedin';
import {FC} from 'react';
import {Fade} from 'react-awesome-reveal';
import NextLink from '../../components/basic/NextLink';
import BookACallButton from '../../components/booking/BookACallButton';
import {useTranslation} from '../i18n/client';
import DownloadButtons from './DownloadButtons';

const ResumeContactCta: FC<{
  resumePdfUrl: string;
  resumeWordUrl: string;
}> = ({resumePdfUrl, resumeWordUrl}) => {
  const {t} = useTranslation('resume');

  return (
    <section className="mx-auto max-w-4xl px-4 pb-16 pt-8">
      <Fade direction="up" triggerOnce>
        <div className="rounded-2xl border border-neutral-200 bg-gradient-to-br from-neutral-50 to-primary-50 p-8 text-center shadow-sm dark:border-neutral-700 dark:from-neutral-800 dark:to-neutral-800 sm:p-12">
          <h2 className="m-0 text-3xl font-bold">{t('ctaTitle')}</h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-neutral-600 dark:text-neutral-300">
            {t('ctaSubtitle')}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <NextLink
              href="mailto:carloginocatapang@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label={t('emailMe')}
              title={t('emailMe')}
              className="inline-flex items-center gap-2 rounded-lg bg-primary-900 px-5 py-2.5 font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg dark:bg-primary-300 dark:text-neutral-900"
            >
              <FaEnvelopeSquare />
              {t('emailMe')}
            </NextLink>
            <BookACallButton
              label={t('bookACall')}
              title={t('bookACallTitle')}
              closeLabel={t('closeDialog')}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-neutral-300 px-5 py-2.5 font-semibold text-neutral-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary-900 hover:text-primary-900 dark:border-neutral-600 dark:text-neutral-200 dark:hover:border-primary-300 dark:hover:text-primary-300"
            />
            <NextLink
              href="https://www.linkedin.com/in/codegino"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-neutral-300 px-5 py-2.5 font-semibold text-neutral-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary-900 hover:text-primary-900 dark:border-neutral-600 dark:text-neutral-200 dark:hover:border-primary-300 dark:hover:text-primary-300"
            >
              <FaLinkedin />
              LinkedIn
            </NextLink>
            <NextLink
              href="https://github.com/codegino"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-neutral-300 px-5 py-2.5 font-semibold text-neutral-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary-900 hover:text-primary-900 dark:border-neutral-600 dark:text-neutral-200 dark:hover:border-primary-300 dark:hover:text-primary-300"
            >
              <FaGithub />
              GitHub
            </NextLink>
          </div>

          <div className="mt-8 border-t border-neutral-200 pt-6 dark:border-neutral-700">
            <p className="mb-3 text-sm uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
              {t('grabACopy')}
            </p>
            <DownloadButtons
              resumePdfUrl={resumePdfUrl}
              resumeWordUrl={resumeWordUrl}
            />
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default ResumeContactCta;
