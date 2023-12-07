'use client';
import type {FunctionComponent} from 'react';

// .group li code,
// .group p code,
// .group h2 code,
// .group h3 code,
// .group h4 code,
// .group h5 code,
// .group h6 code {
//   padding: 0 0.125rem;
//   border: 1px solid lightgray;
//   border-radius: 4px;
//   font-family: var(--font-roboto);
// }

const ContentLayout: FunctionComponent<{children: React.ReactNode}> = ({
  children,
  ...props
}) => {
  return (
    <article
      {...props}
      className="group m-auto px-2 mb-10 flex flex-col max-w-screen-md  [&_*_code]:bg-neutral-700 [&_*_code]:dark:bg-neutral-200 [&_*_code]:text-neutral-200 [&_*_code]:dark:text-neutral-700"
    >
      {children}
      <style jsx global>{`
        .group > pre {
          margin: var(--spacing-small) 0;
        }

        .group blockquote > p {
          padding-left: var(--spacing-small);
        }

        .group > ul {
          margin: 0;
        }

        .group ol > li,
        .group ul > li {
          margin-left: 2rem;
          font-size: 1rem;
          line-height: 1.3;
        }

        .group > ol > li {
          list-style: auto;
        }

        .group > ul > li {
          list-style: disc;
        }

        .group > ol {
          margin: 0;
        }

        .group > p {
          padding: 0 var(--spacing-small);
          margin-left: var(--spacing-small);
        }

        .group li code,
        .group p code,
        .group h2 code,
        .group h3 code,
        .group h4 code,
        .group h5 code,
        .group h6 code {
          padding: 0 0.3rem;
          border-radius: 3px;
          font-family: var(--font-roboto);
        }

        .group h2 em,
        .group h3 em,
        .group h4 em,
        .slide-layout h5 em,
        .slide-layout h6 em {
          font-size: 0.75rem;
        }
      `}</style>
    </article>
  );
};

export default ContentLayout;
