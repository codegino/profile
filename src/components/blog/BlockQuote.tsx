import React, {FunctionComponent} from 'react';

const BlockQuote: FunctionComponent = props => {
  return (
    <blockquote
      className="bg-light m-0 p-2 my-2 mx-0 font-block-quote
      text-xl border-l-4 border-primary-light border-b box-border
      "
      {...props}
    />
  );
};

export default BlockQuote;
