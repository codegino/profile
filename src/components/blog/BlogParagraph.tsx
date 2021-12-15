import React from 'react';

const BlogParagraph = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => <p {...props}>{children}</p>;

export default BlogParagraph;
