'use client';
import GithubCalendar from 'react-github-calendar';
import NextLink from './basic/NextLink';
import {useTranslation} from '@/app/i18n/client';
import {Zoom} from 'react-awesome-reveal';

export default function CustomGithubCalendar() {
  const {t} = useTranslation('resume');

  return (
    <Zoom triggerOnce>
      <div className="flex flex-col items-center my-10 bg-neutral-100 dark:bg-neutral-800 p-1 rounded-xl">
        <p className="mb-5 text-lg">
          <>
            {t('my')}&nbsp;
            <NextLink
              href="https://github.com/codegino"
              target="_blank"
              aria-label="Github profile"
              rel="noreferrer"
              title="Link to my Github profile"
              className="text-lg text-primary-900 dark:text-primary-300 underline-on-hover underline--dark"
            >
              Github
            </NextLink>
            &nbsp;{t('activity')}
          </>
        </p>

        <div className="overflow-x-auto max-w-lg sm:max-w-6xl  pb-4 [&_.react-activity-calendar]:px-10">
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
