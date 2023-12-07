'use client';
import type {FunctionComponent} from 'react';

const ContentLayout: FunctionComponent<{children: React.ReactNode}> = ({
  children,
  ...props
}) => {
  return (
    <article
      {...props}
      className="slide-layout m-auto px-2 mb-10 flex flex-col max-w-screen-md"
    >
      {children}
      <style jsx global>{`
        .slide-layout > pre {
          margin: var(--spacing-small) 0;
        }

        .slide-layout blockquote > p {
          padding-left: var(--spacing-small);
        }

        .slide-layout > ul {
          margin: 0;
        }

        .slide-layout ol > li,
        .slide-layout ul > li {
          margin-left: 2rem;
          font-size: 1rem;
          line-height: 1.3;
        }

        .slide-layout > ol > li {
          list-style: auto;
        }

        .slide-layout > ul > li {
          list-style: disc;
        }

        .slide-layout > ol {
          margin: 0;
        }

        .slide-layout > p {
          padding: 0 var(--spacing-small);
          margin-left: var(--spacing-small);
        }

        .slide-layout li code,
        .slide-layout p code,
        .slide-layout h2 code,
        .slide-layout h3 code,
        .slide-layout h4 code,
        .slide-layout h5 code,
        .slide-layout h6 code {
          padding: 0 0.125rem;
          border: 1px solid lightgray;
          border-radius: 4px;
          font-family: var(--font-roboto);
        }

        .slide-layout h2 em,
        .slide-layout h3 em,
        .slide-layout h4 em,
        .slide-layout h5 em,
        .slide-layout h6 em {
          font-size: 0.75rem;
        }
      `}</style>
    </article>
  );
};

export default ContentLayout;
