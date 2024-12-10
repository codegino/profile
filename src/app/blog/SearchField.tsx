'use client';

import {parseAsString, useQueryState} from 'next-usequerystate';
import {useEffect, useState} from 'react';
import SearchIcon from '../assets/icons/search-icon';
import CloseIcon from '../assets/icons/close-icon';

function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 200,
  ...props
}: {
  value: string | null;
  onChange: (value: string | null) => void;
  debounce?: number;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (value !== initialValue) {
      timeout = setTimeout(() => {
        if (value === '') {
          onChange(null);
          return;
        }
        onChange(value);
      }, debounce);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [debounce, onChange, value, initialValue]);

  return (
    <input
      {...props}
      className="w-full rounded-md bg-transparent ring-1 ring-neutral-500 focus:outline-none dark:ring-neutral-200 md:pl-8"
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );
}

export default function SearchField() {
  const [searchFilter, setSearchFilter] = useQueryState(
    'search',
    parseAsString
      .withOptions({
        shallow: false,
        scroll: false,
        history: 'replace',
      })
      .withDefault(''),
  );

  const handleGlobalFilterChange = (value: string | null) => {
    if (!value) {
      setSearchFilter(null);
    } else {
      setSearchFilter(value);
    }
  };

  return (
    <div className="relative flex w-96 items-center">
      <SearchIcon className="absolute ml-2 size-4 text-neutral-600  dark:text-neutral-200" />
      <DebouncedInput
        placeholder="Filter by title or description"
        value={searchFilter}
        onChange={handleGlobalFilterChange}
      />
      {searchFilter && (
        <div
          className="absolute right-0 mr-2 flex size-4"
          onClick={() => {
            setSearchFilter(null);
          }}
          onKeyDown={e => e.key === ' ' && setSearchFilter(null)}
          tabIndex={0}
          role="button"
        >
          <CloseIcon className="text-red-600 dark:text-neutral-200 " />
        </div>
      )}
    </div>
  );
}
