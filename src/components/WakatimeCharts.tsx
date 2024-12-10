'use client';
import {Zoom} from 'react-awesome-reveal';
import {useTranslation} from '../app/i18n/client';
import NextLink from './basic/NextLink';

export default function WakatimeCharts() {
  const {t} = useTranslation('resume');

  return (
    <div className="flex w-full flex-col overflow-hidden py-4 sm:px-24">
      <p className="mb-4 text-center text-lg">
        {t('my')}&nbsp;
        <NextLink
          href="https://wakatime.com/@codegino"
          target="_blank"
          aria-label="Wakatime profile"
          rel="noreferrer"
          title="Link to my Wakatime profile"
          className="underline-on-hover underline--dark text-lg text-primary-900 dark:text-primary-300"
        >
          Wakatime
        </NextLink>
        &nbsp;{t('activity')}
      </p>
      <Zoom triggerOnce>
        <figure className="flex justify-center">
          <embed
            className="max-w-md md:max-w-lg"
            src="https://wakatime.com/share/@codegino/aa8c74ed-2174-445a-805d-e46a869c3b8b.svg"
          ></embed>
        </figure>
      </Zoom>
    </div>
  );
}
