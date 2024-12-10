'use client';

import {useState} from 'react';
import type {CSSProperties} from 'react';
import clsx from 'clsx';
import Image, {type ImageProps} from 'next/image';
import type {BlurImageType} from '../utils/image-blur.utils';

type BlurringImageProps = {blurLevel?: number; transformScaleLevel?: number};

type Props = BlurringImageProps & {
  style?: CSSProperties;
} & Omit<ImageProps, 'src'> &
  Pick<BlurImageType, 'img' | 'svg'>;

export function BlurringImage({
  svg: [Svg, svgProps, rectangles],
  img,
  alt,
  blurLevel = 40,
  transformScaleLevel = 1.4,
  height = undefined,
  width = undefined,
  style,
  className = '',
  ...props
}: Props) {
  const [hasPlaceholder, setHasPlaceholder] = useState(true);
  img;
  return (
    <div
      className={clsx('relative size-full overflow-hidden', className)}
      style={style}
    >
      {hasPlaceholder && (
        <Svg
          {...svgProps}
          style={{
            ...svgProps.style,
            transform: `scale(${transformScaleLevel}) ${svgProps.style.transform}`,
            filter: `blur(${blurLevel}px)`,
          }}
        >
          {rectangles.map(([Rect, rectProps]) => (
            <Rect {...rectProps} key={`${rectProps.x} ${rectProps.y}`} />
          ))}
        </Svg>
      )}

      <Image
        {...img}
        {...props}
        height={height}
        width={width}
        alt={alt}
        className={className}
        onLoad={() => setHasPlaceholder(false)}
      />
    </div>
  );
}
