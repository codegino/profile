import React, {useState, useRef} from 'react';
import styled from '@emotion/styled';
import {FaEnvelopeSquare} from '@react-icons/all-files/fa/FaEnvelopeSquare';
import {FaFacebookMessenger} from '@react-icons/all-files/fa/FaFacebookMessenger';
import {GrClose} from '@react-icons/all-files/gr/GrClose';
import {TiThMenu} from '@react-icons/all-files/ti/TiThMenu';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {CSSTransition} from 'react-transition-group';
import {mediaQuery} from '../../utils/media-query';
import CustomIcon from '../icon/CustomIcon';
import SocialMedia from '../social/SocialMedia';
import {navigationLinks} from './nav-links';

export default function SmallScreenContent() {
  const router = useRouter();
  const EMAIL_ADDRESS = 'carloginocatapang@gmail.com';
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
      <OpenButton size={30} onClick={sidebarOpen} />
      <CSSTransition
        in={isOpen}
        timeout={100}
        classNames="fade"
        unmountOnExit
        nodeRef={nodeRef}
      >
        <SidebarMask onClick={sidebarClose} ref={nodeRef}>
          <Sidebar onClick={e => e.stopPropagation()}>
            <CloseButton onClick={sidebarClose}>
              <GrClose size={30} />
            </CloseButton>
            <h3>Links</h3>
            <nav>
              <ul>
                {navigationLinks.map(link => (
                  <li key={link.label} onClick={sidebarClose}>
                    <Link href={link.url}>
                      <a
                        className={
                          router.asPath == `${link.url}` ? 'active' : ''
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
            <h3>Social</h3>
            <SocialMedia />
            <h3>Contact me</h3>
            <div>
              <Link href={`mailto:${EMAIL_ADDRESS}`}>
                <a
                  target="_blank"
                  style={{cursor: 'pointer'}}
                  data-tip="Email me"
                  aria-label="Email Me"
                >
                  <CustomIcon
                    color="#ea4335"
                    icon={FaEnvelopeSquare}
                    hoverColor="red"
                    size={30}
                  />
                </a>
              </Link>
              <Link href={`https://m.me/codegino`}>
                <a
                  target="_blank"
                  style={{cursor: 'pointer'}}
                  data-tip="Send me a facebook message"
                  aria-label="Facebook Messenger"
                >
                  <CustomIcon
                    color="#3b5998"
                    icon={FaFacebookMessenger}
                    hoverColor="blue"
                    size={30}
                  />
                </a>
              </Link>
            </div>
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
  display: block;

  ${mediaQuery(700, 'display: none;')}
`;

const Sidebar = styled.div`
  height: 100vh;
  width: 55vw;
  position: absolute;
  top: 0;
  right: 0;
  background-color: var(--color-light-light);
  color: black;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: var(--padding-small);
  font-size: 1.3em;

  ${mediaQuery(400, `width: 45vw`)}

  > nav {
    > ul {
      align-items: center;
      display: flex;
      margin: 0;
      padding: 0;
      list-style: none;
      flex-direction: column;
      align-items: flex-start;

      > li {
        a {
          padding: 0 0.5rem;

          &.active {
            color: var(--color-primary-dark);
          }

          &:hover {
            color: var(--color-primary);
          }
        }

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

const OpenButton = styled(TiThMenu)`
  cursor: pointer;
`;

const CloseButton = styled.div`
  cursor: pointer;
  position: absolute;
  right: 5px;
  top: 5px;
`;
