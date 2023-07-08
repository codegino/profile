import type {FC} from 'react';
import clsx from 'clsx';
import {useRouter, useParams, useSelectedLayoutSegments} from 'next/navigation';

export const ChangeLocale: FC<{className?: string}> = ({className}) => {
  const router = useRouter();
  const params = useParams();
  const urlSegments = useSelectedLayoutSegments();

  const handleChangeLocale = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;

    const newPath = `/${value}/${urlSegments.join('/')}`;

    router.push(newPath);
  };

  return (
    <select
      onChange={handleChangeLocale}
      value={params?.lng}
      className={clsx('bg-transparent text-4xl', className)}
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
