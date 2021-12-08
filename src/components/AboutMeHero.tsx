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
        alt="Hero photo"
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
          lg:top-3 lg:left-3 xl:top-4 xl:left-4"
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
              className="text-light
            text-3xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            "
            >
              {word}
              <style jsx>
                {`
                  p {
                    text-shadow: 1px 1px 2px var(--color-dark-dark);
                    text-shadow: 1px 10px 20px red;
                  }
                `}
              </style>
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
