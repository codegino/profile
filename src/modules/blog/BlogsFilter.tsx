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
    <section className="mb-8 flex max-w-4xl flex-col items-center">
      <h3 className="mb-4 text-neutral-700 dark:text-neutral-200">
        {t('filterByTags')}
      </h3>
      <div className="mb-4 flex flex-wrap justify-center gap-2">
        {tags.map((tag, i) => (
          <div
            className={clsx(
              'mr-2 inline-block cursor-pointer whitespace-nowrap rounded-xl bg-white px-3 py-1 shadow-md last:mr-0 dark:bg-black',
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
