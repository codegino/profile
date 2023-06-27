'use client';
import NextLink from './basic/NextLink';
import {useTranslation} from '../app/i18n/client';
import {useParams} from 'next/navigation';

export default function WakatimeCharts() {
  const params = useParams();
  const {t} = useTranslation(params?.lng, 'resume');

  return (
    <div className="overflow-hidden flex flex-col py-4 sm:px-24 w-full">
      <h2 className="mb-4 text-center">
        {t('my')}&nbsp;
        <NextLink
          href="https://wakatime.com/@codegino"
          target="_blank"
          aria-label="Wakatime profile"
          rel="noreferrer"
          title="Link to my Wakatime profile"
          className="text-primary-dark text-2xl underline-on-hover underline--dark"
        >
          Wakatime
        </NextLink>
        &nbsp;{t('activity')}
      </h2>
      <figure className="flex justify-center">
        <embed
          className="max-w-md md:max-w-lg"
          src="https://wakatime.com/share/@codegino/aa8c74ed-2174-445a-805d-e46a869c3b8b.svg"
        ></embed>
      </figure>
    </div>
  );
}
