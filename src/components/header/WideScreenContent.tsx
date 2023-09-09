import clsx from 'clsx';
import dynamic from 'next/dynamic';
import {useParams, usePathname} from 'next/navigation';
import NextLink from '../basic/NextLink';
import SocialMedia from '../social/SocialMedia';
import {ChangeLocale} from './ChangeLocale';
import {navigationLinks} from './nav-links';
import {useTranslation} from '../../app/i18n/client';
import BuyMeACoffeeIcon from '../social/BuyMeACoffeeIcon';
import {locales} from '../../app/i18n/locales.enum';
import {createI18nUrlSegment} from '@/app/i18n/create-slug';

const DarkModeToggle = dynamic(() => import('../DarkModeToggle'), {
  ssr: false,
});

export default function WideScreenContentImpl() {
  const path = usePathname();
  const params = useParams();

  const locale = params?.lang as locales;

  const {t} = useTranslation(locale, 'common');

  return (
    <div className="hidden items-center justify-between w-full lg:flex">
      <nav>
        <ul className="flex items-center p-0 m-0">
          {navigationLinks.map(link => (
            <li
              key={link.label}
              className="underline-on-hover text-white mr-3 last:mr-0 "
            >
              <NextLink
                href={createI18nUrlSegment(link.url, locale)}
                className={clsx('hover:text-primary-600', {
                  'text-primary-600 border-b-2 border-b-primary-600':
                    path?.includes(link.url),
                })}
                aria-label={t(link.label)}
              >
                <span className="text-lg">{t(link.label)}</span>
              </NextLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center pr-3">
        <SocialMedia />
        <BuyMeACoffeeIcon className="ml-4" />
        <div className="h-full mx-3 min-w-[2.2rem]">
          <DarkModeToggle />
        </div>
        <ChangeLocale />
      </div>
    </div>
  );
}
