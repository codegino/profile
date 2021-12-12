import React from 'react';
import GithubCalendar from 'react-github-calendar';
import {useMediaQuery} from 'react-responsive';
import Zoom from 'react-reveal/Zoom';
import NextLink from './basic/NextLink';

export default function CustomGithubCalendar() {
  const is400PxAndUp = useMediaQuery({
    query: '(min-width: 400px)',
  });

  return (
    <Zoom>
      <div className="flex flex-col items-center my-10 overflow-hidden px-2">
        <h2 className="m-0">
          My&nbsp;
          <NextLink
            href="https://github.com/codegino"
            target="_blank"
            aria-label="Github profile"
            rel="noopener nofollow"
            title="Link to my Github profile"
            className="text-primary-dark text-inherit underline-on-hover underline--dark"
          >
            Github
          </NextLink>
          &nbsp;activity
        </h2>

        <GithubCalendar
          username="codegino"
          hideColorLegend={!is400PxAndUp}
          blockMargin={5}
          blockRadius={3}
          blockSize={15}
        />
      </div>
    </Zoom>
  );
}
