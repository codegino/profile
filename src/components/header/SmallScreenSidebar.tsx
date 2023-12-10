import {AiOutlineClose} from '@react-icons/all-files/ai/AiOutlineClose';
import {FaEnvelopeSquare} from '@react-icons/all-files/fa/FaEnvelopeSquare';
import {FaFacebookMessenger} from '@react-icons/all-files/fa/FaFacebookMessenger';
import clsx from 'clsx';
import {usePathname} from 'next/navigation';
import type {FunctionComponent, MouseEvent} from 'react';
import {useRef} from 'react';
import {CSSTransition} from 'react-transition-group';
import {useTranslation} from '../../app/i18n/client';
import DarkModeToggle from '../DarkModeToggle';
import NextLink from '../basic/NextLink';
import RoundButton from '../basic/RoundButton';
import CustomIcon from '../icon/CustomIcon';
import BuyMeACoffeeIcon from '../social/BuyMeACoffeeIcon';
import SocialMedia from '../social/SocialMedia';
import {ChangeLocale} from './ChangeLocale';
import {useHeader} from './header-context';
import {navigationLinks} from './nav-links';

const sidebarLinks = [
  {
    url: '/',
    label: 'home',
  },
  ...navigationLinks,
];

const SmallScreenSidebar: FunctionComponent = () => {
  const EMAIL_ADDRESS = 'carloginocatapang@gmail.com';
  const nodeRef = useRef(null);
  const {hideSidebar, isSidebarVisible} = useHeader();
  const path = usePathname() as string;

  const sidebarClose = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    hideSidebar();
  };

  const {t} = useTranslation('common');

  return (
    <>
      {isSidebarVisible && (
        <RoundButton
          className="fixed top-3 left-[17px] z-[100] animate-spin-fast"
          onClick={hideSidebar}
        >
          <AiOutlineClose
            size={32}
            className="fill-neutral-900 select-none outline-none"
          />
        </RoundButton>
      )}
      <CSSTransition
        in={isSidebarVisible}
        timeout={100}
        classNames="fade"
        unmountOnExit
        nodeRef={nodeRef}
      >
        <div
          className="sidebar cursor-pointer"
          onClick={sidebarClose}
          ref={nodeRef}
          role="presentation"
        >
          <div
            onClick={e => e.stopPropagation()}
            role="presentation"
            className={clsx(
              'w-[20rem] h-screen absolute bg-neutral-50 dark:bg-neutral-900 top-0 left-0 flex flex-col',
              'items-start p-4 text-2xl leading-10 shadow-neutral-800 shadow-md cursor-default',
            )}
          >
            <div className={clsx('flex items-center min-w-max relative pb-4')}>
              <span className="ml-14 text-2xl font-bold">Code Gino</span>
            </div>
            <section className="sidebar__content overflow-y-auto w-full relative h-full flex flex-col justify-between">
              <div>
                <h3 className="mt-3 mb-0 text-xl">Links</h3>

                <nav>
                  <ul className="flex items-start flex-col">
                    {sidebarLinks.map(link => (
                      <li
                        key={link.label}
                        onClick={sidebarClose}
                        role="presentation"
                      >
                        <NextLink
                          href={link.url}
                          className={clsx(
                            'px-2 text-lg hover:text-neutral-900 hover:text-primary-600 font-semibold',
                            {
                              'text-primary-900 dark:text-primary-300':
                                (link.url === '/' && path === '/') ||
                                (link.url !== '/' && path.includes(link.url)),
                            },
                          )}
                          aria-label={t(link.label)}
                        >
                          {t(link.label)}
                        </NextLink>
                      </li>
                    ))}
                  </ul>
                </nav>

                <h3 className="mt-3 mb-0 text-xl">Social</h3>
                <div className="flex items-center [&_.icon]:text-neutral-900 [&_.icon]:dark:text-neutral-50">
                  <SocialMedia />
                  <BuyMeACoffeeIcon className="ml-4 [&_.icon]:fill-orange-700 [&_.icon]:hover:fill-orange-600" />
                </div>
                <h3 className="mt-3 mb-0 text-xl">Contact me</h3>
                <div>
                  <NextLink
                    href={`mailto:${EMAIL_ADDRESS}`}
                    target="_blank"
                    title="Email me"
                    aria-label="Email Me"
                    rel="noreferrer"
                    className="mr-2"
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
                  <h3 className="mt-3 mb-0 text-xl">Settings</h3>

                  <div className="flex items-center">
                    <DarkModeToggle />
                    <ChangeLocale className="text-5xl ml-3" />
                  </div>
                </section>
              </div>

              <div className="flex flex-col">
                <p>All rights reserved</p>
                <p>© Carlo Gino Catapang {new Date().getFullYear()}</p>
              </div>
            </section>
          </div>
          <style jsx>{`
            .sidebar {
              position: fixed;
              top: 0;
              left: 0;
              z-index: 20;
              height: 100vh;
              width: 200vw;
              transition: transform 0.2s;
            }

            .sidebar__content {
              -ms-overflow-style: none;
              scrollbar-width: none;
              overflow-y: scroll;
            }

            .sidebar__content::-webkit-scrollbar {
              display: none;
            }

            // enter from
            .sidebar.fade-enter {
              transform: translateX(-100%);
            }

            // enter to
            .sidebar.fade-enter-active {
              transform: translateX(0%);
            }

            // exit from
            .sidebar.fade-exit {
              transform: translateX(0%);
              transition: transform 2s;
            }

            // exit to
            .sidebar.fade-exit-active {
              transform: translateX(-100%);
              transition: transform 2s;
            }
          `}</style>
        </div>
      </CSSTransition>
    </>
  );
};

export default SmallScreenSidebar;
