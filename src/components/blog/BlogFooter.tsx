import React from 'react';
import styled from '@emotion/styled';
import {DiscussionEmbed} from 'disqus-react';
import Link from 'next/link';
import type {IBlogMetadata} from '../../models/blog';
import Coffee from '../Coffee';

type Props = {
  blog: IBlogMetadata;
};

const BlogFooter = ({blog}: Props) => {
  return (
    <Footer>
      <p style={{margin: '2rem 0'}}>
        <i>If you find this useful and you want to support me</i>
      </p>
      <Coffee />
      <Link href="https://twitter.com/code_gino">
        <a aria-label="Follow me on Twitter" target="_blank">
          <FollowButton>Follow @code_gino</FollowButton>
        </a>
      </Link>

      <Separation />
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

const Separation = styled.hr`
  width: 100%;
  margin-top: var(--spacing-medium);
`;

const Footer = styled.footer`
  text-align: center;
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
`;

export default BlogFooter;
