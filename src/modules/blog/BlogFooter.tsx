'use client';

import {FaEnvelopeOpenText} from '@react-icons/all-files/fa/FaEnvelopeOpenText';
import {FaTwitter} from '@react-icons/all-files/fa/FaTwitter';
import Coffee from '../../components/Coffee';
import SubscribeButton from '../../components/basic/Button';
import NextLink from '../../components/basic/NextLink';
import {IBlogMetadata} from '../../models/mdxFiles';
import ShareToSocialMedia from './ShareToSocialMedia';

const BlogFooter = ({blog}: {blog: IBlogMetadata}) => {
  return (
    <footer className="flex w-full m-auto flex-col text-center">
      <ShareToSocialMedia blog={blog} />

      <p className="my-4 text-neutral-700 dark:text-neutral-300">
        If you find this useful and you want to support me
      </p>
      <Coffee />

      <p className="my-4 text-neutral-700 dark:text-neutral-300">
        Get latest updates directly into your mailbox.
      </p>
      <form action={`/#subscribe`} className="flex justify-center">
        <SubscribeButton className="px-5 bg-primary-900 flex items-center font-semibold">
          <FaEnvelopeOpenText size={25} className="text-white mr-2" />
          <span className="text-white">Subscribe to my Newsletter</span>
        </SubscribeButton>
      </form>

      <p className="mt-4 mb-2 text-neutral-700 dark:text-neutral-300">
        <i>Connect with me</i>
      </p>
      <NextLink
        href="https://twitter.com/codegino"
        aria-label="Follow me on Twitter"
        target="_blank"
        className="mt-2"
        rel="noreferrer"
      >
        <span className="relative h-10 bg-[#1da1f2] text-white py-2 px-6 rounded-3xl hover:shadow-sm hover:shadow-neutral-800">
          <FaTwitter /> Follow @codegino
        </span>
      </NextLink>
    </footer>
  );
};

export default BlogFooter;
