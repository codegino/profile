import React from 'react';
import styled from '@emotion/styled';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import {useRouter} from 'next/router';
import useDarkMode from 'use-dark-mode';
import {underlineOnHover} from '../../frontend-utils/animation-effects';
import {mediaQuery} from '../../utils/media-query';
import SocialMedia from '../social/SocialMedia';
import {navigationLinks} from './nav-links';

const DarkModeToggle = dynamic(() => import('react-dark-mode-toggle'), {
  ssr: false,
});

export default function WideScreenContentImpl() {
  const router = useRouter();
  const {value: isDarkMode, toggle} = useDarkMode();

  return (
    <WideScreenContainer>
      <nav>
        <ul>
          {navigationLinks.map(link => (
            <li key={link.label}>
              <Link href={link.url}>
                <a
                  className={
                    router.asPath.includes(`${link.url}`) ? 'active' : ''
                  }
                  aria-label={link.label}
                >
                  {link.label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="actions-wrapper">
        <SocialMedia />
        <div className="dark-mode-toggle">
          <DarkModeToggle onChange={toggle} checked={isDarkMode} size={70} />
        </div>
      </div>
    </WideScreenContainer>
  );
}

const WideScreenContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  display: none;

  > .actions-wrapper {
    display: flex;
  }

  ${mediaQuery(700, 'display: flex;')}

  .dark-mode-toggle {
    min-width: 7rem;
    max-width: 7rem;
    max-height: 3.3rem;
    min-height: 3.3rem;
    margin-left: var(--spacing-very-small);
  }

  > nav {
    > ul {
      align-items: center;
      display: flex;
      margin: 0;
      padding: 0;
      list-style: none;

      > li {
        color: #dddddd;

        &:hover {
          color: #ffffff;
        }

        ${underlineOnHover()}

        .active {
          color: var(--color-primary-light);
          border-bottom: 2px solid var(--color-primary-light);
        }

        :not(:last-child) {
          margin-right: 1rem;
        }
      }
    }
  }
`;
