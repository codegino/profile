import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Coffee() {
  return (
    <div className="relative w-full text-center flex justify-center mb-4">
      <Link href="https://www.buymeacoffee.com/codegino">
        <a target="_blank" aria-label="Buy me a coffee" rel="noopener nofollow">
          <span
            className="leading-3 flex h-16 w-96
            items-center justify-center p-9
            bg-red-500 text-white  relative
            rounded-2xl hover:shadow-md
          "
          >
            <Image
              src="/assets/bmc-btn-logo.svg"
              alt="Buy me a coffee"
              height={34}
              width={35}
              layout="fixed"
            />
            <p className="text-3xl ml-4">Buy me a coffee</p>
          </span>
        </a>
      </Link>
    </div>
  );
}

export default Coffee;
