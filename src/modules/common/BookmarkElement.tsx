import type {HTMLAttributes} from 'react';

const BlogBookMark = (props: HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      aria-hidden="true"
      tabIndex={-1}
      aria-label={props.children as string}
      {...props}
    />
  );
};

export default BlogBookMark;
