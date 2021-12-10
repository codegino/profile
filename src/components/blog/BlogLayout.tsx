import React from 'react';

const Layout: React.FC = ({children, ...props}) => {
  return (
    <main
      {...props}
      className="blog-layout m-auto px-4 mb-10 flex flex-col max-w-screen-md"
    >
      {children}
      <style jsx global>{`
        .blog-layout > pre {
          margin: var(--spacing-small) 0;
        }

        .blog-layout > ul {
          margin: 0;
        }

        .blog-layout > ol {
          margin: 0;
        }

        .blog-layout > p {
          padding: 0 var(--spacing-small);
          font-size: 1.6rem;
        }

        .blog-layout li code,
        .blog-layout p code,
        .blog-layout h2 code,
        .blog-layout h3 code,
        .blog-layout h4 code,
        .blog-layout h5 code,
        .blog-layout h6 code {
          background-color: var(--color-light);
          padding: 0 var(--spacing-small);
          border: 1px solid var(--color-light-dark);
          border-radius: 2px;
          font-family: monospace;
        }

        .blog-layout h2 em,
        .blog-layout h3 em,
        .blog-layout h4 em,
        .blog-layout h5 em,
        .blog-layout h6 em {
          font-size: 1em;
        }
      `}</style>
    </main>
  );
};

export default Layout;
