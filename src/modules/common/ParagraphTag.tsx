import type {HTMLAttributes} from 'react';

const BlogParagraph = ({
  children,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) => <p {...props}>{children}</p>;

export default BlogParagraph;
