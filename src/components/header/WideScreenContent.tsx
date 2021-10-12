import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {mediaQuery} from '../../utils/media-query';
import SocialMedia from '../social/SocialMedia';
import {navigationLinks} from './nav-links';

export default function WideScreenContentImpl() {
  const router = useRouter();

  return (
    <WideScreenContainer>
      <nav>
        <ul>
          {navigationLinks.map(link => (
            <li key={link.label}>
              <Link href={link.url}>
                <a
                  className={router.asPath == `${link.url}` ? 'active' : ''}
                  aria-label={link.label}
                >
                  {link.label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <SocialMedia />
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

  > nav {
    > ul {
      align-items: center;
      display: flex;
      margin: 0;
      padding: 0;
      list-style: none;

      > li {
        &:hover {
          text-decoration: underline;
          color: var(--color-light);
        }

        .active {
          color: var(--color-primary);
          text-decoration: underline;
        }

        :not(:last-child) {
          margin-right: 1rem;
        }
      }
    }
  }
`;
