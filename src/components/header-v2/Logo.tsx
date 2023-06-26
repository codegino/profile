import React, {FunctionComponent} from 'react';
import clsx from 'clsx';
import Image from 'next/legacy/image';
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
        height={32}
        width={32}
        alt="CG"
        title="CG"
        aria-label="CG Logo"
        layout="fixed"
      />
    </RoundButton>
  );
};

export default Logo;
