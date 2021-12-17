import clsx from 'clsx';
import Image from 'next/image';
import {useRouter} from 'next/router';
import NextLink from '../basic/NextLink';
import {TopLeftShape} from '../extras/TopLeftShape';
import SmallScreenContent from './SmallScreenContent';
import WideScreenContentImpl from './WideScreenContent';

export default function Header() {
  const router = useRouter();

  return (
    <header className="h-14 relative bg-black flex items-center overflow-hidden py-0 px-2 text-white">
      <TopLeftShape />
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
              'text-white border-b-2 border-b-primary-600':
                router.asPath === '/',
            })}
          >
            Code Gino
          </span>
        </NextLink>
      </div>
      <WideScreenContentImpl />
      <SmallScreenContent />
    </header>
  );
}
