'use client';
import type {IGetPlaiceholderReturn} from 'plaiceholder';
import {useScrollToView} from '../utils/scroll-to-view-hook';
import {GuideArrow} from './GuideArrow';
import {BottomRightShape} from './extras/BottomRightShape';
import Image from 'next/legacy/image';
import {useTranslation} from '../app/i18n/client';
import {useParams} from 'next/navigation';

export default function Hero({
  img,
  svg,
}: Pick<IGetPlaiceholderReturn, 'svg' | 'img'>) {
  const {scrollToContent} = useScrollToView('#greetings');

  const locale = useParams()?.lng;
  const {t} = useTranslation(locale, 'home');

  return (
    <div className="overflow-hidden relative h-[95vh] w-full flex justify-center items-center">
      <Image
        {...img}
        alt="black hole"
        title="black hole"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority={true}
      />
      <div className="absolute flex flex-col items-center sm:ml-[2rem] xl:ml-[2rem] 2xl:ml-[3rem]">
        <h2 className="text-white text-5xl xl:text-6xl text-center text-shadow">
          {t('hello')}
        </h2>
        <p className="text-3xl text-center text-white text-shadow">
          {t('welcome')}
        </p>
      </div>
      <div className="absolute z-10 bottom-[8vh]">
        <GuideArrow onClick={scrollToContent} />
      </div>
      <BottomRightShape />
    </div>
  );
}
