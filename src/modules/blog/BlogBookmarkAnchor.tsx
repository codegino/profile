import type {FunctionComponent} from 'react';

const BlogBookMark: FunctionComponent = ({...props}) => {
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
