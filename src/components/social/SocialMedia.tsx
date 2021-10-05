import React from 'react';
import styled from '@emotion/styled';
import {IconType} from '@react-icons/all-files';
import {FaFacebookSquare} from '@react-icons/all-files/fa/FaFacebookSquare';
import {FaGithubSquare} from '@react-icons/all-files/fa/FaGithubSquare';
import {FaLinkedin} from '@react-icons/all-files/fa/FaLinkedin';
import {FaTwitterSquare} from '@react-icons/all-files/fa/FaTwitterSquare';
import Link from 'next/link';

export default function SocialMedia() {
  return (
    <Container>
      <nav>
        <ul>
          {socialMedia.map(sm => (
            <li key={sm.name}>
              <Link href={sm.url}>
                <a target="_blank">
                  <sm.icon />
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
}

type SocialMediaProps = {
  url: string;
  name: string;
  icon: IconType;
};

const socialMedia: SocialMediaProps[] = [
  {
    url: 'https://www.facebook.com/codegino',
    icon: FaFacebookSquare,
    name: 'facebook',
  },
  {
    url: 'https://github.com/codegino',
    icon: FaGithubSquare,
    name: 'github',
  },
  {
    url: 'https://www.linkedin.com/in/carlogino/',
    icon: FaLinkedin,
    name: 'linkedin',
  },
  {
    url: 'https://twitter.com/code_gino',
    icon: FaTwitterSquare,
    name: 'twitter',
  },
];

const Container = styled.div`
  border: 1px solid black;

  > nav {
    > ul {
      display: flex;
      margin: 0;
      padding: 0;
      list-style: none;

      > li {
        :not(:last-child) {
          margin-right: var(--margin-very-small);
        }
      }
    }
  }
`;
