import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {TopLeftShape} from '../extras/TopLeftShape';
import SmallScreenContent from './SmallScreenContent';
import WideScreenContentImpl from './WideScreenContent';

export default function Header() {
  const router = useRouter();

  return (
    <header className="h-20 relative bg-black flex items-center overflow-hidden py-0 px-2 text-white">
      <TopLeftShape />
      <div className="flex items-center min-w-max mr-6">
        <div className="w-12 h-12 rounded-full bg-white p-0.5 mr-0 text-center">
          <Link href="/">
            <a aria-label="My Logo">
              <Image
                priority
                src="/assets/logo.svg"
                height={26}
                width={26}
                alt="CG"
                title="CG"
              />
            </a>
          </Link>
        </div>

        <Link href="/">
          <a aria-label="Code Gino">
            <span
              className={clsx('underline-on-hover ml-4 text-4xl font-bold', {
                'border-b-2 border-primary-light': router.asPath === '/',
              })}
            >
              Code Gino
            </span>
          </a>
        </Link>
      </div>
      <WideScreenContentImpl />
      <SmallScreenContent />
    </header>
  );
}
