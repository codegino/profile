import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import SocialMedia from './social/SocialMedia';

export default function Header() {
  return (
    <Container>
      <nav>
        <ul>
          <StyledImage className="logo">
            <Link href="/">
              <a>
                <Image
                  src="/assets/logo.svg"
                  height={26}
                  width={26}
                  alt="My logo"
                />
              </a>
            </Link>
          </StyledImage>
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
    </Container>
  );
}

const StyledImage = styled.li`
  border-radius: 50%;
  height: 27px;
  width: 27px;
  padding: 2px;
  transition: all .5s;
  background-color: var(--color-light-light);
  border-radius: 50%;
  border: 1px solid var(--color-light);
  box-shadow: 0 0 1px 1px var(--color-dark-dark);
  z-index: 100;
  animation: appearFromLarge 2s 0s ease;

  &:hover {
      box-shadow: 0 0 10px 3px var(--color-primary-accent);
      animation: rotateClockwise 2s infinite;
    }
  }

  @keyframes appearFromLarge {
    0% {
      transform: scale(1) rotate(360deg);
      box-shadow: 0 0 10px 3px var(--color-primary-accent);
    }
    100% {
      transform: scale(1) rotate(0deg);
  }
`;

const Container = styled.header`
  height: 50px;
  width: 100%;
  background-color: var(--color-dark);
  color: var(--color-light);
  display: flex;
  align-items: center;
  padding: 0 var(--padding-small);
  justify-content: space-between;
  overflow: hidden;

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
