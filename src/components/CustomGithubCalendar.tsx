import React from 'react';
import Link from 'next/link';
import {Zoom} from 'react-awesome-reveal';
import GithubCalendar from 'react-github-calendar';
import {useMediaQuery} from 'react-responsive';
import ReactTooltip from 'react-tooltip';

export default function CustomGithubCalendar() {
  const is400PxAndUp = useMediaQuery({
    query: '(min-width: 400px)',
  });

  return (
    <Zoom
      className="flex flex-col items-center my-10 overflow-hidden px-2"
      triggerOnce
    >
      <h2 className="m-0">
        My&nbsp;
        <Link href="https://github.com/codegino">
          <a
            target="_blank"
            aria-label="Github profile"
            rel="noopener nofollow"
            data-tip="Link to my Github profile"
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
      >
        <ReactTooltip html />
      </GithubCalendar>
    </Zoom>
  );
}
