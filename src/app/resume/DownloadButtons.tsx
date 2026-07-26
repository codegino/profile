'use client';
import {FC} from 'react';
import {FaFilePdf} from '@react-icons/all-files/fa/FaFilePdf';
import {FaFileWord} from '@react-icons/all-files/fa/FaFileWord';
import NextLink from '../../components/basic/NextLink';
import {useTranslation} from '../i18n/client';

const DownloadButtons: FC<{
  resumePdfUrl: string;
  resumeWordUrl: string;
}> = ({resumePdfUrl, resumeWordUrl}) => {
  const {t} = useTranslation('resume');

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <NextLink
        href={resumePdfUrl}
        target="_blank"
        aria-label={t('downloadPdf')}
        title={t('downloadPdf')}
        rel="noopener noreferrer nofollow"
        className="group inline-flex items-center gap-2 rounded-lg bg-primary-900 px-5 py-2.5 font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg dark:bg-primary-300 dark:text-neutral-900"
      >
        <FaFilePdf className="transition-transform duration-200 group-hover:scale-110" />
        {t('downloadPdf')}
      </NextLink>
      <NextLink
        href={resumeWordUrl}
        target="_blank"
        aria-label={t('downloadWord')}
        title={t('downloadWord')}
        rel="noopener noreferrer nofollow"
        className="group inline-flex items-center gap-2 rounded-lg border-2 border-primary-900 px-5 py-2.5 font-semibold text-primary-900 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-900 hover:text-white dark:border-primary-300 dark:text-primary-300 dark:hover:bg-primary-300 dark:hover:text-neutral-900"
      >
        <FaFileWord className="transition-transform duration-200 group-hover:scale-110" />
        {t('downloadWord')}
      </NextLink>
    </div>
  );
};

export default DownloadButtons;
