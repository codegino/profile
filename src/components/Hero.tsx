import React from 'react';
import {IGetPlaiceholderReturn} from 'plaiceholder';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
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
    <div className="overflow-hidden relative h-[95vh] w-full flex justify-center items-center">
      <BlurringImage
        alt="black hole"
        title="black hole"
        img={img}
        svg={svg}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority={true}
      />
      <Fade cascade duration={1500} delay={200}>
        <div className="absolute flex flex-col items-center">
          <h2 className="text-white text-5xl xl:text-6xl text-center text-shadow">
            Hello World
          </h2>
          <p className="text-3xl text-center text-white text-shadow">
            Welcome to my page!
          </p>
        </div>
      </Fade>
      <Zoom delay={1900}>
        <div className="absolute z-10 bottom-[8vh]">
          <GuideArrow onClick={scrollToContent} />
        </div>
      </Zoom>
      <BottomRightShape />
    </div>
  );
}
