import clsx from 'clsx';
import dynamic from 'next/dynamic';
import {useRouter} from 'next/router';
import NextLink from '../basic/NextLink';
import SocialMedia from '../social/SocialMedia';
import {navigationLinks} from './nav-links';

const DarkModeToggle = dynamic(() => import('../DarkModeToggle'), {
  ssr: false,
});

export default function WideScreenContentImpl() {
  const router = useRouter();

  return (
    <div className="hidden items-center justify-between w-full lg:flex">
      <nav>
        <ul className="flex items-center p-0 m-0">
          {navigationLinks.map(link => (
            <li
              key={link.label}
              className="underline-on-hover text-white mr-3 last:mr-0 "
            >
              <NextLink
                href={link.url}
                className={clsx('hover:text-primary-600', {
                  'text-primary-600 border-b-2 border-b-primary-600':
                    router.asPath.includes(link.url),
                })}
                aria-label={link.label}
              >
                <span className="text-lg">{link.label}</span>
              </NextLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center pr-3">
        <SocialMedia />
        <div className="h-full ml-3 min-w-[2.2rem]">
          <DarkModeToggle />
        </div>
      </div>
    </div>
  );
}
