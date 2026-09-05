'use client';
import dynamicImport from 'next/dynamic';
import {Fade} from 'react-awesome-reveal';
import {useTranslation} from '../../app/i18n/client';
import SectionHeader from './SectionHeader';

const CustomGithubCalendar = dynamicImport(
  () => import('../CustomGithubCalendar'),
);

const WakatimeCharts = dynamicImport(() => import('../WakatimeCharts'));

export default function CodingActivity() {
  const {t} = useTranslation('home');

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:py-20">
      <div
        aria-hidden
        className="bg-primary-300/20 dark:bg-primary-700/20 pointer-events-none absolute -top-24 right-[15%] size-72 rounded-full blur-3xl"
      />

      <Fade direction="up" triggerOnce>
        <SectionHeader
          kicker={t('activity.kicker')}
          title={t('activity.title')}
        />
      </Fade>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8">
        <Fade direction="up" triggerOnce className="w-full">
          <div className="w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white p-4 shadow-xs dark:border-neutral-700 dark:bg-neutral-800 sm:p-6">
            <CustomGithubCalendar />
          </div>
        </Fade>
        <Fade direction="up" triggerOnce className="w-full max-w-4xl">
          <div className="w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white p-4 shadow-xs dark:border-neutral-700 dark:bg-neutral-800 sm:p-6">
            <WakatimeCharts />
          </div>
        </Fade>
      </div>
    </section>
  );
}
