import Image from 'next/image';
import Link from './basic/NextLink';

function Coffee() {
  return (
    <div className="relative w-full text-center flex justify-center mb-4">
      <Link
        href="https://www.buymeacoffee.com/codegino"
        target="_blank"
        aria-label="Buy me a coffee"
        rel="noreferrer"
      >
        <span
          className="leading-3 flex h-12 w-[16rem]
            items-center justify-center p-3
            bg-orange-700 text-white relative
            rounded-xl hover:shadow-md hover:shadow-dark
          "
        >
          <Image
            src="/assets/bmc-btn-logo.svg"
            alt="Buy me a coffee"
            title="Buy me a coffee"
            height={34}
            width={35}
            layout="fixed"
          />
          <p className="text-xl ml-3">Buy me a coffee</p>
        </span>
      </Link>
    </div>
  );
}

export default Coffee;
