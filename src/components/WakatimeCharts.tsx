import React from 'react';
import Zoom from 'react-reveal/Zoom';
import NextLink from './basic/NextLink';

export default function WakatimeCharts() {
  return (
    <div className="max-w-6xlxl overflow-hidden flex flex-col py-4 sm:px-24 md:px-[25%]">
      <h2 className="mb-4 text-center">
        My&nbsp;
        <NextLink
          href="https://wakatime.com/@codegino"
          target="_blank"
          aria-label="Wakatime profile"
          rel="noopener nofollow"
          title="Link to my Wakatime profile"
          className="text-primary-dark text-inherit underline-on-hover underline--dark"
        >
          Wakatime
        </NextLink>
        &nbsp;activity
      </h2>
      <Zoom>
        <figure>
          <embed src="https://wakatime.com/share/@codegino/aa8c74ed-2174-445a-805d-e46a869c3b8b.svg"></embed>
        </figure>
      </Zoom>
      <Zoom>
        <figure>
          <embed src="https://wakatime.com/share/@codegino/e7ca5c4c-67a6-47fc-a3c6-e020cb97b66b.svg"></embed>
        </figure>
      </Zoom>
    </div>
  );
}
