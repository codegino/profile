import type {HTMLAttributes} from 'react';

const BlogAnchor = ({
  children,
  ...props
}: HTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      className="underline-on-hover underline--dark text-primary-dark text-base font-semibold"
      target="_blank"
      aria-label={children as string}
      rel="noreferrer"
      title={children as string}
      {...props}
    >
      {children}
    </a>
  );
};

export default BlogAnchor;
