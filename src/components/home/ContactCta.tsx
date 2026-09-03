'use client';
import {FaEnvelopeSquare} from '@react-icons/all-files/fa/FaEnvelopeSquare';
import {Fade} from 'react-awesome-reveal';
import {useTranslation} from '../../app/i18n/client';
import NextLink from '../basic/NextLink';
import BookACallButton from '../booking/BookACallButton';
import SectionHeader from './SectionHeader';

export default function ContactCta() {
  const {t} = useTranslation('home');
  const {t: tCommon} = useTranslation('common');

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:py-20">
      <div
        aria-hidden
        className="bg-primary-300/20 dark:bg-primary-700/20 pointer-events-none absolute -bottom-24 left-[15%] size-72 rounded-full blur-3xl"
      />

      <Fade direction="up" triggerOnce>
        <SectionHeader kicker={t('contact.kicker')} title={t('contact.title')} />
      </Fade>

      <Fade direction="up" triggerOnce>
        <div className="relative mx-auto max-w-2xl text-center">
          <p className="m-0 text-lg text-neutral-600 dark:text-neutral-300">
            {t('contact.description')}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <BookACallButton
              label={tCommon('bookACall')}
              title={tCommon('bookACallTitle')}
              closeLabel={tCommon('closeDialog')}
              className="inline-flex items-center gap-2 rounded-lg bg-primary-900 px-5 py-2.5 font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg dark:bg-primary-300 dark:text-neutral-900"
            />
            <NextLink
              href="mailto:carloginocatapang@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label={t('contact.emailMe')}
              title={t('contact.emailMe')}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-neutral-300 px-5 py-2.5 font-semibold text-neutral-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary-900 hover:text-primary-900 dark:border-neutral-600 dark:text-neutral-200 dark:hover:border-primary-300 dark:hover:text-primary-300"
            >
              <FaEnvelopeSquare />
              {t('contact.emailMe')}
            </NextLink>
          </div>
        </div>
      </Fade>
    </section>
  );
}
