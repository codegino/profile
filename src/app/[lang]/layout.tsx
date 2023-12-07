import React, {FC, PropsWithChildren} from 'react';
import Footer from '../../components/Footer';
import '../../../styles/tailwind.css';
import '../../styles/animations.css';
import '../../styles/custom.css';
import Header from '../../components/header/Header';
import {PropsWithLocale} from '../../types/server-component';

const layout: FC<PropsWithChildren<PropsWithLocale>> = async ({
  children,
  params: {lang},
}) => {
  return (
    <div>
      <Header />
      {children}
      <Footer lang={lang} />
    </div>
  );
};

export default layout;
