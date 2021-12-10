import React from 'react';

const BlogListElement = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLLIElement>) => (
  <li {...props}>
    {children}
    <style jsx>{`
      li {
        line-height: 1.5;
        list-style: disc;
        margin-left: 4rem;
      }
    `}</style>
  </li>
);

export default BlogListElement;
