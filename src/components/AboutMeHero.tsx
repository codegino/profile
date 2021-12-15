import React from 'react';
import {IGetPlaiceholderReturn} from 'plaiceholder';
import Zoom from 'react-reveal/Zoom';
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
    <div className="overflow-hidden relative h-[95vh] m-auto flex justify-center">
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
          <Zoom delay={i * 700 + i * i * 150} key={`${word}-${i}`}>
            <p className="text-white text-3xl md:text-5xl lg:text-6xl text-shadow">
              {word}
            </p>
          </Zoom>
        ))}
      </div>
      <Zoom delay={4000}>
        <div className="absolute bottom-8 z-10">
          <GuideArrow onClick={scrollToContent} />
        </div>
      </Zoom>
    </div>
  );
}
