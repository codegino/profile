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
      {locales.map(locale => (
        <option
          value={locale.value}
          key={locale.value}
          title={locale.alt}
          aria-label={locale.alt}
        >
          {locale.label}
        </option>
      ))}
    </select>
  );
};

const locales = [
  {
    value: 'en',
    label: '🇺🇸',
    alt: 'English',
  },
  {
    value: 'sv',
    label: '🇸🇪',
    alt: 'Swedish',
  },
];
