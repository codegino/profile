import clsx from 'clsx';
import {usePathname} from 'next/navigation';
import NextLink from '../basic/NextLink';
import SocialMedia from '../social/SocialMedia';
import {navigationLinks} from './nav-links';
import {useTranslation} from '../../app/i18n/client';
import BuyMeACoffeeIcon from '../social/BuyMeACoffeeIcon';
import DarkModeToggle from '../DarkModeToggle';

export default function WideScreenContentImpl() {
  const path = usePathname();

  const {t} = useTranslation('common');

  return (
    <div className="hidden w-full items-center justify-between lg:flex ">
      <nav className="mx-auto items-center">
        <ul className="m-0 flex items-center p-0">
          {navigationLinks.map(link => (
            <li
              key={link.label}
              className="underline-on-hover mr-3 text-neutral-100 last:mr-0"
            >
              <NextLink
                href={link.url}
                className={clsx('font-semibold hover:text-primary-200', {
                  'text-primary-300': path?.includes(link.url),
                })}
                target={link.target}
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
        <div className="ml-3 h-full">
          <DarkModeToggle />
        </div>
      </div>
    </div>
  );
}
