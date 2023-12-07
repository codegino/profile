'use client';
import React, {FC} from 'react';
import {FaFilePdf} from '@react-icons/all-files/fa/FaFilePdf';
import {FaFileWord} from '@react-icons/all-files/fa/FaFileWord';
import NextLink from '../../../components/basic/NextLink';
import CustomIcon from '../../../components/icon/CustomIcon';

const LinkWrapper: FC<{
  resumePdfUrl: string;
  resumeWordUrl: string;
}> = ({resumePdfUrl, resumeWordUrl}) => {
  return (
    <div className="absolute flex right-5 top-3 sm:top-24">
      <NextLink
        href={resumePdfUrl}
        target="_blank"
        title="Download PDF Version"
        aria-label="Download PDF Version"
        rel="noopener noreferrer nofollow"
      >
        <CustomIcon
          icon={FaFilePdf}
          size={40}
          color="#F40F02"
          title="Download PDF Version"
          hoverColor="red"
        />
        <span aria-hidden className="hidden">
          Download PDF Version
        </span>
      </NextLink>
      <NextLink
        href={resumeWordUrl}
        target="_blank"
        title="Download Word Version"
        aria-label="Download Word Version"
        rel="noopener noreferrer nofollow"
      >
        <CustomIcon
          icon={FaFileWord}
          size={40}
          color="#015299"
          title="Download Word Version"
          hoverColor="blue"
        />
        <span aria-hidden className="hidden">
          Download Word Version
        </span>
      </NextLink>
    </div>
  );
};

export default LinkWrapper;
