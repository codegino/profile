import type {FunctionComponent} from 'react';
import {FaFacebookSquare} from '@react-icons/all-files/fa/FaFacebookSquare';
import {FaLinkedin} from '@react-icons/all-files/fa/FaLinkedin';
import {FaPinterest} from '@react-icons/all-files/fa/FaPinterest';
import {FaShareAlt} from '@react-icons/all-files/fa/FaShareAlt';
import {FaTwitterSquare} from '@react-icons/all-files/fa/FaTwitterSquare';
import clsx from 'clsx';
import {IBlogMetadata} from '../../models/mdxFiles';

const socialMedia = [
  {
    name: 'Twitter',
    href: (blog: IBlogMetadata) =>
      `https://twitter.com/share?url=https://carlogino.com/blog/${blog.slug}&text=${blog.title}`,
    color: '#1da1f2',
    icon: FaTwitterSquare,
  },
  {
    name: 'Facebook',
    href: (blog: IBlogMetadata) =>
      `https://www.facebook.com/sharer/sharer.php?u=https://carlogino.com/blog/${blog.slug}`,
    color: '#1877f2',
    icon: FaFacebookSquare,
  },
  {
    name: 'LinkedIn',
    href: (blog: IBlogMetadata) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=https://carlogino.com/blog/${blog.slug}`,
    color: '#0a66c2',
    icon: FaLinkedin,
  },
  {
    name: 'Pinterest',
    href: (blog: IBlogMetadata) =>
      `http://pinterest.com/pin/create/button/?url=https://carlogino.com/blog/${blog.slug}&media=${blog.bannerId}&description=${blog.description}&title=${blog.title}`,
    color: '#bd081c',
    icon: FaPinterest,
  },
];

const ShareToSocialMedia: FunctionComponent<{blog: IBlogMetadata}> = ({
  blog,
}) => {
  return (
    <section>
      <h3 className="mb-6">
        <FaShareAlt /> Share now
      </h3>
      <div className="flex flex-wrap justify-center gap-x-2 gap-y-3">
        {socialMedia.map(sm => (
          <a
            href={sm.href(blog)}
            key={sm.name}
            target="_blank"
            rel="noreferrer"
            title={`Share on ${sm.name}`}
            aria-label={`Share on ${sm.name}`}
            className={clsx(
              'hover:shadow-dark relative h-10 rounded-3xl px-4 py-2 text-white hover:shadow-sm',
              'text-lg',
              'flex items-center',
            )}
            style={{
              backgroundColor: sm.color,
            }}
          >
            <FaShareAlt className="mr-2" />
            <sm.icon size={23} className="mr-1" />
            {sm.name}
          </a>
        ))}
      </div>
    </section>
  );
};

export default ShareToSocialMedia;
