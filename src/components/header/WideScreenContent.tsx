import React from 'react';
import dynamic from 'next/dynamic';
import {useRouter} from 'next/router';
import useDarkMode from 'use-dark-mode';
import NextLink from '../basic/NextLink';
import SocialMedia from '../social/SocialMedia';
import {navigationLinks} from './nav-links';

const DarkModeToggle = dynamic(() => import('react-dark-mode-toggle'), {
  ssr: false,
});

export default function WideScreenContentImpl() {
  const router = useRouter();
  const {value: isDarkMode, toggle} = useDarkMode();

  return (
    <div className="hidden items-center justify-between w-full md:flex">
      <nav>
        <ul className="flex items-center p-0 m-0">
          {navigationLinks.map(link => (
            <li
              key={link.label}
              className="underline-on-hover text-white mr-4 last:mr-0 hover:text-primary-light"
            >
              <NextLink
                href={link.url}
                className={
                  router.asPath.includes(`${link.url}`)
                    ? 'text-primary-light border-b-2 border-b-primary-light'
                    : ''
                }
                aria-label={link.label}
              >
                {link.label}
              </NextLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex">
        <SocialMedia />
        <div className="h-14 max-h-14 ml-1">
          <DarkModeToggle onChange={toggle} checked={isDarkMode} size={70} />
        </div>
      </div>
    </div>
  );
}
