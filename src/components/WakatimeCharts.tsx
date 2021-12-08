import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import {Zoom} from 'react-awesome-reveal';

export default function WakatimeCharts() {
  return (
    <Container>
      <h2>
        My&nbsp;
        <Link href="https://wakatime.com/@codegino">
          <a
            target="_blank"
            aria-label="Wakatime profile"
            rel="noopener nofollow"
            data-tip="Link to my Wakatime profile"
          >
            Wakatime
          </a>
        </Link>
        &nbsp;activity
      </h2>
      <Zoom triggerOnce>
        <figure>
          <embed src="https://wakatime.com/share/@codegino/aa8c74ed-2174-445a-805d-e46a869c3b8b.svg"></embed>
        </figure>
      </Zoom>
      <Zoom triggerOnce>
        <figure>
          <embed src="https://wakatime.com/share/@codegino/e7ca5c4c-67a6-47fc-a3c6-e020cb97b66b.svg"></embed>
        </figure>
      </Zoom>
    </Container>
  );
}

const Container = styled.div`
  max-width: 60rem;
  width: 100%;
  margin: auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: var(--spacing-small) 0;

  > h2 {
    margin: 0;
    text-align: center;
  }

  a {
    color: var(--color-primary-dark);
    font-size: 1em;

    &:hover {
      text-decoration: underline;
    }
  }
`;
