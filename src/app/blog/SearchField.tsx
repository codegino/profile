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
      className="md:pl-8 bg-transparent focus:outline-none w-full ring-1 ring-neutral-500 dark:ring-neutral-200 rounded-md"
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
    <div className="relative flex items-center w-96">
      <SearchIcon className="absolute w-4 h-4 ml-2  text-neutral-600 dark:text-neutral-200" />
      <DebouncedInput
        placeholder="Filter by title or description"
        value={searchFilter}
        onChange={handleGlobalFilterChange}
      />
      {searchFilter && (
        <div
          className="absolute w-4 h-4 mr-2 right-0 flex"
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
