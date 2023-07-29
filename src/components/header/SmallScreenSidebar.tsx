import {useRef} from 'react';
import type {MouseEvent, FunctionComponent} from 'react';
import {AiOutlineClose} from '@react-icons/all-files/ai/AiOutlineClose';
import {FaEnvelopeSquare} from '@react-icons/all-files/fa/FaEnvelopeSquare';
import {FaFacebookMessenger} from '@react-icons/all-files/fa/FaFacebookMessenger';
import clsx from 'clsx';
import {useParams, usePathname} from 'next/navigation';
import {CSSTransition} from 'react-transition-group';
import DarkModeToggle from '../DarkModeToggle';
import NextLink from '../basic/NextLink';
import RoundButton from '../basic/RoundButton';
import CustomIcon from '../icon/CustomIcon';
import SocialMedia from '../social/SocialMedia';
import {ChangeLocale} from './ChangeLocale';
import {useHeader} from './header-context';
import {navigationLinks} from './nav-links';
import {useTranslation} from '../../app/i18n/client';
import BuyMeACoffeeIcon from '../social/BuyMeACoffeeIcon';
import {locales} from '../../app/i18n/locales.enum';

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

  const locale = useParams()?.lang as locales;
  const {t} = useTranslation(locale, 'common');

  return (
    <>
      {isSidebarVisible && (
        <RoundButton
          className="fixed top-3 left-[17px] z-[100] animate-spin-fast"
          onClick={hideSidebar}
        >
          <AiOutlineClose
            size={32}
            className="fill-gray-900 select-none outline-none"
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
              'w-[20rem] h-screen absolute bg-light top-0 left-0 text-dark flex flex-col',
              'items-start p-4 text-2xl leading-10 shadow-dark shadow-md cursor-default',
            )}
          >
            <div className={clsx('flex items-center min-w-max relative pb-4')}>
              <span className="ml-14 text-2xl font-bold">Code Gino</span>
            </div>
            <section className="sidebar__content overflow-y-auto w-full relative h-full flex flex-col justify-between">
              <div>
                <h3 className="my-4 text-2xl">Links</h3>

                <nav>
                  <ul className="flex items-start flex-col">
                    {sidebarLinks.map(link => (
                      <li
                        key={link.label}
                        onClick={sidebarClose}
                        role="presentation"
                      >
                        <NextLink
                          href={`/${locale}/${link.url}`}
                          className={clsx(
                            'px-2 text-xl hover:text-dark hover:underline font-semibold',
                            {
                              'text-primary-dark underline':
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

                <h3 className="my-4 text-2xl">Social</h3>
                <div className="flex items-center">
                  <SocialMedia />
                  <BuyMeACoffeeIcon className="ml-4" />
                </div>
                <h3 className="my-4 text-2xl">Contact me</h3>
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

                <section className="text-left mt-12">
                  <div className="flex items-center">
                    <DarkModeToggle className="outline-2 outline-white rounded-3xl" />
                    <ChangeLocale className="text-5xl ml-3" />
                  </div>
                </section>
              </div>

              <div className="flex flex-col items-center min-h-[4rem] justify-end">
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
