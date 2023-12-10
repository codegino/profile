'use client';
import {Zoom} from 'react-awesome-reveal';
import {useTranslation} from '../app/i18n/client';
import NextLink from './basic/NextLink';

export default function WakatimeCharts() {
  const {t} = useTranslation('resume');

  return (
    <div className="overflow-hidden flex flex-col py-4 sm:px-24 w-full">
      <p className="mb-4 text-lg text-center">
        {t('my')}&nbsp;
        <NextLink
          href="https://wakatime.com/@codegino"
          target="_blank"
          aria-label="Wakatime profile"
          rel="noreferrer"
          title="Link to my Wakatime profile"
          className="text-lg text-primary-900 dark:text-primary-300 underline-on-hover underline--dark"
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
