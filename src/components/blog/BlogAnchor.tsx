import React, {FunctionComponent} from 'react';

const BlogAnchor: FunctionComponent = ({...props}) => {
  return (
    <a
      className="underline-on-hover underline--dark text-primary-dark"
      target="_blank"
      {...props}
    />
  );
};

export default BlogAnchor;
