import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import {useRouter} from 'next/router';
import DarkModeToggle from 'react-dark-mode-toggle';
import {underlineOnHover} from '../../frontend-utils/animation-effects';
import useCssVariableTheme from '../../hooks/css-varible-theme';
import {mediaQuery} from '../../utils/media-query';
import SocialMedia from '../social/SocialMedia';
import {navigationLinks} from './nav-links';

export default function WideScreenContentImpl() {
  const router = useRouter();
  const {isDarkMode, toggle} = useCssVariableTheme();

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
      <div style={{display: 'flex'}}>
        <SocialMedia />
        <DarkModeToggle
          onChange={toggle}
          checked={isDarkMode}
          size={70}
          className="dark-mode-toggle"
        />
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

  ${mediaQuery(700, 'display: flex;')}

  .dark-mode-toggle {
    margin-left: var(--margin-very-small);
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
