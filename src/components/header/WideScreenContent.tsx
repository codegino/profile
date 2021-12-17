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
    <div className="hidden items-center justify-between w-full lg:flex">
      <nav>
        <ul className="flex items-center p-0 m-0">
          {navigationLinks.map(link => (
            <li
              key={link.label}
              className="underline-on-hover text-white mr-2 last:mr-0 hover:text-primary-light"
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
                <span className="text-xl">{link.label}</span>
              </NextLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center">
        <SocialMedia />
        <div className="h-full ml-1 min-w-[4.4rem]">
          <DarkModeToggle onChange={toggle} checked={isDarkMode} size={69} />
        </div>
      </div>
    </div>
  );
}
