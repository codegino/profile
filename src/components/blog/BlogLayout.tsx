import React from 'react';

const Layout: React.FC = ({children, ...props}) => {
  return (
    <main
      {...props}
      className="blog-layout m-auto px-4 mb-10 flex flex-col max-w-screen-md"
    >
      {children}
    </main>
  );
};

export default Layout;
