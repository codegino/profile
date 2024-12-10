import NextLink from './basic/NextLink';
import {BottomRightShape} from './extras/BottomRightShape';
import {TopLeftShape} from './extras/TopLeftShape';
import SocialMedia from './social/SocialMedia';
import type {FC} from 'react';
import {createTranslation} from '../app/i18n/server';
import BuyMeACoffeeIcon from './social/BuyMeACoffeeIcon';

const Footer: FC = async () => {
  const {t} = await createTranslation('common');

  return (
    <footer className="relative flex h-48 w-full justify-center overflow-hidden bg-neutral-900 text-white md:h-32">
      <TopLeftShape />
      <BottomRightShape />
      <div
        className="flex w-full flex-col-reverse items-center justify-center gap-y-4 text-center
      sm:max-w-2xl sm:text-right md:flex-row md:justify-around"
      >
        <div className="m-1">
          <NextLink
            href="/sitemap.xml"
            aria-label="Sitemap"
            className="mr-4 font-bold"
          >
            {t('sitemap')}
          </NextLink>
          <NextLink
            href="/rss.xml"
            aria-label="Rss Feed"
            rel="noreferrer"
            className=" font-bold"
          >
            {t('rssFeed')}
          </NextLink>
          <p className="mt-2">{t('allRightsReserved')}</p>
          <p>© Carlo Gino Catapang {new Date().getFullYear()}</p>
        </div>
        <div className="flex items-center">
          <BuyMeACoffeeIcon className="mr-1" />

          <SocialMedia />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
