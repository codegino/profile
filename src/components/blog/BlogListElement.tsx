import React from 'react';

const BlogListElement = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLLIElement>) => <li {...props}>{children}</li>;

export default BlogListElement;
