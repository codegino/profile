'use client';

import {useScrollToView} from '../utils/scroll-to-view-hook';
import {GuideArrow} from './GuideArrow';
import {Zoom} from 'react-awesome-reveal';
import {BlurringImage} from './BlurringImage';
import type {BlurImageType} from '../utils/image-blur.utils';

const quote = [
  'With great power',
  'comes great',
  'responsibility',
  '- Superman',
];

export default function AboutMeHero({
  img,
  svg,
}: Pick<BlurImageType, 'svg' | 'img'>) {
  const {scrollToContent} = useScrollToView('#about-me-details');

  return (
    <div className="overflow-hidden relative h-[92vh] m-auto flex justify-center max-w-[2100px]">
      <BlurringImage
        alt="weird quote"
        title="weird quote"
        img={img}
        svg={svg}
        fill={true}
        className="object-cover object-center"
        priority={true}
      />
      <div
        className="absolute flex flex-col justify-start flex-wrap max-w-4xl
          top-2 sm:top-8 left-8 text-left text-shadow"
      >
        {quote.map((word, i) => (
          <Zoom
            delay={i * 700 + i * i * 150}
            key={i}
            triggerOnce
            className="last:mt-8"
          >
            <p className="text-4xl lg:text-6xl bg-transparent">{word}</p>
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
