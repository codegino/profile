import React, {useState} from 'react';
import Image, {ImageProps} from 'next/image';
import {IGetPlaiceholderReturn} from 'plaiceholder';

type BlurringImageProps = {blurLevel?: number; transformScaleLevel?: number};

type Props = BlurringImageProps & {
  style?: React.CSSProperties;
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
  ...props
}: Props) {
  const [hasPlaceholder, setHasPlaceholder] = useState(true);

  return (
    <div className="relative overflow-hidden h-full w-full" style={style}>
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
        onLoadingComplete={() => setHasPlaceholder(false)}
      />
    </div>
  );
}
