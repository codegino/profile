import React from 'react';

const BlogParagraph = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p {...props}>
    {children}
    <style jsx>{`
      p {
        line-height: 1.5;
        margin-left: var(--spacing-small);
      }
    `}</style>
  </p>
);

export default BlogParagraph;
