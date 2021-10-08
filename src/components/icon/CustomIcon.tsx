import React, {useState} from 'react';
import {IconType} from '@react-icons/all-files';

export default function CustomIcon(sm: IconProps) {
  const [hover, setHover] = useState(false);

  return (
    <sm.icon
      size={sm.size || 28}
      className="icon"
      style={{fill: hover ? sm.hoverColor : sm.color}}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    />
  );
}

export type SocialMediaProps = IconProps & {
  url: string;
  name: string;
};

export type IconProps = {
  size?: number;
  icon: IconType;
  color: string;
  hoverColor: string;
};
