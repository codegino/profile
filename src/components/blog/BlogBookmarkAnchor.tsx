// ia-hidden="true" tabIndex="-1" href="#" id="introduction"></a>
import React, {FunctionComponent} from 'react';

const BlogBookMark: FunctionComponent = ({...props}) => {
  return (
    <a aria-hidden="true" tabIndex={-1} href="#" target="_blank" {...props}></a>
  );
};

export default BlogBookMark;
