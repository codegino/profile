import React from 'react';
import Image from 'next/image';
import {useMediaQuery} from 'react-responsive';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

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
    <div className="text-center flex justify-center">
      <div>
        <Carousel
          infiniteLoop
          autoPlay
          interval={3000}
          showStatus={false}
          swipeable
          emulateTouch
          showThumbs={false}
        >
          {techStacks.map(techstack => {
            return (
              <div className="bg-light py-10" key={techstack.name}>
                {techstack.url ? (
                  <Image
                    unoptimized
                    loader={({src}) => src}
                    src={techstack.url}
                    layout="intrinsic"
                    height={isMediumDevice ? 500 : 350}
                    width={isMediumDevice ? 600 : 300}
                    alt={`${techstack.name} logo`}
                  />
                ) : null}
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}
