'use client';

import type {IGetPlaiceholderReturn} from 'plaiceholder';
import {useScrollToView} from '../utils/scroll-to-view-hook';
import {GuideArrow} from './GuideArrow';
import {Zoom} from 'react-awesome-reveal';
import {BlurringImage} from './BlurringImage';

const quote = ['With great power', 'comes great', 'responsibility', '- Batman'];

export default function AboutMeHero({
  img,
  svg,
}: Pick<IGetPlaiceholderReturn, 'svg' | 'img'>) {
  const {scrollToContent} = useScrollToView('#about-me-details');

  return (
    <div className="overflow-hidden relative h-[95vh] m-auto flex justify-center bg-black">
      <BlurringImage
        alt="weird quote"
        title="weird quote"
        img={img}
        svg={svg}
        layout="fill"
        objectFit="cover"
        objectPosition="right"
        priority={true}
      />
      <div
        className="absolute flex flex-col justify-start flex-wrap max-w-4xl
          right-4 top-4 text-right md:top-4 md:left-8 md:text-left
          lg:top-10 lg:left-10"
      >
        {quote.map((word, i) => (
          <Zoom delay={i * 700 + i * i * 150} key={i} triggerOnce>
            <p className="text-white text-3xl md:text-5xl lg:text-6xl text-shadow bg-transparent">
              {word}
            </p>
          </Zoom>
        ))}
      </div>
      <div className="absolute bottom-8 z-10">
        <Zoom delay={4000} triggerOnce>
          <GuideArrow onClick={scrollToContent} />
        </Zoom>
      </div>
    </div>
  );
}
