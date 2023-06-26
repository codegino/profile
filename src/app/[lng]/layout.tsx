import React from 'react';
import Footer from '../../components/Footer-v2';
import '../../../styles/tailwind.css';
import '../../styles/_globals.css';
import '../../styles/animations.css';
import '../../styles/custom.css';
import Header from '../../components/header-v2/Header';

const layout = async ({children, params: {lng}}: any) => {
  return (
    <div>
      <Header />
      {children}
      <Footer lang={lng} />
    </div>
  );
};

export default layout;
