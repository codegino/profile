'use client';
import {useScrollToView} from '../utils/scroll-to-view-hook';
import {GuideArrow} from './GuideArrow';
import {BottomRightShape} from './extras/BottomRightShape';
import {useTranslation} from '../app/i18n/client';
import {useParams} from 'next/navigation';
import {Zoom} from 'react-awesome-reveal';
import {BlurringImage} from './BlurringImage';
import type {BlurImageType} from '../utils/image-blur.utils';

export default function Hero({img, svg}: Pick<BlurImageType, 'svg' | 'img'>) {
  const {scrollToContent} = useScrollToView('#greetings');

  const locale = useParams()?.lng;
  const {t} = useTranslation(locale, 'home');

  return (
    <div className="overflow-hidden relative h-[95vh] w-full flex justify-center items-center">
      <BlurringImage
        alt="black hole"
        title="black hole"
        img={img}
        svg={svg}
        fill={true}
        className="object-cover object-center"
        priority={true}
      />
      <div className="absolute flex flex-col items-center sm:ml-[2rem] xl:ml-[2rem] 2xl:ml-[3rem]">
        <Zoom cascade duration={1500} delay={200} triggerOnce>
          <h2 className="text-white text-5xl xl:text-6xl text-center text-shadow">
            {t('hello')}
          </h2>
          <p className="text-3xl text-center text-white text-shadow">
            {t('welcome')}
          </p>
        </Zoom>
      </div>
      <div className="absolute z-10 bottom-[8vh]">
        <Zoom delay={1900}>
          <GuideArrow onClick={scrollToContent} />
        </Zoom>
      </div>
      <BottomRightShape />
    </div>
  );
}
