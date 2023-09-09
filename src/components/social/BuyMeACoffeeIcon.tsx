import React, {FC} from 'react';
import {SiBuymeacoffee} from '@react-icons/all-files/si/SiBuymeacoffee';
import NextLink from '../basic/NextLink';

const BuyMeACoffeeIcon: FC<{className?: string}> = ({className}) => {
  return (
    <NextLink
      href={bmac.url}
      target="_blank"
      aria-label={bmac.title}
      title={bmac.title}
      rel="noreferrer"
      className={className}
    >
      <SiBuymeacoffee
        size={25}
        className="icon  fill-[#fedc00] hover:fill-[#fffe22]"
      />
      <span aria-hidden className="hidden">
        {bmac.title}
      </span>
    </NextLink>
  );
};

const bmac = {
  url: 'https://l.carlogino.com/bmac',
  title: 'Buy me a coffee',
};

export default BuyMeACoffeeIcon;
