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

const Footer = styled.footer`
  margin: auto;
  width: 100%;
  padding-top: var(--padding-big);
`;

export default BlogFooter;
