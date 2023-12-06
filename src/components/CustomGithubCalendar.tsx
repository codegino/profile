'use client';
import GithubCalendar from 'react-github-calendar';
import NextLink from './basic/NextLink';
import {useTranslation} from '../app/i18n/client';
import {useParams} from 'next/navigation';
import {Zoom} from 'react-awesome-reveal';
import {locales} from '../app/i18n/locales.enum';

export default function CustomGithubCalendar() {
  const locale = useParams()?.lang as locales;
  const {t} = useTranslation(locale, 'resume');

  return (
    <Zoom triggerOnce>
      <div className="flex flex-col items-center my-10 bg-white dark:bg-black p-1 rounded-xl">
        <h2 className="mb-5">
          <>
            {t('my')}&nbsp;
            <NextLink
              href="https://github.com/codegino"
              target="_blank"
              aria-label="Github profile"
              rel="noreferrer"
              title="Link to my Github profile"
              className="text-2xl underline-on-hover underline--dark"
            >
              Github
            </NextLink>
            &nbsp;{t('activity')}
          </>
        </h2>

        <div className="overflow-x-auto max-w-lg sm:max-w-6xl  pb-4">
          <style jsx global>
            {`
              .react-activity-calendar__legend-month text {
                font-size: 2rem;
              }

              .react-activity-calendar {
                width: 65rem;
                padding: 0 6rem;
              }
            `}
          </style>
          <GithubCalendar
            username="codegino"
            fontSize={30}
            blockMargin={4}
            blockRadius={1}
            blockSize={12}
          ></GithubCalendar>
        </div>
      </div>
    </Zoom>
  );
}
