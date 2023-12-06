import type {HTMLAttributes} from 'react';

const BlockQuote = (props: HTMLAttributes<HTMLQuoteElement>) => {
  return (
    <blockquote
      className="m-0 p-2 my-4 mx-0  bg-neutral-50 dark:bg-neutral-900 ring-1 ring-neutral-200 dark:ring-nutral-800
      text-xl border-l-4 border-primary-300 border-b box-border"
      {...props}
    />
  );
};

export default BlockQuote;
