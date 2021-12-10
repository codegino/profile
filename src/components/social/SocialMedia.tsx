import React from 'react';
import {FaDev} from '@react-icons/all-files/fa/FaDev';
import {FaFacebookSquare} from '@react-icons/all-files/fa/FaFacebookSquare';
import {FaGithubSquare} from '@react-icons/all-files/fa/FaGithubSquare';
import {FaLinkedin} from '@react-icons/all-files/fa/FaLinkedin';
import {FaTwitterSquare} from '@react-icons/all-files/fa/FaTwitterSquare';
import Link from 'next/link';
import CustomIcon, {SocialMediaProps} from '../icon/CustomIcon';

export default function SocialMedia() {
  return (
    <div>
      <nav>
        <ul className="flex">
          {socialMedia.map(sm => (
            <li key={sm.name} className="mr-1">
              <Link href={sm.url}>
                <a
                  target="_blank"
                  aria-label={sm.name}
                  rel="noopener nofollow"
                  title={sm.name}
                >
                  <CustomIcon {...sm} />
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

const socialMedia: SocialMediaProps[] = [
  {
    url: 'https://dev.to/codegino',
    icon: FaDev,
    name: 'dev',
    color: '',
    hoverColor: '#cccccc',
  },
  {
    url: 'https://github.com/codegino',
    icon: FaGithubSquare,
    name: 'github',
    color: '',
    hoverColor: '#cccccc',
  },
  {
    url: 'https://www.facebook.com/codegino',
    icon: FaFacebookSquare,
    name: 'facebook',
    color: '',
    hoverColor: '#1877f2',
  },
  {
    url: 'https://www.linkedin.com/in/carlogino/',
    icon: FaLinkedin,
    name: 'linkedin',
    color: '',
    hoverColor: '#0a66c2',
  },
  {
    url: 'https://twitter.com/code_gino',
    icon: FaTwitterSquare,
    name: 'twitter',
    color: '',
    hoverColor: '#1da1f2',
  },
];
