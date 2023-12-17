'use client';

import {switchLocaleAction} from '@/app/actions/switch-locale';
import {useLocale} from '@/app/hooks/locale-provider';
import clsx from 'clsx';
import {useRouter} from 'next/navigation';
import type {FC} from 'react';

export const ChangeLocale: FC<{className?: string}> = ({className}) => {
  const locale = useLocale();
  const router = useRouter();

  const handleChangeLocale = async (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    await switchLocaleAction(event.target.value);
  };

  return (
    <select
      onChange={handleChangeLocale}
      value={locale}
      className={clsx(
        'bg-transparent text-2xl sm:text-4xl text-white',
        className,
      )}
    >
      <option value={'en'} title="English" aria-label="English">
        🇺🇸
      </option>
      <option value={'sv'} title="Swedish" aria-label="Swedish">
        🇸🇪
      </option>
    </select>
  );
};
