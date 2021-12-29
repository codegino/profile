import type {HTMLAttributes} from 'react';

const BlogListElement = ({
  children,
  ...props
}: HTMLAttributes<HTMLLIElement>) => <li {...props}>{children}</li>;

export default BlogListElement;
