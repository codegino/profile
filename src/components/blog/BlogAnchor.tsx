import React, {FunctionComponent} from 'react';

const BlogAnchor: FunctionComponent = ({children, ...props}) => {
  return (
    <a
      className="underline-on-hover underline--dark text-primary-dark text-base font-bold"
      target="_blank"
      aria-label={children as string}
      rel="noopener noreferrer nofollow"
      title={children as string}
      {...props}
    >
      {children}
    </a>
  );
};

export default BlogAnchor;
