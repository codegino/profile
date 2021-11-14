import React, {useState} from 'react';
import styled from '@emotion/styled';
import Image, {ImageProps} from 'next/image';
import {IGetPlaiceholderReturn} from 'plaiceholder';

type Props = {blurLevel?: number} & {
  style?: React.CSSProperties;
} & Omit<ImageProps, 'src'> &
  Pick<IGetPlaiceholderReturn, 'svg' | 'img'>;

export const BlurredImage = ({
  svg: [Svg, svgProps, rectangles],
  img,
  alt,
  style,
  blurLevel = 40,
  height = undefined,
  width = undefined,
  ...props
}: Props) => {
  const [hasPlaceholder, setHasPlaceholder] = useState(true);

  return (
    <Container style={style}>
      {hasPlaceholder && (
        <Svg
          {...svgProps}
          style={{
            ...svgProps.style,
            transform: `scale(1.4) ${svgProps.style.transform}`,
            filter: `blur(${blurLevel}px)`,
          }}
        >
          {rectangles.map(([Rect, rectProps]) => (
            <Rect {...rectProps} key={`${rectProps.x}${rectProps.y}`} />
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
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;
`;
