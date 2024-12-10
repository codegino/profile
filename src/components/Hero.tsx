'use client';
import {useScrollToView} from '../utils/scroll-to-view-hook';
import {GuideArrow} from './GuideArrow';
import {BottomRightShape} from './extras/BottomRightShape';
import {useTranslation} from '../app/i18n/client';
import {Zoom} from 'react-awesome-reveal';
import {BlurringImage} from './BlurringImage';
import type {BlurImageType} from '../utils/image-blur.utils';

export default function Hero({img, svg}: Pick<BlurImageType, 'svg' | 'img'>) {
  const {scrollToContent} = useScrollToView('#greetings');

  const {t} = useTranslation('home');

  return (
    <div className="relative flex h-[95vh] w-full items-center justify-center overflow-hidden">
      <BlurringImage
        alt="black hole"
        title="black hole"
        img={img}
        svg={svg}
        fill={true}
        className="object-cover object-center"
        priority={true}
      />
      <div className="absolute flex flex-col items-center sm:ml-8 xl:ml-8 2xl:ml-12">
        <Zoom cascade duration={1500} delay={200} triggerOnce>
          <h2 className="text-shadow text-center text-5xl text-white xl:text-6xl">
            {t('hello')}
          </h2>
          <p className="text-shadow text-center text-3xl text-white">
            {t('welcome')}
          </p>
        </Zoom>
      </div>
      <div className="absolute bottom-[8vh] z-10">
        <Zoom delay={1900}>
          <GuideArrow onClick={scrollToContent} />
        </Zoom>
      </div>
      <BottomRightShape />
    </div>
  );
}
