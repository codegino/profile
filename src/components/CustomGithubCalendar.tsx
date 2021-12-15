import React from 'react';
import GithubCalendar from 'react-github-calendar';
import Zoom from 'react-reveal/Zoom';
import NextLink from './basic/NextLink';

export default function CustomGithubCalendar() {
  return (
    <Zoom>
      <div className="flex flex-col items-center my-10 overflow-hidden px-5">
        <h2 className="mb-5">
          My&nbsp;
          <NextLink
            href="https://github.com/codegino"
            target="_blank"
            aria-label="Github profile"
            rel="noopener nofollow"
            title="Link to my Github profile"
            className="text-primary-dark text-2xl underline-on-hover underline--dark"
          >
            Github
          </NextLink>
          &nbsp;activity
        </h2>

        <GithubCalendar
          username="codegino"
          hideColorLegend={true}
          blockMargin={10}
          blockRadius={6}
          blockSize={25}
          fontSize={25}
        />
      </div>
    </Zoom>
  );
}
