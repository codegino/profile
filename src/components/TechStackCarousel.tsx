'use client';
import Image from 'next/image';
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
  return (
    <div className="flex justify-center overflow-hidden text-center">
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
              <div
                className="bg-light h-[300px] w-[40px] py-10"
                key={techstack.name}
              >
                {techstack.url ? (
                  <Image
                    loader={({src}) => src}
                    src={techstack.url}
                    fill={true}
                    alt={techstack.name}
                    title={techstack.name}
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
