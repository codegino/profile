'use client';

import {useMemo, useState} from 'react';
import type {FunctionComponent} from 'react';
import clsx from 'clsx';
import type {IBlogMetadata} from '../../models/mdxFiles';
import {useTranslation} from '../../app/i18n/client';
import {locales} from '../../app/i18n/locales.enum';

const BlogsFilter: FunctionComponent<{
  blogs: IBlogMetadata[];
  lang: locales;
  onChange: (slugs: string[]) => void;
}> = ({blogs, lang, onChange}) => {
  const {t} = useTranslation(lang, 'blog');
  const tags = useMemo(() => {
    const generatedTags = blogs.reduce((acc: Set<string>, blog) => {
      blog.tags.forEach(tag => {
        if (!acc.has(tag)) {
          acc.add(tag);
        }
      });

      return acc;
    }, new Set<string>());

    return Array.from(generatedTags);
  }, [blogs]);

  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());

  const handleTagClick = (tag: string) => {
    let newTags = new Set(selectedTags);

    if (selectedTags.has(tag)) {
      newTags.delete(tag);
    } else {
      newTags.add(tag);
    }

    const newArrayTags = Array.from(newTags);

    setSelectedTags(newTags);

    if (newTags.size === 0) {
      onChange(blogs.map(blog => blog.slug));
    } else {
      const filtered = blogs
        .filter(blog => {
          let isMatch = true;

          for (let tag of newArrayTags) {
            if (!blog.tags.includes(tag)) {
              isMatch = false;
              break;
            }
          }

          return isMatch;
        })
        .map(blog => blog.slug);

      onChange(filtered);
    }
  };

  return (
    <section className="flex flex-col items-center mb-8 max-w-4xl">
      <h3 className="mb-4">{t('filterByTags')}</h3>
      <div className="flex gap-2 flex-wrap justify-center mb-4">
        {tags.map((tag, i) => (
          <div
            className={clsx(
              'inline-block bg-lightest py-2 px-4 rounded-xl shadow-md mr-2 last:mr-0 cursor-pointer whitespace-nowrap',
              {
                'text-primary-100': selectedTags.has(tag),
                'bg-primary-900': selectedTags.has(tag),
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
