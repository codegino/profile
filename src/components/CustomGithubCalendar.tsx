import React from 'react';
import GithubCalendar from 'react-github-calendar';
import Zoom from 'react-reveal/Zoom';
import NextLink from './basic/NextLink';

export default function CustomGithubCalendar() {
  return (
    <Zoom>
      <div className="flex flex-col items-center my-10 bg-lightest p-1 rounded-xl">
        <h2 className="mb-5">
          My&nbsp;
          <NextLink
            href="https://github.com/codegino"
            target="_blank"
            aria-label="Github profile"
            rel="noopener noreferrer nofollow"
            title="Link to my Github profile"
            className="text-primary-dark text-2xl underline-on-hover underline--dark"
          >
            Github
          </NextLink>
          &nbsp;activity
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
            blockMargin={10}
            blockRadius={6}
            blockSize={25}
          ></GithubCalendar>
        </div>
      </div>
    </Zoom>
  );
}
