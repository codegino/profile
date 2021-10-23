import React from 'react';
import styled from '@emotion/styled';
import {DiscussionEmbed} from 'disqus-react';
import {BlogMetadata} from '../../models/blog';

type Props = {
  blog: BlogMetadata;
};

const BlogFooter = ({blog}: Props) => {
  return (
    <Footer>
      <Separation />
      <DiscussionEmbed
        shortname="carlogino"
        config={{
          url: `https://carlogino.cc/blog/${blog.slug}`,
          identifier: blog.slug,
          title: blog.title,
          language: 'en_US',
        }}
      />
    </Footer>
  );
};

const Separation = styled.hr`
  width: 100%;
  margin-top: var(--margin-medium);
`;

const Footer = styled.footer`
  margin: auto;
  width: 100%;
`;

export default BlogFooter;
