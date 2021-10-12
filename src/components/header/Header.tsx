import React, {useState} from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import DarkModeToggle from 'react-dark-mode-toggle';
import useDarkMode from 'use-dark-mode';
import SmallScreenContent from './SmallScreenContent';
import WideScreenContentImpl from './WideScreenContent';

export default function Header() {
  const {value, toggle} = useDarkMode(false);

  React.useEffect(() => {
    if (value) {
      document.documentElement.style.setProperty(
        '--color-light-light',
        '#000000',
      );
      document.documentElement.style.setProperty('--color-light', '#111111');
      document.documentElement.style.setProperty(
        '--color-dark-dark',
        '#FFFFFF',
      );
      document.documentElement.style.setProperty('--color-dark', '#EEEEEE');
      document.documentElement.style.setProperty(
        '--color-primary-light',
        'green',
      );
      document.documentElement.style.setProperty(
        '--color-primary-dark',
        '#aaff00',
      );
    } else {
      document.documentElement.style.setProperty(
        '--color-light-light',
        '#FFFFFF',
      );
      document.documentElement.style.setProperty('--color-light', '#EEEEEE');
      document.documentElement.style.setProperty(
        '--color-dark-dark',
        '#000000',
      );
      document.documentElement.style.setProperty('--color-dark', '#111111');
      document.documentElement.style.setProperty(
        '--color-primary-dark',
        'green',
      );
      document.documentElement.style.setProperty(
        '--color-primary-light',
        '#aaff00',
      );
    }
  }, [value]);

  return (
    <Container>
      <div>
        <MyLogo className="logo">
          <Link href="/">
            <a aria-label="My Logo">
              <Image
                priority
                src="/assets/logo.svg"
                height={26}
                width={26}
                alt="My logo"
              />
            </a>
          </Link>
        </MyLogo>
      </div>
      <WideScreenContentImpl />
      <div style={{display: 'flex'}}>
        <DarkModeToggle
          onChange={toggle}
          checked={value}
          size={70}
          className="dark-mode-toggle"
        />
      </div>
      <SmallScreenContent />
    </Container>
  );
}
const Container = styled.header`
  height: 50px;
  min-height: 50px;
  width: 100%;
  background-color: var(--color-dark);
  color: var(--color-light);
  padding: 0 var(--padding-small);
  display: flex;
  align-items: center;
  overflow: hidden;

  .dark-mode-toggle {
    width: 20px;
    overflow: initial;
  }
`;

const MyLogo = styled.div`
  border-radius: 50%;
  height: 27px;
  width: 27px;
  padding: 2px;
  transition: all 0.5s;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 0 1px 1px var(--color-dark-dark);
  z-index: 100;
  margin-right: var(--margin-small);

  &:hover {
    box-shadow: 0 0 10px 3px var(--color-primary-accent);
    animation: rotateClockwise 2s infinite;
  }
`;
