import {FaExternalLinkAlt} from '@react-icons/all-files/fa/FaExternalLinkAlt';
import {FaFish} from '@react-icons/all-files/fa/FaFish';
import {FaMusic} from '@react-icons/all-files/fa/FaMusic';
import {FaWind} from '@react-icons/all-files/fa/FaWind';
import {Fade} from 'react-awesome-reveal';
import {createTranslation} from '../../app/i18n/server';
import NextLink from '../basic/NextLink';
import SectionHeader from './SectionHeader';

const projects = [
  {
    key: 'larotune',
    name: 'LaroTune',
    url: 'https://www.larotune.com/',
    icon: FaMusic,
  },
  {
    key: 'breathing',
    name: 'Breathing Companion',
    url: 'https://exercise.larotune.com/breathing',
    icon: FaWind,
  },
  {
    key: 'tankably',
    name: 'Tankably',
    url: 'https://tankably.com',
    icon: FaFish,
  },
] as const;

export default async function SideProjects() {
  const {t} = await createTranslation('home');

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:py-20">
      <div
        aria-hidden
        className="bg-primary-200/20 dark:bg-primary-800/20 pointer-events-none absolute -bottom-24 left-[10%] size-72 rounded-full blur-3xl"
      />

      <Fade direction="up" triggerOnce>
        <SectionHeader
          kicker={t('sideProjects.kicker')}
          title={t('sideProjects.title')}
          id="side-projects"
        />
      </Fade>

      <div className="relative mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(({key, name, url, icon: Icon}) => (
          <Fade key={key} direction="up" triggerOnce className="h-full">
            <NextLink
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} - ${t(`sideProjects.${key}.description`)}`}
              className="group flex h-full flex-col gap-3 rounded-2xl border border-neutral-200 bg-white p-6 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-primary-900 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-primary-300"
            >
              <span
                aria-hidden
                className="flex size-12 items-center justify-center rounded-xl bg-primary-50 text-2xl text-primary-900 dark:bg-neutral-900 dark:text-primary-300"
              >
                <Icon />
              </span>
              <span className="flex items-center gap-2 text-xl font-bold">
                {name}
                <FaExternalLinkAlt
                  aria-hidden
                  className="text-sm opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                />
              </span>
              <span className="text-neutral-700 dark:text-neutral-300">
                {t(`sideProjects.${key}.description`)}
              </span>
            </NextLink>
          </Fade>
        ))}
      </div>
    </section>
  );
}
