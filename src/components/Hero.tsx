import React from 'react';
import {IGetPlaiceholderReturn} from 'plaiceholder';
import {Zoom, Fade} from 'react-awesome-reveal';
import {useScrollToView} from '../utils/scroll-to-view-hook';
import {BlurringImage} from './BlurringImage';
import {GuideArrow} from './GuideArrow';
import {BottomRightShape} from './extras/BottomRightShape';

export default function Hero({
  img,
  svg,
}: Pick<IGetPlaiceholderReturn, 'svg' | 'img'>) {
  const {scrollToContent} = useScrollToView('#greetings');

  return (
    <div className="overflow-hidden relative h-95vh w-full flex justify-center items-center">
      <BlurringImage
        alt="Hero photo"
        img={img}
        svg={svg}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority={true}
      />
      <div className="absolute flex flex-col items-center">
        <Fade cascade duration={1500} triggerOnce={true} delay={200}>
          <h2 className="text-white text-8xl xl:text-9xl text-center text-shadow">
            Hello World
          </h2>
          <p className="text-5xl text-white text-shadow">Welcome to my page!</p>
        </Fade>
      </div>
      <Zoom className="absolute z-10 bottom-8vh" triggerOnce delay={1900}>
        <GuideArrow onClick={scrollToContent} />
      </Zoom>
      <BottomRightShape />
    </div>
  );
}
