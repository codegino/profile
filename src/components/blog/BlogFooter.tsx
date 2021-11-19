import React from 'react';
import styled from '@emotion/styled';
import {DiscussionEmbed} from 'disqus-react';
import {IBlogMetadata} from '../../models/blog';

type Props = {
  blog: IBlogMetadata;
};

const BlogFooter = ({blog}: Props) => {
  return (
    <Footer>
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

const Separation = styled.hr`
  width: 100%;
  margin-top: var(--margin-medium);
`;

const Footer = styled.footer`
  margin: auto;
  width: 100%;
`;

export default BlogFooter;
