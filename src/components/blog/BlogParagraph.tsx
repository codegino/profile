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

      p > code {
        background-color: var(--color-light);
        padding: 0 var(--spacing-very-small);
        border: 1px solid var(--color-light-dark);
        border-radius: 2px;
        font-family: monospace;
      }
    `}</style>
    `
  </p>
);

export default BlogParagraph;
