import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import SocialMedia from '../social/SocialMedia';

export default function WideScreenContentImpl() {
  return (
    <WideScreenContainer>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/resume">
              <a>Resume</a>
            </Link>
          </li>
          <li>
            <Link href="/about-me">
              <a>About Me</a>
            </Link>
          </li>
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

  > nav {
    > ul {
      align-items: center;
      display: flex;
      margin: 0;
      padding: 0;
      list-style: none;

      > li {
        :not(:last-child) {
          margin-right: 1rem;
        }
      }
    }
  }
`;
