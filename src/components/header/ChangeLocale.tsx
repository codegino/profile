import type {FC} from 'react';
import clsx from 'clsx';
import {useRouter, useParams, usePathname} from 'next/navigation';

export const ChangeLocale: FC<{className?: string}> = ({className}) => {
  const router = useRouter();
  const params = useParams();
  const path = usePathname();

  const handleChangeLocale = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;

    // router.push(path, {
    //   // locale: value,
    // });
    router.push(`${path}`);
  };

  return (
    <select
      onChange={handleChangeLocale}
      value={params?.locale}
      className={clsx('bg-transparent text-4xl', className)}
    >
      <option value={'en'} title="English" aria-label="English">
        🇺🇸
      </option>

      {!path?.includes('/blog') && (
        <option value={'sv'} title="Swedish" aria-label="Swedish">
          🇸🇪
        </option>
      )}
    </select>
  );
};
