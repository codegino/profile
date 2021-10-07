import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import {useMediaQuery} from 'react-responsive';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {mediaQuery} from '../utils/media-query';

export type TechStack = {
  name: string;
  icon?: string;
  url?: string;
};

type Props = {
  techStacks: TechStack[];
};

export default function TechStackCarousel({techStacks}: Props) {
  const isMediumDevice = useMediaQuery({
    query: '(min-width: 900px)',
  });

  return (
    <CarouselContainer>
      <div style={{maxWidth: '40rem'}}>
        <Carousel
          infiniteLoop
          autoPlay
          interval={3000}
          showStatus={false}
          swipeable
          emulateTouch
        >
          {techStacks.map(techstack => {
            return (
              <CarouselItem key={techstack.name}>
                {techstack.url ? (
                  <Image
                    loader={({src}) => src}
                    src={techstack.url}
                    layout="intrinsic"
                    height={isMediumDevice ? 500 : 350}
                    width={isMediumDevice ? 600 : 300}
                    alt={`${techstack.name} logo`}
                  />
                ) : null}
              </CarouselItem>
            );
          })}
        </Carousel>
      </div>
    </CarouselContainer>
  );
}

const CarouselContainer = styled.div`
  height: 25rem;
  text-align: center;
  display: flex;
  justify-content: center;

  ${mediaQuery(900, 'height: 30rem;')}
`;

const CarouselItem = styled.div`
  height: 25rem;
  background-color: var(--color-light-light);
  ${mediaQuery(900, 'height: 30rem;')}
`;
