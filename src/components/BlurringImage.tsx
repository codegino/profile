import {useState} from 'react';
import type {CSSProperties} from 'react';
import clsx from 'clsx';
import Image, {ImageProps} from 'next/image';
import type {IGetPlaiceholderReturn} from 'plaiceholder';

type BlurringImageProps = {blurLevel?: number; transformScaleLevel?: number};

type Props = BlurringImageProps & {
  style?: CSSProperties;
} & Omit<ImageProps, 'src'> &
  Pick<IGetPlaiceholderReturn, 'svg' | 'img'>;

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
  return (
    <div
      className={clsx('relative overflow-hidden h-full w-full', className)}
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
        onLoadingComplete={() => setHasPlaceholder(false)}
      />
    </div>
  );
}
