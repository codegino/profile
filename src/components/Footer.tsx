import React from 'react';
import NextLink from './basic/NextLink';
import {BottomRightShape} from './extras/BottomRightShape';
import {TopLeftShape} from './extras/TopLeftShape';
import SocialMedia from './social/SocialMedia';

export default function Footer() {
  return (
    <footer className="w-full relative h-48 bg-black text-white flex justify-center overflow-hidden md:h-32">
      <TopLeftShape />
      <BottomRightShape />
      <div
        className="flex items-center flex-col-reverse justify-center max-w-6xl w-full text-center
      md:flex-row md:justify-around md:text-right"
      >
        <div className="m-1">
          <NextLink href="/sitemap.xml" aria-label="Sitemap" className="mr-4">
            Sitemap
          </NextLink>
          <NextLink
            href="/rss.xml"
            aria-label="Rss Feed"
            rel="noopener nofollow"
          >
            RSS Feed
          </NextLink>
          <p>All rights reserved</p>
          <p>© Carlo Gino Catapang 2021</p>
        </div>
        <SocialMedia />
      </div>
    </footer>
  );
}
