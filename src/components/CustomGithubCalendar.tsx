import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import {Zoom} from 'react-awesome-reveal';
import GithubCalendar from 'react-github-calendar';
import {useMediaQuery} from 'react-responsive';
import ReactTooltip from 'react-tooltip';
import {mediaQuery} from '../utils/media-query';

export default function CustomGithubCalendar() {
  const is400PxAndUp = useMediaQuery({
    query: '(min-width: 400px)',
  });

  return (
    <Container>
      <h3 style={{margin: '0'}}>
        My&nbsp;
        <Link href="https://github.com/codegino/profile">
          <a style={{color: '#777'}} target="_blank">
            Github
          </a>
        </Link>
        &nbsp;Activity
      </h3>
      <GithubCalendar
        username="codegino"
        hideColorLegend={!is400PxAndUp}
        blockMargin={5}
        blockRadius={7}
        blockSize={14}
        style={{height: '100%', width: '100%'}}
        theme={{
          level0: '#F0F0F0',
          level1: '#C4EDDE',
          level2: '#7AC7C4',
          level3: '#48587e',
          level4: '#242b3c',
        }}
      >
        <ReactTooltip html />
      </GithubCalendar>
    </Container>
  );
}

const Container = styled(Zoom)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: var(--margin-small);
  padding: 0 0.5rem;
  overflow: auto;

  ${mediaQuery(450, `margin-bottom: var(--margin-medium)'`)}
`;
