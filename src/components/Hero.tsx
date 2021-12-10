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
          <h2 className="text-white text-8xl xl:text-9xl text-center">
            Hello World
          </h2>
          <p className="text-5xl text-white">Welcome to my page!</p>
          <style jsx>{`
            h2,
            p {
              text-shadow: 5px 5px 2px rgba(0, 0, 0, 0.5);
            }
          `}</style>
        </Fade>
      </div>
      <Zoom className="absolute z-10 bottom-8vh" triggerOnce delay={1900}>
        <GuideArrow onClick={scrollToContent} />
      </Zoom>
      <BottomRightShape />
    </div>
  );
}
