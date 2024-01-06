'use client';

import clsx from 'clsx';
import {type FunctionComponent} from 'react';
import {useTranslation} from '../../app/i18n/client';

const BlogsFilter: FunctionComponent<{
  tags: string[];
  selectedTags: string[];
  handleTagClick: (tag: string) => void;
}> = ({tags, handleTagClick, selectedTags}) => {
  const {t} = useTranslation('blog');

  return (
    <section className="flex flex-col items-center mb-8 max-w-4xl">
      <h3 className="mb-4 text-neutral-700 dark:text-neutral-200">
        {t('filterByTags')}
      </h3>
      <div className="flex gap-2 flex-wrap justify-center mb-4">
        {tags.map((tag, i) => (
          <div
            className={clsx(
              'inline-block bg-white dark:bg-black py-1 px-3 rounded-xl shadow-md mr-2 last:mr-0 cursor-pointer whitespace-nowrap',
              {
                'text-primary-600 bg-primary-800': selectedTags.includes(tag),
              },
            )}
            onClick={() => handleTagClick(tag)}
            role="presentation"
            key={i}
          >
            {tag}
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogsFilter;
