import type {FC} from 'react';
import clsx from 'clsx';
import {useRouter} from 'next/router';

export const ChangeLocale: FC<{className?: string}> = ({className}) => {
  const router = useRouter();

  const handleChangeLocale = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;

    router.push(router.route, router.asPath, {
      locale: value,
    });
  };

  return (
    <select
      onChange={handleChangeLocale}
      value={router.locale}
      className={clsx('bg-transparent text-4xl', className)}
    >
      <option value={'en'} title="English" aria-label="English">
        🇺🇸
      </option>

      {!router.asPath.includes('/blog') && (
        <option value={'sv'} title="Swedish" aria-label="Swedish">
          🇸🇪
        </option>
      )}
    </select>
  );
};
