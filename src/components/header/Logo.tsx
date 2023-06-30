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
        'bg-white text-black rounded-full mr-0 flex justify-center items-center',
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
