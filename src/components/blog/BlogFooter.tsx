import React from 'react';
import {DiscussionEmbed} from 'disqus-react';
import Link from 'next/link';
import {IBlogMetadata} from '../../models/blog';
import Coffee from '../Coffee';
import SubscribeButton from '../basic/Button';

const BlogFooter = ({blog}: {blog: IBlogMetadata}) => {
  return (
    <footer className="flex w-full m-auto flex-col text-center">
      <p className="m-6">
        <i>Get latest updates directly into your mailbox.</i>
      </p>
      <form action="https://sendfox.com/codegino">
        <SubscribeButton>Subscribe to my Newsletter</SubscribeButton>
      </form>

      <p className="my-4">
        <i>If you find this useful and you want to support me</i>
      </p>
      <Coffee />

      <p className="my-2">
        <i>Connect with me</i>
      </p>
      <Link href="https://twitter.com/code_gino">
        <a
          aria-label="Follow me on Twitter"
          target="_blank"
          className="mt-2"
          rel="noopener nofollow"
        >
          <span className="relative h-10  bg-blue-500 text-white py-2 px-6 rounded-3xl hover:bg-blue-600">
            Follow @code_gino
          </span>
        </a>
      </Link>
      <DiscussionEmbed
        shortname="carlogino"
        config={{
          url: `https://codegino.com/blog/${blog.slug}`,
          identifier: blog.slug,
          title: blog.title,
          language: 'en_US',
        }}
      />
    </footer>
  );
};

export default BlogFooter;
