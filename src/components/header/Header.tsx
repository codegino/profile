import {FunctionComponent, useState} from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import {useRouter} from 'next/router';
import {InView} from 'react-intersection-observer';
import NextLink from '../basic/NextLink';
import {TopLeftShape} from '../extras/TopLeftShape';
import {SmallScreenContent} from './SmallScreenContent';
import WideScreenContentImpl from './WideScreenContent';
import {useScrollDirection} from './use-scroll-direction';

const Logo: FunctionComponent<{className?: string}> = () => {
  const router = useRouter();

  return (
    <div className="flex items-center min-w-max ml-2 mr-6">
      <NextLink
        href="/"
        aria-label="My Logo"
        className="bg-white text-black rounded-full"
      >
        <div className="w-8 h-8 rounded-full bg-white p-0.5 mr-0 text-center">
          <Image
            priority
            src="/assets/logo.svg"
            height={27}
            width={27}
            alt="CG"
            title="CG"
            aria-label="CG Logo"
            layout="fixed"
          />
        </div>
      </NextLink>

      <NextLink href="/" aria-label="Code Gino">
        <span
          className={clsx('underline-on-hover ml-2 text-2xl font-bold', {
            'text-white border-b-2 border-b-primary-600': router.asPath === '/',
          })}
        >
          Code Gino
        </span>
      </NextLink>
    </div>
  );
};

export default function Header() {
  const [inView, setInView] = useState(false);
  const {direction} = useScrollDirection();

  return (
    <>
      <InView onChange={setInView}>
        <header className="h-14 relative bg-black flex items-center overflow-x-hidden py-0 px-2 text-white">
          <TopLeftShape />
          <Logo />
          <WideScreenContentImpl />
          <SmallScreenContent className="lg:hidden pr-3" />
        </header>
      </InView>
      {!inView && direction !== 'down' && <SmallScreenContent floating />}
    </>
  );
}
