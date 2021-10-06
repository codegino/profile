import React, {useState, useRef} from 'react';
import styled from '@emotion/styled';
import {GrClose} from '@react-icons/all-files/gr/GrClose';
import {TiThMenu} from '@react-icons/all-files/ti/TiThMenu';
import Link from 'next/link';
import {CSSTransition} from 'react-transition-group';
import SocialMedia from '../social/SocialMedia';

export default function SmallScreenContent() {
  const [isOpen, setIsOpen] = useState(false);
  const nodeRef = useRef(null);

  const sidebarOpen = () => {
    setIsOpen(true);
  };

  const sidebarClose = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <Container>
      <TiThMenu size={30} style={{cursor: 'pointer'}} onClick={sidebarOpen} />
      <CSSTransition
        in={isOpen}
        timeout={200}
        classNames="fade"
        unmountOnExit
        nodeRef={nodeRef}
      >
        <SidebarMask onClick={sidebarClose} ref={nodeRef}>
          <Sidebar onClick={e => e.stopPropagation()}>
            <div
              onClick={sidebarClose}
              style={{
                cursor: 'pointer',
                position: 'relative',
                right: '5px',
                top: '5px',
              }}
            >
              <GrClose size={30} />
            </div>
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
          </Sidebar>
        </SidebarMask>
      </CSSTransition>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  text-align: right;
`;

const Sidebar = styled.div`
  height: 100vh;
  width: 75vw;
  position: absolute;

  top: 0;
  right: 0;
  background-color: var(--color-light);
  color: black;

  > nav {
    > ul {
      align-items: center;
      display: flex;
      margin: 0;
      padding: 0;
      list-style: none;
      flex-direction: column;

      > li {
        :not(:last-child) {
          margin-right: 1rem;
        }
      }
    }
  }
`;

const SidebarMask = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10;
  height: 100vh;
  width: 200vw;
  transition: transform 0.5s;

  // enter from
  &.fade-enter {
    transform: translateX(100%);
  }

  // enter to
  &.fade-enter-active {
    transform: translateX(0%);
  }

  // exit from
  &.fade-exit {
    transform: translateX(0%);
  }

  // exit to
  &.fade-exit-active {
    transform: translateX(100%);
  }
`;
