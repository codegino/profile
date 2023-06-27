import clsx from 'clsx';
import {useTranslation} from 'next-i18next';
import dynamic from 'next/dynamic';
import {useRouter} from 'next/router';
import NextLink from '../basic/NextLink';
import SocialMedia from '../social/SocialMedia';
import {ChangeLocale} from './ChangeLocale';
import {navigationLinks} from './nav-links';

const DarkModeToggle = dynamic(() => import('../DarkModeToggle'), {
  ssr: false,
});

export default function WideScreenContentImpl() {
  const router = useRouter();

  const {t} = useTranslation('common');

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
                href={'/en' + link.url}
                className={clsx('hover:text-primary-600', {
                  'text-primary-600 border-b-2 border-b-primary-600':
                    router.asPath.includes(link.url),
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
        <div className="h-full mx-3 min-w-[2.2rem]">
          <DarkModeToggle />
        </div>
        <ChangeLocale />
      </div>
    </div>
  );
}
