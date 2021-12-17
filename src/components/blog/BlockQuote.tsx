import React from 'react';

const BlockQuote: React.FC = props => {
  return (
    <blockquote
      className="m-0 p-2 my-4 mx-0 font-block-quote bg-lightest
      text-xl border-l-4 border-primary-light border-b box-border"
      {...props}
    />
  );
};

export default BlockQuote;
