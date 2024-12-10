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
    <div className="relative m-auto flex h-[92vh] max-w-[2100px] justify-center overflow-hidden">
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
        className="text-shadow absolute left-8 top-2 flex max-w-4xl
          flex-col flex-wrap justify-start text-left sm:top-8"
      >
        {quote.map((word, i) => (
          <Zoom
            delay={i * 700 + i * i * 150}
            key={i}
            triggerOnce
            className="last:mt-8"
          >
            <p className="bg-transparent text-4xl lg:text-6xl">{word}</p>
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
