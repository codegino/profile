import React from 'react';
import styled from '@emotion/styled';
import {DiscussionEmbed} from 'disqus-react';
import Link from 'next/link';
import {IBlogMetadata} from '../../models/blog';
import Coffee from '../Coffee';
import SubscribeButton from '../basic/Button';

const BlogFooter = ({blog}: {blog: IBlogMetadata}) => {
  return (
    <Footer>
      <p style={{margin: '2rem 0'}}>
        <i>Get latest updates directly into your mailbox.</i>
      </p>
      <form action="https://sendfox.com/codegino">
        <SubscribeButton>Subscribe to my Newsletter</SubscribeButton>
      </form>

      <p style={{margin: '2rem 0'}}>
        <i>If you find this useful and you want to support me</i>
      </p>
      <Coffee />

      <p style={{margin: '1rem 0'}}>
        <i>Connect with me</i>
      </p>
      <Link href="https://twitter.com/code_gino">
        <a
          aria-label="Follow me on Twitter"
          target="_blank"
          style={{marginTop: '1rem'}}
        >
          <FollowButton>Follow @code_gino</FollowButton>
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
    </Footer>
  );
};

const FollowButton = styled.span`
  position: relative;
  height: 2.5rem;
  box-sizing: border-box;
  padding: var(--spacing-very-small) var(--spacing-small);
  background-color: #1d9bf0;
  color: #ffffff;
  border-radius: 9999px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #0c7abf;
  }
`;

const Footer = styled.footer`
  text-align: center;
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
`;

export default BlogFooter;
