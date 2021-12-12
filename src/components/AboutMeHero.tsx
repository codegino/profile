import React from 'react';
import {IGetPlaiceholderReturn} from 'plaiceholder';
import {Fade, Zoom} from 'react-awesome-reveal';
import {useScrollToView} from '../utils/scroll-to-view-hook';
import {BlurringImage} from './BlurringImage';
import {GuideArrow} from './GuideArrow';

const quote = ['With great power', 'comes great', 'responsibility', '- Batman'];

export default function AboutMeHero({
  img,
  svg,
}: Pick<IGetPlaiceholderReturn, 'svg' | 'img'>) {
  const {scrollToContent} = useScrollToView('#about-me-details');

  return (
    <div className="overflow-hidden relative h-95vh m-auto flex justify-center">
      <BlurringImage
        alt="black hole"
        img={img}
        svg={svg}
        layout="fill"
        objectFit="cover"
        objectPosition="right"
        priority={true}
      />
      <div
        className="absolute flex flex-col justify-start flex-wrap max-w-4xl
          right-1 top-1 text-right md:top-1 md:left-2 md:text-left
          lg:top-6 lg:left-6 xl:top-8 xl:left-8"
      >
        <Fade
          cascade={true}
          duration={1500}
          triggerOnce={true}
          className="z-10"
        >
          {quote.map((word, i) => (
            <p
              key={`${word}-${i}`}
              className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-shadow"
            >
              {word}
            </p>
          ))}
        </Fade>
      </div>
      <Zoom triggerOnce delay={2800} className="absolute bottom-8 z-10">
        <GuideArrow onClick={scrollToContent} />
      </Zoom>
    </div>
  );
}
