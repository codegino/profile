import React, {FunctionComponent} from 'react';
import styled from '@emotion/styled';
import {underlineOnHover} from '../../frontend-utils/animation-effects';

const BlogAnchor: FunctionComponent = props => {
  return <Container {...props} target="_blank" />;
};

const Container = styled.a`
  color: var(--color-primary-dark);

  ${underlineOnHover('var(--color-primary-dark)')}
`;

export default BlogAnchor;
