import React from 'react';
import styled from '@emotion/styled';
import Image, {ImageProps} from 'next/image';
import {IGetPlaiceholderReturn} from 'plaiceholder';

export const BlurredImage = ({
  svg,
  img,
  alt,
  style,
  ...props
}: {style?: Pick<React.CSSProperties, 'height' | 'width'>} & Omit<
  ImageProps,
  'src'
> &
  Pick<IGetPlaiceholderReturn, 'svg' | 'img'>) => {
  return (
    <Container style={style}>
      {React.createElement(
        svg[0],
        {
          ...svg[1],
          style: {
            ...svg[1].style,
            transform: ['scale(1.5)', svg[1].style.transform].join(' '),
            filter: 'blur(40px)',
          },
        },
        svg[2].map(child =>
          React.createElement(child[0], {
            key: [child[1].x, child[1].y].join(),
            ...child[1],
          }),
        ),
      )}

      <Image {...img} {...props} alt={alt} />
    </Container>
  );
};

const Container = styled.div`
  display: block;
  overflow: hidden;
  position: relative;
  height: 100%;
  width: 100%;
`;
