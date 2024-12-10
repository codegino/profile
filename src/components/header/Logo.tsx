import React, {FunctionComponent} from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import RoundButton from '../basic/RoundButton';

const Logo: FunctionComponent<{onClick?: () => void; className?: string}> = ({
  onClick = () => {},
  className,
}) => {
  return (
    <RoundButton
      onClick={onClick}
      className={clsx(
        'mr-0 flex items-center justify-center rounded-full bg-white text-black',
        className,
      )}
    >
      <Image
        priority
        src="/assets/logo.svg"
        height={26}
        width={26}
        alt="CG"
        title="CG"
        aria-label="CG Logo"
      />
    </RoundButton>
  );
};

export default Logo;
