import React from 'react';
import styled from '@emotion/styled';

type BlogMetadata = {
  title: string;
  author: string;
  date: string;
};

const BlogHeader: React.FC<BlogMetadata> = ({title, author, date}) => {
  return (
    <Container>
      <h1>{title}</h1>
      <h2>by: {author}</h2>
      <p>{date}</p>
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: var(--margin-big);
`;

export default BlogHeader;
