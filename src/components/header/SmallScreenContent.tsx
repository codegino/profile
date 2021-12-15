import React, {useState, useRef} from 'react';
import {AiOutlineClose} from '@react-icons/all-files/ai/AiOutlineClose';
import {AiOutlineMenu} from '@react-icons/all-files/ai/AiOutlineMenu';
import {FaEnvelopeSquare} from '@react-icons/all-files/fa/FaEnvelopeSquare';
import {FaFacebookMessenger} from '@react-icons/all-files/fa/FaFacebookMessenger';
import clsx from 'clsx';
import dynamic from 'next/dynamic';
import {useRouter} from 'next/router';
import {CSSTransition} from 'react-transition-group';
import useDarkMode from 'use-dark-mode';
import NextLink from '../basic/NextLink';
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
    <div className="relative w-full text-right block lg:hidden z-20">
      <AiOutlineMenu
        size={30}
        onClick={sidebarOpen}
        className="cursor-pointer"
      />
      <CSSTransition
        in={isOpen}
        timeout={100}
        classNames="fade"
        unmountOnExit
        nodeRef={nodeRef}
      >
        <div
          className="sidebar"
          onClick={sidebarClose}
          ref={nodeRef}
          role="presentation"
        >
          <div
            onClick={e => e.stopPropagation()}
            role="presentation"
            className="
              w-[50vw] h-screen absolute bg-light top-0 right-0 text-dark flex flex-col
              items-start p-4 text-2xl leading-10 z-20
            "
          >
            <div
              onClick={sidebarClose}
              role="presentation"
              className="cursor-pointer absolute top-2 right-2"
            >
              <AiOutlineClose size={30} className="fill-primary-dark" />
            </div>
            <h3 className="my-4">Links</h3>

            <nav>
              <ul className="flex items-start flex-col">
                {navigationLinks.map(link => (
                  <li
                    key={link.label}
                    onClick={sidebarClose}
                    role="presentation"
                  >
                    <NextLink
                      href={link.url}
                      className={clsx(
                        'px-2 text-3xl hover:text-dark hover:underline',
                        {
                          'text-primary-dark underline': router.asPath.includes(
                            link.url,
                          ),
                        },
                      )}
                      aria-label={link.label}
                    >
                      {link.label}
                    </NextLink>
                  </li>
                ))}
              </ul>
            </nav>
            <h3 className="my-4">Social</h3>
            <SocialMedia />
            <h3 className="my-4">Contact me</h3>
            <div>
              <NextLink
                href={`mailto:${EMAIL_ADDRESS}`}
                target="_blank"
                title="Email me"
                aria-label="Email Me"
                rel="noopener noreferrer nofollow"
              >
                <CustomIcon
                  color="#ea4335"
                  title="Email Me"
                  icon={FaEnvelopeSquare}
                  hoverColor="red"
                  size={30}
                />
              </NextLink>
              <NextLink
                href={`https://m.me/codegino`}
                target="_blank"
                title="Send me a facebook message"
                aria-label="Facebook Messenger"
              >
                <CustomIcon
                  color="#3b5998"
                  icon={FaFacebookMessenger}
                  title="Facebook Messenger"
                  hoverColor="blue"
                  size={30}
                />
              </NextLink>
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
