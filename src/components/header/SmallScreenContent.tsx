import React, {useState, useRef} from 'react';
import {AiOutlineClose} from '@react-icons/all-files/ai/AiOutlineClose';
import {FaEnvelopeSquare} from '@react-icons/all-files/fa/FaEnvelopeSquare';
import {FaFacebookMessenger} from '@react-icons/all-files/fa/FaFacebookMessenger';
import {TiThMenu} from '@react-icons/all-files/ti/TiThMenu';
import clsx from 'clsx';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {CSSTransition} from 'react-transition-group';
import useDarkMode from 'use-dark-mode';
import {mediaQuery} from '../../utils/media-query';
import CustomIcon from '../icon/CustomIcon';
import SocialMedia from '../social/SocialMedia';
import {navigationLinks} from './nav-links';

const DarkModeToggle = dynamic(() => import('react-dark-mode-toggle'), {
  ssr: false,
});

export default function SmallScreenContent() {
  const router = useRouter();
  const EMAIL_ADDRESS = 'carloginocatapang@gmail.com';
  const [isOpen, setIsOpen] = useState(false);
  const nodeRef = useRef(null);
  const {value: isDarkMode, toggle} = useDarkMode();

  const sidebarOpen = () => {
    setIsOpen(true);
  };

  const sidebarClose = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <div className="relative w-full text-right block md:hidden z-20">
      <TiThMenu size={30} onClick={sidebarOpen} className="cursor-pointer" />
      <CSSTransition
        in={isOpen}
        timeout={100}
        classNames="fade"
        unmountOnExit
        nodeRef={nodeRef}
      >
        <div className="sidebar" onClick={sidebarClose} ref={nodeRef}>
          <div
            onClick={e => e.stopPropagation()}
            className="
              w-half-screen h-screen absolute bg-light top-0 right-0 text-dark flex flex-col
              items-start p-4 text-2xl leading-10 z-20
            "
          >
            <div
              onClick={sidebarClose}
              className="cursor-pointer absolute top-2 right-2"
            >
              <AiOutlineClose size={30} className="fill-primary-dark" />
            </div>
            <h3 className="my-4">Links</h3>

            <nav>
              <ul className="flex items-start flex-col">
                {navigationLinks.map(link => (
                  <li key={link.label} onClick={sidebarClose}>
                    <Link href={link.url}>
                      <a
                        className={clsx(
                          'px-2 text-3xl hover:text-dark hover:underline',
                          {
                            'text-primary-dark underline':
                              router.asPath.includes(link.url),
                          },
                        )}
                        aria-label={link.label}
                      >
                        {link.label}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <h3 className="my-4">Social</h3>
            <SocialMedia />
            <h3 className="my-4">Contact me</h3>
            <div>
              <Link href={`mailto:${EMAIL_ADDRESS}`}>
                <a
                  target="_blank"
                  title="Email me"
                  aria-label="Email Me"
                  rel="noopener nofollow"
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
                  title="Send me a facebook message"
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

            <section className="text-left">
              <h3 className="my-4">Toggle Theme</h3>
              <DarkModeToggle
                onChange={toggle}
                checked={isDarkMode}
                size={70}
                className="outline-2 outline-white rounded-3xl"
              />
            </section>
          </div>
          <style jsx>{`
            // enter from
            .sidebar.fade-enter {
              transform: translateX(100%);
            }

            // enter to
            .sidebar.fade-enter-active {
              transform: translateX(0%);
            }

            // exit from
            .sidebar.fade-exit {
              transform: translateX(0%);
            }

            // exit to
            .sidebar.fade-exit-active {
              transform: translateX(100%);
            }
          `}</style>
          `
        </div>
      </CSSTransition>
    </div>
  );
}
