'use client';
import clsx from 'clsx';
import type {FunctionComponent} from 'react';

const ContentLayout: FunctionComponent<{children: React.ReactNode}> = ({
  children,
  ...props
}) => {
  return (
    <article
      {...props}
      className={clsx(
        'm-auto mb-10 flex max-w-screen-md flex-col px-2',
        '[&_*_code]:bg-neutral-700 [&_*_code]:text-neutral-200 [&_*_code]:dark:bg-neutral-200 [&_*_code]:dark:text-neutral-700',
        '[&>pre]:my-3',
        '[&_blockquote>p]:pl-2',
        '[&>ul]:m-0',
        '[&:is(ol,ul)>li]:text-base [&:is(ol,ul)>li]:leading-5 [&_:is(ol,ul)>li]:ml-8',
        '[&>ol>li]:list-decimal [&>ul>li]:list-disc',
        '[&>ol]:m-0 [&>p]:mx-1 [&>p]:px-1 sm:[&>p]:mx-2 sm:[&>p]:px-2',
        '[&_:is(li,p,h2,h3,h4,h5,h6)_code]:whitespace-nowrap [&_:is(li,p,h2,h3,h4,h5,h6)_code]:rounded-[3px] [&_:is(li,p,h2,h3,h4,h5,h6)_code]:px-1 [&_:is(li,p,h2,h3,h4,h5,h6)_code]:font-roboto [&_:is(li,p,h2,h3,h4,h5,h6)_code]:text-[0.95rem]',
        '[&_:is(h2,h3,h4)_em]:text-[0.95em]',
        '[&_h4]:mt-4',
      )}
    >
      {children}
    </article>
  );
};

export default ContentLayout;
