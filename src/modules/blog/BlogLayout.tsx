import type {FunctionComponent} from 'react';

const Layout: FunctionComponent<{children: React.ReactNode}> = ({
  children,
  ...props
}) => {
  return (
    <article
      {...props}
      className="blog-layout m-auto px-2 mb-10 flex flex-col max-w-screen-md"
    >
      {children}
      <style jsx global>{`
        .blog-layout > pre {
          margin: var(--spacing-small) 0;
        }

        .blog-layout blockquote > p {
          padding-left: var(--spacing-small);
        }

        .blog-layout > ul {
          margin: 0;
        }

        .blog-layout li {
          list-style: disc;
          margin-left: 2rem;
          font-size: 1rem;
          line-height: 1.3;
        }

        .blog-layout > ol {
          margin: 0;
        }

        .blog-layout > p {
          padding: 0 var(--spacing-small);
          margin-left: var(--spacing-small);
        }

        .blog-layout li code,
        .blog-layout p code,
        .blog-layout h2 code,
        .blog-layout h3 code,
        .blog-layout h4 code,
        .blog-layout h5 code,
        .blog-layout h6 code {
          padding: 0 var(--spacing-very-small);
          border: 1px solid var(--color-primary-dark);
          border-radius: 2px;
          font-family: monospace;
        }

        .blog-layout h2 em,
        .blog-layout h3 em,
        .blog-layout h4 em,
        .blog-layout h5 em,
        .blog-layout h6 em {
          font-size: 0.75rem;
        }
      `}</style>
    </article>
  );
};

export default Layout;
