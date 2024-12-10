import {SiBuymeacoffee} from '@react-icons/all-files/si/SiBuymeacoffee';
import Link from './basic/NextLink';

function Coffee() {
  return (
    <div className="relative flex w-full justify-center text-center">
      <Link
        href="https://l.carlogino.com/bmac"
        target="_blank"
        aria-label="Buy me a coffee"
        rel="noreferrer"
      >
        <span
          className="relative flex h-12
            w-64 items-center justify-center
            rounded-xl bg-orange-700 p-3
            leading-3 text-neutral-800 hover:shadow-md
          "
        >
          <SiBuymeacoffee size={30} fill="white" />
          <p className="ml-3 text-xl text-neutral-50">Buy me a coffee</p>
        </span>
      </Link>
    </div>
  );
}

export default Coffee;
