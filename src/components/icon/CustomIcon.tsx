'use client';
import {useState} from 'react';
import {IconType} from '@react-icons/all-files';

export default function CustomIcon(sm: IconProps) {
  const [hover, setHover] = useState(false);

  return (
    <sm.icon
      size={sm.size || 32}
      className="icon hover:bg-white hover:rounded"
      style={{
        fill: hover ? sm.hoverColor : sm.color,
      }}
      title={sm.title}
      aria-label={sm.title}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    />
  );
}

export type SocialMediaProps = IconProps & {
  url: string;
};

export type IconProps = {
  size?: number;
  icon: IconType;
  title: string;
  color: string;
  hoverColor: string;
};
