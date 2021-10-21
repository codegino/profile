import React from 'react';
import styled from '@emotion/styled';
import {TwitterFollowButton} from 'mdx-embed';

const BlogFooter = () => {
  return (
    <Footer>
      <TwitterFollowButton username="code_gino" />
    </Footer>
  );
};

const Footer = styled.footer`
  margin: auto;
  padding-top: var(--padding-big);
`;

export default BlogFooter;
