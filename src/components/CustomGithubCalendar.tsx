import React from 'react';
import Link from 'next/link';
import GithubCalendar from 'react-github-calendar';
import {useMediaQuery} from 'react-responsive';
import Zoom from 'react-reveal/Zoom';

export default function CustomGithubCalendar() {
  const is400PxAndUp = useMediaQuery({
    query: '(min-width: 400px)',
  });

  return (
    <Zoom>
      <div className="flex flex-col items-center my-10 overflow-hidden px-2">
        <h2 className="m-0">
          My&nbsp;
          <Link href="https://github.com/codegino">
            <a
              target="_blank"
              aria-label="Github profile"
              rel="noopener nofollow"
              title="Link to my Github profile"
              className="text-primary-dark text-inherit underline-on-hover underline--dark"
            >
              Github
            </a>
          </Link>
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
