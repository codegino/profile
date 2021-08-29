import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

const HeaderContainer = styled.header`
  height: 50px;
  width: 100%;
  padding: 0.5rem 1rem;

  > nav {
    > ul {
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

export default function Header() {
  return (
    <HeaderContainer>
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
    </HeaderContainer>
  );
}
